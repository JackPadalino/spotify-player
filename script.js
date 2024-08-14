const clientId = "add your spotify client id here (as a string)";
const clientSecret = "add your spotify client secret key here (as a string)";

// requesting access tokens from spotify API
const getAccessToken = () => {
  const url = "https://accounts.spotify.com/api/token";

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
  // using the api endpoint to search for tracks
  // this will return all tracks that match, or are similar to, the user's query
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
      return data;
    })
    .catch((error) => {
      console.error("Error fetching token:", error);
    });
};

// getting list element from HTML
const trackList = document.getElementById("trackList");

// event listener for the submit button
document.getElementById("submitBtn").addEventListener("click", function () {
  // clear the list before adding new tracks
  while (trackList.firstChild) {
    trackList.removeChild(trackList.firstChild);
  }

  // get the user's query from the input element
  const query = document.getElementById("inputString").value;
  getAccessToken().then((response) => {
    getTrack(query, response.access_token).then((response) => {
      response.tracks.items.forEach((track) => {
        // create a new list item
        const newTack = document.createElement("li");

        // set the text of the list item to the current array element
        newTack.textContent = `${track.name} - ${track.artists[0].name}`;
        newTack.setAttribute("data-id", track.id);

        // add the list item to the ul
        trackList.appendChild(newTack);
      });
    });
  });
  document.getElementById("inputString").value = "";
});

// event listener to play song and add iFrame to HTML
trackList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const trackId = event.target.getAttribute("data-id");

    // create the iframe element
    const iframe = document.createElement("iframe");

    // set the iframe attributes with spotify information (from the documentation)
    iframe.title = "Spotify Embed: Single Track";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.minHeight = "360px";
    iframe.frameBorder = "0";
    iframe.allow =
      "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    iframe.loading = "lazy";
    iframe.src = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;

    // get the iframe container div
    const iframeContainer = document.getElementById("iframeContainer");

    // clear any previous iframe
    iframeContainer.innerHTML = "";

    // add the new iframe to the placeholder container in the HTML
    iframeContainer.appendChild(iframe);
  }
});
