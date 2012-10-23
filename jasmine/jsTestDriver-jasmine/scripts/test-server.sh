#!/bin/bash

BASE_DIR=`dirname $0`
PORT=9876

echo "Starting JsTestDriver Server (http://code.google.com/p/js-test-driver/)"
echo "Please open the following url and capture one or more browsers:"
echo "http://localhost:$PORT"

java -jar "$BASE_DIR/../test/jsTestDriver/jsTestDriver-patched-1.3.4.b.jar" \
     --port $PORT \
     --browserTimeout 20000 \
     --config "$BASE_DIR/../test/jasmine/config/jsTestDriver_jasmine.conf" \
     --basePath "$BASE_DIR/.."
