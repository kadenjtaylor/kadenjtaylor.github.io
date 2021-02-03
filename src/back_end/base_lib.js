function first_of(sequence) {
    return _
        .chain(sequence)
        .head();
}

function the_df_lr_traversal_of(root) {
    if (root == null) {
        return [];
    }
    return _.flattenDeep([
        root,
        the_df_lr_traversal_of(root.left),
        the_df_lr_traversal_of(root.right)]);
}

function filter_sequence_by(seqeunce, fn) {
    return _
        .chain(seqeunce)
        .filter((a) => fn(a))
        .value();
}

function node_has_id(node, node_id) {
    // (= (:id (data tree) node_id)
    // console.log("[Node-Has-ID] checking this node:");
    // console.log(node);
    // console.log("[Node-Has-ID] for id:");
    // console.log(node_id);
    if (node == null || node_id == null) {
        return false;
    }
    if (node_id == node.id) {
        return true;
    }
    return false;
}

function parent_of(node, fn) {
    if (fn(left(node)) || fn(right(node))) {
        return true;
    }
    return false;
}

function replace_subtree_by_id(node, node_id, replacement) {
    if (node == null) {
        return null;
    }
    if (node_has_id(node, node_id)) {
        return replacement;
    } else {
        return new Node(
            node.id,
            replace_subtree_by_id(node.left, node_id, replacement),
            replace_subtree_by_id(node.right, node_id, replacement),
            node.data
        );
    }
}

