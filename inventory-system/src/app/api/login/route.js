import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

// Database connection
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'golden_inventory',
});

export async function POST(request) {
  try {
    const { name, password } = await request.json();

    // Validate input
    if (!name || !password) {
      return NextResponse.json(
        { message: 'Username and password are required' },
        { status: 400 }
      );
    }

    // Fetch user from the database
    const [rows] = await db.query('SELECT * FROM login_users WHERE name = ?', [
      name,
    ]);

    if (rows.length === 0) {
      return NextResponse.json(
        { message: 'Invalid Username or password' },
        { status: 401 }
      );
    }

    const user = rows[0];

    if (password !== user.password) {
      return NextResponse.json(
        { message: 'Invalid Username or password' },
        { status: 401 }
      );
    }

    // Login successful
    return NextResponse.json(
      { message: 'Login successful', user: { id: user.id, name: user.name, email: user.email } },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}