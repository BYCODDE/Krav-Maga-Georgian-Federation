import ReusableTitle from "../ReusableTitle";
import { socialLinks } from "../../lib/footerInfo";
import { footerInfo } from "../../lib/footerInfo";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full p-[40px] bg-[#181818] border-t border-[#333]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex flex-col gap-[20px] text-white">
          <ReusableTitle img_src={"mainLogo.png"} h1_text={t("krav")} />
          {footerInfo.map((info) => (
            <div key={info.id}>
              <p className={`${info.style} text-[#C1C1C1]`}>{t(info.gmail)}</p>
              <p className={`${info.style} text-[#C1C1C1]`}>
                {t(info.address)}
              </p>
              <p className={`${info.style} text-[#C1C1C1]`}>{t(info.phone)}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center  md:flex-row">
          <h3 className="font-bebas md:text-left text-[16px] lg:text-[18px] font-bold  text-white">
            {t("followUs")}
          </h3>
          <div className="flex gap-1 md:flex-row md:gap-6 flex-row">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.style} text-[#C1C1C1] hover:text-[#FFFFFF]`}
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
