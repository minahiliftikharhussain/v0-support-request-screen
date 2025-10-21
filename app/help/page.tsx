export const metadata = {
  title: "Help & Support - GetDropGo",
  description:
    "Get help with your furniture delivery. Browse FAQs, contact support, and find answers to common questions.",
}

export default function HelpPage() {
  return (
    <main>
      {/* TODO: Add Skip to main content link */}
      <div className="pt-20">
        <ClientHelpPage />
      </div>
    </main>
  )
}

import ClientHelpPage from "./_client-page"
