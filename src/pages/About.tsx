import { Users, Award, Clock, Heart, Globe, GraduationCap, TrendingUp, Building, MessageSquare, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  const team = [
    {
      name: "Brian Martinez",
      role: "Founder & Lead Developer",
      bio: "Full-stack developer with 8+ years experience in React, Node.js, and cloud architecture. Passionate about creating scalable solutions.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Alex Chen",
      role: "UI/UX Designer & Frontend Dev",
      bio: "Creative designer and frontend specialist focused on user-centered design and modern web technologies.",
      image: "/api/placeholder/300/300"  
    },
    {
      name: "Sarah Kim",
      role: "SEO Specialist & Marketing",
      bio: "Digital marketing expert with proven track record in SEO, content strategy, and conversion optimization.",
      image: "/api/placeholder/300/300"
    }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality First",
      description: "We never compromise on quality. Every line of code, every design element is crafted with care."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "On-Time Delivery", 
      description: "We respect your time and deadlines. Our projects are delivered when promised, every time."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Partnership",
      description: "We're not just service providers - we're your digital growth partners, invested in your success."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion Driven",
      description: "We love what we do. This passion translates into exceptional results for your business."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary-light to-background dark:from-background dark:to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Brianix Tech Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We bring your digital vision to life — with clean code, smart strategy, 
              and relentless commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, Brianix Tech Solutions started with a simple mission: 
                  to help small and medium enterprises compete in the digital world with 
                  the same quality tools and strategies used by large corporations.
                </p>
                <p>
                  Our team of 3 dedicated professionals combines decades of experience 
                  in web development, design, and digital marketing. We've helped over 
                  50 businesses transform their online presence and achieve measurable growth.
                </p>
                <p>
                  What sets us apart is our commitment to understanding your business goals 
                  first, then crafting digital solutions that directly support those objectives. 
                  We're not just building websites and apps – we're building your success.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">99%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 bg-gradient-to-br from-muted to-background dark:from-secondary dark:to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do, from initial consultation to ongoing support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover border-0 text-center">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate professionals behind your digital success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-hover border-0 text-center">
                <CardContent className="p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <div className="text-primary font-medium mb-4">{member.role}</div>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Edge */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="card-hover border-0 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-12 text-center">
                <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  The Founder's Edge
                </h2>
                <p className="text-xl text-muted-foreground mb-4">
                  Beyond technical expertise, our founder brings exceptional communication skills, 
                  strategic thinking, and opinion-shaping abilities to every project.
                </p>
                <p className="text-lg text-muted-foreground">
                  This unique combination allows us to not just build websites, but to tell compelling 
                  brand stories, shape perceptions, and build lasting trust with your audience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Africa Projects - Future Initiatives */}
      <section className="py-12 bg-gradient-to-br from-primary-light to-background dark:from-background dark:to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Building Africa's Digital Future
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our vision extends beyond client projects. We're developing transformative platforms 
              that will shape the future of Africa's digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover border-0 group overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <Globe className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-semibold mb-3">AfriRoot</h3>
                  <p className="text-muted-foreground mb-4">
                    African family tree and heritage platform connecting generations and preserving 
                    our rich cultural history for future generations.
                  </p>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    In Development
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 group overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <GraduationCap className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-semibold mb-3">EduTrack</h3>
                  <p className="text-muted-foreground mb-4">
                    Affordable e-learning and school management system making quality education 
                    accessible to schools across Kenya and beyond.
                  </p>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Planning Phase
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 group overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <TrendingUp className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-semibold mb-3">SME Boost</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive SME digitization toolkit helping small businesses compete in the 
                    digital economy with affordable, powerful tools.
                  </p>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Concept Stage
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 group overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <Building className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-semibold mb-3">CivicTech Hub</h3>
                  <p className="text-muted-foreground mb-4">
                    Governance and civic participation tools empowering citizens to engage with 
                    their governments and drive positive change.
                  </p>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Research Phase
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Join us in building Africa's digital future. Partner with us or invest in these transformative initiatives.
            </p>
            <Button size="lg" className="btn-hero">
              Learn More About Our Initiatives
            </Button>
          </div>
        </div>
      </section>

      {/* Blog/Insights Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Insights & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our latest thoughts on technology, business growth, and digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover border-0 group overflow-hidden">
              <CardContent className="p-8">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <BookOpen className="w-16 h-16 text-primary" />
                </div>
                <div className="text-sm text-primary font-medium mb-2">Web Development</div>
                <h3 className="text-xl font-semibold mb-3">Why Every Nairobi SME Needs a Website in 2025</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Discover how a professional website can transform your local business reach and credibility in Kenya's competitive market.
                </p>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Read More →
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 group overflow-hidden">
              <CardContent className="p-8">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <BookOpen className="w-16 h-16 text-primary" />
                </div>
                <div className="text-sm text-primary font-medium mb-2">Digital Strategy</div>
                <h3 className="text-xl font-semibold mb-3">SEO for Kenyan Businesses: A Complete Guide</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Learn practical SEO strategies tailored for the Kenyan market to help your business get found online.
                </p>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Read More →
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 group overflow-hidden">
              <CardContent className="p-8">
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <BookOpen className="w-16 h-16 text-primary" />
                </div>
                <div className="text-sm text-primary font-medium mb-2">Trends</div>
                <h3 className="text-xl font-semibold mb-3">Mobile-First Design: Why It Matters for African Markets</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Explore how mobile-first design principles drive better engagement in Africa's mobile-dominated internet landscape.
                </p>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 bg-gradient-to-br from-primary-light to-background dark:from-background dark:to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We stay current with the latest technologies to deliver cutting-edge solutions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS",
              "Tailwind CSS", "PostgreSQL", "MongoDB", "Docker", "Figma", "WordPress"
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <span className="font-semibold text-primary text-sm">{tech.slice(0, 2)}</span>
                </div>
                <div className="text-sm font-medium text-muted-foreground">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;