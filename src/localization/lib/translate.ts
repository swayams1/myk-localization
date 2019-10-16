
import { configPromise, headerPromise } from './transform';
import { Termset, Term, Locale } from '../entity/Termset';




const translate = (text: string, lid: number) => {

	const translatePromise = new Promise( (resolve, reject) => {
		configPromise.then(
			(localeConfig: Termset[] )=> {
				let tuple: Locale = null
				
				localeConfig.some((termset: Termset) => {
					let term: Term[] = termset.terms.filter((t: Term) => t.name.toLowerCase() === text.trim().toLowerCase())
					if(term.length > 0 ){
						tuple = term[0].locales.filter( l => l.locale === lid )[0]
						return true
					}
				});

				resolve(tuple)
			}
		).catch( e => reject(e))
	})

	return translatePromise
}


const translateHeaders = ( name: string , localeID: number) => {

	const translateHeadersPromise = new Promise( (resolve, reject) => {
		headerPromise.then((result:Term[]) => {
			let header: Term = result.filter( r => r.name.toLowerCase() === name.toLowerCase().trim() )[0]
			if( header !== null && typeof header !== "undefined")
			{
				let value: string = header.locales.filter( l => l.locale === localeID)[0].value
				resolve(value)
			}
		}).catch( e => reject(e))
	})

	return translateHeadersPromise

}


const localization = {
	translate: translate,
	translateHeaders: translateHeaders
}

export default localization

