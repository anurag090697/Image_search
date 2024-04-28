let curr_page = 1;
let total_page = 1;
let textIn = "";
function SearchImages(ipt) {
  fetch(
    `https://api.unsplash.com/search/photos?client_id=ZdaAXwqh9UDYeHYZHs_3tO9CyndCJtRuSX02x6wAtr4&query=${ipt}&page=${curr_page}`
  )
    .then((secStep) => secStep.json())
    .then((trdStep) => {
      console.log(trdStep);
      let searchResults = document.getElementById("searchResult");
      searchResults.innerText = "";
      trdStep.results.forEach((element) => {
        let box = document.createElement("div");
        let pic = document.createElement("img");
        pic.alt = trdStep.description;
        pic.src = element.urls.regular;
        let description = document.createElement("p");
        description.innerText = element.alt_description;
        box.append(pic, description);
        searchResults.append(box);
      });
      total_page = parseInt(trdStep.total_pages);

      let disNo = document.getElementById("pageNav");
      disNo.style.visibility = "visible";
    })
    .catch((error) => alert("Page not found"));
}
let prvbtn = document.getElementById("prevBtn");
let nxtBtn = document.getElementById("nxtBtn");
prvbtn.addEventListener("click", (e) => {
  if (curr_page > 1) {
    curr_page--;
  } else prvbtn.disabled;
  document.getElementById("cuurpg").innerText = curr_page;
  document.getElementById("totalpg").innerText = total_page;
  SearchImages(textIn);
});

nxtBtn.addEventListener("click", () => {
  if (curr_page < total_page) {
    curr_page++;
    document.getElementById("totalpg").innerText = total_page;
    document.getElementById("cuurpg").innerText = curr_page;
  } else {
    nxtBtn.disabled;
    document.getElementById("totalpg").style.color = "#000085";
    document.getElementById("cuurpg").style.color = "darkgray";
  }

  SearchImages(textIn);
});
let clickIt = document.getElementById("subtBtn");

clickIt.addEventListener("click", () => {
  let inptText = document.getElementById("searchImg").value;
  textIn = inptText;
  SearchImages(inptText);
});

//
