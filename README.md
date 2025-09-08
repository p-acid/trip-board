# Trip Board (트립 보드)

한국어 협업 여행 계획 애플리케이션입니다. 사용자들이 Trip Board 링크를 공유하고, 콘텐츠를 추가하며, 여행 일정 항목에 투표하여 협업적인 여행 타임라인을 구성할 수 있습니다.

## 기술 스택

- **Framework**: Next.js 15
- **Language**: TypeScript (strict mode)
- **Styling**: TailwindCSS 4.0
- **Architecture**: App Router + Custom Pages Organization

## 개발 환경 설정

### 요구사항

- Node.js 18+ 
- npm

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

## 스크립트

### 개발
```bash
npm run dev          # 개발 서버 시작
npm run build        # 프로덕션 빌드
npm run start        # 프로덕션 서버 시작
npm run lint         # ESLint 실행
```

### 품질 관리
프로젝트는 pre-commit 훅을 통해 자동으로 다음을 실행합니다:
- TypeScript 컴파일 검사
- Prettier 코드 포맷팅
- ESLint 검사 및 자동 수정

## 프로덕션 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm run start
```

## 프로젝트 구조

```
├── app/                    # Next.js App Router
├── src/                    # 메인 애플리케이션 코드
│   ├── app/               # 앱 레이아웃 및 스타일
│   ├── pages/             # 페이지 컴포넌트 (기능별 구성)
│   └── shared/            # 공유 컴포넌트 및 유틸리티
├── @worklog/              # 작업 로그
└── pages/                 # 추가 페이지 (필요시)
```

## 개발 가이드라인

- **언어**: 한국어 기반 애플리케이션
- **타입 안전성**: 엄격한 TypeScript 설정
- **컴포넌트**: 기능별 구성 및 barrel exports 패턴
- **커밋**: Conventional Commits 규칙 준수
