const chai = require('chai');
const mocha = require('mocha');
const app = require('../index');
const request = require('request');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);
const assert = chai.assert;

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
			assert.equal(400,response.statusCode);
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
			assert.equal(400,response.statusCode);
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
			assert.equal(400,response.statusCode);
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
			address: 'juja',
			bio: 'Christ follower',
			occupation: 'geologist',
			expertise: 'rocks'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(400,response.statusCode);
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
			assert.equal(400,response.statusCode);
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
			assert.equal(400,response.statusCode);
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
			assert.equal(400,response.statusCode);
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
			assert.equal(400,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
});


describe('test user login', ()=>{
	it('should allow valid username', (done)=>{
		chai.request(app).post('/api/v1/auth/signin')
		.send({
			email: 'someyahoocom',
			password: '123!q'
		}).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(400,response.statusCode);
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
			assert.equal(400,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
})