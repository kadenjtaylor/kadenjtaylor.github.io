function Stack(...rest) {
    var store = [...rest.reverse()];
    return {
        push: (v) => store.unshift(v),
        pop: _ => store.shift(),
        peek: _ => store[0],
        size: _ => store.length,
        copy: _ => [...store]
    };
}
