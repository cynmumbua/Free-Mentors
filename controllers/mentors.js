
import { getMentors, getOneMentor } from '../models/mentorsInfo';
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
	
	static async oneMentor(request,response){
		try{
			const mentor = await getOneMentor(request.params.mentorId);
			if (mentor) {
				delete mentor.password;
				response.status(200).json({
				status: 200,
				data: await mentor
				});
			}else{
				response.status(404).json({
					status: 404,
					message: 'mentor with that ID not found'
				});
			}
		}catch(error){
			throw error
			}
	}

}

export default Mentors;