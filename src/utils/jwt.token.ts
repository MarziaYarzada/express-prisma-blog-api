import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables.")
}

export const generateToken=(userId:number)=>{
    return jwt.sign({userId},JWT_SECRET,{
       expiresIn: '3d',
    })
}