assert = require('assert')
var chai = require('chai')
    , chaiHttp = require('chai-http');

var expect = chai.expect;

chai.use(chaiHttp);

describe('get all products by category', async () => {

    //const app = "http://localhost:8080"
    const app = "https://shoppl.herokuapp.com"

    it('should create  cart/order  with it products from all categories ', async () => {

        for (let i = 0; i < 10; i++) {
           let response = await sendComment(app,i,"LAP00.3057387793203641");
            console.log(response.body)
        }
        for (let i = 0; i < 10; i++) {
            let newVar = await sendProductRequest(app, i, "ELEKTRONIKA");
            console.log(newVar.body)
        }
        for (let i = 0; i < 10; i++) {
            let newVar = await sendProductRequest(app, i, "EDUKACJA");
            console.log(newVar.body)
        }
    })
});

async function sendProductRequest(app, i, category) {
    return chai.request(app)
        .post(`/product`)
        .auth('admin', 'admin')
        .send({
            categoryName: category,
            description: "string",
            price: Math.random()+1,
            title: "LAP" + i + Math.random()

        });
}

async function sendComment(app, i, title) {
    return chai.request(app)
        .post(`/product/`+title)
        .auth('admin', 'admin')
        .send({
            email: "string",
            name: "string"+Math.random()+1,
            text: "string"+Math.random()+1
        });
}
