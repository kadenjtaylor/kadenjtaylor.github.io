#!/bin/bash

OUTPUT_FILE="out/elm.js"
DEPLOY_DIR="docs"

# create the html file that serves as the homepage
elm make src/Main.elm  --output="$OUTPUT_FILE"

# Ensure deploy directory exists, creating it if it doesn't
mkdir -p $DEPLOY_DIR

# "deploy" it to the docs/ directory, where it can be imported by html files
mv --debug "$OUTPUT_FILE" $DEPLOY_DIR