import jwt from 'jsonwebtoken'

export const userAuth = async (req, res, next) => {
    
    const token = req.cookies.token;
    if (!token) {
      console.log("No token found in cookies");
      return res.status(201).json("Token not available");
    }
    
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      console.log("User verified:", user);
      req.user = user;
      next();
    } catch (err) {
      console.log("Error in userAuth:", err);
      return res.redirect('/login');
    }
  }