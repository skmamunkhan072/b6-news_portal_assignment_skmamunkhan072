try {
  const apiLargArro = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`;
    const res = fetch(url);
    const allData = (await res).json();
    const data = allData.data;
    console.log(allData.data);
    // const sort = data.sort((a, b) => {});
  };

  apiLargArro();
} catch (err) {
  console.log(err);
}
