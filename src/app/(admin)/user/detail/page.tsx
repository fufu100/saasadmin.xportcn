import { tableData } from "@/data/mock/saasadmin-xportcn-com-d4f587c2"
import { UserDetailView } from "@/components/sites/saasadmin-xportcn-com-d4f587c2/shared/UserDetailView"

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>
}) {
  const { id } = await searchParams
  const row = tableData.customers.find((c) => c.id === id) ?? tableData.customers[0]
  return <UserDetailView row={row} />
}
