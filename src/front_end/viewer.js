class Viewer {

    constructor(decision_fn, back_fn, config) {
        this.config = config;
        this.cy = cytoscape({
            container: document.getElementById('cy'), // container to render in, assumed present
            elements: config.elements,
            style: config.style,
            layout: config.layout
        });
        this.registerListeners(decision_fn, back_fn);
    }

    registerListeners(decision_fn, back_fn) {
        console.log("Registering listeners for user input events \"back\" and \"decide\".");
        // If the user taps on a node, we replace-with-eval that node
        this.cy.on('tap', 'node', (evt) => {
            // console.log(evt);
            return decision_fn(
                evt.target.id(),
                {
                    x: evt.renderedPosition.x,
                    y: evt.renderedPosition.y
                });
        });
        this.cy.on('cxttap', 'node', (evt) => {
            // console.log(evt);
            console.log(evt.target.data());
        });
        // If the user taps on the background, we go back!
        this.cy.on('tap', (evt) => {
            if (evt.target == this.cy) {
                back_fn();
            }
        });
        // I also thought it would be fun to add a binding to backspace
        document.addEventListener('keydown', (event) => {
            if (event.keyCode == 8) {
                back_fn();
            }
        });
    }

    updateWithState(graph_data, new_node_position = null) {
        // console.log("[Viewer] Graph data to update with: ");
        // console.log(graph_data);
        snapToNewGraph(this.cy, graph_data);
        this.cy.layout(this.config.layout).run();
    }
}