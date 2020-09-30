var mysql=require('mysql');

var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root@123",
  database:"demo"
});


// Establishing database connection
con.connect(function(err){
  if(err)
    throw err;
  console.log("Connected to the database");
    });

//Create database
con.connect(function(err){
  if(err)
    throw err;
  con.query("CREATE DATABASE demo",function(err,result){
    if(err) 
      throw err;
      console.log("demo Database Created Successfully!!!");
      
  })
 });

// Create table inside database
con.connect(function(err){
  if(err)
    throw err;
  var sql="create table customers (name Varchar(300),address Varchar(300))";  
  con.query(sql,function(err,result){
    if(err) 
      throw err;
      console.log("Table Created inside the database demo Successfully!!!");
  })
});

// Insert Values inside table
con.connect(function(err){
  if(err)
    throw err;
  var sql="insert into customers(name,address) values('Prakash Anand','Burdwan')";  
  con.query(sql,function(err,result){
    if(err) 
      throw err;
      console.log("Inserted single line of code Successfully!!!");
  })
});

// insert multiple value 
con.connect(function(err){
  if(err)
    throw err;
  var values=[["Parag","Patna"],["Chirag","Sonipat"],["Rajkumar","Agra"],["Shivam","Indore"]];  
  var sql="insert into customers(name,address) values ?";  
  con.query(sql,[values],function(err,result){
    if(err) 
      throw err;
      console.log(result);
      
      console.log("Inserted multiple value Successfully!!!");
  })
});

// Read from table
con.connect(function(err){
  if(err)
    throw err;
  var sql="select name from customers order by name";  
  con.query(sql,function(err,res){
    if(err) 
      throw err;
    console.log(res);
  })
});

// delete from table
con.connect(function(err){
  if(err)
    throw err;
  var sql="delete from customers where name LIKE 'P%'";  
  con.query(sql,function(err,res){
    if(err) 
      throw err;
    console.log(res);
  })
});

// update in table
con.connect(function(err){
  if(err)
    throw err;
  var sql="update customers set address='patna' where name='shivam'";  
  con.query(sql,function(err,res){
    if(err) 
      throw err;
    console.log(res);
  })
});



