import { NextResponse } from "next/server"
import { getCrudList } from "@/lib/api/saasadmin-xportcn-com-d4f587c2"

export async function GET(
  request: Request,
  context: { params: Promise<{ resource: string }> },
) {
  const { resource } = await context.params
  const url = new URL(request.url)
  const keyword = url.searchParams.get("keyword") ?? undefined
  const page = Number(url.searchParams.get("page") ?? "1")
  const pageSize = Number(url.searchParams.get("pageSize") ?? "100")
  const data = await getCrudList(resource, { keyword, page, pageSize })
  return NextResponse.json({ success: true, data })
}
