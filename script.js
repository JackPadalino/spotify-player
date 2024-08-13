// spotify api token
const token =
  "BQB7VlmeIy_drd2qnHidhGZvutZhH_c73eElXruhLVi_J5jBIFOm8bmjl7X_IUDSJVv0oDcULsiDgiAzGBmZbQT4lOp-K3q7zKiwufX-LwIElvJjmePwjVcZ49FgNIwaRi85g3-P4PkgDIQ2u9z2FLmr0gNOXXP2J7nPkdK2vRHH_aeyCG2smvLnCPvU-OTgQzSE2zWG2mi4sAMrTujZxGiVjqSIWObOzwVjiIlwXiljoibmNS3QKyTWaePoikbnfDe253Q";

const trackIds = [
  "1ErfPo4xsbhLL5wQcq4AIS",
  "13DqJv37Zxd4cDgBV9bLJN",
  "3B2tfZKZkelId6gTkm1xw5",
  "1m85LGddnODvgCB2XmX8mW",
  "5oQQY1Aah70hJb1FHq67sw",
  "4mEtxdE7GjjOInVAXNcE1I",
  "52O518ECDOaUthShbS6Kai",
  "4WofQr7xeywxUxYqUqhgGs",
  "2Qg4N0TJVXhWXFPc9DDp9k",
  "2iEKl6IzXbgyK4qlPo5G9H",
];

// logic for embedding a single track
const trackId = trackIds[0];

// Update the iframe's src attribute to play the specific track
document.addEventListener("DOMContentLoaded", function () {
  const iframe = document.querySelector("iframe");
  iframe.src = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;
});

// logic for creating and displaying a new playlist
// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body: JSON.stringify(body),
//   });
//   return await res.json();
// }

// const tracksUri = [
//   "spotify:track:1ErfPo4xsbhLL5wQcq4AIS",
//   "spotify:track:13DqJv37Zxd4cDgBV9bLJN",
//   "spotify:track:3B2tfZKZkelId6gTkm1xw5",
//   "spotify:track:1m85LGddnODvgCB2XmX8mW",
//   "spotify:track:5oQQY1Aah70hJb1FHq67sw",
//   "spotify:track:4mEtxdE7GjjOInVAXNcE1I",
//   "spotify:track:52O518ECDOaUthShbS6Kai",
//   "spotify:track:4WofQr7xeywxUxYqUqhgGs",
//   "spotify:track:2Qg4N0TJVXhWXFPc9DDp9k",
//   "spotify:track:2iEKl6IzXbgyK4qlPo5G9H",
// ];

// async function createPlaylist(tracksUri) {
//   const { id: user_id } = await fetchWebApi("v1/me", "GET");

//   const playlist = await fetchWebApi(`v1/users/${user_id}/playlists`, "POST", {
//     name: "My recommendation playlist",
//     description: "Playlist created by the tutorial on developer.spotify.com",
//     public: false,
//   });

//   await fetchWebApi(
//     `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(",")}`,
//     "POST"
//   );

//   return playlist;
// }

// // Create the playlist and update the iframe with its ID
// createPlaylist(tracksUri)
//   .then((createdPlaylist) => {
//     console.log(createdPlaylist.name, createdPlaylist.id);

//     // Update the iframe's src attribute with the created playlist ID
//     const iframe = document.querySelector("iframe");
//     iframe.src = `https://open.spotify.com/embed/playlist/${createdPlaylist.id}?utm_source=generator&theme=0`;
//   })
//   .catch((error) => {
//     console.error(error);
//   });
