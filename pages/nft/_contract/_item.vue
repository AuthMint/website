<template>
  <div><!---->
    <Navbar/>
    <div class="pt-2 m-10 ">

      <div class="flex w-full h-screen items-center pt-10 bg-grey-lighter flex-col">
        <div class="grid grid-cols-12 gap-4 w-4/5">
          <div class="col-span-7">
            <img v-bind:src="this.item.image" alt="">
          </div>
          <div class="col-span-5">
            <div class="card bordered">

              <div class="card-body">
                <h2 class="card-title">Name</h2>
                <label>
                  {{ item.name }}
                </label>
                <br>
                <h2 class="card-title">Description</h2>
                <label>
                  {{ item.description }}
                </label>

                <div class="divider">Blockchain</div>

                <label>
                  NFT Owner: <a href="#"
                                class="link" target="_blank">{{ owner }}</a>

                </label>
                <br>
                <label>
                  NFT Contract: <a href="#"
                                   class="link" target="_blank">{{ nftAddress }}</a>

                </label>
                <br>
                <label>
                  NFT ID: <a href="#"
                             class="link" target="_blank">{{ itemId }}</a>

                </label>
                <br>
                <!--                <div class="alert alert-info">-->
                <!--                  <div class="flex-1">-->

                <!--                    <label>A NFT of this item will be created on blockchain. Transaction fee will be-->
                <!--                      paid during submission. </label>-->
                <!--                  </div>-->
                <!--                </div>-->

                <div class="m-5 text-right">
                  <button class="btn btn-secondary btn-outline" v-on:click="deposit">Transfer to Market</button>

                  <!--                                  <button class="btn btn-secondary" v-on:click="mint">Submit</button>-->

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
import amoABI from '~/static/contracts/Origin.json'
import marketABI from '~/static/contracts/Market.json'
import marketAddress from '~/static/contracts/address-Market.json'
import Navbar from "~/components/Navbar";


export default {
  components: {Navbar},
  data() {
    return {
      nftAddress: this.$route.params.contract,
      itemId: this.$route.params.item,
      item: {},
      owner: ''
    };
  },


  async mounted() {
    this.ethereumSupported = await this.isEthereumSupported();
    await this.getItemDetails()
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

    async getItemDetails() {
      let nftContract = new ethers.Contract(this.nftAddress, amoABI.abi, this.provider.getSigner());

      try {
        this.owner = await nftContract.ownerOf(this.itemId)
        let uri = await nftContract.tokenURI(this.itemId)
        let ipfsHash = uri.substring(uri.lastIndexOf('/') + 1)
        let ipfsLink = this.getIPFSlink(ipfsHash)

        let result = await this.$axios.get(ipfsLink)
        this.item = result.data
      } catch (e) {
        console.log(e)
      }
    },

    getIPFSlink(hash) {
      return `https://gateway.pinata.cloud/ipfs/${hash}`
    },

    async deposit() {
      let marketContract = new ethers.Contract(marketAddress.contract, marketABI.abi, this.provider.getSigner());
      console.log(marketContract)
      let transaction = await marketContract.deposit(this.nftAddress, this.itemId)
      // console.log(transaction)
    }


  }
}


</script>
