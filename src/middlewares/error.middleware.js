import { logError } from "../logger/error.logger.js";

export const errorHandler = (err,req,res,next)=>{
    logError(err);

    res.status(500).json({
        success:false,
        message:"Internal Server Error"
    });
};