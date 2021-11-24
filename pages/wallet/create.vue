<template>
  <div><!---->
    <Navbar/>
    <div class="pt-2 m-10 ">

      <ul class="w-full steps">
        <li class="step" v-bind:class="{ 'step-primary': step==1||step==2||step==3||step==4}">Upload</li>
        <li class="step" v-bind:class="{ 'step-primary': step==2||step==3||step==4}">Describe</li>
        <li class="step" v-bind:class="{ 'step-primary': step==3||step==4 }">Submit</li>
        <li class="step" v-bind:class="{ 'step-primary': step==4 }">Done</li>

      </ul>

      <div class="flex w-full h-screen items-center justify-center bg-grey-lighter" v-if="step==1">

        <div>
          <label class="btn btn-xs md:btn-sm lg:btn-md xl:btn-lg" v-if="!fileUploading">
            <span class="mt-2 text-base leading-normal">Select a file</span>
            <input type="file" class="hidden" @change="uploadFile( $event )" />
          </label>

          <label class="btn btn-lg loading" v-if="fileUploading">Uploading...</label>

        </div>
      </div>
      <div class="flex w-full h-screen items-center justify-center bg-grey-lighter  flex-col" v-if="step==2">

        <div class="w-1/3">
          <div class="alert alert-success">
            <div class="flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   class="w-6 h-6 mx-2 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
              </svg>
              <label>File uploaded: <a :href="original.image"
                                       class="link" target="_blank">{{ fileHash }}</a> </label>
            </div>
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Title/Name</span>
            </label>
            <input type="text" class="input input-primary input-bordered" v-model="original.name"
                   v-bind:disabled="metaUploading">
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Description</span>
            </label>
            <textarea class="textarea h-24 textarea-bordered textarea-primary"
                      v-bind:disabled="metaUploading"
                      placeholder="Describe your item" v-model="original.description"></textarea>
          </div>
          <div class="m-5 text-center" v-if="metaUploading">
            <button class="btn btn-secondary" disabled>Uploading...</button>

          </div>
          <div class="m-5 text-center" v-if="!metaUploading">
            <button class="btn btn-secondary btn-outline" v-on:click="step=1">Back</button>
            <button class="btn btn-secondary" v-on:click="uploadMeta">Next</button>

          </div>
        </div>

      </div>
      <div class="flex w-full h-screen items-center pt-10 bg-grey-lighter flex-col" v-if="step==3">
        <div class="grid grid-cols-12 gap-4 w-4/5">
          <div class="col-span-7">
            <img v-bind:src="getIPFSlink(fileHash)" alt="">
          </div>
          <div class="col-span-5">
            <div class="card bordered">

              <div class="card-body">
                <h2 class="card-title">Name</h2>
                <label>
                  {{ original.name }}
                </label>
                <br>
                <h2 class="card-title">Description</h2>
                <label>
                  {{ original.description }}
                </label>

                <div class="divider">Blockchain</div>


                <label>
                  File uploaded: <a :href="getIPFSlink(fileHash)"
                                    class="link" target="_blank">{{ fileHash }}</a>

                </label>
                <br>
                <label>
                  Meta uploaded: <a :href="getIPFSlink(metaHash)"
                                    class="link" target="_blank">{{ metaHash }}</a>

                </label>
                <br>
                <div class="alert alert-info">
                  <div class="flex-1">

                    <label>A NFT of this item will be created on blockchain. Transaction fee will be
                      paid during submission. </label>
                  </div>
                </div>

                <div class="m-5 text-right">
                  <button class="btn btn-secondary btn-outline" v-on:click="step=2">Back</button>

                  <button class="btn btn-secondary" v-on:click="mint">Submit</button>

                </div>
              </div>

            </div>


          </div>
        </div>


      </div>

      <div class="flex w-full h-screen items-center justify-center bg-grey-lighter flex-col" v-if="step==4">
        <div v-if="!transactionDone">
          Waiting for transaction to be confirmed...
        </div>
        <div v-if="transactionDone">
          <div class="card bordered">

            <div class="card-body">
              <div class="divider">NFT Certificate</div>
              <br>
              <label>
                NFT ID: {{ amoAddress }}#{{ nftItemId }}

              </label>
              <br>
              <label>
                Owner: {{ transaction.from }}

              </label>
              <br>
              <label>
                Transaction: <a :href="'https://etherscan.io/tx/'+transaction.hash"
                                class="link" target="_blank">{{ transaction.hash }}</a>
              </label>
              <br>
              <div class="m-5 text-right">
                <nuxt-link to="/wallet">

                <button class="btn btn-secondary btn-outline" v-on:click="step=2">Back to wallet
                  </button>
                </nuxt-link>

                <button class="btn btn-secondary" v-on:click="mint">View</button>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import {ethers} from "ethers";
