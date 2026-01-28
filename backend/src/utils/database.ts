import sqlite3 from 'sqlite3';

const dbPath = process.env.DB_PATH || './data/pbp-ttrpg.sqlite';

// Create database connection
export const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('📄 Connected to SQLite database at', dbPath);
  }
});

// Initialize database tables
export const initializeDatabase = () => {
  return new Promise<void>((resolve, reject) => {
    db.serialize(() => {
      // Enable foreign keys
      db.run('PRAGMA foreign_keys = ON');
      
      console.log('✅ Database initialized successfully');
      resolve();
    });
  });
};

// Graceful shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err);
    } else {
      console.log('📄 Database connection closed');
    }
    process.exit(0);
  });
});