import { UserAuthData } from "@/models/UserAuthData";
import axios from "axios";

export const postAuth = async(url: string, data: UserAuthData) => {
  const baseurl = "https://reqres.in/api/";
  const response = await axios.post(`${baseurl}${url}`, data);
  console.log(response);
  return response;
};
