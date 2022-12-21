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
  res.render('location-info', {
    title: 'Location Info',
    location: {
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      openingHours: [
        'Monday - Friday : 7:00am - 7:00pm',
        'Saturday : 8:00am - 5:00pm',
        'Sunday : closed'
      ],
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      locationMap: 'http://maps.googleapis.com/maps/api/staticmap?center=51.455041,-0.9690884&zoom=17&size=400x350&sensor=false&markers=51.455041,-0.9690884&scale=2',
      customerReviews: [
        {
          rating: 5,
          author: 'Simon Holmes',
          timeStamp: '16 July 2013',
          text: "What a great place. I can't say enough good things about it.",
        },
        {
          rating: 3,
          author: 'Charlie Chaplin',
          timeStamp: '17 June 2013',
          text: "It was okay. Coffee wasn't great, but the wifi was fast.",
        }
      ],
      distance: '100m',
    },

  });
};

const addReview = function (req, res) {
  res.render('location-review-form', { title: 'Add review' });
};

module.exports = { homelist, locationInfo, addReview };
