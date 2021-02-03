function creating_nodes() {
    var seed = Node.full_node(
        Node.leaf_node({ type: "INT", value: 7 }),
        Node.leaf_node({ type: "INT", value: 7 }),
        { attempt_num: 0 }
    );
    var mutator = new Mutator(seed);
    var i = mutator.id();
    var s = mutator.state(i);
    return assert_or_else(
        "The Mutator's current state Should be the initial_state",
        seed, s);
}

