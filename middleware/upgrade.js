import usersInfo from '../models/usersInfo';
import { signup, getUser, selectUser, upgradeMentor } from '../models/createUsers';
class Upgrade{
	static async upgradeToMentor(request,response,next){
		
		if(request.user.mentor == 'admin'){
			try{
			const upgradeUser = await selectUser(request.params.userId);
			if(upgradeUser){
				next();	
			}else{
				response.status(404).json({
					status: 404,
					message: 'user not found'
				});
			}
			}catch(error){
		throw error;
	}	
		}else{
			response.status(401).json({
				status: 401,
				message: 'Unauthorised access'
		});
		}
	

	}
}

export default Upgrade;