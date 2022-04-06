import { useState, useEffect } from "react"
import Textarea from "../components/TextArea"
import convert from "../lib/converter";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import Code from "../components/code";


export default function Home() {
  const [convertedText, setConvertedText] = useState();

  const handleChange = (event) => {

    console.log(event.target.value);
    const jsxText = convert(event.target.innerText);

    setConvertedText(jsxText);
  };

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div>
      <h2>Sitecore MVC view to React component converter</h2>
      <div className="row">
        <div class="col">
          <Textarea onChange={handleChange} />
        </div>
        <div class="col">
          <Code code={convertedText} language="javascript" />
        </div>
      </div>
     
    </div>
  )
}
