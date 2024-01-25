import calcScroll from "./calcScroll";

const images = () => {
  const imgPopup = document.createElement("div");
  const workSection = document.querySelector(".works");
  const bigImage = document.createElement("img");
  scroll = calcScroll();

  imgPopup.classList.add("popup");
  workSection.appendChild(imgPopup);
  bigImage.style.maxWidth = "500px";
  bigImage.style.maxHeight = "500px";
  bigImage.style.margin = "15px";
  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.display = "none";

  imgPopup.appendChild(bigImage);

  workSection.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    if (target && target.classList.contains("preview")) {
      document.body.style.marginRight = `${scroll}px`;

      imgPopup.style.display = "flex";
      document.body.style.overflow = "hidden";
      const path = target.parentNode.getAttribute("href");
      bigImage.setAttribute("src", path);
    }

    if (target && target.matches("div.popup")) {
      imgPopup.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    }
  });
};

export default images;
