// Получить (GET) домашнюю страницу
const homelist = function (req, res) {
  res.render('index', { title: 'Home' });
};

const locationInfo = function (req, res) {
  res.render('index', { title: 'Location Info' });
};

const addReview = function (req, res) {
  res.render('index', { title: 'Add review' });
};

module.exports = { homelist, locationInfo, addReview };
