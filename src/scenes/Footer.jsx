import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="flex justify-center items-center md:justify-center text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            SAYAN MANNA
          </p>
          {/* <p className="font-playfair text-md text-yellow">
            ©2022 ESPER. All Rights Reserved.
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
