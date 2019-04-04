/*
 * @Author: saber2pr
 * @Date: 2019-04-04 16:19:38
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-04-04 16:19:38
 */
export const findKeys = (content: string, keys: string[]) => {
  const record: {
    type: string
    index: number
  }[] = []
  keys.forEach(key => {
    let pos = content.indexOf(key, 0)
    while (pos !== -1) {
      record.push({ type: key, index: pos })
      pos = content.indexOf(key, pos + key.length)
    }
  })
  return record.sort((a, b) => a.index - b.index)
}
