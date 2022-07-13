import useFetch from "./useFetch";

const CardList = (props) => {
  let url;
  if (props.searchValue !== null && props.searchValue !== undefined) {
    url = `https://anime-db.p.rapidapi.com/anime?page=1&size=100&search=${props.searchValue}`;
  } else {
    url = `https://anime-db.p.rapidapi.com/anime?page=1&size=100`;
  }
  const { data: cardData } = useFetch(url);
  return (
    <div className="card-list">
      {cardData &&
        cardData.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt="thumbnail" />
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
