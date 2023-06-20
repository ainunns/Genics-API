const router = require("express").Router();
const {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/", getProducts);

router.post("/", saveProduct);

router.put("/:_id", updateProduct);

router.delete("/:_id", deleteProduct);

module.exports = router;
