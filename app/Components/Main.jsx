'use client'
import React from 'react'
import Image from 'next/image'

const Main = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <Image src="/logo.png" alt="logo" width={400} height={400} />
      </div>
      <h1 className="text-5xl flex justify-center items-center mt-4 text-white">
        New era of productivity tooling
      </h1>
      <p className="text-lg text-center overflow-ellipsis w-3/5 mx-auto mt-3 text-slate-400">
        From build to deploy, moonrepo is a better way to manage codebases, save
        developer time, and boost your business.
      </p>
      <div className="flex mt-8 bg-white m-6 rounded-lg">
        <section className="flex-1 flex flex-col">
          <p className="text-blue-900 p-3 ml-9 font-semibold mt-12 text-xl">
            A system for a solid foundation
          </p>

          <div className="flex items-center ml-9">
            <Image
              src="/icon.png"
              alt="logo"
              width={70}
              height={70}
              className="ml-2" // Adjust margin as needed
            />
            <h2 className="text-3xl text-slate-900 w-1/2 font-bold ml-2">
              Supercharge your codebase
            </h2>
          </div>
          <p className="text-base text-left mt-4 ml-9 mb-8 text-slate-900 w-4/5">
            {" "}
            For repositories with multiple projects, any number of languages,
            and team members constantly pushing changes, moon will help simplify
            the experience of working in and maintaining a complex monorepo.
          </p>
          <button className="bg-violet-900 font-bold text-white mb-16 p-3 ml-9  w-1/2 rounded-lg">
            Learn More about Moon
          </button>
        </section>

        <section className="flex-1 ml-10 mb-14">
          <h2 className="text-xl text-left font-semibold text-slate-950 mt-14 ml-3">
            Efficient task orchestation
          </h2>
          <p className="text-base text-left ml-3 text-slate-950 w-4/5 overflow-ellipsis">
            Never run the same task twice. With our smart hashing, robust
            caching, and efficient task execution, moon will avoid unnecessary
            work.
          </p>
          <h2 className="text-xl text-left font-semibold text-slate-950 mt-14 ml-3">
            Better project organization
          </h2>
          <p className="text-base text-left ml-3 text-slate-950 w-4/5 overflow-ellipsis">
            Neatly organize your codebase, declare ownership information, and
            simplify project discovery.
          </p>
          <h2 className="text-xl text-left font-semibold text-slate-950 mt-14 ml-3">
            Integrated development environment
          </h2>
          <p className="text-base text-left ml-3 text-slate-950 w-4/5 overflow-ellipsis">
            With our integrated toolchain, development environments will be spun
            up in minutes, ensuring the exact tools and versions are used across
            developers and machines.
          </p>
        </section>
      </div>

      {/* //Second Card  */}

      <div className="flex mt-20 bg-white m-6 rounded-lg ">
        <section className="flex-1 flex flex-col">
          <div className="flex items-center ml-9 mt-16">
            <Image
              src="/org.png"
              alt="logo"
              width={400}
              height={400}
              className="ml-2 rounded-lg"
            />
          </div>
          <div className="flex items-center ml-36 -mt-6">
            <Image
              src="/repo.png"
              alt="logo"
              width={400}
              height={400}
              className="ml-2 rounded-lg"
            />
          </div>
        </section>

        <section className="flex-1 flex flex-col mb-10">
          <p className="text-teal-600 p-3 ml-9 font-semibold mt-12 text-xl">
            A system for a solid foundation
          </p>

          <div className="flex items-center ml-9">
            <Image
              src="/Iconnn.png"
              alt="logo"
              width={70}
              height={70}
              className="ml-2" // Adjust margin as needed
            />
            <h2 className="text-3xl text-slate-900 w-1/2 font-bold ml-2">
              Accelerate your pipelines
            </h2>
          </div>
          <p className="text-base text-left mt-4 ml-9 mb-8 text-slate-900 w-4/5">
            {" "}
            With our hosted service moonbase, easily cache build artifacts to
            reduce CI times, gain insight into your CI pipelines, track the
            health of your repositories, and overall cut costs.
          </p>
          <button className="bg-teal-600 font-bold text-white mb-12 p-3 ml-9  w-1/2 rounded-lg">
            Learn More about Moon
          </button>
        </section>
      </div>
      {/* //Third Card */}
      <div className="flex mt-20 bg-white m-6 rounded-lg">
        <section className="flex-1 flex flex-col">
          <p className="text-pink-500 p-3 ml-9 font-semibold mt-12 text-xl">
            A toolchain for the modern era
          </p>

          <div className="flex items-center ml-9">
            <Image
              src="/Icon22.png"
              alt="logo"
              width={70}
              height={70}
              className="ml-2" // Adjust margin as needed
            />
            <h2 className="text-3xl text-slate-900 w-1/2 font-bold ml-2">
              Automate your environments
            </h2>
          </div>
          <p className="text-base text-left mt-4 ml-9 mb-8 text-slate-900 w-4/5">
            {" "}
            Remove the hassle of managing and enforcing specific versions of
            programming languages across teams or projects. With proto, our
            modern version manager, this entire workflow is automated away
            through a single tool.
          </p>
          <button className="bg-pink-500 font-bold text-white mb-16 p-3 ml-9  w-1/2 rounded-lg">
            Learn More about Moon
          </button>
        </section>

        <section className="flex-1 ml-10 mb-10">
          <h2 className="text-xl text-left font-semibold text-slate-950 mt-14 ml-3">
            Multi-language support
          </h2>
          <p className="text-base text-left ml-3 text-slate-950 w-4/5 overflow-ellipsis">
            Manage versions of multiple languages and dependency managers
            through a single interface. A single source of truth.
          </p>
          <h2 className="text-xl text-left font-semibold text-slate-950 mt-14 ml-3">
            Contextual version detection
          </h2>
          <p className="text-base text-left ml-3 text-slate-950 w-4/5 overflow-ellipsis">
            Detects and infers versions and semantics from a language's
            ecosystem for maximum compatibility and interoperability.
          </p>
          <h2 className="text-xl text-left font-semibold text-slate-950 mt-14 ml-3">
            Lightspeed interface
          </h2>
          <p className="text-base text-left ml-3 text-slate-950 w-4/5 overflow-ellipsis">
            Download, install, and run tools with lightspeed, thanks to our Rust
            based foundation.
          </p>
        </section>
      </div>
      <div className="flex-1">
        <h1 className="text-xl font-semibold flex justify-center items-center text-slate-950">
          Used by these innovative companies
        </h1>
      </div>
      <div className="flex flex-row mt-3 mb-8 items-center">
        <Image
          src="/box-icon.jpg"
          alt="logo"
          width={50}
          height={50}
          className="ml-52"
        />
        <h1 className="text-slate-900 text-xl font-semibold mt-2 ml-3">
          Depot
        </h1>
        <div className="flex items-center ml-10">
          <h1 className="text-slate-900 text-xl font-semibold mt-2 ml-3">
            Gallery
          </h1>
          <Image
            src="/plus.png"
            alt="logo"
            width={20}
            height={20}
            className="ml-2 mt-2"
          />
        </div>
      </div>
    </>
  );
}

export default Main
