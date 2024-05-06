// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    ssr: true,
    modules: ['@nuxtjs/color-mode', '@nuxtjs/google-fonts', 'nuxt-icon', '@pinia/nuxt', "nuxt-security"],
    routeRules: {
        '/api/**': {
            proxy: {
                to: `${process.env.BACKEND_HOST ?? "http://localhost"}:${process.env.BACKEND_PORT ?? "3001"}/api/**`,
            },
        }
    },
    googleFonts: {
        download: true,
        families: {
            Roboto: true,
        }
    },
    css: ["~/assets/main.scss", "~/assets/light-mode.scss", "~/assets/dark-mode.scss"],
})
