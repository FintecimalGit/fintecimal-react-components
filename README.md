## Instruction

### Script to compile directory
npx babel ./src/lib/ --out-dir ./dist/ --presets=@babel/preset-env

### Script to compile file
npx babel ./src/lib/example.js --out-file ./dist/example.js --presets=@babel/preset-env