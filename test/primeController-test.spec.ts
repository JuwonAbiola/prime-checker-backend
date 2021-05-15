import chai, { expect } from 'chai';
import { config } from 'dotenv';
import chaiHttp from 'chai-http';
import server from '../src/index';


config();


const number = 55;

chai.use(chaiHttp);

describe('CONTROLLER TEST', () => {

    context('when a user passes a number', () => {
        it("its expected to return a succes response", async () => {
            const response = await chai
                .request(server)
                .get(`/api/v1/prime/${number}`);
            expect(response).to.have.status(200);
            expect(response.body.message).to.equal('The highest prime number lower than 55 is 53');
        });

    });

    context('when a user passes 1', () => {
        it("its expected to return a succes response", async () => {
            const response = await chai
                .request(server)
                .get(`/api/v1/prime/1`);
            expect(response).to.have.status(200);
        });

    });

    context('when a user passes a string', () => {
        it("its expected to return an error response", async () => {
            const response = await chai
                .request(server)
                .get(`/api/v1/prime/naruto`);
            expect(response).to.have.status(400);
            expect(response.body.message).to.equal('Please supply a number as query param ');
        });

    });


});
