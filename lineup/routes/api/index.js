const router = require("express").Router();
const userRoutes = require("./user");
// const festivalRoutes = require("./festival");
// const commentRoutes = require("./comment");

// Book routes
router.use("/user", userRoutes);
// router.use("/festival", festivalRoutes);
// router.use("/comment", commentRoutes);

module.exports = router;