function syntax_highlight(json_str) {
    return json_str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
            function (match) {
                var cls = 'number';
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'key';
                    } else {
                        cls = 'string';
                    }
                } else if (/true|false/.test(match)) {
                    cls = 'boolean';
                } else if (/null/.test(match)) {
                    cls = 'null';
                }
                return '<span class="' + cls + '">' + match + '</span>';
            }
        );
}

function output(inp) {
    document.body.appendChild(document.createElement('pre')).innerHTML = inp;
}

function run_test(test_fn) {
    return {
        name: test_fn.name,
        outcome: test_fn()
    };
}

function run_all_tests(test_fns) {
    console.log("[TestRunner] Running " + test_fns.length + " tests...");
    results = []
    test_fns.forEach((t)=>results.push(run_test(t)));
    return results;
}

// Add the contents of options[0] to #foo:
var test_results = run_all_tests([
    creating_nodes
]);

// var test_root = document.getElementById('test_root');
// var thing = document.createElement('div');
// thing.innerHTML = "<p>Did <code>this</code> work??</p>"
// test_root.appendChild(thing);

var output_string = JSON.stringify(test_results, null, 4);

output(syntax_highlight(output_string));


