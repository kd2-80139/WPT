var express=require('express');
var app=express();
var config=require('config');
var cors=require('cors');
var sql=require("mysql2");
var connect={
    host:config.get("host"),
    database:config.get("database"),
    user:config.get("user"),
    password:config.get("password")
}
app.use(cors());
app.use(express.json())
app.get("/product",(req,res)=>{
  
    var stmt=`select * from products`;
    var connection=sql.createConnection(connect);
    connection.query(stmt,(error,result)=>{
        if(error==null){
                connection.end();
                res.send(result);
        }
        else{
            res.send(error);
        }
    })
})
app.delete("/product/:no",(req,res)=>{
    var stmt=`delete from products where pid=${parseInt(req.params.no)}`;
    var connection=sql.createConnection(connect);
    connection.query(stmt,(error,result)=>{
        if(error==null){
            connection.end();
            res.send(result);

        }
        else{
            res.send(error);
        }
    })
        
})
app.post("/product",(req,res)=>{
    var stmt=`insert into products(ptitle,price,stock) values('${req.body.ptitle}',${req.body.price},${req.body.stock})`;
    var connection=sql.createConnection(connect);
    connection.query(stmt,(error,result)=>{
        if(error==null){
            connection.end();
            res.send(result);
        }
        else{
            connection.end();
            res.send(error);
        }
    })

})
app.put("/product/:no",(req,res)=>{
    var stmt=`update products set ptitle='${req.body.ptitle}',price=${req.body.price},stock=${req.body.stock} where pid=${req.params.no}`;
    console.log(stmt);
    var connection=sql.createConnection(connect);
    connection.query(stmt,(error,result)=>{
        if(error==null){
            console.log(result);
            connection.end();
            res.send(result);
        }
        else{
            connection.end();
            res.send(error);
        }
    })
})
app.get("/product/:no",(req,res)=>{
    var stmt=`select * from products where pid=${req.params.no}`;
    var connection=sql.createConnection(connect);
    connection.query(stmt,(error,result)=>{
        if(error==null){

            connection.end();
            res.send(result);
        }
        else{
            connection.end();
            res.send(error);
        }
    })
})
app.listen(config.get("port"),()=>{
    console.log("server started");
})
