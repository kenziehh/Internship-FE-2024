import { NextRequest, NextResponse } from "next/server";
import getAllGuideByDestination from "@/utils/getAllGuideByDestination.json";

export async function GET() {
  return NextResponse.json({ status: 200, data: getAllGuideByDestination });
}
