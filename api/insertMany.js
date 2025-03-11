// Usado apenas para inserção no banco de dados

// import { artistArray } from "../../front-end/src/assets/database/artists.js";
// import { songsArray } from "../../front-end/src/assets/database/songs.js";
// import { db } from "./connect.js";
//
// const newArtistsArray = artistArray.map((currentArtistObj) => {
//   const newArtistObj = { ...currentArtistObj };
//   delete newArtistObj.id;
//   return newArtistObj;
// });
//
// const newSongsArray = songsArray.map((currentSongObj) => {
//   const newSongObj = { ...currentSongObj };
//   delete newSongObj.id;
//   return newSongObj;
// });
//
// const resSongs = await db.collection("songs").insertMany(newSongsArray);
// const resArtists = await db.collection("artists").insertMany(newArtistsArray);
//
// console.log(resSongs);
// console.log(resArtists);
