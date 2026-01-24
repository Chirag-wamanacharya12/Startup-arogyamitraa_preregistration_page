import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Notification from '@/models/Notification';

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    // Basic Validation
    if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(body.email)) {
        return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    // Check if email already exists
    const existingNotification = await Notification.findOne({ email: body.email });
    if (existingNotification) {
        return NextResponse.json(
            { error: 'You are already on the notification list.' },
            { status: 409 }
        );
    }

    const notification = await Notification.create(body);

    return NextResponse.json(
      { message: 'Notification subscription successful', data: notification },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Notification Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
