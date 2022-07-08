import "./style.css";
const radioDropDown = document.querySelector("#radio-channel");
const linkTitle = document.querySelector(".App-link");

const fetchVideo = (channelId) => {
  const channelSimple = "UC7vHsuT_t0nj6amY9FoHsZA";
  if (channelId === undefined) channelId = channelSimple;
  const link = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&videoDefinition=any&videoDimension=2d&videoDuration=long&key=${
    import.meta.env.VITE_YTB_API_KEY
  }`;
  const listVideo = [];
  fetch(link)
    .then((response) => response.json())
    .then((data) => listVideo.push(...data.items))
    .catch((err) => console.error(err));

  console.log(listVideo);
};

const updateLink = () => {
  // linkTitle.innerHTML = radioDropDown.value;
  linkTitle.href = `https://youtube.com/`;
};

radioDropDown.addEventListener("change", () => {
  console.log(radioDropDown.value);
  // fetchVideo(radioDropDown.value);
  updateLink();
});
