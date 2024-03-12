import { NextRequest, NextResponse } from "next/server";
import getAllCity from "@/utils/getAllCity.json";

export async function GET() {
  return NextResponse.json({ status: 200, data: getAllCity });
}
