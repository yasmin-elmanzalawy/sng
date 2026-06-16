"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { div } from "framer-motion/client";

export default function SuperNovaLogo() {
    // const logoRef = useRef<SVGSVGElement>(null);

    // useEffect(() => {
    //   const paths = logoRef.current?.querySelectorAll("path");

    //   gsap.set(paths, {
    //     strokeDasharray: 1000,
    //     strokeDashoffset: 1000,
    //   });

    //   const tl = gsap.timeline({ repeat: -1 });

    //   tl.to(paths, {
    //     strokeDashoffset: 0,
    //     duration: 2,
    //     stagger: 0.3,
    //     ease: "power2.inOut",
    //   })
    //     .to(
    //       ".supernova-text",
    //       {
    //         opacity: 1,
    //         scale: 1,
    //         duration: 1,
    //       },
    //       "-=0.5"
    //     )
    //     .to(
    //       logoRef.current,
    //       {
    //         opacity: 0,
    //         scale: 1.5,
    //         duration: 1,
    //       },
    //       "+=1"
    //     )
    //     .to(".supernova-text", {
    //       opacity: 0,
    //       y: -30,
    //       duration: 1,
    //     });
    // }, []);

  return (
   <div></div>
  );
}