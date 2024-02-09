const env = process.env.NODE_ENV || 'development';
const serverIP = 'localhost';
const serverPort = 5000;
export default {
  REGISTER_TEXT: [
    {
      theme: 'Why should I use Squadhelp?',
      text: 'You always have an option of hiring a consultant or coming up with the name yourself. However, Squadhelp builds great brands that succeed faster by connecting you with the most creative people across the globe. Most importantly, Squadhelp provides you with choice: you get to see ideas from dozens (in some cases, hundreds) of contestants before you select a winner. Typically, you wouldspend far less money with Squadhelp (our contests start at $199) than hiring an agency. Also, you will receive immediate results - most contests begin receiving submissions within minutes of starting.',
    },
    {
      theme: 'How is Squadhelp Different?',
      text: ' Since 2011, we have been committed to disrupting the traditional agency model. Our platform offers much more than a typical crowdsourcing experience. From Machine Learning to Audience Testing to Comprehensive Trademark Validation, you receive best-in-class support for your branding projects. Breadth: Our Contest-Based Crowdsourcing approach allows you to receive an unmatched breadth of name ideas from dozens of unique, creative minds while working with the worlds largest branding community. Quality and Collaboration: Using an advanced Quality Scoring Algorithm, we ensure that you receive more ideas from our top-quality creatives, and we use Gamification best practices to encourage high-quality brainstorming and two-way communication throughout your contest. We don’t stop at ideation: Choose your name with confidence through our high-end validation services. Poll your target demographics to get unbiased feedback on your favorite names, and receive Trademark Risk and Linguistics Analysis Reports developed by a Licensed Trademark Attorney.',
    },
    {
      theme: 'I’ve never used Squadhelp before. What should I expect?',
      text: 'Most customers tell us that Squadhelp`s process is effective, easy, fast, and even fun. We constantly hear extremely positive feedback with respect to the breadth of ideas submitted to each contest, and many customers are surprised at how insightful working with dozens of creative individuals from across the globe can be.',
    },
    {
      theme: 'How much does it cost?',
      text: 'Our naming competitions start at $199, and our logo design competitions start at $299. Also, there are three additional contest level that each offer more features and benefits. See our Pricing Page for details.',
    },
    {
      theme: 'Do you offer any discount for multiple contests?',
      text: 'Yes! We have many contest bundles - our most popular being our Name, Tagline, and Logo bundle. Bundles allow you to purchase multiple contests at one time and save as much as from $75 - $400. You can learn more about our bundle options on our Pricing Page.',
    },
    {
      theme: 'Will you help me validate my name?',
      text: 'Yes! We believe that validating and securing your name is a critical part of your branding process. Squadhelp offers domain checks, Trademark support, linguistics analysis, and professional audience testing to help you choose your name with confidence. We even have special prices for Trademark filing for our customers.',
    },
    {
      theme: 'I have other questions! How can I get in touch with Squadhelp?',
      text: 'Check out our FAQs or send us a message. For assistance with launching a contest, you can also call us at (877) 355-3585 or schedule a Branding Consultation',
    },
  ],
  SECTION_LIST: [
    {
      menuName: 'Name ideas',
      list: [
        { name: 'Beauty', url: '#' },
        { name: 'Consulting', url: '#' },
        { name: 'E-Commerce', url: '#' },
        { name: 'Fashion & Clothing', url: '#' },
        { name: 'Finance', url: '#' },
        { name: 'Real Estate', url: '#' },
        { name: 'Tech', url: '#' },
        { name: 'More Categories', url: '#' },
      ],
    },
    {
      menuName: 'CONTESTS',
      list: [
        { name: 'How it works', url: '#' },
        { name: 'Pricing', url: 'pricing' },
        { name: 'Agency service', url: '#' },
        { name: 'Active contests', url: '#' },
        { name: 'Winners', url: '#' },
        { name: 'Leaderboard', url: '#' },
        { name: 'Become a creative', url: '#' },
      ],
    },
    {
      menuName: 'Our Work',
      list: [
        { name: 'names', url: '#' },
        { name: 'taglines', url: '#' },
        { name: 'logos', url: '#' },
        { name: 'testimonials', url: '#' },
      ],
    },
    {
      menuName: 'Names For Sale',
      list: [
        { name: 'popular names', url: '#' },
        { name: 'short names', url: '#' },
        { name: 'intriguing names', url: '#' },
        { name: 'names by category', url: '#' },
        { name: 'visual name search', url: '#' },
        { name: 'sell your domains', url: '#' },
      ],
    },
    {
      menuName: 'Blog',
      list: [
        { name: 'ultimate naming guide', url: '#' },
        {
          name: 'poetic devices in business naming',
          url: '#',
        },
        { name: 'ultimate naming guide', url: '#' },
        { name: 'crowded bar theory', url: '#' },
        { name: 'all articles', url: '#' },
      ],
    },
  ],
  CUSTOMER: 'customer',
  CREATOR: 'creator',
  CONTEST_STATUS_ACTIVE: 'active',
  CONTEST_STATUS_FINISHED: 'finished',
  CONTEST_STATUS_PENDING: 'pending',
  NAME_CONTEST: 'name',
  LOGO_CONTEST: 'logo',
  TAGLINE_CONTEST: 'tagline',
  OFFER_STATUS_REJECTED: 'rejected',
  OFFER_STATUS_WON: 'won',
  OFFER_STATUS_PENDING: 'pending',
  STATIC_IMAGES_PATH: '/staticImages/',
  ANONYM_IMAGE_PATH: '/staticImages/anonym.png',
  BASE_URL: `http://${serverIP}:${serverPort}/`,
  ACCESS_TOKEN: 'accessToken',
  publicURL:
    env === 'production'
      ? `http://${serverIP}:80/images/`
      : `http://${serverIP}:${serverPort}/public/images/`,
  NORMAL_PREVIEW_CHAT_MODE: 'NORMAL_PREVIEW_CHAT_MODE',
  FAVORITE_PREVIEW_CHAT_MODE: 'FAVORITE_PREVIEW_CHAT_MODE',
  BLOCKED_PREVIEW_CHAT_MODE: 'BLOCKED_PREVIEW_CHAT_MODE',
  CATALOG_PREVIEW_CHAT_MODE: 'CATALOG_PREVIEW_CHAT_MODE',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS',
  ADD_CHAT_TO_OLD_CATALOG: 'ADD_CHAT_TO_OLD_CATALOG',
  CREATE_NEW_CATALOG_AND_ADD_CHAT: 'CREATE_NEW_CATALOG_AND_ADD_CHAT',
  USER_INFO_MODE: 'USER_INFO_MODE',
  CASHOUT_MODE: 'CASHOUT_MODE',
  HEADER_ANIMATION_TEXT: [
    'a Company',
    'a Brand',
    'a Website',
    'a Service',
    'a Book',
    'a Business',
    'an App',
    'a Product',
    'a Startup',
  ],
  FooterItems: [
    {
      title: 'SQUADHELP',
      items: ['About', 'Contact', 'How It Works?', 'Testimonials', 'Our Work'],
    },
    {
      title: 'RESOURCES',
      items: [
        'How It Works',
        'Become a Creative',
        'Business Name Generator',
        'Discussion Forum',
        'Blog',
        'Download eBook',
        'Pricing',
        'Help & FAQs',
      ],
    },
    {
      title: 'OUR SERVICES',
      items: [
        'Naming',
        'Logo Design',
        'Taglines',
        'Premium Names For Sale',
        'Creative Owned Names For Sale',
        'Audience Testing',
        'Trademark Research & Filling',
        'Managed Agency Service',
      ],
    },
    {
      title: 'LEGAL',
      items: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'],
    },
  ],
};
