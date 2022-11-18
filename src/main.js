import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement, agoraVai } from
  './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';
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
  agoraVai();
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

const preco = document.querySelector('.total-price');
const cart = document.querySelector('.cart__products');

cart.addEventListener('click', (event) => {
  const valorEvent = Number(event.target.parentNode.lastElementChild
    .lastElementChild.innerHTML);

  const valorTag = Number(preco.innerHTML);
  const valorFinal = valorTag - valorEvent;

  preco.innerHTML = '';
  preco.innerHTML = valorFinal.toFixed(2);
});

AdicionaProdutos('computador');
