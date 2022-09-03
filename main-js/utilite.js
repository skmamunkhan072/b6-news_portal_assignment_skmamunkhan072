// all data load api function
const allCatagoriDataLodApi = async (data) => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const allData = await res.json();
  const allCatagori = allData.data.news_category;
  return allCatagori;
  // console.log(allCatagori);
};

// const allDataLodeApi = async (allData) => {
//   const url = `https://openapi.programming-hero.com/api/news/category/01`;
//   const res = await fetch(url);
//   const dataLod = await res.json();
//   const data = dataLod.data;
//   return data;
// };
const allIdLodData = async (id) => {
  const url = `https://openapi.programming-hero.com/api/news/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
const catagorisData = async (catagorisId) => {
  const allCatagoriDAta = await allCatagoriDataLodApi();
  const id = document.getElementById("catagori-container");
  allCatagoriDAta.forEach((data) => {
    creatData(data, id);
  });
};

const creatData = async (da, id) => {
  console.log(da);
  id.innerText = da.category_id;
};
catagorisData();
//  <li class="mb-md-3 mb-xl-0"> 1</li>

// single data function
const allDataLode = async (allData) => {
  // const allData = await allDataLodeApi();
  allData.forEach((data) => {
    // creadDainameckCard(data);
  });
};
allDataLode();

const detailsText = (details) => {
  if (details.length > 550) {
    const detail = details.slice(0, 500) + "...";
    return detail;
  } else {
    return details;
  }
};
creat all card dainamic and disply  my website
const creadDainameckCard = (data) => {
  // console.log(data);
  const { author, details, thumbnail_url, title, _id, total_view } = data;
  // console.log(_id);
  const { name, published_date, img } = author;
  const date = published_date.slice(0, 10);
  const cardContainer = document.getElementById("all-card-container");
  const cardWraper = document.createElement("div");
  cardWraper.classList.add("col-12");
  cardWraper.innerHTML = `
        <div class="p-3 card-container bg-white">
        <div class="row">
            <div
            class="col-12 col-lg-3 card-content-left d-flex justify-content-center align-items-center"
            >
            <img class="rounded-2" onclick="imgThamenlClick('${_id}')" src="${thumbnail_url}" alt="" data-bs-toggle="modal"
            data-bs-target="#blog-modal-bodey" />
            </div>
            <div class="col-12 col-lg-9 p-5">
            <div class="card-right-content-container">
                <h4>${title}</h4>
                <p class="mb-5">${detailsText(details)}</p>

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
                        <p class="text-muted m-0">${date}</p>
                    </div>
                    </div>
                    <div class="view-content-wraper">
                    <i class="fa-regular fa-eye"></i>
                    <!-- <i class="fa-sharp fa-solid fa-eye"></i> -->
                    <span>${total_view}M</span>
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
                <!-- </div> -->
                </div>
            </div>
            </div>
        </div>
        </div>
  `;
  cardContainer.appendChild(cardWraper);
};
const imgThamenlClick = async (id) => {
  const idAllData = await allIdLodData(id);
  const data = idAllData.data[0];
  console.log(data);
  const { author } = data;
  const modalBody = document.getElementById("model-body");
  const modalTaitle = document.getElementById("modal-taitle");
  console.log(author);

//   // console.log(id);
};
allDataLode();
