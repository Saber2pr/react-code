import React from 'react'
import ReactDOM from 'react-dom'

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
\`\`\`
上面是代码`

ReactDOM.render(
  <div>
    <Code content={code} />
  </div>,
  document.getElementById('root')
)
