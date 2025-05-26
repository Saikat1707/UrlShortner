import urlModel from '../model/urlStorage.model.js'

const saveURL = async (url,code)=>{
    try {
        const isExist = await urlModel.findOne({shortCode:code})
        if(isExist){
            return null
        }
        const entry = await urlModel.create({
            originalUrl:url,
            shortCode:code,
        })
        return entry.shortCode
    } catch (error) {
        throw error
    }
    
}

const saveURLWithUser = async(url,code,userId)=>{
    try {
        const isExist = await urlModel.findOne({shortCode:code})
        if(isExist){
            return null
        }
        const entry = await urlModel.create({
            originalUrl:url,
            shortCode:code,
            userId:userId
        })
        return entry.shortCode
    } catch (error) {
        throw error
    }
}

export default {saveURL,saveURLWithUser}