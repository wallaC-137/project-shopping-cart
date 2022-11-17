import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Testa se fetchProduct é uma função;', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('Testa se, ao chamar a função fetchProduct com o argumento do produto "MLB1405519561", a função fetch utiliza o endpoint esperado', async () => {
    const result = await fetchProduct('MLB1405519561')
    expect(result).toBeCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('Testa se o retorno da função fetchProduct com o argumento do produto "MLB1405519561" é uma estrutura de dados igual ao objeto produto que já está importado no arquivo', async () => {
    const result = await fetchProduct('MLB1405519561')
    expect(result).toStrictEqual(product);
  });

   it('Teste se, ao chamar a função fetchProduct sem argumento, retorna um erro com a mensagem: "ID não informado"', async () => {

     try {
      await fetchProduct()
    } catch (error) {
      expect(error.message).toBe('ID não informado');
    }

    const result = await fetchProduct('asdasdadadasdadasdsa');
    expect(() => result).toThrow();
  });
});
