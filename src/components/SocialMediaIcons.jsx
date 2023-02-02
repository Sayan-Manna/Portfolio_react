import { SocialIcon } from "react-social-icons";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center items-center my-10 gap-7">
      <SocialIcon
        url="https://github.com/Sayan-Manna"
        className="cursor-pointer"
        target={"_blank"}
      />
      <SocialIcon
        url="https://www.linkedin.com/in/sayan-manna-374b24190/"
        className="cursor-pointer"
        target={"_blank"}
      />
      <SocialIcon
        url="https://twitter.com/__Sayan_Manna__"
        className="cursor-pointer"
        target={"_blank"}
      />

      {/* <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com/Sayan-Manna"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png" />
      </a> */}
    </div>
  );
};

export default SocialMediaIcons;
