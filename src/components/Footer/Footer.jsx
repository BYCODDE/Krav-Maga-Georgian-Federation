import ReusableTitle from "../ReusableTitle";
import { socialLinks } from "../../lib/footerInfo";
import { footerInfo } from "../../lib/footerInfo";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full mt-4">
      <div className="flex flex-row justify-between items-start gap-8">
        <div className="flex flex-col gap-[20px]">
          <ReusableTitle img_src={"mainLogo.png"} h1_text={t("krav")} />
          {footerInfo.map((info) => (
            <div key={info.id}>
              <p className={`${info.style}`}>{t(info.gmail)}</p>{" "}
              <p className={`${info.style}`}>{t(info.address)}</p>{" "}
              <p className={`${info.style}`}>{t(info.phone)}</p>{" "}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center md:block md:flex-row md:items-start">
          <h3
            className={
              "font-bebas md:text-left text-[15px] lg:text-xl font-bold mb-4 text-center"
            }
          >
            {t("followUs")}
          </h3>
          <div className="flex gap-0 md:flex-row md:gap-8 flex-col">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.style}`}
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
