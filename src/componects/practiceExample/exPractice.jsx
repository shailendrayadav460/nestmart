// import React, { useState, useEffect, useRef } from 'react';




// function ExPractice() {
//   const [count, setCount] = useState(1);
//   const renderCount = useRef(0); // 🧠 Store render count

//   useEffect(() => {
//     renderCount.current += 1;
//   });

//   return (
//     <div>
//       <p>Clicked: {count} times</p>
//       <p>Component rendered: {renderCount.current} times</p>
//       <button onClick={() => setCount(count + 1)}>Click Me</button>
//     </div>
//   );
// }

// export default ExPractice

 // ← path sahi rakhna
// import Home2Card from "../Home2";
// import { useState } from "react"; // jahan data dikhayenge

// function ExPractice() {
//   const [count,setCount] = useState(0)
//    function handleAdd(){
//     setCount(count + 1); // ➕ 1 badhao
//   };
//   // Ye data hum context me denge

//   return (
//     <UserContext.Provider value={count }>
//       <Home2Card />{ /* isme context ka data jayega */}
//     </UserContext.Provider>
//   );
// }

// export default ExPractice;
