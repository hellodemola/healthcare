import { IProviderAppointment } from '@/app/interface/providers';
import { format } from 'date-fns';
import Card from '.';
import { Label, SmallPara, SubLabel, Text } from '../common/typography';
import Button from '../common/button';
import Avatar from '../common/avatar';

export default function Provider(props: IProviderAppointment) {
  const { name, specialty, experience, availableDate, userId, handleBooking } = props;
  const formattedDate = format(availableDate, 'LLL d, yyyy h:mm aaa');
  return (
    <div className="lg:outline-none outline outline-gray rounder-md">
      <div className="lg:grid grid-cols-3 grid-rows-1 ">
        <div className="col-span-2">
          <Card>
            <div className="lg:flex gap-6 items-center">
              <Avatar name={name} />
              <div className="text-center lg:text-left">
                <Label> {name} </Label>
                <SubLabel>{specialty}</SubLabel>
                <Text> {experience} of Experince</Text>
              </div>
            </div>
          </Card>
        </div>
        <Card>
          <div className="text-center">
            <SubLabel>Next avaliable</SubLabel>
            <SmallPara>{formattedDate}</SmallPara>
            <Button onClick={() => handleBooking({ id: userId, name })}>Book now</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
