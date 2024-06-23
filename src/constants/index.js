import { geekspro, unet, aksoft } from "../../public/assets/images";
import {
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    motion,
    mui,
    nextjs,
    pricewise,
    react,
    redux,
    sass,
    tailwindcss,
    typescript,
    antdesign,
    dent,
    qr,
    cart,
} from "../../public/assets/icons";
export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: antdesign,
        name: "Ant Design",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    
];

export const experiences = [
    {
        title: "Front-end Developer",
        company_name: "GeeksPro",
        icon: geekspro,
        iconBg: "#55A4C5",
        date: "Оct 2023 - Jan 2024",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "We used Ant Design to create a beautiful and polished appearance for our application.",
            "Engaged in the development of CRM system for beverage production plant",
        ],
    },
    {
        title: "Front-end Developer",
        company_name: "UNET",
        icon: unet,
        iconBg: "#b4a2f5",
        date: "Fed 2024 - Apr 2024",
        points: [
            "Working on a system for students and teachers, developing new features for the users.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Front-end Developer",
        company_name: "Aksoft",
        icon: aksoft,
        iconBg: "#1A1A1A",
        date: "May 2024 - Present",
        points: [
            "Developing and maintaining web applications using Next.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Appling new technology for animations like Framer Motion, Tree.js."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Warehouse accounting website for Kolos Brewing Company',
        description: 'CRM system for product and distributor accounting.',
        link: 'https://kls-seven.vercel.app/login',
    },
    {
        iconUrl: qr,
        theme: 'btn-back-green',
        name: 'Component for marking students/employees using QR',
        description: 'Staff or student arrival and departure times can be effectively tracked using this component.',
        link: 'https://photo-app-orcin.vercel.app/',
    },
    {
        iconUrl: cart,
        theme: 'btn-back-blue',
        name: 'Procurement website for the university',
        description: 'The university administration can put out tenders, and accept bids for participation from different organizations.',
        link: 'https://zakupki.kstu.kg/',
    },
    {
        iconUrl: dent,
        theme: 'btn-back-pink',
        name: 'Website of a dental clinic',
        description: 'With Strapi CMS administration panel for content updates.',
        link: 'https://clinic-site-lilac.vercel.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Updated website for the construction company Pioner',
        description: 'The site was rewritten in Next.js for better optimization and SEO, animations were also used..',
        link: 'https://construction-omega-six.vercel.app/',
    }
];