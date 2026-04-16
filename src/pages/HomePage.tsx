import { AboutSection } from '../components/about/AboutSection'
import { ContactCtaSection } from '../components/contact-cta/ContactCtaSection'
import { FooterSection } from '../components/footer/FooterSection'
import { GallerySection } from '../components/gallery/GallerySection'
import { HeroSection } from '../components/hero/HeroSection'
import { PageShell } from '../components/layout/PageShell'
import { RevealSection } from '../components/motion/RevealSection'
import { TalksSection } from '../components/talks/TalksSection'

export function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <RevealSection sectionIndex={0}>
        <AboutSection />
      </RevealSection>
      <RevealSection sectionIndex={1}>
        <GallerySection />
      </RevealSection>
      <RevealSection sectionIndex={2}>
        <TalksSection />
      </RevealSection>
      <RevealSection sectionIndex={3}>
        <ContactCtaSection />
      </RevealSection>
      <RevealSection sectionIndex={4}>
        <FooterSection />
      </RevealSection>
    </PageShell>
  )
}
