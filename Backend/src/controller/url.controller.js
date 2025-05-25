import { response } from "express";
import saveURL from "../DAO/createEntry.js";
import generate from "../utils/generateCode.js";
import redirectURL from "../DAO/redirect.js";
import { createUrl, createUrlWithUser } from "../services/createUrl.js";


const create = async (req,res)=>{
    const {url,slag} = req.body;
    if(!url){
        return res.status(400).json({
            success:false,
            message:"URL is missing"
        })
    }
    if(slag){
        if(req.user){
            const shortCode = await createUrlWithUser(url,slag)
            if(!shortCode){
                return res.status(400).json({
                    success:false,
                    message:"Code already exist.try another"
                })
            }else{
                return res.status(200).json({
                success:true,
                data:process.env.BACKEND_URL+shortCode
                })
            }
        }else{
            return res.status(400).json({
                success:false,
                message:"User must be logged in to create custom url"
            })
        }
    }else{
        try {
            const shortCode = await createUrl(url)
            return res.status(200).json({
            success:true,
            data:process.env.BACKEND_URL+shortCode
            })
        } catch (error) {
            return res.status(400).json({
            success:false,
            message:error
            })
        }
    }
}

const redirect = async (req,res)=>{
    try {
        const code = req.params.code;
        const entry = await redirectURL(code)
        res.redirect(entry.originalUrl)
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"failed in redirecting or Wrong code"
        })
    }
}


export default {create,redirect};