// all data load api function
const allDataLodeApi = async (allData) => {
  const url = `https://openapi.programming-hero.com/api/news/category/01`;
  const res = await fetch(url);
  const dataLod = await res.json();
  const data = dataLod.data;
  return data;
};
// single data function
const allDataLode = async () => {
  const allData = await allDataLodeApi();
  allData.forEach((data) => {
    console.log(data);
  });
};
// creat all card dainamic and disply  my website
const creadDainameckCard = (data) => {
  const cardContainer = document.getElementById("all-card-container");
  const cardWraper = document.createElement("div");
  cardWraper.classList.add("col-12");
  cardWraper.innerHTML = `
        <div class="p-3 card-container bg-white">
        <div class="row">
            <div
            class="col-12 col-lg-3 card-content-left d-flex justify-content-center align-items-center"
            >
            <img class="rounded-2" src="img/plear.jpg" alt="" />
            </div>
            <div class="col-12 col-lg-9 p-5">
            <div class="card-right-content-container">
                <h4>
                The best fashion influencers to follow for sartorial
                inspiration
                </h4>
                <p>
                From our favourite UK influencers to the best missives
                from Milan and the coolest New Yorkers, read on some of
                the best fashion blogs out there, and for even more
                inspiration, do head to our separate black fashion
                influencer round-up.
                </p>
                <p class="mt-5">
                Fancy some shopping deals? Check out these amazing
                sales: Zara Black Friday, ASOS Black Friday, Missoma
                Black Friday and Gucci Black Friday...
                </p>
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
                    <img src="img/download.png" alt="" />
                    <div class="othor-name ms-3">
                        <p class="m-0">Jane Cooper</p>
                        <p class="text-muted m-0">Jan 10, 2022</p>
                    </div>
                    </div>
                    <div class="view-content-wraper">
                    <i class="fa-regular fa-eye"></i>
                    <!-- <i class="fa-sharp fa-solid fa-eye"></i> -->
                    <span>1.5M</span>
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
};
allDataLode();
