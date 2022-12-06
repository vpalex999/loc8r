// Получить (GET) домашнюю страницу
const homelist = function (req, res) {
  res.render('locations-list', {
    title: 'Loc8r - find places to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'find places to work with wifi near you!'
    }
  });
};

const locationInfo = function (req, res) {
  res.render('location-info', { title: 'Location Info' });
};

const addReview = function (req, res) {
  res.render('location-review-form', { title: 'Add review' });
};

module.exports = { homelist, locationInfo, addReview };
