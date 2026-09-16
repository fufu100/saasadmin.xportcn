import { NextResponse } from "next/server"
import { loginUser } from "@/lib/api/saasadmin-xportcn-com-d4f587c2"

export async function POST(request: Request) {
  const body = (await request.json()) as { username?: string; password?: string }
  const result = await loginUser({
    username: body.username ?? "",
    password: body.password ?? "",
  })
  return NextResponse.json(result)
}
