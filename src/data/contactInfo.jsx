import LinkedIn, { GitHub, GMail, Telegram, Resume } from "../components/Icons";
// import {  Discord, Twitter } from "../components/Icons";
import ResumeLink from "../assets/resume.pdf"
const contactInfo = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/prafull-tiwari-756208251",
        icon: <LinkedIn />,
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/Pkamal2002?tab=repositories",
        icon: <GitHub />,
    },
    {
        id: 3,
        name: "Mail",
        link: "mailto:pkamal2002@gmail.com",
        icon: <GMail />,
    },

    {
        id: 5,
        name: "Resume",
        link: ResumeLink,
        icon: <Resume />,
        download: true
    }
    // {
    //   id: 6,
    //   name: "Twitter",
    //   link: "twitter.com",
    //   icon: <Twitter />,
    // },
    // {
    //   id: 7,
    //   name: "Discord",
    //   link: "discord.com",
    //   icon: <Discord />,
    // },
];

export default contactInfo;