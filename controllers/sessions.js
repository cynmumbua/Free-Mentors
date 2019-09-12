
import mentorsInfo from '../models/mentorsInfo';
import usersInfro from '../models/usersInfo';
import reviews from '../models/reviews';
import { signup, getUser, selectUser, sessions } from '../models/createUsers';


class Sessions{

	static async createSession(request,response){

			   const newSession = await sessions (request.newSession);

			    response.status(201).json({
			    	status: 201,
			    	message: 'Session created successfully',
			    	data: await newSession
			    });
	
	}
	static viewSessions(request,response){

				response.status(200).json({
		    	status: 200,
		    	data: request.mentorSessions
		    });
	}

	 static acceptSessions(request,response){

		response.status(200).json({
    	status: 200,
    	data: request.acceptSession
		});	
					
	}
	static rejectSessions(request,response){
			response.status(200).json({
	    	status: 200,
	    	data: request.rejectSession
			});	
		
	 }
	 static reviewSessions(request,response){

		reviews.push(request.review);
		response.status(200).json({
			status:200,
			data: request.review
		});
				
	 }
	 static deleteReviews(request,response){
	 			
		response.status(200).json({
		status: 200,
		message: 'Review successfully deleted'
		});
	
	 }
}

export default Sessions;