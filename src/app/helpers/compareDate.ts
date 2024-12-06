const compareDate = (prevDate: Date, currentDate: Date): boolean => {
  if (new Date(prevDate).toISOString() === new Date(currentDate).toISOString()) return true;
  return false;
};

export default compareDate;
