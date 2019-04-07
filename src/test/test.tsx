import { KEYWORDS } from '../core/keywords'
import { v_keywords } from '../core/utils/validators'

try {
  v_keywords(KEYWORDS)
  console.log('OK! all keywords is effective.')
} catch (error) {
  console.log(error)
}
