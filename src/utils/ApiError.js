class ApiError extends Error{
   constructor(
    statusCode,
    message= "something went wrong",
    errors =[],
    statck = ""
   ){
       super(message)
       this.statusCode = statusCode
       this.data = null
       this.message = messaage
       this.success = false
       this.errors = errors

       if(statck){
        this.stack = stack
       } else{

        Error.captureStackTrace(this, this.constructor)
       }

   }


}


export {ApiError}
