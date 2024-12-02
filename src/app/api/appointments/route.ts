import { NextResponse } from 'next/server';
import apppointments from '../../helpers/appointmentMock.json';
import providers from '../../helpers/mockData.json';
import { IAppointmentReq, IAppointmentResp } from '@/app/interface/api.interface';

export async function GET() {
  return NextResponse.json(apppointments);
}

export async function POST(request: Request) {
  const req: IAppointmentReq = await request.json();
  const { userId, appointmentDate, createdAt, providerId } = req;
  const provider = providers.find((each) => each.userId === req.providerId);
  const responseData: IAppointmentResp = {
    status: 'pending',
    appointmentId: new Date().valueOf().toString(),
    name: provider?.name || providers[0].name,
    providerId,
    specialty: provider?.specialty || providers[0].specialty,
    userId,
    appointmentDate,
    createdAt,
  };
  return NextResponse.json(responseData);
}
