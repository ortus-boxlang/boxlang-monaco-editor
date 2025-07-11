'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var monaco = require('monaco-editor');

function _interopNamespaceDefault(e) {
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n.default = e;
	return Object.freeze(n);
}

var monaco__namespace = /*#__PURE__*/_interopNamespaceDefault(monaco);

// Monaco language configuration for BoxLang
const boxlangLanguageConfig$1 = {
	comments : {
		lineComment  : "//",
		blockComment : [
			"/*",
			"*/"
		]
	},
	brackets : [
		[
			"{",
			"}"
		],
		[
			"[",
			"]"
		],
		[
			"(",
			")"
		],
		[
			"<",
			">"
		]
	],
	autoClosingPairs : [
		{ open: "{", close: "}" },
		{ open: "[", close: "]" },
		{ open: "(", close: ")" },
		{ open: '"', close: '"', notIn: [ "string" ] },
		{
			open  : "'",
			close : "'",
			notIn : [
				"string",
				"comment"
			]
		},
		{
			open  : "`",
			close : "`",
			notIn : [
				"string",
				"comment"
			]
		},
		{ open: "/**", close: " */", notIn: [ "string" ] }
	],
	surroundingPairs : [
		{ open: "{", close: "}" },
		{ open: "[", close: "]" },
		{ open: "(", close: ")" },
		{ open: '"', close: '"' },
		{ open: "'", close: "'" },
		{ open: "`", close: "`" }
	],
	folding : {
		markers : {
			start : new RegExp( "^\\s*//\\s*#?region\\b" ),
			end   : new RegExp( "^\\s*//\\s*#?endregion\\b" )
		}
	},
	wordPattern      : /[a-zA-Z_$][a-zA-Z0-9_$]*/g,
	indentationRules : {
		increaseIndentPattern : /^.*\{[^}]*$/,
		decreaseIndentPattern : /^.*\}.*$/
	}
};

