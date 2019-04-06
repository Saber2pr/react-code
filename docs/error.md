# Errors

> some errors knowed.

# keywords had childstr:[xxx]

在输入的 keywords 数组中，不能存在有其他元素为子串的元素，例如

```json
[
  {
    "word": "typeof",
    "color": "#bb75b2"
  },
  {
    "word": "type",
    "color": "#bb75b2"
  }
]
```

在元素 typeof 中存在 type 子串，这将导致 highlight 程序无法正常工作。

解决办法：

在 word 字符串前或者后加一个空格字符，例如

```json
[
  {
    "word": "typeof",
    "color": "#bb75b2"
  },
  {
    "word": "type ",
    "color": "#bb75b2"
  }
]
```

即 "typeof" has child str "type" -> true

即 "typeof" has child str "type " -> false
