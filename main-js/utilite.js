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
};
allDataLode();
