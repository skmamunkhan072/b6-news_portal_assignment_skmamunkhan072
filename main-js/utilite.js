// blog quistion
const addBlogQustion = () => {
  spner(true);
  const modal = document.getElementById("model-body");
  modal.innerHTML = ``;
  const modalWraper = document.createElement("div");
  modalWraper.innerHTML = `
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Difference Between var, let, and const in JavaScript
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
            <p>JavaScript has three variable declaration statements: var, let and const. The latter two were added in ES6, whereas var existed since previous versions. One of the first things to notice is that const defines constants (i.e. values that will not be reassigned), whereas var and let define variables. Yet, var behaves differently from both let and const in various other ways.
            JavaScript has three variable declaration statements: var, let and const. The latter two were added in ES6, whereas var existed since previous versions. One of the first things to notice is that const defines constants (i.e. values that will not be reassigned), whereas var and let define variables. Yet, var behaves differently from both let and const in various other ways.Variables declared with var are function scoped, in contrast to variables declared with let or const which are block scoped.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      difference between arrow function and regular function in javascript
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          <p>
          Regular functions created using function declarations or expressions are constructible and callable. Since regular functions are constructible, they can be called using the new keyword. However, the arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions. An arrow function is also known as the fat arrow function. It is a new feature introduced in ES6 that is a more concise syntax for writing function expressions. Both regular JavaScript functions and arrow functions work in a similar manner but there are some differences between them. Let's see the differences below: -Syntax Arguments binding Use of this keywordSyntax  Arguments binding Use of this keyword Using a new keyword Using a new keyword.arguments object inside the regular functions contains the list of arguments.
          </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        difference between filter and map and find and foreach in javascript
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <p>forEach(), is used to execute the same code on every element in an array but does not change the array and it returns undefined.map() executes the same code on every element in an array and returns a new array with the updated elements.filter() checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
            </p>
        </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="collapseFoue">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFoues" aria-expanded="false" aria-controls="collapseFoues">
      Why use template string?
      </button>
    </h2>
    <div id="collapseFoues" class="accordion-collapse collapse" aria-labelledby="collapseFoue" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          <p>
          You can use template strings to write your string exactly how you want it to appear, without all the quotation marks and confusion. Template strings make it very easy to spot a missing space and make your string more readable.</p>
      </div>
    </div>
  </div>
</div>
  `;
  modal.appendChild(modalWraper);
  spner(false);
};

// all data load api function
const allCatagoriDataLodApi = async (data) => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;
  const res = await fetch(url);
  const allData = await res.json();
  const allCatagori = allData.data.news_category;
  return allCatagori;
};

const catagoriAllData = async (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.data;
  //
};

// apner function
const spner = (bullin) => {
  const sharpContainer = document.getElementById("spner-container");
  if (bullin === true) {
    sharpContainer.classList.remove("d-none");
  } else {
    sharpContainer.classList.add("d-none");
  }
};

const allDataLoat = async () => {
  spner(true);
  const allData = await allCatagoriDataLodApi();
  const cardContainer = document.getElementById("all-card-container");
  cardContainer.innerHTML = ``;
  allData.forEach((data) => {
    catagoriList(data);
  });
};

// cata gori list add dainamick
const catagoriList = (data) => {
  console.log(data);
  const { category_id, category_name } = data;
  const catagoriContainer = document.getElementById("catagori-container");
  const catagoriList = document.createElement("div");
  catagoriList.innerHTML = `
  <li id="${category_id}" class="mb-md-3 mb-xl-0" onclick="listId('${category_id}')">${category_name}</li>
  `;
  catagoriContainer.appendChild(catagoriList);
  spner(false);
};

// catagori list click get id
const listId = async (id) => {
  spner(true);
  const catagoriData = await catagoriAllData(id);
  const catagoriDataLength = catagoriData.length;
  const dataWorning = document.getElementById("data-worning");
  if (catagoriDataLength === 0) {
    dataWorning.classList.remove("d-none");
    spner(false);
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
  <div class="p-3 card-container bg-white" onclick="imgThamenlClick('${_id}')"  alt="" data-bs-toggle="modal"
  data-bs-target="#blog-modal-bodey">
  <div class="row">
      <div
      class="col-12 col-lg-3 card-content-left d-flex justify-content-center align-items-center"
      >
      <img class="rounded-2"  src="${
        thumbnail_url ? thumbnail_url : noFoundImg
      }" />
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
                  <p class="m-0">${name ? name : NoData}</p>
                  <p class="text-muted m-0">${
                    published_date ? published_date : NoData
                  }</p>
              </div>
              </div>
              <div class="view-content-wraper">
              <i class="fa-regular fa-eye"></i>
              <!-- <i class="fa-sharp fa-solid fa-eye"></i> -->
              <span>${
                total_view ? total_view : NoData
              }<strong id="storing">M</strong></span>
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
  spner(false);
};

const imgThamenlClick = async (id) => {
  spner(true);
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
  spner(false);
};
allDataLoat();
