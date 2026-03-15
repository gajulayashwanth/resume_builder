import HeroSection from '../components/landing/HeroSection'
import StatsBar from '../components/landing/StatsBar'
import TemplateCarousel from '../components/landing/TemplateCarousel'
import FeaturesSection from '../components/landing/FeaturesSection'
import HowItWorks from '../components/landing/HowItWorks'
import WhyChooseUs from '../components/landing/WhyChooseUs'
import ATSCallout from '../components/landing/ATSCallout'
import CTABanner from '../components/landing/CTABanner'

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <StatsBar />
      <TemplateCarousel />
      <FeaturesSection />
      <HowItWorks />
      <WhyChooseUs />
      <ATSCallout />
      <CTABanner />
    </div>
  )
}