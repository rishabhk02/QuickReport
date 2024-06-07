import jwt from 'jsonwebtoken';

function authMiddleware(req, res, next) {
    try {
        const authorization = req.headers["authorization"];

        if (!authorization) {
            return res.status(400).json({ message: "Please include authorization header" });
        }

        const token = authorization.split(" ")[1];

        if (!token) {
            return res.status(400).json({ message: "Please provide jwt token" });
        }

        const tokenPayload = jwt.verify(token, process.env.JWT_SECRETE_KEY);

        req.user = {
            userId: tokenPayload?.userId,
            name: tokenPayload?.name,
            email: tokenPayload?.email
        }

        return next();
    } catch (error) {
        console.error(error);
    }
}

export default authMiddleware;