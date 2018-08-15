A app.js está dentro da pasta principal do projecto.
Inside the views there is the other routes.


//Include a header and footer

	//create a header.ejs
	<!DOCTYPE html>
		<html>
    		<head>
        		<title>YelpCamp</title>
    		</head>
    		<body>

	//create a footer.ejs

    		<p>TradeMark</p>
    		</body>
		</html>

//Then go to all ages and put
<% include partials/header %>
<% include partials/footer %>


//Get and post

app.get("/campgrounds")- See available camps
app.post("/campgrounds") - Create a camp
Using the same route ALWAYS


//bodyParser
This allows us to parse the form and extract the values 
form the inputs to be used in our backend 

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extende: true}));

//In the app.get
res.render("new.ejs"); 
//Then in the new.ejs

<h1>Create a new Campground</h1>//	

<form action="/campgrounds" method="POST">
    <input type="text"  name="name" placeholder="name">
    <input type="text"  name="image" placeholder="image url">
    <button>Submit</button>
</form>