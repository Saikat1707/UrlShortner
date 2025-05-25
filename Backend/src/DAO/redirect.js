import urlModel from "../model/urlStorage.model.js"

const redirectURL = async (code)=>{
    try {
        const entry = await urlModel.findOneAndUpdate({shortCode:code},{$inc:{click:1}},{new:true})
        return entry
    } catch (error) {
        throw error
    }
}

export default redirectURL