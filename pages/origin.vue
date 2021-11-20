<template>
  <div><!---->
    <Navbar/>
    <div class="pt-2 m-10 ">

      <div class="flex w-full h-screen items-center pt-10 bg-grey-lighter flex-col" >
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


    </div>
  </div>

</template>

<script>

import {ethers} from "ethers";
import amoAddress from '~/static/contracts/address-Origin.json'
import amoABI from '~/static/contracts/Origin.json'
import Navbar from "../components/Navbar";


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
