// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: process.env.GHOST_URL,
        mail: {},
        database: {
            client: 'postgres',
            connection: {
                host: process.env.POSTGRES_HOST,
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DATABASE,
                port: (process.env.POSTGRES_PORT || '5432')
            },
            debug: false
        },

        storage: {
            active: 'ghost-s3',
            'ghost-s3': {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                bucket: process.env.AWS_S3_BUCKET,
                region: process.env.AWS_REGION,
                assetHost: process.env.AWS_S3_BUCKET_URL
            }
        },

        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        }
    }
};

module.exports = config;
