import Image from "next/image";

import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";

export const ProgramHero = ({ hero, site, title }) => {
	return (
		<section className="relative px-4 pt-16 bg-gradient-to-b to-purple-50 from-purple-25 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-screen-xl">
				{/* Header */}
				<div className="relative">
					<div className="flex justify-center flex-col gap-4">
						<div className="flex justify-center">
							<Button
								href={
									"https://www.dropbox.com/scl/fi/aum2dddcrjchvfobqggv8/Image-from-Next-IAS.pdf?rlkey=dog183tb98z4sln3ruwjx9mt1&st=2724qfi6&dl=0"
								}
								className="top-[-40px]"
							>
								UPSC Civils 2024 Prelims Paper 1 Answer key with detailed
								explanation
							</Button>
						</div>
						<div className="flex justify-center">
							<Button href={site} className="top-[-40px]">
								Click here for {title} website
							</Button>
						</div>
					</div>

					<div className="flex justify-center">
						<span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
							{hero.tagline}
						</span>
					</div>
					<h2 className="mx-auto mt-4 max-w-3xl text-center text-purple-900 h1">
						{hero.headline}
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-xl leading-relaxed text-center text-purple-800 sm:mt-5">
						{hero.text}
					</p>
					{/* CTA button */}
					<div className="flex justify-center mt-8">
						<Button href={hero.form} className={"text-center text-wrap"}>
							{hero.action.label}
							{hero.action.icon && (
								<Icon
									icon="arrowNarrowRight"
									className="ml-3 w-6 h-6 group-hover:animate-horizontal-bounce"
									stroke={2}
								/>
							)}
						</Button>
					</div>
				</div>
				{/* Hero image */}
				{/* <div className="relative z-10 mt-14 sm:mt-16">
          <div className="relative aspect-h-2 aspect-w-3 sm:aspect-h-9 sm:aspect-w-16">
            <Image
              className="object-cover absolute inset-0 w-full h-full rounded-3xl shadow-xl"
              src={hero.image.src}
              fill
              priority
              sizes="(min-width: 1280px) 80rem, (min-width: 1024px) calc(100vw - 4rem), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
              alt={hero.headline}
            />
          </div>
        </div> */}
				<div className="relative z-10 mt-14 sm:mt-16">
					<div className="relative aspect-h-2 aspect-w-3 sm:aspect-h-9 sm:aspect-w-16">
						<iframe
							width="560"
							height="315"
							src={hero.video}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
							className="absolute inset-0 w-full h-full rounded-3xl shadow-xl"
						></iframe>
					</div>
				</div>
				{hero.video_2 && (
					<div className="relative z-10 mt-14 sm:mt-16">
						<div className="relative aspect-h-2 aspect-w-3 sm:aspect-h-9 sm:aspect-w-16">
							<iframe
								width="560"
								height="315"
								src={hero.video_2}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								className="absolute inset-0 w-full h-full rounded-3xl shadow-xl"
							></iframe>
						</div>
					</div>
				)}
			</div>
			{/* Background overlay effect */}
			<div className="hidden absolute inset-x-0 bottom-0 top-auto z-0 h-64 bg-white sm:block" />
		</section>
	);
};
