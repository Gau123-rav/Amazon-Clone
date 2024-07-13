const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const secretKey = process.env.KEY;

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.AmazonWeb;
        
        if (!token) {
            throw new Error("Token not provided");
        }

        const verifyToken = jwt.verify(token, secretKey);

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (!rootUser) {
            throw new Error("User not found");
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
    } catch (error) {
        res.status(401).json({ error: "Unauthorized: " + error.message });
    }
};

module.exports = authenticate;