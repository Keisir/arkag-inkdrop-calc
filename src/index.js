import { markdownRenderer } from "inkdrop";
import CalcComponent from "./react-calc";
// import { remarkCalc2Code } from './remark-calc-to-code' // --> as written in this file - you will need to create a parser for inline calc

module.exports = {
  activate() {
    if (markdownRenderer) {
      markdownRenderer.remarkCodeComponents["calc"] = CalcComponent;
    }
  },

  deactivate() {
    if (markdownRenderer) {
      markdownRenderer.remarkCodeComponents["calc"] = undefined;
    }
  },
};
