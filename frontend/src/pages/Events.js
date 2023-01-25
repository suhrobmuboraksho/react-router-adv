import { Link } from "react-router-dom";

const EventsPage = () => {
  const EVENTS = [
    { id: "1", event: "Event 1" },
    { id: "2", event: "Event 2" },
    { id: "3", event: "Event 3" },
  ];
  return (
    <ul>
      {EVENTS.map((event) => {
        return (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.event}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default EventsPage;
