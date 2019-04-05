import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { Editable } from '../core/editable'
import { Code } from '../core/codeview'

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

this
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
