export interface MenuItem {
  item: string;
  url: string;
  children: Childobj[] | [];
}

export interface Childobj {
  item: string;
  url: string;
  icon: string;
}

export type itemsArray = MenuItem[];

export const items: itemsArray = [
  {
    item: 'Platform',
    url: '/platform-e-invoicing-invoicing-fiscalization-api',
    children: [],
  },
  {
    item: 'Customers',
    url: '',
    children: [
      {
        item: 'ERPs',
        url: '/software-invoicing-e-invoicing-api-fiscalization-online',
        icon: '',
      },
      {
        item: 'SaaS',
        url: '/saas-invoicing-e-invoicing-fiscalization-api',
        icon: '',
      },
      {
        item: 'eCommerce',
        url: '/e-commerce-e-invoicing-api-fiscalization-online',
        icon: '',
      },
      {
        item: 'Marketplaces',
        url: '/marketplace-invoicing-api-fiscalization',
        icon: '',
      },
      {
        item: 'POS',
        url: '/pos-invoicing-fiscalization-api-online',
        icon: '',
      },
      {
        item: 'Payment processors',
        url: '/payment-providers-invoicing-api',
        icon: '',
      },
    ],
  },
  {
    item: 'Pricing',
    url: '/pricing',
    children: [],
  },
  {
    item: 'Learn',
    url: '',
    children: [
      {
        item: 'Blog & Countries',
        url: 'https://dddinvoices.com/learn',
        icon: '',
      },
      {
        item: 'About Us',
        url: '/about-us',
        icon: '',
      },
    ],
  },
  {
    item: 'API Documentation',
    url: 'https://dddinvoices.com/documentation',
    children: [],
  },
];
