<template>
  <div><!---->
    <Navbar/>
    <div class="pt-2 m-10">
      <div class="w-full flex justify-end	">
        <router-link to="/wallet/create">
          <button class="btn btn-primary" v-if="!loading">
            Create NFT
          </button>
        </router-link>
      </div>
      <button class="btn btn-primary" v-if="loading">
        Loading...
      </button>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-4" v-if="!loading">

        <div class="card bordered" v-for="item in items" :key="item.image">
          <div class="w-full aspect-w-1 aspect-h-1 "><img v-bind:src="getIPFSlink(item.imageIpfs)"
                                                          class="object-cover min-w-full min-h-full h-full mx-auto ">
          </div>
          <div class="card-body"><h2 class="card-title">{{ item.name }}</h2>
            <p>
              {{ item.description }}
            </p>
            <!--            <div class="card-actions">-->
            <!--              <div class="badge badge-ghost">Article</div>-->
            <!--              <div class="badge badge-ghost">Photography</div>-->
            <!--            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {ethers} from "ethers";
import marketABI from '~/static/contracts/Market.json'
import marketAddress from '~/static/contracts/address-Market.json'
import amoAddress from '~/static/contracts/address-Origin.json'
import amoABI from '~/static/contracts/Origin.json'
import Navbar from "../../components/Navbar";


export default {
  components: {Navbar},
  data() {
    return {
      amoAddress: amoAddress.contract,
      marketAddress: marketAddress.contract, // Contract Address.
      ethereumSupported: false,
      provider: null,
      loading: true,
      account: null,
      items: [],
    };
  },


  async mounted() {

    this.ethereumSupported = await this.isEthereumSupported();
    console.log(this.ethereumSupported)
    console.log(ethers)
    console.log(marketABI)
    let accounts = await this.provider.listAccounts()
    this.account = accounts[0]
    let amo = new ethers.Contract(this.amoAddress, amoABI.abi, this.provider.getSigner());
    let balance = await amo.balanceOf(this.account)
    for (let i = 0; i < balance; i++) {
      console.log(i)
      let item = await amo.tokenOfOwnerByIndex(this.account, i)
      let uri = await amo.tokenURI(item)
      console.log(item)
      console.log(uri)
      let ipfsHash = uri.substring(uri.lastIndexOf('/') + 1)
      let itemDetails = await this.$axios.get(this.getIPFSlink(ipfsHash))
      this.items.push(itemDetails.data)
    }
    console.log(this.items)
    this.loading = false
  },

  methods: {
    getIPFSlink(hash) {
      return `https://ipfs.io/ipfs/${hash}`
    },
    async contractConnect() {
      if (this.isEthereumSupported()) {
        // do something..
        let market = new ethers.Contract(this.marketAddress, marketABI.abi, this.provider);
        console.log(market)
        let offers = await market.name()
        console.log(offers)

      }
    },
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

    navToggle: function () {
      let btn = document.getElementById('menuBtn');
      let nav = document.getElementById('menu');

      btn.classList.toggle('open');
      nav.classList.toggle('flex');
      nav.classList.toggle('hidden');
    },

    mint: async function () {
      let amo = new ethers.Contract(this.amoAddress, amoABI.abi, this.provider.getSigner());
      let result = await amo.mintOrigin('ipfs://QmNvSpkovzy8Rb8dcJYCLB16RE6if4MenuyxEV6RgY3Nai')
      console.log(result)
    },


  }
}


// window.addEventListener('scroll', function () {
//     let btt = document.getElementById('btt');
//
//     if (window.scrollY > 1080) {
//         btt.classList.remove('hidden');
//         btt.classList.add('block');
//     } else {
//         btt.classList.add('hidden');
//         btt.classList.remove('block');
//     }
// });


</script>
