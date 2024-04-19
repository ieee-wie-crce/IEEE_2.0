// IEEE member imports
import rachana from "../assets/TeamMembers/IEEE/rachana.png";
import santo from "../assets/TeamMembers/IEEE/santo.png";
import bhavika from "../assets/TeamMembers/IEEE/bhavika.png";
import aditya from "../assets/TeamMembers/IEEE/aditya.png";
import shivprasad from "../assets/TeamMembers/IEEE/shivprasad.png";
import aryan from "../assets/TeamMembers/IEEE/aryan.png";
import prashant from "../assets/TeamMembers/IEEE/prashant.png";
import mohtashim from "../assets/TeamMembers/IEEE/mohtashim.png";
import vedant from "../assets/TeamMembers/IEEE/vedant.png";
import jerry from "../assets/TeamMembers/IEEE/jerry.png";
import janhavi from "../assets/TeamMembers/IEEE/janhavi.png";
import adarsh from "../assets/TeamMembers/IEEE/adarsh.png";
import samrudhi from "../assets/TeamMembers/IEEE/samrudhi.png";
import wasee from "../assets/TeamMembers/IEEE/wasee.png";
import mrunali from "../assets/TeamMembers/IEEE/mrunali.png";
import keenan from "../assets/TeamMembers/IEEE/keenan.png";
import shine from "../assets/TeamMembers/IEEE/shine.png";
//WIE member imports
import grace from "../assets/TeamMembers/WIE/grace.png";
import sanika from "../assets/TeamMembers/WIE/sanika.png";
import pearl from "../assets/TeamMembers/WIE/pearl.png";
import sania from "../assets/TeamMembers/WIE/sania.png";
import sharli from "../assets/TeamMembers/WIE/sharli.png";
import amanda from "../assets/TeamMembers/WIE/amanda.png";
import anwaya from "../assets/TeamMembers/WIE/anwaya.png";
import kashmira from "../assets/TeamMembers/WIE/kashmira.png";
import nivedita from "../assets/TeamMembers/WIE/nivedita.png";
import gayatri from "../assets/TeamMembers/WIE/gayatri.png";
import mohika from "../assets/TeamMembers/WIE/mohika.png";
import raina from "../assets/TeamMembers/WIE/raina.png";
import janice from "../assets/TeamMembers/WIE/janice.png";
import mokshada from "../assets/TeamMembers/WIE/mokshada.png";
//Event imports
import ai from "../assets/events/AI.png";
import EscapeRoom from "../assets/events/EscapeRoom.png";
import IVStudents from "../assets/events/IVStudents.png";
import IVTeachers from "../assets/events/IVTeachers.png";
import WomenLeadersInStartup from "../assets/events/WomenLeadersInStartup.png";
import entraprenuer from "../assets/events/entraprenuer.png";
import goal_achievement from "../assets/events/goal_achievement.png";
import industry from "../assets/events/industry.png";
import ingenium from "../assets/events/ingenium.png";
import ingenium2 from "../assets/events/ingenium2.png";
import lasermaze from "../assets/events/lasermaze.png";
import prakalp from "../assets/events/prakalp.png";
import research from "../assets/events/research.png";
import start_up from "../assets/events/start_up.png";
import web_designing from "../assets/events/web_designing.png";
import women_healthcare from "../assets/events/women_healthcare.png";
import womensDay from "../assets/events/womensDay.png";
import womensDay23 from "../assets/events/womensDay23.png";
import technical_paper from "../assets/events/technical_paper.png";
import PitchDeckPresentation from "../assets/events/PitchDeckPresentation.png";
import startup_ecosystem from "../assets/events/stratup_ecosystem.png";
import national_education_day from "../assets/events/national_education_day.png";
import techVista from "../assets/events/techVista.png";
import peerPong from "../assets/events/peerpong.png";
import dareToRace from "../assets/events/dareToRace.png";
import prakalp2 from "../assets/events/prakalp2k24.jpg";
//Mentors
import sapna from "../assets/TeamMembers/Mentors/sapna.jpg";
import sushma from "../assets/TeamMembers/Mentors/sushma.jpg";
import swapnali from "../assets/TeamMembers/Mentors/swapnali.jpg";
//Logos
import ieeeIcon from "../assets/logos/ieeeIcon.svg";
import wieIcon from "../assets/logos/wieIcon.svg";
import ieeeWieCombinedIcon from "../assets/logos/ieee-wie-logo.png";

