import { IChildren } from './common.interface';

export interface IButton extends IChildren {
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}
