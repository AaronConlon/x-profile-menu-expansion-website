import Header from "../../../components/Header";
import TermsOfServiceSection from "../../../components/TermsOfServiceSection";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });

  return {
    title: t('title'),
    description: t('introduction.content'),
  };
}

export default async function TermsPage({ params }) {
  const { locale } = await params;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Terms of Service Content */}
      <TermsOfServiceSection locale={locale} />
    </div>
  );
}
