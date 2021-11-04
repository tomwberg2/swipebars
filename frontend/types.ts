export type CardItemT = {
  description?: string;
  hasActions?: boolean;
  hasVariant?: boolean;
  image: any;
  isOnline?: boolean;
  adress?: string;
  name: string;
  closing: string;
  rating: number;
  distance: number;
  linkToYelp: string;
  small?: boolean;
};

export type IconT = {
  name: any;
  size: number;
  color: string;
  style?: any;
};

export type MessageT = {
  image: any;
  lastMessage: string;
  name: string;
};

export type ProfileItemT = {
  age?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;
  location?: string;
  matches: string;
  name: string;
};

export type TabBarIconT = {
  focused: boolean;
  iconName: any;
  text: string;
};

export type DataT = {
  id: string;
  name: string;

  // reviews
  rating: string;
  review_count: string;

  // links
  url: any;
  image_url: any;

  // contacts/location
  phone: string;
  address: string;
  distance: string;
  isOpen: boolean;
  latitude: number;
  longitude: number;
  
  price: string;
  // Optionals

  city?: string;
  info1?: string;
  info2?: string;
  info3?: string;
  info4?: string;

};
