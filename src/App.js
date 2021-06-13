import "./styles.css";
import HTML from "./Images/HTML_Logo.jpg";
import CSS from "./Images/CSS_Logo.jpg";
import JS from "./Images/JavaScript_Logo.png";
import React from "./Images/React-Logo.png";
import Image from "./Components/Image";
export default function App() {
  return (
    <div className="App">
      <Image src={HTML} />
      <Image src={CSS} />
      <Image src={JS} />
      <Image src={React} />
    </div>
  );
}
