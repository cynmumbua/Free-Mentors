
// import mentorsInfo from '../models/mentorsInfo';
//
import { signup, getUser, userData, getMentors } from '../models/createUsers';
class Mentors{
	static async output (data){
		const addedUser = await getUser(data.mentor);
		const formatted = await{
			id: addedUser.id,
			firstName: addedUser.firstname,
			lastName: addedUser.lastname,
			email: addedUser.email,
			address: addedUser.address,
			bio: addedUser.bio,
			occupation: addedUser.occupation,
			expertise: addedUser.expertise,
			mentor: addedUser.mentor
		}
		return formatted;
	}
	static async allMentors(request,response){
		response.status(200).json({
		status: 200,
		data: await Mentors.output()
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