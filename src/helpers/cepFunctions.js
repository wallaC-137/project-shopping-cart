const getSpanCep = document.querySelector('.cart__address');
const getInputCep = document.querySelector('.cep-input');

function addCep() {
  getSpanCep.innerHTML = 'CEP não encontrado';
}

export const getAddress = (apiValue) => {
  const rua = apiValue.address ?? apiValue.street;
  const bairro = apiValue.district ?? apiValue.neighborhood;
  getSpanCep.innerHTML = `${rua} - ${bairro} - ${apiValue.city} - ${apiValue.state}`; //
};

export const searchCep = async () => {
  if (!Number(getInputCep.value)) return addCep();

  const apiUm = await fetch(`https://cep.awesomeapi.com.br/json/${getInputCep.value}`);
  const apiDois = await fetch(`https://brasilapi.com.br/api/cep/v2/${getInputCep.value}`);

  const array = [apiUm, apiDois];

  const apiFirst = await Promise.any(array);
  const apiFirstTratada = await apiFirst.json();

  getAddress(apiFirstTratada);
};
