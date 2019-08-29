const chai = require('chai');
const mocha = require('mocha');
const app = require('../index');
const request = require('request');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);
const assert = chai.assert;

// resgistration test
describe('test user registration', ()=>{
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
			assert.equal(409,response.statusCode);
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
			assert.equal(409,response.statusCode);
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
});

// view  mentors test
describe('test view mentors routes', ()=>{
	it('should list all mentors', (done)=>{
		chai.request(app).get('/api/v1/mentors')
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN5bm11bWJ1YUB5YWhvby5jb20iLCJpYXQiOjE1NjY2MzM1NTl9.gfvLG0yZe29S9CVv4f2NJvUm0U62TIeFf9Whp-ZG78M')
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

	it('should list one mentors', (done)=>{
		chai.request(app).get('/api/v1/mentors/1')
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN5bm11bWJ1YUB5YWhvby5jb20iLCJpYXQiOjE1NjY2MzM1NTl9.gfvLG0yZe29S9CVv4f2NJvUm0U62TIeFf9Whp-ZG78M')
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
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN5bm11bWJ1YUB5YWhvby5jb20iLCJpYXQiOjE1NjY2MzM1NTl9.gfvLG0yZe29S9CVv4f2NJvUm0U62TIeFf9Whp-ZG78M')
		.send({
			mentorId:1,
			questions: 'how are you?'
		})
		.end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(201,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	it('should not allow empty question', (done)=>{
		chai.request(app).post('/api/v1/sessions')
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN5bm11bWJ1YUB5YWhvby5jb20iLCJpYXQiOjE1NjY2MzM1NTl9.gfvLG0yZe29S9CVv4f2NJvUm0U62TIeFf9Whp-ZG78M')
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
		.set('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImN5bm11bWJ1YUB5YWhvby5jb20iLCJpYXQiOjE1NjY2MzM1NTl9.gfvLG0yZe29S9CVv4f2NJvUm0U62TIeFf9Whp-ZG78M')
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
});

