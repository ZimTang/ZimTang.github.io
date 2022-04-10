# vim-note

## 系统剪贴

```
#将vim中的代码或者文字复制到剪切板
"+yy
"+nyy
#将系统剪切板中的代码或者文字复制到vim中
"+p
"+P
```

## 行内操作

- 搜索字母:
  - f
  - F
  - t
  - T
- 快速继续行内搜索 ;
- shift+d: 删除后面的
- shift+c 删除后面的并进入 insert 模式
- shift+s: 删除整行

- 组合按键：
  - df word
  - dt word
  - dF word
  - dt word
  - cf word
  - ct word
  - cF word
  - cT word

## 段落操作

- c+i+p 删除整个段落并进入 insert 模式
- { 往上段落
- } 往下段落

## 分屏操作

- <C-w>s 垂直分屏
- <C-w>v 水平分屏
- <C-w>e 分屏平均分布
- <C-w>o 关闭所有分屏

## 文件之间快速跳转

- <C-^> 缓冲区文件跳转
- <C-o> <C-i> 跳转到上次编辑的位置

### mark

- m+字符 打标记
- '+字符 跳转到标记
