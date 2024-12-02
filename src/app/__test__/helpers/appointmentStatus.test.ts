import appointmentStatus from '../../helpers/appointmentStatus.class';
import { COMPLETED, CONFIRMED, PENDING, CANCELLED, ORANGE, GREEN, GREY, RED, JOIN_MEETING, CANCEL } from '../../helpers/constant';
import { expect, test, describe } from 'vitest';

describe("APPOINTMENT_STATUS", () => {
    const date = new Date();
    const pendingAppointment = new appointmentStatus(PENDING, date);
    const confirmedAppointment = new appointmentStatus(CONFIRMED, date);
    const completedAppointment = new appointmentStatus(COMPLETED, date)
    const cancelledAppointment = new appointmentStatus(CANCELLED, date)
    test("STYLING_COLOR_FOR_EACH_STATUS_RETURNS", () => {
        expect(pendingAppointment.color).toBe(ORANGE);
        expect(confirmedAppointment.color).toBe(GREEN);
        expect(completedAppointment.color).toBe(GREY);
        expect(cancelledAppointment.color).toBe(RED);
    })

    test("ONLY_CANCELLED_AND_COMPLETED_STATUS_RETURN_INACTIVE",  () => {
        expect(pendingAppointment.isActive).toBe(true);
        expect(confirmedAppointment.isActive).toBe(true);
        expect(completedAppointment.isActive).toBe(false);
        expect(cancelledAppointment.isActive).toBe(false);
    })

    test("UPADTE_STATUS_FOR_PENDING_TO_BE_CANCELLED",  () => {
        expect(pendingAppointment.updateStatus).toBe(CANCELLED);
        expect(confirmedAppointment.updateStatus).not.toBe(CANCELLED);
        expect(completedAppointment.updateStatus).not.toBe(CANCELLED);
        expect(cancelledAppointment.updateStatus).not.toBe(CANCELLED);
    })

    test("UPADTE_STATUS_FOR_PENDING_TO_BE_CANCELLED",  () => {
        expect(pendingAppointment.updateStatus).not.toBe(COMPLETED);
        expect(confirmedAppointment.updateStatus).toBe(COMPLETED);
        expect(completedAppointment.updateStatus).not.toBe(COMPLETED);
        expect(cancelledAppointment.updateStatus).not.toBe(COMPLETED);
    })

    test("ACTIVE LABEL",  () => {
        expect(pendingAppointment.activeLabel).toBe(CANCEL);
        expect(confirmedAppointment.activeLabel).toBe(JOIN_MEETING);
        expect(completedAppointment.activeLabel).toBe(undefined);
        expect(cancelledAppointment.activeLabel).not.toBe(COMPLETED);
    })
})