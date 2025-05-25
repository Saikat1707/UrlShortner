import generate from "../utils/generateCode.js"
import UrlHandler from '../DAO/createEntry.js'

export const createUrl = async (url)=>{
    try {
       const code = generate()
       const shortCode = await UrlHandler.saveURL(url,code)
       return shortCode;
    } catch (error) {
        throw error
    }
}

export const createUrlWithUser = async (url,slag) => {
    try {
        const shortCode = await UrlHandler.saveURL(url,slag)
        if(!shortCode){
            return null
        }
        return shortCode
    } catch (error) {
        throw error
    }
}