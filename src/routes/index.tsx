import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, MapPin, Mail, Clock, Star, Globe2, Plane, Hotel, Briefcase,
  Heart, Users, FileCheck, Headphones, BadgeCheck, Wallet, Sparkles,
  ChevronDown, Send, MessageCircle, ArrowRight, Calendar, Menu, X,
} from "lucide-react";

import hero from "@/assets/hero.jpg";
import dubai from "@/assets/dubai.jpg";
import bali from "@/assets/bali.jpg";
import thailand from "@/assets/thailand.jpg";
import singapore from "@/assets/singapore.jpg";
import switzerland from "@/assets/switzerland.jpg";
import paris from "@/assets/paris.jpg";
import kashmir from "@/assets/kashmir.jpg";
import goa from "@/assets/goa.jpg";
import himachal from "@/assets/himachal.jpg";
import kerala from "@/assets/kerala.jpg";
import rajasthan from "@/assets/rajasthan.jpg";
import maldives from "@/assets/maldives.jpg";
import turkey from "@/assets/turkey.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dwarkesh Tours & Travels — Best Travel Agency in Vadodara" },
      { name: "description", content: "Plan domestic & international tours with Dwarkesh Tours and Travels Pvt Ltd. 2900+ Google reviews. Honeymoon, group, family, corporate packages, visa, flights & hotels." },
      { property: "og:title", content: "Dwarkesh Tours & Travels — Discover The World With Confidence" },
      { property: "og:description", content: "Trusted by thousands of travelers across Gujarat. Customized holiday packages to Dubai, Bali, Europe, Kashmir & more." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Dwarkesh Tours And Travels Private Limited",
          image: hero,
          telephone: "+91 97129 57009",
          address: {
            "@type": "PostalAddress",
            streetAddress: "FF 39, Earth Eon, Sama-Savli Road, Opp. Urmi School, New Sama",
            addressLocality: "Vadodara",
            addressRegion: "Gujarat",
            postalCode: "390024",
            addressCountry: "IN",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2900" },
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE = "+919712957009";
const WA_LINK = `https://wa.me/${PHONE.replace("+", "")}?text=Hi%20Dwarkesh%20Tours%2C%20I%27d%20like%20to%20plan%20a%20trip.`;

const packages = [
  { name: "Dubai Glitz & Desert", img: dubai, days: "5N / 6D", price: "₹54,999", tags: ["Burj Khalifa", "Desert Safari", "Marina Cruise"] },
  { name: "Bali Island Escape", img: bali, days: "6N / 7D", price: "₹49,900", tags: ["Ubud", "Seminyak", "Tanah Lot"] },
  { name: "Thailand Phuket & Krabi", img: thailand, days: "5N / 6D", price: "₹42,500", tags: ["Phi Phi Tour", "James Bond", "Beaches"] },
  { name: "Singapore Highlights", img: singapore, days: "4N / 5D", price: "₹58,200", tags: ["Sentosa", "Universal", "Gardens"] },
  { name: "Europe 4 Countries", img: switzerland, days: "9N / 10D", price: "₹1,79,000", tags: ["Paris", "Swiss Alps", "Rome"] },
  { name: "Kashmir Paradise", img: kashmir, days: "5N / 6D", price: "₹26,900", tags: ["Gulmarg", "Pahalgam", "Shikara"] },
  { name: "Goa Beach Holiday", img: goa, days: "3N / 4D", price: "₹14,500", tags: ["North & South", "Cruise", "Beaches"] },
  { name: "Himachal Snow Trail", img: himachal, days: "6N / 7D", price: "₹22,800", tags: ["Manali", "Shimla", "Solang"] },
  { name: "Kerala Backwaters", img: kerala, days: "5N / 6D", price: "₹24,500", tags: ["Munnar", "Alleppey", "Houseboat"] },
  { name: "Rajasthan Royal Trail", img: rajasthan, days: "6N / 7D", price: "₹28,900", tags: ["Jaipur", "Udaipur", "Jodhpur"] },
];

const categories = ["All", "International", "Domestic", "Honeymoon", "Family"];

const featuredDestinations = [
  { name: "Dubai", img: dubai }, { name: "Bali", img: bali },
  { name: "Switzerland", img: switzerland }, { name: "Paris", img: paris },
  { name: "Thailand", img: thailand }, { name: "Kashmir", img: kashmir },
  { name: "Goa", img: goa }, { name: "Maldives", img: maldives },
  { name: "Singapore", img: singapore }, { name: "Turkey", img: turkey },
];

const whyChoose = [
  { icon: Sparkles, title: "Customized Itineraries", desc: "Trips tailored to your style, budget and pace." },
  { icon: Users, title: "Experienced Travel Experts", desc: "15+ years guiding travelers across the globe." },
  { icon: FileCheck, title: "Visa Assistance", desc: "End-to-end visa documentation & support." },
  { icon: Plane, title: "Flight & Hotel Booking", desc: "Best fares with handpicked premium stays." },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock help while you travel." },
  { icon: Wallet, title: "Best Price Guarantee", desc: "Transparent pricing — no hidden fees ever." },
];

const services = [
  { icon: Globe2, t: "International Tours" }, { icon: MapPin, t: "Domestic Tours" },
  { icon: Heart, t: "Honeymoon Packages" }, { icon: Users, t: "Group Tours" },
  { icon: Briefcase, t: "Corporate Travel" }, { icon: FileCheck, t: "Visa Services" },
  { icon: Hotel, t: "Hotel Reservations" }, { icon: Plane, t: "Flight Booking" },
];

const testimonials = [
  { name: "Riya Patel", trip: "Bali Honeymoon", rating: 5, text: "Our Bali trip was magical — every detail handled. The team at Dwarkesh made our honeymoon unforgettable!" },
  { name: "Amit Shah", trip: "Europe Family Tour", rating: 5, text: "Visited 4 countries in 10 days without a single hiccup. Hotels, transfers, guides — all premium. Highly recommend." },
  { name: "Neha Joshi", trip: "Kashmir Group Tour", rating: 5, text: "Best travel agency in Vadodara. Transparent pricing and warm support throughout. Will book again!" },
  { name: "Ravi Mehta", trip: "Dubai Corporate", rating: 5, text: "Handled our 40-member corporate event flawlessly. Professional, punctual and very accommodating." },
];

const gallery = [hero, bali, paris, kashmir, maldives, singapore, turkey, rajasthan, goa];

const faqs = [
  { q: "How do I book a tour with Dwarkesh Tours and Travels?", a: "Submit the inquiry form or call us at +91 97129 57009. Our experts share a tailored itinerary within 24 hours, and you confirm with a small booking advance." },
  { q: "Do you offer visa assistance?", a: "Yes — end-to-end visa documentation, appointment scheduling and submission support for all major destinations." },
  { q: "Can itineraries be customized?", a: "Absolutely. Every package can be personalised by duration, hotels, sightseeing, meals and travel dates." },
  { q: "Do you handle group and corporate bookings?", a: "Yes, we specialise in group tours, family vacations and corporate offsites with dedicated tour managers." },
  { q: "What payment options are available?", a: "We accept UPI, NEFT, RTGS, credit & debit cards, and offer convenient EMI options on select bookings." },
];

const navLinks: [string, string][] = [
  ["Home", "#home"], ["Packages", "#packages"], ["Destinations", "#destinations"],
  ["Services", "#services"], ["Gallery", "#gallery"], ["Contact", "#contact"],
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [activeTest, setActiveTest] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", phone: "", dest: "", date: "", pax: "2", msg: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveTest((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const filtered = packages.filter((p) => {
    if (filter === "All") return true;
    if (filter === "International") return ["Dubai Glitz & Desert", "Bali Island Escape", "Thailand Phuket & Krabi", "Singapore Highlights", "Europe 4 Countries"].includes(p.name);
    if (filter === "Domestic") return ["Kashmir Paradise", "Goa Beach Holiday", "Himachal Snow Trail", "Kerala Backwaters", "Rajasthan Royal Trail"].includes(p.name);
    if (filter === "Honeymoon") return ["Bali Island Escape", "Europe 4 Countries", "Kashmir Paradise", "Kerala Backwaters"].includes(p.name);
    if (filter === "Family") return ["Dubai Glitz & Desert", "Singapore Highlights", "Goa Beach Holiday", "Himachal Snow Trail", "Rajasthan Royal Trail"].includes(p.name);
    return true;
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.phone.trim().length < 10) return;
    const text = `Hi Dwarkesh Tours,%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ADestination: ${encodeURIComponent(form.dest)}%0ATravel Date: ${encodeURIComponent(form.date)}%0ATravelers: ${encodeURIComponent(form.pax)}%0AMessage: ${encodeURIComponent(form.msg)}`;
    window.open(`https://wa.me/${PHONE.replace("+", "")}?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
        <div className="mx-auto max-w-7xl px-4">
          <div className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all ${scrolled ? "glass shadow-elegant" : "glass-dark"}`}>
            <a href="#home" className="flex items-center gap-2.5">
              <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "var(--gradient-brand)" }}>
                <Plane className="h-5 w-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className={`text-sm font-bold ${scrolled ? "text-foreground" : "text-white"}`}>Dwarkesh Tours</div>
                <div className={`text-[10px] uppercase tracking-widest ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>& Travels</div>
              </div>
            </a>
            <nav className="hidden items-center gap-7 lg:flex">
              {navLinks.map(([l, h]) => (
                <a key={h} href={h} className={`text-sm font-medium transition-colors ${scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"}`}>{l}</a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a href={`tel:${PHONE}`} className="hidden items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground shadow-elegant transition-transform hover:scale-105 sm:flex">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <button onClick={() => setMenuOpen((v) => !v)} className={`grid h-10 w-10 place-items-center rounded-xl lg:hidden ${scrolled ? "bg-muted text-foreground" : "bg-white/15 text-white"}`} aria-label="Menu">
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="mt-2 rounded-2xl glass p-4 shadow-elegant lg:hidden">
              <nav className="grid gap-1">
                {navLinks.map(([l, h]) => (
                  <a key={h} href={h} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted">{l}</a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <section className="relative min-h-screen overflow-hidden">
        <img src={hero} alt="Maldives overwater bungalows at sunset" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-32 pb-20">
          <div className="max-w-3xl animate-float-up">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
              <Star className="h-3.5 w-3.5 fill-secondary text-secondary" /> 2900+ Google Reviews · 4.9 ★
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Discover The World <br />
              <span className="bg-gradient-to-r from-white via-white to-secondary bg-clip-text text-transparent">With Confidence</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
              Trusted by thousands of travelers across Gujarat. Bespoke holiday packages, expert planning and 24/7 support — from Vadodara to anywhere on Earth.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#packages" className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-4 text-base font-semibold text-secondary-foreground shadow-elegant transition-transform hover:scale-105">
                Explore Packages <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#inquiry" className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-base font-semibold text-primary transition-transform hover:scale-105">
                Plan My Trip
              </a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10">
                <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:max-w-4xl lg:grid-cols-4">
            {[
              { n: "2900+", l: "Google Reviews" },
              { n: "15+", l: "Years Experience" },
              { n: "50+", l: "Destinations" },
              { n: "10K+", l: "Happy Travelers" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl glass-dark px-5 py-4 text-white">
                <div className="text-3xl font-extrabold">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { i: Star, t: "2900+ Reviews", s: "Google rated 4.9 ★" },
            { i: Users, t: "10K+ Travelers", s: "Across India & abroad" },
            { i: BadgeCheck, t: "Expert Planners", s: "Curated experiences" },
            { i: MapPin, t: "Best in Vadodara", s: "Trusted since 2010" },
            { i: FileCheck, t: "Secure Booking", s: "100% safe payments" },
          ].map((it) => (
            <div key={it.t} className="flex items-center gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl" style={{ background: "var(--gradient-brand)" }}>
                <it.i className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-bold text-foreground">{it.t}</div>
                <div className="truncate text-xs text-muted-foreground">{it.s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-7xl px-4 py-24">
        <SectionHead eyebrow="Popular Tour Packages" title="Handpicked Holiday Experiences" sub="Explore our most-loved escapes — every package fully customizable." />
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => setFilter(c)} className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all ${filter === c ? "border-transparent bg-primary text-primary-foreground shadow-elegant" : "border-border bg-card text-foreground hover:border-primary hover:text-primary"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.name} className="group overflow-hidden rounded-3xl bg-card shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-xs font-bold text-primary">
                  <Calendar className="mr-1 inline h-3 w-3" /> {p.days}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs opacity-90">Starting at</div>
                  <div className="text-2xl font-extrabold">{p.price}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">{t}</span>
                  ))}
                </div>
                <a href="#inquiry" className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-105">
                  Book Now <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-24" style={{ background: "var(--gradient-brand)" }}>
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-glow/40 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Why Choose Us</span>
            <h2 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">A travel partner that puts you first.</h2>
            <p className="mt-4 text-white/80">From the first inquiry to the moment you return home, we obsess over every detail of your journey.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w) => (
              <div key={w.title} className="rounded-2xl glass-dark p-6 text-white transition-transform hover:-translate-y-1">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-white/75">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="destinations" className="mx-auto max-w-7xl px-4 py-24">
        <SectionHead eyebrow="Featured Destinations" title="The world, one trip at a time." sub="Iconic getaways our travelers can't stop talking about." />
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
          {featuredDestinations.map((d) => (
            <a key={d.name} href="#inquiry" className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
              <img src={d.img} alt={d.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="text-lg font-bold text-white">{d.name}</div>
                <div className="mt-1 flex translate-y-2 items-center gap-1 text-xs text-secondary opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  Explore <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHead eyebrow="Customer Stories" title="Trusted by 2900+ Happy Customers" sub="Real reviews from real travelers across Gujarat." />
          <div className="relative mt-12">
            <div className="rounded-3xl bg-card p-8 shadow-elegant sm:p-12">
              <div className="flex gap-1">
                {Array.from({ length: testimonials[activeTest].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="mt-6 text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                "{testimonials[activeTest].text}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full text-lg font-bold text-white" style={{ background: "var(--gradient-brand)" }}>
                  {testimonials[activeTest].name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonials[activeTest].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[activeTest].trip}</div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTest(i)} className={`h-2 rounded-full transition-all ${i === activeTest ? "w-8 bg-primary" : "w-2 bg-border"}`} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-24">
        <SectionHead eyebrow="Our Services" title="Everything your trip needs, under one roof." sub="From visa to villa — handled end-to-end." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.t} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-base font-bold text-foreground">{s.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">Premium service, transparent pricing, end-to-end support.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead eyebrow="Travel Gallery" title="Moments worth traveling for." sub="Postcards from our recent adventures." />
          <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
            {gallery.map((g, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl">
                <img src={g} alt={`Travel moment ${i + 1}`} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <img src={maldives} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <div className="text-white">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Tour Inquiry</span>
            <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">Plan your perfect journey.</h2>
            <p className="mt-4 max-w-md text-white/85">Share a few details and our travel expert will craft a personalised itinerary within 24 hours — completely free.</p>
            <div className="mt-8 space-y-3 text-sm">
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 text-white/90 hover:text-white">
                <Phone className="h-4 w-4 text-secondary" /> +91 97129 57009
              </a>
              <div className="flex items-center gap-3 text-white/90">
                <Mail className="h-4 w-4 text-secondary" /> info@dwarkeshtours.com
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <MapPin className="h-4 w-4 text-secondary" /> Earth Eon, Sama-Savli Road, Vadodara
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="rounded-3xl bg-card p-6 shadow-elegant sm:p-8">
            <h3 className="text-xl font-bold text-foreground">Get Free Travel Consultation</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Input label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Input label="Mobile Number" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required pattern="[0-9+ ]{10,15}" />
              <Input label="Destination" value={form.dest} onChange={(v) => setForm({ ...form, dest: v })} placeholder="e.g. Bali" />
              <Input label="Travel Date" type="date" value={form.date} onChange={(v) => setForm({ ...form, date: v })} />
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Number of Travelers</label>
                <select value={form.pax} onChange={(e) => setForm({ ...form, pax: e.target.value })} className="mt-1 h-11 w-full rounded-xl border border-input bg-background px-3 text-sm">
                  {["1", "2", "3", "4", "5", "6+"].map((n) => <option key={n}>{n}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} rows={3} maxLength={500} placeholder="Tell us about your dream trip..." className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm" />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]">
              <Send className="h-4 w-4" /> Get Free Travel Consultation
            </button>
            {sent && <p className="mt-3 text-center text-sm font-medium text-primary">Opening WhatsApp — we'll respond within minutes!</p>}
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-24">
        <SectionHead eyebrow="FAQ" title="Frequently asked questions" sub="" />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                <span className="font-semibold text-foreground">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead eyebrow="Contact Us" title="Visit our Vadodara office" sub="" />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="space-y-5">
              <ContactRow icon={MapPin} title="Address" lines={["FF 39, Earth Eon, Sama-Savli Road,", "Opp. Urmi School, New Sama,", "Vadodara, Gujarat 390024"]} />
              <ContactRow icon={Phone} title="Phone" lines={["+91 97129 57009"]} href={`tel:${PHONE}`} />
              <ContactRow icon={Clock} title="Business Hours" lines={["Mon – Sat: 10:00 AM – 8:00 PM", "Sunday: 11:00 AM – 5:00 PM"]} />
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-105">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <iframe
                title="Dwarkesh Tours Vadodara location"
                src="https://www.google.com/maps?q=Earth+Eon,+Sama-Savli+Road,+New+Sama,+Vadodara,+Gujarat+390024&output=embed"
                className="h-full min-h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary">
                <Plane className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div className="text-base font-bold">Dwarkesh Tours</div>
            </div>
            <p className="mt-4 text-sm text-white/70">Vadodara's most trusted travel agency — crafting unforgettable journeys for over a decade.</p>
          </div>
          <FooterCol title="Quick Links" items={[["Home", "#home"], ["Packages", "#packages"], ["Destinations", "#destinations"], ["Gallery", "#gallery"], ["Contact", "#contact"]]} />
          <FooterCol title="Tour Categories" items={[["International", "#packages"], ["Domestic", "#packages"], ["Honeymoon", "#packages"], ["Group Tours", "#packages"], ["Corporate", "#services"]]} />
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-secondary">Contact</div>
            <div className="mt-4 space-y-2 text-sm text-white/75">
              <div className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-secondary" /> FF 39, Earth Eon, Sama-Savli Road, Vadodara 390024</div>
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4 text-secondary" /> +91 97129 57009</a>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white"><MessageCircle className="h-4 w-4 text-secondary" /> WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row">
            <div>© {new Date().getFullYear()} Dwarkesh Tours And Travels Private Limited. All rights reserved.</div>
            <div>Made with care in Vadodara, Gujarat</div>
          </div>
        </div>
      </footer>

      <a href={WA_LINK} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-110 animate-float-slow" aria-label="WhatsApp">
        <MessageCircle className="h-6 w-6" />
      </a>
      <a href={`tel:${PHONE}`} className="fixed bottom-5 left-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-110 sm:hidden" aria-label="Call">
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-bold uppercase tracking-widest text-secondary">{eyebrow}</span>
      <h2 className="mt-3 text-4xl font-extrabold text-foreground sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Input({ label, value, onChange, type = "text", required, placeholder, pattern }: {
  label: string; value: string; onChange: (v: string) => void; type?: string;
  required?: boolean; placeholder?: string; pattern?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}{required && " *"}</label>
      <input
        type={type} value={value} onChange={(e) => onChange(e.target.value)}
        required={required} placeholder={placeholder} pattern={pattern} maxLength={100}
        className="mt-1 h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, title, lines, href }: { icon: any; title: string; lines: string[]; href?: string }) {
  const Body = (
    <div className="flex gap-4">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{title}</div>
        {lines.map((l) => <div key={l} className="text-foreground">{l}</div>)}
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80">{Body}</a> : Body;
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div className="text-sm font-bold uppercase tracking-widest text-secondary">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {items.map(([l, h]) => (
          <li key={l}><a href={h} className="transition-colors hover:text-white">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}