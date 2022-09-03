// all data load api function
const allCatagoriDataLodApi = async (data) => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const allData = await res.json();
  const allCatagori = allData.data.news_category;
  console.log();
  return allCatagori;
};

const catagoriAllData = async (id, modelId) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
  //
};

const allDataLoat = async () => {
  const allData = await allCatagoriDataLodApi();
  const cardContainer = document.getElementById("all-card-container");
  cardContainer.innerHTML = ``;
  allData.forEach((data) => {
    catagoriList(data);
  });
};

// cata gori list add dainamick
const catagoriList = (data) => {
  const { category_id, category_name } = data;
  const catagoriContainer = document.getElementById("catagori-container");
  const catagoriList = document.createElement("div");
  catagoriList.innerHTML = `
  <li id="${category_id}" class="mb-md-3 mb-xl-0" onclick="listId('${category_id}')">${category_name}</li>
  `;
  catagoriContainer.appendChild(catagoriList);
};
// catagori list click get id
const listId = async (id) => {
  const catagoriData = await catagoriAllData(id);
  const catagoriDataLength = catagoriData.length;
  const dataWorning = document.getElementById("data-worning");
  if (catagoriDataLength === 0) {
    dataWorning.classList.remove("d-none");
  } else {
    dataWorning.classList.add("d-none");
  }
  const catagoriItem = document.getElementById("catagori");
  catagoriItem.innerText = catagoriDataLength;
  const cardContainer = document.getElementById("all-card-container");
  cardContainer.innerHTML = ``;
  catagoriData.forEach((data) => {
    creadDainameckCard(data);
  });
};
// dete slice function
const dateSlice = (dat) => {
  const date = dat.slice(0, 10);
  return date;
};
const detailsText = (para) => {
  if (para.length > 550) {
    const textPara = para.slice(0, 500) + "...";
    return textPara;
  } else {
    return para;
  }
};
// creat all card dainamic and disply  my website
const creadDainameckCard = (data) => {
  const { author, details, thumbnail_url, title, _id, total_view } = data;
  const { name, published_date, img } = author;
  const para = detailsText(details);
  const cardContainer = document.getElementById("all-card-container");
  const cardWraper = document.createElement("div");
  const noFoundImg = "../img/No.png";
  const NoData = "NO Data Abelable";
  cardWraper.classList.add("col-12");
  cardWraper.innerHTML = `
  <div class="p-3 card-container bg-white">
  <div class="row">
      <div
      class="col-12 col-lg-3 card-content-left d-flex justify-content-center align-items-center"
      >
      <img class="rounded-2" onclick="imgThamenlClick('${_id}')" src="${
    thumbnail_url ? thumbnail_url : NoData
  }" alt="" data-bs-toggle="modal"
      data-bs-target="#blog-modal-bodey" />
      </div>
      <div class="col-12 col-lg-9 p-5">
      <div class="card-right-content-container">
          <h4>${title}</h4>
          <p class="mb-5">${para ? para : NoData}</p>

          <div
          class="othor-view-contant-wraper d-flex justify-content-between align-items-center row"
          >
          <!-- <div class="row"> -->
          <div
              class="col-12 col-md-6 d-flex justify-content-between align-items-center pe-lg-5 pe-md-3"
          >
              <div
              class="othor-wraper d-flex justify-content-center align-items-center"
              >
              <img  src="${img}" alt="" />
              <div class="othor-name ms-3">
                  <p class="m-0">${name}</p>
                  <p class="text-muted m-0">${
                    published_date ? published_date : NoData
                  }</p>
              </div>
              </div>
              <div class="view-content-wraper">
              <i class="fa-regular fa-eye"></i>
              <!-- <i class="fa-sharp fa-solid fa-eye"></i> -->
              <span>${total_view ? total_view : NoData}M</span>
              </div>
          </div>
          <div
              class="col-12 col-md-6 d-flex justify-content-between align-items-center mt-sm-3 mt-md-0 smoll-divaig-margin ps-lg-5 ps-md-4"
          >
              <div class="stear-wraper">
              <i class="fa-solid fa-star-half-stroke"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              </div>
              <div class="right-arrow-wraper">
              <i class="fa-solid fa-arrow-right"></i>
              </div>
          </div>
         </div>
          </div>
      </div>
      </div>
  </div>
  </div>
  `;
  cardContainer.appendChild(cardWraper);
};
const imgThamenlClick = async (id) => {
  const url = `https://openapi.programming-hero.com/api/news/${id}`;
  const res = await fetch(url);
  const allData = await res.json();
  const data = allData.data[0];
  const { author, details, thumbnail_url, title, _id, total_view } = data;
  const { name, published_date, img } = author;
  const date = dateSlice(published_date);
  const modalTaitle = document.getElementById("modal-taitle");
  modalTaitle.innerHTML = `
  <div class="othor-wraper d-flex justify-content-center align-items-center">
    <img id="othor-img"  src="${img}" alt="" />
  <div class="othor-name ms-3">
    <p class="m-0"> ${name}</p>
    <p class="text-muted m-0">${date}</p>

  </div>
  </div>
  `;
  const modalBody = document.getElementById("model-body");
  modalBody.innerHTML = `
  <p>${details}</p>
  `;
};
allDataLoat();
catagoriAllData("01");
