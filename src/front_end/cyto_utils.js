function contains_element_with_id(elements, id) {
    for (element of elements) {
        // console.log("checking id: " + id + " against element: " + element);
        if (element.id == id) {
            // console.log("Elements match on id: " + id);
            return true;
        }
    }
    return false;
}

function elementsDataEqual(a, b) {
    // var equal = Object.is(a.data, b.data);
    var equal = _.isEqual(a.data, b.data);
    // console.log("Comparing: " + JSON.stringify(a.data, undefined, 4) + " to " + JSON.stringify(b.data, undefined, 4) + " equal: " + equal);
    return equal;
}


function removeElementById(arr, id) {
    // console.log("Arr: " + arr + "id: " + id);
    var i = 0;
    while (i < arr.length) {
        if (arr[i].id === id) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}

function getElementById(arr, id) {
    // console.log("Arr: " + JSON.stringify(arr) + ", id: " + id);
    var i = 0;
    while (i < arr.length) {
        if (arr[i].id === id) {
            return arr[i];
        } else {
            ++i;
        }
    }
    return null;
}


function add_nodes(cy, nodes) {
    // console.log("[Add-Nodes-Fn] adding nodes to cytoscape...");
    // console.log(nodes);
    cy.add(_
        .chain(nodes)
        .map((n) => {
            return {
                group: 'nodes',
                data: n,
                position: n.position
            }
        })
        .value()
    );
}

function add_edges(cy, edges) {
    // console.log("[Add-Edges-Fn] adding edges to cytoscape...");
    // console.log(edges);
    cy.add(_
        .chain(edges)
        .map((e) => {
            return {
                group: 'edges',
                data: e
            }
        })
        .value()
    );
}


// iterate through all the nodes in the existing graph
// have a list of every node in the new graph, call it nodes_to_add
// for every node in the existing graph:
//      if it's also in the new graph:
//          check if they are equal if they are:
//              remove it from the nodes_to_add list
//          if they aren't:
//              add to a new_data list I guess...
//      if it's NOT in the new graph, append to nodes_to_remove
// now, the nodes_to_add should only contain what needs to be added

// repeat the above for edges
function transitionToNewGraph(cy, graph_data, rpos = null) {

    // console.log("Transition to new graph with pos: " + rpos);
    if (rpos == null) {
        rpos = {
            x: cy.width()/2,
            y: cy.height()/2
        };
    }

    // The copy
    const newGraph = JSON.parse(JSON.stringify(graph_data));

    // The wind-up
    var elements_with_new_data = [];
    var nodes_to_add = [...newGraph.nodes];
    var node_ids_to_remove = [];
    var edges_to_add = [...newGraph.edges];
    var edge_ids_to_remove = [];

    // The Pitch
    cy.nodes().forEach(function (ele) {
        var oldId = ele.id();
        var newNode = getElementById(newGraph.nodes, oldId);
        if (contains_element_with_id(nodes_to_add, oldId)) {
            if (elementsDataEqual(cy.getElementById(oldId).json(), newNode)) {
                nodes_to_add = removeElementById(nodes_to_add, oldId);
            } else {
                elements_with_new_data.push(newNode);
            }
        } else {
            node_ids_to_remove.push(oldId);
        }
    })

    // The Solid Line Drive past the Shortstop
    cy.edges().forEach(function (ele) {
        var oldId = ele.id();
        var newEdge = getElementById(newGraph.edges, oldId);
        if (contains_element_with_id(edges_to_add, oldId)) {
            if (elementsDataEqual(cy.getElementById(oldId).json(), newEdge)) {
                edges_to_add = removeElementById(edges_to_add, oldId);
            } else {
                elements_with_new_data.push(newEdge);
            }
        } else {
            edge_ids_to_remove.push(oldId);
        }
    })

    // console.log("Edges to remove: " + edge_ids_to_remove.length);
    // console.log("Nodes to remove: " + node_ids_to_remove.length);
    // console.log("New nodes: " + nodes_to_add.length);
    // console.log("New edges: " + edges_to_add.length);
    // console.log("Elements with new data: " + elements_with_new_data.length);

    cy.startBatch();

    // Change all data
    for (element of elements_with_new_data) {
        cy.getElementById(element.id).data(element.data);
    }

    // Add all nodes
    add_nodes(cy, nodes_to_add, rpos);

    // Add all edges
    add_edges(cy, edges_to_add);

    var nodes_to_remove = cy.nodes().filter((ele) => node_ids_to_remove.includes(ele.id()));
    // console.log("About to remove " + nodes_to_remove.length + " nodes.");
    cy.remove(nodes_to_remove);

    var edges_to_remove = cy.edges().filter((ele) => edge_ids_to_remove.includes(ele.id()));
    cy.remove(edges_to_remove);

    cy.endBatch();
}

function snapToNewGraph(cy, graph_data) {
    const newGraph = JSON.parse(JSON.stringify(graph_data));
    cy.remove(cy.nodes());
    cy.remove(cy.edges());
    add_nodes(cy, [...newGraph.nodes]);
    add_edges(cy, [...newGraph.edges]);
}

function node_to_cyto(n, position) {
    var result = {
        id: n.id,
        contents: n.data,
        position: position
    };
    // console.log(result);
    return result;
}

function downLeft(position, scale, level) {
    return {x: position.x - scale / level, y: position.y + scale};
}

function downRight(position, scale, level) {
    return {x: position.x + scale / level, y: position.y + scale};
}

function cyto_nodes_from_tree(root, position = {x:0, y:0}, level = 1) {
    // console.log("[NodesFromTree] received a tree: ");
    // console.log(root);
    if (root == null) {
        return [];
    } else {
        var nodes = [node_to_cyto(root, position, level)]
        return _.concat(
            nodes, cyto_nodes_from_tree(root.left, downLeft(position, 100, level), level+1),
            cyto_nodes_from_tree(root.right, downRight(position, 100, level), level+1));
    }
}

function cyto_edges_from_tree(root) {
    // console.log("[EdgesFromTree] Creating edges from the tree: ");
    // console.log(root);
    var edges = [];
    if (root == null) {
        return edges;
    }
    if (root.left != null) {
        edges.push({
            source: root.id,
            target: root.left.id,
            id: root.id + "->" + root.left.id,
            type: "LEFT"
        });
    }
    if (root.left != null) {
        edges.push({
            source: root.id,
            target: root.right.id,
            id: root.id + "->" + root.right.id,
            type: "RIGHT"
        });
    }
    // console.log("[EdgesFromTree] did the traversal, here's what we have: ");
    // console.log(edges);
    return _.concat(edges, cyto_edges_from_tree(root.left), cyto_edges_from_tree(root.right));
}

function mutator_state_to_viewer_state(tree) {
    // console.log("[Translation-FN] Need to transform the mutator state: ");
    // console.log(tree);
    return {
        nodes: cyto_nodes_from_tree(tree),
        edges: cyto_edges_from_tree(tree),
    };
}