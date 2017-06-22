const client = require('mongodb').MongoClient
const assert = require('assert')

const insertDocuments = (db, callback) => {
  // Get the documents collection
  var collection = db.collection('documents')
  // Insert some documents
  const data = [{
    a: 1
  }, {
    a: 2
  }, {
    a: 3
  }];
  collection.insertMany(data, function (err, result) {
    assert.equal(err, null)
    assert.equal(3, result.result.n)
    assert.equal(4, result.ops.length)
    console.log("Inserted 3 documents into the collection")
    callback(result)
  })
}

client.connect('mongodb://localhost:27017/corgi', (err, db) => {
  assert.equal(null, err)
  console.log("Connected successfully to server")
  insertDocuments(db, () => {
    db.close();
  })
})
