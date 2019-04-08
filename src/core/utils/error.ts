/*
 * @Author: saber2pr
 * @Date: 2019-04-06 09:20:59
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-07 13:46:33
 */
const help = (href: string) =>
  `please visit: [ ${href} ] for more informations.`

export const Execption = (message: string, href: string) => {
  throw new Error(message + `\n${help(href)}`)
}
