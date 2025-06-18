// import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { createIcons } from "lucide";

// const navLinks = [
//   { title: "Home", href: "#" },
//   { title: "About", href: "#" },
//   { title: "Services", href: "#" },
//   { title: "Contact", href: "#" },
// ];

// // Define a TypeScript interface for custom userData on meshes
// interface MeshUserData {
//   rotationSpeed: { x: number; y: number; z: number };
//   floatSpeed: number;
//   floatOffset: number;
// }

// const Studio3D: React.FC = () => {
//   const threeContainerRef = useRef<HTMLDivElement>(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Initialize lucide icons on mount and menuOpen toggle
//   useEffect(() => {
//     createIcons();
//   }, [menuOpen]);

//   useEffect(() => {
//     if (!threeContainerRef.current) return;

//     // Scene, camera, renderer
//     const scene = new THREE.Scene();

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 15;

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x000000, 0);
//     threeContainerRef.current.appendChild(renderer.domElement);

//     // Lights
//     const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(10, 10, 5);
//     scene.add(directionalLight);

//     // Geometries and colors
//     const geometries = [
//       new THREE.BoxGeometry(1, 1, 1),
//       new THREE.SphereGeometry(0.7, 32, 32),
//       new THREE.ConeGeometry(0.7, 1.5, 8),
//       new THREE.OctahedronGeometry(0.8),
//       new THREE.TetrahedronGeometry(1),
//     ];
//     const colors = [0x6366f1, 0x8b5cf6, 0x06b6d4, 0x10b981, 0xf59e0b, 0xef4444];

//     // Create shapes array
//     const shapes: THREE.Mesh[] = [];

//     for (let i = 0; i < 20; i++) {
//       const geometry =
//         geometries[Math.floor(Math.random() * geometries.length)];
//       const material = new THREE.MeshPhongMaterial({
//         color: colors[Math.floor(Math.random() * colors.length)],
//         transparent: true,
//         opacity: 0.8,
//         shininess: 100,
//       });
//       const mesh = new THREE.Mesh(geometry, material);
//       mesh.position.set(
//         (Math.random() - 0.5) * 30,
//         (Math.random() - 0.5) * 30,
//         (Math.random() - 0.5) * 30
//       );
//       mesh.rotation.set(
//         Math.random() * Math.PI,
//         Math.random() * Math.PI,
//         Math.random() * Math.PI
//       );

//       // Assign userData with typed object
//       (mesh.userData as MeshUserData) = {
//         rotationSpeed: {
//           x: (Math.random() - 0.5) * 0.02,
//           y: (Math.random() - 0.5) * 0.02,
//           z: (Math.random() - 0.5) * 0.02,
//         },
//         floatSpeed: Math.random() * 0.02 + 0.01,
//         floatOffset: Math.random() * Math.PI * 2,
//       };

//       scene.add(mesh);
//       shapes.push(mesh);
//     }

//     // Particle system setup
//     const particleCount = 100;
//     const particleGeometry = new THREE.BufferGeometry();
//     const positions = new Float32Array(particleCount * 3);

//     for (let i = 0; i < particleCount * 3; i += 3) {
//       positions[i] = (Math.random() - 0.5) * 50;
//       positions[i + 1] = (Math.random() - 0.5) * 50;
//       positions[i + 2] = (Math.random() - 0.5) * 50;
//     }

//     particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
//     const particleMaterial = new THREE.PointsMaterial({
//       color: 0xffffff,
//       size: 0.1,
//       transparent: true,
//       opacity: 0.6,
//     });

//     const particles = new THREE.Points(particleGeometry, particleMaterial);
//     scene.add(particles);

//     // Animation loop
//     let frameId: number;
//     const animate = () => {
//       frameId = requestAnimationFrame(animate);

//       shapes.forEach((shape) => {
//         const speed = (shape.userData as MeshUserData).rotationSpeed;
//         shape.rotation.x += speed.x;
//         shape.rotation.y += speed.y;
//         shape.rotation.z += speed.z;

//         // Floating animation with sine wave
//         const { floatSpeed, floatOffset } = shape.userData as MeshUserData;
//         shape.position.y +=
//           Math.sin(Date.now() * floatSpeed + floatOffset) * 0.01;
//       });

