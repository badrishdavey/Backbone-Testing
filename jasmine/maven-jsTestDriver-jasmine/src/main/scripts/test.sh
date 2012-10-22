#!/bin/bash

BASE_DIR=`dirname $0`

java -jar "$BASE_DIR/../test/jsTestDriver/JsTestDriver-patched-1.3.4.b.jar" \
     --config "$BASE_DIR/../test/jasmine/config/jsTestDriver_jasmine.conf" \
     --basePath "$BASE_DIR/.." \
     --tests all \
     --reset \
     --captureConsole \
     --testOutput "%BASE_DIR%/../jsTestDriver-results"