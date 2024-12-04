import { ScheduleMeeting } from 'react-schedule-meeting';
import { Label } from '../components/common/typography';
import mockAvaliableTimeslots from '../helpers/mockAvaliable';
import { ISchedule } from '../interface/appointments';

export default function Schedule({ name, handlePostBooking }: ISchedule) {
  return (
    <>
      <Label>Set an appointment with {name}</Label>
      <ScheduleMeeting
        borderRadius={10}
        primaryColor="#3f5b85"
        eventDurationInMinutes={30}
        availableTimeslots={mockAvaliableTimeslots}
        onStartTimeSelect={handlePostBooking}
        startTimeListStyle="scroll-list"
      />
    </>
  );
}
