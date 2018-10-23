const contatos = [
  { _id: 1, name: 'Contato Exemplo 1', email: 'cont1@expresa.com.br' },
  { _id: 2, name: 'Contato Exemplo 2', email: 'cont2@expresa.com.br' },
  { _id: 3, name: 'Contato Exemplo 3', email: 'cont3@expresa.com.br' },
  { _id: 4, name: 'Contato Exemplo 4', email: 'cont4@expresa.com.br' },
  { _id: 5, name: 'Contato Exemplo 5', email: 'cont5@expresa.com.br' },
  { _id: 6, name: 'Contato Exemplo 6', email: 'cont6@expresa.com.br' },
  { _id: 7, name: 'Contato Exemplo 7', email: 'cont7@expresa.com.br' },
  { _id: 8, name: 'Contato Exemplo 8', email: 'cont8@expresa.com.br' },
  { _id: 9, name: 'Contato Exemplo 9', email: 'cont9@expresa.com.br' },
  { _id: 10, name: 'Contato Exemplo 10', email: 'cont10@expresa.com.br' },
];

module.exports = () => {
  const controller = {};

  controller.listaContatos = (req, res) => {
    res.json(contatos);
  };

  controller.obterContato = (req, res) => {
    const idContato = req.params.id;
    const contato = contatos.filter(result => String(result._id) === String(idContato))[0];

    contato ? res.json(contato) : res.status(404).json({ msg: 'Contato não encontrado' });
  };

  return controller;
};
