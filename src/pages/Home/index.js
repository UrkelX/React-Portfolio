import React from "react";
import Bird from "../../images/Bird1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'



export default function HomePage() {
  return (
    <>
      <div class="bg-gray">
        <div class="relative pb-32 bg-gray-800">
          <div class="absolute inset-0">
            <img class="w-full h-full object-cover" src={Bird} alt="Bird"/>
            {/* <div class="absolute inset-0 bg-gray-800" aria-hidden="true"></div> */}
          </div>
          <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Urkel
            </h1>
            <p class="mt-6 max-w-3xl text-xl text-gray-300">
              Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
              id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
              fames. Dui, amet, nec sit pulvinar.
            </p>
          </div>
        </div>

        <section
          class="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
      
          <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
            <div class="bg-white rounded-2xl shadow-xl">
              <div class="relative pt-16 px-6 pb-8 md:px-8">
                <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                <FontAwesomeIcon className="white-icon" icon={faThLarge} />
                </div>
                <h3 class="text-xl font-medium text-gray-900">Portfolio</h3>
                <p class="mt-4 text-base text-gray-500">
                  Varius facilisi mauris sed sit. Non sed et duis dui leo,
                  vulputate id malesuada non. Cras aliquet purus dui laoreet
                  diam sed lacus, fames.
                </p>
              </div>
              <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a href="/portfolio" class="text-base font-medium text-indigo-700 hover:text-indigo-600">See Projects<span aria-hidden="true"> &rarr;</span></a>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-xl">
              <div class="relative pt-16 px-6 pb-8 md:px-8">
                <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                <FontAwesomeIcon className="white-icon" icon={faBookOpen} />
                </div>
                <h3 class="text-xl font-medium text-gray-900">
                  About
                </h3>
                <p class="mt-4 text-base text-gray-500">
                  Varius facilisi mauris sed sit. Non sed et duis dui leo,
                  vulputate id malesuada non. Cras aliquet purus dui laoreet
                  diam sed lacus, fames.
                </p>
              </div>
              <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a href="/about" class="text-base font-medium text-indigo-700 hover:text-indigo-600">Learn More<span aria-hidden="true"> &rarr;</span></a>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
