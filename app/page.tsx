import { AboutSection } from "@/components/aboutSection";
import { GallerySection } from "@/components/gallerySection";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/heroSection";
import { LocationSection } from "@/components/locationSection";
import { PricingSection } from "@/components/pricingSection";
import { ServicesSection } from "@/components/servicesSection";
import { TestimonialsSection } from "@/components/testimonialsSection";
import { UploadSection } from "@/components/uploadSection";
import { FAQSection } from "@/components/faqSection";
import { ContactSection } from "@/components/contactSection";
import { Footer } from "@/components/footer";



export default function Home (){
    return (
        <main className="min-h-screen">
            <Header />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PricingSection />
            <UploadSection />
            <LocationSection />
            <TestimonialsSection />
            <GallerySection />
            <FAQSection/>
            <ContactSection />
            <Footer />
        </main>
        
    )
}