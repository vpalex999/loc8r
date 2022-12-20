// Получить (GET) домашнюю страницу
const homelist = function (req, res) {
  res.render('locations-list', {
    title: 'Loc8r - find places to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'find places to work with wifi near you!'
    },
    locations: [{
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '100m',
    },
    {
      name: 'Cafe Hero',
      address: '125 High Street, Reading, RG6 2PS',
      rating: 4,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '200m',
    },
    {
      name: 'Burger Queen',
      address: '125 High Street, Reading, RG6 3PS',
      rating: 2,
      facilities: ['Food', 'Premium wifi'],
      distance: '250m',
    }
    ],
  });
};

const locationInfo = function (req, res) {
  res.render('location-info', { title: 'Location Info' });
};

const addReview = function (req, res) {
  res.render('location-review-form', { title: 'Add review' });
};

module.exports = { homelist, locationInfo, addReview };
