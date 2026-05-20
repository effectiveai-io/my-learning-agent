import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: '나의 학습 에이전트',
    template: '%s | 나의 학습 에이전트',
  },
  description:
    '인프런 AI 엔지니어링 챌린지 · 5회차 라이브 도큐. 매주 라이브를 통해 나를 점점 더 똑똑하게 만들어주는 학습 에이전트를 직접 만든다.',
}

const logo = (
  <span
    style={{
      fontWeight: 600,
      fontSize: '0.9375rem',
      letterSpacing: '-0.01em',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
    }}
  >
    <span
      aria-hidden
      style={{
        display: 'inline-block',
        width: 8,
        height: 8,
        borderRadius: 999,
        background: '#3D6FF2',
      }}
    />
    나의 학습 에이전트
  </span>
)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning>
      <Head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </Head>
      <body>
        <Layout
          navbar={
            <Navbar logo={logo}>
              <ThemeSwitch lite className="theme-switch-navbar" />
            </Navbar>
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/imakerjun/my-learning-agent/tree/main"
          copyPageButton={false}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            toggleButton: true,
          }}
          footer={
            <Footer>
              <span style={{ fontSize: '0.8125rem', color: 'rgb(155, 155, 155)' }}>
                © {new Date().getFullYear()} 나의 학습 에이전트 · 인프런 AI 엔지니어링 챌린지
              </span>
            </Footer>
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
