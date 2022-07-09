import { useState, useEffect } from "react";

const CardList = () => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c14d7ea104msh5e8853941457b70p142218jsn5f367efc731a",
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };

    fetch("https://anime-db.p.rapidapi.com/anime?page=1&size=100", options)
      .then((response) => response.json())
      .then((response) => setCardData(response.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="card-list">
      {cardData &&
        cardData.map((card) => (
          <div className="card">
            <img src={card.image} />
            <div className="title">
              <p>{card.title}</p>
              <span>Ranking: {card.ranking}</span>
            </div>
            <span>Episodes: {card.episodes}</span>
          </div>
        ))}
    </div>
  );
};

export default CardList;
