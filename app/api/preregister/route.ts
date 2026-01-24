import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Preregistration from '@/models/Preregistration';

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    // Basic Validation
    if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(body.email)) {
        return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }
    // Validates generic phone number (allowing optional +, spaces, dashes, and 7-15 digits)
    if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(body.phone.replace(/[\s\-]/g, '')) && !/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/.test(body.phone.replace(/[\s\-]/g, ''))) {
         return NextResponse.json({ error: 'Invalid phone number.' }, { status: 400 });
    }
    
    // Check if email already exists
    const existingUser = await Preregistration.findOne({ email: body.email });
    if (existingUser) {
        return NextResponse.json(
            { error: 'Email already preregistered.' },
            { status: 409 }
        );
    }

    const preregistration = await Preregistration.create(body);

    return NextResponse.json(
      { message: 'Preregistration successful', data: preregistration },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Preregistration Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
