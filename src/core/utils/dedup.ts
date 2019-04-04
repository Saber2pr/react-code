/*
 * @Author: saber2pr
 * @Date: 2019-04-04 16:19:36
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-04-04 16:19:36
 */
export const dedup = <T extends Object>(array: T[], key: keyof T): T[] =>
  array.reduce<T[]>(
    (pre, cur) => (pre.find(v => v[key] === cur[key]) ? pre : pre.concat(cur)),
    []
  )
