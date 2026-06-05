#!/usr/bin/env bash
# Claude Code PostToolUse hook — 컨벤션 검사기
# 규칙: content/ 아래 모든 .mdx에서 이탤릭(*...*) 금지. 강조는 볼드(**...**).
#
# stdin: JSON with tool_input.file_path
# - 해당 파일이 mdx면 이탤릭 패턴 스캔
# - 발견되면 exit 2로 차단 + stderr로 위치 안내 → Claude가 다음 응답에서 즉시 수정
# - 아니면 exit 0 (조용히)

set -u

INPUT="$(cat 2>/dev/null || true)"
FILE_PATH="$(printf '%s' "$INPUT" | /usr/bin/python3 -c '
import json, sys
try:
    d = json.loads(sys.stdin.read())
    print(d.get("tool_input", {}).get("file_path", ""))
except Exception:
    print("")
' 2>/dev/null)"

[[ -z "$FILE_PATH" ]] && exit 0

# mdx 파일만 검사
case "$FILE_PATH" in
  *.mdx) ;;
  *) exit 0 ;;
esac

# 파일이 사라졌으면 skip (이동·삭제 직후 같은 경우)
[[ ! -f "$FILE_PATH" ]] && exit 0

# 이탤릭 패턴 — 단일 `*` 짝(앞뒤로 또 다른 `*`가 붙지 않은 것)
HITS="$(perl -ne '
  while (/(?<!\*)\*([^*\s][^*]*?[^*\s]|[^*\s])\*(?!\*)/g) {
    print "L$.: *$1*\n"
  }
' "$FILE_PATH" 2>/dev/null)"

if [[ -n "$HITS" ]]; then
  REL="${FILE_PATH#$PWD/}"
  {
    printf '[convention] 이탤릭(*...*) 금지 규칙 위반: %s\n' "$REL"
    printf '%s\n' "$HITS"
    printf '강조는 볼드(**...**)로. 인용은 따옴표만 써도 충분.\n'
  } >&2
  exit 2
fi

exit 0
