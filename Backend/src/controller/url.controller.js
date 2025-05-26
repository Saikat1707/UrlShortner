import { response } from "express";
import saveURL from "../DAO/createEntry.js";
import generate from "../utils/generateCode.js";
import redirectURL from "../DAO/redirect.js";
import { createUrl, createUrlWithUser , createUrlWithoutSlag } from "../services/createUrl.js";


const create = async (req,res)=>{
    const {url,slag} = req.body;
    if(!url){
        return res.status(400).json({
            success:false,
            message:"URL is missing"
        })
    }
    if(req.user){
        if(slag){
            const shortCode = await createUrlWithUser(url,slag,req.user._id)
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
        }
        try {
            const shortCode = await createUrlWithoutSlag(url,req.user._id)
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
    }else{
        if(slag){
            return res.status(400).json({
                success:false,
                message:"User must be logged in to create custom url"
            })
        }
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