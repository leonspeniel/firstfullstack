const BoxSDK = require('box-node-sdk');
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');


module.exports = app => {
    app.get('/api/boxfiles', requireLogin, async (req, res) => {

        const sdk = new BoxSDK({
            clientID: keys.boxPublicKey, // required
            clientSecret: keys.boxSecretKey // required
        });


        // Create a basic API client
        var client = sdk.getBasicClient('XOFwsmfcBU20OrARjwlCCpMtl0SouXOV');

        console.log("client: ",client);

        // The SDK also supports Promises
        const bosUser = await client.users.get(client.CURRENT_USER_ID);

        console.log("bosUser: ",bosUser);
        /*const folderMetadata = await client.folders.getAllMetadata('temp');

        console.log("folderMetadata: ",folderMetadata);*/
        res.send(bosUser)
    });
};
