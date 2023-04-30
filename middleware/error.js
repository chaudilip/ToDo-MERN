class  ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err,req,res,next) => {
    //err.message is fetching the message from controller with if statement -
    // if it doesn't exists then we will pas the message threw next() in task.js controller
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;
    return res.status(err.statusCode).json({
      success:false,
      message:err.message,
  })
  }

export default ErrorHandler;