// Trying to import all the images dynamically!
// function importAllImages(MEMBERS) {
//   const images = {};
//   MEMBERS.forEach((member) => {
//     images[member.name] = require(`../assets/TeamMembers/${member.team}/${
//       member.name.toLowerCase().split(" ")[0]
//     }.png`);
//   });
//   return images;
// }

const MEMBERS = [
  {
    name: "Rachana Chavan",
    imgsrc: rachana,
    position: "IEEE CHAIRPERSON",
    team: "IEEE",
    linkedin: "rachanarchavan",
    instagramId: "rachana_432",
    icon: "game-icons:rank-3",
  },
  {
    name: "Santo Sunny",
    imgsrc: santo,
    position: "SECRETARY",
    team: "IEEE",
    linkedin: "santo-sunny-6553971ba",
    instagramId: "cr_stark_08",
    icon: "game-icons:rank-2",
  },
  {
    name: "BHAVIKA SALVI",
    imgsrc: bhavika,
    position: "TRESURER",
    team: "IEEE",
    linkedin: "bhavika-salvi",
    icon: "game-icons:rank-1",
  },
  {
    name: "Aditya Dhikale",
    imgsrc: aditya,
    position: "VICE CHAIRPERSON",
    team: "IEEE",
    linkedin: "aditya-dhikale-674643288",
    instagramId: "adityadhikale2003",
    icon: "mdi:account-tie-outline",
  },
  {
    name: "Shivprasad Chavarattil",
    imgsrc: shivprasad,
    position: "VICE CHAIRPERSON",
    team: "IEEE",
    linkedin: "shivprasad-premarajan-b4659b1ab",
    instagramId: "shivprasadcp",
    icon: "mdi:account-tie-outline",
  },
  {
    name: "Aryan Mohite",
    imgsrc: aryan,
    position: "CO. ORGANISER",
    team: "IEEE",
    linkedin: "aryanmohite",
    instagramId: "aryanmohitee",
    icon: "octicon:workflow-16",
  },
  {
    name: "Prashant Singh",
    imgsrc: prashant,
    position: "SR. TECHNICAL HEAD",
    team: "IEEE",
    linkedin: "prashant-singh-734bb3262",
    instagramId: "prashh_314",
    icon: "game-icons:techno-heart",
  },
  {
    name: "Mohtashim Ali",
    imgsrc: mohtashim,
    position: "SR. PR HEAD",
    team: "IEEE",
    linkedin: "mohtashim-ali-syed-2ab202252",
    instagramId: "mohtashim__ali",
    icon: "icon-park-outline:connect",
  },
  {
    name: "Vedant Chawardol",
    imgsrc: vedant,
    position: "Sr. Marketing Head",
    team: "IEEE",
    linkedin: "vedant-chawardol",
    instagramId: "iam.vedant",
    icon: "nimbus:marketing",
  },
  {
    name: "Jerry Jacob",
    imgsrc: jerry,
    position: "SR. Documentation HEAD",
    team: "IEEE",
    linkedin: "jerry-jacob-34a44a229",
    instagramId: "jerryjaob09",
    icon: "carbon:document-view",
  },
  {
    name: "Janhavi Singh",
    imgsrc: janhavi,
    position: "SE REPRESENTATIVE",
    team: "IEEE",
    linkedin: "janhavi-singh-6a1897282",
    instagramId: "janhaavvi",
    icon: "bi:person-badge",
  },
  {
    name: "Adarsh Gupta",
    imgsrc: adarsh,
    position: "JR. TECHNICAL HEAD",
    team: "IEEE",
    linkedin: "adarsh-gupta-650a09264",
    instagramId: "adarsh_gupta173",
    icon: "bi:code-slash",
  },
  {
    name: "Samrudhi Shetty",
    imgsrc: samrudhi,
    position: "JR DESIGN HEAD",
    team: "IEEE",
    linkedin: "samrudhi-shetty-5a227b264",
    instagramId: "_samrudhishetty_",
    icon: "streamline:interface-align-layers-2-design-layer-layers-pile-stack",
  },
  {
    name: "Wasee Momin",
    imgsrc: wasee,
    position: "JR. design head",
    team: "IEEE",
    linkedin: "wasee-momin-51b903282",
    instagramId: "_w4see_",
    icon: "iconoir:design-pencil",
  },
  {
    name: "Mrunali Tamhankar",
    imgsrc: mrunali,
    position: "JR. PR head",
    team: "IEEE",
    linkedin: "mrunali-tamhankar-25050026b",
    instagramId: "mrunoly",
    icon: "carbon:chart-relationship",
  },
  {
    name: "Keenan Mendas",
    imgsrc: keenan,
    position: "JR. Marketing head",
    team: "IEEE",
    linkedin: "keenan-mendes-21b637282",
    instagramId: "keen_n02",
    icon: "fluent-mdl2:market",
  },
  {
    name: "Shine Mascarenhas",
    imgsrc: shine,
    position: "JR. Documentation head",
    team: "IEEE",
    linkedin: "shine-mascarenhas-046244269",
    instagramId: "shine_mascarenhas_",
    icon: "solar:document-broken",
  },
  {
    name: "Grace Pereira",
    imgsrc: grace,
    position: "The Chairperson",
    team: "WIE",
    linkedin: "grace-pereira-735993230",
    instagramId: "_gracepereira",
    icon: "game-icons:rank-3",
  },
  {
    name: "Sanika Rozario",
    imgsrc: sanika,
    position: "Vice Chairperson",
    team: "WIE",
    linkedin: "sanika-rozario-97894522b",
    instagramId: "rozariosanika",
    icon: "game-icons:rank-2",
  },
  {
    name: "Pearl D'Souza",
    imgsrc: pearl,
    position: "TRESURER",
    team: "WIE",
    linkedin: "pearl-dsouza-82b8b6231",
    instagramId: "_ft.pearl_",
    icon: "game-icons:rank-1",
  },
  {
    name: "Sania Almedia",
    imgsrc: sania,
    position: "Event Coordinator",
    team: "WIE",
    linkedin: "sania-almeida-17b5b2249",
    instagramId: "almeida.sania.18",
    icon: "carbon:event",
  },
  {
    name: "Sharli Khot",
    imgsrc: sharli,
    position: "Documentation head",
    team: "WIE",
    linkedin: "sharlikhot",
    instagramId: "sharli.khot",
    icon: "solar:document-add-broken",
  },
  {
    name: "Amanda Saldanha",
    imgsrc: amanda,
    position: "Design Head",
    team: "WIE",
    linkedin: "sania-almeida-17b5b2249",
    instagramId: "almeida.sania.18",
    icon: "ic:outline-design-services",
  },
  {
    name: "Anwaya Belwalkar",
    imgsrc: anwaya,
    position: "Technical Head",
    team: "WIE",
    linkedin: "anwaya-belwalkar-46a472230",
    instagramId: "anwayaaa",
    icon: "grommet-icons:technology",
  },
  {
    name: "Kashmira Sukhtankar",
    imgsrc: kashmira,
    position: "PR Head",
    team: "WIE",
    linkedin: "kashmira-sukhtankar-00558b24b",
    instagramId: "kash_2501",
    icon: "game-icons:relationship-bounds",
  },
  {
    name: "Nivedita Kokane",
    imgsrc: nivedita,
    position: "Marketing Head",
    team: "WIE",
    linkedin: "nivedita-kokane-471130249",
    instagramId: "kokanenivedita",
    icon: "icon-park-outline:stock-market",
  },
  {
    name: "Gayatri Nadar",
    imgsrc: gayatri,
    position: "JR. TECHNICAL HEAD",
    team: "WIE",
    linkedin: "gayatri-nadar-570b76264",
    instagramId: "grn__idk",
    icon: "icon-park-outline:code-computer",
  },
  {
    name: "Mohika Rane",
    imgsrc: mohika,
    position: "JR DESIGN HEAD",
    team: "WIE",
    linkedin: "mohika-rane-1b0503259",
    instagramId: "ranemohika",
    icon: "clarity:design-line",
  },
  {
    name: "Raina Joyce Raj",
    imgsrc: raina,
    position: "JR. Documentation head",
    team: "WIE",
    linkedin: "raina-joyce-b92a1a249",
    instagramId: "raina_joyce7",
    icon: "pajamas:doc-code",
  },
  {
    name: "Janice Almeida",
    imgsrc: janice,
    position: "JR. PR head",
    team: "WIE",
    linkedin: "janice-almeida-8392b8282",
    instagramId: "janice_almeida14_",
    icon: "tabler:circles-relation",
  },
  {
    name: "Mokshada Rane",
    imgsrc: mokshada,
    position: "SE REPRESENTATIVE",
    team: "WIE",
    linkedin: "mokshada-rane-b26394259",
    instagramId: "mokshadarane",
    icon: "fluent:person-ribbon-20-regular",
  },
];