import amoAddress from '~/static/contracts/address-Origin.json'
import amoABI from '~/static/contracts/Origin.json'
import Navbar from "../../components/Navbar";


export default {
  components: {Navbar},
  data() {
    return {
      amoAddress: amoAddress.contract,
      step: 1,
      fileUploading: false,
      metaUploading: false,
      transaction: null,
      transactionHash: null,
      transactionDone: false,
      fileHash: 'QmaCZSGF6Xg3hLJoMKJq7e8FnAVBmsqQ2u9xDdgRZTDbEL',
      metaHash: '',
      original: {},
      nftItemId: 0,
      account: null

    };
  },


  async mounted() {
    this.ethereumSupported = await this.isEthereumSupported();
    console.log(this.ethereumSupported)


  },

  methods: {
    async isEthereumSupported() {
      if (window.ethereum) {

        try {
          // Request account access
          await window.ethereum.enable();
          console.log("This browser is supported for ethereum");
          this.provider = new ethers.providers.Web3Provider(window.ethereum)


          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      // Non-decentralized app browsers...
      else {
        console.log(
            "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
    },

    uploadFile() {
      this.fileUploading = true;
      this.file = event.target.files[0];

      let formData = new FormData();
      formData.append('file', this.file);

      let that = this
      this.$axios.post('/api/upload/file',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      ).then(function (result) {
        that.fileUploading = false;
        that.fileHash = result.data.IpfsHash
        that.original.image = that.getIPFSlink(that.fileHash)
        that.original.imageIpfs = that.fileHash
        that.step = 2

      })
          .catch(function () {
            console.log('FAILURE!!');
            that.fileUploading = false;

          });
    },

    getIPFSlink(hash) {
      return `https://gateway.pinata.cloud/ipfs/${hash}`
    },

    uploadMeta() {
      let that = this
      this.metaUploading = true
      this.$axios.post('/api/upload/meta', this.original
      ).then(function (result) {
        that.metaUploading = false;
        that.metaHash = result.data.IpfsHash
        that.step = 3
      })
          .catch(function () {
            console.log('FAILURE!!');
            that.metaUploading = false;

          });
    },
    async mint() {
      let accounts = await this.provider.listAccounts()
      this.account = accounts[0]
      try {
        let amo = new ethers.Contract(this.amoAddress, amoABI.abi, this.provider.getSigner());
        let result = await amo.mintOrigin('ipfs://' + this.metaHash)
        this.transactionHash = result.hash
        this.step = 4
        this.parseTransaction()
      } catch (e) {
        console.log(e)
      }
    },

    async parseTransaction() {
      let that = this
      let intervalId = setInterval(async () => {
        let transaction = await that.provider.getTransaction(that.transactionHash)

        if (transaction.confirmations) {
          clearInterval(intervalId)

          that.transaction = transaction

          //TODO: a better way to parse log and get item id
          let amo = new ethers.Contract(this.amoAddress, amoABI.abi, this.provider.getSigner());
          let topic = ethers.utils.id("mintOrigin(string memory)");

          let filter = {
            address: this.amoAddress,
            fromBlock: transaction.blockNumber,
            toBlock: 'latest',
            // topics: [ topic ]
          }

          this.provider.getLogs(filter).then((result) => {
            this.nftItemId = parseInt(result[0].topics[3], 16)
            that.transactionDone = true

          })


        }

      }, 1000)


    }
  }
}


</script>
