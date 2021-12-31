// helper functions
export default function featuredProducts(data) {
  return data.filter((item) => {
    return item.featured;
  });
}

export function getProduct(data, id) {
  return data.find((item) => {
    if (parseInt(id) === item.id) return item;
    return null;
  });
}
