// console.log( "index" )

// <----------- First program ----------->
// var a = 10;
// var b = 20;
// var c = 30;
// console.log( a + b + c )
// <----------- End ----------->

// <----------- Import another file data in Node.js --------------->

// const app = require( './app' )
// console.log( app, app.x, app.y )
// console.log( app.z() )
// <----------- End ----------->

// <----------- why we use filter function ------------->
// const arr = [ 1, 5, 4, 7, 8, 3, 8, 4 ]
// console.log( arr )
// console.log( arr[ 4 ] )

// let result = arr.filter( ( item ) =>
// {
// return item === 8;  <------- check repeated terms -------->
// 	return item > 3;  <------- check greater terms -------->
// } )
// console.log( result )
// <----------- End ----------->

// <----------- core Modules ------------>
// File System , Buffer , HTTP

// <---------- Global Modules ---------->
// No need to import

// console.log( __dirname );
// console.log( __filename )

// <---------- Non-Global Modules ---------->
// need to import

// const fs = require( 'fs' );
// fs.writeFileSync( 'hello.txt', 'Hello txt file created successfully.' )

// we can also import specific function of file system
// const fs = require( 'fs' ).writeFileSync
// fs( 'abc.txt', 'abc' )
// <---------- End ----------->

// Make a Basic Server
// const http = require( 'http' );
// http.createServer( ( req, res ) =>
// {
// 	res.write( "<h1>Hello World !!</h1>" );
// 	res.end();
// } ).listen( 4500 );
// <---------- End ----------->

// Use of npm color package
// var colors = require( 'colors' );
// console.log( 'hello'.red );
// <-------------- End ------------->

// <-------------- Make first API --------------->
// const http = require( 'http' );
// http.createServer( ( req, resp ) =>
// {
// 	resp.writeHead( 200, { 'Content-Type': 'application\json' } );
// 	resp.write( JSON.stringify( { name: 'abc', email: 'abcmail@yopmail.com' } ) );
// 	resp.end();
// } ).listen( 5000 );
// <-------- End -------->

// <-------------- send data from external file in Api ------------>
// const http = require( 'http' );
// const data = require( './data' )
// http.createServer( ( req, resp ) =>
// {
// 	resp.writeHead( 200, { 'Content-Type': 'application\json' } );
// 	resp.write( JSON.stringify( data ) );
// 	resp.end();
// } ).listen( 5000 );
// <----------- End ------------->

// <--------- Input from Command Line ---------->
// console.log( process.argv )  // argv means argument vector
// console.log( process.argv[ 2 ] )
// const fs = require( 'fs' );
// const input = process.argv;

// if ( input[ 2 ] == 'add' )
// {
// 	fs.writeFileSync( input[ 3 ], input[ 4 ] )
// } else if ( input[ 2 ] == 'remove' )
// {
// 	fs.unlinkSync( input[ 3 ] )
// } else
// {
// 	console.log( 'inavlid input !!' )
// }
// <--------- End ---------->

// <----------*** Show File System ***-------------->
// const fs = require( 'fs' );
// const path = require( 'path' );
// const dirPath = path.join( __dirname, 'files' );
//  <-------- Create multiple files in a loop --------->
// for ( i = 0; i < 5; i++ )
// {
// 	fs.writeFileSync( dirPath + `/hello${ i }.txt`, 'A simple Text File' )
// }
// fs.readdir( dirPath, ( err, files ) =>
// {
// 	// console.log( files )
// 	files.forEach( ( item ) =>
// 	{
// 		console.log( `this is text file :${ item }` )
// 	} )
// } )
// <--------------- End -------------->

// <---------------- Crud with File System ----------------->
// const fs = require( 'fs' );
// const path = require( 'path' );
// const dirPath = path.join( __dirname, 'crud' );
// const filePath = `${ dirPath }/apple.txt`;

// fs.writeFileSync( filePath, 'this is simple text file' ); // create file with file system

