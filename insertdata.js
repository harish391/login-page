const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./users.db');

const emails = [
    'test1@example.com',
    'test2@example.com',
    'test3@example.com',
    'test4@example.com',
    'test5@example.com',
    // Add more test emails here
];

emails.forEach(email => {
    const passwordHash = Buffer.from('password123').toString('base64'); // Simple hash for demonstration
    const stmt = db.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)');
    stmt.run(email, passwordHash, (err) => {
        if (err) {
            console.error(`Error inserting user ${email}:`, err.message);
        } else {
            console.log(`User ${email} inserted successfully`);
        }
    });
    stmt.finalize();
});

db.close();
