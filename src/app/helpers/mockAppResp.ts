const mockAppResp = (date: Date, providerId: string) => ({
  userId: '001',
  createdAt: new Date(),
  providerId: providerId,
  appointmentDate: date,
});

export default mockAppResp;
