import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const cPai = document.querySelector('.products');

const loading = () => {
  const elementLoad = document.createElement('p');
  elementLoad.innerHTML = 'Loading...';
  elementLoad.className = 'loading';
  cPai.appendChild(elementLoad);
};

const AdicionaProdutos = async () => {
  loading();

  const produtos = await fetchProductsList('computador');
  produtos.forEach((element, idx) => {
    cPai.appendChild(createProductElement(element));

    if (produtos.length - 1 === idx) {
      cPai.firstChild.remove();
    }
  });
};

AdicionaProdutos();
