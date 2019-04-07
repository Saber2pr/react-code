/*
 * @Author: saber2pr
 * @Date: 2019-04-07 13:36:15
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-07 13:37:43
 */
import { KeyWords } from '../keywords'
import { childStr } from './childStr'
import { Execption } from './error'

export const v_keywords = (keywords: KeyWords) => {
  const test = childStr(keywords.map(k => k.word))
  if (test) {
    throw Execption(
      `keywords had childstr:[${test}]`,
      'https://github.com/Saber2pr/saber-react-code/blob/master/docs/error.md#keywords-had-childstrxxx'
    )
  }
}
