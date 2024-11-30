import { IProviders } from './providers';

export type TStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';
export type TColorCode = 'orange' | 'green' | 'grey' | 'red';

export interface IAppointments extends IProviders {
  appointmentDate: Date;
  status: TStatus;
  appointmentId: string;
  handleBooking: (props: string, status: TStatus) => void;
}

export interface IColorCode {
  type: TStatus;
  color: TColorCode;
}
