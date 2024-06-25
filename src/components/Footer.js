import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import FooterMail from "./FooterMail";
import { Icon } from "@/components/Icon";
import FooterImage from "./FooterImage";
const siteLinks = [
	{ label: "Home", href: "/" },
	{ label: "About us", href: "/about" },
	{ label: "Gallery", href: "/gallery" },
	{ label: "Parents", href: "/gallery" },
	{ label: "Contact us", href: "/contact" },
];

function SocialLink({ className, href, icon }) {
	return (
		<Link
			className={clsx(
				"flex justify-center items-center w-10 h-10 bg-purple-500 rounded-full duration-300 ease-in-out hover:bg-purple-600",
				className,
			)}
			href={href}
		>
			<Icon icon={icon} className="w-5 h-5 text-white" />
		</Link>
	);
}

export const Footer = async ({ programs, contact }) => {
	return (
		<footer className="px-4 pt-16 space-y-8 bg-yellow-100 divide-y divide-purple-400/20 sm:px-6 sm:pt-20 lg:px-8">
			{/* Top section: blocks */}
			<div className="flex flex-wrap justify-center max-w-md gap-8 mx-auto sm:max-w-none lg:max-w-screen-2xl">
				{/* Block 1 */}
				<div className="flex flex-col lg:mx-auto lg:flex-1">
					{/* Logo */}
					<FooterImage />
					{/* 
          <div className="flex justify-center lg:justify-start">
            <div className="w-60"></div>
          </div> */}
					{/* Mission statement */}
					{/* <div className="mt-6 text-lg text-center text-purple-800 lg:text-left">
            Sarat Chandra IIT Academy is a premier coaching institute that
            provides comprehensive training for IIT JEE, EAPCET, and other
            competitive exams.
          </div> */}
					{/* Social links */}
					{/* <div className="w-full mt-5 lg:mt-6">
            <div className="flex justify-center space-x-4 lg:justify-start">
              <SocialLink href="#0" icon="instagram" />
              <SocialLink href="#0" icon="facebook" />
              <SocialLink href="#0" icon="twitter" />
            </div>
          </div> */}
				</div>
				{/* Block 2 */}

				{/* Block 3 */}
				{/* Block 4 */}
				<div className="flex flex-col lg:mx-auto lg:flex-1">
					<h6 className="relative text-xl font-bold tracking-wide text-center text-purple-900 lg:text-left">
						<span className="relative z-20">Contact us</span>
						<span className="absolute left-0 z-10 w-12 h-1 rounded-lg -bottom-1 bg-gradient-to-r from-yellow-400 to-yellow-500" />
					</h6>
					{/* Contact information */}
					<ul className="flex flex-col mt-6 space-y-5">
						{/* Address */}
						<li className="flex">
							<div>
								<span className="flex items-center justify-center bg-yellow-400 w-11 h-11 rounded-2xl">
									<Icon icon="mapPin" className="w-6 h-6 text-purple-700" />
								</span>
							</div>
							<div className="flex-1 mt-0 ml-3 xl:ml-4">
								<h5 className="flex items-center text-base font-semibold text-purple-900">
									Address
								</h5>
								<p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
									Benz Circle, Vijayawada; Ashoknagar, Hyderabad
								</p>
							</div>
						</li>
						{/* Email */}
						<li className="flex">
							<div>
								<span className="flex items-center justify-center bg-purple-200 w-11 h-11 rounded-2xl">
									<Icon icon="mail" className="w-6 h-6 text-purple-700" />
								</span>
							</div>
							<div className="flex-1 ml-3 xl:ml-4">
								<h5 className="flex items-center text-base font-semibold text-purple-900">
									Email
								</h5>
								<p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
									<FooterMail />
								</p>
							</div>
						</li>
						{/* Phone number */}
						<li className="flex">
							<div>
								<span className="flex items-center justify-center w-11 h-11 bg-rose-200 rounded-2xl">
									<Icon icon="phone" className="w-6 h-6 text-purple-700" />
								</span>
							</div>
							<div className="flex-1 ml-3 xl:ml-4">
								<h5 className="flex items-center text-base font-semibold text-purple-900">
									Phone
								</h5>
								<p className="mt-0.5 text-sm leading-relaxed text-purple-800 text-opacity-90">
									9494188688 and 9494688188
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			{/* Bottom section */}
			<div className="flex flex-col justify-between max-w-md py-8 mx-auto sm:max-w-none sm:flex-row lg:max-w-screen-2xl">
				{/* Copyright note */}
				<span className="text-base text-purple-800/90">
					© {new Date().getFullYear()} SCA Academy. All rights reserved.
				</span>
				{/* <p className="flex items-center mt-0.5 text-purple-800/90">
          Made with
          <Icon icon="coffee" className="w-5 h-5 mx-1" />
          <span>
            by{' '}
            <Link
              className="text-purple-700 hover:text-purple-900 hover:underline"
              href="https://www.tailwindawesome.com/"
              target="_blank"
            >
              Tailwind Awesome
            </Link>
          </span>
        </p> */}
			</div>
		</footer>
	);
};
