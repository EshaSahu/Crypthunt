const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const _=require("lodash");


const Riddle1="Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Bacon ipsum dolor amet flank cupim buffalo sausage porchetta tongue cow. Spare ribs buffalo ham hamburger pig ground round. Bacon porchetta ground round chicken, venison chuck corned beef. Pork chop frankfurter picanha, fatback rump biltong turducken short ribs meatball swine pork belly drumstick strip steak. Cupim ham hock drumstick bresaola bacon picanha. Beef ribs bresaola chuck cupim chislic tenderloin cow salami, andouille pork.";
const Rules="Rules";
const app=express();

app.set("view engine" ,"ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("home");
    });
app.get("/sign-in", function(req, res){
    res.render("sign-in");
});
app.get("/Login", function(req, res){
    res.render("sign-in");
});
app.get("/riddle", function(req, res){
    res.render("riddle", {
        riddle1: Riddle1
    });
});
app.get("/Rules", function(req, res){
    res.render("rules", {rules: Rules});
});
app.get("Leaderboard", function(req, res){
    res.render("leaderboard");
});




app.listen(3000, function(req, res){
    console.log("Server running at port 3000");
});