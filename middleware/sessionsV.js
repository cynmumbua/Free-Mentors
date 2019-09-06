import Joi from 'joi';

class Validate{
	static vSessions (request,response,next){
		const validateQuestion =(formData)=> {
		const schema = {
				mentorId:Joi.number().required(),
				questions: Joi.string().required().min(6)
			}
	return Joi.validate(formData, schema);
		}
	const{error}= validateQuestion(request.body);
		if (error){
			return response.status(409).json({
				message: error.details[0].message
			});
		}
		next();
	}
	static vReviews(request,response,next){
		const validateReview =(formData)=> {
			const schema = {
				score: Joi.number().required(),
				remark: Joi.string().required().min(4)
			}
			return Joi.validate(formData, schema);
		}
		const{error} =  validateReview(request.body);
			if(error){
				return response.status(409).json({
					message: error.details[0].message
				});
			}
			next();
	}
}

export default Validate;