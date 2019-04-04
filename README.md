# @saber2pr/react-code

> a code text component for react!

```bash
# from npm
npm install @saber2pr/react-code

# from github
git clone https://github.com/Saber2pr/saber-react-code.git
```

```tsx
const code = `
下面是代码
\`\`\`ts
// 注释
export type ColorWord = {
  word: string // 注释
  color: string
}
/**
 * 多行
 *
 */
export type KeyWords = ColorWord[]
\`\`\`
上面是代码`

<Code content={code} />
```

---

## start

```bash
npm install
```

```bash
npm start

npm run dev

```

> Author: saber2pr

---

## develope and test

> you should write ts in /src

> you should make test in /src/test

> export your core in /src/index.ts!
