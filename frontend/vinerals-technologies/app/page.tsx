import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ProblemSolution from '@/components/sections/ProblemSolution';
import Services from '@/components/sections/Services';
import IndustriesGrid from '@/components/sections/IndustriesGrid';
import WhyUs from '@/components/sections/WhyUs';
import ForPartners from '@/components/sections/ForPartners';
import CTA from '@/components/sections/CTA';
import StructuredData, { organizationSchema, localBusinessSchema } from '@/components/shared/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={localBusinessSchema} />
      <Header />
      <main className="pt-16">
        <Hero />
        <ProblemSolution />
        <Services />
        <IndustriesGrid />
        <WhyUs />
        <ForPartners />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
