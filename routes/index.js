const router = require('express').Router()

router.use('/api', require('./noteRoutes.js'))
//index needs to be rendered last
router.use('/', require('./viewRoutes.js'))

module.exports = router