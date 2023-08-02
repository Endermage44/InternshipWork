const app = require(`../../config`)
const supertest = require(`supertest`)
const request = supertest(app)

describe(`GET /<redacted>/settings`, () =>{
    test(`returns an array of all user settings for searched user`, async () => {
        const response = await request
            .get(`/<redacted>/settings`)
            .set({ company: `CBP`, user: `2` })
            .send()

        expect(response.status).toBe(200)
    })

    test(`returns error when incorrect headers entered`, async () => {
        const response = await request
            .get(`/<redacted>/settings`)
            .set({ company: `CP`, user: `2` })
            .send()

        expect(response.status).toBe(500)
    })
})

describe(`PATCH /<redacted>/settings`, () =>{
    test(`returns error when incorrect headers entered`, async () => {
        const mockBody = {
            "ship_categories": [],
            "default_printer": 100,
            "invoice_item_sort": `width`,
            "site_id": `2GA89EVTVE3SGAD1`,
            "warehouse": `2GA89EVTVE3SGAD1`,
            "show_alert_wrongitem": true,
            "default_label_printer": 100,
            "product_category": `all`
        }

        const response = await request
            .patch(`/<redacted>/settings`)
            .set({ company: `CP`, user: `549` })
            .send(mockBody)

        expect(response.status).toBe(500)
    })
})