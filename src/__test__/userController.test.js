const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');
const User = require('../models/user.model');
const Cargo = require('../models/cargo.model');

describe('user controller test', () => {
    let dbCargo;
    let createdUserId;

    beforeEach(async () => {
        await User.deleteMany();
        await Cargo.deleteMany();

        dbCargo = new Cargo({
            name: "Gerente general",
            description: "Analista de datos y gestion humana"
        });

        await dbCargo.save();
    }, 10000);

    afterAll(async () => {
        await User.deleteMany();
        await Cargo.deleteMany();
        await mongoose.connection.close();
    });

    it('should create a user', async () => {
        const userData = {
            nDoc: "1001049334",
            name: "Analista data y gestion humana",
            username: "yalef@correo.com",
            password: "Yal1234#",
            cargo: dbCargo._id.toString()
        };

        const response = await request(app).post('/api/users/').send(userData);

        expect(response.status).toBe(200);
        expect(response.body.ok).toBe(true);
        expect(response.body.data).toHaveProperty('nDoc', userData.nDoc);
        expect(response.body.data).toHaveProperty('name', userData.name);
        expect(response.body.data).toHaveProperty('username', userData.username);
        expect(response.body.data).toHaveProperty('cargo', userData.cargo);

        createdUserId = response.body.data._id;
    });

    it('should get all users', async () => {
        const response = await request(app).get('/api/users/');

        expect(response.status).toBe(200);
        expect(response.body.ok).toBe(true);
        expect(Array.isArray(response.body.data)).toBe(true);
    });

    it('should get a user by id', async () => {
        // Create a user first if not created
        if (!createdUserId) {
            const userData = {
                nDoc: "1001049335",
                name: "User for getById",
                username: "usergetbyid@correo.com",
                password: "Yal1234#",
                cargo: dbCargo._id.toString()
            };
            const createResponse = await request(app).post('/api/users/').send(userData);
            createdUserId = createResponse.body.data._id;
        }

        const response = await request(app).get(`/api/users/${createdUserId}`);

        expect(response.status).toBe(200);
        expect(response.body.ok).toBe(true);
        expect(response.body.data).toHaveProperty('_id', createdUserId);
    });

    it('should update a user by id with PUT', async () => {
        // Create a user first if not created
        if (!createdUserId) {
            const userData = {
                nDoc: "1001049336",
                name: "User for put update",
                username: "userput@correo.com",
                password: "Yal1234#",
                cargo: dbCargo._id.toString()
            };
            const createResponse = await request(app).post('/api/users/').send(userData);
            createdUserId = createResponse.body.data._id;
        }

        const updateData = {
            nDoc: "1001049336",
            name: "User updated put",
            username: "userputupdated@correo.com",
            password: "NewPass123#",
            cargo: dbCargo._id.toString()
        };

        const response = await request(app).put(`/api/users/${createdUserId}`).send(updateData);

        expect(response.status).toBe(200);
        expect(response.body.ok).toBe(true);
        expect(response.body.data).toHaveProperty('name', updateData.name);
        expect(response.body.data).toHaveProperty('username', updateData.username);
    });

    it('should update a user by id with PATCH', async () => {
        // Create a user first if not created
        if (!createdUserId) {
            const userData = {
                nDoc: "1001049337",
                name: "User for patch update",
                username: "userpatch@correo.com",
                password: "Yal1234#",
                cargo: dbCargo._id.toString()
            };
            const createResponse = await request(app).post('/api/users/').send(userData);
            createdUserId = createResponse.body.data._id;
        }

        const patchData = {
            name: "User patched name"
        };

        const response = await request(app).patch(`/api/users/${createdUserId}`).send(patchData);

        expect(response.status).toBe(200);
        expect(response.body.ok).toBe(true);
        expect(response.body.data).toHaveProperty('name', patchData.name);
    });

    it('should delete a user by id', async () => {
        // Create a user first if not created
        if (!createdUserId) {
            const userData = {
                nDoc: "1001049338",
                name: "User for delete",
                username: "userdelete@correo.com",
                password: "Yal1234#",
                cargo: dbCargo._id.toString()
            };
            const createResponse = await request(app).post('/api/users/').send(userData);
            createdUserId = createResponse.body.data._id;
        }

        const response = await request(app).delete(`/api/users/${createdUserId}`);

        expect(response.status).toBe(200);
        expect(response.body.ok).toBe(true);
        expect(response.body.data).toHaveProperty('_id', createdUserId);

        // Reset createdUserId to avoid reuse
        createdUserId = null;
    });
});
