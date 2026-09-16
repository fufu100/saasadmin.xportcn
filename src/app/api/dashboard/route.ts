import { NextResponse } from "next/server"
import { getDashboard } from "@/lib/api/saasadmin-xportcn-com-d4f587c2"

export async function GET() {
  const data = await getDashboard()
  return NextResponse.json({ success: true, data })
}
