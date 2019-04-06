import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { Editable } from '../core/editable'
import { Code } from '../core/codeview'
import { KEYWORDS } from '../core/keywords'

const code = `
下面是代码
\`\`\`ts
/*
 * @Author: saber2pr
 * @Date: 2019-04-04 16:19:11
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-06 09:59:57
 */
export type ColorWord = {
  word: string
  color: string
}

export type KeyWords = ColorWord[]

export const KEYWORDS: KeyWords = [
  {
    word: 'const ',
    color: '#bb75b2'
  },
  {
    word: 'let ',
    color: '#bb75b2'
  },
  {
    word: 'var ',
    color: '#bb75b2'
  },
  {
    word: 'export ',
    color: '#bb75b2'
  },
  {
    word: 'import ',
    color: '#bb75b2'
  },
  {
    word: 'from ',
    color: '#bb75b2'
  },
  {
    word: 'return',
    color: '#bb75b2'
  },
  {
    word: 'document ',
    color: '#bb75b2'
  },
  {
    word: '=>',
    color: '#bb75b2'
  },
  {
    word: 'new ',
    color: '#bb75b2'
  },
  {
    word: 'if',
    color: '#bb75b2'
  },
  {
    word: 'else',
    color: '#bb75b2'
  },
  {
    word: 'switch',
    color: '#bb75b2'
  },
  {
    word: 'case',
    color: '#bb75b2'
  },
  {
    word: 'default ',
    color: '#bb75b2'
  },
  {
    word: 'function',
    color: '#bb75b2'
  },
  {
    word: 'extends ',
    color: '#bb75b2'
  },
  {
    word: 'interface ',
    color: '#bb75b2'
  },
  {
    word: 'class ',
    color: '#bb75b2'
  },
  {
    word: ':',
    color: '#bb75b2'
  },
  {
    word: ' = ',
    color: '#bb75b2'
  },
  {
    word: '===',
    color: '#bb75b2'
  },
  {
    word: '!==',
    color: '#bb75b2'
  },
  {
    word: 'while',
    color: '#bb75b2'
  },
  {
    word: 'typeof ',
    color: '#bb75b2'
  },
  {
    word: 'type ',
    color: '#bb75b2'
  },
  {
    word: 'this',
    color: '#79b6f2'
  },
  {
    word: 'declare ',
    color: '#bb75b2'
  },
  {
    word: 'global ',
    color: '#79b6f2'
  },
  {
    word: 'string',
    color: '#79b6f2'
  },
  {
    word: 'number',
    color: '#79b6f2'
  },
  {
    word: 'Object',
    color: '#bb75b2'
  },
  {
    word: 'boolean',
    color: '#79b6f2'
  },
  {
    word: 'window',
    color: '#79b6f2'
  },
  {
    word: 'null',
    color: '#79b6f2'
  },
  {
    word: 'undefined',
    color: '#79b6f2'
  },
  {
    word: 'delete',
    color: '#79b6f2'
  },
  {
    word: 'constructor',
    color: '#bb75b2'
  }
]

hello

\`\`\`
上面是代码`

const MyKeywords = [
  ...KEYWORDS,
  {
    word: 'hello',
    color: '#bb75b2'
  }
]

const test = `  
qqq

_start

{
  word: 'constructor',
  color: '#bb75b2'
}
]

hello

_end

qqqq`

const App = () => {
  const [state, setState] = useState(test)
  return (
    <>
      <Code keywords={MyKeywords}>{code}</Code>
      <Editable onSave={setState} start={'_start'} end={'_end'}>
        {state}
      </Editable>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
