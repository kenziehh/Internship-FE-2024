import { Review } from "./Review";

export interface TourGuide {
  id: string;
  image: string;
  name: string;
  age: number;
  review: {
    total: number;
    reviews: Review[];
  };
}
