import { IAppointmentResp } from './api.interface';
export type TStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';
export type TColorCode = 'orange' | 'green' | 'grey' | 'red';

export interface IAppointments extends IAppointmentResp {
  handleBooking: (props: string, status: TStatus) => void;
}

export interface IColorCode {
  type: TStatus;
  color: TColorCode;
}
