const fs = require('fs')
const svgr = require('@svgr/core').default;
const { optimize } = require('svgo');
console.log(svgr)
let dir = "../sources/singer_logos";

fs.readdirSync(dir).forEach(f => {
    if (f.endsWith(".svg")) {
        svgr(fs.readFileSync(dir + "/" + f), { icon: true }, { componentName: 'Svg' }).then(jsCode => {
            fs.writeFileSync(dir + "/" + f.replace('.svg', '.tsx'), jsCode)
        })
    }
});
