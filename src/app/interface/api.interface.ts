import { TStatus } from "./appointments";
import { IProviders } from "./providers";

export interface IAppointmentReq {
  userId: string;
  createdAt: Date;
  providerId: string;
  appointmentDate: Date;
}

export interface IAppointmentResp extends IProviders {
  userId?: string;
  createdAt?: Date;
  providerId?: string;
  appointmentDate: Date;
  appointmentId: string;
  status: TStatus;
}
