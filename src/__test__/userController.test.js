const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');
const User = require('../models/user.model');
const Cargo = require('../models/cargo.model')

describe('user controller test', () => {
    beforeEach(async () => {
        await User.deleteMany();
        await Cargo.deleteMany();
    }, 10000)

    afterAll(async () => {
        await User.deleteMany();
        await Cargo.deleteMany();
        await mongoose.connection.close()
    })

    it('Este test deberia crear un usuario', async () => {
        const dbCargo = new Cargo ({
            "name": "Gerente general",
            "description": "Analista de datos y gestion humana"
        })

        await dbCargo.save();

        const userData = {
             "nDoc": "1001049334",
             "name": "Analista data y gestion humana",
             "username": "yalef@correo.com",
             "password": "Yal1234#",
             "cargo": "6806e5853947ddfeac1dedec"
         }

        const response = await request(app).post('/api/auth/register').send(userData);

        expect(response.body.data).toHaveProperty('nDoc', 'name', 'username', 'password', 'cargo');
    })

})