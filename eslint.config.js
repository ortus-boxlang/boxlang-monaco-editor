import globals from "globals";
import jsdoc from "eslint-plugin-jsdoc";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores : [
			"node_modules/**",
			"dist/**",
			"coverage/**",
			"*.min.js",
			"build/**",
			".git/**",
			"examples/**/*.html",
			"**/*.d.ts"
		]
	},
	{
		files           : [ "**/*.{js,mjs,cjs,ts}" ],
		plugins         : { jsdoc: jsdoc },
		languageOptions : {
			globals : {
				...globals.browser,
				...globals.node,
				...globals.es2020
			}
		},
		rules : {
			"array-bracket-spacing" : [
				"error",
				"always",
				{
					"singleValue"     : true,
					"arraysInArrays"  : true,
					"objectsInArrays" : true
				}
			],
			"array-bracket-newline" : [
				"error",
				{ "multiline": true }
			],
			"array-element-newline" : [
				"error",
				{ "multiline": true, "minItems": 2 }
			],
			"camelcase" : [
				"error",
				{ "properties": "always" }
			],
			"indent" : [
				"error",
				"tab",
				{ ignoredNodes: [ "TemplateLiteral" ] }
			],
			"keyword-spacing" : [
				"error",
				{ "after": true, "before": true }
			],
			"key-spacing" : [
				"error",
				{
					"singleLine" : {
						"beforeColon" : false,
						"afterColon"  : true
					},
					"multiLine" : {
						"beforeColon" : true,
						"afterColon"  : true,
						"align"       : "colon"
					}
				}
			],
			"no-trailing-spaces" : [
				"error",
				{
					"skipBlankLines" : false,
					"ignoreComments" : false
				}
			],
			"no-fallthrough"       : "error",
			"object-curly-newline" : [
				"error",
				{ "multiline": true }
			],
			"object-curly-spacing" : [
				"error",
				"always",
				{
					"objectsInObjects" : true,
					"arraysInObjects"  : true
				}
			],
			"object-property-newline" : [
				"error",
				{ "allowAllPropertiesOnSameLine": true }
			],
			"prefer-promise-reject-errors" : "off",
			"semi"                         : [
				"error",
				"always"
			],
			"space-in-parens" : [
				"error",
				"always"
			],
			"space-before-function-paren" : [
				"error",
				{
					"anonymous"  : "never",
					"named"      : "never",
					"asyncArrow" : "never"
				}
			],

			"curly"                        : "error",
			"new-parens"                   : "error",
			"no-redeclare"                 : "error",
			"no-unused-expressions"        : "warn",
			"no-var"                       : "error",
			"prefer-arrow-callback"        : "error",
			"prefer-const"                 : "warn",
			"prefer-promise-reject-errors" : "off",
			"quotes"                       : [
				"error",
				"double",
				{
					"avoidEscape"           : true,
					"allowTemplateLiterals" : true
				}
			],
			"spaced-comment"          : "error",
			"jsdoc/check-alignment"   : "error",
			"jsdoc/check-param-names" : "error",
			"jsdoc/check-indentation" : "off",

			// Performance-related rules
			"no-console"                   : "warn",
			"no-debugger"                  : "error",
			"no-alert"                     : "error",
			"no-eval"                      : "error",
			"no-implied-eval"              : "error",
			"no-new-func"                  : "error",
			"no-script-url"                : "error",
			"no-caller"                    : "error",
			"no-extend-native"             : "error",
			"no-extra-bind"                : "error",
			"no-iterator"                  : "error",
			"no-lone-blocks"               : "error",
			"no-loop-func"                 : "error",
			"no-multi-str"                 : "error",
			"no-new"                       : "error",
			"no-new-wrappers"              : "error",
			"no-octal-escape"              : "error",
			"no-proto"                     : "error",
			"no-return-assign"             : "error",
			"no-self-compare"              : "error",
			"no-sequences"                 : "error",
			"no-throw-literal"             : "error",
			"no-unmodified-loop-condition" : "error",
			"no-unused-vars"               : [
				"error",
				{ "argsIgnorePattern": "^_" }
			],
			"no-useless-call"       : "error",
			"no-useless-concat"     : "error",
			"no-useless-escape"     : "error",
			"no-useless-return"     : "error",
			"no-void"               : "error",
			"no-with"               : "error",
			"prefer-rest-params"    : "error",
			"prefer-spread"         : "error",
			"prefer-template"       : "warn",
			"array-callback-return" : "error",
			"consistent-return"     : "error",
			"dot-notation"          : "error",
			"eqeqeq"                : [
				"error",
				"always"
			],
			"no-empty-function" : "warn",
			"no-magic-numbers"  : [
				"warn",
				{
					"ignore" : [
						-1,
						0,
						1,
						2
					],
					"ignoreArrayIndexes" : true,
					"enforceConst"       : true
				}
			],
			"radix" : "error"
		}
	},
	{
		files           : [ "**/*.{js,mjs,cjs,ts}" ],
		plugins         : { jsdoc: jsdoc },
		languageOptions : {
			globals : {
				...globals.browser,
				...globals.node,
				...globals.es2020
			}
		},
		rules : {
			"array-bracket-spacing" : [
				"error",
				"always",
				{
					"singleValue"     : true,
					"arraysInArrays"  : true,
					"objectsInArrays" : true
				}
			],
			"array-bracket-newline" : [
				"error",
				{ "multiline": true }
			],
			"array-element-newline" : [
				"error",
				{ "multiline": true, "minItems": 2 }
			],
			"camelcase" : [
				"error",
				{ "properties": "always" }
			],
			"indent" : [
				"error",
				"tab",
				{ ignoredNodes: [ "TemplateLiteral" ] }
			],
			"keyword-spacing" : [
				"error",
				{ "after": true, "before": true }
			],
			"key-spacing" : [
				"error",
				{
					"singleLine" : {
						"beforeColon" : false,
						"afterColon"  : true
					},
					"multiLine" : {
						"beforeColon" : true,
						"afterColon"  : true,
						"align"       : "colon"
					}
				}
			],
			"no-trailing-spaces" : [
				"error",
				{
					"skipBlankLines" : false,
					"ignoreComments" : false
				}
			],
			"no-fallthrough"       : "error",
			"object-curly-newline" : [
				"error",
				{ "multiline": true }
			],
			"object-curly-spacing" : [
				"error",
				"always",
				{
					"objectsInObjects" : true,
					"arraysInObjects"  : true
				}
			],
			"object-property-newline" : [
				"error",
				{ "allowAllPropertiesOnSameLine": true }
			],
			"prefer-promise-reject-errors" : "off",
			"semi"                         : [
				"error",
				"always"
			],
			"space-in-parens" : [
				"error",
				"always"
			],
			"space-before-function-paren" : [
				"error",
				{
					"anonymous"  : "never",
					"named"      : "never",
					"asyncArrow" : "never"
				}
			],

			"curly"                        : "error",
			"new-parens"                   : "error",
			"no-redeclare"                 : "error",
			"no-unused-expressions"        : "warn",
			"no-var"                       : "error",
			"prefer-arrow-callback"        : "error",
			"prefer-const"                 : "warn",
			"prefer-promise-reject-errors" : "off",
			"quotes"                       : [
				"error",
				"double",
				{
					"avoidEscape"           : true,
					"allowTemplateLiterals" : true
				}
			],
			"spaced-comment"          : "error",
			"jsdoc/check-alignment"   : "error",
			"jsdoc/check-param-names" : "error",
			"jsdoc/check-indentation" : "off",

			// Performance-related rules
			"no-console"                   : "warn",
			"no-debugger"                  : "error",
			"no-alert"                     : "error",
			"no-eval"                      : "error",
			"no-implied-eval"              : "error",
			"no-new-func"                  : "error",
			"no-script-url"                : "error",
			"no-caller"                    : "error",
			"no-extend-native"             : "error",
			"no-extra-bind"                : "error",
			"no-iterator"                  : "error",
			"no-lone-blocks"               : "error",
			"no-loop-func"                 : "error",
			"no-multi-str"                 : "error",
			"no-new"                       : "error",
			"no-new-wrappers"              : "error",
			"no-octal-escape"              : "error",
			"no-proto"                     : "error",
			"no-return-assign"             : "error",
			"no-self-compare"              : "error",
			"no-sequences"                 : "error",
			"no-throw-literal"             : "error",
			"no-unmodified-loop-condition" : "error",
			"no-unused-vars"               : [
				"error",
				{ "argsIgnorePattern": "^_" }
			],
			"no-useless-call"       : "error",
			"no-useless-concat"     : "error",
			"no-useless-escape"     : "error",
			"no-useless-return"     : "error",
			"no-void"               : "error",
			"no-with"               : "error",
			"prefer-rest-params"    : "error",
			"prefer-spread"         : "error",
			"prefer-template"       : "warn",
			"array-callback-return" : "error",
			"consistent-return"     : "error",
			"dot-notation"          : "error",
			"eqeqeq"                : [
				"error",
				"always"
			],
			"no-empty-function" : "warn",
			"no-magic-numbers"  : [
				"warn",
				{
					"ignore" : [
						-1,
						0,
						1,
						2
					],
					"ignoreArrayIndexes" : true,
					"enforceConst"       : true
				}
			],
			"radix" : "error"
		}
	},
	{
		files : [
			"**/test*.js",
			"**/demo/**/*.js"
		],
		rules : {
			"no-console"     : "off",
			"no-unused-vars" : "off"
		}
	}
];
