"use strict"

function ExtractJwt (req){
  let token = null;
  if (req.cookies && req.cookies.token != void(0)) token = req.cookies['token'];
  return token;
}

module.exports = {
    jwt: {
          jwtFromRequest: ExtractJwt,
          secretOrKey: 'CRyYTZQSqh6k9AeH'
    },
    expiresIn: '1 day'

    }
