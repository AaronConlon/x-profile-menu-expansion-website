import Header from "../../../components/Header";
import PrivacyPolicySection from "../../../components/PrivacyPolicySection";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return {
    title: t('title'),
    description: t('introduction.content'),
  };
}

export default async function PrivacyPage({ params }) {
  const { locale } = await params;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Privacy Policy Content */}
      <PrivacyPolicySection locale={locale} />
    </div>
  );
}
