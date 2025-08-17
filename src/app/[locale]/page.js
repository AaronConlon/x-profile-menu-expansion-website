import Header from "../../components/Header";
import NavsComponent from "../../components/NavsComponent";
import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import DemoSection from "../../components/DemoSection";
import ContactSection from "../../components/ContactSection";
import DonationSection from "../../components/DonationSection";
import DownloadSection from "../../components/DownloadSection";
import FooterSection from "../../components/FooterSection";

export default async function Home({ params }) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-mars-green-50 to-mars-green-100 dark:from-gray-900 dark:to-mars-green-900">
      {/* Header */}
      <Header />

      {/* Navigation Component */}
      <NavsComponent />

      {/* Hero Section */}
      <HeroSection locale={locale} />

      {/* Features Section */}
      <FeaturesSection locale={locale} />

      {/* Demo Section */}
      <DemoSection locale={locale} />

      {/* Contact Section */}
      <ContactSection locale={locale} />

      {/* Donation Section */}
      <DonationSection locale={locale} />

      {/* Download Section */}
      <DownloadSection locale={locale} />

      {/* Footer */}
      <FooterSection locale={locale} />
    </div>
  );
}