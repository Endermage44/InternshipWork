const app = require(`../../config`)
const supertest = require(`supertest`)
const request = supertest(app)

describe(`GET /<redacted>/users/:company`, () =>{
    test(`returns a list of all users from a compnay`, async () => {
        const response = await request
            .get(`/<redacted>/users`)
            .set(`company`, `CBP`)
            .send()

        expect(response.status).toBe(200)
    })

    test(`returns error when incorrect headers entered`, async () => {
        const response = await request
            .get(`/<redacted>/users`)
            .set({ company: `CP` })
            .send()
        
        expect(response.status).toBe(500)
    })
})