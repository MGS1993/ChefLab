let express = require('express');
let router = express.Router();


//Controller Modules
const mealSearchController = require('../controllers/mealSearchController');

//Get Meals
router.get('/search-meals/search-all/:query', mealSearchController.search_all);


module.exports = router