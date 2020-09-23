const jwt = require('jsonwebtoken');

const verifyToken = (token) => {
    try {
        const verified = jwt.verify(token, process.env.JWT_TOKEN);
        if (verified)
            return true;
    }
    catch (err) {
        return false;
    }
    return false;
}

const tokenExpired = (token) => {
    const ONE_HOUR = 12960000;
    const currentDate = new Date().getTime();

    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
    
    if(currentDate - decodedToken.iat > ONE_HOUR)
        return true;
    return false;

}

module.exports = { verifyToken, tokenExpired };