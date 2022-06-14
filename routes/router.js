const express = require('express')
const {vistaPrincipal} = require('../controllers/pageControllers')
const router =  express.Router() 

const { route } = require('express/lib/application')
const { Router } = require('express')

router.get('/', vistaPrincipal)

module.exports = {routes: router}