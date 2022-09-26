const express = require('express')
const db = require('../db')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const config = require('../config')
const utils = require('../utils')

const router = express.Router()

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

router.post('/signup', (request, response) => {
  const { fname, lname, email, password,phone  } = request.body

  console.log(request.body)

  // encrypt the password
 

  // by default every user will be non-verified
  //aid  fname  lname  email  passw  phone  bod
  const statement = `insert into admin (fname, lname, email, password, phone ) values (
    '${fname}', '${lname}', '${email}', '${password}','${phone}'
  )`

  db.execute(statement, (error, data) => {
    const result = utils.createResult(error, data)
    if (!error) {
      response.send(result)
    } else {
      response.send(result)
    }
  })
})


//------------------------------------------------------------------------------------------------------------------------------------------------------------



router.post('/adduser', (request, response) => {

 
  const {fname,lname,mobile,email,password,pincode,drid} = request.body

  console.log(request.body)

  const statement = `insert into user (fname,lname,mobile,email,password,pincode,drid) values (
     '${fname}', '${lname}','${mobile}', '${email}','${password}','${pincode}','${drid}'
  )`

  db.execute(statement, (error, data) => {
    const result = utils.createResult(error, data)
    if (!error) {
      response.send(result)
    } else {
      response.send(result)
    }
  })
})
//--------------------------------------------------------------------------------------------------------------------------------------------------------

router.delete('/deleteuser', (request, response) => {

 
  const { uid  } = request.body

  console.log(request.body)

  
  const statement = `delete from user where uid='${uid}'`

  db.execute(statement, (error, data) => {
    const result = utils.createResult(error, data)
    if (!error) {
      response.send(result)
    } else {
      response.send(result)
    }
  })
})
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
router.post('/addDoctor', (request, response) => {

 
  const { fname,lname,mobile,email,password,pincode  } = request.body

  console.log(request.body)
  
  const statement = `insert into doctor (fname,lname,mobile,email,password,pincode) values (
     '${fname}', '${lname}','${mobile}', '${email}','${password}','${pincode}'
  )`

  db.execute(statement, (error, data) => {
    const result = utils.createResult(error, data)
    if (!error) {
      response.send(result)
    } else {
      response.send(result)
    }
  })
})
//------------------------------------------------------------------------------------------------------------------------------------------------------------

router.get('/showdoctor', function (req, res, next) {
  db.query('SELECT * FROM doctor', function (err, rows) {
    if (err) {
      req.flash('error', err)
      res.render('profile', { data: '' })
    } else {
      res.render('profile', { data: rows })
    }
  })
})
//------------------------------------------------------------------------------------------------------------------------------------------------------------


router.delete('/deletedoctor', (request, response) => {

 
  const { drid  } = request.body

  console.log(request.body)

  
  const statement = `delete from doctor where drid='${drid}'`

  db.execute(statement, (error, data) => {
    const result = utils.createResult(error, data)
    if (!error) {
      response.send(result)
    } else {
      response.send(result)
    }
  })
})
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
router.post('/addCommunity', (request, response) => {

 
  const { cname,pincode  } = request.body

  console.log(request.body)
  
  const statement = `insert into community (cname,pincode) values (
     '${cname}', '${pincode}'
  )`

  db.execute(statement, (error, data) => {
    const result = utils.createResult(error, data)
    if (!error) {
      response.send(result)
    } else {
      response.send(result)
    }
  })
})
//------------------------------------------------------------------------------------------------------------------------------------------------------------


router.delete('/deleteCommunity', (request, response) => {

 
  const { cid  } = request.body

  console.log(request.body)

  
  const statement = `delete from community where cid='${cid}'`

  db.execute(statement, (error, data) => {
    const result = utils.createResult(error, data)
    if (!error) {
      response.send(result)
    } else {
      response.send(result)
    }
  })
})
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
router.post('/addDog', (request, response) => {

 
  const { dname,dage,dbreed  } = request.body

  console.log(request.body)
  
  const statement = `insert into dog (dname,dage,dbreed) values (
     '${dname}', '${dage}','${dbreed}'
  )`

  db.execute(statement, (error, data) => {
    const result = utils.createResult(error, data)
    if (!error) {
      response.send(result)
    } else {
      response.send(result)
    }
  })
})
//------------------------------------------------------------------------------------------------------------------------------------------------------------


router.delete('/deleteDog', (request, response) => {

 
  const { did  } = request.body

  console.log(request.body)

  
  const statement = `delete from dog where did='${did}'`

  db.execute(statement, (error, data) => {
    const result = utils.createResult(error, data)
    if (!error) {
      response.send(result)
    } else {
      response.send(result)
    }
  })
})
//------------------------------------------------------------------------------------------------------------------------------------------------------------
router.post('/signin', (request, response) => {
  const { email, password } = request.body

  const statement = `select id, fname, lname, email, phone from admin 
      where email = '${email}' and password = '${password}'`

  db.execute(statement, (error, users) => {
    const result = {
      status: '',
    }

    if (error != null) {
      // error while executing statement
      result['status'] = 'error'
      result['error'] = error
    } else {
      if (users.length == 0) {
        // user does not exist
        result['status'] = 'error'
        result['error'] = 'User does not exist'
      } else {
        const user = users[0]

        // check the user status
        // 0: non-verified, 1: active, 2: suspended

        const payload = { id: user['id'] }
        const token = jwt.sign(payload, config.secret)

        result['status'] = 'success'
        result['data'] = {
          token: token,
          firstName: user['fname'],
          lastName: user['lname'],
          email: user['email'],
          phone: user['phone']
        }
      }

      console.log(result)
      response.send(result)
    }
  })
})

module.exports = router
//--------------------------------------------------------
router.post('/addLocation', (request, response) => {

 
  const { pincode,location  } = request.body

  console.log(request.body)
  
  const statement = `insert into location (pincode,location) values (
     '${pincode}', '${location}'
  )`

  db.execute(statement, (error, data) => {
    const result = utils.createResult(error, data)
    if (!error) {
      response.send(result)
    } else {
      response.send(result)
    }
  })
})
//-------------------------------------------------------------------------------------
router.post('/addHostel', (request, response) => {

 
  const { hname,contact } = request.body

  console.log(request.body)
  
  const statement = `insert into hostel (hname,contact) values (
     '${hname}', '${contact}'
  )`

  db.execute(statement, (error, data) => {
    const result = utils.createResult(error, data)
    if (!error) {
      response.send(result)
    } else {
      response.send(result)
    }
  })
})
