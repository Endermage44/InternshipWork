const app = require(`../../config`)
const supertest = require(`supertest`)
const request = supertest(app)

describe(`GET /<redacted>/invoices`, () =>{
    test(`returns array of data within search params`, async () => {
        const response = await request
            .get(`/<redacted>/invoices`)
            .set({ company: `CBP`, site: `110`, warehouse: `110`, user: `2` })
            .query({ scope: `user` })
            .send()

        expect(response.status).toBe(200)
    })

    test(`returns error when incorrect headers entered`, async () => {
        const response = await request
            .get(`/<redacted>/invoices`)
            .set({ company: `CP`, site: `110`, warehouse: `110`, user: `2` })
            .query({ scope: `user` })
            .send()

        expect(response.status).toBe(500)
    })
})

describe(`PATCH /<redacted>/invoices/:invoice_id/reassign`, () =>{
    test(`returns error when incorrect headers entered`, async () => {
        const mockBody = {
            "shipmentSysRowId": `82A57AB7-B849-4042-BAE9-FC5BE2A3EE91`,
            "to_user": 2
        }

        const response = await request
            .patch(`/<redacted>/invoices/182189/reassign`)
            .set({ company: `CP`, site: `110`, warehouse: `110`, user: `2` })
            .send(mockBody)

        expect(response.status).toBe(500)
    })
})

describe(`POST /<redacted>/invoices/:salesOrderNum/print-label`, () =>{
    test(`returns error when incorrect headers entered`, async () => {
        const mockBody = {
            "shipmentSysRowId": `2F324DA8-45EF-4587-9609-E14693BFC478`,
            "items": [
                `C068407B-F8F4-4DA2-B6A6-84B87FE0F34A, 1`
            ],
            "copies": 2
        }

        const response = await request
            .post(`/<redacted>/invoices/1/print-label`)
            .set({ company: `CP`, site: `110`, user: `2` })
            .send(mockBody)

        expect(response.status).toBe(500)
    })
})

describe(`POST /<redacted>/invoices/:salesOrderNum/print-packing-list`, () =>{
    test(`returns error when incorrect headers entered`, async () => {
        const mockBody = {
            "shipmentSysRowId": `2F324DA8-45EF-4587-9609-E14693BFC478`
        }

        const response = await request
            .post(`/<redacted>/invoices/1/print-packing-list`)
            .set({ company: `CP`, user: `2` })
            .send(mockBody)

        expect(response.status).toBe(500)
    })
})

describe(`PATCH /<redacted>/invoices/6A3TCFRO45S7L000/picture-count`, () =>{
    test(`returns error when incorrect headers entered`, async () => {
        const mockBody = {
            "count": 1
        }

        const response = await request
            .patch(`/<redacted>/invoices/6A3TCFRO45S7L000/picture-count`)
            .set({ company: `CP`, site: `110` })
            .send(mockBody)

        expect(response.status).toBe(500)
    })
})

describe(`PATCH /<redacted>/invoices/0QPCK2LL9R6G2H00/shipping-info`, () =>{
    test(`returns error when incorrect header entered`, async () => {
        const mockBody = {
            "tracking_number": `TESTTRACK`,
            "weight": 500
        }

        const response = await request
            .patch(`/<redacted>/invoices/0QPCK2LL9R6G2H00/shipping-info`)
            .set({ company: `CP` })
            .send(mockBody)

        expect(response.status).toBe(500)
    })
})

describe(`PATCH /<redacted>/invoices/C1IK2NU4ER6G2H00/acknowledge-change`, () =>{
    test(`returns error when incorrect headers entered`, async () => {
        const mockBody = {
            "stash_locations": `[{"location":"a location","item_ids":["EB88RQ15ER6G2H00","MJCPHL06ER6G2H00"]},{"location":"another location","item_ids":["2RL0STL5ER6G2H00"]}]`,
            "bundles": 1,
            "skids": 2,
            "bins": 3,
            "boxes": 4
        }

        const response = await request
            .patch(`/<redacted>/invoices/C1IK2NU4ER6G2H00/acknowledge-change`)
            .set({ company: `CP`, site: `110`, user: `2` })
            .send(mockBody)

        expect(response.status).toBe(500)
    })
})

