export const utilsService={formatDate, formatTime}
function formatDate(dateString) {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

function formatTime(startingHour, endingHour) {
  return `${startingHour} - ${endingHour}`;
}