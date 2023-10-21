const convertTimeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map((element) => parseInt(element, 10));
  return hours * 60 + minutes;
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
