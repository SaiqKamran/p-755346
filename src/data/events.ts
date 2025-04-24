
export type Event = {
  id: string;
  title: string;
  date: string;
  type: 'Creative Minds' | 'Cyber Ninja' | 'Perspectives' | 'Orbit Live' | 'Kalakari';
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
  }
];
