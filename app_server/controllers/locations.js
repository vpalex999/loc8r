// Получить (GET) домашнюю страницу
const homelist = function (req, res) {
  res.render('locations-list', { title: 'Home' });
};

const locationInfo = function (req, res) {
  res.render('location-info', { title: 'Location Info' });
};

const addReview = function (req, res) {
  res.render('location-review-form', { title: 'Add review' });
};

module.exports = { homelist, locationInfo, addReview };
