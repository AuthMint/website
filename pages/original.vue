<template>
    <div id="top" class="font-sans text-gray-800 bg-gray-100">
        <header class="header w-full flex flex-col justify-between">
            <nav class="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white sm:bg-transparent shadow sm:shadow-none">
                <div class="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
                    <a href="/" class="no-underline"><img src="/img/logo.png" alt="AWE.SOME Logo" class="h-12 py-1"></a>
                    <button id="menuBtn" class="hamburger block sm:hidden focus:outline-none" type="button"
                            v-on:click="navToggle"
                            aria-label="Show Menu"><span class="hamburger__top-bun"></span><span
                            class="hamburger__bottom-bun"></span></button>
                </div>
                <div id="menu"
                     class="w-full sm:w-auto self-end sm:self-center hidden sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0">
                    <!--<a class="text-gray-800 font-bold hover:text-purple-600 text-lg text-center w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1"-->
                    <!--href="#about">About</a> <a-->
                    <!--class="text-gray-800 font-bold hover:text-purple-600 text-lg text-center w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1"-->
                    <!--href="#features">Features</a> -->
                    <a id="follow" href="https://twitter.com/authmint"
                       class="hidden sm:inline-block text-gray-800 font-bold hover:text-purple-600 text-lg sm:w-auto sm:px-4 sm:py-1 cursor-pointer"
                       tabindex="0">Twitter</a>

                    <!--<a-->
                    <!--class="text-gray-800 border border-indigo-800 text-lg bg-gray-100 rounded-full w-auto no-underline text-center sm:text-left hover:border-purple-600 hover:text-purple-600 hover:bg-white hover:shadow-md px-6 py-1 my-2 sm:my-0 sm:ml-4"-->
                    <!--href="#register">Register Now</a>-->

                </div>
            </nav>
        </header>
        <main>
            <div id="about" class="w-full min-h-screen flex flex-col justify-center items-center py-12">
                <div class="self-center text-center w-full sm:w-2/3 xl:w-1/2 px-4 sm:px:0"><h2
                        class="font-bold tracking-wider text-gray-800 text-4xl mb-4">AWE.SOME Heading</h2>
                    <div class="font-light text-black text-xl">
                        <div>
                            Is Ethereum Supported : {{ ethereumSupported }}
                            <button @click="contractConnect">
                                Connect to Smart Contract
                            </button>
                        </div>

                    </div>
                    <img class="my-12 max-w-full mx-auto" src="/img/undraw_asset_selection_ix3v.svg" alt="AWE.SOME">
                </div>
                <div class="flex flex-row w-full justify-center"><a
                        class="px-10 py-2 text-gray-200 bg-purple-600 rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red"
                        href="#features">See How it Works</a></div>
            </div>

        </main>


    </div>

</template>

<script>
    import {ethers} from "ethers";
    import marketABI from '~/static/contracts/Market.json'
    import marketAddress from '~/static/contracts/address-Market.json'

    export default {
        data() {
            return {
                marketAddress: marketAddress.contract, // Contract Address.
                ethereumSupported: false,
                provider:null
            };
        },


        async mounted() {
            this.ethereumSupported = await this.isEthereumSupported();
            console.log(this.ethereumSupported)
            console.log(ethers)
            console.log(marketABI)
        },

        methods: {
            async contractConnect() {
                if (this.isEthereumSupported()) {
                    // do something..
                    let market = new ethers.Contract(this.marketAddress, marketABI.abi,this.provider);
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
