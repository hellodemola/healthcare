import { IAppointmentResp } from '@/app/interface/api.interface';
import { TStatus } from '@/app/interface/appointments';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AppointmentState {
  appointments: IAppointmentResp[];
}

interface IUpdateAppointment {
  status: TStatus,
  appointmentId: string,
}

const initialState: AppointmentState = {
  appointments: [],
};

export const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    regAppointment: (state, action: PayloadAction<IAppointmentResp>) => {
      state.appointments.push(action.payload);
    },
    updateAppointment: (state, action: PayloadAction<IUpdateAppointment>) => {
      const index = state.appointments
      .findIndex((e) => e.appointmentId === action.payload.appointmentId)
      if (index !== -1){
        state.appointments[index].status = action.payload.status
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const { regAppointment, updateAppointment } = appointmentSlice.actions;

export default appointmentSlice.reducer;
