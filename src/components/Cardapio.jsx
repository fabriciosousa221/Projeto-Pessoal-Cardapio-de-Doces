import React from 'react';
import DoceItem from './DoceItem';

const Cardapio = () => {
  const doces = [
    { id: 1, nome: 'Brigadeiro Preto', descricao: 'Delicioso brigadeiro feito com chocolate amargo.', preco: 4.50, imagem: '/imagens/brigadeiro-preto.jpg' },
    { id: 2, nome: 'Bolo de Chocolate', descricao: 'Bolo de chocolate intenso, com cobertura cremosa de chocolate.', preco: 7.00, imagem: '/imagens/bolo-chocolate.jpg' },
    { id: 3, nome: 'Mousse de Chocolate Amargo', descricao: 'Mousse suave feita com chocolate amargo, para quem adora um sabor mais intenso.', preco: 6.00, imagem: '/imagens/mousse-chocolate.jpg' },
    { id: 4, nome: 'Pavê de Chocolate', descricao: 'Pavê de chocolate escuro com camadas de creme e biscoito.', preco: 8.00, imagem: '/imagens/pave-chocolate.jpg' },
    { id: 5, nome: 'Biscoito de Cacau', descricao: 'Biscoitos crocantes feitos com cacau puro e chocolate amargo.', preco: 3.50, imagem: '/imagens/biscoito-cacau.jpg' },
    { id: 6, nome: 'Trufa de Chocolate Preto', descricao: 'Trufa gourmet de chocolate amargo com recheio cremoso.', preco: 5.00, imagem: '/imagens/trufa-preta.jpg' },
    { id: 7, nome: 'Cupcake de Chocolate', descricao: 'Cupcake com massa de chocolate e cobertura de chocolate preto.', preco: 4.00, imagem: '/imagens/cupcake-chocolate.jpg' },
    { id: 8, nome: 'Gelato de Chocolate', descricao: 'Gelato cremoso de chocolate escuro e intenso.', preco: 9.00, imagem: '/imagens/gelato-chocolate.jpg' },
  ];

  return (
    <div className="cardapio">
      <h2>Cardápio de Doces</h2>
      <div className="lista-doces">
        {doces.map((doce) => (
          <DoceItem key={doce.id} doce={doce} />
        ))}
      </div>
    </div>
  );
};

export default Cardapio;
