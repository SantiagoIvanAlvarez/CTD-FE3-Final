import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ dentist }) => {
  const { name, username, id } = dentist;
  const { state: { favs }, dispatch } = useContextGlobal();

  const isFavorite = !!favs.find(fav => fav.id === id);

  const handleFavClick = () => {
    const actionType = isFavorite ? "removeFav" : "addFav";
    dispatch({ type: actionType, payload: dentist });
  };

  return (
    <div className="card">
      <img src="/images/doctor.jpg" width={190} alt="" /> 
      <Link to={"/dentist/" + id}> <h3 className="dentist-name">{name}</h3> </Link>
      <p>{username}</p>
    
      {!isFavorite
        ? <button className="favButton" onClick={handleFavClick}> ❤️ </button>
        : <button className="favButton" onClick={handleFavClick}> 💔 </button>
      }
      
    </div>
  );
};

export default Card;