/*
 * @Author: saber2pr
 * @Date: 2019-03-02 13:38:59
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-04 18:07:34
 */
import React, { Props } from 'react'
import { KeyWords } from './keywords'
import { findKeys } from './utils/findKeys'

export interface HighLight extends Props<any> {
  content: string
  keywords: KeyWords
}

const comment_single = new RegExp('//[\\s\\S]*?\\n')
const comment_more = /(\/\/.*$)|(\/\*(.|\s)*?\*\/)/g

export const HighLight = ({ content, keywords }: HighLight) => {
  const finded = findKeys(content, keywords.map(k => k.word))
  const findColor = (index: number) =>
    keywords.find(keyword => keyword.word === finded[index].type).color
  const array = content
    .split(new RegExp(keywords.map(keyword => keyword.word).join('|')))
    .reduce<JSX.Element[]>(
      (out, val, index) =>
        finded[index]
          ? out.concat(
              val && <span key={`jssjy4fpsfemmey5tor${index}`}>{val}</span>,
              <span
                style={{ color: findColor(index) }}
                key={`jssjyad2o7ym9vuerr${index}`}
              >
                {finded[index].type}
              </span>
            )
          : out.concat(<span key={`jssjyjafaimd4jkph76${index}`}>{val}</span>),
      []
    )

  return <>{transformComment(array)}</>
}

const transformComment = (array: JSX.Element[]) =>
  array.map((element, index) => {
    const target = element.props && element.props['children']
    const trans = (comment: string) => {
      const res = target.split(comment)
      return (
        <React.Fragment key={target + index}>
          {res[0] && <span>{res[0]}</span>}
          <span style={{ color: '#999999' }}>{comment}</span>
          {res[1] && <span>{res[1]}</span>}
        </React.Fragment>
      )
    }
    if (typeof target === 'string') {
      if (target.includes('//')) {
        return trans(target.match(comment_single)[0])
      } else if (target.includes('/*')) {
        return trans(target.match(comment_more)[0])
      }
    }
    return element
  })
