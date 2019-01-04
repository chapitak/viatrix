cd home/src/plugins
node injector.js
cd ../..
npm run build
rm -rf ../../web_root
cp -r dist ../../web_root
