/**
 * @vitest-environment jsdom
 */

import Appointment from '@/app/components/cards/appointment';
import { render, screen, fireEvent } from '@testing-library/react';
import { test, expect } from 'vitest';
import React from 'react';
import { TStatus } from '@/app/interface/appointments';
import { IAppointmentResp } from '@/app/interface/api.interface';
import { CANCEL, COMPLETED } from '@/app/helpers/constant';
import { describe } from 'node:test';

describe('APPOINTMENT_COMPONENT', () => {
  test('PENDING_STATUS_CHANGES_WHEN_HANDLEBOOKING_IS_CLICKED', () => {
    const demo: IAppointmentResp = {
      name: 'Ademola',
      specialty: 'Tester',
      appointmentDate: new Date(),
      status: 'pending',
      appointmentId: 'randomId',
    };

    const handleBooking = (id: string, status: TStatus) => (demo.status = status);
    render(
      <Appointment
        name={demo.name}
        specialty={demo.specialty}
        appointmentDate={demo.appointmentDate}
        appointmentId={demo.appointmentId}
        status={demo.status}
        handleBooking={handleBooking}
      />
    );

    const cancelBooking = screen.getByText(CANCEL);
    fireEvent.click(cancelBooking);
    expect(screen.getByText(demo.name)).toBeInTheDocument();
    expect(cancelBooking).toBeInTheDocument();
    expect(screen.getByText(CANCEL)).toBeInTheDocument();
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  test('HANDLEBOOKING_BUTTON_HIDDEN_WHEN_INACTIVE', () => {
    const demo: IAppointmentResp = {
      name: 'Ademola',
      specialty: 'Tester',
      appointmentDate: new Date(),
      status: 'completed',
      appointmentId: 'randomId',
    };

    const handleBooking = (id: string, status: TStatus) => (demo.status = status);
    render(
      <Appointment
        name={demo.name}
        specialty={demo.specialty}
        appointmentDate={demo.appointmentDate}
        appointmentId={demo.appointmentId}
        status={demo.status}
        handleBooking={handleBooking}
      />
    );

    expect(screen.getByText(demo.name)).toBeInTheDocument();
    expect(screen.getByText(COMPLETED)).toBeInTheDocument();
  });
});
