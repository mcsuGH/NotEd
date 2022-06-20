var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var passport = require('passport');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var notesRouter = require('./routes/notes');
var sessionsRouter = require('./routes/sessions');
var calendarRouter = require('./routes/calendarEvents')

var app = express();

var url = process.env.REACT_APP_HEROKU_URL || "http://localhost:3000";

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client/build")));

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: url, // <-- location of the react app we're connecting to
      credentials: true,
    })
  );
}

app.use(
  session({
    secret: "secretcode",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

app.use('/server', indexRouter);
app.use('/server/users', usersRouter);
app.use('/server/notes', notesRouter);
app.use('/server/sessions', sessionsRouter);
app.use('/server/calendar', calendarRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

module.exports = app;
