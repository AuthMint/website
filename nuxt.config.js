export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global App headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'AuthMint: monetize digital assets',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: 'NFT licensing market for photography/design/music/video/software',
            },

        ],

        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'preload', href: 'https://awesome11ty.ttntm.me/css/page.css'},
            {rel: 'preconnect', href: 'https://unpkg.com/popper.js@1'},
            {rel: 'preconnect', href: 'https://unpkg.com/tippy.js@4'},
            {rel: 'stylesheet', href: 'https://awesome11ty.ttntm.me/css/page.css'},


        ],
        script: [
            {src: 'https://unpkg.com/popper.js@1'},
            {src: 'https://unpkg.com/tippy.js@4'},
        ],
        __dangerouslyDisableSanitizers: ['script', 'innerHTML'],
    },
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['@nuxtjs/tailwindcss'],


    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [

    ]
};
