import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const cPai = document.querySelector('.products');

const AdicionaProdutos = async () => {
  const produtos = await fetchProductsList('computador');
  produtos.forEach((elements) => {
    cPai.appendChild(createProductElement(elements));
  });
};
AdicionaProdutos();
