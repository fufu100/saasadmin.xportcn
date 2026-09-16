import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "standalone",
}

export default nextConfig

initOpenNextCloudflareForDev()

