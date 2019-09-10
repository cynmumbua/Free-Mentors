import chai from 'chai';
import mocha from 'mocha';
import app from '../index';
import request from 'request';
import chaiHttp from 'chai-http';
import user from './mocks/mocks.js';
const expect = chai.expect;
chai.use(chaiHttp);
const assert = chai.assert;

// resgistration test
describe('test user registration', ()=>{

	it('should create a new user', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send(user.signup).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(response.statusCode, 201);
			// expect(response.body.message).equals("++++++++++++++++++++++++++++++++")
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});

	it('should allow valid fname', (done)=>{
		chai.request(app).post('/api/v1/auth/signup')
		.send(user.fname).end((error,response)=>{
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
		.send(user.lname).end((error,response)=>{
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
		.send(user.email).end((error,response)=>{
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
		.send(user.password).end((error,response)=>{
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
		.send(user.address).end((error,response)=>{
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
		.send(user.bio).end((error,response)=>{
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
		.send(user.occupation).end((error,response)=>{
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
		.send(user.expertise).end((error,response)=>{
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







