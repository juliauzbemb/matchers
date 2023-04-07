export default function sortHeroesByHealthDesc(data) {
  data.sort((a, b) => b.health - a.health);
  return data;
}
