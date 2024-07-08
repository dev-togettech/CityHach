/*
* La landing page.
*  */
import {Image} from "react-bootstrap";

export default function LandingPage() {
	return <>


		<nav className="py-7 text-base">
			<nav className="px-2 bg-white border-gray-200">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">

					<a href="#" className="flex items-center">
						<img src="src/assets/landing/images/icons/turing-logo-alt.png" className="h-6 mr-3 sm:h-10" alt="Logo"/>
						<span className="self-center text-xl font-semibold whitespace-nowrap">Aviato</span>
					</a>
					<button data-collapse-toggle="navbar-dropdown" type="button"
							className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
							aria-controls="navbar-dropdown" aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
							 xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd"
								  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								  clip-rule="evenodd"></path>
						</svg>
					</button>
					<div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
						<ul
							className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0 md:bg-white">
							<li className="text-xl font-normal">
								<a href="Jobs.html"
								   className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
								   aria-current="page">Apply for Jobs</a>
							</li>
							<li className="pl-10 text-xl font-normal">
								<a href="Hire dev/hireDev.html"
								   className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Hire
									Developers</a>
							</li>


							<li className="pl-10">
								<button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
										className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-xl font-normal text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">Login
									<svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor"
										 viewBox="0 0 20 20"
										 xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd"
											  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											  clip-rule="evenodd"></path>
									</svg></button>

								<div id="dropdownNavbar"
									 className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
									<ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
										<li>
											<a href="#"
											   className="block px-4 py-2 hover:bg-gray-100 font-semibold">Developers</a>
										</li>
										<li>
											<a href="#" className="block px-4 py-2 hover:bg-gray-100">Login</a>
										</li>
										<li>
											<a href="#" className="block px-4 py-2 hover:bg-gray-100">Create an
												Account</a>
										</li>
									</ul>
									<div className="py-1">
										<a href="#"
										   className="block text-sm px-4 py-2 hover:bg-gray-100 font-semibold">Clients</a>
										<a href="#"
										   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login</a>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>

		</nav>


		<section className="bg-white">
			<div className="grid px-4 py-8 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div className="mr-auto place-self-center lg:col-span-7">
					<div>
						<h1 className="mb-10 text-5xl font-sans font-medium tracking-tight leading-tight">
							The most deeply vetted developers
							and teams, matched by AI
						</h1>
						<p className="mb-10 font-sans font-normal text-xl">
							At the push of a button, our AI-powered <br/>
							deep-vetting platform - the Talent Cloud - matches <br/>
							clients with remote developers, tech leads, and others to <br/>
							build and scale together.
						</p>
						<a href="#"
						   className="inline-flex items-center justify-center px-8 py-4 mr-3 text-base font-sans font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-cyan-500">
							Hire Developers
						</a>

					</div>
					<div className="mt-11">
						<p className="text-base font-sans">Looking for Jobs?
							<a className="text-blue-600 font-semibold hover:underline" href="#">
								Apply for Jobs
							</a>
						</p>
					</div>
				</div>
				<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
					<img src="src/assets/landing/images/Home/image-1.png" alt="mockup"/>
				</div>
			</div>
		</section>


		<section className="bg-[#f8f8f8] flex flex-col items-center">
			<div className="text-center pb-10">
				<h1 className="pt-10 pb-8 text-5xl font-sans font-medium tracking-tight leading-tight">
					Traditional recruiting is over. Welcome to the Talent Cloud.
				</h1>
				<p className="font-sans font-normal text-lg">
					Join hundreds of companies trusting Aviato for their remote engineering needs.
				</p>
			</div>
			<div className="flex space-x-10 pb-10">
				<img src="src/assets/landing/images/icons/icon-comp-1.png" alt=""/>
				<img src="src/assets/landing/images/icons/icon-comp-2.png" alt=""/>
				<img src="src/assets/landing/images/icons/icon-comp-3.png" alt=""/>
				<img src="src/assets/landing/images/icons/icon-comp-4.png" alt=""/>
				<img src="src/assets/landing/images/icons/icon-comp-5.png" alt=""/>
				<img src="src/assets/landing/images/icons/icon-comp-6.png" alt=""/>
			</div>
		</section>


		<section className="bg-white">
			<div className="grid max-w-screen-xl px-4 py-20 mx-auto gap-x-20  grid-cols-12">
				<div className="mr-auto place-self-center hidden lg:mt-0 col-span-6 lg:flex">
					<img className="object-cover" src="src/assets/landing/images/Home/image-2.png" alt="mockup"/>
				</div>
				<div className="place-self-center col-span-6">
					<p className="text-gray-500 font-bold py-2">CLIENTS</p>
					<h1 className="max-w-2xl mb-4 text-4xl font-medium font-sans tracking-tight leading-none">
						Hire a dedicated development team
					</h1>
					<p className="max-w-2xl mb-6 text-lg font-light text-gray-500 text-base">
						A complete, hands-off solution to complex, hands-on problems. Aviato will consult with you on
						your
						specific project needs, then build a dedicated development team to deliver your solution.
					</p>
					<a href="#"
					   className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-blue-600">
						More About Teams
					</a>
				</div>
			</div>
		</section>


		<section className="bg-[#f8f8f8]">
			<div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div className="mr-auto place-self-center col-span-8">
					<p className="text-gray-500 font-bold py-2">CLIENTS</p>
					<h1 className="max-w-2xl mb-4 text-4xl font-medium font-sans tracking-tight leading-none">
						Hire deeply-vetted developers
					</h1>
					<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
						A software-first solution to any engineering problem. Use our AI-powered deep-vetting platform
						to
						hire and manage the right remote developers, tech leads, and others for your src/assets/landing needs.
					</p>
					<a href="#"
					   className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-blue-600">
						Hire Developers
					</a>
				</div>
				<div className="hidden lg:mt-0 col-span-4 lg:flex">
					<img src="src/assets/landing/images/Home/image-3.png" alt="mockup"/>
				</div>
			</div>
		</section>


		<section className="bg-white">
			<div className="grid max-w-screen-xl px-4 py-10 mx-auto gap-x-20  grid-cols-12">
				<div className="mr-auto place-self-center hidden lg:mt-0 col-span-6 lg:flex">
					<img className="object-cover" src="src/assets/landing/images/Home/image-4.png" alt="mockup"/>
				</div>
				<div className="place-self-center col-span-6">
					<p className="text-gray-500 font-bold py-2">DEVELOPERS</p>
					<h1 className="max-w-2xl mb-4 text-4xl font-medium font-sans tracking-tight leading-none">
						Build a remote career
					</h1>
					<p className="max-w-2xl mb-6 text-lg font-light text-gray-500 text-base">
						Get AI-matched to high-paying U.S. tech jobs. Once you sign up, you’ll tell us about your past
						work
						experience and take our vetting tests. Once you pass, our AI-powered deep-vetting platform—the
						Talent Cloud—matches you with opportunities from our clients.
					</p>
					<a href="#"
					   className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-blue-600">
						Apply for Jobs
					</a>
				</div>
			</div>
		</section>


		<section className="max-w-screen-xl mx-auto pt-20">
			<h1 className="text-5xl font-sans leading-snug font-medium">
				Aviato combines global reach and AI to deliver your ideal remote developers
			</h1>
		</section>


		<section className="bg-white font-sans">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

					<div
						className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-lg">
						<img src="src/assets/landing/images/Home/card-1.png" alt=""/>
						<h1 className="text-xl font-medium mb-4 text-left">Tailored to your <br/> requirements</h1>

						<ul role="list" className="mb-8 space-y-4 text-left">
							<li className="flex items-center space-x-3">

								<svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor"
									 viewBox="0 0 20 20"
									 xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd"
										  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										  clip-rule="evenodd"></path>
								</svg>
								<span className="text-lg">Role</span>
							</li>
							<li className="flex items-center space-x-3">

								<svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor"
									 viewBox="0 0 20 20"
									 xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd"
										  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										  clip-rule="evenodd"></path>
								</svg>
								<span className="text-lg">Tech Stack</span>
							</li>
							<li className="flex items-center space-x-3">

								<svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor"
									 viewBox="0 0 20 20"
									 xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd"
										  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										  clip-rule="evenodd"></path>
								</svg>
								<span className="text-lg">Seniority Level</span>
							</li>
						</ul>
					</div>

					<div
						className="flex flex-col py-5 px-[72px] mx-auto max-w-xl text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-lg">
						<h3 className="mt-5 mb-10 text-xl font-medium">
							Our <span className="text-blue-700">Talent Cloud</span> platform <br/> leverages
						</h3>

						<p className="text-blue-600 text-left mb-4 py-3 w-full bg-blue-100 text-lg font-medium rounded-lg px-5">
							<i className="fa-solid fa-globe"></i>
							Global Sourcing
						</p>
						<p className="text-blue-600 text-left mb-4 py-3 bg-blue-100 text-lg font-medium rounded-lg px-5">
							<i className="fa-solid fa-bag-shopping"></i>
							Intelligent Vetting
						</p>
						<p className="text-blue-600 text-left mb-4 py-3 bg-blue-100 text-lg font-medium rounded-lg px-5">
							<i className="fa-regular fa-address-card"></i>
							Extensive Matching
						</p>
						<p className="text-blue-600 text-left mb-4 py-3 bg-blue-100 text-lg font-medium rounded-lg px-5">
							<i className="fa-solid fa-cart-shopping"></i>
							Payment Compliance
						</p>
						<p className="text-blue-600 text-left mb-4 py-3 bg-blue-100 text-lg font-medium rounded-lg px-5">
							<i className="fa-solid fa-id-card"></i>
							Automated On-The-Job Quality Control
						</p>

						<button
							className="text-white text-lg bg-blue-600 transition ease-in hover:bg-white hover:border-2 hover:border-blue-600 hover:text-black hover:text-blue-600 font-medium rounded-lg px-5 py-2.5 text-center">
							<i className="fa-solid fa-circle-play"></i>
							See how it works
						</button>
					</div>

					<div
						className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow-lg">
						<img src="src/assets/landing/images/Home/card-2.png" alt=""/>
						<h1 className="text-xl text-left font-medium mt-3 mb-4">Your ideal developer</h1>

						<ul role="list" className="mb-8 space-y-4 text-left">
							<li className="flex items-center space-x-3">

								<svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor"
									 viewBox="0 0 20 20"
									 xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd"
										  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										  clip-rule="evenodd"></path>
								</svg>
								<p className="font-bold text-lg">Typical Engagement</p>
							</li>
							<p className="text-lg">&emsp;&emsp;Full Time</p>
							<li className="flex items-center space-x-3">

								<svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor"
									 viewBox="0 0 20 20"
									 xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd"
										  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										  clip-rule="evenodd"></path>
								</svg>
								<p className="font-bold text-lg">Time Zone overlap</p>
							</li>
							<p className="text-lg">&emsp;&emsp;4 hours</p>
						</ul>
					</div>
				</div>
			</div>
		</section>


		<section className="max-w-screen-xl mx-auto font-sans mb-20">
			<h1 className="text-center text-3xl mb-20 font-medium">Why business are choosing Aviato</h1>
			<div className="grid grid-cols-3">

				<div className="max-w-sm py-6 pl-20 bg-white rounded-lg">
					<div className="mb-7">
						<i className="fa-solid fa-bolt bg-slate-100 text-green-500 text-3xl p-2 rounded-lg"></i>
						<p className="inline ml-3 text-base text-2xl">Speed</p>
					</div>
					<h5 className="mb-2 text-4xl font-bold tracking-tight text-green-500">
						4 days
					</h5>
					<p className="mb-3 font-normal text-gray-500 text-xl">
						to fill <span className="text-green-500">most roles</span>, <br/> sometimes same day.
					</p>
				</div>

				<div className="max-w-sm py-6 pl-20 bg-white rounded-lg">
					<div className="mb-7">
						<i className="fa-solid fa-clock bg-slate-100 text-green-500 text-3xl p-2 rounded-lg"></i>
						<p className="inline ml-3 text-base text-2xl">Time Saved</p>
					</div>
					<h5 className="mb-2 text-4xl font-bold tracking-tight text-green-500">
						50+ Hours
					</h5>
					<p className="mb-3 font-normal text-gray-500 text-xl">
						of engineering team time <br/> <span className="text-green-500">per developer</span>, on
						interviewing.
					</p>
				</div>

				<div className="max-w-sm py-6 pl-20 bg-white rounded-lg">
					<div className="mb-7">
						<i className="fa-solid fa-thumbs-up bg-slate-100 text-green-500 text-3xl p-2 rounded-lg"></i>
						<p className="inline ml-3 text-base text-2xl">Retention</p>
					</div>
					<h5 className="mb-2 text-4xl font-bold tracking-tight text-green-500">
						97%
					</h5>
					<p className="mb-3 font-normal text-gray-500 text-xl">
						engagement <span className="text-green-500">success rate</span>.
					</p>
				</div>
			</div>

		</section>


		<section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
			<div className="mx-auto py-16 max-w-screen-xl">
				<h1 className="text-5xl">
					<strong>2 Million+</strong> developers <br/>
					from <strong>150 countries</strong> <br/>
					have already joined Aviato
				</h1>

				<div className="flex mt-12 mb-20">
					<div>
						<h1 className="text-6xl font-bold">15+</h1>
						<p className="mt-3 text-xl">Jobs Types</p>
					</div>
					<div className="ml-10">
						<h1 className="text-6xl font-bold">100+</h1>
						<p className="mt-3 text-xl">Technologies</p>
					</div>
					<div className="ml-10">
						<h1 className="text-6xl font-bold">7+</h1>
						<p className="mt-3 text-xl">Seniority Levels</p>
					</div>
				</div>

				<button type="button"
						className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-md text-lg px-5 py-2.5 mr-2 mb-2">
					Hire Developers
				</button>
				<button type="button"
						className="text-white bg-blue-600 border border-gray-300 hover:bg-gray-100  focus:ring-gray-200 font-medium rounded-md text-lg px-5 py-2.5 mr-2 mb-2">
					Apply for Jobs
				</button>
			</div>
		</section>


		<section className="bg-[#f8f8f8] font-sans">
			<div className="grid max-w-screen-xl px-4 py-20 mx-auto gap-x-20  grid-cols-12">
				<div className="mr-auto place-self-center hidden lg:mt-0 col-span-6 lg:flex">
					<img className="object-cover" src="src/assets/landing/images/Home/image-5.png" alt="mockup"/>
				</div>
				<div className="place-self-center col-span-6">
					<h1 className="max-w-2xl mb-4 text-5xl font-medium font-sans tracking-tight leading-snug">
						Why are the best developers joining Aviato?
						<span className="text-blue-600">Because they want careers, not gigs.</span>
					</h1>
					<div className="max-w-2xl mb-6">
						<div className="text-2xl font-normal mb-5">
							<i className="fa-solid fa-user bg-blue-100 text-blue-600 p-3 rounded-lg"></i>
							<p className="ml-2 inline">Vetted once, eligible for life</p>
						</div>
						<div className="text-2xl font-normal mb-5">
							<i className="fa-solid fa-atom bg-blue-100 text-blue-600 p-3 rounded-lg"></i>
							<p className="ml-2 inline">Exclusive Aviato developer success support</p>
						</div>
						<div className="text-2xl font-normal">
							<i className="fa-solid fa-piggy-bank bg-blue-100 text-blue-600 p-3 rounded-lg"></i>
							<p className="ml-2 inline">Vetted once, eligible for life</p>
						</div>
					</div>
					<a href="#"
					   className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-blue-600">
						Apply for Jobs
					</a>
				</div>
			</div>
		</section>


		<section className="p-6">
			<div className="max-w-screen-xl mx-auto my-16">
				<div className="flex justify-between">
					<div>
						<h1 className="text-3xl font-semibold mb-3">People ❤️ Aviato</h1>
						<p>
							Read Aviato.com reviews from developers across the world <br/>
							and learn what it’s like working with top U.S. companies.
						</p>
					</div>
					<div>
                    <span className="flex justify-start items-center gap-3">
                        <i Style={"font-size: 2em; color: gold"} className="fa-solid fa-star fa"></i>
                        <h1 className="text-3xl font-bold">4.7</h1>
                        <p className="text-sm uppercase">out of 5</p>
                    </span>

						<p className="text-sm font-light my-2 text-gray-400">
							based on developer reviews as of January 2023
						</p>
						<a className="text-blue-600" href="https://www.Aviato.com/review">View all reviews</a>
					</div>
				</div>
			</div>
		</section>


		<div className="owl-carousel owl-theme py-10">
			<div className="item text-white mr-5 rounded-lg">
				<img className="brightness-50 rounded-lg"
					 src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Drink"/>
				<div className="top-left text-left p-5">
					<p className="text-sm font-bold">Alexendra, Costa Rica</p>
					<p className="text-sm">Software Architect</p>
					<div className="mt-10 italic">
						"With timely payments, consistent growth, and long-term opportunities, I am a much
						better and happier place."
					</div>
				</div>
				<div className="bottom-left text-lg p-5"><i className="fa-solid fa-circle-play mr-2"></i>Watch Video
				</div>
			</div>
			<div className="item text-white mr-5 rounded-lg">
				<img className="brightness-50 rounded-lg"
					 src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Drink"/>
				<div className="top-left text-left p-5">
					<p className="text-sm font-bold">Manas, India</p>
					<p className="text-sm">Data Scientist</p>
					<div className="mt-10 italic">
						"Working with Aviato has shown me how wrong the work-life balance model is at traditional
						in-office
						teams."
					</div>
				</div>
				<div className="bottom-left text-lg p-5"><i className="fa-solid fa-circle-play mr-2"></i>Watch Video
				</div>
			</div>
			<div className="item text-white mr-5 rounded-lg">
				<img className="brightness-50 rounded-lg"
					 src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Drink"/>
				<div className="top-left text-left p-5">
					<p className="text-sm font-bold">Gultekin, Turkey</p>
					<p className="text-sm">ML Engineer</p>
					<div className="mt-10 italic">
						"Matching companies with the best developers and developers with their dream jobs. Everyone who
						works at Aviato really feels they're a part of something big."
					</div>
				</div>
				<div className="bottom-left text-lg p-5"><i className="fa-solid fa-circle-play mr-2"></i>Watch Video
				</div>
			</div>
			<div className="item text-white mr-5 rounded-lg">
				<img className="brightness-50 rounded-lg"
					 src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Drink"/>
				<div className="top-left text-left p-5">
					<p className="text-sm font-bold">Numan, Pakistan</p>
					<p className="text-sm">Android Developer</p>
					<div className="mt-10">
						"I have never enjoyed working more and I feel very fulfilled to be involved in such exciting
						projects. Aviato often meets my expectation, but often exceeds them."
					</div>
				</div>
				<div className="bottom-left text-lg p-5"><i className="fa-solid fa-circle-play mr-2"></i>Watch Video
				</div>
			</div>
			<div className="item text-white mr-5 rounded-lg">
				<img className="brightness-50 rounded-lg"
					 src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Drink"/>
				<div className="top-left text-left p-5">
					<p className="text-sm font-bold">Mukul, India</p>
					<p className="text-sm">Technical Architect</p>
					<div className="mt-10">
						"The best thing about Aviato is that it gives me a sense of freedom. I realized how important a
						healthy work-life balance is for my career growth."
					</div>
				</div>
				<div className="bottom-left text-lg p-5"><i className="fa-solid fa-circle-play mr-2"></i>Watch Video
				</div>
			</div>
			<div className="item text-white mr-5 rounded-lg">
				<img className="brightness-0 rounded-lg"
					 src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Drink"/>
				<div className="top-left text-left p-5">
					<p className="text-sm font-bold">Alexendra, Costa Rica</p>
					<p className="text-sm">Software Architect</p>
					<div className="mt-10">
						"With timely payments, consistent growth, and long-term opportunities, I am a much
						better and happier place."
					</div>
				</div>
				<div className="bottom-left text-lg p-5"><i className="fa-solid fa-circle-play mr-2"></i>Watch Video
				</div>
			</div>
			<div className="item text-white mr-5 rounded-lg">
				<img className="brightness-50 rounded-lg"
					 src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Drink"/>
				<div className="top-left text-left p-5">
					<p className="text-sm font-bold">Alexendra, Costa Rica</p>
					<p className="text-sm">Software Architect</p>
					<div className="mt-10">
						"With timely payments, consistent growth, and long-term opportunities, I am a much
						better and happier place."
					</div>
				</div>
				<div className="bottom-left text-lg p-5"><i className="fa-solid fa-circle-play mr-2"></i>Watch Video
				</div>
			</div>
		</div>


		<div id="controls-carousel" className="relative max-w-screen-xl mx-auto" data-carousel="static">

			<div className="relative h-56 overflow-hidden rounded-lg md:h-96">

				<div className="hidden duration-700 ease-in-out" data-carousel-item>
					<div className="text-4xl text-center mt-36">
						"Aviato books $87M at a $7.1B valuation to help source, hire <br/>
						and manage engineers remotely"
					</div>
				</div>

				<div className="hidden duration-700 ease-in-out" data-carousel-item="active">
					<div className="text-4xl text-center mt-36">
						"Aviato named one of America's Best Startup Employers for <br/>
						2022 by Forbes"
					</div>
				</div>

				<div className="hidden duration-700 ease-in-out" data-carousel-item>
					<div className="text-4xl text-center mt-36">
						"Ranked no. 1 in The Information's "50 Most Promising <br/>
						Startups of 2021" in the B2B category"
					</div>
				</div>

				<div className="hidden duration-700 ease-in-out" data-carousel-item>
					<div className="text-4xl text-center mt-36">
						"Aviato named to Fast Company's World's Most Innovative <br/>
						Companies 2021 for placing remote devs at top firms via <br/>
						Al-powered vetting"
					</div>
				</div>

				<div className="hidden duration-700 ease-in-out" data-carousel-item>
					<div className="text-4xl text-center mt-36">
						"Aviato helps entrepreneurs tap into the global talent pool <br/>
						to hire elite, pre-vetted remote engineers at the push of a <br/>
						button"
					</div>
				</div>
			</div>

			<button type="button"
					className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
					data-carousel-prev>
            <span
				className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none"
					 stroke="currentColor"
					 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
			</button>
			<button type="button"
					className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
					data-carousel-next>
            <span
				className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none"
					 stroke="currentColor"
					 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span className="sr-only">Next</span>
            </span>
			</button>
		</div>


		<section className="max-w-screen-lg mx-auto mb-20">
			<div className="flex justify-between">
				<img src="src/assets/landing/images/icons/review icon/tc.svg" alt=""/>
				<img src="src/assets/landing/images/icons/review icon/forbes.svg" alt=""/>
				<img src="src/assets/landing/images/icons/review icon/the-info.svg" alt=""/>
				<img src="src/assets/landing/images/icons/review icon/fs.svg" alt=""/>
				<img src="src/assets/landing/images/icons/review icon/entrepreneur.svg" alt=""/>
			</div>
		</section>


		<section className="bg-[#212121] font-sans">
			<div className="max-w-screen-xl mx-auto py-16 text-white text-center">
				<h1 className="text-4xl font-semibold mb-12">Hire remote developers</h1>
				<p className="mb-8 text-xl">
					Tell us the skills you need and we'll find the best developer for you in days, <br/> not weeks.
				</p>
				<button type="button"
						className="text-white bg-blue-600 hover:bg-blue-500 font-medium rounded-md text-lg px-5 py-2.5 mr-2 mb-2">
					Hire Developers
				</button>
			</div>
		</section>


		<footer className="bg-[#1e1e1e] font-sans">
			<div className="px-4 py-28 max-w-screen-xl mx-auto">
				<div className="md:grid md:grid-cols-3">
					<div className="mb-6 md:mb-0 flex flex-col justify-between">
						<div>
							<a href="https://flowbite.com/" className="flex items-center">
								{/*../assets/landing/images/icons/Aviato-logo-alt.png*/}
								<Image src="src/assets/landing/images/icons/Aviato-logo-alt.png"  className="h-8 mr-3" alt={"FlowBite Logo"}/>
								<span className="self-center text-3xl text-white font-bold whitespace-nowrap">
                                Web Alliance
                            </span>
							</a>
						</div>

						<div className="flex mt-4 space-x-6 sm:mt-0 content-end">
							<a href="https://www.facebook.com/" target="_blank"
							   className="text-gray-500 hover:text-gray-900">
								<i className="fa-brands fa-facebook w-5 h-5"></i>
								<span className="sr-only">Facebook page</span>
							</a>
							<a href="https://www.twitter.com/" target="_blank"
							   className="text-gray-500 hover:text-gray-900">
								<i className="fa-brands fa-twitter w-5 h-5"></i>
								<span className="sr-only">Twitter page</span>
							</a>
							<a href="https://www.linkedin.com/" target="_blank"
							   className="text-gray-500 hover:text-gray-900">
								<i className="fa-brands fa-linkedin w-5 h-5"></i>
								<span className="sr-only">Linkedin page</span>
							</a>
							<a href="https://www.instagram.com/" target="_blank"
							   className="text-gray-500 hover:text-gray-900">
								<i className="fa-brands fa-instagram w-5 h-5"></i>
								<span className="sr-only">Instagram page</span>
							</a>
							<a href="https://www.youtube.com/" target="_blank"
							   className="text-gray-500 hover:text-gray-900">
								<i className="fa-brands fa-dribbble w-5 h-5"></i>
								<span className="sr-only">Youtube account</span>
							</a>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ml-10">
						<div className="text-white">
							<h2 className="mb-6 text-sm font-bold uppercase">Companies</h2>
							<ul>
								<li className="mb-4">
									<a href="https://flowbite.com/" className="hover:underline">Hire Developers</a>
								</li>
								<li className="mb-4">
									<a href="https://tailwindcss.com/" className="hover:underline">Hire Development
										Team</a>
								</li>
								<li className="mb-4">
									<a href="https://tailwindcss.com/" className="hover:underline">Book a Call</a>
								</li>
								<li className="mb-4">
									<a href="https://tailwindcss.com/" className="hover:underline">Hire for Specific
										Skills</a>
								</li>
								<li className="mb-4">
									<a href="https://tailwindcss.com/" className="hover:underline">Customer Reviews</a>
								</li>
								<li className="mb-4">
									<a href="https://tailwindcss.com/" className="hover:underline">How to Hire</a>
								</li>
								<li className="mb-4">
									<a href="https://tailwindcss.com/" className="hover:underline">Development
										Services</a>
								</li>
								<li className="mb-4">
									<a href="https://tailwindcss.com/" className="hover:underline">Interview Q/A</a>
								</li>
								<li className="mb-4">
									<a href="https://tailwindcss.com/" className="hover:underline">Hiring src/assets/landings</a>
								</li>
							</ul>
						</div>
						<div className="text-white">
							<h2 className="mb-6 text-sm font-bold uppercase">Developers</h2>
							<ul>
								<li className="mb-4">
									<a href="https://github.com/themesberg/flowbite" className="hover:underline">
										Apply for Jobs
									</a>
								</li>
								<li className="mb-4">
									<a href="https://github.com/themesberg/flowbite" className="hover:underline">
										Developer Login
									</a>
								</li>
								<li className="mb-4">
									<a href="https://github.com/themesberg/flowbite" className="hover:underline">
										Remote Developer Jobs
									</a>
								</li>
								<li className="mb-4">
									<a href="https://github.com/themesberg/flowbite" className="hover:underline">
										Developer Reviews
									</a>
								</li>
								<li className="mb-4">
									<a href="https://github.com/themesberg/flowbite" className="hover:underline">
										Knowledge Base
									</a>
								</li>
								<li className="mb-4">
									<a href="https://github.com/themesberg/flowbite" className="hover:underline">
										Remote Guide
									</a>
								</li>
								<li>
									<a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
										Jobs for LatAm
									</a>
								</li>
							</ul>
						</div>
						<div className="text-white">
							<h2 className="mb-6 text-sm font-semibold uppercase">Company</h2>
							<ul>
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Blog
									</a>
								</li>
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Press
									</a>
								</li>
								<li className="mb-4">
									<a href="#" className="hover:underline">
										About Us
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">Careers</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="ml-24">
						<div className="text-white">
							<h2 className="mb-6 text-sm font-semibold uppercase">Contact</h2>
							<ul>
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Contact Us
									</a>
								</li>
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Help Center
									</a>
								</li>
								<li className="mb-4">
									<a href="#" className="hover:underline">
										Developer Support
									</a>
								</li>
								<li>
									<a href="#" className="hover:underline">
										Customer Support
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
				<div className="sm:flex sm:items-center sm:justify-between">
					<p className="text-sm text-gray-500">
						<span className="text-2xl text-left">© 2023 Aviato</span>
						<span className="block text-left mt-4">This site is built for educational purposes only.</span>
					</p>

					<ul className="flex gap-6 text-gray-500">
						<li className="mb-4">
							<a href="#" className="hover:underline">Site map</a>
						</li>
						<li className="mb-4">
							<a href="#" className="hover:underline">Terms of Services</a>
						</li>
						<li className="mb-4">
							<a href="#" className="hover:underline">Privacy Policy</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>

	</>
}