const express = require('express');
const app = express();
const PORT = process.env.PORT || 9090;
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { MONGOURI } = require('./config/key');
const passport = require('passport');
const configPassport = require('./config/configPassport');
// loading router
const { UserRoute, PostRoute } = require('./routes/index.route');

// use bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// config passport
passport.initialize();
configPassport(passport);
// connect to the db
const optsDB = { 
  useCreateIndex: true, 
  useFindAndModify: false, 
  useNewUrlParser: true 
};
mongoose
  .connect(MONGOURI, optsDB)
  .then(() => console.log('connected to the database'))
  .catch(() => console.log('fail to connect db'))
// use router
app.use('/api/user', UserRoute);
app.use('/api/post', PostRoute);

// // server static asset if in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) =>{
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   })
// }
app.listen(PORT, () => console.log(`connect in port ${PORT}`));

