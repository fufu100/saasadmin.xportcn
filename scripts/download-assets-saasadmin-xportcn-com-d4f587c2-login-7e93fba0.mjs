/**
 * Downloads shared visual assets for saasadmin.xportcn.com clone.
 */
const files = [
  ["https://saasadmin.xportcn.com/img/logo.png", "public/sites/saasadmin-xportcn-com-d4f587c2/shared/images/logo.png"],
  ["https://saasadmin.xportcn.com/favicon.ico", "public/sites/saasadmin-xportcn-com-d4f587c2/shared/favicon.ico"],
  ["https://saasadmin.xportcn.com/img/bg/login.png", "public/sites/saasadmin-xportcn-com-d4f587c2/shared/images/login-bg.png"],
  ["https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png", "public/sites/saasadmin-xportcn-com-d4f587c2/shared/images/avatar.png"],
];

async function run() {
  for (const [url, dest] of files) {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("fail", url, res.status);
      continue;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    const { mkdir, writeFile } = await import("node:fs/promises");
    const { dirname } = await import("node:path");
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log("saved", dest);
  }
}

run();
