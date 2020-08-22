// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; // Need this to use XMLHttpRequest since this is a nodejs file

    // This should be the default for every Airtable 
    // var tablename = "Table 1"; 

    var key = "key4SssZ2nJDuK1KG";
    var docID = "appESL6PBdMHySw4l";
    
    // helper function to make xmlHttp request given a specified 
    // base id, table, and api key
    function httpGet(BaseID, tablename, APIKey){
        // APIKey = (localStorage.getItem('saved_api').trim());
        // BaseID = (localStorage.getItem('saved_baseID').trim());;

        var xmlHttp = new XMLHttpRequest();
        var url = "https://api.airtable.com/v0/" + BaseID + "/" + tablename +"/";
          
        xmlHttp.open('GET', url, false);
        xmlHttp.setRequestHeader('Content-Type','application/json');
        xmlHttp.setRequestHeader('Authorization',"Bearer " + APIKey);
          
        xmlHttp.send();
        return xmlHttp.responseText;
    }
    // used to get the value of whatever variable is passed in
    // calls httpGet to open the request 
    function getvalue(tablename, name){
        console.log('in getvalue')
        // the response is an array, so we parse through it looking for the right variable
        var arr = (JSON.parse(httpGet(docID, tablename, key))).records; 
        arr.forEach(function (arrayItem) {
            if (arrayItem.fields.Variables == name) {
                if ((arrayItem.fields.Value) === 1) { // if value is an int, we convert to float
                    write_value = parseFloat(arrayItem.fields.Value);
                } 
                else{ // else if the value is a string, we just write out the value 
                    write_value = (arrayItem.fields.Value);
                }
                // // built in function to allow the node to "write" out to other tools
                // realityInterface.write('value', write_value);
            }
        });
        console.log(write_value)
        return write_value;
    }

    // hold ID to use when sending/updating values 
    var temp_id; 
    // helper to get the ID of a given variable from airtable
    function getid(tablename, name) {
        var arr = (JSON.parse(httpGet(docID, tablename, key))).records; 
        arr.forEach(function (arrayItem) {
            if (arrayItem.fields.Variables == name) {
                temp_id = arrayItem.id; 
            }
        });
    }
    // xml request to do a patch, which is updating the given variable with a given value on airtable
    function httpNew(tablename, value, variable){
        // APIKey = (localStorage.getItem('saved_api').trim());
        // BaseID = (localStorage.getItem('saved_baseID').trim());;

        var xmlHttp = new XMLHttpRequest();
        var url = "https://api.airtable.com/v0/" + docID + "/" + tablename +"/";

        getid(tablename, variable);
        // this is the format for a propvalue to update airtable
        var propValue ={"records": [{"id": temp_id,"fields": {"Variables": variable, "Value": value.toString()}}]};
        xmlHttp.open('POST', url, true);
        xmlHttp.setRequestHeader('Content-Type','application/json');
        xmlHttp.setRequestHeader('Authorization','Bearer ' + key);
        xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                console.log(xmlHttp.responseText);
            }
            console.log(xmlHttp.status)
        };
        xmlHttp.send(JSON.stringify(propValue));
    }
    // xml request to do a patch, which is updating the given variable with a given value on airtable
    function httpPatch(tablename, value, variable){
        // APIKey = (localStorage.getItem('saved_api').trim());
        // BaseID = (localStorage.getItem('saved_baseID').trim());;

        var xmlHttp = new XMLHttpRequest();
        var url = "https://api.airtable.com/v0/" + docID + "/" + tablename +"/";

        getid(tablename, variable);
        // this is the format for a propvalue to update airtable
        var propValue ={"records": [{"id": temp_id,"fields": {"Variables": variable, "Value": value.toString()}}]};
        xmlHttp.open('PATCH', url, true);
        xmlHttp.setRequestHeader('Content-Type','application/json');
        xmlHttp.setRequestHeader('Authorization','Bearer ' + key);
        xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                console.log(xmlHttp.responseText);
            }
            console.log(xmlHttp.status)
        };
        xmlHttp.send(JSON.stringify(propValue));
    }