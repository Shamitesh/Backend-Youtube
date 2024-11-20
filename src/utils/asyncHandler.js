const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
    }
}



export {asyncHandler}



// const asyncHandler = (requestHandler) => {
//     return async (req, res, next) => {
//         try {
//             await requestHandler(req, res, next);  // Await the request handler
//         } catch (err) {
//             next(err);  // Pass any errors to the next middleware
//         }
//     };
// };
