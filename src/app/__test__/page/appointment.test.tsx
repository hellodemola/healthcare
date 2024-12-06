import Appointments from '@/app/appointments/page';
import Wrapper from '@/app/helpers/test.wrapper';
import { createTestStore, TAppStore } from '@/app/helpers/testStore';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test } from 'vitest';

let store: TAppStore;
store = createTestStore();
test('EMPTY_APPOINTMENTS_RETURNS_OPTION_TO_ADD', () => {
  render(
    <Wrapper store={store}>
      <Appointments />
    </Wrapper>
  );

  expect(screen.getByText('No appointments set')).toBeInTheDocument();
});

describe('APPOINTMENT PAGE', () => {
  beforeEach(() => {
    const demo = {
      appointment: {
        appointments: [
          {
            name: 'Ademola',
            specialty: 'Tester',
            appointmentDate: new Date(),
            status: 'pending',
            appointmentId: 'randomId',
          },
        ],
      },
    };
    store = createTestStore(demo);
  });

  test('RETURN_APPOINTMENTS_FOR_WHEN_APPOINTMENTS_EXOST', () => {
    render(
      <Wrapper store={store}>
        <Appointments />
      </Wrapper>
    );
    expect(screen.getByText('Ademola')).toBeInTheDocument();
  });
});
