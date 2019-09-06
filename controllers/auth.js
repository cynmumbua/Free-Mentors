 
import usersInfo from '../models/usersInfo';

 class AuthController{
 	static signup(request, response){
			usersInfo.push(request.user);

			response.status(201).json({
				status: 201,
				message: 'user created succesfully',
				data: {
					token: request.token,
					message: 'user created succesfully',
					userId: request.user.userId,
					firstName: request.user.firstName,
					email:request.user.email,
				}
			});
		}

	static signin(request,response){

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