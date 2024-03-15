import { Review } from "./Review";

export interface TourGuide {
  id: string;
  image: string;
  name: string;
  age: number;
  rating:number;
  phoneNumber: string;
  address: string;
  desc:string;
  lastActive:string;
  responseTimeRate:string;
  review: {
    total: number;
    reviews: Review[];
  };
  location: {
    city: string;
    country: string;
  };
}
