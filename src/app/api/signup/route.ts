import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  const response = await axios.post(`${process.env.BASE_URL}register`, {
    email,
    password,
  });

  if (response.data.token) {
    return NextResponse.json({ status: 200, token: response.data.token });
  }
}
