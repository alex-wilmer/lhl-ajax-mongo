## Ajax, Express, Mongo

### Resources & Reading Material

- client build with [parcel](https://github.com/parcel-bundler/parcel)
- [MongoDB NodeJS Driver](https://mongodb.github.io/node-mongodb-native/) (includes link to reference and APi)
- Nodejs filewatcher [nodemon](https://github.com/remy/nodemon) (Node Monitor)
- [backpack](https://github.com/jaredpalmer/backpack) an alernative for nodemon that offers even more features
- [mongo shell reference](https://docs.mongodb.com/manual/reference/mongo-shell/)
- [MDN Article about CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (cross origin resource sharing)
- [express cors npm package](https://github.com/expressjs/cors  )
- [Stackoverflow: how to delete something properly (use mongo.ObjectID)](https://stackoverflow.com/questions/48164208/delete-mongodb-document-by-id-in-express-js)

### Quickstart

Install:

```
npm i
```

Make sure the MongoDB Daemon is running by entering your shell:

```
mongo
```

If that command does not work try starting your daemon with:

```
mongod
```

Start the server:

```
npm run server
```

Start the client:

```
npm run client
```

Visit http://localhost:1234 in your browser!