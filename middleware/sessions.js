import mentorsInfo from '../models/mentorsInfo';
import sessions from '../models/sessions';
import usersInfo from '../models/usersInfo';
import reviews from '../models/reviews';
import { selectUser, selectAllUser , selectMentor } from '../models/createUsers';

class Sessions{
	static async nSession(request,response,next){
		try{
		const checkMentor= await selectMentor(request.body.mentorId);
		 const checkUser = await selectAllUser(request.user.mentor);
			if(checkUser){
				if(checkMentor){
					const newSession ={
						sessionId: sessions.length + 1,
						mentorId: request.body.mentorId,
						menteeId: request.user.userId,
						questions: request.body.questions,
						menteeEmail: request.user.email,
						status: 'pending'
					}

			     request.newSession = newSession;
			    next();
				}else{
					 response.status(404).json({
			    	 status: 404,
			    	 message: 'No mentor with that Id'
			    });
				}
			}else{
					 response.status(409).json({
			    	 status: 409,
			    	 message: 'Mentor cannot create sessions'
			    });
			}
		}catch(error){
			throw error;
		}
	}
	static viewSession(request,response,next){
		const userId =request.user.userId;
			if(request.user.mentor == false){
				const mentorSessions = sessions.filter(sessions=>sessions.menteeId == userId);
				request.mentorSessions = mentorSessions;
				next();
			}else if(request.user.mentor == true){
				const mentorSessions = sessions.filter(sessions=>sessions.mentorId == userId);
				request.mentorSessions = mentorSessions;
				next();
			}
			else{
				response.status(401).json({
					message: 'Unauthorised access'
				});
			}
	}
// 	const getUsers = (request, response) => {
//   pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }
	static acceptSession(request,response,next){
	 	const userId =request.user.userId;
			if(request.user.mentor == true){
					const acceptSession = sessions.find(sessions=>sessions.sessionId == request.params.sessionId);
					if(acceptSession){
						acceptSession.status = 'accepted';
						request.acceptSession = acceptSession;
						next();
					}else{
						response.status(404).json({
							message: 'session not found'
						});
					}	
			}else{
				response.status(401).json({
				message: 'Unauthorised access'
			});
			}
	}
	static declineSession(request,response,next){
		const userId =request.user.userId;
			if(request.user.mentor == true){
					const rejectSession = sessions.find(sessions=>sessions.sessionId == request.params.sessionId);
					if(rejectSession){
						rejectSession.status = 'rejected';
						request.rejectSession = rejectSession;
						next();
					}else{
						response.status(404).json({
							message: 'session not found'
						});
					}	
			}else{
				response.status(401).json({
				message: 'Unauthorised access'
			});
		}
	}
	static reviewSession(request,response,next){
		const requestedSession = sessions.find(sessions=>sessions.sessionId == request.params.sessionId);
			if(requestedSession){
				if(requestedSession.menteeId == request.user.userId){
					 if(requestedSession.status !== 'accepted'){
					 	return response.status(403).json({
					 		message: 'session has not been accepted'
					 	});
					 }

					const review = {
						sessionId: requestedSession.sessionId,
						mentorId: requestedSession.mentorId,
						menteeId: requestedSession.menteeId,
						score: request.body.score,
						menteeFullName: `${request.user.firstName} ${request.user.lastName}`,
						remark: request.body.remark
					};
					request.review = review;
					next();
				}else{
					response.status(409).json({
						message: 'confirm your session Id'
					});
					
				}
			}else{
				response.status(404).json({
						message: 'session with that id not found'
					});
			}
	}
	static deleteReview(request,response,next){
		if(request.user.mentor == 'admin'){
		const deleteReview = reviews.find(reviews=>reviews.sessionId == request.params.sessionId);
			if(deleteReview){
				reviews.splice(reviews.indexOf(deleteReview), 1);
				// request.deleteReview = deleteReview;
				next();
			}else{
				response.status(404).json({
					message: 'review with that id not found'
				});
			}

		}
		else{
			response.status(401).json({
				message: 'Unauthorised access'
			});
		}
	 }
	
}
export default Sessions;