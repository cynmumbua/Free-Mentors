import chai from 'chai';
import mocha from 'mocha';
import app from '../index';
import request from 'request';
import chaiHttp from 'chai-http';
const expect = chai.expect;
chai.use(chaiHttp);
const assert = chai.assert;
import user from './mocks/mocks.js';

// view  mentors test
describe('test view mentors routes', ()=>{
	it('should list all mentors', (done)=>{
		chai.request(app).get('/api/v1/mentors')
		.set('token', user.viewMentorT)
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
		.set('token',user.viewMentorT)
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
		.set('token', user.viewMentorT)
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