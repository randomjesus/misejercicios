  function createRow(image, name, title) {
    // class champion
    let divChampion = document.createElement("div");
    divChampion.classList.add("champion");
    document.querySelector("#champions").appendChild(divChampion);
    // class image
    let divImage = document.createElement("div");
    divImage.classList.add("image");
    divChampion.appendChild(divImage);
    // img src
    let imgChampion = document.createElement("img");
    imgChampion.src = image;
    divImage.appendChild(imgChampion);
    // class description
    let divDescription = document.createElement("div");
    divDescription.classList.add("description");
    divChampion.appendChild(divDescription);
    //   <div class="name">Aatrox</div>
    let divName = document.createElement("div");
    divName.classList.add("name");
    divName.appendChild(document.createTextNode(name));
    divDescription.appendChild(divName);
    //   <div class="title">the Darkin Blade</div>
    let divTitle = document.createElement("div");
    divTitle.classList.add("title");
    divTitle.appendChild(document.createTextNode(title));
    divDescription.appendChild(divTitle);
    //hr
    // document
    //   .querySelector("#champions")
    //   .appendChild(document.createElement("hr"));
  }