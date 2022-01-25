const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes); //change to category-routes
router.use('/products', productRoutes); //change to products-route?
router.use('/tags', tagRoutes);//change to tag-routes?

module.exports = router;
