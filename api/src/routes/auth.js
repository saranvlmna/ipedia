const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const auth = express.Router();

const authController = require("../controllers/auth");
const { config } = require("../config");
const { googleAuthService } = require("../services");

const goggleConfg = config.get("google");

passport.use(new GoogleStrategy(goggleConfg, googleAuthService.verify));

passport.serializeUser(googleAuthService.serializeUser);

passport.deserializeUser(googleAuthService.deserializeUser);

const authenticate = passport.authenticate("google", {
  failureRedirect: "/auth/failed",
  scope: goggleConfg.scope,
  accessType: "offline",
  prompt: "consent"
});

auth.post("/signup", authController.signup);
auth.post("/login", authController.login);
auth.put("/update/:id", authController.updateUser);
auth.put("/delete/:id", authController.deleteUser);
auth.get("/list", authController.listUsers);
auth.get("/me", authController.me);

auth.get("/google", authenticate);
auth.get("/google/callback", authenticate, googleAuthService.callback);
auth.get("/failed", authController.authFailed);

module.exports = auth;
