// import React from "react";

// function HeroSection() {
//   return (
//   <section className="min-h-screen w-full md:px-8 xl:px-20 text-white bg-primary flex items-center">
//   <div className="flex container flex-col md:flex-row items-center md:items-start gap-16 w-full">
//     <div className="w-full md:w-1/2 relative p-6 sm:px-28 md:p-0">
//       <div className="text-white p-6 pl-10 pr-20 sm:pl-10 lg:pr-20">
//         <div
//           className="absolute -left-4  sm:left-16 top-20 sm:top-24 md:-left-12 xl:-left-16 md:top-16 xl:top-24 rotate-[-90deg] text-sm tracking-widest flex flex-row justify-start gap-2">
//           <div className="xl:w-16 md:w-10 sm:w-8 w-8 h-[2px] bg-white mt-2 mx-auto"></div>
//           <p>All Skills</p>
//         </div>

//         <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
//           Explore My Expertise & Tech Stack
//         </h2>
//       </div>

//       <p className="p-3 text-gray-400 text-sm leading-relaxed">
//         These are the tools and technologies that I use daily to develop web
//         applications. With a strong foundation in frontend, I focus on delivering clean,
//         maintainable code and intuitive user experiences.
//       </p>

//       <span className="py-4 px-2 space-x-2 rounded-lg bg-secondary shadow-lg">
//         <button className="rounded-lg px-4 py-2 bg-blue-500 text-white transition-all duration-300">
//           Skills
//         </button>
//         <button className="rounded-lg px-4 py-2 bg-transparent text-gray-300 transition-all duration-300">
//           Tools
//         </button>
//       </span>
//     </div>

  
//     <div className="w-full md:w-1/2 flex justify-center items-center">
//       <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
//         <div className="text-center">
//           <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
//             <span className="text-4xl">
//               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
//                 <g fill="none">
//                   <rect width="256" height="256" fill="#E14E1D" rx="60"/>
//                   <path fill="#fff" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"/>
//                   <path fill="#EBEBEB" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"/>
//                 </g>
//               </svg>
//             </span>
//             <p className="text-xs mt-2">HTML5</p>
//           </div>
//         </div>

//         <div className="text-center">
//           <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
//             <span className="text-4xl">
//               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
//                 <g fill="none">
//                   <rect width="256" height="256" fill="#0277BD" rx="60"/>
//                   <path fill="#EBEBEB" d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"/>
//                   <path fill="#fff" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"/>
//                 </g>
//               </svg>
//             </span>
//             <p className="text-xs mt-2">CSS3</p>
//           </div>
//         </div>

//         <div className="text-center">
//           <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
//             <span className="text-4xl">
//               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
//                 <g fill="none">
//                   <rect width="256" height="256" fill="#F0DB4F" rx="60"/>
//                   <path fill="#323330" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/>
//                 </g>
//               </svg>
//             </span>
//             <p className="text-xs mt-2">JavaScript</p>
//           </div>
//         </div>

//         <div className="text-center">
//           <div className="p-4 bg-secondary rounded-lg shadow-lg flex flex-col justify-center items-center">
//             <span className="text-4xl">
//               <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256">
//                 <g fill="none">
//                   <rect width="256" height="256" fill="#61DAFB" rx="60"/>
//                   <path fill="#fff" d="M128 38c-12.473 0-25.243 5.56-36.479 15.771l-.743.737c-18.212 17.974-29.646 41.22-30.055 66.543c-7.015 1.94-14.438 3.064-21.78 3.064c-5.64 0-10.472 4.839-10.472 10.78c0 4.515 2.98 8.645 7.344 10.059c2.539-6.313 5.915-12.371 9.99-17.539c11.243-13.83 25.474-26.785 40.519-35.89c17.707-11.085 38.698-17.623 60.135-17.623c47.72 0 86.538 41.124 86.538 91.736c0 13.455-4.013 25.601-10.885 35.679c-5.85 9.85-14.563 17.422-24.582 21.283c-5.74 2.29-12.275 3.705-18.73 3.705c-12.245 0-23.935-4.563-33.109-12.355c-5.03-4.075-9.402-8.964-13.401-13.973c-16.25-21.364-39.003-39.13-64.696-51.738c-9.687-4.838-21.362-6.13-31.918-3.605c-10.64 2.497-18.387 9.63-22.304 19.168c-3.749 9.249-3.28 19.668 1.023 28.578c4.41 7.468 12.182 12.506 20.614 14.549c5.674 1.433 11.502 1.366 17.029-.179c4.252-1.227 7.77-4.315 9.31-8.02l5.659 3.14c8.033 4.467 14.887 10.014 21.677 15.741l.726.741l5.322 5.35l7.316 7.366c-2.867 2.5-5.971 4.673-9.059 6.358l-.787-.493l-5.711 8.853c8.84-2.46 16.711-7.004 23.253-13.43l4.221-7.633z"/>
//                 </g>
//               </svg>
//             </span>
//             <p className="text-xs mt-2">React</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   </div>
// </section>

//   );
// }

// export default HeroSection;
