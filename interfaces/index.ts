export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}
export interface Address {
  state: string;
  city: string;
  country: string;
}
export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface PillProps {
  label: string;  
  active?: boolean;
  onClick?: () => void;
}

export interface PropertyCardsProps {
  name: string;
  image: string;
  rating: number;
  price: string;
}