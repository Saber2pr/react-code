/*
 * @Author: saber2pr
 * @Date: 2019-04-06 09:06:52
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-06 09:13:10
 */
export const childStr = (array: string[]) => {
  const str = array.join('')
  for (const item of array) {
    if (str.split(item).length > 2) {
      return item
    }
  }
  return null
}
