const knex=require('../model/table')


createEmployees=(req,res)=>{
    const employee={
        firstName:req.body.firstName,
        lastName:req.body.lastName
    }
    knex('employee').insert(employee)
    .then((userData)=>{
        res.send({
            message:'Employee Added!',
            employee:userData
        })
    }).catch((err)=>{
        res.send({
            message:'Faild Employee Added!',
            error:err
        })
    })
}



getEmployess=(req,res)=>{
    knex.select('*').from('employee')
    .then((data)=>{
        res.send({
            message:'All Employee Data',
            employees:data
        })
    }).catch((err)=>{
        res.send(err)
    })
}



updateEmployees=(req,res)=>{
    knex('employee').where("Eid","=",req.params.Eid).update({
        firstName:req.body.firstName,
        lastName:req.body.lastName

    }).then((updateEmplo)=>{
        res.send({
            message:'Updated Employee'
        })
    }).catch((err)=>{
        res.send({
            error:err
        })
    })
}





deleteEmloyess=(req,res)=>{
    knex.delete('*').from('employee').where('Eid','=',req.params.Eid)
    .then((data)=>{
        res.send({
            message:'Employee Deleted successfully!'
        })

    }).catch((err)=>{
        res.send({error:err})
    })

}



module.exports={createEmployees,getEmployess,updateEmployees,deleteEmloyess}