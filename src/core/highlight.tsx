/*
 * @Author: saber2pr
 * @Date: 2019-03-02 13:38:59
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-07 13:46:02
 */
import React, { Props, Fragment } from 'react'
import { KeyWords } from './keywords'
import { findKeys } from './utils/findKeys'
import { v_keywords } from './utils/validators'

export interface HighLight extends Props<any> {
  children?: string
  keywords: KeyWords
}

const comment_single = new RegExp('//[\\s\\S]*?\\n')
const comment_more = /(\/\/.*$)|(\/\*(.|\s)*?\*\/)/

export const HighLight = ({ children = '', keywords }: HighLight) => {
  try {
    v_keywords(keywords)
  } catch (error) {
    console.log(error)
  }
  const finded = findKeys(children, keywords.map(k => k.word))
  const findColor = (index: number) =>
    keywords.find(keyword => keyword.word === finded[index].type).color
  const highlighted = children
    .split(new RegExp(keywords.map(keyword => keyword.word).join('|')))
    .reduce<JSX.Element[]>(
      (out, val, index) =>
        out.concat(
          <Fragment key={`jssjy4fpsfemmey5tor${index}`}>{val}</Fragment>,
          finded[index] && (
            <span
              style={{ color: findColor(index) }}
              key={`jssjyad2o7ym9vuerr${index}`}
            >
              {finded[index].type}
            </span>
          )
        ),
      []
    )
  const markedComment = transformComment(
    transformComment(highlighted, comment_single),
    comment_more
  )
  return <>{markedComment}</>
}

const transformComment = (array: JSX.Element[], RegExp: RegExp) =>
  array.map((element, index) => {
    const target = element && element.props && element.props['children']
    const trans = (comment: string) => {
      const res = target.split(comment)
      return (
        <Fragment key={target + index}>
          {res[0]}
          <span style={{ color: '#999999' }}>{comment}</span>
          {res[1]}
        </Fragment>
      )
    }
    if (typeof target === 'string') {
      if (RegExp.test(target)) {
        const comment = target.match(RegExp)
        if (comment) return trans(comment[0])
      }
    }
    return element
  })
