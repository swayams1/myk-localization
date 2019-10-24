
import { translate, translateHeaders} from './src/localization/lib/translate'

console.log(process.env)
translateHeaders("Etelä-Suomi", 1033).then( t => console.log("success",t)).catch(e => console.log(e))


