
import { translate, translateHeaders} from './src/lib/translate'

translateHeaders("Etelä-Suomi", 1033).then( t => console.log("success",t)).catch(e => console.log(e))