describe(`POST /<redacted>/invoices`, () =>{
    test(`returns error when incorrect headers entered`, async () => {
        const mockBody = {
            "ship_categories": []
        }

        const response = await request
            .post(`/<redacted>/invoices`)
            .set({ company: `CP`, user: `2`, site: `110`, warehouse: `110` })
            .send(mockBody)

        expect(response.status).toBe(500)
    })
})

describe(`PATCH /<redacted>/invoices/182209/prioritize`, () =>{
    test(`returns error when incorrect headers entered`, async () => {
        const mockBody = {
            "prioritize_before": true,
            "sourceSysRowId": `1e126d33-832a-4876-82a0-7cd46ef017e0`,
            "destination_invoice": `182209`,
            "destinationSysRowId": `104d2b0b-2398-4573-8ff7-1ecc7a9e62c6`
        }

        const response = await request
            .patch(`/<redacted>/invoices/182209/prioritize`)
            .set({ company: `CP`, site: `110` })
            .send(mockBody)

        expect(response.status).toBe(500)
    })
})

describe(`PATCH /<redacted>/invoices/:invoice_id/shelve`, () =>{
    test(`returns error when incorrect headers entered`, async () => {
        const mockBody = {
            "shipmentSysRowId": `1e126d33-832a-4876-82a0-7cd46ef017e0`,
            "message": `It's Ryan's fault`
        }

        const response = await request
            .patch(`/<redacted>/invoices/182209/shelve`)
            .set({ compny: `CP`, site: `110`, user: `2` })
            .send(mockBody)

        expect(response.status).toBe(500)
    })
})

describe(`PATCH /<redacted>/invoices/:inovice_id/unshelve`, () =>{
    test(`returns error when incorrect headers entered`, async () => {
        const mockBody = {
            "shipmentSysRowId": `104d2b0b-2398-4573-8ff7-1ecc7a9e62c6`
        }

        const response = await request
            .patch(`/<redacted>/invoices/182209/unshelve`)
            .set({ company: `CP`, site: `110`, user: `2` })
            .send(mockBody)

        expect(response.status).toBe(500)
    })
})

describe(`PATCH /<redacted>/invoices/:invoice_id/finish`, () =>{
    test(`returns error when incorrect headers entered`, async () => {
        const mockBody = {
            "order_type": `SALES`
        }

        const response = await request
            .patch(`/<redacted>/invoices/185527/finish`)
            .set({ company: `CP`, site: `110`, warehouse: `110`, user: `2` })
            .send(mockBody)

        expect(response.status).toBe(500)
    })
})

describe(`GET /<redacted>/invoices/upcoming-rush`, () =>{
    test(`returns true or false if rush is upcoming`, async () => {
        const response = await request
            .get(`/<redacted>/invoices/upcoming-rush`)
            .set({ company: `CBP`, site: `110` })
            .query({ categories: (1, 2, 3, 4, 5) })
            .send()

        console.log(response.body.data)

        expect(response.status).toBe(200)
    })

    test(`returns error if incorrect headers are entered`, async () => {
        const response = await request
            .get(`/<redacted>/invoices/upcoming-rush`)
            .set({ company: `CP`, site: `110` })
            .query({ categories: (1, 2, 3, 4, 5) })
            .send()

        expect(response.status).toBe(500)
    })
})

describe(`GET /<redacted>/invoices/to-do-count`, () =>{
    test(`returns count of incomplete orders`, async () => {
        const response = await request
            .get(`/<redacted>/invoices/to-do-count`)
            .set({ company: `CBP`, site: `110` })
            .send()

        expect(response.status).toBe(200)
    })

    test(`returns error if incorrect headers are entered`, async () => {
        const response = await request
            .get(`/<redacted>/invoices/to-do-count`)
            .set({ company: `CP`, site: `110` })
            .send()

        expect(response.status).toBe(500)
    })
})

describe(`GET /<redacted>/invoices/changed`, () =>{
    test(`returns an array of changed order information`, async () => {
        const response = await request
            .get(`/<redacted>/invoices/changed`)
            .set({ company: `CBP`, site: `110`, user: `2` })
            .send()

        expect(response.status).toBe(200)
    })

    test(`returns error if incorrect headeris entered`, async () => {
        const response = await request
            .get(`/<redacted>/invoices/changed`)
            .set({ company: `CP`, site: `110`, user: `2` })
            .send()

        expect(response.status).toBe(500)
    })
})