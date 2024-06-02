// Function to get the next date and time
export const getNextDateTime = (currentDate, incrementInHours = 120) => {
  const nextDate = new Date(currentDate);
  nextDate.setHours(nextDate.getHours() + incrementInHours);
  return nextDate;
};
