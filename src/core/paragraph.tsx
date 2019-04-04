/*
 * @Author: saber2pr
 * @Date: 2019-04-04 16:19:14
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-04 17:08:04
 */
import React, { Props, CSSProperties } from 'react'

export interface Para extends Props<any> {
  content: string
  style?: CSSProperties
}

export const Para = ({ content, style = {} }: Para) => (
  <>
    {content.split('\n').map(
      (line, index) =>
        line && (
          <p style={style} key={`jssk84u20tjlxz2s2ych${index}`}>
            {line}
          </p>
        )
    )}
  </>
)
