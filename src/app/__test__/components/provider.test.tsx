import Provider from '@/app/components/cards/provider';
import { IHandleBook } from '@/app/interface/providers';
import { screen, render, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

describe('PROVIDER_COMPONENT', () => {
  test('USERS_SHOULD_BE_ABLE_TO_REGISTER', () => {
    let isCurrentUser: IHandleBook = { name: '', id: '' };
    const handleBooking = (person: IHandleBook) =>
      (isCurrentUser = { id: person.id, name: person.name });
    render(
      <Provider
        name="Ademola"
        specialty="Dentist"
        experience="8 years"
        availableDate={new Date()}
        userId="007"
        handleBooking={handleBooking}
      />
    );

    fireEvent.click(screen.getByRole('button'));
    expect(isCurrentUser.name).toBe('Ademola');
    expect(isCurrentUser.id).toBe('007');
  });
});
