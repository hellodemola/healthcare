export interface IProviders {
  name: string;
  specialty: string;
  experience: string;
}

export interface IProviderAppointment extends IProviders {
  availableDate: Date;
  userId: string;
  handleBooking: (props: IHandleBook) => void;
}

export interface IHandleBook {
  id: string;
  name: string;
}
