 
import { signup, getUser, userData } from '../models/createUsers';
import jwt from 'jsonwebtoken';
class AuthController{

	static async signup  (request, response) {
		try{
			const output = await signup (request.user);
			const token= jwt.sign({userId: output.id, email: request.user.email, mentor: request.user.mentor, firstName: request.user.firstName, lastName: request.user.lastName}, 'key');

			delete output.password;
			response.status(201).json({
				status: 201,
				message: 'user created succesfully',
				data: await output,
				token: token,
			});	
		}catch (error) {
			throw error;
		  }

}

	static async signin (request,response){
		const output = await getUser(request.body.email);
		delete output.password;
		response.status(200).json({
			status: 200,
			message: 'User is succesfully logged in',
			data: await output,
			token:request.token,	
	});	

 }
}
export default AuthController;