import React from 'react';

const DoceItem = ({ doce }) => {
  return (
    <div className="doce-item">
      <img src={doce.imagem} alt={doce.nome} />
      <h3>{doce.nome}</h3>
      <p>{doce.descricao}</p>
      <p><strong>Preço:</strong> R$ {doce.preco.toFixed(2)}</p>
    </div>
  );
};

export default DoceItem;

