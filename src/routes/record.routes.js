const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const controller = require("../controllers/record.controller");

router.post("/", auth, role("admin"), controller.createRecord);
router.get("/", auth, role("admin","analyst","viewer"), controller.getRecords);
router.put("/:id", auth, role("admin"), controller.updateRecord);
router.delete("/:id", auth, role("admin"), controller.deleteRecord);

module.exports = router;