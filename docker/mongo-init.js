db = db.getSiblingDB('SNS');

db.createCollection('Post', {capped: false});

db.Post.insert(
  {
   	"title" : "Hello, World!",
    "body" : "This is a test post.",
    "user_id" : 1,
    "comments" : [],
    "created_at": {
      "seconds": 0,
      "nanos": 0
    },
    "updated_at": {
      "seconds": 0,
      "nanos": 0
    }
  }
);

db.Post.insert(
  {
   	"title" : "Hello, Hell!",
    "body" : "This is a second test post.",
    "user_id" : 2,
    "comments" : [],
    "created_at": {
      "seconds": 0,
      "nanos": 0
    },
    "updated_at": {
      "seconds": 0,
      "nanos": 0
    }
  }
);