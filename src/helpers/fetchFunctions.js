export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (param) => {
  if (!param) {
    throw new Error('Termo de busca não informado');
  }

  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
    const fetchApi = await fetch(url);
    const result = await fetchApi.json();
    return result.results;
  } catch (e) {
    return e.message;
  }
};
