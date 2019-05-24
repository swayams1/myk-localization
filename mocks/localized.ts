

export const config = new Promise( (resolve, reject) => {
    const filename = "/sites/test-myk/Style%20Library/Kesko/Assets/Localization/TermSetsLabels.txt"
    const webAbsoluteUrl = "https://keskogroup.sharepoint.com/sites/test-myk"
    fetch( `${webAbsoluteUrl}/_api/web/GetFileByServerRelativeUrl('${filename}')/$value` ).then(
    app => {
            resolve(app.json())
    }).catch( e => reject(e))
} )

export const headers =  new Promise( (resolve, reject) => {
   
    const filename = "/sites/test-myk/Style%20Library/Kesko/Assets/Localization/RefinementHeaderLabels.txt"
    const webAbsoluteUrl = "https://keskogroup.sharepoint.com/sites/test-myk"
    fetch( `${webAbsoluteUrl}/_api/web/GetFileByServerRelativeUrl('${filename}')/$value` ).then(
    app => {
        resolve (app.json())
    }).catch( e => reject(e))

})


