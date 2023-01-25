import { useParams } from "react-router-dom";

const EventsDetailPage = () => {
  const param = useParams();
  return (
    <div>
      <h1>Events Detail Page</h1>
      <h2>{param.eventId}</h2>
    </div>
  );
};

export default EventsDetailPage;
