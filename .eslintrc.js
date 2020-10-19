module.exports = {
  'extends': ['react-app'],
  rules: {
    'array-bracket-spacing': 2,           // 强制数组方括号中使用一致的空格
    'block-spacing': 2,                   // 强制在单行代码块中使用一致的空格
    'brace-style': 2,                     // 强制在代码块中使用一致的大括号风格
    'comma-spacing': 2,                   // 强制在逗号前后使用一致的空格
    'comma-style': 2,                     // 强制使用一致的逗号风格
    'computed-property-spacing': 2,       // 强制在计算的属性的方括号中使用一致的空格
    'eol-last': 2,                        // 强制文件末尾至少保留一行空行
    'indent': [2, 2],                          // 强制使用一致的缩进
    'jsx-quotes': ["error", "prefer-single"],                      // 强制在 JSX 属性中一致地使用双引号或单引号
    'key-spacing': 2,                     // 强制在对象字面量的属性中键和值之间使用一致的间距
    'keyword-spacing': 2,                 // 强制在关键字前后使用一致的空格
    'linebreak-style': 2,                 // 强制使用一致的换行风格
    'lines-around-comment': 2,            // 要求在注释周围有空行
    'new-cap': 2,                         // 要求构造函数首字母大写
    'new-parens': 2,                      // 要求调用无参构造函数时有圆括号
    'newline-per-chained-call': 2,        // 要求方法链中每个调用都有一个换行符
    'no-lonely-if': 2,                    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-mixed-spaces-and-tabs': 2,        // 不允许空格和 tab 混合缩进
    'no-multiple-empty-lines': 2,         // 不允许多个空行
    'no-negated-condition': 2,            // 不允许否定的表达式
    'no-spaced-func': 2,                  // 禁止 function 标识符和括号之间出现空格
    'no-trailing-spaces': 2,              // 禁用行尾空格
    'no-whitespace-before-property': 2,   // 禁止属性前有空白
    'object-curly-newline': 2,            // 强制花括号内换行符的一致性
    'object-curly-spacing': ["error", "always"],            // 强制在花括号中使用一致的空格
    'operator-assignment': 2,             // 要求或禁止在可能的情况下要求使用简化的赋值操作符
    'operator-linebreak': 2,              // 强制操作符使用一致的换行符
    'sort-vars': 2,                       // 要求同一个声明块中的变量按顺序排列
    'space-before-blocks': 2,             // 强制在块之前使用一致的空格
    'space-before-function-paren': [2, "never"],     // 强制在 function的左括号之前使用一致的空格
    'space-in-parens': 2,                 // 强制在圆括号内使用一致的空格
    'space-infix-ops': 2,                 // 要求操作符周围有空格
    'space-unary-ops': 2,                 // 强制在一元操作符前后使用一致的空格
    'spaced-comment': 2,                  // 强制在注释中 // 或 /* 使用一致的空格
    'arrow-spacing': "error",           // 要求箭头函数的箭头之前或之后有空格 (arrow-spacing)
    'no-const-assign': 2,
    'no-var': 2,
  }
}
