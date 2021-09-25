const express = require('express');
const router = express.Router();

const {
    getAllServices,
      getService,
      addService,
      updateService,
      deleteService,
      getAllUsers
} = require('../controllers/ServiceController')

router.route('/api/services').get(getAllServices);
router.route('/api/service/:id').get(getService);
router.route('/api/service').post(addService);
router.route('/api/service/:id/edit').get(getService);
router.route('/api/service/:id').put(updateService);
router.route('/api/service/:id').delete(deleteService);


module.exports = router