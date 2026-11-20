
export const services = [
  {
    id: 'branding',
    number: '01',
    slug: 'branding',
    title: 'Branding & Visual Identity',
    shortDescription:
      'Build a memorable brand with a professional identity that communicates who you are.',
    description:
      'Your brand is more than just a logo. We create cohesive visual identities that help businesses establish recognition, communicate their values and make a lasting impression.',
    image: '/images/tnt-stationery.png',
    category: 'Brand Identity',
    highlights: [
      'Professional logo design',
      'Brand identity development',
      'Business cards and letterheads',
      'Corporate stationery',
      'Brand guidelines',
      'Company profiles'
    ],
    benefits: [
      'Create a recognisable and consistent brand.',
      'Present your business professionally.',
      'Build trust with your target audience.'
    ]
  },
  {
    id: 'marketing',
    number: '02',
    slug: 'marketing',
    title: 'Marketing & Promotional Design',
    shortDescription:
      'Promote your products, services and events through powerful visual communication.',
    description:
      'Get noticed with creative promotional materials designed to capture attention, communicate your message and encourage customers to take action.',
    image: '/images/tnt-flyers.png',
    category: 'Promotional Design',
    highlights: [
      'Promotional flyers and posters',
      'Brochures and catalogues',
      'Event invitations',
      'Menus and price lists',
      'Promotional banners',
      'Business advertisements'
    ],
    benefits: [
      'Communicate your offers clearly.',
      'Attract attention to your campaigns.',
      'Present your promotions professionally.'
    ]
  },
  {
    id: 'social-media',
    number: '03',
    slug: 'social-media',
    title: 'Social Media & Digital Design',
    shortDescription:
      'Make your business stand out online with engaging and consistent digital content.',
    description:
      'We create eye-catching digital graphics that help businesses maintain a professional online presence, communicate with their audience and promote their products and services.',
    image: '/images/tnt-social-media.png',
    category: 'Digital Design',
    highlights: [
      'Social media post designs',
      'Instagram and Facebook graphics',
      'Digital advertising creatives',
      'Social media campaign designs',
      'Online promotional banners',
      'Digital marketing artwork'
    ],
    benefits: [
      'Strengthen your online brand presence.',
      'Maintain a consistent visual identity.',
      'Make your digital promotions more engaging.'
    ]
  },
  {
    id: 'merchandise',
    number: '04',
    slug: 'merchandise',
    title: 'Merchandise & Apparel Branding',
    shortDescription:
      'Take your brand beyond the screen with customised merchandise and apparel designs.',
    description:
      'Turn everyday products into opportunities for brand visibility. We develop creative artwork for branded clothing, promotional merchandise and customised corporate gifts.',
    image: '/images/tnt-merchandise.png',
    category: 'Merchandise Design',
    highlights: [
      'T-shirt and clothing designs',
      'Branded caps and hats',
      'Corporate uniforms',
      'Promotional merchandise artwork',
      'Customised gift designs',
      'Apparel branding concepts'
    ],
    benefits: [
      'Increase brand visibility.',
      'Create consistent branded merchandise.',
      'Give your business a distinctive identity.'
    ]
  },
  {
    id: 'packaging',
    number: '05',
    slug: 'packaging',
    title: 'Packaging & Product Design',
    shortDescription:
      'Give your products a professional appearance with distinctive packaging and label designs.',
    description:
      'We create product-focused visual designs that help your products stand out. From labels to packaging concepts, we combine creativity with clear product communication.',
    image: '/images/tnt-packaging.png',
    category: 'Product Design',
    highlights: [
      'Product label design',
      'Packaging concepts',
      'Bottle and container labels',
      'Product stickers',
      'Food and beverage packaging',
      'Product presentation designs'
    ],
    benefits: [
      'Improve your product presentation.',
      'Create a consistent product identity.',
      'Help your products stand out on shelves.'
    ]
  },
  {
    id: 'advertising',
    number: '06',
    slug: 'advertising',
    title: 'Large-Format & Outdoor Advertising',
    shortDescription:
      'Make a bigger impression with bold designs created for visibility in the real world.',
    description:
      'Bring your brand into the physical world with impactful advertising artwork designed for large-format printing, business spaces and outdoor visibility.',
    image: '/images/tnt-advertising.png',
    category: 'Outdoor Advertising',
    highlights: [
      'Billboard artwork',
      'Outdoor banners',
      'Business signage designs',
      'Vehicle branding artwork',
      'Shop and display graphics',
      'Large-format promotional designs'
    ],
    benefits: [
      'Increase visibility in public spaces.',
      'Communicate your message from a distance.',
      'Maintain professional branding across locations.'
    ]
  }
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);
