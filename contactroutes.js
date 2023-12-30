const express = require("express");

const router = express.Router();
const { getContact,createContact,SingleContact,updateContact,deleteContact} = require('./controller/contactcontroller')
const validateToken = require("../middleware/validatetokenhandler")
// import { getContact,createContact,SingleContact } from "./controller/contactcontroller";
router.route("/").get(getContact);
router.route("/").post(createContact)
router.route("/:id").get(SingleContact)
router.route("/:id").put(updateContact)
router.route("/:id").delete(deleteContact)
router.use(validateToken);
module.exports = router;