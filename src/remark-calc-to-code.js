import { visit } from 'unist-util-visit'

export const remarkMath2Code = () => {
  return tree => {
    visit(tree, { type: 'calc' }, element => {
      element.type = 'code'
      element.lang = 'calc'
      element.data.hChildren = undefined
      element.data.hName = undefined
      element.data.hProperties = {
        lang: 'calc'
      }
    })
    visit(tree, { type: 'inlineCalc' }, element => {
      element.type = 'inlineCode'
      element.lang = 'inline_calc'
      element.data.hChildren = undefined
      element.data.hName = undefined
      element.data.hProperties = {
        lang: 'inline_calc'
      }
    })
  }
}