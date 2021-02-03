class Mutator {

    constructor(start_state, eval_fn) {
        // console.log("[Mutator] Seeded with initial_state: ");
        // console.log(start_state);
        this.statesById = {}
        var inital_state = {
            state_id: Mutator.hash_state(start_state),
            state_num: 0
        };
        this.history = Stack();
        this.history.push(inital_state);
        // console.log("[Mutator] Created history rooted at initial_state");
        // console.log(this.history);
        this.statesById[this.id()] = start_state;
        // console.log("[Mutator] Stored initial_state under key: " + this.id());
        this.eval_fn = eval_fn;
    }

    id() {
        return this.history.peek().state_id;
    }

    state(id) {
        return this.statesById[id];
    }

    current_state() {
        return this.state(this.id());
    }

    depth() {
        return this.history.peek().state_num;
    }

    history_dump() {
        return this.history.copy();
    }

    next(node_id) {

        var current_id = this.id();
        var current = this.current_state();
        var nodes = the_df_lr_traversal_of(current);

        var selection = _
            .chain(nodes)
            .filter((node) => node_has_id(node, node_id))
            .head()
            .value();

        // the evaluation
        var result = this.eval_fn(selection);

        // The progression
        /* TODO:
            This piece can be WAY fancier and more efficient. For example:
                - instead of checking that the total states are equal, we
                    could check only the affected subtrees for extra speed
                - we could hash the states as they come in and save them.
                    That way, we don't have to check equality every time,
                    just check for conflicts with our dict of statesByHash
        */
        var next_state = replace_subtree_by_id(current, node_id, result);
        var equal_to_last = _.isEqual(this.state(this.id()), next_state);

        // If the state is new, return it - OTW we're at a dead end,
        // in which case we return the current_id
        if (equal_to_last) {
            return current_id;
        }

        // Compute id for new state
        var next_id = Mutator.hash_state(next_state);
        // Cache the state
        this.statesById[next_id] = next_state;
        // Change history
        this.history.push({
            state_id: next_id,
            state_num: this.depth() + 1
        });
        return next_id;
    }

    back() {
        // console.log("Before Back:");
        // console.log(this.history);
        if (this.history.size() > 1) {
            this.history.pop();
        }
        // console.log("After Back:");
        // console.log(this.history);
        return this.id();
    }

    /*
    This is a bit subtle, but this is actually where we define equality
        - I'll have to keep that in mind.
    For now, we'll just return a  randomUUID knowing that we're missing
    out on some cool features (like a "can I get there from here?" button).
*/
    static hash_state(root) {
        console.log("STEP 2: Hash this: ");
        console.log(root);
        console.log(root.hash());
        return root.hash().toString();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}