let cachedSeries = null;
let cachedCategories = null;

export async function getCategories() {
  if (cachedCategories) return cachedCategories;
  try {
    const response = await fetch("../data/categories.json");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const json = await response.json();
    cachedCategories = json.data;
    return cachedCategories;
  } catch (error) {
    console.error("Gagal memuat categories.json", error);
    return [];
  }
}

export async function getAllSeries() {
  if (cachedSeries) return cachedSeries;
  try {
    const response = await fetch("../data/sample-series.json");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const series = await response.json();
    cachedSeries = [series];
    return cachedSeries;
  } catch (error) {
    console.error("Gagal memuat sample-series.json:", error);
    return [];
  }
}

export async function getSeriesById(id) {
  const all = await getAllSeries();
  return all.find((s) => s.id === id) || null;
}

export async function queryCatalog({
  category = "",
  sort_by = "popularity",
  is_dubbed = false,
  is_subbed = false,
} = {}) {
  let list = await getAllSeries();
  if (category) {
    list = list.filter(
      (item) =>
        item.categories &&
        item.categories
          .map((c) => c.toLowerCase())
          .includes(category.toLowerCase()),
    );
  }
  if (is_dubbed) {
    list = list.filter(
      (item) => item.audio_locales && item.audio_locales.length > 1,
    );
  }
  if (is_subbed) {
    list = list.filter(
      (item) => item.subtitle_locales && item.subtitle_locales.length > 0,
    );
  }
  if (sort_by === "alphabetical") {
    list.sort((a, b) => (b.rating?.count || 0) - (a.rating?.count || 0));
  }
  return list;
}
