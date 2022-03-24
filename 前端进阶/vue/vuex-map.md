# vuex在composition api中使用映射获取多个state以及getter

## `options api` 中获取 state

在 `options api` 中，如果我们想要在 `computed` 中，同时映射多个 state 作为 `computed`属性，可以使用 `mapState` 函数

```js
  // 假设 state 中，有counter和age两个属性
  computed: {
    // 第一种方式
    ...mapState(['counter', 'age'])
    // 第二种方式
    ...mapState({
      sCounter: state => state.counter,
      sAge: state => state.age
    })
  }
```

## `composition api` 中获取 `state` 和 `getters` 时的问题

在 `composition api` 中，如果我们直接使用 `mapState(['counter', 'height'])`，可以看到它的返回值是一个对象，此对象的属性是一个个函数。

由于在 `composition api` 中，要定义计算属性，是将 `computed`函数中，传入一个函数，因此无法实现 `options api` 中，那种映射多个 `state` 作为计算属性的方式。

## 解决方案

我们可以自己封装一个 `useMapper` 的hooks，用来解决这样的问题。

```js
import { computed } from "vue";
import { useStore } from "vuex";

/**
 * 
 * @param {*} mapper 对象或者数组
 * @param {*} mapFn mapState或者是mapGetters
 * @returns 
 */
export function useMapper(mapper,mapFn) {
  const store = useStore();
  const storeStateFns = mapFn(mapper); // 返回的是一个对象，包含很多函数
  const storeState = [];

  Object.keys(storeStateFns).forEach((fnKey) => {
    const fn = storeStateFns[fnKey].bind({ $store: store }); // 绑定this，是因为它内部的调用是通过this.$store去调用的
    storeState[fnKey] = computed(fn);
  });

  return storeState;
}
```

再封装一个 `useState` 和 `useGetter` 的 hooks

```js
// useState
import { mapState } from "vuex";
import { useMapper } from "./useMapper";

export function useState(mapper) {
  return useMapper(mapper, mapState);
}
```

```js
// useGetter
import { mapGetters } from "vuex";
import { useMapper } from "./useMapper";

export function useGetter(mapper) {
  return useMapper(mapper, mapGetters);
}
```

在 `composition api` 可以这样使用：

```js
  setup() {
    const storeGetter = useGetter(['totalPrice'])
    return {
      ...storeGetter
    }
  }
```
