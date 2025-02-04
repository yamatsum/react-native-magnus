import React from "react";
import { Link } from "gatsby";

export default function Hero() {
  return (
    <>
      <div className="px-3 pt-10 pb-5 mb-5 flex px-5">
        <div className="mt-5 flex max-w-screen-xl mx-auto">
          <div className="mt-0 md:mt-10 mt-md-4 mt-md-5 flex-grow text-center md:text-left">
            <a
              href="https://discord.gg/SYnXGEy"
              target="_blank"
              className="flex items-center justify-center md:justify-start"
            >
              <i className="icon-discord text-social-discord text-2xl"></i>
              <div className="bg-social-discord-light inline-block px-2 py-1 rounded-md text-sm inline-flex items-center ml-3">
                <span className="inline-block bg-social-discord text-white my-1 rounded-md text-xs mr-1 px-1">
                  NEW
                </span>
                <span className="text-gray-900 ml-1">
                  Join our discord channel
                </span>
              </div>
            </a>
            <h1 className="pt-5 text-3xl md:text-4xl font-bold font-nunito">
              A Utility-First React Native UI Framework
            </h1>
            <p className="mt-5 text-gray-600 font-nunito">
              Magnus UI is the ultimate UI framework that helps you in building
              consistent user interfaces effortlessly in react native.
            </p>
            <div className="block md:flex mt-10">
              <Link
                to="/docs/getting-started/"
                className="bg-primary-500 text-white block py-3 min-w-200 text-center rounded-lg"
              >
                Get started
              </Link>
              <a
                href="https://github.com/jsartisan/react-native-magnus"
                target="_blank"
                className="bg-white rounded-lg hover:bg-gray-100 flex items-center justify-center text-center mx-0 md:mx-3 block py-2 mt-3 md:mt-0 min-w-200"
                style={{
                  color: "black",
                  border: "1px solid #e1e1e1",
                }}
              >
                <i className="icon-github text-xl text-gray-600"></i>
                <span className="ml-3">Github</span>
              </a>
            </div>
          </div>
          <div className="flex-grow hidden md:block">
            <img
              src="/images/hero.png"
              style={{ maxWidth: 600 }}
              className="w-100"
            />
          </div>
        </div>
      </div>
      {/* <div className="d-block text-center mt-5">
        <img src="/images/hero-demo.png" className="w-100" />
      </div> */}
    </>
  );
}
