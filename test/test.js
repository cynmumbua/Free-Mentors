import chai from 'chai';
import mocha from 'mocha';
import app from '../index';
import request from 'request';
import chaiHttp from 'chai-http';
const expect = chai.expect;
chai.use(chaiHttp);
const assert = chai.assert;

// resgistration test
describe('test user registration', ()=>{
	// it('should create a new user', (done)=>{
	// 	chai.request(app).post('/api/v1/auth/signup')
	// 	.send({
	// 		firstName: 'Cynthia',
	// 		lastName: 'muinde',
	// 		email: 'some@yahoo.com',
	// 		password: '123!q',
	// 		address: 'juja',
	// 		bio: 'Christ follower',
	// 		occupation: 'geologist',
	// 		expertise: 'rocks'
	// 	})
	// 	.end((error,response)=>{
	// 		expect(response).to.be.an('object');
	// 		assert.equal(response.statusCode,201);
	// 		if (error){
	// 			console.log(error);
	// 			done();
	// 		}
	// 		done();
	// 	});
	// });
	it('should allow valid fname', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send({
			firstName: 'Cy',
			lastName: 'muinde',
			email: 'some@yahoo.com',
			password: '123!q',
			address: 'juja',
			bio: 'Christ follower',
			occupation: 'geologist',
			expertise: 'rocks'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 409);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should not allow blank fname', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send({
			firstName: '',
			lastName: 'muinde',
			email: 'some@yahoo.com',
			password: '123!q',
			address: 'juja',
			bio: 'Christ follower',
			occupation: 'geologist',
			expertise: 'rocks'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 409);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});

	it('should allow valid lname', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send({
			firstName: 'cynthia',
			lastName: 'mu',
			email: 'some@yahoo.com',
			password: '123!q',
			address: 'juja',
			bio: 'Christ follower',
			occupation: 'geologist',
			expertise: 'rocks'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 409);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should not allow blank lname', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send({
			firstName: 'cynthia',
			lastName: '',
			email: 'some@yahoo.com',
			password: '123!q',
			address: 'juja',
			bio: 'Christ follower',
			occupation: 'geologist',
			expertise: 'rocks'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 409);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});

	it('should allow valid email', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send({
			firstName: 'cynthia',
			lastName: 'muinde',
			email: 'someyahoocom',
			password: '123!q',
			address: 'juja',
			bio: 'Christ follower',
			occupation: 'geologist',
			expertise: 'rocks'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(409,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should not allow blank email', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send({
			firstName: 'cynthia',
			lastName: '',
			email: '',
			password: '123!q',
			address: 'juja',
			bio: 'Christ follower',
			occupation: 'geologist',
			expertise: 'rocks'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 409);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});


	it('should allow valid password', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send({
			firstName: 'cynthia',
			lastName: 'muinde',
			email: 'some@yahoo.com',
			password: '12345',
			address: 'ju',
			bio: 'Christ follower',
			occupation: 'geologist',
			expertise: 'rocks'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(409,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should not allow blank password', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send({
			firstName: 'cynthia',
			lastName: 'muinde',
			email: 'some@yahoo.com',
			password: '',
			address: 'juja',
			bio: 'Christ follower',
			occupation: 'geologist',
			expertise: 'rocks'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 409);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});


	it('should allow valid address', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send({
			firstName: 'cynthia',
			lastName: 'muinde',
			email: 'some@yahoo.com',
			password: '123!q',
			address: 'ju',
			bio: 'Christ follower',
			occupation: 'geologist',
			expertise: 'rocks'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(409,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should not allow blank address', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send({
			firstName: 'cynthia',
			lastName: 'muinde',
			email: 'some@yahoo.com',
			password: '123!q',
			address: '',
			bio: 'Christ follower',
			occupation: 'geologist',
			expertise: 'rocks'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 409);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});


	it('should allow valid bio', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send({
			firstName: 'cynthia',
			lastName: 'muinde',
			email: 'some@yahoo.com',
			password: '123!q',
			address: 'juja',
			bio: '4g 1j',
			occupation: 'geologist',
			expertise: 'rocks'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(409,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});

	it('should not allow blank bio', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send({
			firstName: 'cynthia',
			lastName: 'muinde',
			email: 'some@yahoo.com',
			password: '123!q',
			address: 'juja',
			bio: '',
			occupation: 'geologist',
			expertise: 'rocks'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 409);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});


	it('should allow valid occupation', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send({
			firstName: 'cynthia',
			lastName: 'muinde',
			email: 'some@yahoo.com',
			password: '123!q',
			address: 'juja',
			bio: 'Christ follower',
			occupation: '7894',
			expertise: 'rocks'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(409,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should not allow blank occupation', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send({
			firstName: 'cynthia',
			lastName: 'muinde',
			email: 'some@yahoo.com',
			password: '123!q',
			address: 'juja',
			bio: 'Christ follower',
			occupation: '',
			expertise: 'rocks'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 409);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});

	it('should allow valid expertise', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send({
			firstName: 'cynthia',
			lastName: 'muinde',
			email: 'some@yahoo.com',
			password: '123!q',
			address: 'juja',
			bio: 'Christ follower',
			occupation: 'geologist',
			expertise: '74!1'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(409,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});

	it('should not allow blank expertise', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send({
			firstName: 'cynthia',
			lastName: 'muinde',
			email: 'some@yahoo.com',
			password: '123!q',
			address: 'juja',
			bio: 'Christ follower',
			occupation: 'geologist',
			expertise: ''
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(409,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	
});

// signin test
describe('test user login', ()=>{
	
	it('should allow valid username', (done)=>{
		chai.request(app).post('/api/v1/auth/signin')
		.send({
			email: 'someyahoocom',
			password: '123!q'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(409,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should not allow blank username', (done)=>{
		chai.request(app).post('/api/v1/auth/signin')
		.send({
			email: '',
			password: '123!q'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 409);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});

	it('should allow valid password', (done)=>{
		chai.request(app).post('/api/v1/auth/signin')
		.send({
			email: 'some@yahoo.com',
			password: '12345'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(409,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	// it('should not allow matched password', (done)=>{
	// 	chai.request(app).post('/api/v1/auth/signin')
	// 	.send({
	// 		email: 'some@yahoo.com',
	// 		password: '123!q'
	// 	}).end((error,response)=>{
	// 		expect(response).to.be.an('object');
	// 		assert.equal(response.statusCode, 409);
	// 		if (error){
	// 			console.log(error);
	// 			done();
	// 		}
	// 		done();
	// 	});
	// });
	// it('should login user', (done)=>{
	// 	chai.request(app).post('/api/v1/auth/signin')
	// 	.send({
	// 		email: 'some@yahoo.com',
	// 		password: '123!q',
	// 		})
	// 	.end((error,response)=>{
	// 		expect(response).to.be.an('object');
	// 		assert.equal(response.statusCode, 200);
	// 		if (error){
	// 			console.log(error);
	// 			done();
	// 		}
	// 		done();
	// 	});
	// });
});

// view  mentors test
describe('test view mentors routes', ()=>{
	it('should list all mentors', (done)=>{
		chai.request(app).get('/api/v1/mentors')
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN5bm11bWJ1YUB5YWhvby5jb20iLCJpYXQiOjE1NjY2MzM1NTl9.gfvLG0yZe29S9CVv4f2NJvUm0U62TIeFf9Whp-ZG78M')
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode,200);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});

	it('should list one mentor', (done)=>{
		chai.request(app).get('/api/v1/mentors/2')
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN5bm11bWJ1YUB5YWhvby5jb20iLCJpYXQiOjE1NjY2MzM1NTl9.gfvLG0yZe29S9CVv4f2NJvUm0U62TIeFf9Whp-ZG78M')
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode,200);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should not list unavailable mentor', (done)=>{
		chai.request(app).get('/api/v1/mentors/140')
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN5bm11bWJ1YUB5YWhvby5jb20iLCJpYXQiOjE1NjY2MzM1NTl9.gfvLG0yZe29S9CVv4f2NJvUm0U62TIeFf9Whp-ZG78M')
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
});

// session test
describe('test session routes', (done)=>{
	it('should create a new session', (done)=>{
		chai.request(app).post('/api/v1/sessions')
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiY3lubXVtYnVhQGdtYWlsLmNvbSIsIm1lbnRvciI6ZmFsc2UsImlhdCI6MTU2Njc1NjYzOH0.jpNI435zJqOg_kTcwW3OuefcApjF6CaL2or44X8h-tQ')
		.send({
			mentorId:2,
			questions: 'how are you?'
		})
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
	// it('should not allow mentor to create a new session', (done)=>{
	// 	chai.request(app).post('/api/v1/sessions')
	// 	.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImVtYWlsIjoiY3lubXVtYnVhQHlhaG9vLmNvbSIsIm1lbnRvciI6dHJ1ZSwiaWF0IjoxNTY2NzU1NzI4fQ.PpKb1N3qBTjWwE_njrQphTQniWPa8GB3zWL1dcCSCmg')
	// 	.send({
	// 		mentorId:2,
	// 		questions: 'how are you?'
	// 	})
	// 	.end((error,response)=>{
	// 		expect(response).to.be.an('object');
	// 		assert.equal(response.statusCode,401);
	// 		if (error){
	// 			console.log(error);
	// 			done();
	// 		}
	// 		done();
	// 	});
	// });
	it('should not allow empty question', (done)=>{
		chai.request(app).post('/api/v1/sessions')
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiY3lubXVtYnVhQGdtYWlsLmNvbSIsIm1lbnRvciI6ZmFsc2UsImlhdCI6MTU2Njc1MDY1MX0.tR7d7qDFiUHb3v5K56rMRZiBdzoJF48JsN1rupHBGLA')
		.send({
			mentorId:1,
			questions: ''
		})
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
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiY3lubXVtYnVhQGdtYWlsLmNvbSIsIm1lbnRvciI6ZmFsc2UsImlhdCI6MTU2Njc1MDY1MX0.tR7d7qDFiUHb3v5K56rMRZiBdzoJF48JsN1rupHBGLA')
		.send({
			mentorId:1,
			questions: 'howar'
		})
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
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiY3lubXVtYnVhQGdtYWlsLmNvbSIsIm1lbnRvciI6ZmFsc2UsImlhdCI6MTU2Njc1MDY1MX0.tR7d7qDFiUHb3v5K56rMRZiBdzoJF48JsN1rupHBGLA')
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
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiY3lubXVtYnVhQGdtYWlsLmNvbSIsIm1lbnRvciI6ZmFsc2UsImlhdCI6MTU2Njc1MDY1MX0.tR7d7qDFiUHb3v5K56rMRZiBdzoJF48JsN1rupHBGLA')
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
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImVtYWlsIjoiY3lubXVtYnVhQHlhaG9vLmNvbSIsIm1lbnRvciI6dHJ1ZSwiaWF0IjoxNTY2NzU1NzI4fQ.PpKb1N3qBTjWwE_njrQphTQniWPa8GB3zWL1dcCSCmg')
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
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImVtYWlsIjoiY3lubXVtYnVhQHlhaG9vLmNvbSIsIm1lbnRvciI6dHJ1ZSwiaWF0IjoxNTY2NzU1NzI4fQ.PpKb1N3qBTjWwE_njrQphTQniWPa8GB3zWL1dcCSCmg')
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
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImVtYWlsIjoiY3lubXVtYnVhQHlhaG9vLmNvbSIsIm1lbnRvciI6dHJ1ZSwiaWF0IjoxNTY2NzU5NDE0fQ.toDKOoMyFbAjukKkwNf9-1Zn-44LhrPwJfVfvQ5svdM')
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
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImVtYWlsIjoiY3lubXVtYnVhQHlhaG9vLmNvbSIsIm1lbnRvciI6dHJ1ZSwiaWF0IjoxNTY2NzU5NDE0fQ.toDKOoMyFbAjukKkwNf9-1Zn-44LhrPwJfVfvQ5svdM')
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
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoiY3lubXVtYnVhQGdpdGh1Yi5jb20iLCJtZW50b3IiOiJhZG1pbiIsImlhdCI6MTU2Njc2MzI0MH0.3tX6eeo3NPhSOeNZPc9tpO2eGQ2zxqz0C_21FTNWWqk')
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
	// it('should create a session review', (done)=>{
	// 	chai.request(app).post('/api/v1/sessions/1/review')
	// 	.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiY3lubXVtYnVhQGdtYWlsLmNvbSIsIm1lbnRvciI6ZmFsc2UsImlhdCI6MTU2Njc1MDY1MX0.tR7d7qDFiUHb3v5K56rMRZiBdzoJF48JsN1rupHBGLA')
	// 	.send({
	// 		score: 5,
	// 		remark: 'Goood'
	// 	})
	// 	.end((error,response)=>{
	// 		expect(response).to.be.an('object');
	// 		assert.equal(response.statusCode, 200);
	// 		if (error){
	// 			console.log(error);
	// 			done();
	// 		}
	// 		done();
	// 	});
	// });
	it('should not be less that 3 review', (done)=>{
		chai.request(app).post('/api/v1/sessions/1/review')
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiY3lubXVtYnVhQGdtYWlsLmNvbSIsIm1lbnRvciI6ZmFsc2UsImlhdCI6MTU2Njc1MDY1MX0.tR7d7qDFiUHb3v5K56rMRZiBdzoJF48JsN1rupHBGLA')
		.send({
			score:1,
			remark: 'hds'
		})
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
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoiY3lubXVtYnVhQGdpdGh1Yi5jb20iLCJtZW50b3IiOiJhZG1pbiIsImZpcnN0TmFtZSI6ImN5bnRoaWEiLCJsYXN0TmFtZSI6ImpnZ2YiLCJpYXQiOjE1NjcxMTE0MzN9.cvFn2_iDBc4LUE_dUXxITwp6jwmWhJ5W56INHRkZtro')
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
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoiY3lubXVtYnVhQGdpdGh1Yi5jb20iLCJtZW50b3IiOiJhZG1pbiIsImZpcnN0TmFtZSI6ImN5bnRoaWEiLCJsYXN0TmFtZSI6ImpnZ2YiLCJpYXQiOjE1NjcxMTE0MzN9.cvFn2_iDBc4LUE_dUXxITwp6jwmWhJ5W56INHRkZtro')
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
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoiY3lubXVtYnVhQGdpdGh1Yi5jb20iLCJtZW50b3IiOiJhZG1pbiIsImZpcnN0TmFtZSI6ImN5bnRoaWEiLCJsYXN0TmFtZSI6ImpnZ2YiLCJpYXQiOjE1NjcxMTE0MzN9.cvFn2_iDBc4LUE_dUXxITwp6jwmWhJ5W56INHRkZtro')
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
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN5bm11bWJ1YUB5YWhvby5jb20iLCJpYXQiOjE1NjY2MzM1NTl9.gfvLG0yZe29S9CVv4f2NJvUm0U62TIeFf9Whp-ZG78M')
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
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoiY3lubXVtYnVhQGdpdGh1Yi5jb20iLCJtZW50b3IiOiJhZG1pbiIsImZpcnN0TmFtZSI6ImN5bnRoaWEiLCJsYXN0TmFtZSI6ImpnZ2YiLCJpYXQiOjE1NjcxMTE0MzN9.cvFn2_iDBc4LUE_dUXxITwp6jwmWhJ5W56INHRkZtro')
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
	// it('should not allow user to upgrade to mentor', (done)=>{
	// 	chai.request(app).delete('/api/v1/user/1')
	// 	.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoiY3lubXVtYnVhQGdtYWlsLmNvbSIsIm1lbnRvciI6ZmFsc2UsImZpcnN0TmFtZSI6ImN5bnRoaWEiLCJsYXN0TmFtZSI6ImpnZ2YiLCJpYXQiOjE1Njc3MzY4NzZ9.z9aqIbqe04Z7bGsZgBbjVAnvT_7U6uaTbwkLh6Jzv-8')
	// 	.end((error,response)=>{
	// 		expect(response).to.be.an('object');
	// 		assert.equal(response.statusCode, 401);
	// 		if (error){
	// 			console.log(error);
	// 			done();
	// 		}
	// 		done();
	// 	});
	// });
	

});

