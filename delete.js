const dbConnect = require('./mongodb');

const deleteRecord = async ()=>{
    console.log('record delete successfully');
    let data = await dbConnect();
    let result = await data.deleteOne({name:'M40'})
    console.log(result)
}

deleteRecord();