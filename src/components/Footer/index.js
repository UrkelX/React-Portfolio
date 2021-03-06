import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer relative bg-indigo-800 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-indigo-800 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-gray-50">
                Don't hesitate to reach out!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-50">
                Send me and email. 
              </h5>
      
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-50 text-sm font-semibold mb-2">
                    Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-gray-50 hover:text-indigo-200 font-semibold block pb-2 text-sm"
                         href="/about">About
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-50 hover:text-indigo-200 font-semibold block pb-2 text-sm"
                         href="/portfolio">Portfolio
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-50 hover:text-indigo-200 font-semibold block pb-2 text-sm"
                         href="https://github.com/UrkelX">Github
                      </a>
                    </li>
                   

                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-50 font-semibold py-1">
                Copyright ?? {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}