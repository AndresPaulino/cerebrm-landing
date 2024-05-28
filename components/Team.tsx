import { AnimatedTooltip } from './ui/animated-tooltip';

const items = [
  {
    id: 1,
    name: 'Johnly Alvarado',
    designation: 'Founder & CEO',
    image: '/images/johnly.jpg',
  },
  {
    id: 2,
    name: 'Andres Paulino',
    designation: 'Co-Founder & CTO',
    image: '/images/andres.jpg',
  },
];

export const Team = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-2'>
      <div className='flex justify-center items-center '>
        <AnimatedTooltip items={items} />
      </div>
    </div>
  );
};
