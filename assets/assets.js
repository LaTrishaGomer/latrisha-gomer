import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import down_icon from './down-icon.png';
import diva_image from './diva_image.png';
import blog_post_image from './blog-post-image.png';
import profile_img_pink from './profile-img-pink.png';
import profile_img_pink_dark from './profile-img-pink-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    down_icon,
    diva_image,
    blog_post_image,
    profile_img_pink,
    profile_img_pink_dark,
};

export const workData = [
    {
        title: 'What Actually Happens When Your Code Runs?',
        description: "You type code, you hit run, but what happens in between? Let's pull back the curtain.",
        bgImage: '/work-5.png',
        slug: 'what-actually-happens-when-your-code-runs',
    },
    {
        title: 'The Call Stack Explained: What I Wish I Knew on Day One',
        description: "It's one of the first things senior engineers reference and one of the last things anyone actually explains.",
        bgImage: '#',
    },
  
    {
        title: 'Value Types vs Reference Types: Why It Actually Matters',
        description: "It sounds like a trivia question until it breaks your code. Here's what the difference actually means in practice.",
    },
        {
        title: 'IL and JIT Compilation: The Step Between Your Code and the Machine',
        description: "Your C# code doesn't run directly. It takes a detour first. Here's what that detour looks like.",
        bgImage: '/work-7.png',
    },
        {
        title: 'Polymorphism: The Fancy Word for Something You Already Do',
        description: "It's one of those terms that sounds intimidating until you realize you've been doing it all along.",
        bgImage: '/work-7.png',
    },
        {
        title: 'Interfaces vs Abstract Classes: The Difference Nobody Explained Clearly',
        description: "Two concepts that look similar on the surface but serve very different purposes. Let's break it down simply.",
        bgImage: '/work-7.png',
    },
        {
        title: 'List vs Array: When Does It Actually Matter?',
        description: 'Most of the time either works, but knowing when it matters could save you a headache down the road.',
        bgImage: '/work-7.png',
    },
        {
        title: 'When Should You Throw an Exception? (And When You Should Not)',
        description: "Throwing exceptions everywhere isn't the answer. Neither is swallowing errors and hoping for the best. Here's how I think about it.",
        bgImage: '/work-7.png',
    },
        {
        title: 'Event Listeners: How Your Code Knows When You Click Something',
        description: "That button didn't just know you clicked it. Here's the quiet mechanism running behind the scenes.",
        bgImage: '/work-7.png',
    },
         {
        title: 'Dev, Staging, and Prod: Understanding Your Environments',
        description: "Early on I had no idea why there were three versions of the same app. Now I can't imagine working without them.",
        bgImage: '/work-7.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Custom Website Development', description: 'Tailored websites built with JavaScript and React to match your brand and business goals. I also work with WordPress & Squarespace', link: '' },
    { icon: assets.mobile_icon, title: 'E-commerce Site Development', description: 'Seamless online stores with secure checkout, mobile-friendly design, and conversion-focused features.', link: '' },
    { icon: assets.ui_icon, title: 'Brand Identity & Web Design', description: 'A cohesive brand experience with custom logos, typography, color palettes, and web design that reflects your unique style.', link: '' },
    { icon: assets.graphics_icon, title: 'Website Maintenance & Optimization', description: 'Keep your site running smoothly with updates, performance enhancements, and ongoing support.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Skills', description: 'User research, Competitive Analysis, SEO' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Tools', description: 'Figma, Canva, WordPress, Squarespace' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];