// sk_test_51NJ43oSEEgTWuyuaYrtHl0SXd2gWW7G1SkfGx0qjC0AaXFNwEZ6LfOupc3fT1Tis2aJMcnMHbYUigdWfGTuPOfpv00hDYPaAq1
// Coffee: price_1NJ4A0SEEgTWuyuaubMMvb8r
// Sunglasses: price_1NJ4BfSEEgTWuyuax2BXYUta
// Camera: price_1NJ4CBSEEgTWuyuaFsiOPiTF

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51NJ43oSEEgTWuyuaYrtHl0SXd2gWW7G1SkfGx0qjC0AaXFNwEZ6LfOupc3fT1Tis2aJMcnMHbYUigdWfGTuPOfpv00hDYPaAq1')

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));