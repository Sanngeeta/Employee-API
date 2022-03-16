const express=require('express')
const { getDepart } = require('../controller/department')
const { employessDetails, employeesJoinDepart } = require('../controller/employee_details')
const { createEmployees, getEmployess, updateEmployees, deleteEmloyess } = require('../controller/employess')
const router = express.Router()

router.post('/employees',createEmployees)
router.get('/',getEmployess)
router.put('/employees/update/:Eid',updateEmployees)
router.delete('/employees/delete/:Eid',deleteEmloyess)



//Department
router.get('/department',getDepart)



//Employee Details
router.post('/employeesDetails',employessDetails)
router.get('/employees/details/:Eid',employeesJoinDepart)



module.exports = router