import React from 'react'
import ReactDOM from 'react-dom'

import { Code } from '../core/codeview'

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

ReactDOM.render(
  <div>
    <Code content={code} />
  </div>,
  document.getElementById('root')
)
