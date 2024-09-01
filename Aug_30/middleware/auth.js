

export const isAuthenticated = (req, res, next) => {
    try {
        const {token} = req.cookies;
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Please login first"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({
                success: false,
                message: "Please login first"
            })
        }

        req.user = decoded;
        next();
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}