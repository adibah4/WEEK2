const { MongoClient, ServerApiVersion, FindCursor, ObjectId } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.o5rxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(async err => {
    if (err){
        console.log(err.message)
        return
      }
      console.log("Connected to mongodb");

//COMPARISON OPERATOR
//find all document from collection TRIPS that TRIPDURATION less than or equal to 60
// let result = await client.db('sample_training').collection('trips').find(
//             { "tripduration": { "$lte" : 60}}
//             ).toArray();

// let result = await client.db('sample_training').collection('trips').find({ "start time" : {
//             "$gte": new Date('2016-01-02T00:00:00.000Z'), 
//             "$lt": new Date('2016-01-02T01:00:00.000Z')
//             }}).toArray();

//find all doc from collection TRIPS that TRIPDURATION less than equal to 70 and not SUBSCRIBER 
// let result = await client.db('sample_training').collection('trips').find({ 
//             "tripduration": { "$lte" : 70},
//             "usertype": {"$ne" : "Subscriber"}
//             }).toArray();

// find all doc from collection TRIPS that TRIPDURATION less equal to 50 or 100
// let result = await client.db('sample_training').collection('trips').find({ 
//             "tripduration": { "$in" : [50, 100]}
//             }).toArray();

//COMPARISON QUERY OPERATOR - $elemMatch
//find all document from collection POSTS that the array TAGS contain the word SALT
// let result = await client.db('sample_training').collection('posts').find({ 
//             "tags": { "$elemMatch" : {$eq : "salt"}}
//             }).toArray();


// let result = await client.db('sample_training').collection('posts').find({ 
//             "$or":  [{"tags": { "$elemMatch" :{ $eq: "roof" }}}, {'title' : "Gettysburg Address"}]
//             }).toArray();

//LOGICAL QUERY OPERATOR 

// let result = await client.db('sample_training').collection('posts').find({ 
//             "$and" : [
//                 {"tags": { "$elemMatch" :{ "$eq" : "roof" }}}, 
//                 {'title' : { "$not" : { "$eq" : "Gettysburg Address" }}}]
//             }).toArray();

// let result = await client.db('sample_training').collection('posts').find({ 
//             "author" : { "$not" : { "$eq" : "machine" }}
//             }).toArray();

// let result = await client.db('sample_training').collection('posts').find({ 
//             "title" : "US Constitution",
//             "tags": { "$elemMatch": { "$eq": "balloon" } }
//             }).toArray();


//FIELD UPDATE OPERATOR 

// let result = await client.db('MyDatabase').collection('people').updateOne(
//             { _id:  ObjectId("623d783d0101f66016261110") },
//             {'$set' : { likes : 0}}) //tambah baru
            

// let result = await client.db('MyDatabase').collection('people').updateOne(
//             { _id:  ObjectId("623d783d0101f66016261110") },
//             { "$inc" : { likes: 100}})


    /*  $min, >= not update, update less than 
        $max, <= not update, update more than  */

// let result = await client.db('MyDatabase').collection('people').updateOne(
//     { _id:  ObjectId("623d783d0101f66016261110") },
//     { "$min" : { likes: 100}})

// let result = await client.db('MyDatabase').collection('people').updateOne(
//      { _id:  ObjectId("623d783d0101f66016261110") },
//      { "$unset" : { likes: 0}})  //hilang 

// ARRAY UPDATE Operators 
// let result = await client.db('MyDatabase').collection('people').updateOne(
//             { name: "Jules Hirthe" },
//             { "$addToSet": { comments: "hurray"}})

let result = await client.db('MyDatabase').collection('people').updateOne(
            { name: "Jules Hirthe" },
            { "$pop": { comments: 1}}  //1, pop from back; -1, pop from front
            )

console.log(result)
})