const router = require('express').Router();3
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

//add prefix of '/pizzas' to routes created in pizza-routes.js
//add prefix of '/comments' to routes created in comment-routes.js
router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);

module.exports = router;