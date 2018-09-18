var express = require("express");
var app = express();
var bodyParser = require("body-parser");

/* the purpose of body parser is for post request*/
app.use(bodyParser.urlencoded({ extended: true}))
app.set("view engine", "ejs");


var campgrounds = [
  {name: "salmon creek", image: "https://placeimg.com/640/480/nature"},
  {name: "grand canyon", image: "https://placeimg.com/640/480/nature"},
  {name: "red canyon", image: "https://placeimg.com/640/480/nature"},
  {name: "salmon creek", image: "https://placeimg.com/640/480/nature"},
  {name: "grand canyon", image: "https://placeimg.com/640/480/nature"},
  {name: "red canyon", image: "https://placeimg.com/640/480/nature"},
  {name: "salmon creek", image: "https://placeimg.com/640/480/nature"},
  {name: "grand canyon", image: "https://placeimg.com/640/480/nature"},
  {name: "red canyon", image: "https://placeimg.com/640/480/nature"}
];


app.get("/", function(req,res){
  res.render("landing");
});

//this route shows you all the campgrounds
app.get("/campgrounds", function(req,res){
  res.render("campgrounds", {campgrounds:campgrounds});
})

//this route will create a new campground
app.post("/campgrounds", function(req,res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image}
  campgrounds.push(newCampground);
  //that line redirect the user to the campgrounds page
  res.redirect("/campgrounds");
});

//this would show you the form that send the data to the post route
app.get("/campgrounds/new", function(req,res){
  res.render("new.ejs");
})

app.listen(3000, function(){
  console.log("Serving yelp app on port 3000!!");
});
