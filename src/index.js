import { markdownRenderer, CodeMirror } from 'inkdrop'
import { lazy } from 'react'
import remarkCalc from 'remark-calc'
import { remarkCalc2Code } from './remark-calc-to-code'

console.log('module.paths:', module.paths)

// const MATH_MODE_INFO = {
//   name: 'math',
//   mime: 'text/x-latex',
//   mode: 'stex',
//   ext: [],
//   alias: ['inline_math']
// }

const ReactCalc = lazy(() => import('./react-calc'))

module.exports = {
  activate() {
    if (markdownRenderer) {
      markdownRenderer.remarkPlugins.push(remarkCalc)
      markdownRenderer.remarkPlugins.push(remarkCalc2Code)
      markdownRenderer.remarkCodeComponents.calc = ReactCalc
      markdownRenderer.remarkCodeComponents.inline_calc = ReactCalc
    }
    // if (CodeMirror) {
    //   CodeMirror.modeInfo.push(MATH_MODE_INFO)
    // }
  },

  deactivate() {
    if (markdownRenderer) {
      markdownRenderer.remarkPlugins = markdownRenderer.remarkPlugins.filter(
        plugin => remarkCalc !== plugin
      )
      markdownRenderer.remarkPlugins = markdownRenderer.remarkPlugins.filter(
        plugin => ![remarkCalc, remarkCalc2Code].includes(plugin)
      )
      markdownRenderer.remarkCodeComponents.calc = null
      markdownRenderer.remarkCodeComponents.inline_calc = null
    }
    // if (CodeMirror) {
    //   const { modeInfo } = CodeMirror
    //   const i = modeInfo.indexOf(MATH_MODE_INFO)
    //   if (i >= 0) modeInfo.splice(i, 1)
    // }
  }
}