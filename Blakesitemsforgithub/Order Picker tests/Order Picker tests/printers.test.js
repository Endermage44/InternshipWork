const app = require(`../../config`)
const supertest = require(`supertest`)
const request = supertest(app)

describe(`GET /<redacted>/printers/:company/:type`, () =>{
    test(`returns a list of all printer info within search`, async () => {
        const response = await request
            .get(`/<redacted>/printers`)
            .set(`company`, `CBP`)
            .query({ type: `2` })
            .send()

        expect(response.status).toBe(200)
    })

    test(`returns error when incorrect headers are entered`, async () => {
        const response = await request
            .get(`/<redacted>/printers`)
            .set({ company: `CP` })
            .query({ type: `2` })
            .send()

        expect(response.status).toBe(500)
    })
})