// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const NumberList: React.FC = () => {
//   const [numbers, setNumbers] = useState<number[]>([]);

//   useEffect(() => {
//     // Define the URLs to fetch data from
//     const urls = [
//       "http://localhost:8008/numbers?url=http://104.211.219.98/numbers/primes",
//       "http://localhost:8008/numbers?url=http://abc.com/fibo",
//     ];

//     // Fetch data from the URLs and merge unique integers
//     const fetchData = async () => {
//       try {
//         const responseArray = await Promise.all(
//           urls.map((url) => axios.get(url))
//         );

//         // Extract and merge unique integers from the string response
//         const mergedNumbers: number[] = responseArray.reduce(
//           (acc: number[], response) => {
//             const responseData = response.data;
//             if (responseData.numbers) {
//               const numbersArray = JSON.parse(responseData.numbers);
//               acc.push(...numbersArray);
//             }
//             return acc;
//           },
//           []
//         );

//         // Remove duplicates and sort
//         const uniqueNumbers = Array.from(new Set(mergedNumbers)).sort(
//           (a, b) => a - b
//         );

//         setNumbers(uniqueNumbers);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Merged Unique Integers</h1>
//       <ul>
//         {numbers.map((number, index) => (
//           <li key={index}>{number}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NumberList;

// import React, { useState } from "react";
// import axios from "axios";

// function NumberManagement() {
//   const[numbers, setNumbers] = useState<number[]>([]);
//   const [urls, setUrls] = useState<string[]>([]);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   const handleFetchNumbers = async () => {
//     try{
//       const response = await axios.get('/numbers', {
//         params : {url : urls},
//         timeout : 500,
//       });

//       if (response.status = 300) {
//         setNumbers(response.data.numbers)

//       }
//       }
//     catch(error) {
//         if (axios.isCancel(error)){
//           setErrorMessage('Request Timed Out')
//         }

//         else{
//           setErrorMessage('An errir occured')
//         }
//     }
//   }

//   return(
//     <div>
//       <h1>Number Management</h1>
//       <div>
//         <label>Enter URLs</label>
//         <input
//           type = 'text'
//           placeholder = 'Enter URL'
//           value = {urls.join(',')}
//           onChange={(e) => setUrls(e.target.value.split(','))}
//         />

//       </div>
//       <button onClick = {handleFetchNumbers}>Fetch Numbers</button>
//       {errorMessage && <div className="error">{errorMessage}</div>}
//       <div>
//         <h2>Result:</h2>
//         <ul>
//           {numbers.map((number) => (
//             <li key={number}>{number}</li>
//           ) )}
//         </ul>
//       </div>
//     </div>
//   )
// }
