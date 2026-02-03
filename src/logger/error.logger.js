import logger from "./winston.logger.js";

export const logError = (err)=>{
    logger.error({
        message: err.message,
        stack: err.stack
    });
};