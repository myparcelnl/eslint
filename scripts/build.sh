#!/usr/bin/env bash

echo "module.exports = require('./dist/index.js').config;\n" > index.js
echo "Created index.js"

tsup-node src/index.ts --minify --target node14 --format cjs,esm --dts
