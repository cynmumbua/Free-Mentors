
// import usersInfo from '../models/usersInfo';
// import mentorsInfo from '../models/usersInfo';

class Admin{
	static upgrade(request,response){
		response.status(200).json({
    	status: 200,
    	data: request.upgradeUser
		});	
	}
}

export default Admin;