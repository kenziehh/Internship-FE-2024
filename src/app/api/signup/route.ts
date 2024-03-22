import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { hp, name, email, password, confirm_password } = await request.json();
  const response = await axios.post(`${process.env.BASE_URL}user/register`, {
    hp,
    name,
    email,
    password,
    confirm_password,
  });
  return NextResponse.json({ status: 200, data: response.data });
}
