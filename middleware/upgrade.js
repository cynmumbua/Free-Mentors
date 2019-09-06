import usersInfo from '../models/usersInfo'

class Upgrade{
	static upgradeToMentor(request,response,next){
		if(request.user.mentor == 'admin'){
			const upgradeUser = usersInfo.find(usersInfo=>usersInfo.userId == request.params.userId);
			if(upgradeUser){
				upgradeUser.mentor = true;
				request.upgradeUser = upgradeUser;
				next();	
			}else{
				response.status(404).json({
					message: 'user not found'
				});
			}	
		}else{
			response.status(401).json({
			message: 'Unauthorised access'
		});
		}

	}
}

export default Upgrade;