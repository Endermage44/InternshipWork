const app = require(`../../config`)
const supertest = require(`supertest`)
const request = supertest(app)

describe(`GET /<redacted>/warehouses`, () =>{
    test(`returns an array of warehouses within search`, async () => {
        const response = await request
            .get(`/<redacted>/warehouses`)
            .set({ company: `CBP`, site: `110` })
            .send()

        expect(response.status).toBe(200)
    })

    test(`returns error when headers not entered`, async () => {
        const response = await request
            .get(`/<redacted>/warehouses`)
            .send()

        expect(response.status).toBe(500)
    })
})