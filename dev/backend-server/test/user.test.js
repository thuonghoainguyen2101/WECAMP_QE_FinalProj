//=======================================================================================
import supertest from "supertest";
import index from "../index"
import mongoose from "mongoose";
import User from "../models/UserModel"
import data from "../data"
import connectDB from "../config/db/db"
import register from "../../../test/cypress-testing/cypress/fixtures/register.json"
import login from "../../../test/cypress-testing/cypress/fixtures/login.json"
//=======================================================================================

describe (' Create account POST /user/register', () =>{
    let request;
    beforeAll(async () => {await connectDB()});

    beforeEach(()=>{request = supertest(index)}); 

    
    test('01 - Create account with valid data', async()=>{
        let response = await request.post('/user/register').send(register[0]);
        expect(response.status).toBe(200);

        //expect(response.body).toMatchObject(register[0]);

        //reference: https://mongoosejs.com/docs/api/model.html#model_Model-deleteOne
        //await users.deleteOne({ "_id": `$ObjectId{body._id}` });
    })

    
    test('02 Create account with invalid data', async() =>{
        let response = await request.post('/user/register').send(register[4]);
        expect(response.status).toBe(400);
        expect(response.body).toBe('Invalid data');
    })

    
    test('03 - Create account with existing data', async() =>{
        let response = await request.post('/user/register').send(register[0]);
        expect(response.status).toBe(400);
        expect(response.body).toBe('User already exists');
    })
})

//=======================================================================================

describe('Login POST/user/login', () =>{
    let request;
    beforeAll(async () => {await connectDB()});
    beforeEach(()=>{request = supertest(index)}); 

    test('01 Login with valid data', async() =>{
        let response = await request.post('/user/login').send(login[0]);
        expect(response.status).toBe(200);
    })

    test('02 Login with invalid data', async() =>{
        let response = await request.post('/user/login').send(login[2]);
        expect(response.status).toBe(401);
        expect(response.body.message).toBe('invalid email or password');
    })
})
//=======================================================================================

describe(' Get all user GET /user', ()=>{
    let request;
})