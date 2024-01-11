import React, {useState} from "react";

function App() {
  const [fucked, setFucked] = useState(false);

  console.log("Subscribed status:", fucked);


  return (
    <section>  
      <p>Hello Shalaina!</p>
      <button onClick={() => setFucked(!fucked)}>
        {fucked ? "You have fucked me" : "Fuck Me"}
      </button>
    </section>
  )
}

export default App;
