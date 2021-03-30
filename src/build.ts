import mappings from "./mappings/lib/index";
import {allSources} from "./sources/sources";

const fs = require('fs');

fs.writeFileSync(__dirname + "/../build/mappings.json", JSON.stringify(mappings, null, 3));
fs.writeFileSync(__dirname + "/../build/sources.json", JSON.stringify(allSources.map(src => {
    //temporary remove all JSX nodes
    src.pic = null;
    src.configParameters = src.configParameters.map(cfgParam => {
        cfgParam.documentation = null;
        return cfgParam;
    });
    src.collectionParameters = src.collectionParameters.map(param => {
        param.documentation = null;
        return param;
    })
    return src;
}), null, 3));

// fs.writeFileSync(__dirname + '/../build/singer_check', allSources
//     .filter((src) => src.isSingerType)
//     .map((src) => {
//         let tap = src.id.replace("singer-", "");
//         return `pip3 install ${tap} 2>/dev/null >/dev/null; echo "${tap} $?"; pip-autoremove -y ${tap} 2>/dev/null >/dev/null`
//     }).join("\n")
// );