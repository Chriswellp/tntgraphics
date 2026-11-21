
export const services = [
  {
    id: 'vehicle-branding',
    number: '01',
    slug: 'vehicle-branding',
    title: 'Vehicle Branding',
    shortDescription:
      'Turn your vehicle into a moving advertisement with professional bakkie and car branding.',
    description:
      'Make your business visible wherever the road takes you. At TNT Graphics, we create eye-catching vehicle branding for bakkies, cars and other business vehicles. Whether you need a full vehicle branding design or selected branding graphics, we help your vehicle represent your business professionally.',
    image: '/images/portfolio/Image1.jpeg',
    category: 'Vehicle Branding',

    highlights: [
      'Bakkie branding',
      'Car branding',
      'Business vehicle graphics',
      'Custom vehicle branding designs',
      'Promotional vehicle graphics',
      'Professional branding layouts'
    ],

    benefits: [
      'Turn your vehicle into a moving advertisement for your business.',
      'Increase brand visibility wherever you travel.',
      'Give your business a professional and recognisable appearance.'
    ],

    gallery: [
      '/images/portfolio/Image1.jpeg',
      '/images/portfolio/Image2.jpeg',
      '/images/portfolio/Image3.jpeg',
      '/images/portfolio/Image4.jpeg',
      '/images/portfolio/Image5.jpeg',
      '/images/portfolio/Image6.jpeg'
    ]
  },

  {
    id: 'shop-road-signage',
    number: '02',
    slug: 'shop-road-signage',
    title: 'Shop Signage & Road Signage',
    shortDescription:
      'Make your business easier to recognise with bold, professional shop and road signage.',
    description:
      'Your signage is often the first thing people notice about your business. We create attractive shop signage and road signage that help businesses stand out, communicate clearly and guide customers to the right place. Our designs are focused on visibility, presentation and making a lasting impression.',
    image: '/images/portfolio/Image25.jpeg',
    category: 'Business & Outdoor Signage',

    highlights: [
      'Shop signage',
      'Business signs',
      'Road signage',
      'Outdoor promotional signs',
      'Custom signage designs',
      'Business identification signage'
    ],

    benefits: [
      'Make your business easier for customers to find.',
      'Improve your business visibility and presentation.',
      'Communicate important information clearly through signage.'
    ],

    gallery: [
      '/images/portfolio/Image25.jpeg',
      '/images/portfolio/Image28.jpeg',
      '/images/portfolio/Image30.jpeg',
      '/images/portfolio/Image31.jpeg',
      '/images/portfolio/Image33.jpeg',
      '/images/portfolio/Image35.jpeg'
    ]
  },

  {
    id: 'portraits-banners',
    number: '03',
    slug: 'portraits-banners',
    title: 'Portraits & Banners',
    shortDescription:
      'Bring your ideas to life through creative portraits and attractive promotional banners.',
    description:
      'Whether you need a personalised portrait or a banner that communicates your message, TNT Graphics brings creativity and attention to detail to every design. We create visually appealing portraits and banners for personal, business and promotional purposes.',
    image: '/images/portfolio/Image24.jpeg',
    category: 'Creative Design & Banners',

    highlights: [
      'Custom portrait designs',
      'Personalised portraits',
      'Promotional banners',
      'Business banners',
      'Event and occasion banners',
      'Creative banner layouts'
    ],

    benefits: [
      'Get designs created around your ideas and requirements.',
      'Present your promotions and messages professionally.',
      'Create memorable personalised portraits and visual designs.'
    ],

    gallery: [
      '/images/portfolio/Image23.jpeg',
      '/images/portfolio/Image24.jpeg',
      '/images/portfolio/Image26.jpeg',
      '/images/portfolio/Image29.jpeg'
    ]
  }
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);
