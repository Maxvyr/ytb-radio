import "./style.css";
const buttonRecover = document.querySelector(".button-find");
const inputText = document.querySelector(".input-text");
const linkYtb = document.querySelector(".App-link");
const author = document.querySelector("#author");
const video = document.querySelector("#video-link-dwld");

const fetchVideo = (videoId) => {
  let id = videoId;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
    },
  };
  const linkVideo = `https://youtube-search-and-download.p.rapidapi.com/video?id=${id}`;

  const linkDwldVideo = [];
  fetch(linkVideo, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      linkDwldVideo.push(...response.streamingData.formats);
      video.src = linkDwldVideo[2].url;
      updateLink(response);
    })
    .catch((err) => console.error(err));
};

const updateLink = (response) => {
  const videoDetails = response.videoDetails;
  linkYtb.href = `https://www.youtube.com/watch?v=${response.videoDetails.videoId}`;
  linkYtb.innerHTML = `${videoDetails.title}`;
  author.innerHTML = `${videoDetails.author}`;
};

const onClickUpdate = () => {
  const linkBase = "https://www.youtube.com/watch?v=";
  if (inputText.value.includes(linkBase)) {
    let videoId = inputText.value.replace(linkBase, "");
    console.log(videoId);
    fetchVideo(videoId);
  } else {
    alert("Your link is not a youtube link valid");
  }
};

buttonRecover.addEventListener("click", onClickUpdate);
