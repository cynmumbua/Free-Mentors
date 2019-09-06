import Joi from 'joi';
import jwt from 'jsonwebtoken';

class Validations{
	static vSignup(request,response,next){
		const validateSignup =(formData)=>{
		const schema = {
			firstName: Joi.string().required().min(3),
			lastName: Joi.string().required().min(3),
			email: Joi.string().required().email(),
			password: Joi.string().required().min(6),
			address: Joi.string().required().min(3),
			bio: Joi.string().required(),
			occupation: Joi.string().required(),
			expertise: Joi.string().required()
		}
		return Joi.validate(formData, schema);
	}
	const{error}= validateSignup(request.body);
		if (error){
			return response.status(409).json({
				message: error.details[0].message
			});
		}
		next();
	}
	static vSignin(request,response,next){
		const validateSignin =(formData)=> {
		const schema = {
			email: Joi.string().required().email(),
			password: Joi.string().required()
			}
 		return Joi.validate(formData, schema);
		 }
		const{error} = validateSignin(request.body);
		if (error){
			return response.status(409).json({
				message: error.details[0].message
			});
		}
		next();
	}
	// static token(request,response,next){
	// 	const token = jwt.sign({email: user.email}, 'key');
	// }
}

export default Validations;
