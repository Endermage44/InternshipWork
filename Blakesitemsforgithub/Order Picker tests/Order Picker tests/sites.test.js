const app = require(`../../config`)
const supertest = require(`supertest`)
const request = supertest(app)

describe(`"GET /<redacted>/sites/:company`, () =>{
    test(`returns array of sites within company`, async () => {
        const response = await request
            .get(`/<redacted>/sites`)
            .set(`company`, `CBP`)
            .send()

        expect(response.status).toBe(200)
    })

    test(`returns error when incorrect headers entered`, async () => {
        const response = await request
            .get(`/<redacted>/sites`)
            .set({ company: `CP` })
            .send()

        expect(response.status).toBe(500)
    })
})