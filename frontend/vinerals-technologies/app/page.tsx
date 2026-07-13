import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ProblemSolution from '@/components/sections/ProblemSolution';
import Services from '@/components/sections/Services';
import IndustriesGrid from '@/components/sections/IndustriesGrid';
import BlueprintPromo from '@/components/sections/BlueprintPromo';
import WhyUs from '@/components/sections/WhyUs';
import StructuredData, { organizationSchema, localBusinessSchema } from '@/components/shared/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={localBusinessSchema} />
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <IndustriesGrid />
        <BlueprintPromo />
        <WhyUs />
      </main>
      <Footer />
    </>
  );
}
