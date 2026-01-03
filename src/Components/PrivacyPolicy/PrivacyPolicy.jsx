import React, { useState } from "react";
import {
  Shield,
  Lock,
  Eye,
  Database,
  FileText,
  UserCheck,
  Globe,
  Mail,
  Phone,
  Clock,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  Info,
} from "lucide-react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: "introduction",
      icon: Shield,
      title: "1. Introduction",
      content: (
        <>
          <p className="mb-4">
            Welcome to{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Artify
            </span>{" "}
            — Creative Artwork Showcase. We are committed to protecting your
            personal information and your right to privacy. This Privacy Policy
            explains what information we collect, how we use it, and what rights
            you have in relation to it.
          </p>
          <p className="mb-4">
            By using Artify, you agree to the collection and use of information
            in accordance with this policy. If you do not agree with our
            policies and practices, please do not use our platform.
          </p>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4 mt-4">
            <div className="flex items-start gap-3">
              <Info
                className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5"
                size={20}
              />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                We take your privacy seriously and are transparent about our
                data practices. If you have any questions, please don't hesitate
                to contact us.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "information-collect",
      icon: Database,
      title: "2. Information We Collect",
      content: (
        <>
          <p className="mb-4">
            We collect several types of information to provide and improve our
            services:
          </p>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <UserCheck
                  size={18}
                  className="text-indigo-600 dark:text-indigo-400"
                />
                Personal Information
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Email address and display name (via Firebase Authentication)
                </li>
                <li>
                  Profile information you choose to provide (bio, avatar, social
                  links)
                </li>
                <li>Account preferences and settings</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <FileText
                  size={18}
                  className="text-indigo-600 dark:text-indigo-400"
                />
                Content Information
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Uploaded artwork files and images</li>
                <li>Artwork titles, descriptions, and categories</li>
                <li>Comments and interactions on artworks</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <Eye
                  size={18}
                  className="text-indigo-600 dark:text-indigo-400"
                />
                Usage Data
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Likes, favorites, and viewed artworks</li>
                <li>Search queries and browsing history on our platform</li>
                <li>Features you use and pages you visit</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <Globe
                  size={18}
                  className="text-indigo-600 dark:text-indigo-400"
                />
                Technical Data
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>IP address, browser type, and device information</li>
                <li>Operating system and screen resolution</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "how-we-use",
      icon: CheckCircle,
      title: "3. How We Use Your Information",
      content: (
        <>
          <p className="mb-4">
            We use the collected data to provide you with the best possible
            experience on Artify:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Shield
                  size={18}
                  className="text-indigo-600 dark:text-indigo-400"
                />
                Platform Operations
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <ChevronRight
                    size={16}
                    className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5"
                  />
                  <span>Provide, maintain and improve Artify platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight
                    size={16}
                    className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5"
                  />
                  <span>Process and display your uploaded artworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight
                    size={16}
                    className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5"
                  />
                  <span>Enable search and discovery features</span>
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Lock size={18} className="text-blue-600 dark:text-blue-400" />
                Security & Authentication
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <ChevronRight
                    size={16}
                    className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5"
                  />
                  <span>Authenticate and secure your account</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight
                    size={16}
                    className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5"
                  />
                  <span>Prevent fraud and unauthorized access</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight
                    size={16}
                    className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5"
                  />
                  <span>Monitor for security threats</span>
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <UserCheck
                  size={18}
                  className="text-purple-600 dark:text-purple-400"
                />
                Social Features
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <ChevronRight
                    size={16}
                    className="text-purple-600 dark:text-purple-400 shrink-0 mt-0.5"
                  />
                  <span>Enable likes, favorites, and gallery features</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight
                    size={16}
                    className="text-purple-600 dark:text-purple-400 shrink-0 mt-0.5"
                  />
                  <span>Connect artists with their audience</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight
                    size={16}
                    className="text-purple-600 dark:text-purple-400 shrink-0 mt-0.5"
                  />
                  <span>Personalize your feed and recommendations</span>
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Mail
                  size={18}
                  className="text-green-600 dark:text-green-400"
                />
                Communication
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <ChevronRight
                    size={16}
                    className="text-green-600 dark:text-green-400 shrink-0 mt-0.5"
                  />
                  <span>Respond to support requests and inquiries</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight
                    size={16}
                    className="text-green-600 dark:text-green-400 shrink-0 mt-0.5"
                  />
                  <span>Send important platform updates and notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight
                    size={16}
                    className="text-green-600 dark:text-green-400 shrink-0 mt-0.5"
                  />
                  <span>Comply with legal obligations</span>
                </li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "sharing",
      icon: Globe,
      title: "4. Sharing of Information",
      content: (
        <>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <CheckCircle
                className="text-green-600 dark:text-green-400 shrink-0 mt-0.5"
                size={20}
              />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-1">
                  We do not sell your personal data
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Your privacy is important to us. We will never sell, rent, or
                  trade your personal information to third parties for marketing
                  purposes.
                </p>
              </div>
            </div>
          </div>

          <p className="mb-4 font-medium text-gray-900 dark:text-white">
            We may share information only in the following circumstances:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-indigo-600 dark:border-indigo-400 bg-white dark:bg-gray-800 p-4 rounded-r-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Service Providers
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                We work with trusted third-party service providers who help us
                operate our platform:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Firebase:</strong> Authentication and user management
                </li>
                <li>
                  <strong>MongoDB Atlas:</strong> Secure database hosting
                </li>
                <li>
                  <strong>Vercel:</strong> Application hosting and deployment
                </li>
                <li>
                  <strong>Image CDN Services:</strong> Fast and reliable image
                  delivery
                </li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                These providers are contractually obligated to protect your data
                and use it only for the services they provide to us.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-800 p-4 rounded-r-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Legal Requirements
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                We may disclose your information if required by law, court
                order, or government request, or if we believe disclosure is
                necessary to protect our rights, your safety, or the safety of
                others.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 dark:border-purple-400 bg-white dark:bg-gray-800 p-4 rounded-r-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Business Transfers
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                In case of a merger, acquisition, or sale of assets, your
                information may be transferred to the acquiring entity. We will
                notify you before your personal information becomes subject to a
                different privacy policy.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "data-retention",
      icon: Clock,
      title: "5. Data Retention",
      content: (
        <>
          <p className="mb-4">
            We retain your information for as long as necessary to provide our
            services and comply with legal obligations:
          </p>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Account Data
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                We keep your account data, including your profile, uploaded
                artworks, and user preferences, until you choose to delete your
                account.
              </p>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Note:</strong> When you delete your account, all your
                  personal data and uploaded artworks are permanently removed
                  from our active systems within 30 days.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Usage Analytics
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Some anonymized usage data may be retained longer for analytics
                and platform improvement purposes. This data cannot be used to
                identify you personally.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Legal Requirements
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                In some cases, we may be legally required to retain certain
                information for specific periods (e.g., financial records, legal
                disputes).
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "your-rights",
      icon: UserCheck,
      title: "6. Your Rights",
      content: (
        <>
          <p className="mb-6 text-lg font-medium text-gray-900 dark:text-white">
            You have full control over your personal information on Artify:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-linear-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-indigo-600 dark:bg-indigo-500 rounded-lg flex items-center justify-center">
                  <Eye className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Access Your Data
                </h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                View and download all your personal data at any time through
                your account settings.
              </p>
            </div>

            <div className="bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-600 dark:bg-purple-500 rounded-lg flex items-center justify-center">
                  <FileText className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Correct Information
                </h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Update your profile information, artwork details, and account
                settings whenever you need.
              </p>
            </div>

            <div className="bg-linear-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-600 dark:bg-red-500 rounded-lg flex items-center justify-center">
                  <AlertCircle className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Delete Your Data
                </h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Delete specific artworks or your entire account. All associated
                data will be permanently removed.
              </p>
            </div>

            <div className="bg-linear-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border border-green-200 dark:border-green-800 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600 dark:bg-green-500 rounded-lg flex items-center justify-center">
                  <Database className="text-white" size={20} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Export Your Data
                </h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Download your artwork collection and associated data in a
                portable format.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Info
                className="text-yellow-600 dark:text-yellow-400 shrink-0 mt-0.5"
                size={20}
              />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  How to Exercise Your Rights
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Most of these actions can be performed directly through your
                  account dashboard. For additional assistance or questions
                  about your rights, please contact our support team.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "contact",
      icon: Mail,
      title: "7. Contact Us",
      content: (
        <>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            If you have any questions, concerns, or requests about this Privacy
            Policy or how we handle your data, we're here to help.
          </p>

          <div className="bg-linear-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6">
            <h4 className="font-semibold text-xl text-gray-900 dark:text-white mb-6 text-center">
              Get in Touch
            </h4>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center shrink-0">
                  <Mail
                    className="text-indigo-600 dark:text-indigo-400"
                    size={24}
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:fahimshahrier2023@gmail.com"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    fahimshahrier2023@gmail.com
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    We typically respond within 24-48 hours
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center shrink-0">
                  <Globe
                    className="text-purple-600 dark:text-purple-400"
                    size={24}
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white mb-1">
                    Website
                  </p>
                  <a
                    href="https://artify-client-d88f7.web.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    artify-client-d88f7.web.app
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Visit our support center for FAQs
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a
                href="mailto:fahimshahrier2023@gmail.com"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Mail size={20} />
                Send Us a Message
              </a>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-2">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-primary to-secondary text-white py-10 px-4 max-w-7xl mx-auto rounded-2xl my-9 w-[95%]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <Shield size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-indigo-100 mb-6 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we protect and handle your
            data at Artify.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <Clock size={16} />
            <span className="text-sm">Last updated: January 03, 2026</span>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex gap-2 pb-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => {
                  const element = document.getElementById(section.id);
                  element?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg whitespace-nowrap transition-all"
              >
                <span className="text-indigo-600 dark:text-indigo-400">
                  {index + 1}
                </span>
                {section.title.replace(/^\d+\.\s/, "")}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24"
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
                  <div className="bg-linear-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-b border-gray-200 dark:border-gray-800 p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-indigo-600 dark:bg-indigo-500 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="text-white" size={28} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 text-gray-700 dark:text-gray-300">
                    {section.content}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
