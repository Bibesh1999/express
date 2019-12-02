const express = require('express');
const {getAllTours,getTour,createTour,deleteTour,updateTour} = require('./../controllers/tourController');


const router = express.Router();


//Param here to deing parameter middleware in your applications
//router.param('id', checkID);

router
  .route('/')
  .get(getAllTours)
  .post(createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
