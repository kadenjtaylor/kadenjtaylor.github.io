var config = {
    layout: {
        name: "preset",
        // roots: 
        animate: true,
        // animationDuration: 200,
        // ranker: "tight-tree"
        // klay: {
        //     direction: "RIGHT",
        //     // nodePlacement: "INTERACTIVE",
        //     layoutHierarchy: true,
        //     // crossingMinimization: "INTERACTIVE"
        // }
    },
    style: [{
        selector: 'edge',
        style: {
            'curve-style': 'bezier',
            'width': 1,
            'line-color': (ele) => ele.data().type == "LEFT" ? 'red' : 'blue', // left->red, right->blue
            'target-arrow-color': '#000',
            'target-arrow-shape': 'triangle',
        }
    },
    {
        selector: 'node',
        style: {
            'label': (ele) => {
                var contents = ele.data().contents;
                if (contents.value != null) {
                    return contents.value;
                } else if (contents.type != null) {
                    return contents.type;
                } else {
                    return "NODE";
                }
            },
            'color': "black", // label text color
            'background-color': (ele) => {
                // console.log(ele)
                switch(ele.data().contents.type) {
                    case "toggle":
                        if (ele.data().contents.active) {
                            return 'green';
                        } else {
                            return 'red';
                        }
                    case "+":
                        return 'cyan';
                    case "x":
                        return 'orange';
                    case "-":
                        return 'purple';
                    case "IF":
                        return 'magenta';
                    case "BUD":
                        if (ele.data().contents.fuel == 0) {
                            return "grey";
                        }
                        return "purple";
                    case "STEM":
                        return "#006400";
                    case "REQUIRE_INT":
                        return 'green';
                    case "PARAM_BUD":
                        return "orange";
                    default:
                        return 'black';
                }
            }
        }
    }]
}

function int_node(value) {
    return Node.leaf_node({ type: "INT", value: value });
}

function plus_node(a, b) {
    return Node.full_node(
        a, b, { type: "+" }
    );
}

function minus_node(a, b) {
    return Node.full_node(
        a, b, { type: "-" }
    );
}

function multiply_node(a, b) {
    return Node.full_node(
        a, b, { type: "x" }
    );
}

function toggle_node(is_active) {
    return Node.leaf_node(
        { type: "toggle", active: is_active}
    );
}

function if_node(left_false_node, right_true_node, test_node) {
    return Node.full_node(
        Node.full_node(
            left_false_node, right_true_node, {type: "PAIR"}
        ),
        test_node,
        {type: "IF"}
    );
}

function fueled_dbl_stem_bud(fuel) {
    return Node.leaf_node(
        {type: "BUD", fuel: fuel}
    );
}

function paramaterized_bud(trans_fn) {
    return Node.leaf_node(
        {type: "PARAM_BUD", trans_fn: trans_fn}
    )
}

function bud_fn() {
    return Node.full_node(
        require_int_node(),
        paramaterized_bud(bud_fn),
        {type: "+"}
    );
}


function stem_node(bud_fuel) {
    return Node.full_node(
        fueled_dbl_stem_bud(bud_fuel),
        fueled_dbl_stem_bud(bud_fuel),
        {type: "STEM"}
    );
}

function require_int_node() {
    return Node.leaf_node({type: "REQUIRE_INT"});
}

var seed = minus_node(
    plus_node(
        plus_node(
            require_int_node(),
            int_node(7)
        ),
        plus_node(
            int_node(6),
            int_node(5)
        )
    ), if_node(
        int_node(10),
        int_node(20),
        toggle_node(false)
    ));

// var seed = minus_node(
//     paramaterized_bud(bud_fn),
//     paramaterized_bud(bud_fn)
// );

// var seed = bud_node(6);

