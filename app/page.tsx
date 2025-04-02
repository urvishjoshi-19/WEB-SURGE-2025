import HeroSection from "@/components/hero-section"
import InformationDashboard from "@/components/information-dashboard"
import SpotlightSections from "@/components/spotlight-sections"
import AchievementsMarquee from "@/components/achievements-marquee"
import InteractiveQuickLinks from "@/components/interactive-quick-links"
import PublicationsShelf from "@/components/publications-shelf"
import AnimatedStatistics from "@/components/animated-statistics"
import MediaGallery from "@/components/media-gallery"
import LeadershipHologram from "@/components/leadership-hologram"
import LiveMissionDashboard from "@/components/live-mission-dashboard"
import MeetTheScientists from "@/components/meet-the-scientists"
import DrdoTimeline from "@/components/drdo-timeline"
import JoinDrdoSection from "@/components/join-drdo-section"
import ModelViewer from "@/components/model-viewer"
import SecurityAlertBar from "@/components/security-alert-bar"
import TechTransferShowcase from "@/components/tech-transfer-showcase"


export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroSection />
      <div className="container mx-auto px-4">
      <InformationDashboard />
      <InteractiveQuickLinks />
      <AchievementsMarquee />
      <SpotlightSections />
      <DrdoTimeline />
      <LiveMissionDashboard />
       
       
    
       
      
        <ModelViewer />
        <AnimatedStatistics />
        
      
        <MediaGallery />
        <LeadershipHologram />
        <MeetTheScientists />
       
      
        
      </div>
    </div>
  )
}

