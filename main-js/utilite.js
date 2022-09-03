const allDataLodeApi = async (allData) => {
  const url = `https://openapi.programming-hero.com/api/news/category/01`;
  const res = await fetch(url);
  const dataLod = await res.json();
  const data = dataLod.data;
  return data;
};

const allDataLode = async () => {
  const allData = await allDataLodeApi();
  console.log(allData);
};
allDataLode();