// fs.readFile( filePath, 'utf-8', ( err, file ) =>
// {
// 	console.log( file );
// } ); // read file with file system

// fs.appendFile( filePath, ' and file name is apple.txt', ( err ) =>
// {
// 	if ( !err )
// 		console.log( "file is updated!!" )
// } ); // update file with file system

// fs.rename( filePath, `${ dirPath }/fruit.txt`, ( err ) =>
// {
// 	if ( !err )
// 		console.log( "File name Rename Successfully!!" )
// } ); // Rename file with file system

// fs.unlinkSync( `${ dirPath }/fruit.txt` ) // delete file with file system

// What is Buffer?
// - Temporary memory location when we create any file in file system node require small memory space to perform operations.
// <------------ End ------------->

// <------------------- Asynchronous Basics in Node js --------------------->
// console.log( "start execution" );

// setTimeout( () =>
// {
// 	console.log( "logic execution" )
// }, 2000 ); // this function is used for delay the result.

// console.log( "complete execution" );

// let a = 10;
// let b = 0;

// setTimeout( () =>       // Drawback
// {
// 	b = 20;
// }, 2000 );
// console.log( a + b );
// <-------------- End --------------->

// <----------- Handle Asynchronous Data in Node js -------------->
// let a = 10;
// let b = 0;
// let waitingData = new Promise( ( resolve, reject ) =>
// {
// 	setTimeout( () =>
// 	{
// 		resolve( 30 )
// 	}, 2000 );

// } );
// waitingData.then( ( data ) =>
// {
// 	b = data;
// 	console.log( a + b );
// } );
//  <--------------- End ---------------->

// <-------------- How Node js works -------------->
// console.log( "starting up" )

// setTimeout( () =>
// {
// 	console.log( '2 second delay' )
// }, 2000 );

// setTimeout( () =>
// {
// 	console.log( '0 second delay' )
// }, 0 );
// console.log( "finishing up" )
// <----------------- End ---------------->

// <------------- Install and Start code with Express Js ------------>
// const express = require( 'express' );
// const app = express();
// app.get( '', ( req, resp ) =>
// {
// 	resp.send( 'hello, this is homepage' );
// } );
// app.get( '/about-us', ( req, res ) =>
// {
// 	res.send( 'this is about us page' )
// } );
// app.get( '/help-us', ( req, res ) =>
// {
// 	res.send( 'this is help us page' )
// } );

// app.listen( 5000 );
// <--------- End ---------->

// <---------- Difference between Response and Request ------------>
// const express = require( 'express' );
// const app = express();
// app.get( '/about', ( req, res ) =>
// {
// 	console.log( req.query.name );
// 	res.send( 'Welcome to the about page.' )
// } );
// app.listen( 5000 );
// <---------- End ---------->

// <------------ Render HTML and JSON ------------->
// const express = require( 'express' );
// const app = express();

// app.get( '/about', ( req, res ) =>
// {
// 	res.send( `<h1>Hello this is About us page. </h1>
// 	<button>Ok</button>` )
// } );
// app.get( '/help', ( req, res ) =>
// {
// 	res.send( [ {
// 		name: 'anil',
// 		mail: 'anil@mail.com'
// 	},
// 	{
// 		name: 'sam',
// 		mail: 'sam@mail.com'
// 	} ] )
// } )
// app.listen( 5000 );
// <----------- End ----------->

// <----------- Make HTML page and load HTML ------------>

// const express = require( 'express' );
// const path = require( 'path' );

// const app = express();

// app.set( 'view engine', 'ejs' );
// const publicPath = path.join( __dirname, 'public' );
// app.get( '', ( req, resp ) =>
// {
// 	resp.sendFile( `${ publicPath }/index.html` )
// } );
// app.get( '/about', ( req, resp ) =>
// {
// 	resp.sendFile( `${ publicPath }/about.html` )
// } );
// app.get( '/profile', ( req, resp ) =>
// {
// 	const user = {
// 		name: 'Singh',
// 		email: 'singh@gmail..com',
// 		city: 'mohali',
// 		skills: [
// 			'php',
// 			'html',
// 			'css',
// 			'bootstrap'
// 		]
// 	}
// 	resp.render( 'profile', { user } );
// } );

