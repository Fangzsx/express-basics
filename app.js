const express = require('express');
const app = express()
const port = '1080'

const friendRouter = require('./routers/friends');
const watchRouter = require('./routers/watchs');
const marketplaceRouter = require('./routers/marketplace');
const notificationRouter = require('./routers/notifications');
const indexRouter = require('./routers/index');

const usersRouter = require('./routers/users')


app.use('/friends', friendRouter);
app.use('/watch', watchRouter);
app.use('/marketplace', marketplaceRouter);
app.use('/notifications', notificationRouter);
app.use('/users', usersRouter);
app.use('/', indexRouter);

app.listen(port, () => {
    console.log('running ...');
});