import qs from 'query-string'
export function getItemFromSession(id:string) {
    return window.sessionStorage.getItem(id)
}

export const getPagesFromURL = ():number => {
    const {query} = qs.parseUrl(location.search)
    const pageNr = parseInt( query.page ) || 1
    return pageNr
}