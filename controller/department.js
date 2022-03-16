const knex=require('../model/table')

    // departData=[
    //     {departmentName:'CSE'},
    //     {departmentName:'EEE'},
    //     {departmentName:'ECE'},
    //     {departmentName:'IT'}
    // ]


    // knex('department').insert(departData)
    // .then((data)=>{
    //     console.log({message:'data inserted'});
    // }).catch((err)=>{
    //     console.log(err);
       
    // })




getDepart=(req,res)=>{
    knex.select('*').from('department').then((d)=>{
        res.send(d)
    }).catch((err)=>{
        res.send(err)
    })
}




module.exports={getDepart}