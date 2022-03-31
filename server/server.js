const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const multer = require('multer')
const { authMiddleware } = require('./utils/auth');
const Image = require('./models/Image');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../client/public/images/')
    },
    filename: (req, file, cb) => {
      // naming convention
      cb(null, file.originalname);
    }
  })

  var upload = multer({
    storage: storage
  });


app.post('/upload', upload.single('image'), (req, res) => {

  const title = req.body.title;
  const description = req.body.description;
  const filename = req.body.filename;
  
  console.log(filename)
  console.log(title)
  console.log(description)

  const newImageData = {
    title,
    description,
    filename
  }

  console.log(newImageData)

  const newImage = new Image(newImageData);

  newImage.save()
          .then(() => res.json('Image added'))
          .catch(err => res.status(400).json('Error: ' + err))
})