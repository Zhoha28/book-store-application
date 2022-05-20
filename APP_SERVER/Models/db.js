const mongoose = require('mongoose');

var dbURI = 'mongodb+srv://zhohadamani:zhoha123@cluster0.dy0on.mongodb.net/bookin?retryWrites=true&w=majority';

mongoose.connect(dbURI);

mongoose.connection.on('connected', () =>{
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err =>{
    console.log('Mongoose connection error: ',err);
});

mongoose.connection.on('disconnected', () =>{
    console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.once('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.kill(process.pid, 'SIGINT');
    });
});

process.once('SIGTERM', () => {
    gracefulShutdown('Herokyu app shutdown', () => {
        process.kill(process.pid, 'SIGTERM');
    });
});

require('./Book');