import usersInfo from '../models/usersInfo';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { signup, getUser } from '../models/createUsers';

class CheckUser {
	static async signup(request,response,next){

		try{
			const checkEmail= await getUser(request.body.email);
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
					mentor: 'false'
					}
					// generate validation token
				const token= jwt.sign({userId: user.userId, email: user.email, mentor: user.mentor, firstName: user.firstName, lastName:user.lastName}, 'key');
					request.user =  user;
					request.token = token;
					next();
			}else{
				return response.status(409).json({
					status: 409,
					message: 'That email is already in use'
				});
			}

		}catch (error) {
			throw error;
		  }
		
	}


	static async signin(request,response,next){
		try{
		const checkUser= await getUser(request.body.email);

		if(checkUser){
			const passwordCheck = bcrypt.compareSync(request.body.password, checkUser.password);
			if(passwordCheck){
				const token= jwt.sign({userId: checkUser.userId, email: checkUser.email, mentor: checkUser.mentor, firstName: checkUser.firstName, lastName:checkUser.lastName}, 'key');
				request.token = token;
				next();
			}else{
				return response.status(409).json({
					status: 409,
					message: 'Password do not match'
				});
			}
		}else{
			return response.status(409).json({
				status: 409,
				message: 'User not found'
			});
		 }
		}catch (error) {
				throw error;
			  }
			
		}	
}

export default CheckUser;