import { StartTimeEventEmit } from 'react-schedule-meeting';
import { IAppointmentResp } from './api.interface';
export type TStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';
export type TColorCode = 'orange' | 'green' | 'grey' | 'red';

type THandleBook = (props: string, status: TStatus) => void;

export interface IAppointments extends IAppointmentResp {
  handleBooking: THandleBook;
}

export interface ISchedule {
  name: string;
  handlePostBooking: (e: StartTimeEventEmit) => void;
}

export interface IColorCode {
  type: TStatus;
  color: TColorCode;
}
