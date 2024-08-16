import classes from "./Albums.module.css"
import {AlbumCard} from "./AlbumCard/AlbumCard.jsx";
import {useContext} from "react";
import {AlbumsContext} from "../../context/AlbumsProvider.jsx";

const Albums = () => {
  const data = useContext(AlbumsContext);

  return (
    data ?
      <div className={classes.albumHolder}>
        {data && data.map((el, index) => <AlbumCard card={el} key={index}></AlbumCard>)}
      </div> :
      <div>Loading...</div>
  );
};

export default Albums;
