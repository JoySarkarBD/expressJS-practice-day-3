const express = require("express");
const app = express();
// const cookieParser = require("cookie-parser")
// const subApp = express();

// req.app concept
/* app.get("/", (req, res) => {
    console.log(req.app);
}); */

// using sub app under express
// app.use("/subapp", subApp);

// req.baseUrl concept
/* subApp.get("/app", (req, res) => {
    console.log(req.baseUrl);
}); */

// middleware
// app.use(express.json());
// app.use(express.text());

// req.body concept
/* app.get("/", (req, res) => {
    console.log(req.body);
});

app.get("/text", (req, res) => {
    console.log(req.body);
}); */

// middleware
// app.use(cookieParser());

// req.cookies concept
/* app.get("/", (req, res) => {
    console.log(req.cookies);
    res.send("Hi, cookies.")
}); */

// hostname concept
/* app.get("/", (req, res) => {
    console.log(req.hostname);
    res.send("Hi, there.")
}); */

// ip concepts
/* app.get("/", (req, res) => {
    console.log(req.ip);
    res.send("Hi, there.")
}); */

// req.method concepts
/* app.get("/", (req, res) => {
    console.log(req.method);
    res.send("Hi, there.")
}); */

// req.originalUrl concepts
/* app.get("/", (req, res) => {
    console.log(req.originalUrl);
    res.send("Hi, there.")
});  */

// req.params concepts
/* app.get("/users/:userId", (req, res) => {
    console.log(req.params);
    res.send("Hi, there.")
}); */

// req.protocol concepts
/* app.get("/", (req, res) => {
    console.log(req.protocol);
    res.send("Hi, there.")
}); */

// req.query concepts
/* app.get("/", (req, res) => {
    console.log(req.query);
    res.send("Hi, there.")
}); */

// req.route concepts
/* app.get("/", (req, res) => {
    console.log(req.route);
    res.send("Hi, there.")
}); */

//=======================================================//

// res.append concepts
/* app.get("/", (req, res) => {
    res.append("content-type", "text/plain");
    res.end()
}); */

// res.attachment concepts
/* app.get("/", (req, res) => {
    res.attachment("path/to/logo.png");
    res.end()
}); */

// res.cookie concepts
/* app.get("/", (req, res) => {
    res.cookie("rokibvaiCookie","valo hoye zan");
    res.end()
}); */

// res.clearCookie concepts
/* app.get("/", (req, res) => {
    res.clearCookie("rokibvaiCookie");
    res.end()
}); */

// res.formate concepts
/* app.get("/", (req, res) => {
    res.formate({
        "application/json": function () {
            res.json({
                name:"Ruhul vau"
            })
        },
        "text/plain":function () {
            res.send("Hi, there....!")
        },
        "text/html":function () {
            res.send("<h1>Hello there.....!</h1>")
        },
        default: function () {
            // log the result and respond with 406
            res.status(406).send("Not Acceptable....!")
        }
    });
    res.end()
}); */

// res.json concepts
/* app.get("/", (req, res) => {
    res.json({
        name: "Ruhul vai",
        age:"100+"
    });
    res.end();
}); */

// res.sendFile concepts
/* app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
    res.end()
}) */; 

// res.location concepts
/* app.get("/", (req, res) => {
    res.location("/user/home");
    res.end();
}); */

// res.redirect concepts
/* app.get("/", (req, res) => {
    res.redirect(`/after checking data from cookie or from server we can redirect user by this res.redirect() and we need to provide here the link or path where we want to redirect the user./`);
    res.end()
});  */

// res.status concepts
/* app.get("/", (req, res) => {
    res.status(200).send("Hello, there I am from res.status");
    res.end();
}); */


// server running code
app.listen(3000, () => {
    console.log("server running at 3000 port..........!");
})