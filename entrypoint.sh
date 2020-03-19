#!/bin/ash
#ln -s /save/node_modules/* ./node_modules/.
cp /save/node_modules/* ./node_modules/. -R
gatsby develop -H 0.0.0.0