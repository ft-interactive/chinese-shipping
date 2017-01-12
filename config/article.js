export default () => ({ // eslint-disable-line

  // link file UUID
  id: '057a9d3c-d827-11e6-944b-e7eb37a6aa8e',

  // canonical URL of the published page
  // https://ig.ft.com/sites/chinese-shipping get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/china-ports',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2017-01-12T13:00:00Z'),

  headline: 'How China rules the waves',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'FT investigation: Beijing has spent billions expanding its ports network to secure sea lanes and establish itself as a maritime power',

  topic: {
    name: 'Beijing\'s global power play',
    url: 'https://www.ft.com/topics/themes/China_Politics_&_Policy',
  },

  // relatedArticle: {
  //   text: 'Related article »',
  //   url: 'https://en.wikipedia.org/wiki/Politics_and_the_English_Language',
  // },

  mainImage: {
    title: '',
    description: '',
    url: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fft-ig-content-prod.s3.amazonaws.com%2Fv1%2Fft-interactive%2Fchinese-shipping%2Fimages%2Fchinese_shipping_master_MOBILE.jpg?source=url-builder',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'James Kynge', url: 'https://www.ft.com/comment/columnists/james-kynge' },
    { name: 'Chris Campbell', url: 'https://www.ft.com/stream/authorsId/YjEwZjcxNDktMGNkYy00MzE4LThjYjgtNTY4NDFmNmY2MWRj-QXV0aG9ycw=='  },
    { name: 'Amy Kazmin', url: 'https://www.ft.com/stream/authorsId/Q0ItMDAwMDc5Mw==-QXV0aG9ycw=='  },
    { name: 'Farhan Bokhari', url: 'https://www.ft.com/stream/authorsId/Q0ItMDAwMDYyNw==-QXV0aG9ycw=='  },


  ],

  // Appears in the HTML <title>
  title: 'How China rules the waves',

  // meta data
  description: 'FT investigation: Beijing has spent billions expanding its ports network to secure sea lanes and establish itself as a maritime power',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialSummary:  '',

  // TWITTER
  // twitterImage: '',
  // twitterCreator: '@individual's_account',
  // tweetText:  '',
  // twitterHeadline:  '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
