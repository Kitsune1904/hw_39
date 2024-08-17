import classes from "./Albums.module.css"
import {AlbumCard} from "./AlbumCard/AlbumCard.jsx";
import {Await, useLoaderData} from "react-router-dom";
import {Suspense} from "react";

const Albums = () => {
  const {albums} = useLoaderData()

  return (
    <div className={classes.albumHolder}>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={albums}>
          {
            (resolvedAl) => resolvedAl.map((el, index) => <AlbumCard card={el} key={index}></AlbumCard>)
          }
        </Await>
      </Suspense>
    < /div>
  )
};

export default Albums;
