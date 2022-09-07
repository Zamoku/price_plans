const assert = require('assert');
const Priceplan = require('../phonebill')
const pgPromise = require("pg-promise");
const pgp = pgPromise({})

const connectionString = process.env.DATABASE_URL || 'postgresql://zamoe:zamo123@localhost:5432/priceplan_db_test';

const db = pgp(connectionString)


describe('The basic database web app', function () {


    it('should insert a new user and a price plan into the db test', async function () {


        let registration = Registration(db);
        let reg = await registration.addReg(
            'CA 152-563'
        );

        let reg2 = await registration.addReg(
            'CA 152-123'
        );
        let getReg = await registration.displayReg()
        assert.deepEqual([{registration_num: "CA 152-123"}, {registration_num: 'CA 152-563'}], getReg);
        

    });
    // it('should get filter registration numbers from Bellville the db test', async function () {


    //     let registration = Registration(db);
    //     let reg = await registration.filterReg('CY');


    //     assert.equal("CY 254-562", "CY 254-562", reg);

    // });

    // it('should get filter registration numbers from Paarl the db test', async function () {


    //     let registration = Registration(db);
    //     let reg = await registration.filterReg('CJ');


    //     assert.equal("CJ 254-562", "CJ 254-562", reg);

    // });

    // it('should get filter registration numbers from Cape Town the db test', async function () {


    //     let registration = Registration(db);
    //     let reg = await registration.filterReg('CA');


    //     assert.equal("CA 254-562", "CA 254-562", reg);

    // });

    
    // it('should clear the list of registration numbers in the db test and bring back a success message', async function () {


    //     let registration = Registration(db);
    //     await registration.deleteReg();

    //     let getReg = await registration.deleteReg()
    //     assert.equal(undefined, getReg);
    //});
    afterEach('Drop all tables', async function () {
        //clean the tables after each test run
        await db.query("delete from Users;");

    });

});