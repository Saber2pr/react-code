/*
 * @Author: saber2pr
 * @Date: 2019-04-06 09:20:59
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-06 09:25:52
 */
const help = `See: [ https://github.com/Saber2pr/saber-react-code/blob/master/README.md ] for more informations.`

export const Execption = (message: string) => new Error(message + `\n${help}`)
