import 'isomorphic-fetch'

import { webAbsoluteUrl, termSetFilename, refinementFileName } from '../config/env'

export const config = new Promise( (resolve, reject) => {
   
   
    fetch( `${webAbsoluteUrl}/_api/web/GetFileByServerRelativeUrl('${termSetFilename}')/$value` ).then(
    app => {
            resolve(app.json())
    }).catch( e => reject(e))
} )

export const headers =  new Promise( (resolve, reject) => {

    fetch( `${webAbsoluteUrl}/_api/web/GetFileByServerRelativeUrl('${refinementFileName}')/$value` ).then(
    app => {
        resolve (app.json())
    }).catch( e => reject(e))

})


