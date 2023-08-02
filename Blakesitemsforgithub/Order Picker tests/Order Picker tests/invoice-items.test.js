const app = require(`../../config`)
const supertest = require(`supertest`)
const request = supertest(app)

describe(`GET /<redacted>/invoices/:salesOrderNum/items`, () =>{
    test(`returns all info found of invoice within search`, async () => {
        const response = await request
            // Change the "1" in the path to the designated salesOrderNum
            .get(`/<redacted>/invoices/1/items`)
            .set({ company: `CBP`, site: `110`, warehouse: `110` })
            .query({ shipmentSysRowId: `3176B96D-BC58-4435-91FA-76F190040690` })
            .send()

        expect(response.status).toBe(200)
    })

    test(`returns error on invalid header`, async () => {
        const response = await request
            .get(`/<redacted>/invoices/1/items`)
            .set({ company: `CP`, site: `110`, warehouse: `110` })
            .query({ shipmentSysRowId: `3176B96D-BC58-4435-91FA-76F190040690` })
            .send()

        expect(response.status).toBe(500)
    })
})

describe(`PATCH /<redacted>/invoices/:invoice_id/items/pick`, () =>{
    test(`returns error when incorrect header entered`, async () => {
        const mockBody = {
            "items": [
                `3E408E34-BDEE-4B27-A3E7-8D54A990FC7E`
            ],
            "quantity": 1,
            "was_scanned": false,
            "order_type": `SALES`
        }

        const response = await request
            .patch(`/<redacted>/invoices/183901/items/pick`)
            .set({ company: `CP`, site: `110`, warehouse: `110`, user: `2` })
            .send(mockBody)

        expect(response.status).toBe(500)
    })
})

describe(`PATCH /<redacted>/invoices/:invoice_id/items/put-back`, () =>{
    test(`returns error when incorrect header entered`, async () => {
        const fakeBody = {
            "items": [
                `9E6EB6F8-1918-404C-AE4D-3350D3200D3E`
            ],
            "order_type": `SALES`
        }

        const response = await request
            .patch(`/<redacted>/invoices/1/items/put-back`)
            .set({ company: `CP`, site: `110`, warehouse: `110`, user: `2` })
            .send(fakeBody)

        expect(response.status).toBe(500)
    })
})