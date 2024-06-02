// import React, { useRef, useState } from 'react';
// import './Imagegen.css';


// const Imagegen = () => {
//   const [imageUrl, setImageUrl] = useState(Img);
//   const inputRef = useRef(null);

//   const imageGenerate = async () => {
//     const prompt = inputRef.current.value;

//     if (!prompt) {
//       console.log("Input is empty");
//       return;
//     }

//     try {
//       const response = await fetch(
//         "https://api.openai.com/v1/images/generations",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer YOUR_API_KEY_HERE`, // Replace with your actual API key
//             "User-Agent": "Chrome"
//           },
//           body: JSON.stringify({
//             prompt: prompt,
//             n: 1,
//             size: "512x512",
//           }),
//         }
//       );

//       if (!response.ok) {
//         const errorDetail = await response.json();
//         console.error('Error response:', errorDetail);
//         throw new Error('Failed to generate image');
//       }

//       const data = await response.json();
//       const imageUrl = data.data[0].url;
//       setImageUrl(imageUrl);
//     } catch (error) {
//       console.error('Error generating image:', error);
//     }
//   };

//   return (
//     <div className="ai-image-generator">
//       <div className="header">
//         AI Image <span>Generator</span>
//       </div>
//       <div className="img-loading">
//         <div className="images"><img src={imageUrl} alt="Generated" /></div>
//       </div>
//       <div className="search-box">
//         <input
//           type="text"
//           ref={inputRef}
//           className="search-input"
//           placeholder="Enter your text here"
//         />
//         <div className="generate-btn" onClick={imageGenerate}>
//           Generate
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Imagegen;
