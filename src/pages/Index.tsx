import WeddingNav from "@/components/wedding/WeddingNav";
import HeroSection from "@/components/wedding/HeroSection";
import GallerySection from "@/components/wedding/GallerySection";
import CeremonySection from "@/components/wedding/CeremonySection";
import SpecialMessages from "@/components/wedding/SpecialMessages";
import GiftsSection from "@/components/wedding/GiftsSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import FooterSection from "@/components/wedding/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WeddingNav />
      <HeroSection />
      <GallerySection />
      <CeremonySection />
      <SpecialMessages />
      <GiftsSection />
      <RSVPSection />
      <FooterSection />
    </div>
  );
};

export default Index;
