import WeddingNav from "@/components/wedding/WeddingNav";
import HeroSection from "@/components/wedding/HeroSection";
import GallerySection from "@/components/wedding/GallerySection";
import CeremonySection from "@/components/wedding/CeremonySection";
import DressCodeSection from "@/components/wedding/DressCodeSection";
import SpecialMessages from "@/components/wedding/SpecialMessages";
import RSVPSection from "@/components/wedding/RSVPSection";
import FooterSection from "@/components/wedding/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WeddingNav />
      <HeroSection />
      <GallerySection />
      <CeremonySection />
      <DressCodeSection />
      <SpecialMessages />
      <RSVPSection />
      <FooterSection />
    </div>
  );
};

export default Index;
