import jwt from 'jsonwebtoken';

class Middleware{
	static checkUserToken(request,response,next){
		const userToken = request.headers['token'];
		if(userToken){
			try{
				const user=jwt.verify(userToken, 'key');
				request.user = user;
				next();
			}catch(error){
				return response.status(409).json({
					status: 409,
					message: 'invalid token'
				});
			}
		}else{
			return response.status(409).json({
					status: 400,
					message: 'Please input token'
				});
		}
	}
}

export default Middleware;