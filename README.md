# YURentCar-fe

- YURenCar 프로젝트의 프론트엔드 파트 레포지토리입니다.
- 추후 wiki 형태로 이동할 수 있습니다.

<br><br><br><br>

# 이슈 작성 규칙

```
[<이슈 종류(이모지 없이)>] <알아보기 쉽게 제목 작성>
```

- label 설정 할 것.
- assigneess 설정 할 것.

<br>

## 이슈 종류

- ✨ Feat : 새로운 기능의 개발 (새로운 html, css 생성 포함)
- 🔧 Fix : 코드 수정, 기능 변화가 있는 코드 변경 (html, css 기능 변화가 있는 걸로 취급)
- 📐 Setting : 개발환경 세팅 (React, npm, git 설정 등)
- 📄 Docs : 문서 작성 및 수정 (README 포함)
- 🔭 Refactor : 코드 개선, 기능 변화가 없는 코드 변경
- 🌏 Deploy : 배포 관련 전부
- 📣 PRMerge : develop -> main 으로 가는 Pull Request 시 사용

<br><br><br><br>

# 풀 리퀘스트 작성 규칙

```
[<이슈 종류(이모지 없이)>/<이슈번호1>, <이슈번호2>] <제목>
```

- reviewer 설정 할 것.
- assigneess 설정 할 것.
- 이슈 종류 중 PRMerge 는 develop -> main 으로 가는 PR 에만 사용

<br><br>

1. 개요 및 관련 이슈

- 간단한 내용요약이나 개요
- 관련 이슈 첨부법 : <- 이슈번호>

2. 작업 사항

- 무엇을 했는지 상세하게 설명

3. 확인한 사항

- <[] 무엇을 확인 하였는지>

<br><br><br><br>

# 브랜치 이름 작성 규칙

```
<이슈 종류(이모지 없이)>/#<이슈 번호>-소문자-소문자-소문자...
```

<br><br><br><br>

# 브랜치 관리 규칙

```
- main
- develop
- feature
```

- main 브랜치는 완성되어 배포가 가능한 브랜치
- develop 브랜치는 배포전의 개발 브랜치
- feature 브랜치는 issue를 통해 만들어 낼 수 있으며, 특정 기능을 담당하는 브랜치
- feature 브랜치들은 develop 브랜치로 pull request를 한 후 삭제

<br><br><br><br>

# 커밋 메시지 규칙

```
<커밋 종류>/#<이슈or풀리 번호>: <뭘 했는지>

주요 변경 내용1
 - 주요 변경 내용1 에 대한 세부 사항 // 필수 아님

주요 변경 내용n
 - 주요 변경 내용n 에 대한 세부 사항
```

- 만약 한 줄에 72자정도를 넘으면 가독성을 위해 엔터를 쳐서 행을 나눕니다.
- 변경 내용에 대한 세부 사항은 반드시 필요하진 않습니다.
- 무엇을 했는지에 대해 `~했어요. ~하였습니다` 보다 `추가, 삭제` 같은 깔끔한 마무리로 끝냅니다.

<br>

## 커밋 종류

- Merge : 병합 상황에 사용
- PRMerge : Pull Request 시 사용
- Feat : (추가) 기능 구현 (만드는 중에 예전 코드를 건드려도)
- Fix : 버그 수정, 기능 변화가 있는 코드 변경
- Refactor : 코드 개선, 기능 변화가 없는 코드 변경
- Style : HTML, CSS 작성시 사용
- Setting : 개발 환경 세팅 (파일 구조나 npm, gitignore, react 같은 개발 환경 세팅시)
- Chore : 사소한 일 (위의 모든 것이 아니거나, 빈 파일을 추가하거나 삭제만 하는 경우)
- Deploy : 배포 (배포 관련한 모든 커밋에 대해)

<br>


## PRMerge 커밋 시

<br>

### 이슈 브랜치에서 develop 으로 이동 시
- 제목은 PRMerge/#PR번호: <#이슈번호 -> develop> 와 같이 적고, 내용은 github에서 제공해주는 대로 그대로 작성한다.
- ex) 
- 제목 : PRMerge/#3: <#1 -> develop>
- 내용 : [Setting/#1] 이슈 템플릿, 풀 리퀘스트 템플릿 추가

<br>

### develop 브랜치에서 main 으로 이동 시
- 제목은 PRMerge/#PR번호: <develop -> main> 와 같이 적고, 내용은 github에서 제공해주는 대로 그대로 작성한다.
- ex) 
- 제목 : PRMerge/#6: <develop -> main>
- 내용 : [PRMerge/#1, #2] 이슈 & 풀 리퀘스트 템플릿 적용 및 이슈 종류 이모지 변경 적용
 
<br><br><br><br>
