---
title: 二叉树
category: 数据结构与算法
tag: 二叉树
---

## 二叉树

遇到一道二叉树的题目时的通用思考过程是：

**是否可以通过遍历一遍二叉树得到答案？如果不能的话，是否可以定义一个递归函数，通过子问题（子树）的答案推导出原问题的答案**？

只有后序位置才能通过返回值获取子树的信息。

**那么换句话说，一旦你发现题目和子树有关，那大概率要给函数设置合理的定义和返回值，在后序位置写代码了**。

**每一条二叉树的「直径」长度，就是一个节点的左右子树的最大深度之和**

遇到子树问题，首先想到的是给函数设置返回值，然后在后序位置做文章。

```js
let maxDiameter = 0
var diameterOfBinaryTree = function (root) {
  maxDepth(root)
  return maxDiameter
};

var maxDepth = function (root) {
  if (root === null) {
    return 0
  }
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  let myDiameter = left + right
  maxDiameter = Math.max(myDiameter, maxDiameter)
  return 1 + Math.max(left, right)
}
```

**写树相关的算法，简单说就是，先搞清楚当前 `root` 节点「该做什么」以及「什么时候做」，然后根据函数定义递归调用子节点**

**对于构造二叉树的问题，根节点要做的就是把想办法把自己构造出来**。

## 二叉搜索树 （BST）

特性：

1、对于 BST 的每一个节点 `node`，左子树节点的值都比 `node` 的值要小，右子树节点的值都比 `node` 的值大。

2、对于 BST 的每一个节点 `node`，它的左侧子树和右侧子树都是 BST。

**从做算法题的角度来看 BST，除了它的定义，还有一个重要的性质：BST 的中序遍历结果是有序的（升序）**。

二叉搜索树做题的主要思路就是利用这个特性

对于 BST 相关的问题，你可能会经常看到类似下面这样的代码逻辑：

```java
void BST(TreeNode root, int target) {
    if (root.val == target)
        // 找到目标，做点什么
    if (root.val < target) 
        BST(root.right, target);
    if (root.val > target)
        BST(root.left, target);
}
```



**遇到任何递归型的问题，无非就是灵魂三问**：

**1、这个函数是干嘛的**？

**2、这个函数参数中的变量是什么的是什么**？

**3、得到函数的递归结果，你应该干什么**？

### 验证BST

```c++
boolean isValidBST(TreeNode root) {
    return isValidBST(root, null, null);
}

/* 限定以 root 为根的子树节点必须满足 max.val > root.val > min.val */
boolean isValidBST(TreeNode root, TreeNode min, TreeNode max) {
    // base case
    if (root == null) return true;
    // 若 root.val 不符合 max 和 min 的限制，说明不是合法 BST
    if (min != null && root.val <= min.val) return false;
    if (max != null && root.val >= max.val) return false;
    // 限定左子树的最大值是 root.val，右子树的最小值是 root.val
    return isValidBST(root.left, min, root) 
        && isValidBST(root.right, root, max);
}

```

### BST搜索元素

```c++
TreeNode searchBST(TreeNode root, int target) {
    if (root == null) {
        return null;
    }
    // 去左子树搜索
    if (root.val > target) {
        return searchBST(root.left, target);
    }
    // 去右子树搜索
    if (root.val < target) {
        return searchBST(root.right, target);
    }
    return root;
}
```

### BST插入元素

```js
TreeNode insertIntoBST(TreeNode root, int val) {
    // 找到空位置插入新节点
    if (root == null) return new TreeNode(val);
    // if (root.val == val)
    //     BST 中一般不会插入已存在元素
    if (root.val < val) 
        root.right = insertIntoBST(root.right, val);
    if (root.val > val) 
        root.left = insertIntoBST(root.left, val);
    return root;
}
```

### BST删除元素

```js
TreeNode deleteNode(TreeNode root, int key) {
    if (root == null) return null;
    if (root.val == key) {
        // 这两个 if 把情况 1 和 2 都正确处理了
        if (root.left == null) return root.right;
        if (root.right == null) return root.left;
        // 处理情况 3
        // 获得右子树最小的节点
        TreeNode minNode = getMin(root.right);
        // 删除右子树最小的节点
        root.right = deleteNode(root.right, minNode.val);
        // 用右子树最小的节点替换 root 节点
        minNode.left = root.left;
        minNode.right = root.right;
        root = minNode;
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    }
    return root;
}

TreeNode getMin(TreeNode node) {
    // BST 最左边的就是最小的
    while (node.left != null) node = node.left;
    return node;
}
```

