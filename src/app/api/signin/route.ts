import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  const response = await axios.post(`${process.env.BASE_URL}login`, {
    email,
    password,
  });

  if (response.data.token) {
    return NextResponse.json({ status: 200, token: response.data.token });
  }
}

export async function GET() {
  return NextResponse.json({ status: 200, message: "api berhasil" });
}
