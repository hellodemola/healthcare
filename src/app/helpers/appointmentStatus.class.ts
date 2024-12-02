import { IColorCode, TColorCode, TStatus } from '../interface/appointments';
import { CANCEL, CANCELLED, COMPLETED, JOIN_MEETING } from './constant';
import statusColors from './statusColors';

export default class appointmentStatus {
  status: TStatus;
  appointmentDate: Date;

  private colorCode: IColorCode[] = statusColors;

  constructor(status: TStatus, appointmentDate: Date) {
    this.status = status;
    this.appointmentDate = appointmentDate;
  }

  private statusColor(): TColorCode {
    const colorCode = this.colorCode.find((e) => e.type === this.status)?.color;
    if (!colorCode) return 'grey';
    return colorCode;
  }

  get updateStatus(){
    if (this.status === 'pending') return CANCELLED;
    return COMPLETED;
  }

  get isActive(): boolean {
    if (this.status === CANCELLED || this.status === COMPLETED) return false;
    return true;
  }

  get color(): TColorCode {
    return this.statusColor();
  }

  get activeLabel(): 'join meeting' | 'cancel' | undefined {
    if (!this.isActive) return undefined;
    if (this.status === 'confirmed') return JOIN_MEETING;
    return CANCEL;
  }
}
