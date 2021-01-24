/* DATABSE FROM clever-cloud.com */
const host = 'HXGProHXMAfyb2bKsiy1@bbgig5ysfkyq3n4-mongodb.services.clever-cloud.com';
const port = '27017';
const db_name = 'bbgig5ysfkyq3n4';
const db_user = 'u09k7pmbnnjmq6qxxmxh';

// conenection uri 
const uri = 'mongodb://'+db_user+':'+host+':'+port+'/'+db_name;

module.exports = {
    url: uri
};
