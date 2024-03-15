'use strict';

var React = require('react');
var MathJS = require("mathjs")

var showPositives = new Boolean();

function togglePositives() { showPositives = !showPositives; }

const Calc = props => {
  const lang = props.lang;
  const equation = props.children[0];
  const result = MathJS.evaluate(equation)
  if (equation) {
    try {
      return /*#__PURE__*/React.createElement("span", null, (result < 0 && showPositives ? "" : "+") + result);
    } catch (e) {
      return /*#__PURE__*/React.createElement("span", null, e.message);
    }
  } else {
    return /*#__PURE__*/React.createElement("span", null, "Invalid inline math expression");
  }
};

exports.togglePositives = togglePositives;
exports.default = Calc;