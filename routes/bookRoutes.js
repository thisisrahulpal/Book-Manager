const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticateUser");

router.post(
  "/",
  authenticate,
  require("../controllers/book/createBook").process
); // Create Book
router.get("/",authenticate, require("../controllers/book/getAllBook").process); // Get all book
router.get("/:id", authenticate,require("../controllers/book/getSingleBook").process); // Get single book

module.exports = router;
