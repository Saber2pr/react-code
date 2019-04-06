/*
 * @Author: saber2pr
 * @Date: 2019-04-06 09:20:59
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-06 09:49:46
 */
const help = (href: string) => `See: [ ${href} ] for more informations.`

export const Execption = (message: string, href: string) =>
  new Error(message + `\n${help(href)}`)

export const ExecptionHadChildStr = (str: string) =>
  Execption(
    `keywords had childstr:[${str}]`,
    'https://github.com/Saber2pr/saber-react-code/blob/master/docs/error.md#keywords-had-childstrxxx'
  )
