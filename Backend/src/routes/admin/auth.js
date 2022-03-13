const express = require("express");
const { requireSignin } = require("../../common-middleware");
const router = express.Router();
const { signup, signin ,signout,allAdmins } = require("../../controllers/admin/auth");
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require("../../validators/auth");

router.post("/admin/signup", validateSignupRequest, isRequestValidated ,signup);
router.post("/admin/signin",validateSigninRequest, isRequestValidated, signin);
router.post("/admin/signout" ,signout);
router.get("/admin/allAdmins" ,allAdmins);
module.exports = router;
