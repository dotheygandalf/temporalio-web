const getEventsFromPendingActivity = (activities, idOffset) => {
  if (!activities) {
    return [];
  }

  return activities.map((a, i) => ({
    details: a,
    eventId: (idOffset + i + 1).toString(),
    eventTime: a.scheduledTime,
    eventType: 'ActivityTaskStarted',
  }));
};

export default getEventsFromPendingActivity;