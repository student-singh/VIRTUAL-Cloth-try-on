const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 3000;

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Middleware to serve static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// In-memory storage for item data (replace with a database in production)
let items = [];

// Home page (upload form)
app.get("/", (req, res) => {
  res.render("index");
});

// Handle item upload
app.post("/upload", upload.array("itemImages", 5), (req, res) => {
  const { title, listingType, category, size, condition, price, brand, color, material, description } = req.body;
  const imageUrls = req.files.map(file => "/uploads/" + file.filename);
  items.push({ imageUrls, title, listingType, category, size, condition, price, brand, color, material, description });
  res.redirect("/gallery");
});

// Gallery page (display all uploaded items)
app.get("/gallery", (req, res) => {
  res.render("gallery", { items });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Handle item upload
app.post("/upload", upload.array("itemImages", 5), (req, res) => {
  const { title, listingType, category, size, condition, price, brand, color, material, description } = req.body;
  const imageUrls = req.files.map(file => "/uploads/" + file.filename);
  items.push({ imageUrls, title, listingType, category, size, condition, price, brand, color, material, description });
  res.redirect("/confirmation");
});

// Confirmation page
app.get("/confirmation", (req, res) => {
  res.render("confirmation");
});