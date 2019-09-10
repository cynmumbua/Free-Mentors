 
import { signup, getUser, userData } from '../models/createUsers';
class AuthController{

	static async output (data){
		const addedUser = await getUser(data.email);
		const formatted = await{
			id: addedUser.id,
			firstName: addedUser.firstname,
			lastName: addedUser.lastname,
			email: addedUser.email,
			address: addedUser.address,
			bio: addedUser.bio,
			occupation: addedUser.occupation,
			expertise: addedUser.expertise,
			mentor: addedUser.mentor
		}
		return formatted;
	}
	static async signup  (request, response) {
		try{
			await signup (request.user);
			response.status(201).json({
				status: 201,
				message: 'user created succesfully',
				token: request.token,
				data: await AuthController.output(request.user)
			});	
		}catch (error) {
			throw error;
		  }

}

	static async signin (request,response){
		response.status(200).json({
			status: 200,
			message: 'User is succesfully logged in',
			token:request.token,
			data: await AuthController.output(request.body)		
	});	

 }
}
export default AuthController;