const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const google = express.Router();

const authController = require('../controllers/auth');
const { config } = require('../config');
const { userService } = require('../services');

const goggleConfg = config.get('google');

passport.use(new GoogleStrategy(goggleConfg, userService.verify))

passport.serializeUser(userService.serializeUser);

passport.deserializeUser(userService.deserializeUser);

const authenticate = passport.authenticate('google', {
    failureRedirect: '/auth/failed',
    scope: goggleConfg.scope,
    accessType: 'offline',
    prompt: 'consent',
});

google.post('/admin/login', authController.adminLogin)
google.post('/admin/signup', authController.adminSignup)
google.get('/google', authenticate)
google.get('/google/callback', authenticate, userService.callback)
google.get('/failed', authController.authFailed)

module.exports = google