//       // Animate particles with subtle y-position oscillation
//       const positionsArr = particles.geometry.attributes.position.array as Float32Array;
//       const time = Date.now() * 0.001;
//       for (let i = 0; i < positionsArr.length; i += 3) {
//         positionsArr[i + 1] += Math.sin(time + positionsArr[i]) * 0.001;

//         // Optional: clamp y position to keep particles roughly in bounds
//         if (positionsArr[i + 1] > 25) positionsArr[i + 1] = -25;
//         if (positionsArr[i + 1] < -25) positionsArr[i + 1] = 25;
//       }
//       particles.geometry.attributes.position.needsUpdate = true;

//       // Slow rotation of entire scene
//       scene.rotation.y += 0.001;

//       renderer.render(scene, camera);
//     };
//     animate();

//     // Resize handler
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       cancelAnimationFrame(frameId);
//       renderer.dispose();

//       shapes.forEach((shape) => {
//         shape.geometry.dispose();
//         if (Array.isArray(shape.material)) {
//           shape.material.forEach((m) => m.dispose());
//         } else {
//           shape.material.dispose();
//         }
//         scene.remove(shape);
//       });

//       scene.remove(particles);
//       particleGeometry.dispose();
//       particleMaterial.dispose();

//       if (threeContainerRef.current) {
//         threeContainerRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   // Mobile menu toggle handler
//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
//       {/* 3D Background */}
//       <div
//         ref={threeContainerRef}
//         className="absolute inset-0 z-0 pointer-events-none"
//       />
//       {/* Overlay gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-10 pointer-events-none" />

//       {/* Content */}
//       <div className="relative z-20 min-h-screen">
//         {/* Navigation */}
//         <nav className="flex items-center justify-between p-6 lg:px-12">
//           <div className="text-2xl font-bold">
//             3D
//             <span className="text-purple-400">Studio</span>
//           </div>

//           {/* Desktop menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.title}
//                 href={link.href}
//                 className="text-white/80 hover:text-white transition-colors"
//               >
//                 {link.title}
//               </a>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden text-white p-2"
//             aria-label="Toggle Menu"
//             type="button"
//           >
//             <i
//               data-lucide={menuOpen ? "x" : "menu"}
//               className="w-6 h-6"
//             />
//           </button>
//         </nav>

//         {/* Mobile menu */}
//         {menuOpen && (
//           <div className="md:hidden absolute top-20 left-6 right-6 bg-black/80 backdrop-blur-lg rounded-lg p-6 border border-white/10">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.title}
//                   href={link.href}
//                   className="text-white/80 hover:text-white transition-colors"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {link.title}
//                 </a>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Hero Section */}
//         <div className="flex items-center justify-center min-h-[calc(100vh-100px)] px-6 lg:px-12">
//           <div className="text-center max-w-4xl">
//             <div className="mb-6">
//               <span className="inline-flex items-center px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 text-sm border border-purple-500/30">
//                 <i data-lucide="star" className="w-4 h-4 mr-2" />
//                 Premium 3D Experience
//               </span>
//             </div>

//             <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Immersive
//               <span className="block">3D Worlds</span>
//             </h1>

//             <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
//               Experience the future of web design with stunning 3D animations,
//               interactive elements, and cutting-edge visual effects that captivate
//               and engage.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                 <i data-lucide="play" className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
//                 Get Started
//               </button>

//               <button className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 hover:border-white/30 transition-all duration-300">
//                 Learn More
//                 <i data-lucide="chevron-right" className="w-5 h-5 ml-2" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Feature Cards */}
//         <div className="px-6 lg:px-12 pb-20">
//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             <div className="group p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
//               <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <div className="w-6 h-6 bg-white rounded"></div>
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-4">3D Animations</h3>
//               <p className="text-white/70 leading-relaxed">
//                 Smooth, performant 3D animations that bring your content to life with
//                 stunning visual appeal.
//               </p>
//             </div>

//             <div className="group p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
//               <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <div className="w-6 h-6 bg-white rounded-full"></div>
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-4">Interactive Design</h3>
//               <p className="text-white/70 leading-relaxed">
//                 Engaging interactive elements that respond to user input and create
//                 memorable experiences.
//               </p>
//             </div>

//             <div className="group p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
//               <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                 <div className="w-6 h-6 bg-white rounded-lg transform rotate-45"></div>
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-4">Responsive Layout</h3>
//               <p className="text-white/70 leading-relaxed">
//                 Fully responsive design that looks perfect on all devices, from mobile
//                 to desktop.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Studio3D;
