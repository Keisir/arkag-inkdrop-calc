'use strict';

var inkdrop = require('inkdrop');
var React = require('react');
var MathJS = require('mathjs');

const CalcComponent = props => {
  const showPositives = true; // currently a const value - you will need to change this and get this value from somewhere maybe the settings? https://developers.inkdrop.app/modules/config
  let result;
  if (!props.children || !props.children[0]) {
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  }
  try {
    result = MathJS.evaluate(props.children[0]);
  } catch (e) {
    return /*#__PURE__*/React.createElement("span", null, "Invalid inline math expression");
  }
  return /*#__PURE__*/React.createElement("span", null, (result.entries < 0 && showPositives ? "" : "+") + result.entries);
};

// import { remarkCalc2Code } from './remark-calc-to-code' // --> as written in this file - you will need to create a parser for inline calc

module.exports = {
  activate() {
    if (inkdrop.markdownRenderer) {
      inkdrop.markdownRenderer.remarkCodeComponents["calc"] = CalcComponent;
    }
  },
  deactivate() {
    if (inkdrop.markdownRenderer) {
      inkdrop.markdownRenderer.remarkCodeComponents["calc"] = undefined;
    }
  }
};
//# sourceMappingURL=index.js.map
