module.exports = {
   pluginOptions: {
      i18n: {
         locale: 'en',
         fallbackLocale: 'en',
         localeDir: 'locales',
         enableInSFC: false
      }
   },
   css: {
      loaderOptions: {
         sass: {
            prependData: `
               @import "@/scss/_variables.scss";
               @import "@/scss/_mixines.scss";
            `
         }
      }
   }
}
