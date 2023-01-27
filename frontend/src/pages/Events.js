import { Link } from "react-router-dom";

const EventsPage = () => {
  const EVENTS = [
    { id: "e1", title: "Event 1" },
    { id: "e2", title: "Event 2" },
    { id: "e3", title: "Event 3" },
  ];
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map((event) => {
          return (
            <li key={event.id}>
              <Link to={event.id}>{event.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default EventsPage;
