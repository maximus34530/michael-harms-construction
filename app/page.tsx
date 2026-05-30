'use client';

import { useState, useEffect, useRef } from 'react';
import { Barlow_Condensed, Inter } from 'next/font/google';
import {
  Star,
  ShieldCheck,
  MapPin,
  Hammer,
  Phone,
  UserCheck,
  ClipboardList,
  Wrench,
  BadgeCheck,
  FileText,
  HardHat,
  CheckCircle2,
  ChevronDown,
  Home,
  Building2,
  PaintRoller,
} from 'lucide-react';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-barlow',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function Page() {
  const [heroName, setHeroName] = useState('');
  const [heroPhone, setHeroPhone] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    projectType: '',
    description: '',
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [pillsVisible, setPillsVisible] = useState(false);
  const pillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setPillsVisible(true); },
      { threshold: 0.2 }
    );
    if (pillsRef.current) observer.observe(pillsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Hero form:', { heroName, heroPhone });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead form:', formData);
  };

  const faqs = [
    {
      q: 'Do I get a fixed price or will the quote change mid-project?',
      a: 'You get a detailed written estimate before work begins. If scope changes, we discuss it with you first — no surprise invoices. Transparency is non-negotiable on every job.',
    },
    {
      q: 'Will Michael actually be on my job site, or will he send a crew I\'ve never met?',
      a: 'Michael Harms manages every project personally. You\'ll have his direct number, he\'ll be on site regularly, and any crew working your job reports to him — not a chain of managers.',
    },
    {
      q: 'How long does it take to get a quote?',
      a: 'Submit the form or call and Michael will get back to you within 1 business day. For most residential projects, a full written estimate is ready within 3–5 business days of the site visit.',
    },
    {
      q: 'Are you licensed and insured for work in McAllen and the Rio Grande Valley?',
      a: 'Yes. Michael Harms Construction is fully licensed and insured for both residential and commercial construction in Texas. We pull all required permits and handle inspection coordination.',
    },
    {
      q: 'We\'ve had bad experiences with contractors before. What makes this different?',
      a: 'The short answer: one name on the door, one person accountable. Michael built this business on referrals and repeat clients in a city where word travels fast. Every job protects that reputation.',
    },
    {
      q: 'Do you work on both small renovations and large custom builds?',
      a: 'Yes. We handle everything from single-room remodels to full custom home builds and commercial construction. Call with what you\'re thinking — no project is too straightforward to deserve a proper quote.',
    },
  ];

  const offerings = [
    {
      title: 'Custom Home Builds',
      hook: 'Your vision, built from the ground up — no compromises.',
      highlighted: true,
      icon: <Home size={32} />,
      features: [
        'Full design-to-completion project management',
        'Permit acquisition and inspection coordination',
        'Transparent milestone-based progress updates',
        'Custom material and finish selection support',
        'Michael Harms on site throughout the build',
        'Final walk-through before any final payment',
      ],
      cta: 'Quote My Build',
    },
    {
      title: 'Commercial Construction',
      hook: 'Retail, office, or industrial — built on schedule, on budget.',
      highlighted: false,
      icon: <Building2 size={32} />,
      features: [
        'Commercial permitting and code compliance',
        'Tenant improvement and ground-up builds',
        'Timeline-driven project scheduling',
        'Subcontractor coordination and oversight',
        'Budget tracking with client transparency',
        'Post-completion support and walkthrough',
      ],
      cta: 'Discuss My Project',
    },
    {
      title: 'Renovations & Remodels',
      hook: 'Gut it, rebuild it, and love it — on your terms.',
      highlighted: false,
      icon: <PaintRoller size={32} />,
      features: [
        'Full kitchen and bathroom remodels',
        'Room additions and structural modifications',
        'Flooring, roofing, and exterior upgrades',
        'Live-in renovation planning to minimize disruption',
        'Honest scoping — no scope creep surprises',
        'Before/after documentation at every stage',
      ],
      cta: 'Plan My Renovation',
    },
  ];

  const testimonials = [
    {
      quote: 'Michael showed up when he said he would, did exactly what he quoted, and the finished work was better than we expected. In this industry, that\'s rare. We\'ve already referred him to our neighbors.',
      attribution: 'Residential Client — McAllen, TX',
    },
    {
      quote: 'We hired Michael for a full kitchen renovation and he managed every single detail himself. No mystery workers, no unanswered calls. Professional from day one to the final walk-through.',
      attribution: 'Homeowner — McAllen, TX',
    },
    {
      quote: 'Commercial buildout came in on time and within budget. Michael flagged a potential issue before it became expensive and handled it without drama. That kind of judgment is what you\'re actually paying for.',
      attribution: 'Business Owner — McAllen, TX',
    },
  ];

  return (
    <div className={`${barlowCondensed.variable} ${inter.variable}`} style={{ backgroundColor: '#0F0F0D', color: '#F5F0E8', fontFamily: 'var(--font-inter)' }}>

      {/* ============ HERO ============ */}
      <header style={{ backgroundColor: '#0F0F0D', borderBottom: '1px solid #2E2E28' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
            <div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 900, fontSize: '1.4rem', letterSpacing: '0.05em', color: '#F5F0E8' }}>
              <span style={{ color: '#E87C2E' }}>MH</span> CONSTRUCTION
            </div>
            <a
              href="tel:9566552935"
              style={{ fontFamily: 'var(--font-barlow)', fontWeight: 700, fontSize: '1rem', color: '#E87C2E', letterSpacing: '0.05em', textDecoration: 'none' }}
            >
              (956) 655-2935
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          id="hero"
          style={{
            position: 'relative',
            backgroundColor: '#0F0F0D',
            overflow: 'hidden',
            paddingTop: '5rem',
            paddingBottom: '5rem',
          }}
        >
          {/* dot grid background */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle, #2E2E28 1px, transparent 1px)',
              backgroundSize: '28px 28px',
              opacity: 0.5,
              pointerEvents: 'none',
            }}
          />
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="hero-grid">
              {/* LEFT: copy */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'inline-flex' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-barlow)',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#E87C2E',
                      backgroundColor: 'rgba(232,124,46,0.12)',
                      border: '1px solid rgba(232,124,46,0.3)',
                      padding: '0.3rem 0.75rem',
                    }}
                  >
                    McAllen, TX Contractor
                  </span>
                </div>

                <h1
                  style={{
                    fontFamily: 'var(--font-barlow)',
                    fontWeight: 900,
                    fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
                    lineHeight: 0.95,
                    textTransform: 'uppercase',
                    letterSpacing: '0.01em',
                    color: '#F5F0E8',
                    margin: 0,
                  }}
                >
                  Built Right.<br />
                  <span style={{ color: '#E87C2E' }}>By the Guy</span><br />
                  Who Shows Up.
                </h1>

                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.05rem', color: '#A09880', lineHeight: 1.6, maxWidth: '520px', margin: 0 }}>
                  Residential and commercial construction in McAllen, TX — renovations, custom builds, and project management done with your name on it.
                </p>

                {/* inline form */}
                <form
                  onSubmit={handleHeroSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '480px' }}
                >
                  <input
                    type="text"
                    placeholder="Your name"
                    value={heroName}
                    onChange={e => setHeroName(e.target.value)}
                    required
                    style={{
                      backgroundColor: '#1A1A17',
                      border: '1px solid #2E2E28',
                      color: '#F5F0E8',
                      padding: '0.85rem 1rem',
                      fontSize: '1rem',
                      outline: 'none',
                      fontFamily: 'var(--font-inter)',
                      minHeight: '48px',
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    value={heroPhone}
                    onChange={e => setHeroPhone(e.target.value)}
                    required
                    style={{
                      backgroundColor: '#1A1A17',
                      border: '1px solid #2E2E28',
                      color: '#F5F0E8',
                      padding: '0.85rem 1rem',
                      fontSize: '1rem',
                      outline: 'none',
                      fontFamily: 'var(--font-inter)',
                      minHeight: '48px',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#E87C2E',
                      color: '#0F0F0D',
                      fontFamily: 'var(--font-barlow)',
                      fontWeight: 800,
                      fontSize: '1.05rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '0.9rem 1.5rem',
                      border: 'none',
                      cursor: 'pointer',
                      minHeight: '48px',
                      transition: 'background-color 200ms ease, transform 200ms ease',
                    }}
                    onMouseEnter={e => { (e.target as HTMLButtonElement).style.backgroundColor = '#F08E45'; (e.target as HTMLButtonElement).style.transform = 'translateY(-1px)'; }}
                    onMouseLeave={e => { (e.target as HTMLButtonElement).style.backgroundColor = '#E87C2E'; (e.target as HTMLButtonElement).style.transform = 'translateY(0)'; }}
                  >
                    Request Free Quote
                  </button>
                </form>

                {/* trust pills */}
                <div
                  ref={pillsRef}
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}
                >
                  {[
                    '⭐ 5.0 Rating — 15 Google Reviews',
                    'Residential & Commercial',
                    'McAllen, TX Local',
                    'Personal Accountability — Every Job',
                  ].map((pill, i) => (
                    <span
                      key={pill}
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.75rem',
                        color: '#A09880',
                        backgroundColor: '#1A1A17',
                        border: '1px solid #2E2E28',
                        padding: '0.35rem 0.65rem',
                        opacity: pillsVisible ? 1 : 0,
                        transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
                        transition: `opacity 400ms ease ${i * 80}ms, transform 400ms ease ${i * 80}ms`,
                      }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT: visual */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#1A1A17',
                  border: '1px solid #2E2E28',
                  minHeight: '420px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                {/* amber corner marks */}
                <div aria-hidden="true" style={{ position: 'absolute', top: 12, left: 12, width: 24, height: 24, borderTop: '2px solid #E87C2E', borderLeft: '2px solid #E87C2E' }} />
                <div aria-hidden="true" style={{ position: 'absolute', top: 12, right: 12, width: 24, height: 24, borderTop: '2px solid #E87C2E', borderRight: '2px solid #E87C2E' }} />
                <div aria-hidden="true" style={{ position: 'absolute', bottom: 12, left: 12, width: 24, height: 24, borderBottom: '2px solid #E87C2E', borderLeft: '2px solid #E87C2E' }} />
                <div aria-hidden="true" style={{ position: 'absolute', bottom: 12, right: 12, width: 24, height: 24, borderBottom: '2px solid #E87C2E', borderRight: '2px solid #E87C2E' }} />
                {/* dot grid overlay */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle, #2E2E28 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    opacity: 0.7,
                  }}
                />
                {/* MH monogram */}
                <div
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-barlow)',
                      fontWeight: 900,
                      fontSize: 'clamp(6rem, 15vw, 11rem)',
                      color: '#E87C2E',
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                      opacity: 0.15,
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      userSelect: 'none',
                    }}
                    aria-hidden="true"
                  >
                    MH
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      border: '2px solid #E87C2E',
                      padding: '1.5rem 2.5rem',
                      display: 'inline-block',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-barlow)',
                        fontWeight: 900,
                        fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                        color: '#F5F0E8',
                        lineHeight: 1,
                        letterSpacing: '0.05em',
                      }}
                    >
                      MH
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-barlow)',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: '#A09880',
                        marginTop: '0.25rem',
                      }}
                    >
                      Construction
                    </div>
                  </div>
                </div>
                {/* floating stat badges */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '1.5rem',
                    backgroundColor: '#0F0F0D',
                    border: '1px solid #E87C2E',
                    padding: '0.6rem 0.9rem',
                    zIndex: 2,
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800, fontSize: '1.1rem', color: '#E87C2E' }}>5.0★ Google Rated</div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', color: '#A09880' }}>McAllen, TX</div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    backgroundColor: '#0F0F0D',
                    border: '1px solid #2E2E28',
                    padding: '0.6rem 0.9rem',
                    zIndex: 2,
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-barlow)', fontWeight: 800, fontSize: '1.1rem', color: '#F5F0E8' }}>15 Reviews</div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', color: '#A09880' }}>& Counting</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ TRUST BAR ============ */}
        <section
          id="trust_bar"
          style={{
            backgroundColor: '#1A1A17',
            borderTop: '2px solid #E87C2E',
            borderBottom: '1px solid #2E2E28',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 0,
                overflowX: 'auto',
              }}
            >
              {[
                { icon: <Star size={18} />, text: '5.0 Google Rating' },
                { icon: <ShieldCheck size={18} />, text: 'Fully Insured & Licensed' },
                { icon: <MapPin size={18} />, text: 'McAllen, TX Based' },
                { icon: <Hammer size={18} />, text: 'Residential & Commercial' },
                { icon: <Phone size={18} />, text: '(956) 655-2935 — Call Anytime' },
              ].map((item, i, arr) => (
                <div
                  key={item.text}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1.1rem 1.4rem',
                    borderRight: i < arr.length - 1 ? '1px solid #E87C2E' : 'none',
                    flex: '1 1 180px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ color: '#E87C2E' }}>{item.icon}</span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: '#A09880', fontWeight: 500 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ DIFFERENTIATION ============ */}
        <section
          id="differentiation"
          style={{ backgroundColor: '#0F0F0D', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            {/* section heading accent */}
            <div style={{ marginBottom: '3.5rem' }}>
              <div style={{ width: 40, height: 2, backgroundColor: '#E87C2E', marginBottom: '1rem' }} />
              <h2
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  color: '#F5F0E8',
                  margin: '0 0 0.5rem',
                }}
              >
                One Name. One Standard.
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', color: '#A09880', fontSize: '1.05rem' }}>
                Michael Harms doesn't hand your project off. He runs it.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '3rem',
              }}
              className="diff-grid"
            >
              {/* LEFT */}
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#1A1A17',
                  border: '1px solid #2E2E28',
                  padding: '2.5rem',
                  overflow: 'hidden',
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    bottom: '-1rem',
                    right: '-1rem',
                    fontFamily: 'var(--font-barlow)',
                    fontWeight: 900,
                    fontSize: '12rem',
                    color: '#E87C2E',
                    lineHeight: 1,
                    opacity: 0.06,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  MH
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ color: '#E87C2E', marginBottom: '1.25rem' }}><UserCheck size={36} /></div>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '1.1rem',
                      color: '#F5F0E8',
                      lineHeight: 1.7,
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    Most contractors sell you a handshake and send a crew you've never met.
                    <strong style={{ color: '#E87C2E' }}> Michael Harms Construction means Michael</strong> — on site,
                    on call, and accountable to you by name.
                  </p>
                  <div style={{ marginTop: '2rem' }}>
                    <a
                      href="#lead_form"
                      style={{
                        fontFamily: 'var(--font-barlow)',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#0F0F0D',
                        backgroundColor: '#E87C2E',
                        padding: '0.75rem 1.5rem',
                        textDecoration: 'none',
                        display: 'inline-block',
                        transition: 'background-color 200ms ease, transform 200ms ease',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F08E45'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#E87C2E'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
                    >
                      Talk to Michael
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT: proof points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  {
                    icon: <ClipboardList size={24} />,
                    title: 'Full Project Management',
                    desc: 'From permit pulls to punch lists — every phase managed personally.',
                  },
                  {
                    icon: <Wrench size={24} />,
                    title: 'Custom Builds & Renovations',
                    desc: 'New construction or gut-reno, built to your spec, not a template.',
                  },
                  {
                    icon: <BadgeCheck size={24} />,
                    title: 'Quality You Can Inspect',
                    desc: 'Walk through at every milestone. No surprises at the end.',
                  },
                ].map(item => (
                  <div
                    key={item.title}
                    style={{
                      display: 'flex',
                      gap: '1.25rem',
                      backgroundColor: '#1A1A17',
                      border: '1px solid #2E2E28',
                      borderLeft: '3px solid #E87C2E',
                      padding: '1.5rem',
                    }}
                  >
                    <div style={{ color: '#E87C2E', flexShrink: 0, marginTop: '2px' }}>{item.icon}</div>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-barlow)',
                          fontWeight: 700,
                          fontSize: '1.15rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: '#F5F0E8',
                          marginBottom: '0.35rem',
                        }}
                      >
                        {item.title}
                      </div>
                      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: '#A09880', lineHeight: 1.6 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ OFFERINGS ============ */}
        <section
          id="offerings"
          style={{
            backgroundColor: '#1A1A17',
            padding: '6rem 0',
            borderTop: '1px solid #2E2E28',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ marginBottom: '3.5rem' }}>
              <div style={{ width: 40, height: 2, backgroundColor: '#E87C2E', marginBottom: '1rem' }} />
              <h2
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  color: '#F5F0E8',
                  margin: '0 0 0.5rem',
                }}
              >
                What We Build
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', color: '#A09880', fontSize: '1.05rem' }}>
                Whether it's a new home, a commercial space, or a full renovation — we handle it start to finish.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {offerings.map(offering => (
                <div
                  key={offering.title}
                  style={{
                    position: 'relative',
                    backgroundColor: offering.highlighted ? '#1A1A17' : '#0F0F0D',
                    border: `1px solid ${offering.highlighted ? '#E87C2E' : '#2E2E28'}`,
                    borderTop: `3px solid #E87C2E`,
                    padding: '2rem',
                    overflow: 'hidden',
                    transition: 'border-left 200ms ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderLeft = '3px solid #E87C2E'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderLeft = `1px solid ${offering.highlighted ? '#E87C2E' : '#2E2E28'}`; }}
                >
                  {/* blueprint corner marks */}
                  <div aria-hidden="true" style={{ position: 'absolute', top: 8, right: 8, width: 16, height: 16, borderTop: '1px solid #E87C2E', borderRight: '1px solid #E87C2E', opacity: 0.5 }} />
                  <div aria-hidden="true" style={{ position: 'absolute', bottom: 8, left: 8, width: 16, height: 16, borderBottom: '1px solid #E87C2E', borderLeft: '1px solid #E87C2E', opacity: 0.5 }} />

                  {offering.highlighted && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        backgroundColor: '#E87C2E',
                        color: '#0F0F0D',
                        fontFamily: 'var(--font-barlow)',
                        fontWeight: 800,
                        fontSize: '0.65rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        padding: '0.2rem 0.5rem',
                      }}
                    >
                      Most Popular
                    </div>
                  )}

                  <div style={{ color: '#E87C2E', marginBottom: '1rem' }}>{offering.icon}</div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-barlow)',
                      fontWeight: 800,
                      fontSize: '1.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      color: '#F5F0E8',
                      margin: '0 0 0.5rem',
                    }}
                  >
                    {offering.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: '#A09880', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                    {offering.hook}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {offering.features.map(feat => (
                      <li
                        key={feat}
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '0.85rem',
                          color: '#A09880',
                          paddingLeft: '1.1rem',
                          position: 'relative',
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: '0.35em',
                            width: 6,
                            height: 6,
                            backgroundColor: '#E87C2E',
                            display: 'inline-block',
                          }}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#lead_form"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      fontFamily: 'var(--font-barlow)',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: offering.highlighted ? '#0F0F0D' : '#E87C2E',
                      backgroundColor: offering.highlighted ? '#E87C2E' : 'transparent',
                      border: `1px solid #E87C2E`,
                      padding: '0.75rem',
                      textDecoration: 'none',
                      transition: 'background-color 200ms ease, color 200ms ease, transform 200ms ease',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.backgroundColor = '#F08E45';
                      el.style.color = '#0F0F0D';
                      el.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.backgroundColor = offering.highlighted ? '#E87C2E' : 'transparent';
                      el.style.color = offering.highlighted ? '#0F0F0D' : '#E87C2E';
                      el.style.transform = 'translateY(0)';
                    }}
                  >
                    {offering.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ METRICS ============ */}
        <section
          id="metrics"
          style={{
            backgroundColor: '#0F0F0D',
            padding: '6rem 0',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* diagonal stripe top */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'repeating-linear-gradient(45deg, #E87C2E 0px, #E87C2E 8px, transparent 8px, transparent 16px)',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'repeating-linear-gradient(45deg, #E87C2E 0px, #E87C2E 8px, transparent 8px, transparent 16px)',
            }}
          />

          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ width: 40, height: 2, backgroundColor: '#E87C2E', margin: '0 auto 1rem' }} />
              <h2
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  color: '#F5F0E8',
                  margin: '0 0 0.5rem',
                }}
              >
                The Numbers Don't Lie
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', color: '#A09880', fontSize: '1.05rem' }}>
                Built on reputation, backed by results.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
              }}
            >
              {[
                { num: '5.0★', label: 'Average Google Rating' },
                { num: '15+', label: 'Verified Client Reviews' },
                { num: '100%', label: 'Projects Delivered On Spec' },
                { num: '10+', label: 'Years South Texas Experience' },
              ].map(stat => (
                <div
                  key={stat.label}
                  style={{
                    textAlign: 'center',
                    position: 'relative',
                    padding: '2rem 1rem',
                    backgroundColor: '#1A1A17',
                    border: '1px solid #2E2E28',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-barlow)',
                      fontWeight: 900,
                      fontSize: '8rem',
                      color: '#E87C2E',
                      opacity: 0.04,
                      userSelect: 'none',
                      pointerEvents: 'none',
                      letterSpacing: '-0.05em',
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-barlow)',
                      fontWeight: 900,
                      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                      color: '#E87C2E',
                      lineHeight: 1,
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      width: 40,
                      height: 2,
                      backgroundColor: '#E87C2E',
                      margin: '0.75rem auto',
                    }}
                  />
                  <div
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.85rem',
                      color: '#A09880',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SOCIAL PROOF ============ */}
        <section
          id="social_proof"
          style={{
            backgroundColor: '#1A1A17',
            padding: '6rem 0',
            borderTop: '1px solid #2E2E28',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ width: 40, height: 2, backgroundColor: '#E87C2E', margin: '0 auto 1rem' }} />
              <h2
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  color: '#F5F0E8',
                  margin: '0 0 0.5rem',
                }}
              >
                Straight From Our Clients
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', color: '#A09880', fontSize: '1.05rem' }}>
                Every review is a job site we're proud of.
              </p>

              {/* Google badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  border: '1px solid #E87C2E',
                  padding: '0.6rem 1.25rem',
                  marginTop: '1.5rem',
                  backgroundColor: 'rgba(232,124,46,0.06)',
                }}
              >
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#E87C2E" color="#E87C2E" />
                  ))}
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-barlow)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#F5F0E8',
                    letterSpacing: '0.05em',
                  }}
                >
                  5.0 / 5 on Google
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.8rem',
                    color: '#A09880',
                  }}
                >
                  (15 Reviews)
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2.5rem',
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#0F0F0D',
                    border: '1px solid #2E2E28',
                    borderLeft: '3px solid #E87C2E',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-barlow)',
                      fontWeight: 900,
                      fontSize: '4rem',
                      color: '#E87C2E',
                      lineHeight: 0.8,
                      marginBottom: '1rem',
                      opacity: 0.7,
                    }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.95rem',
                      color: '#F5F0E8',
                      lineHeight: 1.7,
                      flex: 1,
                      margin: 0,
                    }}
                  >
                    {t.quote}
                  </p>
                  <div style={{ height: 1, backgroundColor: '#2E2E28', margin: '1.25rem 0' }} />
                  <div>
                    <div style={{ display: 'flex', gap: '2px', marginBottom: '0.4rem' }}>
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={12} fill="#E87C2E" color="#E87C2E" />
                      ))}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.8rem',
                        color: '#A09880',
                        fontWeight: 600,
                      }}
                    >
                      {t.attribution}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#E87C2E',
                  textDecoration: 'none',
                  border: '1px solid #E87C2E',
                  padding: '0.75rem 1.5rem',
                  display: 'inline-block',
                  transition: 'background-color 200ms ease, color 200ms ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#E87C2E'; (e.currentTarget as HTMLAnchorElement).style.color = '#0F0F0D'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = '#E87C2E'; }}
              >
                Read All Reviews
              </a>
            </div>
          </div>
        </section>

        {/* ============ PROCESS ============ */}
        <section
          id="process"
          style={{
            backgroundColor: '#0F0F0D',
            padding: '6rem 0',
            borderTop: '1px solid #2E2E28',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ width: 40, height: 2, backgroundColor: '#E87C2E', margin: '0 auto 1rem' }} />
              <h2
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  color: '#F5F0E8',
                  margin: '0 0 0.5rem',
                }}
              >
                How a Michael Harms Job Works
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', color: '#A09880', fontSize: '1.05rem' }}>
                Simple process. No runaround. You always know what's next.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0',
                position: 'relative',
              }}
            >
              {[
                { step: '01', icon: <Phone size={24} />, title: 'Free Consultation', desc: 'Call or submit the form — we discuss your project on your schedule.' },
                { step: '02', icon: <FileText size={24} />, title: 'Detailed Estimate', desc: 'You get a line-item quote. No mystery pricing, no hidden fees.' },
                { step: '03', icon: <HardHat size={24} />, title: 'We Build It', desc: 'Michael manages every crew, every timeline, every decision.' },
                { step: '04', icon: <CheckCircle2 size={24} />, title: 'Final Walk-Through', desc: 'You inspect the work before we call it done. Period.' },
              ].map((step, i, arr) => (
                <div
                  key={step.step}
                  style={{
                    backgroundColor: '#1A1A17',
                    border: '1px solid #2E2E28',
                    borderLeft: i === 0 ? '1px solid #2E2E28' : 'none',
                    padding: '2rem',
                    position: 'relative',
                  }}
                >
                  {i < arr.length - 1 && (
                    <div
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        top: '2.5rem',
                        right: '-12px',
                        width: 24,
                        height: 24,
                        backgroundColor: '#E87C2E',
                        clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
                        zIndex: 2,
                      }}
                    />
                  )}
                  <div
                    style={{
                      fontFamily: 'var(--font-barlow)',
                      fontWeight: 900,
                      fontSize: '3.5rem',
                      color: '#E87C2E',
                      lineHeight: 1,
                      opacity: 0.25,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {step.step}
                  </div>
                  <div style={{ color: '#E87C2E', marginBottom: '0.75rem' }}>{step.icon}</div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-barlow)',
                      fontWeight: 800,
                      fontSize: '1.2rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: '#F5F0E8',
                      margin: '0 0 0.5rem',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#A09880', lineHeight: 1.6, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <a
                href="#lead_form"
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 800,
                  fontSize: '1rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#0F0F0D',
                  backgroundColor: '#E87C2E',
                  padding: '0.9rem 2rem',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'background-color 200ms ease, transform 200ms ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F08E45'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#E87C2E'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
              >
                Start Step 1 — Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section
          id="faq"
          style={{
            backgroundColor: '#1A1A17',
            padding: '6rem 0',
            borderTop: '1px solid #2E2E28',
          }}
        >
          <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ width: 40, height: 2, backgroundColor: '#E87C2E', margin: '0 auto 1rem' }} />
              <h2
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  color: '#F5F0E8',
                  margin: '0 0 0.5rem',
                }}
              >
                Questions We Hear on Every Job
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', color: '#A09880', fontSize: '1.05rem' }}>
                Straight answers, no contractor-speak.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#0F0F0D',
                    border: '1px solid #2E2E28',
                    borderTop: i === 0 ? '1px solid #2E2E28' : 'none',
                    borderLeft: openFaq === i ? '3px solid #E87C2E' : '3px solid transparent',
                    transition: 'border-left-color 150ms ease',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      gap: '1rem',
                    }}
                    aria-expanded={openFaq === i}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: openFaq === i ? '#F5F0E8' : '#C4B89A',
                        lineHeight: 1.5,
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        color: '#E87C2E',
                        flexShrink: 0,
                        transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 200ms ease',
                      }}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: openFaq === i ? '400px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 300ms ease',
                    }}
                  >
                    <div style={{ padding: '0 1.5rem 1.25rem' }}>
                      <p
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '0.9rem',
                          color: '#A09880',
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ GUARANTEE ============ */}
        <section
          id="guarantee"
          style={{
            backgroundColor: '#0F0F0D',
            padding: '6rem 0',
            borderTop: '1px solid #2E2E28',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div
              style={{
                border: '2px solid #E87C2E',
                padding: '3.5rem 3rem',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              {/* corner accents */}
              <div aria-hidden="true" style={{ position: 'absolute', top: -2, left: -2, width: 32, height: 32, borderTop: '4px solid #E87C2E', borderLeft: '4px solid #E87C2E' }} />
              <div aria-hidden="true" style={{ position: 'absolute', top: -2, right: -2, width: 32, height: 32, borderTop: '4px solid #E87C2E', borderRight: '4px solid #E87C2E' }} />
              <div aria-hidden="true" style={{ position: 'absolute', bottom: -2, left: -2, width: 32, height: 32, borderBottom: '4px solid #E87C2E', borderLeft: '4px solid #E87C2E' }} />
              <div aria-hidden="true" style={{ position: 'absolute', bottom: -2, right: -2, width: 32, height: 32, borderBottom: '4px solid #E87C2E', borderRight: '4px solid #E87C2E' }} />

              <div style={{ color: '#E87C2E', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                <ShieldCheck size={48} />
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  color: '#F5F0E8',
                  margin: '0 0 2rem',
                }}
              >
                The Michael Harms Promise
              </h2>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'You get a written quote before any work starts — no surprise invoices.',
                  'Michael Harms is reachable throughout your project — call (956) 655-2935 directly.',
                  "If something isn't right at walk-through, we fix it. That's not a policy — it's how we work.",
                ].map((promise, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      alignItems: 'flex-start',
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.95rem',
                      color: '#F5F0E8',
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: '#E87C2E', flexShrink: 0, marginTop: '2px' }}>
                      <CheckCircle2 size={18} />
                    </span>
                    {promise}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  fontSize: '1.3rem',
                  color: '#E87C2E',
                  letterSpacing: '0.05em',
                  marginBottom: '2rem',
                }}
              >
                Your project. Your investment. Protected.
              </div>

              <a
                href="#lead_form"
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 800,
                  fontSize: '1rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#0F0F0D',
                  backgroundColor: '#E87C2E',
                  padding: '0.9rem 2rem',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'background-color 200ms ease, transform 200ms ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F08E45'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#E87C2E'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
              >
                Hold Us to It — Get a Quote
              </a>
            </div>
          </div>
        </section>

        {/* ============ LEAD FORM ============ */}
        <section
          id="lead_form"
          style={{
            backgroundColor: '#1A1A17',
            padding: '6rem 0',
            borderTop: '2px solid #E87C2E',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ width: 40, height: 2, backgroundColor: '#E87C2E', margin: '0 auto 1rem' }} />
              <h2
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  color: '#F5F0E8',
                  margin: '0 0 0.5rem',
                }}
              >
                Get Your Free Project Quote
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', color: '#A09880', fontSize: '1.05rem' }}>
                Fill this out and Michael will personally call you back within 1 business day.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '2rem',
              }}
              className="form-grid"
            >
              {/* FORM */}
              <div
                style={{
                  backgroundColor: '#0F0F0D',
                  border: '1px solid #2E2E28',
                  borderTop: '3px solid #E87C2E',
                  padding: '2.5rem',
                }}
              >
                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-inter)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#A09880',
                          marginBottom: '0.4rem',
                        }}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={e => setFormData(p => ({ ...p, firstName: e.target.value }))}
                        required
                        style={{
                          width: '100%',
                          backgroundColor: '#1A1A17',
                          border: '1px solid #2E2E28',
                          color: '#F5F0E8',
                          padding: '0.75rem 1rem',
                          fontSize: '0.95rem',
                          fontFamily: 'var(--font-inter)',
                          outline: 'none',
                          minHeight: '48px',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-inter)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#A09880',
                          marginBottom: '0.4rem',
                        }}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={e => setFormData(p => ({ ...p, lastName: e.target.value }))}
                        required
                        style={{
                          width: '100%',
                          backgroundColor: '#1A1A17',
                          border: '1px solid #2E2E28',
                          color: '#F5F0E8',
                          padding: '0.75rem 1rem',
                          fontSize: '0.95rem',
                          fontFamily: 'var(--font-inter)',
                          outline: 'none',
                          minHeight: '48px',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>

                  {[{ label: 'Phone', type: 'tel', key: 'phone' }, { label: 'Email', type: 'email', key: 'email' }].map(field => (
                    <div key={field.key}>
                      <label
                        style={{
                          display: 'block',
                          fontFamily: 'var(--font-inter)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#A09880',
                          marginBottom: '0.4rem',
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        value={formData[field.key as keyof typeof formData]}
                        onChange={e => setFormData(p => ({ ...p, [field.key]: e.target.value }))}
                        required
                        style={{
                          width: '100%',
                          backgroundColor: '#1A1A17',
                          border: '1px solid #2E2E28',
                          color: '#F5F0E8',
                          padding: '0.75rem 1rem',
                          fontSize: '0.95rem',
                          fontFamily: 'var(--font-inter)',
                          outline: 'none',
                          minHeight: '48px',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#A09880',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={e => setFormData(p => ({ ...p, projectType: e.target.value }))}
                      required
                      style={{
                        width: '100%',
                        backgroundColor: '#1A1A17',
                        border: '1px solid #2E2E28',
                        color: formData.projectType ? '#F5F0E8' : '#A09880',
                        padding: '0.75rem 1rem',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-inter)',
                        outline: 'none',
                        minHeight: '48px',
                        boxSizing: 'border-box',
                        appearance: 'none',
                      }}
                    >
                      <option value="" disabled>Select project type...</option>
                      <option value="Custom Home">Custom Home</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#A09880',
                        marginBottom: '0.4rem',
                      }}
                    >
                      Brief Project Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={e => setFormData(p => ({ ...p, description: e.target.value }))}
                      rows={4}
                      placeholder="Tell us what you have in mind..."
                      style={{
                        width: '100%',
                        backgroundColor: '#1A1A17',
                        border: '1px solid #2E2E28',
                        color: '#F5F0E8',
                        padding: '0.75rem 1rem',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-inter)',
                        outline: 'none',
                        resize: 'vertical',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#E87C2E',
                      color: '#0F0F0D',
                      fontFamily: 'var(--font-barlow)',
                      fontWeight: 800,
                      fontSize: '1.05rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '1rem',
                      border: 'none',
                      cursor: 'pointer',
                      minHeight: '52px',
                      width: '100%',
                      transition: 'background-color 200ms ease, transform 200ms ease',
                    }}
                    onMouseEnter={e => { (e.target as HTMLButtonElement).style.backgroundColor = '#F08E45'; (e.target as HTMLButtonElement).style.transform = 'translateY(-1px)'; }}
                    onMouseLeave={e => { (e.target as HTMLButtonElement).style.backgroundColor = '#E87C2E'; (e.target as HTMLButtonElement).style.transform = 'translateY(0)'; }}
                  >
                    Send My Quote Request
                  </button>

                  <p
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.8rem',
                      color: '#A09880',
                      textAlign: 'center',
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    No obligation. Michael personally reviews every submission and calls within 1 business day.
                  </p>
                </form>
              </div>

              {/* CONTACT INFO */}
              <div
                style={{
                  backgroundColor: '#0F0F0D',
                  border: '1px solid #2E2E28',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-barlow)',
                    fontWeight: 800,
                    fontSize: '1.4rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#F5F0E8',
                    margin: 0,
                  }}
                >
                  Reach Michael Directly
                </h3>

                {[
                  { icon: <Phone size={20} />, text: '(956) 655-2935', href: 'tel:9566552935' },
                  { icon: <MapPin size={20} />, text: '1124 Pecan Blvd, McAllen, TX 78501', href: null },
                  { icon: <BadgeCheck size={20} />, text: 'Response within 1 business day', href: null },
                  { icon: <UserCheck size={20} />, text: 'You talk to Michael, not a receptionist', href: null },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#E87C2E', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        style={{
                          fontFamily: 'var(--font-inter)',
                          fontSize: '0.95rem',
                          color: '#E87C2E',
                          fontWeight: 600,
                          textDecoration: 'none',
                          lineHeight: 1.5,
                        }}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.95rem', color: '#C4B89A', lineHeight: 1.5 }}>
                        {item.text}
                      </span>
                    )}
                  </div>
                ))}

                <div
                  style={{
                    border: '1px solid #E87C2E',
                    padding: '1rem 1.25rem',
                    backgroundColor: 'rgba(232,124,46,0.06)',
                    marginTop: 'auto',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-barlow)',
                      fontWeight: 800,
                      fontSize: '1.1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#E87C2E',
                      textAlign: 'center',
                    }}
                  >
                    No Obligation. No Pressure.
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.8rem',
                      color: '#A09880',
                      textAlign: 'center',
                      marginTop: '0.35rem',
                    }}
                  >
                    Just a straight conversation about your project.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer
        style={{
          backgroundColor: '#0F0F0D',
          borderTop: '2px solid #E87C2E',
          paddingTop: '3.5rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem',
              paddingBottom: '3rem',
            }}
            className="footer-grid"
          >
            {/* COL 1 */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 900,
                  fontSize: '2rem',
                  letterSpacing: '0.05em',
                  color: '#F5F0E8',
                  marginBottom: '0.75rem',
                }}
              >
                <span style={{ color: '#E87C2E' }}>MH</span> CONSTRUCTION
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.875rem',
                  color: '#A09880',
                  lineHeight: 1.6,
                  maxWidth: '280px',
                  marginBottom: '1rem',
                }}
              >
                McAllen's trusted name in residential and commercial construction — quality built by the guy who answers his phone.
              </p>
              <a
                href="tel:9566552935"
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 800,
                  fontSize: '1.3rem',
                  letterSpacing: '0.05em',
                  color: '#E87C2E',
                  textDecoration: 'none',
                }}
              >
                (956) 655-2935
              </a>
            </div>

            {/* COL 2 */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#F5F0E8',
                  marginBottom: '1rem',
                }}
              >
                Services
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['Custom Home Builds', 'Commercial Construction', 'Renovations & Remodels', 'Project Management', 'Permit Coordination'].map(s => (
                  <li key={s}>
                    <a
                      href="#lead_form"
                      style={{
                        fontFamily: 'var(--font-inter)',
                        fontSize: '0.875rem',
                        color: '#A09880',
                        textDecoration: 'none',
                        transition: 'color 150ms ease',
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#E87C2E'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#A09880'; }}
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 3 */}
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-barlow)',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#F5F0E8',
                  marginBottom: '1rem',
                }}
              >
                Contact
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { icon: <Phone size={14} />, text: '(956) 655-2935' },
                  { icon: <MapPin size={14} />, text: '1124 Pecan Blvd, McAllen, TX 78501' },
                  { icon: <Hammer size={14} />, text: 'McAllen & Rio Grande Valley' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#E87C2E', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#A09880', lineHeight: 1.5 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* bottom bar */}
          <div
            style={{
              borderTop: '1px solid #2E2E28',
              padding: '1.25rem 0',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: '#A09880' }}>
              © {new Date().getFullYear()} Michael Harms Construction. All rights reserved.
            </span>
            <span
              style={{
                fontFamily: 'var(--font-barlow)',
                fontWeight: 700,
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#E87C2E',
              }}
            >
              McAllen, TX
            </span>
          </div>
        </div>
      </footer>

      {/* Responsive grid styles */}
      <style>{`
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 55% 45% !important;
          }
          .diff-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .form-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr !important;
          }
        }
        input::placeholder, textarea::placeholder { color: #A09880; }
        input:focus, textarea:focus, select:focus {
          border-color: #E87C2E !important;
          box-shadow: 0 0 0 1px #E87C2E;
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
