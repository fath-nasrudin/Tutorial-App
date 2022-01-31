const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');

const db = require('./models');
const routes = require('./routes');
const docs = require('../docs');

// establish connection to dabase
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log('Failed to connect to the database', err);
    process.exit();
  });

const app = express();
const corsOptions = {
  origin: 'http://localhost:3031',
};

// middlewares

// setting cors
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-for-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'welcome home' });
});

app.use('/api', routes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
