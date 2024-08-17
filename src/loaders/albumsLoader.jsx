import {defer} from "react-router-dom";

export const getAlbums = () => {
  return new Promise(resolve => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((data) => resolve(data))
            .catch((err2) => {
              console.error(err2);
              resolve(null);
            });
        } else {
          resolve(null);
        }
      })
      .catch((err) => {
        console.error(err);
        resolve(null)
      });
  });
}
/*export const getAlbums = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  return  await res.json();
}*/
export const albumsLoader = async () => {
  return defer({
    albums: getAlbums()
  })
}


