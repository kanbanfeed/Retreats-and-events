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
// Edit events here, and they update everywhere.
export const allEvents: Event[] = [
  {
    id: 1,
    name: 'Goa Wellness Reset',
    description: 'A 5-day transformative wellness retreat combining yoga, meditation, and mindfulness practices in the serene beaches of Goa.',
    location: 'Goa, India',
    date: '15-20 March 2025',
    image: '/placeholder-goa.jpg',
    isElite: true, 
  },
  {
    id: 2,
    name: 'Bangalore Impact Leadership Meetup',
    description: 'Connect with fellow founders and leaders in an intensive 2-day leadership workshop focused on scaling impact.',
    location: 'Bangalore, India',
    date: '28-29 March 2025',
    image: '/placeholder-bangalore.jpg',
    isElite: true,
  },
  {
    id: 3,
    name: 'Crowbar Founders Circle Weekend',
    description: 'An exclusive weekend gathering for Crowbar founders to share experiences, challenges, and celebrate wins together.',
    location: 'Mumbai, India',
    date: '5-7 April 2025',
    image: '/placeholder-mumbai.jpg',
    isElite: true, // <--- CHANGE THIS HERE, IT REFLECTS EVERYWHERE
  },
  {
    id: 4,
    name: 'Himalayan Mindfulness Retreat',
    description: 'Escape to the mountains for a week of mindfulness, nature walks, and deep reflection sessions.',
    location: 'Himachal Pradesh, India',
    date: '12-18 April 2025',
    image: '/placeholder-himalaya.jpg',
    isElite: false,
  },
  {
    id: 5,
    name: 'Tech Innovation Bootcamp',
    description: 'A 3-day intensive bootcamp on emerging technologies, product innovation, and startup scaling strategies.',
    location: 'Pune, India',
    date: '25-27 April 2025',
    image: '/placeholder-pune.jpg',
    isElite: false,
  },
  {
    id: 6,
    name: 'Coastal Networking Summit',
    description: 'Join us for a weekend of networking, workshops, and community building by the beautiful coastline.',
    location: 'Kerala, India',
    date: '3-5 May 2025',
    image: '/placeholder-kerala.jpg',
    isElite: true,
  },
]

// Helper to get only specific events for the Home Page
export const getFeaturedEvents = () => {
  // Returns specific IDs (1, 3, 5) or just the first 3
  const featuredIds = [1, 3, 5]; 
  return allEvents.filter(event => featuredIds.includes(event.id));
}