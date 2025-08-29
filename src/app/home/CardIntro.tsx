"use client"
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Faces } from "@/constants/assets";
import { Routes } from "@/constants/routes";

export default function CardIntro() {
  useEffect(() => {
    const loadEmbedSocial = () => {
      // Remove existing script if it exists
      const existingScript = document.getElementById('EmbedSocialHashtagScript');
      if (existingScript) {
        existingScript.remove();
      }

      // Create and load the script fresh
      const script = document.createElement('script');
      script.src = 'https://embedsocial.com/cdn/ht.js';
      script.id = 'EmbedSocialHashtagScript';
      script.async = true;
      document.head.appendChild(script);
    };

    loadEmbedSocial();

    // Cleanup function
    return () => {
      const script = document.getElementById('EmbedSocialHashtagScript');
      if (script) {
        script.remove();
      }
    };
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <div
      id="introduction"
      className="flex bg-white/60 justify-center items-center"
    >
      <div className="flex gap-20 mt-24 mb-48">
        <div className="relative w-fit max-w-[47rem] pt-14 pb-20 pr-14 pl-28 flex flex-col gap-8 ddc-border bg-white">
          <h2 className="ddc-label left-36">Who we are</h2>
          <h2>
            The DDC is an official, UW and WLU registered, student-run
            organization that aims to enhance the Double Degree student
            experience.
          </h2>
          <p>
            The club hosts several{" "}
            <span className="font-bold">
              {" "}
              social events, networking & mentorship opportunities
            </span>
            , and
            <Link
              href={Routes.Resources}
            >
            <span className="font-bold underline"> academic resources</span>
            </Link>
            .
            <span className="font-bold"> Our goal</span> is to provide double
            degrees opportunities to find their community and support.
          </p>
          <Link
            className="grey-box"
            href={Routes.Resources}
          >
            <h4 className="underline">
              VIEW OUR DOUBLE DEGREE
              <br />RESOURCES
            </h4>
          </Link>
          <Image
            src={Faces.Smile}
            width={212}
            height={212}
            alt=""
            className="absolute -right-6 bottom-0 translate-y-1/2"
          />
        </div>
        <div className="embedsocial-hashtag relative w-fit ddc-border bg-white" data-ref="6391d377ec6d3fdeb6f57cfb8de1df8fd9c68edd" data-lazyload="yes">
          <a className="feed-powered-by-es feed-powered-by-es-slider-img es-widget-branding" href="https://embedsocial.com/social-media-aggregator/" target="_blank" title="Instagram widget" rel="noopener noreferrer">
            <Image
            width={300}
            height={496}
            src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp" alt="EmbedSocial"/> 
            <div className="es-widget-branding-text">Instagram widget</div>
          </a>
        </div>
        
      </div>
    </div>

    
  );
}
