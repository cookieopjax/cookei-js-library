export default function (arr, text) {
  return arr.filter((ele) =>
    JSON.stringify(ele).toLowerCase().includes(text.toLowerCase())
  );
}
