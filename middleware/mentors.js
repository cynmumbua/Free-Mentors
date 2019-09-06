import mentorsInfo from '../models/mentorsInfo';

class Mentors{
	static viewMentor(request,response,next){
		const checkMentor= mentorsInfo.find(mentorsInfo=>mentorsInfo.userId == request.params.mentorId);
			if(checkMentor){
				request.checkMentor = checkMentor;
				next();
			}else{
				response.status(404).json({
					message: 'Mentor not found'
				});
			}
		}
}
export default Mentors;