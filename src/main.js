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

const msgError = () => {
  const elementLoad = document.createElement('p');
  elementLoad.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  elementLoad.className = 'error';
  cPai.appendChild(elementLoad);
};

const AdicionaProdutos = async (param) => {
  loading();

  try {
    const produtos = await fetchProductsList(param);
    produtos.forEach((element, idx) => {
      cPai.appendChild(createProductElement(element));

      if (produtos.length - 1 === idx) {
        cPai.firstChild.remove();
      }
    });
  } catch (error) {
    cPai.firstChild.remove();
    msgError();
  }
};

AdicionaProdutos('computador');
