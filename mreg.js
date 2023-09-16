http = require('http')
url = require('url')
qs = require('querystring')

let user="a";
let em="b";
let sub="c";
let pn="d";
let co="e";
let pass="f";

function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log("Request for "+path+" recieved");
    var query=url.parse(request.url).query;
    var username=qs.parse(query)["name"];
    user=username;
    var email=qs.parse(query)["email"];
    em=email;
    var phonenumber=qs.parse(query)["phonenumber"];
    pn=phonenumber;
    var address=qs.parse(query)["address"];
    sub=address;
 var country=qs.parse(query)["country"];
    co=country;
 var password=qs.parse(query)["password"];
    pass=password;
    response.write("Hello "+username+"\n\n your email is "+email+"\n\nWelcome to this page...\n\nYour query regarding "+address+"\n\nyour phone number is"+phonenumber,"\n\nyour country is"+country);
    response.end();
    
    insertdata();
}
http.createServer(onRequest).listen(5050);
console.log("Server is running now....");
const mongoose =require("mongoose")
const urla = "mongodb://localhost:27017/local";
const name1 = new mongoose.Schema({ Name: String, email: String, address: String, phonenumber: Number, country: String, password: String, terms:String});
const Name= mongoose.model('Name',name1)
const db = async() =>{
    try{    
    console.log("entered")    
    const data=await mongoose.connect(urla,    
    {    
        useNewUrlParser: true,    
        useUnifiedTopology: true,    
        family: 4,    
    }
    )
    console.log("connected")
    }    
    catch(err){    
    console.log(err)    
    }    
}
db()
    const insertdata=async()=>{
        const cat = new Name({ Name:user , email:em , address:sub , phonenumber:pn , country:co, password:pass , terms:agg});        
        cat.save().then(() => console.log('Saved in db'));        
        }