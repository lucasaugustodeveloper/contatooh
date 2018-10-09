module.exports = () => {
  const controller = {};

  controller.index = (req, res) => {
    res.render('index', { nome: 'Contatooh' });
  };

  return controller;
};
