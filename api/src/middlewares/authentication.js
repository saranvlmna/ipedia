module.exports = (req, res, next) => {
    const user = req.user
    if (!user) {
        return res.send({
            message: "Access denied. No user provided",
            data: {}
        })
    }
    try {
        next();
    } catch (error) {
        return res.send({
            message: "Invalid user",
            data: {}
        })
    }
};
