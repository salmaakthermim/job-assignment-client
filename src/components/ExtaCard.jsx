import React from 'react';
import { Fade } from 'react-awesome-reveal';

const ExtaCard = () => {
    return (
        <div>
            <section class=" py-16 px-6" >
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
    {/* <!-- Text Content --> */}
    <div>
      <h1 class="text-4xl md:text-5xl font-bold  leading-tight">
        Welcome to online <span class="text-orange-500">
          <Fade delay={1e3} cascade damping={1e-1}>
          learning center
          </Fade>
          
          </span>
      </h1>
      <p class="mt-4 text-lg leading-relaxed">
        There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected humour or randomised words which don’t look.
      </p>
      <div class="mt-8 flex items-center space-x-8">
        <div class="flex items-center space-x-3">
          <svg class="w-8 h-8 text-teal-500" xmlns="https://i.ibb.co.com/KhScLRs/download.jpg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0v5m0 0l-3-3m3 3l3-3" />
          </svg>
          <p class=" font-medium">Start learning from our experts</p>
        </div>
        <div class="flex items-center space-x-3">
          <svg class="w-8 h-8 text-teal-500" xmlns="https://i.ibb.co.com/KhScLRs/download.jpg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2-2-2-2m8 0l-2 2 2 2m-6-2h.01M6 18a9 9 0 0118 0v1H6v-1z" />
          </svg>
          <p class=" font-medium">Enhance your skills with us now</p>
        </div>
      </div>
      <div class="mt-8">
        <button class="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600">
          Learn More
        </button>
      </div>
    </div>

    {/* <!-- Image and Circle Design --> */}
    <div class="relative">
      <img
        src="https://i.ibb.co.com/KhScLRs/download.jpg"
        alt="Learning Center"
        class="rounded-lg shadow-lg w-full"
      />
      <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div class="w-40 h-40 rounded-full border-4 border-orange-500"></div>
      </div>
      <div class="absolute bottom-8 left-8 bg-white p-4 rounded-lg shadow-md">
        <p class="text-gray-600 text-sm">TRUSTED BY</p>
        <p class="text-3xl font-bold text-gray-900">4890</p>
      </div>
    </div>
  </div>
</section>



        </div>
    );
};

export default ExtaCard;
{/* <section class="bg-white py-16 px-6">
<div class="max-w-7xl mx-auto">
  {/* <!-- About Us Section --> */}
//   <div class="text-center mb-12">
//     <h2 class="text-5xl font-bold text-gray-900">About Us</h2>
//     <p class="mt-4 text-lg text-gray-700 leading-relaxed">
//       Studybay is a team of seasoned professionals and enthusiastic geeks driven by the idea of improving an educational process worldwide. We believe that cooperation is the best way to make learning easier and more effective.
//     </p>
//     <p class="mt-4 text-lg text-gray-700 leading-relaxed">
//       That's why we develop groundbreaking EdTech tools — to help students reach their most ambitious goals in collaboration with top educators from all over the world.
//     </p>
//   </div>

{/* <!-- Image Grid --> */ }
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//     <img src="https://via.placeholder.com/400x250" alt="Team Collaboration" class="rounded-lg shadow-lg">
//     <img src="https://via.placeholder.com/400x250" alt="Team Meeting" class="rounded-lg shadow-lg">
//     <img src="https://via.placeholder.com/400x250" alt="Discussion" class="rounded-lg shadow-lg">
//     <img src="https://via.placeholder.com/400x250" alt="Workshop" class="rounded-lg shadow-lg">
//     <img src="https://via.placeholder.com/400x250" alt="Brainstorming" class="rounded-lg shadow-lg">
//     <img src="https://via.placeholder.com/400x250" alt="Group Work" class="rounded-lg shadow-lg">
//   </div>

//   {/* <!-- Studybay Today Section --> */}
//   <div>
//     <h3 class="text-4xl font-bold text-gray-900 mb-6">Studybay Today</h3>
//     <ul class="space-y-4">
//       <li class="flex items-start">
//         <svg class="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.704 4.29a1 1 0 00-1.411.02l-6.517 7.017-2.582-2.34a1 1 0 10-1.342 1.48l3.3 2.99a1 1 0 001.399-.03l7.23-7.78a1 1 0 00-.077-1.367z"></path></svg>
//         <p class="text-lg text-gray-700">Helped over 3M students since 2013</p>
//       </li>
//       <li class="flex items-start">
//         <svg class="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.704 4.29a1 1 0 00-1.411.02l-6.517 7.017-2.582-2.34a1 1 0 10-1.342 1.48l3.3 2.99a1 1 0 001.399-.03l7.23-7.78a1 1 0 00-.077-1.367z"></path></svg>
//         <p class="text-lg text-gray-700">Brought 50,000+ top Experts together</p>
//       </li>
//       <li class="flex items-start">
//         <svg class="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.704 4.29a1 1 0 00-1.411.02l-6.517 7.017-2.582-2.34a1 1 0 10-1.342 1.48l3.3 2.99a1 1 0 001.399-.03l7.23-7.78a1 1 0 00-.077-1.367z"></path></svg>
//         <p class="text-lg text-gray-700">Improved learning in 100+ countries</p>
//       </li>
//     </ul>
//   </div>
// </div>
// </section> 