/* eslint-disable no-useless-escape */
// Monaco Monarch tokenizer for BoxLang
const boxlangMonarchTokens$1 = {
	script : {
		defaultToken : "invalid",
		tokenPostfix : ".bx",

		keywords : [
			"abort",
			"abstract",
			"any",
			"array",
			"as",
			"assert",
			"break",
			"by",
			"case",
			"castas",
			"catch",
			"class",
			"component",
			"contain",
			"continue",
			"default",
			"do",
			"does",
			"else",
			"elseif",
			"exit",
			"extends",
			"final",
			"finally",
			"for",
			"function",
			"greater",
			"if",
			"implements",
			"imp",
			"import",
			"in",
			"include",
			"instanceof",
			"interface",
			"is",
			"java",
			"less",
			"lock",
			"new",
			"package",
			"param",
			"private",
			"property",
			"public",
			"query",
			"remote",
			"required",
			"rethrow",
			"return",
			"static",
			"switch",
			"than",
			"thread",
			"throw",
			"to",
			"transaction",
			"try",
			"type",
			"var",
			"when",
			"while",
			"xor"
		],

		typeKeywords : [
			"any",
			"array",
			"binary",
			"boolean",
			"class",
			"date",
			"double",
			"function",
			"guid",
			"int",
			"integer",
			"numeric",
			"string",
			"struct",
			"query",
			"uuid",
			"void",
			"xml"
		],

		booleans : [
			"true",
			"false",
			"yes",
			"no"
		],

		nullValue : [ "null" ],

		modifiers : [
			"public",
			"private",
			"remote",
			"package",
			"abstract",
			"final",
			"static",
			"required"
		],

		variableScopes : [
			"application",
			"arguments",
			"attributes",
			"caller",
			"client",
			"cgi",
			"form",
			"local",
			"request",
			"server",
			"session",
			"static",
			"super",
			"url",
			"thread",
			"this",
			"variables"
		],

		humanOperators : [
			"and",
			"or",
			"not",
			"xor",
			"mod",
			"eq",
			"neq",
			"lt",
			"le",
			"gt",
			"ge",
			"equal",
			"contains",
			"instanceof",
			"does",
			"eqv",
			"imp"
		],

		operators : [
			"=",
			">",
			"<",
			"!",
			"?",
			":",
			"==",
			"<=",
			">=",
			"!=",
			"<>",
			"&&",
			"||",
			"++",
			"--",
			"+",
			"-",
			"*",
			"/",
			"&",
			"|",
			"^",
			"%",
			"<<",
			">>",
			">>>",
			"+=",
			"-=",
			"*=",
			"/=",
			"&=",
			"|=",
			"^=",
			"%=",
			"<<=",
			">>=",
			">>>=",
			"===",
			"!==",
			"?:",
			"->",
			"=>",
			"b|",
			"b&",
			"b^",
			"b~",
			"b<<",
			"b>>",
			"b>>>"
		],

		symbols : /[=><!~?:&|+\-*\/\^%]+/,
		escapes : /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

		tokenizer : {
			root : [
				// Identifiers and keywords
				[
					/[a-z_$][\w$]*/,
					{
						cases : {
							"@typeKeywords"   : "type.keyword",
							"@keywords"       : "keyword",
							"@booleans"       : "boolean",
							"@nullValue"      : "null",
							"@modifiers"      : "modifier",
							"@variableScopes" : "variable.scope",
							"@humanOperators" : "operator.human",
							"@default"        : "identifier"
						}
					}
				],
				[
					/[A-Z][\w$]*/,
					"type.identifier"
				],

				// Whitespace
				{ include: "@whitespace" },

				// Numbers
				[
					/\d*\.\d+([eE][\-+]?\d+)?/,
					"number.float"
				],
				[
					/0[xX][0-9a-fA-F]+/,
					"number.hex"
				],
				[
					/\d+/,
					"number"
				],

				// Strings
				[
					/"([^"\\]|\\.)*$/,
					"string.invalid"
				],
				[
					/"/,
					{ token: "string.quote", bracket: "@open", next: "@string" }
				],
				[
					/'([^'\\]|\\.)*$/,
					"string.invalid"
				],
				[
					/'/,
					{ token: "string.quote", bracket: "@open", next: "@stringSingle" }
				],

				// Characters
				[
					/'[^\\']'/,
					"string"
				],
				[
					/(')(@escapes)(')/,
					[
						"string",
						"string.escape",
						"string"
					]
				],
				[
					/'/,
					"string.invalid"
				],

				// Delimiters and operators
				[
					/[{}()\[\]]/,
					"@brackets"
				],
				[
					/[<>](?!@symbols)/,
					"@brackets"
				],
				[
					/@symbols/,
					{
						cases : {
							"@operators" : "operator",
							"@default"   : ""
						}
					}
				],

				// Comments
				[
					/\/\*/,
					"comment",
					"@comment"
				],
				[
					/\/\/.*$/,
					"comment"
				],

				// Annotations
				[
					/@\w+/,
					"annotation"
				],

				// Tags (for template files)
				[
					/<[a-zA-Z][\w]*/,
					"tag"
				],
				[
					/<\/[a-zA-Z][\w]*>/,
					"tag"
				],

				// Interpolation
				[
					/#([^#]|##)*#/,
					"string.interpolated"
				]
			],

			comment : [
				[
					/[^\/*]+/,
					"comment"
				],
				[
					/\/\*/,
					"comment",
					"@push"
				],
				[
					"\\*/",
					"comment",
					"@pop"
				],
				[
					/[\/*]/,
					"comment"
				]
			],

			string : [
				[
					/[^\\"#]+/,
					"string"
				],
				[
					/@escapes/,
					"string.escape"
				],
				[
					/\\./,
					"string.escape.invalid"
				],
				[
					/#([^#]|##)*#/,
					"string.interpolated"
				],
				[
					/"/,
					{ token: "string.quote", bracket: "@close", next: "@pop" }
				]
			],

			stringSingle : [
				[
					/[^\\'#]+/,
					"string"
				],
				[
					/@escapes/,
					"string.escape"
				],
				[
					/\\./,
					"string.escape.invalid"
				],
				[
					/#([^#]|##)*#/,
					"string.interpolated"
				],
				[
					/'/,
					{ token: "string.quote", bracket: "@close", next: "@pop" }
				]
			],

			whitespace : [
				[
					/[ \t\r\n]+/,
					"white"
				],
				[
					/\/\*/,
					"comment",
					"@comment"
				],
				[
					/\/\/.*$/,
					"comment"
				]
			]
		}
	},

	template : {
		defaultToken : "invalid",
		tokenPostfix : ".bxm",

		keywords : [
			"abort",
			"abstract",
			"any",
			"array",
			"as",
			"assert",
			"break",
			"by",
			"case",
			"castas",
			"catch",
			"class",
			"component",
			"contain",
			"continue",
			"default",
			"do",
			"does",
			"else",
			"elseif",
			"exit",
			"extends",
			"final",
			"finally",
			"for",
			"function",
			"greater",
			"if",
			"implements",
			"imp",
			"import",
			"in",
			"include",
			"instanceof",
			"interface",
			"is",
			"java",
			"less",
			"lock",
			"new",
			"package",
			"param",
			"private",
			"property",
			"public",
			"query",
			"remote",
			"required",
			"rethrow",
			"return",
			"static",
			"switch",
			"than",
			"thread",
			"throw",
			"to",
			"transaction",
			"try",
			"type",
			"var",
			"when",
			"while",
			"xor"
		],

		typeKeywords : [
			"any",
			"array",
			"binary",
			"boolean",
			"class",
			"date",
			"double",
			"function",
			"guid",
			"int",
			"integer",
			"numeric",
			"string",
			"struct",
			"query",
			"uuid",
			"void",
			"xml"
		],

		booleans : [
			"true",
			"false",
			"yes",
			"no"
		],

		nullValue : [ "null" ],

		modifiers : [
			"public",
			"private",
			"remote",
			"package",
			"abstract",
			"final",
			"static",
			"required"
		],

		variableScopes : [
			"application",
			"arguments",
			"attributes",
			"caller",
			"client",
			"cgi",
			"form",
			"local",
			"request",
			"server",
			"session",
			"super",
			"url",
			"thread",
			"this",
			"variables"
		],

		humanOperators : [
			"and",
			"or",
			"not",
			"xor",
			"mod",
			"eq",
			"neq",
			"lt",
			"le",
			"gt",
			"ge",
			"equal",
			"contains",
			"instanceof",
			"does",
			"eqv",
			"imp"
		],

		operators : [
			"=",
			">",
			"<",
			"!",
			"?",
			":",
			"==",
			"<=",
			">=",
			"!=",
			"<>",
			"&&",
			"||",
			"++",
			"--",
			"+",
			"-",
			"*",
			"/",
			"&",
			"|",
			"^",
			"%",
			"<<",
			">>",
			">>>",
			"+=",
			"-=",
			"*=",
			"/=",
			"&=",
			"|=",
			"^=",
			"%=",
			"<<=",
			">>=",
			">>>=",
			"===",
			"!==",
			"?:",
			"->",
			"=>",
			"b|",
			"b&",
			"b^",
			"b~",
			"b<<",
			"b>>",
			"b>>>"
		],

		symbols : /[=><!~?:&|+\-*\/\^%]+/,
		escapes : /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

		tokenizer : {
			root : [
				// BoxLang script blocks - must come before HTML tags
				[
					/<bx:script[^>]*>/i,
					{ token: "tag.bx", next: "@bxScript" }
				],

				// BoxLang components
				[
					/<(bx:[a-zA-Z]+)/,
					{ token: "tag.bx", next: "@bxTag" }
				],
				[
					/<\/(bx:[a-zA-Z]+)>/,
					"tag.bx"
				],

				// HTML tags
				[
					/<!DOCTYPE/,
					"tag",
					"@doctype"
				],
				[
					/<!--/,
					"comment",
					"@htmlComment"
				],
				[
					/<\/?[a-zA-Z][\w]*/,
					"tag",
					"@htmlTag"
				],

				// BoxLang interpolation
				[
					/#[^#]*#/,
					"string.interpolated"
				],

				// BoxLang comments
				[
					/<!---/,
					"comment",
					"@bxComment"
				],

				// Regular text
				[
					/[^<#]+/,
					"text"
				]
			],

			doctype : [
				[
					/[^>]+/,
					"tag"
				],
				[
					/>/,
					"tag",
					"@pop"
				]
			],

			htmlComment : [
				[
					/[^\\-]+/,
					"comment"
				],
				[
					/-->/,
					"comment",
					"@pop"
				],
				[
					/[\\-]/,
					"comment"
				]
			],

			bxComment : [
				[
					/[^\\-]+/,
					"comment"
				],
				[
					/--->/,
					"comment",
					"@pop"
				],
				[
					/[\\-]/,
					"comment"
				]
			],

			htmlTag : [
				[
					/[ \t\r\n]+/,
					"white"
				],
				[
					/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/,
					[
						"attribute.name",
						"delimiter",
						"attribute.value"
					]
				],
				[
					/\w+/,
					"attribute.name"
				],
				[
					/>/,
					"tag",
					"@pop"
				]
			],

			bxTag : [
				[
					/[ \t\r\n]+/,
					"white"
				],
				[
					/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/,
					[
						"attribute.name",
						"delimiter",
						"attribute.value"
					]
				],
				[
					/\w+/,
					"attribute.name"
				],
				[
					/>/,
					"tag.bx",
					"@pop"
				],
				[
					/\/>/,
					"tag.bx",
					"@pop"
				]
			],

			bxScript : [
				// End script tag - must be first to properly exit
				[
					/<\/(bx:script)>/i,
					{ token: "tag", next: "@pop" }
				],

				// Identifiers and keywords
				[
					/[a-z_$][\w$]*/,
					{
						cases : {
							"@typeKeywords"   : "type.keyword",
							"@keywords"       : "keyword",
							"@booleans"       : "boolean",
							"@nullValue"      : "null",
							"@modifiers"      : "modifier",
							"@variableScopes" : "variable.scope",
							"@humanOperators" : "operator.human",
							"@default"        : "identifier"
						}
					}
				],
				[
					/[A-Z][\w$]*/,
					"type.identifier"
				],

				// Whitespace
				{ include: "@scriptWhitespace" },

				// Numbers
				[
					/\d*\.\d+([eE][\-+]?\d+)?/,
					"number.float"
				],
				[
					/0[xX][0-9a-fA-F]+/,
					"number.hex"
				],
				[
					/\d+/,
					"number"
				],

				// Strings
				[
					/"([^"\\]|\\.)*$/,
					"string.invalid"
				],
				[
					/"/,
					{ token: "string.quote", bracket: "@open", next: "@scriptString" }
				],
				[
					/'([^'\\]|\\.)*$/,
					"string.invalid"
				],
				[
					/'/,
					{ token: "string.quote", bracket: "@open", next: "@scriptStringSingle" }
				],

				// Characters
				[
					/'[^\\']'/,
					"string"
				],
				[
					/(')(@escapes)(')/,
					[
						"string",
						"string.escape",
						"string"
					]
				],
				[
					/'/,
					"string.invalid"
				],

				// Delimiters and operators
				[
					/[{}()\[\]]/,
					"@brackets"
				],
				[
					/[<>](?!@symbols)/,
					"@brackets"
				],
				[
					/@symbols/,
					{
						cases : {
							"@operators" : "operator",
							"@default"   : ""
						}
					}
				],

				// Comments
				[
					/\/\*/,
					"comment",
					"@scriptComment"
				],
				[
					/\/\/.*$/,
					"comment"
				],

				// Annotations
				[
					/@\w+/,
					"annotation"
				],

				// Interpolation (still works inside script blocks)
				[
					/#([^#]|##)*#/,
					"string.interpolated"
				]
			],

			scriptComment : [
				[
					/[^\/*]+/,
					"comment"
				],
				[
					/\/\*/,
					"comment",
					"@push"
				],
				[
					"\\*/",
					"comment",
					"@pop"
				],
				[
					/[\/*]/,
					"comment"
				]
			],

			scriptString : [
				[
					/[^\\"#]+/,
					"string"
				],
				[
					/@escapes/,
					"string.escape"
				],
				[
					/\\./,
					"string.escape.invalid"
				],
				[
					/#([^#]|##)*#/,
					"string.interpolated"
				],
				[
					/"/,
					{ token: "string.quote", bracket: "@close", next: "@pop" }
				]
			],

			scriptStringSingle : [
				[
					/[^\\'#]+/,
					"string"
				],
				[
					/@escapes/,
					"string.escape"
				],
				[
					/\\./,
					"string.escape.invalid"
				],
				[
					/#([^#]|##)*#/,
					"string.interpolated"
				],
				[
					/'/,
					{ token: "string.quote", bracket: "@close", next: "@pop" }
				]
			],

			scriptWhitespace : [
				[
					/[ \t\r\n]+/,
					"white"
				],
				[
					/\/\*/,
					"comment",
					"@scriptComment"
				],
				[
					/\/\/.*$/,
					"comment"
				]
			],

			comment : [
				[
					/[^\/*]+/,
					"comment"
				],
				[
					/\/\*/,
					"comment",
					"@push"
				],
				[
					"\\*/",
					"comment",
					"@pop"
				],
				[
					/[\/*]/,
					"comment"
				]
			],

			string : [
				[
					/[^\\"#]+/,
					"string"
				],
				[
					/@escapes/,
					"string.escape"
				],
				[
					/\\./,
					"string.escape.invalid"
				],
				[
					/#([^#]|##)*#/,
					"string.interpolated"
				],
				[
					/"/,
					{ token: "string.quote", bracket: "@close", next: "@pop" }
				]
			],

			stringSingle : [
				[
					/[^\\'#]+/,
					"string"
				],
				[
					/@escapes/,
					"string.escape"
				],
				[
					/\\./,
					"string.escape.invalid"
				],
				[
					/#([^#]|##)*#/,
					"string.interpolated"
				],
				[
					/'/,
					{ token: "string.quote", bracket: "@close", next: "@pop" }
				]
			],

			whitespace : [
				[
					/[ \t\r\n]+/,
					"white"
				],
				[
					/\/\*/,
					"comment",
					"@comment"
				],
				[
					/\/\/.*$/,
					"comment"
				]
			]
		}
	}
};

// Custom BoxLang theme for Monaco Editor
// Inspired by the BoxLang logo gradient colors
const boxlangTheme$1 = {
	base    : "vs-dark",
	inherit : true,
	rules   : [
		// Keywords - using BoxLang signature cyan-blue
		{ token: "keyword", foreground: "00B4D8", fontStyle: "bold" },
		{ token: "keyword.operator", foreground: "E0E0E0" },

		// Types - using BoxLang cyan-green
		{ token: "type", foreground: "00E5CC" },
		{ token: "type.identifier", foreground: "00E5CC" },
		{ token: "type.keyword", foreground: "00E5CC", fontStyle: "bold" },

		// Modifiers - bright orange for visibility
		{ token: "modifier", foreground: "FF8C00", fontStyle: "bold" },

		// Variable scopes - purple/magenta for distinctiveness
		{ token: "variable.scope", foreground: "DA70D6", fontStyle: "bold" },

		// Human operators - bright yellow for readability
		{ token: "operator.human", foreground: "FFD700", fontStyle: "bold" },

		// Boolean literals - bright green
		{ token: "boolean", foreground: "32CD32", fontStyle: "bold" },

		// Null value - red for attention
		{ token: "null", foreground: "FF6B6B", fontStyle: "bold" },

		// Strings - warm complementary color
		{ token: "string", foreground: "F4A261" },
		{ token: "string.quote", foreground: "F4A261" },
		{ token: "string.escape", foreground: "E76F51" },
		{ token: "string.interpolated", foreground: "00E5CC", fontStyle: "bold" },

		// Numbers - bright cyan for visibility
		{ token: "number", foreground: "4DD0E1" },
		{ token: "number.float", foreground: "4DD0E1" },
		{ token: "number.hex", foreground: "4DD0E1" },

		// Comments - muted blue-gray
		{ token: "comment", foreground: "7B8FA3", fontStyle: "italic" },

		// Operators - light gray for readability
		{ token: "operator", foreground: "E0E0E0" },

		// Identifiers
		{ token: "identifier", foreground: "E0E0E0" },

		// Tags (for templates) - BoxLang blue
		{ token: "tag", foreground: "00B4D8" },
		{ token: "tag.bx", foreground: "00E5CC", fontStyle: "bold" },

		// Attributes - lighter blue
		{ token: "attribute.name", foreground: "81C7D4" },
		{ token: "attribute.value", foreground: "F4A261" },

		// Annotations - BoxLang green
		{ token: "annotation", foreground: "26C6AA" },

		// Brackets - BoxLang signature gradient
		{ token: "delimiter.bracket", foreground: "00E5CC" },
		{ token: "delimiter.parenthesis", foreground: "00B4D8" },
		{ token: "delimiter.square", foreground: "4DD0E1" },

		// Text (for templates)
		{ token: "text", foreground: "E0E0E0" }
	],
	colors : {
		// Main editor - dark navy inspired by logo background
		"editor.background" : "#1B2433",
		"editor.foreground" : "#E0E0E0",

		// Line numbers - muted blue-gray
		"editorLineNumber.foreground"       : "#7B8FA3",
		"editorLineNumber.activeForeground" : "#00B4D8",

		// Cursor - BoxLang cyan
		"editorCursor.foreground" : "#00E5CC",

		// Selection - BoxLang blue with transparency
		"editor.selectionBackground"          : "#00B4D833",
		"editor.inactiveSelectionBackground"  : "#00B4D81A",
		"editor.selectionHighlightBackground" : "#00E5CC26",

		// Indent guides
		"editorIndentGuide.background"       : "#3B434F",
		"editorIndentGuide.activeBackground" : "#00B4D8",

		// Minimap
		"minimap.background" : "#1B2433",

		// Scrollbars
		"scrollbarSlider.background"       : "#3B434F66",
		"scrollbarSlider.hoverBackground"  : "#00B4D866",
		"scrollbarSlider.activeBackground" : "#00E5CC66",

		// Find/replace
		"editor.findMatchBackground"          : "#00E5CC33",
		"editor.findMatchHighlightBackground" : "#00B4D826",
		"editor.findRangeHighlightBackground" : "#00B4D81A",

		// Word highlight
		"editor.wordHighlightBackground"       : "#00B4D826",
		"editor.wordHighlightStrongBackground" : "#00E5CC26"
	}
};

/**
 * BoxLang Monaco Integration Example
 *
 * This file shows how to integrate BoxLang support into an existing Monaco Editor setup.
 * Use this as a reference for your own projects.
 */


/**
 * Initialize BoxLang support for Monaco Editor
 */
function initializeBoxLangSupport$1() {
	// Register BoxLang languages
	monaco__namespace.languages.register( {
		id         : "boxlang",
		extensions : [
			".bx",
			".bxs"
		],
		aliases : [
			"BoxLang Script",
			"boxlang"
		],
		mimetypes : [ "text/x-boxlang" ]
	} );

	monaco__namespace.languages.register( {
		id         : "boxlang-template",
		extensions : [ ".bxm" ],
		aliases    : [
			"BoxLang Template",
			"boxlang-template"
		],
		mimetypes : [ "text/x-boxlang-template" ]
	} );

	// Set language configurations
	monaco__namespace.languages.setLanguageConfiguration( "boxlang", boxlangLanguageConfig$1 );
	monaco__namespace.languages.setLanguageConfiguration( "boxlang-template", boxlangLanguageConfig$1 );

	// Set syntax highlighting
	monaco__namespace.languages.setMonarchTokensProvider( "boxlang", boxlangMonarchTokens$1.script );
	monaco__namespace.languages.setMonarchTokensProvider( "boxlang-template", boxlangMonarchTokens$1.template );

	// Define BoxLang theme
	monaco__namespace.editor.defineTheme( "boxlang-theme", boxlangTheme$1 );

	// Register completion providers
	registerBoxLangCompletions();

	// BoxLang support initialized successfully
}

/**
 * Register completion providers for BoxLang
 */
function registerBoxLangCompletions() {
	// BoxLang Script completions
	monaco__namespace.languages.registerCompletionItemProvider( "boxlang", {
		provideCompletionItems : ( _model, _position ) => {
			const suggestions = [
				// Keywords
				{
					label           : "class",
					kind            : monaco__namespace.languages.CompletionItemKind.Keyword,
					insertText      : "class ${1:name} {\\n\\t$2\\n}",
					insertTextRules : monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
					documentation   : "Create a BoxLang class",
					detail          : "BoxLang class"
				},
				{
					label           : "function",
					kind            : monaco__namespace.languages.CompletionItemKind.Keyword,
					insertText      : "function ${1:name}( ${2:arguments} ) {\\n\\t$3\\n\\treturn ${4:result};\\n}",
					insertTextRules : monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
					documentation   : "Create a BoxLang function",
					detail          : "BoxLang Function"
				},
				{
					label           : "if",
					kind            : monaco__namespace.languages.CompletionItemKind.Keyword,
					insertText      : "if ( ${1:condition} ) {\\n\\t$2\\n}",
					insertTextRules : monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
					documentation   : "If statement",
					detail          : "Control Flow"
				},
				{
					label           : "for",
					kind            : monaco__namespace.languages.CompletionItemKind.Keyword,
					insertText      : "for ( ${1:var i = 1}; ${2:i <= 10}; ${3:i++} ) {\\n\\t$4\\n}",
					insertTextRules : monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
					documentation   : "For loop",
					detail          : "Control Flow"
				},
				{
					label           : "try",
					kind            : monaco__namespace.languages.CompletionItemKind.Keyword,
					insertText      : "try {\\n\\t$1\\n} catch ( ${2:any e} ) {\\n\\t$3\\n}",
					insertTextRules : monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
					documentation   : "Try-catch block",
					detail          : "Error Handling"
				},

				// Common BoxLang functions
				{
					label           : "arrayLen",
					kind            : monaco__namespace.languages.CompletionItemKind.Function,
					insertText      : "arrayLen( ${1:array} )",
					insertTextRules : monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
					documentation   : "Returns the length of an array",
					detail          : "Built-in Function"
				},
				{
					label           : "structKeyExists",
					kind            : monaco__namespace.languages.CompletionItemKind.Function,
					insertText      : 'structKeyExists( ${1:struct}, "${2:key}" )',
					insertTextRules : monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
					documentation   : "Checks if a key exists in a struct",
					detail          : "Built-in Function"
				},
				{
					label           : "queryExecute",
					kind            : monaco__namespace.languages.CompletionItemKind.Function,
					insertText      : 'queryExecute( "${1:sql}", ${2:params}, ${3:options} )',
					insertTextRules : monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
					documentation   : "Execute a SQL query",
					detail          : "Built-in Function"
				}
			];

			return { suggestions };
		}
	} );

	// BoxLang Template completions
	monaco__namespace.languages.registerCompletionItemProvider( "boxlang-template", {
		provideCompletionItems : ( _model, _position ) => {
			const suggestions = [
				{
					label           : "bx:if",
					kind            : monaco__namespace.languages.CompletionItemKind.Snippet,
					insertText      : '<bx:if condition="${1:condition}">\\n\\t$2\\n</bx:if>',
					insertTextRules : monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
					documentation   : "BoxLang conditional tag",
					detail          : "BoxLang Tag"
				},
				{
					label           : "bx:loop",
					kind            : monaco__namespace.languages.CompletionItemKind.Snippet,
					insertText      : '<bx:loop ${1:array="#items#" item="item"}>\\n\\t$2\\n</bx:loop>',
					insertTextRules : monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
					documentation   : "BoxLang loop tag",
					detail          : "BoxLang Tag"
				},
				{
					label           : "bx:script",
					kind            : monaco__namespace.languages.CompletionItemKind.Snippet,
					insertText      : "<bx:script>\\n\\t$1\\n</bx:script>",
					insertTextRules : monaco__namespace.languages.CompletionItemInsertTextRule.InsertAsSnippet,
					documentation   : "BoxLang script block",
					detail          : "BoxLang Tag"
				}
			];

			return { suggestions };
		}
	} );
}

/**
 * Register context menu actions for BoxLang editors
 *
 * @param {monaco.editor.IStandaloneCodeEditor} editor - The editor instance
 */
function registerBoxLangContextMenu( editor ) {
	// Add "Clear Editor" action
	editor.addAction( {
		id                 : "boxlang.clearEditor",
		label              : "Clear Editor",
		contextMenuGroupId : "boxlang",
		contextMenuOrder   : 1.5,
		run                : ( _editor ) => {
			_editor.setValue( "" );
			_editor.focus();
		}
	} );

	// Add "Select All" action (alternative to Ctrl+A)
	editor.addAction( {
		id                 : "boxlang.selectAll",
		label              : "Select All",
		contextMenuGroupId : "boxlang",
		contextMenuOrder   : 1.6,
		keybindings        : [ monaco__namespace.KeyMod.CtrlCmd | monaco__namespace.KeyCode.KeyA ],
		run                : ( _editor ) => {
			_editor.setSelection( _editor.getModel().getFullModelRange() );
		}
	} );
}

/**
 * Create a BoxLang-enabled Monaco Editor instance
 *
 * @param {HTMLElement} container - The DOM element to mount the editor in
 * @param {Object} options - Editor options
 * @returns {monaco.editor.IStandaloneCodeEditor} The editor instance
 */
function createBoxLangEditor$1( container, options = {} ) {
	// Ensure BoxLang support is initialized
	initializeBoxLangSupport$1();

	// Default options for BoxLang
	const defaultOptions = {
		language                   : "boxlang",
		theme                      : "boxlang-theme",
		automaticLayout            : true,
		minimap                    : { enabled: true },
		fontSize                   : 14,
		lineNumbers                : "on",
		roundedSelection           : false,
		scrollBeyondLastLine       : false,
		wordWrap                   : "on",
		folding                    : true,
		foldingStrategy            : "indentation",
		showFoldingControls        : "mouseover",
		matchBrackets              : "always",
		autoIndent                 : "advanced",
		formatOnType               : true,
		formatOnPaste              : true,
		suggestOnTriggerCharacters : true,
		acceptSuggestionOnEnter    : "on",
		tabCompletion              : "on",
		wordBasedSuggestions       : true,
		parameterHints             : { enabled: true },
		quickSuggestions           : {
			other    : true,
			comments : false,
			strings  : false
		}
	};

	// Merge options
	const editorOptions = { ...defaultOptions, ...options };

	// Create the editor
	const editor = monaco__namespace.editor.create( container, editorOptions );

	// Register context menu actions
	registerBoxLangContextMenu( editor );

	// Return the editor
	return editor;
}

/**
 * Get the appropriate language ID for a file based on its extension
 *
 * @param {string} filename - The filename to check
 * @returns {string} The language ID ('boxlang', 'boxlang-template', or 'plaintext')
 */
function getBoxLangLanguage$1( filename ) {
	if ( !filename ) {return "plaintext";}

	const ext = filename.split( "." ).pop()?.toLowerCase();

	switch ( ext ) {
	case "bx":
	case "bxs":
		return "boxlang";
	case "bxm":
		return "boxlang-template";
	default:
		return "plaintext";
	}
}

/**
 * Example usage:
 *
 * import { createBoxLangEditor, getBoxLangLanguage } from './boxlang-monaco-integration';
 *
 * // Create a BoxLang editor
 * const editor = createBoxLangEditor(document.getElementById('editor'), {
 *     value: 'class { function init() { return this; } }',
 *     language: 'boxlang'
 * });
 *
 * // Or set language based on filename
 * const language = getBoxLangLanguage('MyClass.bx');
 * editor.setValue(code);
 * monaco.editor.setModelLanguage(editor.getModel(), language);
 */

/**
 * @boxlang/monaco-editor
 *
 * Monaco Editor language support for BoxLang
 * Provides syntax highlighting, IntelliSense, and themes for BoxLang development
 */


// Export language IDs as constants
const BOXLANG_LANGUAGE_ID = "boxlang";
const BOXLANG_TEMPLATE_LANGUAGE_ID = "boxlang-template";

// Export file extensions
const BOXLANG_EXTENSIONS = [
	".bx",
	".bxs"
];
const BOXLANG_TEMPLATE_EXTENSIONS = [ ".bxm" ];

// Export MIME types
const BOXLANG_MIME_TYPES = [ "text/x-boxlang" ];
const BOXLANG_TEMPLATE_MIME_TYPES = [ "text/x-boxlang-template" ];

// Default export for convenience
var index = {
	initializeBoxLangSupport,
	createBoxLangEditor,
	getBoxLangLanguage,
	languageConfig : boxlangLanguageConfig,
	monarchTokens  : boxlangMonarchTokens,
	theme          : boxlangTheme,
	LANGUAGE_IDS   : {
		SCRIPT   : BOXLANG_LANGUAGE_ID,
		TEMPLATE : BOXLANG_TEMPLATE_LANGUAGE_ID
	},
	EXTENSIONS : {
		SCRIPT   : BOXLANG_EXTENSIONS,
		TEMPLATE : BOXLANG_TEMPLATE_EXTENSIONS
	}
};

exports.BOXLANG_EXTENSIONS = BOXLANG_EXTENSIONS;
exports.BOXLANG_LANGUAGE_ID = BOXLANG_LANGUAGE_ID;
exports.BOXLANG_MIME_TYPES = BOXLANG_MIME_TYPES;
exports.BOXLANG_TEMPLATE_EXTENSIONS = BOXLANG_TEMPLATE_EXTENSIONS;
exports.BOXLANG_TEMPLATE_LANGUAGE_ID = BOXLANG_TEMPLATE_LANGUAGE_ID;
exports.BOXLANG_TEMPLATE_MIME_TYPES = BOXLANG_TEMPLATE_MIME_TYPES;
exports.boxlangLanguageConfig = boxlangLanguageConfig$1;
exports.boxlangMonarchTokens = boxlangMonarchTokens$1;
exports.boxlangTheme = boxlangTheme$1;
exports.createBoxLangEditor = createBoxLangEditor$1;
exports.default = index;
exports.getBoxLangLanguage = getBoxLangLanguage$1;
exports.initializeBoxLangSupport = initializeBoxLangSupport$1;
exports.registerBoxLangContextMenu = registerBoxLangContextMenu;
//# sourceMappingURL=index.js.map
