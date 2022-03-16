const knex=require('../model/table')


employessDetails=(req,res)=>{
    const employees ={
        Eid:req.body.Eid,
        Did:req.body.Did

        

    }
    knex('employees_details').insert(employees)
    .then((insetd)=>{
        res.send({
            message:'Employees Details Added!'
        })
    }).catch((err)=>{
        res.send({error:err})
    })
}



employeesJoinDepart=(req,res)=>{
    knex('employees_details')
    .innerJoin('employee','employee.Eid','employees_details.Eid')
    .innerJoin('department','department.Did','employees_details.Did')
    .select("*").where('employee.Eid', '=', req.params.Eid)
    .then((data)=>{
        res.send({
            message:'Employees Details!',
            employees:data

        })
    }).catch((err)=>{
        res.send({
            error:err
        })
    })

}






module.exports={employessDetails,employeesJoinDepart}