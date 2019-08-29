const jwt= require('jsonwebtoken');

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
					message: 'invalid token'
				});
			}
		}else{
			return response.status(409).json({
					message: 'Please input token'
				});
		}
	}
}

module.exports = Middleware;