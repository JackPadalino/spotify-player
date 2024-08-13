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

// requesting access tokens from spotify API

const getAccessToken = () => {
  const url = "https://accounts.spotify.com/api/token";
  const clientId = "ee45ce02d7d64ad7ba8ee9e4aee7d9c3";
  const clientSecret = "549a0b7e22cb435fb779e430698494a4";

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  });

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching token:", error);
    });
};

const getTrack = (query, accessToken) => {
  const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
  return fetch(url, {
    method: "GET",
    headers: { Authorization: `Bearer ${accessToken}` },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching token:", error);
    });
};

// Event listener for the submit button
document.getElementById("submitBtn").addEventListener("click", function () {
  const query = document.getElementById("inputString").value;
  getAccessToken().then((response) => {
    getTrack(query, response.access_token);
  });
  document.getElementById("inputString").value = "";
});
