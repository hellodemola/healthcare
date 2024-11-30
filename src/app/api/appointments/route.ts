import { NextResponse } from 'next/server';
import apppointments from '../../helpers/appointmentMock.json';

export async function GET() {
  return NextResponse.json(apppointments);
}

export async function POST(request: Request) {
  const req = await request.json();
  const updateInfo = { ...{ status: 'pending' }, ...req };
  return NextResponse.json({ data: updateInfo });
}
