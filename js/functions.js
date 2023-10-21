const convertTimeToMinutes = (time) => {
  const hours = parseInt(time.split(':')[0], 10);
  const minutes = parseInt(time.split(':')[1], 10);
  const result = hours * 60 + minutes;
  return result;
};

const checkWorkingSchedule = (dayStart, dayEnd, meetingStart, meetingDuration) => {
  dayStart = convertTimeToMinutes(dayStart);
  dayEnd = convertTimeToMinutes(dayEnd);
  meetingStart = convertTimeToMinutes(meetingStart);

  if (meetingStart >= dayStart) {
    return (meetingStart + meetingDuration) <= dayEnd;
  }

  return false;
};

checkWorkingSchedule('08:00', '17:30', '14:00', 90);
