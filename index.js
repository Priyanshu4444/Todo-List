import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));

let tasks = [];
app.get("/", (req,res) => {
    const today = new Date();
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	};
	const day = today.toLocaleDateString("en-US", options);
	res.render("list.ejs", {
        todaysDay: day, 
        newItems: tasks
    });
});

app.post("/", (req,res) => {
    let task = req.body.newItems;
    tasks.push(task);
    res.redirect("/");
});

app.listen(port,() => {
    console.log(`Listening of port ${port}`);
})