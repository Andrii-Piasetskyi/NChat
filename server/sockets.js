"use strict";

const MessageModel = require('./models/messages.model');

module.exports = io =>{
    io.on('connection', function (socket) {
    socket.emit('connected', "you are conected");

    socket.join('all');

    socket.on('msg', content =>{
          console.log("MSG", content);
          const obj = {
          date: new Date(),
          content: content,
          username: "Andrew"
          };

      MessageModel.create(obj, err =>{
          if(err) return console.error("MessageModel", err);
          socket.emit("message", obj);
          socket.to('all').emit("massage", obj);
        });
      })

      socket.on('receiveHistory', ()=>{
          MessageModel
              .find({})
              .sort({date: -1})
              .limit(50)
              .sort({date: 1})
              .lean()
              .exec((err, messages)=>{
                  if(!err){
                      socket.emit("history", messages);
                  }
              })
      })
    });
  };
