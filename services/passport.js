const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const dbUser = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id); // db uid
});

passport.deserializeUser((id, done) => {
    dbUser.findById(id)
        .then(user => {
            done(null, user);
        })
});

passport.use(new googleStrategy({
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },

    /*function fetchAlbums() {
        fetch('http://rallycoding.herokuapp.com/api/music_albums')
            .then(res => res.json())
            .then(json => console.log(json))

       async function fetchAlbums(){
        const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
        const json = await res.json();
        console.log(json);
       }

       below fun same

       async function fnName(){     ---->      const fnName = async() =>{
    }*/

    async (accessToken, refreshToken, profile, done) => {

        const existingUser = await dbUser.findOne({googleId: profile.id});

        if (existingUser) {
            return done(null, existingUser);
        }

        const user = await new dbUser({googleId: profile.id}).save();
        done(null, user);


    })
);