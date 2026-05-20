import nextra from 'nextra'

const withNextra = nextra({
  contentDirBasePath: '/',
  search: { codeblocks: false },
})

export default withNextra({
  reactStrictMode: true,
  // GitHub Pages 배포 시 아래 두 줄 추가:
  // output: 'export',
  // images: { unoptimized: true },
})
