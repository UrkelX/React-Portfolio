import React, { Component } from "react";
import Project from "../../components/Project";
import data from "../../apps";

class PortfolioPage extends Component {
  state = {
    data,
  };
  render() {
    return (
      <>
        <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div class="absolute inset-0">
            <div class="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div class="relative max-w-7xl mx-auto">
            <div class="text-center">
              <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                Portfolio
              </h2>
              <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                See some of the projects I've been involved with.
              </p>
            </div>
            <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {this.state.data.map((data) => (
                <Project
                  name={data.name}
                  image={data.image}
                  description={data.description}
                  developers={data.developers}
                  page={data.page}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PortfolioPage;