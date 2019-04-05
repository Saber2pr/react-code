/*
 * @Author: saber2pr
 * @Date: 2019-04-04 16:19:20
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-04 18:02:52
 */
import React, { CSSProperties, Fragment } from 'react'
import { Para } from './paragraph'
import { HighLight } from './highlight'
import { KeyWords, KEYWORDS } from './keywords'
import { dedup } from './utils/dedup'

export interface Code {
  children?: string
  start?: string
  end?: string
  keywords?: KeyWords
}

const pstyle: CSSProperties = {
  textAlign: 'left'
}

const prestyle: CSSProperties = {
  textAlign: 'left',
  backgroundColor: '#282c34',
  color: 'white',
  borderRadius: '10px',
  padding: '10px',
  overflowX: 'auto',
  lineHeight: '1.5rem'
}
/**
 * Code
 *
 * text \`\`\`ts\/** you code *\/\`\`\` text
 *
 * @export
 * @returns
 */
export const Code = ({
  children = '',
  start = '```ts\n',
  end = '```',
  keywords = KEYWORDS
}: Code) => {
  const $keywords = dedup(keywords, 'word')
  return (
    <>
      {children.split(start).map((c, index) => {
        if (c.includes(end)) {
          const result = c.split(end)
          return (
            <Fragment key={'ju2wa8owexjvxhn26h' + index}>
              <pre style={prestyle}>
                <HighLight keywords={$keywords}>{result[0]}</HighLight>
              </pre>
              <Para content={result[1]} style={pstyle} />
            </Fragment>
          )
        } else {
          return (
            <Para
              content={c}
              style={pstyle}
              key={`jssjx2jjjebnh3do7lp${index}`}
            />
          )
        }
      })}
    </>
  )
}
