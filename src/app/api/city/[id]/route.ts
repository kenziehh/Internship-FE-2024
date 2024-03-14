import { NextRequest, NextResponse } from "next/server";
import getDestinationList from "@/utils/getDestinationByCity.json";

export async function GET() {
  return NextResponse.json({ status: 200, data: getDestinationList });
}
