import { signup, getUser, selectUser, upgradeMentor } from '../models/createUsers'

class Admin{
	static async upgrade(request,response){
		try{
		const admin = await upgradeMentor(request.params.userId);
		delete admin.password;
		response.status(200).json({
    	status: 200,
    	data: admin
		});	
	}catch(error){
		throw error;
	}
	}
}

export default Admin;