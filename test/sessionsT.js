import chai from 'chai';
import mocha from 'mocha';
import app from '../index';
import request from 'request';
import chaiHttp from 'chai-http';
import user from './mocks/mocks.js';
const expect = chai.expect;
chai.use(chaiHttp);
const assert = chai.assert;

// session test
describe('test session routes', (done)=>{
	it('should create a new session', (done)=>{
		chai.request(app).post('/api/v1/sessions')
		.set('token', user.sessionT)
		.send(user.sessions)
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode,201);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	
	it('should not allow empty question', (done)=>{
		chai.request(app).post('/api/v1/sessions')
		.set('token', user.sessionT)
		.send(user.sessionsE)
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(409,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should not allow less than 6 characters', (done)=>{
		chai.request(app).post('/api/v1/sessions')
		.set('token',user.sessionT)
		.send(user.sessionsN)
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(409,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should return all user sessions', (done)=>{
		chai.request(app).get('/api/v1/sessions')
		.set('token',user.sessionT)
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(200,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should not list unavailable sessions', (done)=>{
		chai.request(app).get('/api/v1/sessions/140')
		.set('token',user.sessionT)
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(404,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should return all mentor sessions', (done)=>{
		chai.request(app).get('/api/v1/sessions')
		.set('token',user.sessionMT)
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(200,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should not list unavailable mentor sessions', (done)=>{
		chai.request(app).get('/api/v1/sessions/140')
		.set('token',user.sessionMT)
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 404);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should accept a session requested', (done)=>{
		chai.request(app).patch('/api/v1/sessions/1/accept')
		.set('token', user.sessionmMT)
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 200);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should reject a session requested', (done)=>{
		chai.request(app).patch('/api/v1/sessions/1/reject')
		.set('token', user.sessionmMT)
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 200);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should upgrade user to mentor', (done)=>{
		chai.request(app).patch('/api/v1/user/1')
		.set('token',user.sessionAT)
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 200);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	
	it('should not be less that 3 review', (done)=>{
		chai.request(app).post('/api/v1/sessions/1/review')
		.set('token', user.sessionT)
		.send(user.sessionsR)
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(409,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should not list unavailable sessions', (done)=>{
		chai.request(app).get('/api/v1/sessions/140/review')
		.set('token', user.sessionAT)
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 404);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should not list unavailable sessions reviews', (done)=>{
		chai.request(app).get('/api/v1/sessions/140/delete')
		.set('token', user.sessionAT)
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 404);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should delete review', (done)=>{
		chai.request(app).delete('/api/v1/sessions/1/delete')
		.set('token', user.sessionAT)
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 200);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should not allow user to delete review', (done)=>{
		chai.request(app).delete('/api/v1/sessions/1/delete')
		.set('token', user.viewMentorT)
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 401);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should not upgrade to mentor user not found', (done)=>{
		chai.request(app).delete('/api/v1/user/104')
		.set('token',user.sessionAT)
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 404);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	

});