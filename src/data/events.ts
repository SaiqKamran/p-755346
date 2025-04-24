
export type Event = {
  id: string;
  title: string;
  date: string;
  type: 'Webinar' | 'Workshop' | 'Competition' | 'Exhibition';
  image: string;
  description: string;
  registrationLink?: string;
  location: string;
  isUpcoming: boolean;
};

export const events: Event[] = [
  {
    id: "1",
    title: "Digital Art Workshop 2025",
    date: "May 15, 2025",
    type: "Workshop",
    image: "/lovable-uploads/9f6bb6e7-33d6-470b-8942-809e46a03eb2.png",
    description: "Join us for an intensive digital art workshop where industry experts will share their knowledge about the latest tools and techniques in digital art creation.",
    registrationLink: "#",
    location: "Arena Animation Chandigarh",
    isUpcoming: true
  },
  {
    id: "2",
    title: "Animation Career Symposium",
    date: "May 20, 2025",
    type: "Webinar",
    image: "/lovable-uploads/d891d9bc-0f17-4b86-bfe0-873b6291dc74.png",
    description: "Explore career opportunities in animation with leading industry professionals. Learn about the latest trends and requirements in the animation industry.",
    registrationLink: "#",
    location: "Online",
    isUpcoming: true
  },
  {
    id: "3",
    title: "VFX Challenge 2025",
    date: "June 5, 2025",
    type: "Competition",
    image: "/lovable-uploads/90284972-4ecb-48af-a99c-ab9d130af555.png",
    description: "Showcase your VFX skills in this nationwide competition. Win exciting prizes and get a chance to be noticed by leading studios.",
    registrationLink: "#",
    location: "Arena Animation Chandigarh",
    isUpcoming: true
  }
];
