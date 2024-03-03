import withAuth from "@/middlewares/withAuth";
import { NextRequest, NextResponse } from "next/server";

export function mainMiddleware(request: NextRequest) {
  const response = NextResponse.next();
  return response;
}

export default withAuth(mainMiddleware, ["/transaction", "/profile"]);
