import React from "react";
import "../../images/Bird1.jpg";

export default function Project(props) {
  console.log(props);
  return (
    <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div class="flex-shrink-0">
        <img
          class="h-48 w-full object-cover"
          src={props.image}
          alt={props.name}
        />
      </div>
      <div class="flex-1 bg-white p-6 flex flex-col justify-between">
        <div class="flex-1">
          <a href={props.page} class="block mt-2 cursor-pointer">
            <p class="text-xl font-semibold text-gray-900">{props.name}</p>
          </a>
          <p class="mt-3 text-base text-gray-500">{props.description}</p>
        </div>
        <div class="mt-6 flex items-center">
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900 text-center">
              {props.developers}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
