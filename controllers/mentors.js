
import mentorsInfo from '../models/mentorsInfo';

class Mentors{
	static allMentors(request,response){
		response.status(200).json({
		status: 200,
		data:mentorsInfo
		});
	}
	static oneMentor(request,response){
		response.status(200).json({
		status: 200,
		data:request.checkMentor
		});
	}
}

export default Mentors;