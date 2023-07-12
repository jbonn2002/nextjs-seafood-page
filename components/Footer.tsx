"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/Navigation-menu";
import { Dot } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/Button";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-between w-full h-[150px] bg-[#151515] text-white">
        <Link className="flex font-roslindale" href="/">
          <Button
            className="font-thin text-white decoration-transparent"
            variant="link"
          >
            <Dot size={64} className="text-gray-700" />
            NSUOMNAM
          </Button>
        </Link>
        <div className="absolute translate-y-16 translate-x-10">
          <span className="text-[#7C7C7C] text-xs">
            10:45AM <br />
            E138°00'N36°00'
          </span>
        </div>
        <div className="flex justify-between text-xs">
          <ul className="self-center">
            <li className="mb-1">
              <Link href="/docs" legacyBehavior passHref>
                History
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/docs" legacyBehavior passHref>
                Menu
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/docs" legacyBehavior passHref>
                Trim
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/docs" legacyBehavior passHref>
                Map
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-between text-xs text-[#7C7C7C]">
          <ul className="self-center">
            <li className="mb-1">
              <Link href="/docs" legacyBehavior passHref>
                Instagram
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/docs" legacyBehavior passHref>
                Telegram
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/docs" legacyBehavior passHref>
                Youtube
              </Link>
            </li>
            <li className="mb-1">
              <Link href="/docs" legacyBehavior passHref>
                Twitter
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-2">
          <Button variant="default" className="bg-orange-400">
            Contact
          </Button>
        </div>
      </div>
      <div className="absolute translate-x-[80vw] translate-y-[-85px]">
        <span className="text-[#7C7C7C] text-xs">
          Thank you for choosing <br />
          <span className="font-roslindale font-thin">NSUOMNAM</span>
        </span>
      </div>
      <div className="w-full bg-[#151515] flex justify-center">
        <div className="bg-hero bg-cover bg-center w-[95vw] h-[85px]"></div>
      </div>
    </div>
  );
};

export default Footer;
