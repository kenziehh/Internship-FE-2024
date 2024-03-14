import { ActiveHour } from "./ActiveHour";
import { Review } from "./Review";

export interface Destination {
  id: string;
  name: string;
  desc: string;
  image: string;
  address: string;
  activeHour: ActiveHour;
  price: number;
  reviews: Review[];
}
