import { signup, getUser, getMentors } from '../models/createUsers';
import mentorsInfo from '../models/mentorsInfo';

class Mentors{
	static async viewMentor(request,response,next){
		try{
		const checkMentor= await getUser(request.params.mentorId);
			if(checkMentor){
				request.checkMentor = checkMentor;
				next();
			}else{
				response.status(404).json({
					status: 404,
					message: 'Mentor not found'
				});
			}
		}catch(error){
			throw error;
		}
	}
}
export default Mentors;