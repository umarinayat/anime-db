import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CardDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c14d7ea104msh5e8853941457b70p142218jsn5f367efc731a",
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };

    fetch(`https://anime-db.p.rapidapi.com/anime/by-id/${id}`, options)
      .then((response) => response.json())
      .then((response) => setCardData(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      {cardData && (
        <div className="detail-container">
          <img src={cardData.image} alt="Main" />
          <div className="container-text">
            <h2 className="container-text-space">Name: {cardData.title}</h2>
            <h5 className="container-text-space">
              Episodes: {cardData.episodes}
            </h5>
            <p className="container-text-space">
              <strong>Status</strong> {cardData.status}
            </p>
            <p className="container-text-space">
              <strong>Summery: </strong>
              {cardData.synopsis}
            </p>
            <button onClick={() => navigate(-1)}>Back</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDetails;
