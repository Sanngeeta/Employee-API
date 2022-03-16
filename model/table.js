const knex = require("knex")({
  client: "mysql",
  connection: {
    host: 'localhost',
    user:'root',
    password: '133@Sangeeta',
    database: 'employees'
  }
})


knex.schema.hasTable('employee').then(function (exists) { //post
  if (!exists) {

    return knex.schema.createTable('employee', function (table) {
      table.increments("Eid").primary();
      table.string("firstName", 255)
      table.string("lastName", 255)
      

    }).then(() => {
      console.log('table created');
    }).catch((err) => {
      console.log(err)
    })
  }
});




knex.schema.hasTable('department').then(function (exists) {
  if (!exists) {

    return knex.schema.createTable('department', function (t) {
      t.increments('Did').primary();
      t.string('departmentName', 255)
     
    }).then(() => {
      console.log('table created');
    }).catch((err) => {
      console.log(err)
    })
  }
});





knex.schema.hasTable('employees_details').then(function (exists) {
  if (!exists) {

    return knex.schema.createTable('employees_details', function (t) {

      t.increments('Edid').primary();
      t.integer('Eid')
      t.integer('Did')
     

    }).then(() => {
      console.log('table created');
    }).catch((err) => {
      console.log(err)
    })
  }
});




module.exports = knex