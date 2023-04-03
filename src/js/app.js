export default function sortHeroesByHealthDesc(data) {
  for (let i = 0; i < data.length - 1; i += 1) {
    if (data[i].name === undefined || data[i].health === undefined || typeof data[i].health === 'string') {
      return null;
    }
  }

  data.sort((a, b) => b.health - a.health);

  return data;
}
