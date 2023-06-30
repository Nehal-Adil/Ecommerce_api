const router = require("express").Router();
const productsController = require("../controllers/products_controller");

//API to add products to the database
router.post("/products/create", productsController.createProduct);

//API to list products
router.get("/products", productsController.getProducts);

//API to delete products
router.delete("/products/:id", productsController.deleteProduct);

//API to update quantity of a product
router.post("/products/:id/update_quantity", productsController.updateProduct);
module.exports = router;
