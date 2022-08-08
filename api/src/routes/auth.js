const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const google = express.Router();

const authController = require('../controllers/auth');
const { config } = require('../config');
const { authService } = require('../services/auth');

const goggleConfg = config.get('google');

passport.use(new GoogleStrategy(goggleConfg, authService.verify))

passport.serializeUser(authService.serializeUser);

passport.deserializeUser(authService.deserializeUser);

const authenticate = passport.authenticate('google', {
    failureRedirect: '/auth/failed',
    scope: goggleConfg.scope,
    accessType: 'offline',
    prompt: 'consent',
});

google.get('/google', authenticate)
google.get('/google/callback', authenticate, authService.callback)
google.get('/failed', authController.authFailed)

module.exports = google