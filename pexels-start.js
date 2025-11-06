const imagesURL = "https://api.pexels.com/v1/search?query=hamsters";
const secondButtonImgs = "https://api.pexels.com/v1/search?query=tigers";
const apiKey = "mWOK34O6lk6XoMG2iaBWqFzIUEXs1U3chpZpQ4CPHkKnF0BToljJXiXr";

const changeImages = function () {
  fetch(imagesURL, {
    headers: {
      //   "Content-Type": "application/json",
      Authorization: apiKey,
    },
  })
    .then((res) => {
      if (res.ok) {
        console.log("Evvai", res);
        return res.json();
      } else {
        throw new Error(`Errore nell'if: ${res.status}`);
      }
    })
    .then((singleObj) => {
      const loadButton = document.getElementById("loadButton");
      const loadSecondary = document.getElementById("loadSecondaryButton");
      let allImgs = document.querySelectorAll("img");
      loadButton.addEventListener("click", (e) => {
        singleObj.photos.forEach((element, i) => {
          if (allImgs[i]) {
            allImgs[i].src = element.src.original;
          }
        });
      });
      loadSecondary.addEventListener("click", (e) => {
        singleObj.photos.forEach((element, index) => {
          if (allImgs[index]) {
            allImgs[index].src = element.src.original;
          }
        });
      });
    })
    .catch((err) => {
      console.log("ERRORE NEL CATCH:", err);
    });
};

changeImages();
