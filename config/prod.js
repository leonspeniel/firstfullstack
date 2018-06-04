// prod keys

module.exports = {
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    standardMongoDbUrl: process.env.STANDARD_MONGO_DB_URL,
    cookieKey: process.env.COOKIE_KEY,
    stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    boxPublicKey:process.env.BOX_PUBLIC_KEY,
    boxSecretKey:process.env.BOX_SECRET_KEY,
    sendGridKey:process.env.SEND_GRID_KEY,
    redirectDomain:process.env.REDIRECT_DOMAIN

};