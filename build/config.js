const Path = require('path');
const ExampleDir = Path.resolve(__dirname,'../examples');
const SourceDir = Path.resolve(__dirname,'../src');
const DistDir = Path.join(__dirname,'../dist'); 
module.exports = {
    ExampleDir,
    SourceDir,
    DistDir
}