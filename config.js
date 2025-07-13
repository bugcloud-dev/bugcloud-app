// config.js - Configuration file with embedded secrets
module.exports = {
    // Database configurations - DEMO SECRETS
    database: {
        mysql: {
            host: 'db.example.com',
            user: 'root',
            password: 'RootPassword123!',
            database: 'production'
        },
        mongodb: {
            uri: 'mongodb://admin:MongoPass456@cluster0.mongodb.net/myapp?retryWrites=true&w=majority'
        },
        redis: {
            host: 'redis.example.com',
            port: 6379,
            password: 'RedisSecret789'
        }
    },
    
    // API Keys - DEMO SECRETS
    apiKeys: {
        stripe: {
            publishable: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
            secret: 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'
        },
        sendgrid: 'SG.1234567890abcdef.1234567890abcdef1234567890abcdef12345678',
        twilio: {
            accountSid: 'AC1234567890abcdef1234567890abcdef',
            authToken: 'your_auth_token_here_32chars'
        },
        google: {
            clientId: '123456789-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com',
            clientSecret: 'GOCSPX-abcdefghijklmnopqrstuvwxyz123456'
        }
    },
    
    // OAuth tokens - DEMO SECRETS
    oauth: {
        github: 'gho_1234567890abcdef1234567890abcdef123456',
        gitlab: 'glpat-xxxxxxxxxxxxxxxxxxxx',
        bitbucket: 'BBAAAAAAAAAAAAAAAAAA:1234567890abcdef1234567890abcdef12345678'
    },
    
    // Encryption keys - DEMO SECRETS
    encryption: {
        aes256Key: 'abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
        jwtSecret: 'your-256-bit-secret-key-here-make-it-long-and-random',
        sessionSecret: 'keyboard-cat-session-secret-key'
    },
    
    // Third-party service tokens - DEMO SECRETS
    services: {
        docker: {
            username: 'dockeruser',
            password: 'DockerHub_Password_2024'
        },
        heroku: 'HRKU-12345678-1234-1234-1234-123456789012',
        netlify: 'nfp_1234567890abcdef1234567890abcdef12345678',
        vercel: 'vercel_token_1234567890abcdef1234567890abcdef'
    }
};
