import { useState } from "react"
import Textarea from "../components/TextArea"
import convert from "../lib/converter";

export default function Home() {
  const [convertedText, setConvertedText] = useState();

  const handleChange = (event) => {

    console.log(event.target.value);
    const jsxText = convert(event.target.value);
    
    setConvertedText(jsxText);
  };

  return (
    <div className="h-100 mh-100">
      <h2>Converter!</h2>
      <pre><code>
      <Textarea onChange={handleChange}/>
      <Textarea textToUse={convertedText} />
      </code></pre>

    </div>
  )
}
