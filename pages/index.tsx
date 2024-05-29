import { Container } from '@components/Container';
import { CTA } from '@components/CTA';
import { BackgroundBeams } from '@components/Background-beams';
import { Hero } from '@components/Hero';
import { Pricing } from '@components/Pricing';
import { SubHero } from '@components/SubHero';
import { Testimonials } from '@components/Testimonials';
import { Team } from '@components/Team';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Container>
      <Hero />
      <SubHero />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <CTA />
      {/* <BackgroundBeams /> */}
      {/* <Team /> */}
    </Container>
  );
};

export default Home;
