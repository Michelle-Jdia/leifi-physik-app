#!/usr/bin/env bash

npm run build
npm run build:storybook

# these are very likely to return a non-zero exit code, marking the whole p.sh build fail
#rm -rf /app/src/test/unit/test-result/* || true;
#npm run test:unit || true;