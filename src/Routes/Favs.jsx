import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";


const Favs = () => {

  const {state, dispatch} = useContextGlobal()
  const favs = state.favs

  return (
    <section>
    <div className="favs">
      <h2>My Favorite Dentists</h2>
      {favs.length > 0 && <button className="removeAll-btn" onClick={() => {dispatch({type: "removeAllFavs"})}}>Remove all</button>}
    </div>
    <div className="card-grid">
      {favs.length > 0
        ? favs.map(fav => <Card key={fav.id} dentist={fav}/>)
        : <p className="nofavs">❤ Add your favorite dentists!</p>
      }
    </div>
  </section>
  );
};

export default Favs;