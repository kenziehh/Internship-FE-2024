import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  const response = await axios.post(`${process.env.BASE_URL}user/login`, {
    email,
    password,
  });
  localStorage.setItem("token", response.data.data.token);
  console.log(response.data.data.token);
  return NextResponse.json({ status: 200, token: response.data.data.token });
}
