import { useParams } from "react-router-dom";

const EventsDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>Events Detail Page</h1>
      <h2>Event ID: {params.eventId}</h2>
    </>
  );
};

export default EventsDetailPage;
