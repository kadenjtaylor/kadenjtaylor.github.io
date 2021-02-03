class Node {
    constructor(id, left, right, data) {
        this.id = id;
        this.left = left;
        this.right = right;
        this.data = data;
        return Object.freeze(this);
    }

    hash() {
        return randomUUID();
        var left_hash = this.left == null ? "" : this.left.hash();
        var right_hash =this.right == null ? "" : this.right.hash();
        return hash_node(JSON.stringify({
            l:left_hash,
            r:right_hash,
            d:this.data
        }));
    }

    static full_node(left, right, data) {
        return new Node(randomUUID(), left, right, data);
    }

    static leaf_node(data) {
        return new Node(randomUUID(), null, null, data);
    }
}

function hash_node(target) {
    var hash = 0;
    if (target.length == 0) {
        return hash;
    }
    for (var i = 0; i < target.length; i++) {
        var char = target.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

function randomUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}