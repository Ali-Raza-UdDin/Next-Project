const asyncHandler = (reqestHandler) => {
    return (req, res, next) => {
        Promise.resolve(
            reqestHandler(req, res, next)
        ).catch((err) => next(err))
    }
}   

export { asyncHandler }


// const asyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,res, next)
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             error: error.message
//         })
//     }
// }