// app.get( '/login', ( req, resp ) =>
// {
// 	resp.render( 'login' );
// } )

// app.get( '*', ( req, resp ) =>
// {
// 	resp.sendFile( `${ publicPath }/pageNotFound.html` )
// } )

// app.use( express.static( publicPath ) );

// app.listen( 5000 );
// <---------- End ---------->

//! <---------- MiddleWare build and Implentation ----------->
//! const express = require( 'express' );
//! const app = express();
//! const reqFilter = require( './middleWare' );
//! const route = express.Router();

//! route.use( reqFilter );

//! app.get( '/', ( req, resp ) =>
//! {
//! 	resp.send( 'Welcome to home page' );
//! } );
//! app.get( '/users', reqFilter, ( req, resp ) =>
//! {
//! 	resp.send( 'Welcome to users Page' );
//! } );
//! app.get( '/users', ( req, resp ) =>
//! {
//! 	resp.send( 'Welcome to users Page' );
//! } );
//! route.get( '/about', ( req, resp ) =>
//! {
//! 	resp.send( 'Welcome to About Page' );
//! } );
//! route.get( '/contact', ( req, resp ) =>
//! {
//! 	resp.send( 'Welcome to Contact Page' );
//! } );

//! app.use( '/', route );
//! app.listen( 5000 );
//! <---------- End ---------->

// ?<---------- Connect Node with MongoDB ----------->

//? const { MongoClient } = require("mongodb");
//? const url = "mongodb://?localhost:27017";
//? const client = new MongoClient(url);
//? const dataBase = "e-comm";

//? async function getData() {
//?   let result = await client.connect();
//?   let db = result.db(dataBase);
//?   let collection = db.collection("product");
//?   let response = await collection.find({}).toArray();
//?   console.log(response);
//? }
//? getData();
// ?<--------- End ----------->

// ! <---------- Make file for DB Connection ---------->
//! const { MongoClient } = require("mongodb");
//! const url = "mongodb://localhost:27017";
//! const client = new MongoClient(url);
//! const dataBase = "e-comm";

//! async function dbConnect() {
//!   let result = await client.connect();
//!   db = result.db(dataBase);
//!   return db.collection('product');
//! }

//! dbConnect().then((resp)=>{
//! resp.find({name:'M40'}).toArray().then((data)=>{ //! this is use for specific record
//!     resp.find().toArray().then((data)=>{
//!     console.log(data);
//!   });
//! });

//? const dbConnect = require('./mongodb');

// ? <-------- Modern Syntax ---------->
//? const main = async ()=> {
//?   let data = await dbConnect();
//?   data = await data.find().toArray();
//?   console.log(data)
//? }
//? main();
// ? <-------- End ---------->

// ! <----------- End ----------->



// * <======== Start Working with Mongoose ======>

// const mongoose = require('mongoose');
// const saveInDB = async () => {
//     await mongoose.connect("mongodb://localhost:27017/e-comm");
//     const ProductSchema = new mongoose.Schema({
//         name: String,
//         price: Number,
//         brand: String,
//         category: String
//     });
//     const ProductModel = mongoose.model('products', ProductSchema);
//     let data = new ProductModel({ name: 'M18', price: 15000, brand: 'Samsung', category: 'Mobile' });
//     let result = await data.save();
//     console.log(result)
// }
// saveInDB();

// const updateInDB = async () => {
//     await mongoose.connect("mongodb://localhost:27017/e-comm");
//     const ProductSchema = new mongoose.Schema({
//         name: String,
//         price: Number,
//         brand: String,
//         category: String
//     });
//     const Product = mongoose.model('products', ProductSchema);
//     let data = await Product.updateOne(
//         { name: "M8" },
//         { $set: { price: 700 } }
//     )
//     console.log(data)
// }

