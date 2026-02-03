import express from "express";
import httpLogger from "./logger/http.logger.js";
import { requestTimer } from "./middlewares/requestTime.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use(httpLogger);
app.use(requestTimer);

app.get("/", (req,res)=>{
    res.json({message:"Logger Monitor Running"});
});

app.get("/error", ()=>{
    throw new Error("Test error");
});

app.use(errorHandler);

export default app