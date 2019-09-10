
import getMentors from '../models/mentorsInfo';
import authControllers from '../controllers/auth'

class Mentors{
	
	static async allMentors(request,response){
		try{
			const mentors = await getMentors();
			if(mentors){
				mentors.forEach((mentor)=>{
					delete mentor.password;
				});
				response.status(200).json({
					status: 200,
					data: mentors
				});
			}else{
				response.status(404).json({
					status: 404,
					message: 'mentors not found'
				});
			}			
		}catch (error) {
			throw error;
		  }
	}
	
	static oneMentor(request,response){
		response.status(200).json({
		status: 200,
		data:request.checkMentor
		});
	}
}

export default Mentors;