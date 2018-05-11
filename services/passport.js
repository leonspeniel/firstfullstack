const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const dbUser = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id); // db uid
});

passport.deserializeUser((id, done) =>{
    dbUser.findById(id)
        .then(user => {
            done(null, user);
        })
});

passport.use(new googleStrategy({
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {

        dbUser.findOne({googleId: profile.id})
            .then((existingUser) => {

                if (existingUser) {

                    done(null, existingUser);
                } else {

                    new dbUser({googleId: profile.id}).save()
                        .then(user => done(null,user));
                }
            })

    })
);