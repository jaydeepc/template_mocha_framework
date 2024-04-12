import axios from 'axios';
import { expect } from 'chai';
import baseUrl from '../config.js'
import User from '../model/User.js';


console.log("*************************************");
console.log(baseUrl);
console.log("*************************************");


describe('User API', () => {
    it('should return status code 200 when fetching user details', async () => {
        const response = await axios.get(`${baseUrl}/users/2`);
        expect(response.status).to.equal(axios.HttpStatusCode.Ok);

        const user = new User(response.data.data);
        expect(user.id).to.equal(2);
        expect(user.email).to.equal('janet.weaver@reqres.in');
        expect(user.firstName).to.equal('Janet');
        expect(user.lastName).to.equal('Weaver');
        expect(user.avatar).to.equal('https://reqres.in/img/faces/2-image.jpg');
    });

    it('should create a new user and return status code 201', async () => {
        const payload = {
            "name": "morpheus",
            "job": "leader"
        };

        const response = await axios.post(`${baseUrl}/api/users`, payload);
        expect(response.status).to.equal(201);
        const user = new User(response.data);
        expect(user.name).to.equal('morpheus');
        expect(user.job).to.equal('leader');
        expect(user.id).to.equal('502');
        expect(user.createdAt).to.equal('2024-04-12T05:32:58.167Z');
    });

});



