const asyncHandler=(fn)=>async (req,res)=>{
    try {
        await fn(req,res,next)
    } catch (error) {
        console.log(error)        
    }
}
export default asyncHandler;