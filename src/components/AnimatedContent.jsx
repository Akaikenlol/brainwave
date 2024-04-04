"use client";

import React from "react";
import Button from "./Button";
import { curve } from "../assets";
import { useRef } from "react";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const AnimatedContent = () => {
	const container = useRef(null);
	const prefersReducedMotion = usePrefersReducedMotion();
	gsap.registerPlugin(useGSAP);

	useGSAP(
		() => {
			if (prefersReducedMotion) {
				gsap.set(
					".hero__heading, .hero__body , .hero__button , .hero__image , .hero__glow ",
					{ opacity: 1 }
				);
				return;
			}
			const tl = gsap.timeline();

			tl.fromTo(
				".hero_heading",
				{ scale: 0.5 },
				{ scale: 1, opacity: 1, duration: 1.4 }
			);
			tl.fromTo(
				".hero_semi_heading",
				{ scale: 0.5 },
				{ scale: 1, opacity: 1, duration: 1.5 },
				"-=1"
			);
			tl.fromTo(
				".hero_body",
				{ y: 20 },
				{ y: 0, opacity: 1, duration: 1.2 },
				"-=0.6"
			);
			tl.fromTo(
				".hero_button",
				{ y: 20 },
				{ y: 0, opacity: 1, duration: 1.5 },
				"-=0.8"
			);
		},
		{ scope: container }
	);
	return (
		<div
			className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]"
			ref={container}
		>
			<h1 className="h1 mb-6 hero_heading">
				Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {""}
				<span className="inline-block relative hero_semi_heading">
					Brainwave
					<img
						src={curve}
						alt="curve"
						width={624}
						height={28}
						className="absolute top-full left-0 w-full xl:-mt-2"
					/>
				</span>
			</h1>
			<p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 hero_body">
				Unleash the power of AI within Brainwave. Upgrade your productivity with
				Brainwave, the open AI chat app.
			</p>
			<Button href={"/pricing"} white className="hero_button">
				Get Started
			</Button>
		</div>
	);
};

export default AnimatedContent;
