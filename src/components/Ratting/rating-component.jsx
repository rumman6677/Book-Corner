// "use client"

// import { useState } from "react"
// import { FaStar, FaStarHalfAlt, FaRegStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa"
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// // Replace with a simple Avatar component implementation
// const Avatar = ({ className, children }) => (
//   <div className={`relative overflow-hidden rounded-full ${className}`}>{children}</div>
// )

// const AvatarImage = ({ src, alt }) => (
//   <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
// )

// const AvatarFallback = ({ children }) => (
//   <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-600 font-medium">
//     {children}
//   </div>
// )

// const Ratings = () => {
//   const ratings = [
//     {
//       name: "John Doe",
//       role: "CEO, TechCorp",
//       rating: 4.5,
//       comment:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
//       image: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       name: "Jane Smith",
//       role: "Marketing Director",
//       rating: 5,
//       comment:
//         "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Highly recommended!",
//       image: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       name: "Robert Johnson",
//       role: "Product Manager",
//       rating: 4,
//       comment:
//         "Ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in vulputate velit esse molestie consequat.",
//       image: "/placeholder.svg?height=80&width=80",
//     },
//     {
//       name: "Sarah Williams",
//       role: "UX Designer",
//       rating: 4.5,
//       comment: "Duis autem vel eum iriure dolor in vulputate velit esse molestie consequat. Will work with them again.",
//       image: "/placeholder.svg?height=80&width=80",
//     },
//   ]

//   const [currentIndex, setCurrentIndex] = useState(0)

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === ratings.length - 1 ? 0 : prev + 1))
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? ratings.length - 1 : prev - 1))
//   }

//   const renderStars = (rating) => {
//     return (
//       <div className="flex space-x-1">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <span key={star} className="text-amber-400 text-lg">
//             {star <= rating ? <FaStar /> : star - 0.5 <= rating ? <FaStarHalfAlt /> : <FaRegStar />}
//           </span>
//         ))}
//       </div>
//     )
//   }

//   return (
//     <div className="w-full py-12 px-4 sm:px-6 bg-gradient-to-r from-teal-500 to-amber-100">
//       <div className="max-w-4xl mx-auto relative">
//         <div className="absolute -top-6 left-4 text-white text-4xl">
//           <FaQuoteLeft />
//         </div>

//         <h2 className="text-2xl font-bold text-center mb-8 text-white">Client Testimonials</h2>

//         <div className="relative bg-white rounded-lg shadow-lg p-8 overflow-hidden">
//           <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500 rounded-bl-full"></div>

//           <div className="flex flex-col md:flex-row items-center gap-6">
//             <div className="relative">
//               <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center">
//                 <Avatar className="w-16 h-16 border-2 border-white">
//                   <AvatarImage
//                     src={ratings[currentIndex].image || "/placeholder.svg"}
//                     alt={ratings[currentIndex].name}
//                   />
//                   <AvatarFallback>{ratings[currentIndex].name.charAt(0)}</AvatarFallback>
//                 </Avatar>
//               </div>
//             </div>

//             <div className="flex-1">
//               <div className="mb-2">
//                 <h3 className="text-xl font-semibold text-gray-800">{ratings[currentIndex].name}</h3>
//                 <p className="text-gray-500">{ratings[currentIndex].role}</p>
//               </div>

//               <div className="mb-4">{renderStars(ratings[currentIndex].rating)}</div>

//               <p className="text-gray-600 italic">{ratings[currentIndex].comment}</p>

//               <div className="absolute bottom-4 right-4 text-gray-300 text-2xl">"</div>
//             </div>
//           </div>

//           {/* Navigation */}
//           <div className="flex justify-between items-center mt-8">
//             <button
//               onClick={prevSlide}
//               className="p-2 rounded-full bg-gray-200 hover:bg-orange-500 hover:text-white transition-colors"
//             >
//               <FaChevronLeft />
//             </button>

//             <div className="flex space-x-2">
//               {ratings.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-2 h-2 rounded-full ${currentIndex === index ? "bg-orange-500" : "bg-gray-300"}`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={nextSlide}
//               className="p-2 rounded-full bg-gray-200 hover:bg-orange-500 hover:text-white transition-colors"
//             >
//               <FaChevronRight />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Ratings
