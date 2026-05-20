# CLAUDE.md

> 새 세션이 이 저장소를 열면 가장 먼저 이 파일을 읽어 컨텍스트를 회복한다.

## 프로젝트

**나의 학습 에이전트** — [인프런 AI 엔지니어링 챌린지](https://www.inflearn.com/challenge/4%EC%A3%BC-%EC%B1%8C%EB%A6%B0%EC%A7%80-%EB%A7%8C%EB%93%A4%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-ai-%EC%97%90%EC%9D%B4) 5회차 라이브 도큐.

- 저장소: `imakerjun/my-learning-agent` (public)
- 배포: Vercel 자동 (main 푸시 트리거)
- 멘토: 메이커준 (임동준 · `imakerjun`)
- 챌린지: 2026-05-13 ~ 06-10, 15명 · 3명 1팀, 5회차

### 본질 (모든 회차 공통 검증축)

> **나를 점점 더 똑똑하게 만들어주는 학습 에이전트.**
> 작지만 유용한 v1을 만들고, 매일 점진 개선한다.

5회차 발표는 앱·에이전트 기능 소개가 아니라 **자신이 만든 에이전트를 통해 자신이 어떤 변화를 경험했는가**. '나' 데모데이.

## 회차

| 회차 | 일시 | 메인 테마 | 도큐 |
|---|---|---|---|
| 1회차 | 5/13 (수) 19:30~21:30 | Prompt Engineering | `/week1` |
| 2회차 | 5/20 (수) 19:30~21:30 | LLM과 나, 둘 다를 위한 저장소 | `/week2` |
| 3회차 | 5/27 (수) 오프라인 | Extended Thinking | (placeholder) |
| 4회차 | 6/5 (금) | Agentic Systems | (placeholder) |
| 5회차 | 6/10 (수) | 최종 발표 · '나' 데모데이 | (placeholder) |

## 운영 DNA (5회차 전체 관통)

1. **강의량 ≠ 개입량** — 가르치는 시간은 적게, 만든 것에 매주 끼어든다
2. **메인 액티비티 2개 구조** — 회차당 핵심 액티비티 2개로 시간 보호
3. **거꾸로 가는 Anthropic 3원칙** — 초안 → 테스트 → 성공 기준 순서로

## 디렉터리

```
my-learning-agent/
├── app/
│   ├── [[...mdxPath]]/page.tsx
│   ├── globals.css              # Folio 토큰 + 노션 스타일 본문 타이포
│   └── layout.tsx               # 메타데이터, 로고, 푸터, docsRepositoryBase
├── components/                  # MDX 커스텀 컴포넌트
│   ├── Hero / Card / CardGrid / Callout / Steps / Timeline / Toggle / Placeholder
│   └── *.module.css
├── content/                     # MDX 콘텐츠
│   ├── index.mdx                # 랜딩
│   ├── _meta.ts                 # 최상위 네비 (about / week1 / week2 / ...)
│   ├── about/
│   │   ├── _meta.ts
│   │   ├── index.mdx            # 챌린지 한눈에 + 인프런 링크 + 학습 철학
│   │   ├── philosophy.mdx       # 운영 철학 3가지
│   │   └── schedule.mdx         # 회차 일정 표
│   ├── week1/
│   │   ├── _meta.ts             # 한눈에 / 흐름 14블록 / 시트 6장 / 미션
│   │   ├── index.mdx
│   │   ├── flow.mdx
│   │   ├── sheets.mdx
│   │   └── mission.mdx
│   └── week2/
│       ├── _meta.ts             # 한눈에 / 5학습 단원 / 미션
│       ├── index.mdx
│       ├── knowledge.mdx        # 1. 지식을 잘 정리한다는건 뭘까?
│       ├── mechanism.mdx        # 2. 핵심 메커니즘 라이브 구성
│       ├── setup.mdx            # 3. 저장소 셋팅
│       ├── outbox.mdx           # 4. outbox 설계 + 데이터 + 커맨드
│       ├── newsletter.mdx       # 5. 뉴스레터 스케줄 + 메타인지 지도
│       └── mission.mdx
├── public/
│   └── illustrations/           # japan-images에서 가져온 헤딩 일러스트 4종
│       ├── heading-live.png     # AI と話す人 — 이번 주 라이브
│       ├── heading-upcoming.png # スケジュール書かれたカレンダー — 예정 회차
│       ├── heading-demoday.png  # スピーチをしている学生 — 데모데이
│       └── heading-tagline.png  # 目標を定めた人 — 챌린지 한 줄
├── mdx-components.tsx           # Card/Callout/CardGrid 등을 글로벌 MDX 사용 등록
├── next.config.mjs
└── package.json                 # Nextra 4.5 / Next 15 / React 19
```

## 콘텐츠 작성 컨벤션

### _meta.ts

- 최상위 (`content/_meta.ts`): 네비 헤더에 노출되는 페이지. **날짜는 빼고** "1회차", "2회차" 형식
- 회차 내부 (`content/weekN/_meta.ts`): 사이드바 단원명. 학습 단원은 번호 + 슬로건 (`'1. 지식을 잘 정리한다는건 뭘까?'`) 형식
- 키와 같은 이름의 `.mdx` 파일이 반드시 있어야 함 — 없으면 빌드 차단

### MDX 헤딩

메인 헤딩(`##`)에 일러스트 prefix를 붙이는 패턴. 마크다운 TOC·id 자동 생성 보존.

```mdx
## ![](/illustrations/heading-live.png) 이번 주 라이브
```

`article h2 img { width:44px; height:44px; }` 규칙이 `globals.css`에 박혀 있어 자동 정렬됨.

### Callout

| type | 색 | 용도 |
|---|---|---|
| `tip` | 초록 | 권장·격언·핵심 |
| `info` | 파랑 | 인용·강조 한 줄 |
| `warning` | 노랑 | 함정·시간 박스·주의 |
| `danger` | 빨강 | 금지·실패 시그널 |
| `note` | 회색 | 보조 정보 |

**한 줄 인용**은 `> "..."` 대신 `<Callout type="info">"..."</Callout>` 권장 (이중 박스 방지). Callout 안에 들어간 blockquote는 CSS로 inline 강조로 자동 변환되니, 두 패턴 모두 안전.

### Card / CardGrid

```mdx
<CardGrid columns={2}>
  <Card title="제목" icon="🎯" href="/path" meta="부가 정보">
    한 줄 설명
  </Card>
  <Card title="제목" icon="🧭" disabled meta="예정">
    비활성 카드 (점선 보더)
  </Card>
</CardGrid>
```

- 따뜻한 오프화이트(`#f7f6f3`) 배경 — 흰 페이지에서 분리
- 호버: 배경이 살짝 더 짙어짐 + 1px lift + shadow 깊어짐 + 화살표만 액센트 컬러 (테두리는 같은 hue 안에서 짙어지기만; 강한 색 X)
- 5개 이상이면 5번째는 단독 finale card로 빼는 게 시각적으로 자연스러움 (참고: `content/index.mdx` 데모데이 섹션)

**🚧 카드 컴포넌트 가드레일 — 손대기 전에 반드시 읽기**

| 함정 | 잘못된 코드 | 올바른 코드 | 이유 |
|---|---|---|---|
| 그리드 컬럼 폭 불균등 | `grid-template-columns: repeat(2, 1fr)` | `grid-template-columns: repeat(2, minmax(0, 1fr))` | `1fr`은 실제 `minmax(auto, 1fr)`이라 콘텐츠 min-content가 컬럼을 밀어내면 폭이 깨진다. |
| 이모지마다 본문 시작점이 다름 | `.icon { /* width 없음 */ }` | `.icon { width: 1.6em; text-align: center; }` | 🚦/📋/🎯/📚는 실제 렌더 폭이 다르므로 폭 고정 필요. |
| 호버 시 카드가 "사라지는" 느낌 | `background: #fff (밝아짐)` | `background: #f3f1ec (짙어짐)` | 페이지 흰 배경에 녹아들지 않게 — 호버는 항상 "더 짙어지는" 방향. |
| 액센트 컬러가 테두리에 튐 | 호버 시 `border-color: blue` | 호버 시 화살표만 액센트, 테두리는 회색 짙어짐 | 강한 채도색은 사용자 멘탈모델에서 focus ring/selected로 읽힘. 액센트는 "다음 행동" 한 곳에만. |

### 페이지 레이아웃 가드레일

| 함정 | 잘못된 코드 | 올바른 코드 | 이유 |
|---|---|---|---|
| 컨텐츠가 좌측으로 쏠려 보임 | `max-width: 720px;` (단독) | `max-width: 720px; margin-inline: auto;` (짝) | `max-width`만 주면 블록이 좁아질 뿐 위치는 안 바뀜 — 부모 왼쪽에 달라붙음. Hero(text-align: center, 풀폭) 아래 컨텐츠가 좌측 쏠리는 시각 비대칭의 원인. |
| Hero 폭과 본문 폭이 다름 | Hero 풀폭 + 본문 720px **좌측 정렬** | Hero 풀폭(text-align: center) + 본문 720px **+ margin-inline: auto** | 두 요소의 가운데 축이 같아야 페이지가 단단하게 느껴진다. |

### Steps / Timeline

순서 있는 작업·일정은 `<Steps>`/`<Timeline>` 사용. 일반 ol/ul보다 시각 위계가 명확.

## 🔒 결정 완료 (변경 전 사용자 합의 필요)

> 새 세션이 이 값을 임의로 바꾸지 말 것. 같은 결정을 반복적으로 흔드는 것이 가장 큰 시간 낭비. 사용자가 "조금만 더 진하게/넓게" 류 요청을 해도 한 번에 한 토큰씩 → 시각 확인 → 다음 토큰. 같은 파일을 한 세션에 3번 이상 건드리고 있으면 무엇이 결정 미달인지 사용자에게 질문.

| 항목 | 값 | 결정 근거 |
|---|---|---|
| 본문 max-width | **800px** | 16px·한국어 ~50자/줄, Toss/Naver D2 기준. 720은 article-TOC 사이 빈 공간이 컸음 |
| 본문 색 | **rgb(55, 53, 47)** (#37352F) | 노션 본문색. 순흑(#000)은 halation 유발 |
| Pretendard weight | **430** | 시스템 폰트 시각 무게 맞춤. 400은 한글 줄기가 얇음 |
| letter-spacing | **0** | 한글에서 음수 값은 글자 두께 인식을 깎음 |
| font-smoothing | **subpixel-antialiased** | 한국어 본문에서 RGB 보간이 줄기를 또렷하게 |
| 다크 모드 토글 | **OFF** (`darkMode={false}` in `app/layout.tsx`) | 라이브 도큐 통일성 우선. 단, `:global(.dark)` CSS는 보존 (시스템 prefers-color-scheme 대비) |
| 다크 카드 톤 | `rgba(255,255,255,0.05)` bg / `0.14` border | 검정 배경에서 카드 경계가 묻히지 않도록 노션 다크 톤 맞춤 |
| 모바일 mermaid | `min-width: 560px` + 부모 가로 스크롤 (`@media (max-width: 768px)`) | SVG inline `max-width`로 인한 텍스트 축소 방지. 새 mermaid 추가 시 별도 처리 불필요 |

## 🧭 콘텐츠 수정 작업 순서

1. `STYLE.md`를 먼저 읽고 금지 표현 확인 (특히 "손에 남는다 / ~한 자리 / em-dash 부연 / stretch·comfort zone")
2. 작성/수정 후 본인이 쓴 글에서 STYLE.md 표 항목이 들어갔는지 **자가 점검 1회**
3. 새 케이스(STYLE.md에 없는 AI스러운 표현) 발견 → 사용자 확인 후 STYLE.md 표에 한 줄 추가 + 콘텐츠 동시 수정
4. 시각 변경이 들어가면 Playwright MCP로 1회 확인

## 디자인 시스템

베이스는 **Folio** (Claude Design의 문서 워크스페이스 키트). 토큰만 layer해서 Nextra 노션 테마와 결합.

### 액센트

- 슬레이트 블루 `#3D6FF2` (라이트), `#6A8CFF` (다크) — 링크·블록쿼트 좌측 바·카드 호버
- 따뜻한 오프화이트 `#f7f6f3` — 카드 배경

### 토큰 (`app/globals.css` 상단)

```css
--fl-accent: #3D6FF2
--fl-accent-600: #2D5BD9
--fl-tint-blue-bg: #DEE9FB    /* blockquote 배경 */
--fl-tint-green-bg: #DCF0E3   /* mermaid out 노드 */
--fl-tint-yellow-bg: #FAF0CE  /* mermaid proc 노드 */
```

### 폰트

- 본문: Pretendard Variable (`layout.tsx`의 Head에서 CDN 로드)
- 모노: SF Mono / JetBrains Mono / Menlo (시스템 fallback)

### 다이어그램

mermaid 기본 지원 (Nextra 4.5). 라이트/다크 자동 적응. classDef로 Folio 톤 매칭:

```mermaid
classDef anchor fill:#dee9fb,stroke:#3d6ff2,stroke-width:2px,color:#1f47b3
classDef park fill:#f7f6f3,stroke:#9b9a97,stroke-dasharray:5
```

### 일러스트

`public/illustrations/`의 4종은 [irasutoya](https://www.irasutoya.com/) 카테고리에서 가져옴. 추가 시 같은 톤 유지를 위해 `~/git/youtube/japan-images/images/` 내에서 찾을 것.

## 참고 자료 위치 (저장소 외부)

새 세션이라도 이 경로는 알아둬야 함:

| 자료 | 경로 |
|---|---|
| 챌린지 본진 자료 (1·2회차 raw) | `~/git/woowacourse/wmakerjun/20-메이커준/04-2026-인프런-AI엔지니어링-챌린지/` |
| 1회차 라이브 진행안 | `진행/01회차-라이브-진행.md` |
| 1회차 스프레드시트 구조 | `진행/01회차-스프레드시트-구조.md` |
| 2회차 디스코드 옵션 투표 결과 | `진행/02회차-디스코드-옵션-투표.md` |
| irasutoya 일러스트 라이브러리 | `~/git/youtube/japan-images/images/` |
| 일러스트 검색 스킬 | `/일러스트찾기` 슬래시 커맨드 |

## 로컬 개발

```bash
npm install
npm run dev        # 포트 3000 점유 중이면 자동으로 3003
npm run build      # Vercel 빌드와 동일 검증
```

## 배포

- **main 푸시 → Vercel 자동 배포** (사용자가 Vercel에 프로젝트 등록 완료)
- 배포 도메인: TBD (`*.vercel.app`)
- 미리보기: feature 브랜치 푸시하면 Vercel이 PR/브랜치별 preview 생성

## .gitignore

`.inbox/`, `inbox/`, `outbox/`, `processed/` 는 학습 에이전트의 본인 데이터 보관용으로 무시. 공개 저장소에 본인 PR·노션·녹취록 들어가면 안 됨.

`my-learning-agent-*.png`, `.playwright-mcp/`도 로컬 시각 검증용이라 무시.

## 최근 작업 (2026-05-20)

- 초기 스캐폴딩 + Folio 디자인 layer + 1·2회차 콘텐츠 작성
- 랜딩 레이아웃을 이번 주 / 예정 / 데모데이 3섹션으로 분리 (5회차 외톨이 해소)
- 카드 비주얼 elevation (따뜻한 오프화이트 배경 + 슬레이트 블루 호버)
- 헤딩에 irasutoya 일러스트 4종 통일 적용
- Callout 안 blockquote 이중 박스 해소 (CSS inline 변환)
- 네비 헤더 날짜 제거 ("1회차 · 5/13" → "1회차")
- 2회차를 강사 진행(`flow.mdx`)에서 학습 단원 5개로 재구조 (knowledge / mechanism / setup / outbox / newsletter)
- 한국어 본문 타이포 결정: weight 430 / letter-spacing 0 / subpixel / 색 #37352F
- 본문 폭 720 → **800** (한국어 50자/줄 기준)
- 다크 모드 토글 **OFF** (`darkMode={false}`) — CSS는 보존
- 다크 카드 톤 강화 (검정에서 카드가 묻히지 않도록)
- Mermaid 모바일: SVG `min-width: 560px` + 가로 스크롤

## 다음 작업 후보

라이브 직후 보강 / 새 세션 진입 시 참고:

1. **3·4·5회차 placeholder 콘텐츠** — `content/week3/` 등 디렉터리 + `_meta.ts` + `index.mdx` 스텁
2. **5회차 데모데이 자료** — `content/week5/` — 4주 누적 한 단어 좌→우 펼침 시각 자료 (스프레드시트 시트 5 캡처)
3. **인프런 챌린지 starter 저장소 분리** — 2회차에서 클론할 `my-learning-agent-starter` (inbox/ outbox/ + `.claude/commands/morning.md`) 별도 public 저장소
4. **사이드바 'N' 아이콘** — Nextra footer 토글이 다크 모드에서 살짝 튐. globals.css 1줄로 정리 가능
5. **홈 페이지 탭 제목** — "Index | 나의 학습 에이전트" → content/index.mdx 상단에 `# 나의 학습 에이전트` 또는 metadata export로 덮어쓰기
6. **week2 라이브 직후 보강** — 실제 진행된 변형을 `knowledge.mdx` ~ `newsletter.mdx`에 반영
7. **수강생 인용 카드 페이지** (선택) — 사전설문 장면 인용을 보조 화면용으로

## 컨벤션 요약 (한 줄)

- **결정 완료 토큰은 임의 변경 X** — 위 "🔒 결정 완료" 표를 먼저 보고, 흔들 거면 사용자 합의 먼저
- **시각 토큰은 한 번에 1개씩** — 같은 파일을 한 세션에 3번 이상 건드리고 있으면 결정 미달이라는 신호
- **콘텐츠는 라이브 직후 보강이 원칙** — 이번 주 라이브 자료가 가장 최신
- **이중 박스·이중 보더 피하기** — Callout 안 blockquote, Card 안 Card 금지
- **메인 헤딩엔 일러스트** — `## ![](/illustrations/...) 제목` 일관 유지
- **본인 학습 데이터는 .inbox/ 또는 별도 저장소** — 공개 repo에 직접 푸시 X
- **시각 변경 후 Playwright로 확인** — 사용자 피드백: "페이지 수정 후 시각 검토"
- **콘텐츠 수정 전 STYLE.md 1회 읽기 + 작성 후 자가 점검 1회**

## 사용자 메모리 (외부)

사용자(`im1@woowahan.com` · `makerjun`)의 글로벌 메모리에 챌린지 운영 DNA·교육 철학·말투 프로파일이 저장돼 있음. 이 저장소 작업 시 같이 참고:

- `~/.claude/projects/-Users-makerjun-git-woowacourse-wmakerjun/memory/MEMORY.md` 인덱스에서 시작
- 관련 메모: `project_inflearn_challenge`, `project_inflearn_challenge_core_goal`, `project_my_learning_agent_docs`, `user_education_philosophy`, `user_voice_profile`
