// ==UserScript==
// @name				Not Pinterested
// @version			1.0
// @namespace		https://github.com/marquete
// @description	Blocks pins containing user-defined keywords.
// @match				*://www.pinterest.com/*
// ==/UserScript==

var blacklist, log, monkeyPatch;

blacklist = ['jennifer lawrence', 'potter', 'doctor who', 'tardis', 'dalek', 'fandom', 'frozen', 'disney', 'elsa'];

log = false;

monkeyPatch = document.createElement('script');

monkeyPatch.textContent = 'var filter = new RegExp("' + (log ? '(' : '') + blacklist.join('|') + (log ? ')' : '') + '", "im");\n' +
													'VariableHeightLayoutManager.prototype._hijackedPositionItem = VariableHeightLayoutManager.prototype._positionItem;\n' +
													'VariableHeightLayoutManager.prototype._positionItem = function(a) {\n';

if(log) {
	monkeyPatch.textContent += 	'  var match = filter.exec(a.el.textContent);\n' +
															'  if(match === null) {\n' +
															'    this._hijackedPositionItem(a);\n' +
															'  } else {\n' +
															'    console.log("not pinterested in " + match[1]);\n' +
															'  }\n';
} else {
	monkeyPatch.textContent += 	'  if(!filter.test(a.el.textContent)) {\n' +
															'    this._hijackedPositionItem(a);\n' +
															'  }\n';
}

monkeyPatch.textContent += '};';

document.body.appendChild(monkeyPatch);
