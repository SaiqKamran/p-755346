export type Event = {
  id: string;
  title: string;
  date: string;
  type: 'Creative Minds' | 'Cyber Ninja' | 'Perspectives' | 'Orbit Live' | 'Kalakari' | 'VFX Challenge' | 'Digital Arts Fest';
  image: string;
  description: string;
  videoUrl?: string;
  registrationLink?: string;
  location: string;
  isUpcoming: boolean;
};

export const events: Event[] = [
  {
    id: "1",
    title: "CREATIVE MINDS 2024",
    date: "March 15, 2024",
    type: "Creative Minds",
    image: "https://img.youtube.com/vi/JDlRbmXAOgM/maxresdefault.jpg",
    description: "Arena Animation's exclusive platform Creative Minds is where students across India showcase their skills, compete with peers, and receive mentorship from industry experts. This event challenges students to push creative boundaries, gain real-world insights, and refine their craft under expert guidance.",
    videoUrl: "https://youtu.be/JDlRbmXAOgM",
    location: "Arena Animation Chandigarh",
    isUpcoming: false
  },
  {
    id: "2",
    title: "CYBER NINJA Gaming Championship 2024",
    date: "February 20, 2024",
    type: "Cyber Ninja",
    image: "https://img.youtube.com/vi/_eErq9xG9l0/maxresdefault.jpg",
    description: "Cyber Ninja is an action-packed Mobile Gaming Championship. Where participants turn their gaming skills to win the battle of creativity & fun! Open to all gaming enthusiasts, Cyber Ninja celebrates the skill and art required to design exciting games for the global ACGC XR Industry.",
    videoUrl: "https://youtu.be/_eErq9xG9l0",
    location: "Arena Animation Chandigarh",
    isUpcoming: false
  },
  {
    id: "3",
    title: "PERSPECTIVES: Industry Insights 2024",
    date: "January 5, 2024",
    type: "Perspectives",
    image: "https://img.youtube.com/vi/xSmzInS0axI/maxresdefault.jpg",
    description: "A live platform where media and entertainment industry stalwarts around the world share insights and personal experiences about working and collaborating on some of the best creative work done worldwide. Through Perspectives, you will gain first-hand knowledge and exposure to the industry.",
    videoUrl: "https://youtu.be/xSmzInS0axI",
    location: "Online",
    isUpcoming: false
  },
  {
    id: "4",
    title: "ORBIT LIVE Festival 2023",
    date: "December 10, 2023",
    type: "Orbit Live",
    image: "https://img.youtube.com/vi/ExuPZMlFDbA/maxresdefault.jpg",
    description: "Orbit Live is a 4-day festival with a power-packed schedule to maximise your learnings and skills through seminars, workshops, master classes, short film appreciation, and Star Lounge. On day 3 of the event, the experts from the media and entertainment industry converge at the venue to discuss upcoming trends and opportunities.",
    videoUrl: "https://youtu.be/ExuPZMlFDbA",
    location: "Arena Animation Chandigarh",
    isUpcoming: false
  },
  {
    id: "5",
    title: "KALAKARI Cultural Festival 2023",
    date: "November 15, 2023",
    type: "Kalakari",
    image: "https://img.youtube.com/vi/hve2A7-9b-U/maxresdefault.jpg",
    description: "The student festival 'Kalakari' is a tribute to India's rich cultural heritage as it celebrates the country's traditional arts and crafts through performances, contests and more. Being the first creative festival of its kind, it offers you a magnificent experience by enabling you to showcase your creativity, compete and interact with peers, gain industry exposure, and get inspired.",
    videoUrl: "https://youtu.be/hve2A7-9b-U",
    location: "Arena Animation Chandigarh",
    isUpcoming: false
  },
  {
    id: "6",
    title: "VFX Masters Competition 2024",
    date: "July 20, 2024",
    type: "VFX Challenge",
    image: "https://img.youtube.com/vi/F3apvNaT_Zs/maxresdefault.jpg",
    description: "An exclusive VFX competition challenging participants to showcase their visual effects skills. Participants will create stunning visual sequences using advanced compositing and digital effects techniques, competing for industry recognition and exciting prizes.",
    videoUrl: "https://youtu.be/F3apvNaT_Zs",
    location: "Online & Arena Animation Chandigarh",
    registrationLink: "https://example.com/vfx-masters-2024",
    isUpcoming: true
  },
  {
    id: "7",
    title: "Digital Arts Transformation Summit 2024",
    date: "August 15, 2024",
    type: "Digital Arts Fest",
    image: "https://img.youtube.com/vi/7sDY4m8-u5A/maxresdefault.jpg",
    description: "A groundbreaking summit exploring the intersection of digital arts, technology, and creativity. Features workshops, panel discussions, and live demonstrations from industry leaders in animation, game design, and visual effects.",
    videoUrl: "https://youtu.be/7sDY4m8-u5A",
    location: "Arena Animation Chandigarh",
    registrationLink: "https://example.com/digital-arts-summit-2024",
    isUpcoming: true
  },
  {
    id: "8",
    title: "Global Game Design Challenge 2024",
    date: "September 10, 2024",
    type: "Cyber Ninja",
    image: "https://img.youtube.com/vi/Qz_3blm6z_Q/maxresdefault.jpg",
    description: "An international game design competition challenging participants to create innovative game concepts and prototypes. Participants will showcase their skills in game mechanics, storytelling, and interactive design.",
    videoUrl: "https://youtu.be/Qz_3blm6z_Q",
    location: "Online",
    registrationLink: "https://example.com/game-design-challenge-2024",
    isUpcoming: true
  }
];
