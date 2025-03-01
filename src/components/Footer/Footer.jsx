import ReusableTitle from "../ReusableTitle/ReusableTitle";

import { socialLinks } from "../../lib/footerInfo";
import { footerInfo } from "../../lib/footerInfo";

function Footer() {
  return (
    <footer className="  w-full">
      <div className="flex flex-row justify-between items-start gap-8">
        <div className="flex flex-col gap-[20px]">
          <ReusableTitle />
          {footerInfo.map((info) => (
            <p key={info.id} className={`${info.style}`}>
              {info.info}
            </p>
          ))}
        </div>
        <div className="flex flex-col items-center md:block md:flex-row md:items-start">
          <h3 className="font-bebas md:text-left text-[15px] lg:text-xl font-semibold mb-4 text-center">
            Follow Us
          </h3>
          <div className="flex gap-0 md:flex-row md:gap-8 flex-col">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={` ${link.style}`}
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
