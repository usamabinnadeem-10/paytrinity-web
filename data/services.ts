export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  iconName: string;
  features: string[];
  faqs: ServiceFaq[];
}

export const servicesData: Record<string, ServiceData> = {
  itin: {
    title: "ITIN Application & Renewal",
    subtitle: "IRS Certified Acceptance Agent Service",
    description:
      "The Individual Taxpayer Identification Number (ITIN) is essential for foreign founders who need to open a US bank account, comply with US tax laws, or process payments via Stripe/PayPal. As IRS Certified Acceptance Agents (CAA), we streamline the entire process, eliminating the need for you to send your original passport to the IRS.",
    price: "$350",
    iconName: "BadgeCheck",
    features: [
      "W-7 Form Preparation & Review",
      "Certified Copy of Passport (No original needed)",
      "IRS Liaison & Status Tracking",
      "100% Approval Guarantee or Refund",
      "Digital Delivery of ITIN Letter",
    ],
    faqs: [
      {
        q: "Do I need to send my physical passport?",
        a: "No! As Certified Acceptance Agents, we verify your passport via video call and send a certified copy to the IRS.",
      },
      {
        q: "How long does it take?",
        a: "Standard processing is 6-10 weeks, but can vary based on IRS backlog.",
      },
    ],
  },
  formation: {
    title: "US LLC & Corp Formation",
    subtitle: "Launch Your Company in Delaware or Wyoming",
    description:
      "Forming a US entity is the first step to accessing the global market. We specialize in setting up LLCs and C-Corporations for international non-residents in investor-friendly states like Delaware and Wyoming. We handle everything from name availability checks to state filing and operating agreements.",
    price: "$299 + State Fees",
    iconName: "Building2",
    features: [
      "Name Availability Search",
      "Articles of Organization/Incorporation Filing",
      "Registered Agent Service (1st Year Included)",
      "Operating Agreement / Bylaws Drafting",
      "Employer Identification Number (EIN) Fast-Track",
    ],
    faqs: [
      {
        q: "Which state should I choose?",
        a: "Wyoming is great for privacy and low fees. Delaware is preferred if you plan to raise venture capital.",
      },
      {
        q: "Do I need a US address?",
        a: "We provide a registered agent address for legal correspondence, but for banking, you may need a unique physical address (see our Mailroom service).",
      },
    ],
  },
  ein: {
    title: "EIN & Tax ID Support",
    subtitle: "Get Your Employer Identification Number Fast",
    description:
      "The EIN (Employer Identification Number) is the social security number for your business. It is required to open a business bank account, hire employees, and file taxes. For non-US residents without an SSN, obtaining an EIN can be tricky. We handle the SS-4 filing directly with the IRS to get your number quickly.",
    price: "$199",
    iconName: "FileText",
    features: [
      "SS-4 Form Preparation",
      "Third-Party Designee Authorization",
      "Fax/Mail Filing with IRS",
      "EIN Confirmation Letter (CP 575)",
      "Bank Account Readiness Guide",
    ],
    faqs: [
      {
        q: "How long does it take without an SSN?",
        a: "Typically 10-15 business days via our expedited fax process.",
      },
      {
        q: "Can I open a bank account with just an EIN?",
        a: "Yes, most fintech banks like Mercury and Brex require an EIN and your formation documents.",
      },
    ],
  },
  stripe: {
    title: "Stripe Readiness Advisory",
    subtitle: "Accept Global Payments Seamlessly",
    description:
      "Getting rejected by Stripe or PayPal can cripple your business. Our advisory service reviews your website, terms of service, and business model to ensure they meet the strict underwriting criteria of US payment processors. We guide you through the setup to minimize the risk of account bans.",
    price: "$149",
    iconName: "CreditCard",
    features: [
      "Website Compliance Review",
      "Terms & Privacy Policy Audit",
      "Risk Assessment for High-Risk Verticals",
      "Stripe/PayPal Application Guide",
      "Dispute Resolution Strategy",
    ],
    faqs: [
      {
        q: "Do you guarantee a Stripe account?",
        a: "We cannot guarantee approval as it is up to Stripe, but our audit significantly increases your success rate by fixing common red flags.",
      },
    ],
  },
  "registered-agent": {
    title: "Registered Agent & Address",
    subtitle: "Stay Compliant with a Physical US Presence",
    description:
      "Every US LLC or Corporation is legally required to have a Registered Agent available during business hours to accept legal mail. We provide a professional registered agent service in Delaware, Wyoming, and other key states to keep your personal address private and your company compliant.",
    price: "$99 / year",
    iconName: "MapPin",
    features: [
      "Physical Address for Service of Process",
      "Same-Day Document Scanning",
      "Privacy Protection (Keep home address off public records)",
      "Compliance Calendar Alerts",
      "State Correspondence Handling",
    ],
    faqs: [
      {
        q: "Is this a mailing address?",
        a: "This is primarily for legal mail. For general business mail and packages, check our PayTrinity Mailroom service.",
      },
    ],
  },
  compliance: {
    title: "Annual Compliance & Tax",
    subtitle: "Automated State & Federal Filings",
    description:
      "Missing a filing deadline can lead to penalties or the dissolution of your company. We track your state Annual Report due dates and federal tax obligations (like Form 5472 for foreign-owned LLCs) to ensure you remain in \"Good Standing\" year-round.",
    price: "From $199",
    iconName: "Scale",
    features: [
      "State Annual Report Filing",
      "Franchise Tax Calculation",
      "Beneficial Ownership Information (BOI) Reporting",
      "Good Standing Certificate Retrieval",
      "IRS Form 5472/1120 Guidance",
    ],
    faqs: [
      {
        q: "What is BOI reporting?",
        a: "It is a new mandatory requirement for 2024 to report beneficial owners to FinCEN. We handle this for you.",
      },
    ],
  },
  banking: {
    title: "Physical Banking Support",
    subtitle: "Access Top US Banks",
    description:
      "While fintechs are great, sometimes you need a traditional brick-and-mortar bank account. We assist with the documentation and introduction required to open accounts with major institutions like Bank of America, Chase, or Wells Fargo, often facilitating the process for non-residents.",
    price: "$499",
    iconName: "Landmark",
    features: [
      "Bank Introduction & Pre-Vetting",
      "Board Resolution Preparation",
      "KYC Documentation Support",
      "In-Person Meeting Coordination (if required)",
      "Ongoing Banking Relationship Support",
    ],
    faqs: [
      {
        q: "Do I have to visit the US?",
        a: "For traditional big banks, an in-person visit is often required, but we prepare everything beforehand to make it a single, quick appointment.",
      },
    ],
  },
  fulfillment: {
    title: "PayTrinity Fulfillment House",
    subtitle: "Logistics for E-commerce Sellers",
    description:
      "Store, pack, and ship your products from our US warehouse. Designed for international Amazon, Shopify, and Etsy sellers who need a reliable logistics partner on the ground. We handle returns, inspections, and forwarding.",
    price: "Custom Quote",
    iconName: "Package",
    features: [
      "US Warehousing & Storage",
      "Pick & Pack Services",
      "Amazon FBA Prep & Forwarding",
      "Returns Management",
      "Inventory Management Dashboard",
    ],
    faqs: [
      {
        q: "Do you handle dropshipping?",
        a: "Yes, we can support dropshipping models with fast dispatch times.",
      },
    ],
  },
};
