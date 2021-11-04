<template>
    <div id="top" class="font-sans text-gray-800 bg-gray-100">
        <header class="header w-full min-h-screen flex flex-col justify-between">
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
            <div class="flex flex-col justify-center h-full py-12">
                <div class="self-center items-center flex flex-col sm:flex-row w-full md:w-5/6 xl:w-2/3 px-4 sm:px-0">
                    <div class="w-full text-center sm:text-left sm:w-1/2 py-12 sm:px-8"><h1
                            class="tracking-wide text-purple-600 text-2xl mb-6">Monetize: <span
                            class="text-gray-800 font-bold tracking tracking-widest">digital assets</span></h1>
                        <h2 class="font-bold tracking-widest text-4xl">Authorize your:<span
                                class="content__container block font-light text-browngray text-2xl my-6"><ul
                                class="content__container__list">
                            <li class="content__container__list__item xl:pl-3">Photography</li>
                            <li class="content__container__list__item xl:pl-3">Design</li><li
                                class="content__container__list__item xl:pl-3">Music</li><li
                                class="content__container__list__item xl:pl-3">Video</li><li
                                class="content__container__list__item xl:pl-3">Avatar</li><li
                                class="content__container__list__item xl:pl-3">Collection</li><li
                                class="content__container__list__item xl:pl-3">Software</li></ul></span></h2>
                        <h2 class="font-bold tracking-widest text-4xl">Be used in: <span
                                class="content__container block font-light text-browngray text-2xl my-6"><ul
                                class="content__container__list"><li class="content__container__list__item xl:pl-3">Press</li><li
                                class="content__container__list__item xl:pl-3">Website/App</li><li
                                class="content__container__list__item xl:pl-3">Commercial videos</li><li
                                class="content__container__list__item xl:pl-3">Marketing Campaign</li><li
                                class="content__container__list__item xl:pl-3">Gaming</li><li
                                class="content__container__list__item xl:pl-3">Movie</li><li
                                class="content__container__list__item xl:pl-3">Community</li></ul></span>
                            <p class="font-bold tracking-widest text-4xl">with NFT licenses</p></h2>
                    </div>
                    <div class="w-full sm:w-1/2"><img src="/img/undraw_Friends_online_re_r7pq.svg"
                                                      alt="AWE.SOME header"></div>
                </div>
            </div>
            <div class="flex flex-row w-full justify-center pb-12"><a
                    class="px-10 py-2 text-gray-200 bg-purple-600 rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red"
                    href="#about">Wait for more Information</a></div>
        </header>
        <!--<main>-->
        <!--<div id="about" class="w-full min-h-screen flex flex-col justify-center items-center py-12">-->
        <!--<div class="self-center text-center w-full sm:w-2/3 xl:w-1/2 px-4 sm:px:0"><h2-->
        <!--class="font-bold tracking-wider text-gray-800 text-4xl mb-4">AWE.SOME Heading</h2>-->
        <!--<div class="font-light text-black text-xl"><p>Maecenas pulvinar ultricies dolor, vitae sagittis nunc-->
        <!--aliquam non. Cras vitae eros mi. Pellentesque ac orci mi. Ut dignissim tincidunt ex id-->
        <!--tincidunt. Vivamus vitae erat vel tellus condimentum consectetur.</p></div>-->
        <!--<img class="my-12 max-w-full mx-auto" src="/img/undraw_asset_selection_ix3v.svg" alt="AWE.SOME">-->
        <!--</div>-->
        <!--<div class="flex flex-row w-full justify-center"><a-->
        <!--class="px-10 py-2 text-gray-200 bg-purple-600 rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red"-->
        <!--href="#features">See How it Works</a></div>-->
        <!--</div>-->
        <!--<div id="features" class="w-full min-h-screen flex flex-col justify-center items-center bg-blue-900 py-12">-->
        <!--<div class="self-center text-center w-full sm:w-2/3 xl:w-1/2 px-4 sm:px:0"><h2-->
        <!--class="tracking-wide text-blue-200 font-bold text-4xl mb-4">Most AWE.SOME Features</h2>-->
        <!--<div class="font-light text-gray-200 text-xl mb-6"><p>Pellentesque ullamcorper fringilla odio at-->
        <!--pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla mattis erat dui, ut-->
        <!--tempor lectus dictum id.</p></div>-->
        <!--</div>-->
        <!--<div class="self-center w-full xl:w-4/5 flex flex-col sm:flex-row flex-wrap px-4 xl:px:0">-->
        <!--<div class="w-full sm:w-1/2 flex flex-row flex-no-wrap hover:shadow-lg hover:bg-blue-800 hover:bg-opacity-50 px-4 sm:px-8 py-6 sm:py-12">-->
        <!--<div class="w-1/3 xl:w-1/4"><img src="/img/features/icon1.svg" alt="AWE.SOME Feature One"-->
        <!--class="w-16 block sm:mx-auto"></div>-->
        <!--<div class="w-2/3 xl:w-3/4"><h3-->
        <!--class="tracking-wide text-purple-300 font-bold text-2xl uppercase mb-2">AWE.SOME Feature-->
        <!--One</h3>-->
        <!--<div class="font-light text-gray-200 text-lg"><p>Maecenas pulvinar ultricies dolor, vitae-->
        <!--sagittis nunc aliquam non. Cras vitae eros mi. Pellentesque ac orci mi. Ut dignissim-->
        <!--tincidunt ex id tincidunt.</p></div>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="w-full sm:w-1/2 flex flex-row flex-no-wrap hover:shadow-lg hover:bg-blue-800 hover:bg-opacity-50 px-4 sm:px-8 py-6 sm:py-12">-->
        <!--<div class="w-1/3 xl:w-1/4"><img src="/img/features/icon2.svg" alt="AWE.SOME Feature Two"-->
        <!--class="w-16 block sm:mx-auto"></div>-->
        <!--<div class="w-2/3 xl:w-3/4"><h3-->
        <!--class="tracking-wide text-purple-300 font-bold text-2xl uppercase mb-2">AWE.SOME Feature-->
        <!--Two</h3>-->
        <!--<div class="font-light text-gray-200 text-lg"><p>Maecenas pulvinar ultricies dolor, vitae-->
        <!--sagittis nunc aliquam non. Cras vitae eros mi. Pellentesque ac orci mi. Ut dignissim-->
        <!--tincidunt ex id tincidunt.</p></div>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="w-full sm:w-1/2 flex flex-row flex-no-wrap hover:shadow-lg hover:bg-blue-800 hover:bg-opacity-50 px-4 sm:px-8 py-6 sm:py-12">-->
        <!--<div class="w-1/3 xl:w-1/4"><img src="/img/features/icon3.svg" alt="AWE.SOME Feature Three"-->
        <!--class="w-16 block sm:mx-auto"></div>-->
        <!--<div class="w-2/3 xl:w-3/4"><h3-->
        <!--class="tracking-wide text-purple-300 font-bold text-2xl uppercase mb-2">AWE.SOME Feature-->
        <!--Three</h3>-->
        <!--<div class="font-light text-gray-200 text-lg"><p>Maecenas pulvinar ultricies dolor, vitae-->
        <!--sagittis nunc aliquam non. Cras vitae eros mi. Pellentesque ac orci mi. Ut dignissim-->
        <!--tincidunt ex id tincidunt.</p></div>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="w-full sm:w-1/2 flex flex-row flex-no-wrap hover:shadow-lg hover:bg-blue-800 hover:bg-opacity-50 px-4 sm:px-8 py-6 sm:py-12">-->
        <!--<div class="w-1/3 xl:w-1/4"><img src="/img/features/icon4.svg" alt="AWE.SOME Feature Four"-->
        <!--class="w-16 block sm:mx-auto"></div>-->
        <!--<div class="w-2/3 xl:w-3/4"><h3-->
        <!--class="tracking-wide text-purple-300 font-bold text-2xl uppercase mb-2">AWE.SOME Feature-->
        <!--Four</h3>-->
        <!--<div class="font-light text-gray-200 text-lg"><p>Maecenas pulvinar ultricies dolor, vitae-->
        <!--sagittis nunc aliquam non. Cras vitae eros mi. Pellentesque ac orci mi. Ut dignissim-->
        <!--tincidunt ex id tincidunt.</p></div>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="w-full sm:w-1/2 flex flex-row flex-no-wrap hover:shadow-lg hover:bg-blue-800 hover:bg-opacity-50 px-4 sm:px-8 py-6 sm:py-12">-->
        <!--<div class="w-1/3 xl:w-1/4"><img src="/img/features/icon5.svg" alt="AWE.SOME Feature Five"-->
        <!--class="w-16 block sm:mx-auto"></div>-->
        <!--<div class="w-2/3 xl:w-3/4"><h3-->
        <!--class="tracking-wide text-purple-300 font-bold text-2xl uppercase mb-2">AWE.SOME Feature-->
        <!--Five</h3>-->
        <!--<div class="font-light text-gray-200 text-lg"><p>Maecenas pulvinar ultricies dolor, vitae-->
        <!--sagittis nunc aliquam non. Cras vitae eros mi. Pellentesque ac orci mi. Ut dignissim-->
        <!--tincidunt ex id tincidunt.</p></div>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="w-full sm:w-1/2 flex flex-row flex-no-wrap hover:shadow-lg hover:bg-blue-800 hover:bg-opacity-50 px-4 sm:px-8 py-6 sm:py-12">-->
        <!--<div class="w-1/3 xl:w-1/4"><img src="/img/features/icon6.svg" alt="AWE.SOME Feature Six"-->
        <!--class="w-16 block sm:mx-auto"></div>-->
        <!--<div class="w-2/3 xl:w-3/4"><h3-->
        <!--class="tracking-wide text-purple-300 font-bold text-2xl uppercase mb-2">AWE.SOME Feature-->
        <!--Six</h3>-->
        <!--<div class="font-light text-gray-200 text-lg"><p>Maecenas pulvinar ultricies dolor, vitae-->
        <!--sagittis nunc aliquam non. Cras vitae eros mi. Pellentesque ac orci mi. Ut dignissim-->
        <!--tincidunt ex id tincidunt.</p></div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="self-center text-center w-full sm:w-1/3 px-4 sm:px:0"><h3-->
        <!--class="font-bold tracking-widest text-blue-200 text-2xl my-6">...and so much more!</h3></div>-->
        <!--<div class="flex flex-row w-full justify-center pt-6"><a-->
        <!--class="px-10 py-2 text-gray-200 bg-purple-600 rounded-full shadow-md text-lg hover:bg-gray-800 hover:border-red"-->
        <!--href="#register">Register Now</a></div>-->
        <!--</div>-->
        <!--<div id="register" class="w-full min-h-screen flex flex-col justify-center items-center bg-gray-800">-->
        <!--<div class="self-center text-center w-full xl:w-1/3 px-4 sm:px:0"><h2-->
        <!--class="font-bold tracking-widest text-gray-200 text-4xl mb-4">Registration</h2>-->
        <!--<div class="font-light text-gray-400 text-xl"><p>Maecenas pulvinar ultricies dolor, vitae sagittis-->
        <!--nunc aliquam non. Cras vitae eros mi.</p></div>-->
        <!--<form class="w-full max-w-lg my-20 mx-auto" action="#" method="post" id="registration-form"-->
        <!--target="_blank" validate="">-->
        <!--<div class="flex items-center border-b border-purple-600 py-2"><input-->
        <!--class="appearance-none bg-transparent border border-transparent w-full text-gray-200 focus:outline-none focus:bg-gray-300 focus:text-gray-800 focus:border-gray-400 mr-3 py-2 px-3"-->
        <!--type="email" value="" name="EMAIL" placeholder="sheldon.cooper@liamg.com"-->
        <!--aria-label="Email Address" required="">-->
        <!--<button class="flex-shrink-0 bg-purple-600 border-purple-600 hover:bg-gray-800 hover:text-purple-600 border text-gray-200 py-2 px-4"-->
        <!--type="submit" name="subscribe">Sign Up-->
        <!--</button>-->
        <!--</div>-->
        <!--<label class="block text-gray-200 text-left px-2 mt-4" for="gdpr_37169"><input-->
        <!--class="leading-tight" type="checkbox" id="gdpr_37169" name="gdpr[37169]" value="Y"-->
        <!--required=""> <span class="text-md font-light">I agree with the <a href="/privacy"-->
        <!--class="underline hover:no-underline hover:text-purple-600"-->
        <!--title="Privacy Policy"-->
        <!--target="_blank">Privacy Policy</a></span></label>-->
        <!--</form>-->
        <!--</div>-->
        <!--</div>-->
        <!--</main>-->

        <!--<footer class="w-full flex flex-col sm:flex-row sm:justify-center text-lg tracking-wide px-4 sm:px-0 py-16">-->
        <!--<div class="text-center pr-0 sm:pr-8 py-4">-->
        <!--<ul class="list-none">-->
        <!--<li><a class="text-gray-800 hover:text-purple-600 no-underline" href="https://twitter.com/#"-->
        <!--target="_blank" rel="_noopener">Twitter</a></li>-->
        <!--<li><a class="text-gray-800 hover:text-purple-600 no-underline"-->
        <!--href="https://linkedin.com/company/#" target="_blank" rel="_noopener">LinkedIn</a></li>-->
        <!--</ul>-->
        <!--</div>-->
        <!--<div class="h-px sm:h-auto w-1/2 sm:w-px bg-purple-600 mx-auto sm:mx-0"></div>-->
        <!--<div class="text-center px-8 py-4">-->
        <!--<ul class="list-none">-->
        <!--<li><a class="text-gray-800 hover:text-purple-600 no-underline" href="#about">About</a></li>-->
        <!--<li><a class="text-gray-800 hover:text-purple-600 no-underline" href="#features">Features</a></li>-->
        <!--</ul>-->
        <!--</div>-->
        <!--<div class="h-px sm:h-auto w-1/2 sm:w-px bg-purple-600 mx-auto sm:mx-0"></div>-->
        <!--<div class="text-center pl-0 sm:pl-8 py-4">-->
        <!--<ul class="list-none">-->
        <!--<li><a class="text-gray-800 hover:text-purple-600 no-underline" href="/privacy">Privacy</a></li>-->
        <!--<li><a class="text-gray-800 hover:text-purple-600 no-underline" href="/imprint">Imprint</a></li>-->
        <!--</ul>-->
        <!--</div>-->
        <!--</footer>-->
        <!--<div class="w-full"><span class="block text-center text-gray-800 text-sm font-light">© AWE.SOME</span></div>-->
        <!--<div class=""><a id="btt"-->
        <!--class="fixed bottom-0 right-0 mb-4 mr-4 text-gray-200 border border-purple-600 hover:bg-gray-200 hover:text-purple-600 hover:border-browngray no-underline px-6 py-1 bg-purple-600 shadow-md hidden"-->
        <!--href="#top" title="Back to Top">UP</a></div>-->
        <div class="fixed bottom-0 left-0 m-6"><a href="https://github.com/authMint/" target="_blank"
                                                  rel="noopener" title="AuthMint's Github repos"
                                                  class="block rounded-full bg-black text-purple-600 hover:bg-white hover:text-black shadow-md p-4"><img
                src="/img/github.svg" width="30" height="30" class="block" alt="GitHub icon"></a></div>

    </div>

</template>

<script>

    export default {
        beforeMount() {
            window.addEventListener('scroll', this.handleScroll);

            console.log('Code/Design: ttntm.me'); // credit where credit is due

        },



        methods: {
            navToggle: function () {
                let btn = document.getElementById('menuBtn');
                let nav = document.getElementById('menu');

                btn.classList.toggle('open');
                nav.classList.toggle('flex');
                nav.classList.toggle('hidden');
            },
            handleScroll(event) {
                // Any code to be executed when the window is scrolled
                let btt = document.getElementById('btt');

                if (window.scrollY > 1080) {
                    btt.classList.remove('hidden');
                    btt.classList.add('block');
                } else {
                    btt.classList.add('hidden');
                    btt.classList.remove('block');
                }
            }



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
