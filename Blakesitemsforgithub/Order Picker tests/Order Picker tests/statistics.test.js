const app = require(`../../config`)
const supertest = require(`supertest`)
const request = supertest(app)

describe(`GET /<redacted>/statistics/tasks/list`, () =>{
    test(`returns array of tasks within search requirements`, async () => {
        const response = await request
            .get(`/<redacted>/statistics/tasks/list`)
            .set({ company: `CBP` })
            .send()

        expect(response.status).toBe(200)
    })

    test(`returns error when incorrect headers entered`, async () => {
        const response = await request
            .get(`/<redacted>/statistics/tasks/list`)
            .set({ company: `CP` })
            .send()

        expect(response.status).toBe(500)
    })
})

describe(`GET /<redacted>/statistics/tasks`, () =>{
    test(`returns array of all tasks within company`, async () => {
        const response = await request
            .get(`/<redacted>/statistics/tasks`)
            .set({ company: `CBP` })
            .send()

        expect(response.status).toBe(200)
    })

    test(`returns error when incorrect headers entered`, async () => {
        const response = await request
            .get(`/<redacted>/statistics/tasks`)
            .set({ company: `CP` })
            .send()

        expect(response.status).toBe(500)
    })
})

describe(`GET /<redacted>/statistics/items/list`, () =>{
    test(`returns an array of all items at a location`, async () => {
        const response = await request
            .get(`/<redacted>/statistics/items/list`)
            .set({ company: `CBP`, site: `110`, warehouse: `110` })
            .send()

        expect(response.status).toBe(200)
    })

    test(`rteurns error when incorrect headers entered`, async () => {
        const response = await request
            .get(`/<redacted>/statistics/items/list`)
            .set({ company: `CP`, site: `110`, warehouse: `110` })
            .send()

        expect(response.status).toBe(500)
    })
})

describe(`GET /<redacted>/statistics/items`, () =>{
    test(`returns array of all info for each part within location`, async () => {
        const response = await request
            .get(`/<redacted>/statistics/items`)
            .set({ site: `110`, company: `CBP`, warehouse: `110` })
            .send()

        expect(response.status).toBe(200)
    })

    test(`returns error when incorrect headers entered`, async () => {
        const response = await request
            .get(`/<redacted>/statistics/items`)
            .set({ site: `110`, company: `CP`, warehouse: `110` })
            .send()

        expect(response.status).toBe(500)
    })
})

describe(`GET /<redacted>/statistics/accuracy`, () =>{
    test(`returns array of all statistics for specified area`, async () => {
        const response = await request
            .get(`/<redacted>/statistics/accuracy`)
            .set({ company: `CBP` })
            .send()

        expect(response.status).toBe(200)
    })

    test(`returns error when incorrect headers enetered`, async () => {
        const response = await request
            .get(`/<redacted>/statistics/accuracy`)
            .set({ company: `CP` })
            .send()

        expect(response.status).toBe(500)
    })
})