import { FaChartLine } from 'react-icons/fa6';
import { SiNginxproxymanager } from 'react-icons/si';
import { BsFillRocketFill } from 'react-icons/bs';
import { PiShareNetworkLight, PiChartPieSliceFill } from 'react-icons/pi';
import { TbReportAnalytics } from 'react-icons/tb';
import { MdDarkMode } from 'react-icons/md';

export const features = [
  {
    heading: 'Integration',
    description: 'Seamless Integrations with the Top Brokerage Platforms, Order & Execution Management Systems via API.',
    icon: <PiShareNetworkLight className='text-primary h-4 w-4 relative z-50' />,
  },
  {
    heading: 'Strategy Deployment',
    description:
      'Autonomous event driven parameter triggered strategy deployment and execution. Paired with exit conditions on both sides of any strategy.',
    icon: <BsFillRocketFill className='text-primary h-4 w-4 relative z-50' />,
  },
  {
    heading: 'Manage Capital',
    description:
      'Preset defined capital deployment minimums with an unlimited level of categorization. Allowing to streamline capital deployment across all strategies.',
    icon: <PiChartPieSliceFill className='text-primary h-4 w-4 relative z-50' />,
  },
  {
    heading: 'Manage Risk',
    description:
      'Intuitive Risk Management that actively scans the market against Internal & External compliance rules, in addition to regulatory risks across all jurisdictions with direct and indirect exposure.',
    icon: <SiNginxproxymanager className='text-primary h-4 w-4 relative z-50' />,
  },
  {
    heading: 'Scale',
    description:
      'nstantly scale your strategies across different instruments and opportunities with similar profiles, allowing you to virtually be in every place at once.',
    icon: <FaChartLine className='text-primary h-4 w-4 relative z-50' />,
  },
  {
    heading: 'Analytics',
    description:
      "Generate comprehensive analytics from your winning & losing strategies. Qualitative & quantitative stats that will empower you to actively address what is and isn't working, in real time.",
    icon: <TbReportAnalytics className='text-primary h-4 w-4 relative z-50' />,
  },
];
