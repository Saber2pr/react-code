# @saber2pr/react-code

[![npm](https://img.shields.io/npm/v/@saber2pr/react-code.svg?color=blue)](https://www.npmjs.com/package/@saber2pr/react-code)

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
/**
 * 全局作用域
 */
declare global {
  /**
   * windaow接口
   */
  interface Window {
    test:string // 添加属性
  }
}
\`\`\`
上面是代码`

const App = () => {
  const [state, setState] = useState(code)
  return (
    <>
      <Code>{state}</Code>
      <Editable onSave={setState}>{state}</Editable>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

# \<Code\/\>

代码块使用\`\`\`ts 开始，\`\`\`结束

```tsx
<Code>{/* 含有代码的文本 */}</Code>
```

属性：

1. start 代码块开始标记，默认为 \`\`\`ts
2. end 代码块结束标记，默认为 \`\`\`
3. keywords 关键字，可自定义 color

# \<Editable\/\>

可编辑的含代码文本域

```tsx
<Editable>{/* 含有代码的文本 */}</Editable>
```

属性：

1. width
2. height
3. onSave 保存事件回调
4. status 初始化状态 'edit' 或者 'view'

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
