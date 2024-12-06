const compareDate = (prevDate: Date, currentDate: Date): boolean => {
  if (prevDate.toISOString() === currentDate.toISOString()) return true;
  return false;
};

export default compareDate;
