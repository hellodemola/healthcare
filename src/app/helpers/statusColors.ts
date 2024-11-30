import { IColorCode } from '../interface/appointments';
import { COMPLETED, CONFIRMED, PENDING, CANCELLED, ORANGE, GREEN, GREY, RED } from './constant';

const statusColors: IColorCode[] = [
  { type: PENDING, color: ORANGE },
  { type: CONFIRMED, color: GREEN },
  { type: COMPLETED, color: GREY },
  { type: CANCELLED, color: RED },
];

export default statusColors;
