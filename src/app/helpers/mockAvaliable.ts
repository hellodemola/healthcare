const mockAvaliableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
  return {
    id,
    startTime: new Date(
      new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)
    ),
    endTime: new Date(
      new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)
    ),
  };
});

export default mockAvaliableTimeslots;
