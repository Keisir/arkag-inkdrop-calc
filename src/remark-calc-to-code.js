// import { visit } from "unist-util-visit";

// here you need to create a parser for inline calc

// export const remarkCalc2Code = () => {
//   return tree => {
//     visit(tree, { type: 'inlineCalc' }, element => {
//       console.log("inlineCalc element:", element)
//       element.type = 'inlineCode'
//       element.lang = 'inline_calc'
//       element.data.hChildren = undefined
//       element.data.hName = undefined
//       element.data.hProperties = {
//         lang: 'inline_calc'
//       }
//     })
//   }
// }
