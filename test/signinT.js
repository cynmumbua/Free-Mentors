import chai from 'chai';
import mocha from 'mocha';
import app from '../index';
import request from 'request';
import chaiHttp from 'chai-http';
import user from './mocks/mocks.js';
const expect = chai.expect;
chai.use(chaiHttp);
const assert = chai.assert;

// signin test
describe('test user login', ()=>{
	
	it('should allow valid username', (done)=>{
		chai.request(app).post('/api/v1/auth/signin')
		.send(user.username).end((error,response)=>{
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
		.send(user.passwordl).end((error,response)=>{
			expect(response).to.be.an('object');
			assert.equal(409,response.statusCode);
			if (error){
				console.log(error);
				done();
			}
			done();
		});
	});
	
	it('should login user', (done)=>{
		chai.request(app).post('/api/v1/auth/signin')
		.send(user.login)
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
});