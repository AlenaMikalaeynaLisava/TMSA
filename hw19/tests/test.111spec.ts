import superagent from "superagent";

describe('API test suite', () => {
    it(`status code check`, async () => {
        try {
        const response = await superagent.get('https://reqres.in/api/users?id=2')
        expect(response.status).toBe(200);
        } catch (err: any) {
            expect(err.message).toBe('')
        }
    });
    it(`status code check`, async () => {
        try {
        const response = await superagent.get('https://reqres.in/api/users').query({page:2});
        console.log(response.body);
        expect(response.body.total).toBe(12);
        } catch (err: any) {
            expect(err.message).toBe('')
        }
    });


        it(`create user`, async () => {
        try {
        const request = superagent.post('https://reqres.in/api/users')
            .send({name: "somename", job: "big big boss"});
        const response = await request;
        console.log(response.body)
        expect(response.status).toBe(201);
        } catch (err: any) {
            expect(err.message).toBe('Something')
        }
    });


    it(`change user`, async () => {
        try {
        const request = superagent.post('https://reqres.in/api/users/2')
            .send({name: "morpheus", job: "zion resident"});
        const response = await request;
        console.log(response.body)
        expect(response.status).toBe(200);
        } catch (err: any) {
            expect(err.message).toBe('Something else')
        }
    });

    it(`change users list`, async () => {
        try {
        const request = superagent.patch('https://reqres.in/api/users/2')
            .send({first_name: "morpheus11", last_name: "zion resident45"});
        const response = await request;
        expect(response.status).toBe(200);
        } catch (err: any) {
            expect(err.message).toBe('There is no possibility to change data')
        }
    });

    it(`get user`, async () => {
        try {
        const request = superagent.get('https://reqres.in/api/users/10');
        const response = await request;
        console.log(response.body)
        expect(response.status).toBe(200);
        } catch (err: any) {
            expect(err.message).toBe('')
        }
    });

    it(`delete user`, async () => {
        try {
        const request = superagent.delete('https://reqres.in/api/users/7');
        const response = await request;
        expect(response.status).toBe(204);
        } catch (err: any) {
            expect(err.message).toBe('There is no possibility to delete user')
        }
    });

    it(`get user`, async () => {
        try {
        const request = superagent.get('https://reqres.in/api/users/7');
        const response = await request;
        console.log(response.body)
        expect(response.status).toBe(200);
        } catch (err: any) {
            expect(err.message).toBe('')
        }
    });


    it(`post register`, async () => {
        try {
        const request = superagent.post('https://reqres.in//api/register')
                 .send({"email": "sydney@fife"});
        const response = await request;
        expect(response.status).toBe(400);
        } catch (err: any) {
            expect(err.message).toBe('')
        }
    });


    it(`get user`, async () => {
        try {
        const request = superagent.get('https://reqres.in/api/users?page=3');
        const response = await request;
        console.log(response.body)
        expect(response.status).toBe(200);
        } catch (err: any) {
            expect(err.message).toBe('')
        }
    });
    
});