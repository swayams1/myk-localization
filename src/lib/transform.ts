
import { Term, Locale, Termset } from '../entity/Termset'
import { config, headers } from './../../mocks/localized';

export const configPromise = new Promise (( resolve, reject ) => {
    var localeConfig: Termset[] = []
    type configuration ={[index: string]: {[index: string]: {[index: string]: string}}} 

    config.then( r => {        
        const fullConfig = r as configuration
        const TermSetNames: string[] = Object.keys( fullConfig )        
        TermSetNames.forEach( (tsn: string) => {
            const termsets = fullConfig[tsn]
            const termsetList: Term[] = []
            Object.keys(termsets).forEach( ts  => {
                let locales = termsets[ts]
                const localeList: Locale[] = []
                Object.keys(locales).forEach( l => 
                        localeList.push(new Locale(parseInt(l), locales[l]))
                )
                termsetList.push( new Term(ts, localeList) )
            })
            localeConfig.push( new Termset(tsn, termsetList) )
        })

        resolve(localeConfig)

    } ).catch( e =>  reject(e))
})


export const headerPromise  = new Promise( ( resolve, reject ) => {
    let headerConfig : Term[] = []
    type header = {[index: string]: {[index: string]: string}} 

    headers.then( (result: header) => {
        let set = result[ Object.keys(result)[0] ] 
        let headNames = Object.keys( set ) 
       
        headNames.forEach( name => {
            let headLocaleValues = set[name]

            let localeIDs = Object.keys(headLocaleValues)
            let locales: Locale[] = []
            localeIDs.forEach( (locale) => {
                locales.push( new Locale(parseInt(locale), headLocaleValues[locale as any]))
            })

            headerConfig.push( new Term(name, locales))

        })
        resolve(headerConfig)
    }).catch( e => reject(e))

    
})





