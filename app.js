
var data_test = require("./testdata1.json")
var data_variables = require("./typology_variables.json")
var data_acs = require("./typ_stg_lear_acs_condensed.json")
var data_geo = require("./typ_stg_lear_geo.json")
var data_state_agencies = require("./state_agencies_update.json")
var data_state_data_collection = require("./state_data_collection_raw.json")

var express = require("express");
const cors = require('cors');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;



app.use(cors());

//app.listen(process.env.PORT);

//const port = 3000

//load   results from  
app.listen(port, () => {
    console.log(`working`)
  })


//
app.get('/', (req, res) => {
    res.send("It is working");
    console.log("hi")
});

app.get("/datatest", (req, res) => {
    res.json(data_test);
});

//
app.get("/datavariables", (req, res) => {
    res.json(data_variables);
});
app.get("/typology_variables", (req, res) => {
    res.json(data_variables);
});


//
app.get("/dataacs", (req, res) => {
    res.json(data_acs);
});
app.get("/typ_stg_lear_acs_condensed", (req, res) => {
    res.json(data_acs);
});

//
app.get("/datageo", (req, res) => {
    res.json(data_geo);
});
app.get("/typ_stg_lear_geo", (req, res) => {
    res.json(data_geo);
});

//data_state_agencies
app.get("/datastateagencies", (req, res) => {
    res.json(data_state_agencies);
});
app.get("/data_state_agencies", (req, res) => {
    res.json(data_state_agencies);
});

//data_state_data_collection 
app.get("/datastatedatacollection", (req, res) => {
    res.json(data_state_data_collection);
});
app.get("/data_state_data_collection", (req, res) => {
    res.json(data_state_data_collection);
});
