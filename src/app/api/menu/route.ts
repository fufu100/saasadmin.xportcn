import { NextResponse } from "next/server"
import { getMenus } from "@/lib/api/saasadmin-xportcn-com-d4f587c2"

export async function GET() {
  const data = await getMenus()
  return NextResponse.json({ success: true, data })
}
