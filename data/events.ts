export interface Event {
  id: number
  name: string
  description: string
  location: string
  date: string
  image: string
  isElite?: boolean
}

// THIS IS YOUR SINGLE SOURCE OF TRUTH
export const allEvents: Event[] = [
  {
    id: 1,
    name: 'Goa Wellness Reset',
    description: 'A 5-day transformative wellness retreat combining yoga, meditation, and mindfulness practices in the serene beaches of Goa.',
    location: 'Goa, India',
    date: '15-20 Jan 2026', // Updated
    image: '/placeholder-goa.jpg',
    isElite: false, 
  },
  {
    id: 2,
    name: 'Bangalore Impact Leadership Meetup',
    description: 'Connect with fellow founders and leaders in an intensive 2-day leadership workshop focused on scaling impact.',
    location: 'Bangalore, India',
    date: '10-12 Feb 2026', // Updated
    image: '/placeholder-bangalore.jpg',
    isElite: false,
  },
  {
    id: 3,
    name: 'Crowbar Founders Circle Weekend',
    description: 'An exclusive weekend gathering for Crowbar founders to share experiences, challenges, and celebrate wins together.',
    location: 'Mumbai, India',
    date: '5-7 March 2026', // Updated
    image: '/placeholder-mumbai.jpg',
    isElite: true, 
  },
  {
    id: 4,
    name: 'Himalayan Mindfulness Retreat',
    description: 'Escape to the mountains for a week of mindfulness, nature walks, and deep reflection sessions.',
    location: 'Himachal Pradesh, India',
    date: '12-18 April 2026', // Updated
    image: '/placeholder-himalaya.jpg',
    isElite: false,
  },
  {
    id: 5,
    name: 'Tech Innovation Bootcamp',
    description: 'A 3-day intensive bootcamp on emerging technologies, product innovation, and startup scaling strategies.',
    location: 'Pune, India',
    date: '25-27 May 2026', // Updated
    image: '/placeholder-pune.jpg',
    isElite: false,
  },
  {
    id: 6,
    name: 'Coastal Networking Summit',
    description: 'Join us for a weekend of networking, workshops, and community building by the beautiful coastline.',
    location: 'Kerala, India',
    date: '3-5 June 2026', // Updated
    image: '/placeholder-kerala.jpg',
    isElite: false,
  },
]

// Helper to get only specific events for the Home Page
export const getFeaturedEvents = () => {
  // Returns specific IDs (1, 3, 5) or just the first 3
  const featuredIds = [1, 3, 5]; 
  return allEvents.filter(event => featuredIds.includes(event.id));
}