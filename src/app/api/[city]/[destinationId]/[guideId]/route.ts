import { NextRequest, NextResponse } from "next/server";
import getTourGuideDetail from "@/utils/getTourGuideDetail.json";

export async function GET() {
  return NextResponse.json({ status: 200, data: getTourGuideDetail });
}
