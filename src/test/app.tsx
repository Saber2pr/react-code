import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { Editable } from '../core/editable'
import { Code } from '../core/codeview'
import { KEYWORDS } from '../core/keywords'

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
      <Code keywords={MyKeywords}>{`\`\`\`ts
      ${JSON.stringify(KEYWORDS, null, 2)}
      \`\`\``}</Code>
      <Editable onSave={setState} start={'_start'} end={'_end'}>
        {state}
      </Editable>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
