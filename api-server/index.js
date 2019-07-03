var express = require("express");
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var testData = [
    {
        id: '1',
        title: "Root",
        parent: '0',
        numberOfChildren: 3,
    },
    {
        id: '2',
        title: "Node2",
        parent: '1',
        numberOfChildren: 0,
    },
    {
        id: '3',
        title: "Node3",
        parent: '1',
        numberOfChildren: 0,
    },
    {
        id: '4',
        title: "Node4",
        parent: '1',
        numberOfChildren: 2,
    },
    {
        id: '5',
        title: "Node5",
        parent: '4',
        numberOfChildren: 2,
    },
    {
        id: '6',
        title: "Node6",
        parent: '4',
        numberOfChildren: 0,
    },
    {
        id: '7',
        title: "Node7",
        parent: '5',
        numberOfChildren: 0,
    },
    {
        id: '8',
        title: "Node8",
        parent: '5',
        numberOfChildren: 5,
    },
    {
        id: '9',
        title: "Node9",
        parent: '8',
        numberOfChildren: 0,
    },
    {
        id: '10',
        title: "Node10",
        parent: '8',
        numberOfChildren: 0,
    },
    {
        id: '11',
        title: "Node11",
        parent: '8',
        numberOfChildren: 0,
    },
    {
        id: '12',
        title: "Node12",
        parent: '8',
        numberOfChildren: 0,
    },
    {
        id: '13',
        title: "Node13",
        parent: '8',
        numberOfChildren: 0,
    },
];

app.get("/api", (req, res, next) => {
    var id = parseInt(req.query.id || 0);
    var limit = parseInt(req.query.limit || 2);
    var offset = parseInt(req.query.offset || 0);
    if(id === 0){
        res.json(testData[0]);
    }else{
        let arr = testData.filter(node => node.parent == id);
        res.json(arr.slice(offset, offset + limit));
    }
});

app.get("/info/:id", (req, res, next) => {
    res.send('Info: ' + req.params.id);
});

app.listen(3030, () => {
 console.log("Server running on port 3030");
});