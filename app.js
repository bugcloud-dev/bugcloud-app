// app.js - Main application file with embedded secrets
const express = require('express');
const mysql = require('mysql2');
const AWS = require('aws-sdk');
const { Client } = require('pg');
const axios = require('axios');

const app = express();
const port = 3000;

// Database connection - DEMO SECRET: Database credentials
const dbConfig = {
    host: 'localhost',
    user: 'admin',
    password: 'SuperSecret123!',
    database: 'myapp_db'
};

// PostgreSQL connection - DEMO SECRET: Another DB password
const pgClient = new Client({
    host: 'pg-server.example.com',
    port: 5432,
    database: 'production_db',
    user: 'postgres',
    password: 'pg_password_2024!'
});

// AWS Configuration - DEMO SECRET: AWS credentials
AWS.config.update({
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
    region: 'us-west-2'
});

// API Keys - DEMO SECRETS: Various API keys
const STRIPE_SECRET_KEY = 'sk_test_BQokikJOvBiI2HlWgH4olfQ2';
const GITHUB_TOKEN = 'ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const SLACK_WEBHOOK = 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX';
const OPENAI_API_KEY = 'sk-proj-abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// JWT Secret - DEMO SECRET: JWT signing key
const JWT_SECRET = 'my-super-secret-jwt-key-that-should-not-be-here';

// Email configuration - DEMO SECRET: Email credentials
const emailConfig = {
    service: 'gmail',
    auth: {
        user: 'noreply@mycompany.com',
        pass: 'Gmail_App_Password_123'
    }
};

// Create MySQL connection
const connection = mysql.createConnection(dbConfig);

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the demo app!' });
});

app.get('/users', (req, res) => {
    // Direct SQL query with embedded credentials - DEMO SECRET
    connection.query('SELECT * FROM users', (error, results) => {
        if (error) {
            console.error('Database error:', error);
            return res.status(500).json({ error: 'Database error' });
        }
        res.json(results);
    });
});

app.post('/webhook', (req, res) => {
    // Slack notification with webhook URL - DEMO SECRET
    const webhookUrl = 'https://hooks.slack.com/services/T1234567/B1234567/abcdefghijklmnopqrstuvwx';
    
    axios.post(webhookUrl, {
        text: 'New webhook received!'
    }).catch(err => console.error('Webhook error:', err));
    
    res.json({ status: 'received' });
});

// Start server
app.listen(port, () => {
    console.log(`Demo app listening at http://localhost:${port}`);
});

module.exports = app;
