#!/bin/ash
#ln -s /save/node_modules/* ./node_modules/.
cp /save/node_modules/* ./node_modules/. -R
cat src/intl/ro.json
gatsby develop -H 0.0.0.0