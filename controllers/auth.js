 
import {signup, signin} from '../models/createUsers';
class AuthController{
static async signup  (request, response) {
		// usersInfo.push(request.user);
		try{
			await signup (request.user);
			response.status(201).json({
				status: 201,
				message: 'user created succesfully',
				token: request.token,
				data: {
					firstName: request.user.firstName,
					lastName: request.user.lastName,
					email: request.user.email,
					address: request.user.address,
					bio: request.user.bio,
					occupation: request.user.occupation,
					expertise: request.user.expertise,
					mentor: request.user.mentor
				}
			});	
		}catch (error) {
			throw error;
		  }
}

static async signin (request,response){

		response.status(200).json({
			status: 200,
			message: 'User is succesfully logged in',
			data:{
				token:request.token,
				email: request.body.email
			}
		
	});	
 }
 }
export default AuthController;