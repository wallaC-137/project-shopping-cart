import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toBeCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Teste se o retorno da função fetchProductsList com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const result = await fetchProductsList('computador');
    expect(result).toStrictEqual(computadorSearch);
  });

  it('Teste se, ao chamar a função fetchProductsList sem argumento, retorna um erro com a mensagem: "Termo de busca não informado"', async () => {
    try {
      await fetchProductsList();
    } catch (error) {
      expect(error.message).toBe('Termo de busca não informado')
    }
  });
});
