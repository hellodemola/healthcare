import appointmentStatus from '@/app/helpers/appointmentStatus.class';
import { IAppointments } from '@/app/interface/appointments';
import { formatDistance } from 'date-fns';
import Card from '.';
import Button from '../common/button';
import { Label, SubLabel, Text } from '../common/typography';
import Avatar from '../common/avatar';

export default function Appointment(props: IAppointments) {
  const { name, appointmentDate, status, handleBooking, appointmentId: id } = props;
  const currentStatus = new appointmentStatus(status, appointmentDate);
  const formattedDate = formatDistance(appointmentDate, new Date(), {
    addSuffix: true,
  });
  return (
    <div className="lg:outline-none outline outline-gray rounder-m">
      <div className="lg:grid grid-cols-3 grid-rows-1">
        <div className="col-span-2">
          <Card>
            <div className="lg:flex gap-6 items-center">
              <Avatar name={name} />
              <div className="lg:text-left text-center">
                <Label> {name} </Label>
                <SubLabel>{props.specialty}</SubLabel>
              </div>
            </div>
          </Card>
        </div>
        <Card>
          <div className="text-center">
            <Text>{formattedDate}</Text>
            <div className="text-gray lg:text-[1rem] text-[12px]">
              <span style={{ color: currentStatus.color }} className="px-4 py-1 capitalize">
                {status}
              </span>
            </div>

            {currentStatus.isActive && (
              <Button onClick={() => handleBooking(id, currentStatus.updateStatus)}>
                {currentStatus.activeLabel}
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