// updateInDB();

// const deleteInDB = async () => {
//     await mongoose.connect("mongodb://localhost:27017/e-comm");
//     const ProductSchema = new mongoose.Schema({
//         name: String,
//         price: Number,
//         brand: String,
//         category: String
//     });
//     const Product = mongoose.model('products', ProductSchema);
//     let data = await Product.deleteOne({ nmae: 'M8' });
//     console.log(data)
// }

// deleteInDB();

// const findInDB = async () => {
//     await mongoose.connect("mongodb://localhost:27017/e-comm");
//     const ProductSchema = new mongoose.Schema({
//         name: String,
//         price: Number,
//         brand: String,
//         category: String
//     });
//     const Product = mongoose.model('products', ProductSchema);
//     let data = await Product.find();
//     console.log(data)
// }

// findInDB();

// * <======= End =========>

// ? <------------ Make Post API with mongoose ---------->

// const express = require('express');
// require('./config');
// const Product = require('./product');

// const app = express();
// app.use(express.json());

// app.post('/create', async (req, res) => {
//     let data = new Product(req.body);
//     let result = await data.save();
//     console.log(result);
//     res.send(result);
// });

// app.get('/list', async (req, res) => {
//     let data = await Product.find();
//     res.send(data);
// });

// app.delete('/delete/:_id', async (req, res) => {
//     let data = await Product.deleteOne(req.params)
//     console.log(req.params)
//     res.send(data)
// })

// app.put('/update/:_id', async (req, res) => {
//     let data = await Product.updateOne(
//         req.params,
//         { $set: req.body }
//     )
//     console.log(req.params)
//     res.send(data)
// })


// app.listen(5000);

// ? <------------- End ------------->

// ! <--------- Make search Api with MongoDB --------->

// const express = require('express');
// const product = require('./product');
// require('./config');
// const Product = require('./product');
// const app = express();

// app.use(express.json());

// app.get("/search/:key", async (req, res) => {
//     let data = await Product.find(
//         {
//             "$or": [
//                 { "name": { $regex: req.params.key } }
//             ]
//         }
//     );

//     res.send(data)
// });


// app.listen(5000);

// ! <--------- End --------->

// * <------- Upload File in Node Js ---------->

// const express = require('express');
// const multer = require('multer');
// const app = express();
// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) { //cb stands for call back
//             cb(null, 'uploads')
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "-" + Date.now() + ".jpg")
//         }
//     })
// }).single("user_file");

// app.post('/upload', upload, (req, res) => {
//     res.send("file uploaded")
// });

// app.listen(5000);

//  * <---------- End ------------>

// ? <----------- OS Module in Node.js ---------->

// const os = require('os');
// console.log(os.arch());
// console.log(os.freemem()/(1024*1024*1024));
// console.log(os.totalmem()/(1024*1024*1024));
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.userInfo());

// ? <---------- End ---------->

// ! <---------- Event and Event Emitter in Node JS ---------->

// const express = require('express');
// const EventEmitter = require("events");
// const app = express();
// const event = new EventEmitter();

// let count = 0;


// event.on("countAPI", () => {
//     count++;
//     console.log("event called", count)
// })

// app.get('/', (req, res) => {
//     res.send("api called");
//     event.emit("countAPI");
// });

// app.get('/search', (req, res) => {
//     res.send("search api called")
// });

// app.get('/update', (req, res) => {
//     res.send("update api called")
// });

// app.listen(5000);

// ! <---------- End ---------->

// * <---------- REPL ---------->

// REPL = stands for read-eval-print-loop
// it helps to write javascript and node js code in command line 
// Important commands
// - enter node in cmd 
// - after that write code line by line 
// - and if we enter in editor mode then use command .editor

// * <------------ End ------------>

 