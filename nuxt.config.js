// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/style/main.css',],
    app: {
        head: {
            title: "Ahmad SHAHWAN pages",
            link: [{rel: 'shortcut icon', type: 'image/x-icon', href: "/favicon.ico"}],
        },
    },
})
