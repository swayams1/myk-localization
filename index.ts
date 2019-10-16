
import localization from './src/localization/lib/translate'

localization.translateHeaders("Etelä-Suomi", 1033).then( t => console.log("success",t)).catch(e => console.log(e))


