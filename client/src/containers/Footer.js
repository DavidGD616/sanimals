import React from "react";
import InstagramIcon from "../svg/InstagramIcon";
import GithubIcon from "../svg/GithubIcon";
import VisaIcon from "../svg/VisaIcon";
import MasterCardIcon from "../svg/MasterCardIcon";
import GooglePayIcon from "../svg/GooglePayIcon";
import ApplePayIcon from "../svg/ApplePayIcon";
import PayPalIcon from "../svg/PayPalIcon";
import { Link, Divider } from "@nextui-org/react";

function Footer() {
  return (
    <footer className="footer">
      <div className="py-7">
        <div className="flex flex-col">
          <p className="text-white text-lg font-light text-center">
          Find me here
          </p>
          <ul className="flex flex-row justify-center">
            <li className="p-[1.1em]">
              <Link isExternal href="https://www.instagram.com/iamdavidgd_/">
                <InstagramIcon size={32} />
              </Link>
            </li>
            <li className="p-[1.1em]">
              <Link isExternal href="https://github.com/DavidGD616">
                <GithubIcon size={32} />
              </Link>
            </li>
          </ul>
        </div>
        <Divider className="my-4 bg-gray-600" />
        <div>
          <ul className="flex flex-row justify-center items-center">
            <li className="p-[0.5rem]">
              <VisaIcon />
            </li>
            <li className="p-[0.5rem]">
              <MasterCardIcon />
            </li>
            <li className="p-[0.5rem]">
              <GooglePayIcon />
            </li>
            <li className="p-[0.5rem]">
              <ApplePayIcon />
            </li>
            <li className="p-[0.5rem]">
              <PayPalIcon />
            </li>
          </ul>
        </div>
        
        <div>
          <label className="flex justify-center text-[1rem] text-slate-300 py-4">
            Sanimals created by {" "}
            <Link
              className="text-[.9rem] pl-2"
              color="success"
              isExternal
              href="https://github.com/DavidGD616"
            >
              David Guerrero
            </Link>
          </label>

          <div className="flex flex-col md:flex-row justify-center items-center">
            <div>
              <span className="before:content-['•'] before:flex-1 before:mr-2 before:text-zinc-600 before:text-center">
                <Link
                  className="text-[.9rem] text-slate-300 p-2"
                  color="foreground"
                  href="/policies/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </span>
              <span className="before:content-['•'] before:flex-1 before:mr-2 before:text-zinc-600 before:text-center">
                <Link
                  className="text-[.9rem] text-slate-300 p-2"
                  color="foreground"
                  href="/policies/shipping-policy"
                >
                  Shipping Policy
                </Link>
              </span>
            </div>
            <div>
              <span className="before:content-['•'] before:flex-1 before:mr-2 before:text-zinc-600 before:text-center">
                <Link
                  className="text-[.9rem] text-slate-300 p-2"
                  color="foreground"
                  href="/policies/terms-of-service"
                >
                  Terms of Service
                </Link>
              </span>
              <span className="before:content-['•'] before:flex-1 before:mr-2 before:text-zinc-600 before:text-center">
                <Link
                  className="text-[.9rem] text-slate-300 p-2"
                  color="foreground"
                  href="/policies/refund-policy"
                >
                  Refund Policy
                </Link>
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export { Footer };
