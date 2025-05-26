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

export const createUrlWithUser = async (url,slag,userId) => {
    try {
        const shortCode = await UrlHandler.saveURLWithUser(url,slag,userId)
        if(!shortCode){
            return null
        }
        return shortCode
    } catch (error) {
        throw error
    }
}

export const createUrlWithoutSlag = async(url,userId)=>{
    try {
       const code = generate()
       const shortCode = await UrlHandler.saveURLWithUser(url,code,userId)
       return shortCode;
    } catch (error) {
        throw error
    }
}