function evaluate(node) {
    console.log("[EVAL] Evaluating: ");
    console.log(node);

    switch (node.data.type) {
        case "+":
            var left_result = parseInt(evaluate(node.left).data.value);
            var left_int = isNaN(left_result) ? 0 : left_result;
            var right_result = parseInt(evaluate(node.right).data.value);
            var right_int = isNaN(right_result) ? 0 : right_result;
            return Node.leaf_node({
                type: "INT",
                value: left_int + right_int
            });
        case "-":
            var left_result = parseInt(evaluate(node.left).data.value);
            var left_int = isNaN(left_result) ? 0 : left_result;
            var right_result = parseInt(evaluate(node.right).data.value);
            var right_int = isNaN(right_result) ? 0 : right_result;
            return Node.leaf_node({
                type: "INT",
                value: left_int - right_int
            });
        case "x":
            var left_result = evaluate(node.left);
            var right_result = evaluate(node.right);
            return Node.leaf_node({
                type: "INT",
                value: left_result.data.value * right_result.data.value
            });
        case "toggle":
            var is_active = node.data.active;
            // console.log("Toggle is currently active?: " + is_active);
            return toggle_node(!is_active);
        case "IF":
            var choice = node.right.data.active;
            if (choice) {
                return evaluate(node.left.right);
            } else {
                return evaluate(node.left.left);
            }
        case "BUD":
            if (node.data.fuel <= 0) {
                return node;
            } else {
                return stem_node(node.data.fuel-1);
            }
        case "REQUIRE_INT":
            console.log("Okay, what am I missing?");
            var amount = prompt(node.data.type + ': ??"', "0");
            var intAmount = parseInt(amount);
            if (isNaN(intAmount)) {
                return Node.leaf_node({
                    type: "INT",
                    value: 0
                });
            } else {
                return Node.leaf_node({
                    type: "INT",
                    value: Math.round(intAmount)
                });
            }
        case "PARAM_BUD":
            return node.data.trans_fn();
        default:
            return node;
    }
}


// ---------------- Everything above this line is a grammar ----------------


// ------------------------ [UI FUNCTIONS] ------------------------------

function size_at_state(id) {
    return cyto_nodes_from_tree(mutator.state(id)).length;
}

function depth() {
    return mutator.depth();
}

function overlay() {
    return {
        id: current_id,
        depth: depth(),
        nodes: size_at_state(current_id),
        history: mutator.history_dump()
    }
}

function update_overlay_with(data) {
    document.getElementById("overlay").textContent = JSON.stringify(data, null, 2);
}


// ---------------- [UI STATE] ---------------------------------------------- 



// UI Cache
var viewer_states_by_id = {};


var mutator = new Mutator(seed, evaluate);
var current_id = mutator.id();
var mutator_state = mutator.state(current_id);

viewer_states_by_id[current_id] = mutator_state_to_viewer_state(mutator_state);


function decide(decision, rpos) {
    console.log("Decision made: " + decision);
    var next_id = mutator.next(decision);
    if (current_id == next_id) {
        // alert("End of the line!");
        console.log("End of the line!")
    } else {
        current_id = next_id;
        if (viewer_states_by_id[current_id] == null) {
            var next_state = mutator.state(current_id);
            // console.log("[Decide-FN] Calculated next_state:");
            // console.log(next_state);
            viewer_states_by_id[current_id] = mutator_state_to_viewer_state(next_state);
        }
        viewer.updateWithState(viewer_states_by_id[current_id], rpos);
        update_overlay_with(overlay());
    }
}

function back() {
    // console.log("Going back!");
    var back_id = mutator.back();
    if (current_id == back_id) {
        // alert("You're at the beginning!");
        console.log("You're at the beginning!")
    } else {
        current_id = back_id;
        if (viewer_states_by_id[current_id] == null) {
            var back_state = mutator.state(current_id);
            viewer_states_by_id[current_id] = mutator_state_to_viewer_state(back_state);
        }
        viewer.updateWithState(viewer_states_by_id[current_id]);
        update_overlay_with(overlay());
    }
}

var viewer = new Viewer(decide, back, config);

viewer.updateWithState(viewer_states_by_id[current_id]);
update_overlay_with(overlay());