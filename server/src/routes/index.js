const { Router } = require("express");
const router = Router();

const productsRouter = require("./productsRouter");
const categoriesRouter = require("./categoriesRouter");
const subcategoriesRouter = require("./subcategoriesRouter");
const usersRouter = require("./usersRouter");
const assessmentRouter = require("./assessmentRouter");
const filterRouter = require("./filterRouter");
const addressRouter = require("./addressRouter");
const administratorRouter = require("./administratorRouter");
const orderRouter = require("./orderRouter");
const paymentMethodRouter = require("./paymentMethodRouter");

// router PRODUCTOS
router.use("/products", productsRouter);
// router CATEGORIAS
router.use("/categories", categoriesRouter);
// router SUBCATEGORIAS
router.use("/subcategories", subcategoriesRouter);
// Router USUARIOS
router.use("/users", usersRouter);
// Router VALORACIONES
router.use("/assessment", assessmentRouter);
// Router FILTROS
router.use("/filter", filterRouter);
// Router ADDRESS
router.use("/address", addressRouter);
// Router ADMINISTRATOR
router.use("/administrator", administratorRouter);
// Router ORDERS
router.use("/order", orderRouter);
//Router payment-method
router.use("/payment", paymentMethodRouter);
module.exports = router;