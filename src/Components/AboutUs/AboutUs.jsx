import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-content py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Artify</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Empowering artists worldwide to share, discover, and celebrate
            creativity
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Artify was born from a simple vision: to create a space where
              artists of all backgrounds could share their passion and connect
              with art enthusiasts around the globe. Founded in 2024, we've
              grown into a vibrant community of creators and collectors.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Our platform celebrates diversity in art forms, from traditional
              paintings to digital masterpieces, providing artists with the
              tools they need to showcase their work and build meaningful
              connections with their audience.
            </p>
            <p className="text-lg leading-relaxed">
              Today, Artify hosts thousands of artworks from talented artists
              worldwide, fostering a community where creativity knows no bounds.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=600&fit=crop"
              alt="Art Gallery"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-base-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-content"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To democratize art sharing and appreciation by providing a
                platform where every artist can find their audience, and every
                art lover can discover pieces that inspire them. We believe in
                making art accessible to everyone.
              </p>
            </div>

            <div className="card bg-gradient-to-br from-secondary/10 to-secondary/5 shadow-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-secondary-content"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To become the world's most trusted and vibrant community for
                artists and art enthusiasts, where creativity flourishes,
                connections are made, and art becomes a universal language that
                transcends boundaries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary-content"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Community</h3>
            <p className="leading-relaxed">
              We foster a supportive environment where artists and art lovers
              connect, collaborate, and inspire each other.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-secondary-content"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Creativity</h3>
            <p className="leading-relaxed">
              We celebrate all forms of artistic expression and encourage
              innovation in every creation shared on our platform.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-accent-content"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Integrity</h3>
            <p className="leading-relaxed">
              We maintain the highest standards of authenticity, respect for
              intellectual property, and transparency in all our operations.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-content py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-lg opacity-90">Artists</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-lg opacity-90">Artworks</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100K+</div>
              <div className="text-lg opacity-90">Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-lg opacity-90">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section (Optional) */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-lg">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-32 rounded-full">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                    alt="Team Member"
                  />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">Sarah Anderson</h3>
              <p className="text-sm opacity-70">Founder & CEO</p>
              <p className="mt-2">
                Passionate about connecting artists with their audience
                worldwide.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-32 rounded-full">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
                    alt="Team Member"
                  />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">Michael Chen</h3>
              <p className="text-sm opacity-70">Head of Design</p>
              <p className="mt-2">
                Creating beautiful experiences that inspire creativity.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <figure className="px-10 pt-10">
              <div className="avatar">
                <div className="w-32 rounded-full">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
                    alt="Team Member"
                  />
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title">Emma Rodriguez</h3>
              <p className="text-sm opacity-70">Community Manager</p>
              <p className="mt-2">
                Building and nurturing our vibrant artist community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