// const MemberImages = importAllImages(MEMBERS);
// console.log(MemberImages);

const EVENTS = [
  {
    title: "Prakalp 2k24",
    imgsrc: prakalp2,
    description:
      '"PRAKALP 2k24" is a national-level project competition serving as a platform for students to showcase their engineering projects across hardware and software categories.',
    keyword: "ieee,wie",
    // ongoingLink: "https://shorturl.at/kHV09",
  },
  {
    title: "Dare To Race",
    imgsrc: dareToRace,
    description:
      "Gear up your creativity and ignite your passion for speed at CRESCENDO 2024's 'Dare to Race' - where engineering prowess meets the thrill of the track!",
    keyword: "ieee",
  },
  {
    title: "Peer Pong",
    imgsrc: peerPong,
    description:
      "Dive into the thrill of tech and Ping Pong at CRESCENDO's Peer Pong by Women In Engineering! Score points with precision, conquer tasks, and compete for exciting prizes.",
    keyword: "wie",
  },
  {
    title: "Tech-Vista 2024",
    imgsrc: techVista,
    description:
      "Tech-Vista 2024: Elevate your tech journey with Placement Talks by Vivek Gupta, ICPC World Finalist, and an exhilarating Data Structure and Algorithm contest!",
    keyword: "ieee",
  },

  {
    title: "National Education Day 2023",
    imgsrc: national_education_day,
    description:
      "Elevate National Education Day with AICTE's enlightening ATAL FDP on 'Applied Machine Learning for VLSI Design' led by the accomplished Dr. Vijay Joshi!",
    keyword: "ieee",
  },
  {
    title: "Ingenium: Igniting Innovation on Engineer's Day",
    imgsrc: ingenium2,
    description:
      "Get ready for a jaw-dropping engineering spectacle at Ingenium, where students' ingenuity ignites a thrilling show of innovation!",
    keyword: "wie,ieee",
  },
  {
    title: "Startup Ecosystem",
    imgsrc: startup_ecosystem,
    description:
      "Prof. Heena Pendhari guided us through the 'Startup Ecosystem' event, where everyone explored ideas, innovations, and research.",
    keyword: "wie",
  },
  {
    title: "Perfect Pitch Deck Presentation",
    imgsrc: PitchDeckPresentation,
    description:
      "The event is about a brief presentation which showcases key aspects of your business plan and is used to pitch to investors.",
    keyword: "ieee",
  },
  {
    title: "Prakalp: Project Competition",
    imgsrc: prakalp,
    description:
      "A National level project competition which involves the hardware and software domain",
    keyword: "wie,ieee",
  },

  {
    title: "Women's Day Celebration 2023",
    imgsrc: womensDay23,
    description:
      "Celebrated International Women's Day with Mental Health Awareness Session.",
    keyword: "ieee,wie",
  },

  {
    title: "Industrial Visit",
    imgsrc: IVStudents,
    description:
      "An industrial visit organised by WIE for students of FRCRCE to Sify's data centre",
    keyword: "wie",
  },
  {
    title: "Seminar on AI",
    imgsrc: ai,
    description:
      "Mr Uday Kamath, an alumni of FRCRCE gave insights in the world of AI",
    keyword: "ieee",
  },
  {
    title: "Laser Maze",
    imgsrc: lasermaze,
    description:
      "IEEE council organized Laser Maze game for Synergy Fest 2k22.",
    keyword: "ieee",
  },
  {
    title: "CRCE TRANSYLVANIA",
    imgsrc: EscapeRoom,
    description:
      "WIE council organized CRCE themed Escape Room game for the Synergy Fest 2k22.",
    keyword: "wie",
  },
  {
    title: "Industrial Visit and Training at SICK INDIA",
    imgsrc: IVTeachers,
    description:
      "IEEE in association with AI & DS Department organized a visit to SICK INDIA PVT LTD at Naigaon",
    keyword: "ieee",
  },
  {
    title: "Women Leaders in Startup",
    imgsrc: WomenLeadersInStartup,
    description:
      "Mrs. Jyoti Bharadwaj shared her experience as Woman Entrepreneur and Founder",
    keyword: "wie",
  },
  {
    title: "Ingenium- Engineer's Day Competition",
    imgsrc: ingenium,
    description:
      "A problem statement and creative solutions bought up by the students.",
    keyword: "ieee,wie",
  },
  {
    title: "Writing Research Paper and Patent Application",
    imgsrc: research,
    description:
      "Students got important insights from our Principal Sir and his student-Jenil Dave.",
    keyword: "ieee",
  },
  {
    title: "Succesful Startup Founders",
    imgsrc: entraprenuer,
    description:
      "Meet alumni of our college, Mr.Mohamad Ahmed; founder of Hridam Surgicals.",
    keyword: "ieee",
  },
  {
    title: "Women's Day Celebration 2022",
    imgsrc: womensDay,
    description:
      "First offline event after the pandemic to celebrate International Women's Day.",
    keyword: "ieee,wie",
  },
  {
    title: "Web Designing Workshop",
    imgsrc: web_designing,
    description:
      "A workshop to introduce students to website building and design thinking for web based projects.",
    keyword: "wie",
  },
  {
    title: "Women Healthcare Awareness",
    imgsrc: women_healthcare,
    description:
      "A gynecologist for busting myths about periods, PCOD, PCOS, and female hygiene.",
    keyword: "wie",
  },
  {
    title: "Industrial Trends and Technology",
    imgsrc: industry,
    description:
      "A session to enlighten students about the industrial trends and the demands that people make from the Industry and how those can be fulfilled.",
    keyword: "ieee",
  },
  {
    title: "Goal Achievement Program",
    imgsrc: goal_achievement,
    description:
      "A session exclusively for Fr. CRCE teachers on achieving goals.",
    keyword: "ieee",
  },
  {
    title: "Succesful Start-Up Founders",
    imgsrc: start_up,
    description:
      "A webinar for students to gain knowledge about the skills required for entrepreneurship.",
    keyword: "ieee",
  },
  {
    title: "Technical Paper Webinar",
    imgsrc: technical_paper,
    description:
      "Webinar for the students to learn about the selection of a topic and how to write a technical paper.",
    keyword: "ieee",
  },
];
const MENTORS = [
  {
    name: "Mrs. Sushma Nagdeote",
    description: "WIE-CRCE Branch Counsellor",
    imgsrc: sushma,
  },
  {
    name: "Mrs. Sapna Prabhu",
    description: "IEEE-CRCE Branch Mentor",
    imgsrc: sapna,
  },
  {
    name: "Mrs. Swapnali Makdey",
    description: "IEEE-CRCE Branch Counsellor",
    imgsrc: swapnali,
  },
];

const EVENTTABS = [
  {
    class: "all",
    logo: ieeeWieCombinedIcon,
  },
  {
    class: "ieee",
    logo: ieeeIcon,
  },
  {
    class: "wie",
    logo: wieIcon,
  },
];
export { MENTORS, EVENTS, MEMBERS, EVENTTABS };
