export const fetchProduct = async (param) => {
  if (!param) {
    throw new Error('ID não informado');
  }

  try {
    const url = await fetch(`https://api.mercadolibre.com/items/${param}`);
    const result = await url.json();

    return result;
  } catch (error) {
    return error.message;
  }
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
