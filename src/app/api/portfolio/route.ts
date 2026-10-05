import { NextResponse } from "next/server";
import { getPortfolio } from "@/lib/api";

export async function GET() {
  return NextResponse.json(await getPortfolio());
}
