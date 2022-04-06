import data from '../data/commands-matching.json'

export default function convert(cshtmlText) {

    //console.log(`converter executed! data: ${JSON.stringify(data[0])}`);
    data.forEach (mapping => {
        let regEx = new RegExp(mapping.mvcRegEx, mapping.regExFlag)
        console.log(`converter executed! command: ${mapping.mvcRegEx}`);
        cshtmlText = cshtmlText.replace(regEx, mapping.reactReplacement);
        console.log(`converter executed! reactReplacement: ${mapping.reactReplacement}`);
    });

    cshtmlText = 'import * as React from \'react\'\;\nimport { Slot } from \'@uniformdev/canvas-react\'\;\nimport { CorrectObjectNameProps } from \'../lib/models\'\; // replace with the actual model name\n\nexport function CorrectObjectName(props: { model: CorrectObjectNameProps }) {\nreturn <>' + cshtmlText + "</>}";
    console.log(`converter executed! command: ${"hello _there_".replace(/_(.*?)_/, "<div>$1</div>")}`);

    let jsxText = cshtmlText;

    return jsxText;
}
