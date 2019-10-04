// const mongodb = require('mongodb');
// const MongoClien = mongodb.MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
    connectionURL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        if (err) {
            return console.log('Something went wrong');
        }
        // console.log('Conneted successfully');
        const db = client.db(databaseName);
        // db.collection('users').insertOne({
        //     name: 'Abul',
        //     age: 21,
        // });
        // db.collection('users').insertOne({
        //     name: 'Anwar',
        //     age: 27,
        // });
        // db.collection('users').insertMany(
        //     [
        //         {
        //             description: 'This is first description',
        //             complete: false,
        //         },
        //         {
        //             description: 'This is second description',
        //             complete: true,
        //         },
        //     ],
        //     (error, result) => {
        //         if (error) {
        //             return console.log('Unable to add collections');
        //         }
        //         console.log(result.ops);
        //     }
        // );
        // const id = ObjectID();
        // console.log(id);
        // console.log(id.getTimestamp());

        // db.collection('users').findOne({ name: 'Anwar' }, (err, user) => {
        //     if (err) {
        //         return console.log('something is wrong');
        //     }
        //     console.log(user);
        // });
        // const updateName = db.collection('users').updateOne(
        //     { _id: new ObjectID('5d94c85aa43083246013b840') },
        //     {
        //         $set: { name: 'Billal' },
        //     }
        // );
        // updateName
        //     .then(result => {
        //         console.log(result);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    }
);
