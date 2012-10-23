#!/bin/bash

BASE_DIR=`dirname $0`

java -jar "$BASE_DIR/../../test/jsTestDriver/jsTestDriver-patched-1.3.4.b.jar" \
     --config "$BASE_DIR/../../test/js/jasmine/config/jsTestDriver_jasmine.conf" \
     --basePath "$BASE_DIR/.." \
     --tests all \
     --reset \
     --captureConsole \
     --testOutput "%BASE_DIR%/../../../target/jsTestDriver"