const dbConnect = require('./mongodb');

const updateRecord = async ()=>{
     let data = await dbConnect();
     let result = await data.updateOne(
        {name:"M23"},{
            $set:{name:"M40"}
        }
     )
     console.log(result)
}

updateRecord();