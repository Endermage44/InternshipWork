const app = require(`../../config`)
const supertest = require(`supertest`)
const request = supertest(app)

describe(`GET /<redacted>/items/on-hand-count`, () => {
    test(`returns a list of all warehouses containing item`, async () => {
        const response = await request
            .get(`/<redacted>/items/on-hand-count`)
            .set(`company`, `CBP`)
            .query({ id: `101102-00003`, uom: `EA` })
            .send()

        expect(response.status).toBe(200)
    })

    test(`returns an error when incorrect headers are entered`, async () => {
        const response = await request
            .get(`/<redacted>/items/on-hand-count`)
            .set({ company: `CP` })
            .query({ id: `101102-00003`, uom: `EA` })
            .send()

        expect(response.status).toBe(500)
    })
})