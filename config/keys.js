
// check to use prod key or local key

if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
}else{
    module.exports = require('./devKey');
}

