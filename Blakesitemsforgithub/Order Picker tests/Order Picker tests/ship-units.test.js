const app = require(`../../config`)
const supertest = require(`supertest`)
const request = supertest(app)

describe(`GET /<redacted>/ship-units/:shipunit_id`, () =>{
    test(`returns an array of info for searched ship-unit`, async () => {
        const response = await request
            .get(`/<redacted>/ship-units/D358B677-A3B1-4C8C-B9AB-B9033398F5AB`)
            .set({ company: `CBP`, site: `110` })
            .send()

        expect(response.status).toBe(200)
    })

    test(`returns error when incorrect headers entered`, async () => {
        const response = await request
            .get(`/<redacted>/ship-units/D358B677-A3B1-4C8C-B9AB-B9033398F5AB`)
            .set({ company: `CP`, site: `110` })
            .send()

        expect(response.status).toBe(500)
    })
})

describe(`PATCH /<redacted>/ship-units/:shipunit_id`, () =>{
    test(`returns error when incorrect headers entered`, async () => {
        const mockBody = {
            "bundles": 1,
            "skids": 1,
            "bins": 1,
            "boxes": 1
        }

        const response = await request
            .patch(`/<redacted>/ship-units/A7482DA0-18CF-4B54-B97E-0635B104C28A`)
            .set({ company: `CP`, site: `110` })
            .send(mockBody)

        expect(response.status).toBe(500)
    })
})