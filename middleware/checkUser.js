import usersInfo from '../models/usersInfo';
// import Joi from 'joi';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

class CheckUser {
	static signup(request,response,next){
		const checkEmail= usersInfo.some(usersInfo=>usersInfo.email=== request.body.email);
		const password=bcrypt.hashSync(request.body.password, 6);
		//capture user details in an object
		if(!checkEmail){
				const user = {
					userId:usersInfo.length + 1,
					firstName: request.body.firstName,
					lastName: request.body.lastName,
					email: request.body.email,
					password: password,
					address: request.body.address,
					bio: request.body.bio,
					occupation: request.body.occupation,
					expertise: request.body.expertise,
					mentor: false
					}
					// generate validation token
					const token = jwt.sign({email: user.email}, 'key');
					request.user =  user;
					request.token = token;
					next();
			}else{
				return response.status(409).json({
					message: 'That email is already in use'
				});
			}
	}
	static signin(request,response,next){
		const checkUser= usersInfo.find(usersInfo=>usersInfo.email=== request.body.email);

		if(checkUser){
			const passwordCheck = bcrypt.compareSync(request.body.password, checkUser.password);
			if(passwordCheck){
				const token= jwt.sign({userId: checkUser.userId, email: checkUser.email, mentor: checkUser.mentor, firstName: checkUser.firstName, lastName:checkUser.lastName}, 'key');
				request.token = token;
				next();
			}else{
				return response.status(409).json({
					message: 'Password do not match'
				});
			}
		}else{
			return response.status(409).json({
				message: 'User not found'
			});
		 }
	}	
}

export default CheckUser;