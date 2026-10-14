import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowLeft, ArrowRight, Check, ChevronRight, Menu, MoveUpRight, Phone, ShoppingBag, Sparkles, X } from 'lucide-react'
import PartsReel from '@/components/parts-reel'

type Slide = { eyebrow: string; title: [string, string]; description: string; action: string; detail: string; imageClass: string; bookingType?: string }

const slides: Slide[] = [
  { eyebrow: 'Trade. Tuned.', title: ['BBS', 'WHOLESALE.'], description: 'A faster lane for workshops, resellers and riders building something serious. Trade pricing, stock visibility and human support.', action: 'Open trade account', detail: 'Wholesale that keeps up.', imageClass: 'wholesale', bookingType: 'Wholesale account' },
  { eyebrow: 'The parts edit', title: ['BUILT FOR', 'THE NEXT TURN.'], description: 'Genuine essentials and smart upgrades for machines that earn their miles. Chosen with purpose, delivered with pace.', action: 'Explore parts', detail: 'The parts that matter.', imageClass: 'parts' },
  { eyebrow: 'BBS workshop', title: ['MAKE EVERY', 'RIDE COUNT.'], description: 'Diagnostics, maintenance and a proper mechanical conversation. Your bike gets the attention it has been asking for.', action: 'Reserve a workshop slot', detail: 'Good machines deserve better care.', imageClass: 'workshop', bookingType: 'Workshop appointment' },
]

const productNames = ['RIDER ESSENTIALS', 'POWER AND CONTROL', 'WORKSHOP CARE']

function App() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [bookingType, setBookingType] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [formState, setFormState] = useState<'idle' | 'sent'>('idle')
  const activeSlide = slides[slideIndex]

  useEffect(() => {
    const timer = window.setInterval(() => setSlideIndex((current) => (current + 1) % slides.length), 7000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') setSlideIndex((current) => (current + 1) % slides.length)
      if (event.key === 'ArrowLeft') setSlideIndex((current) => (current + slides.length - 1) % slides.length)
      if (event.key === 'Escape') { setBookingType(null); setMenuOpen(false) }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  function moveSlide(direction: number) { setSlideIndex((current) => (current + direction + slides.length) % slides.length) }
  function openBooking(type: string) { setFormState('idle'); setBookingType(type) }
  function submitBooking(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); setFormState('sent') }

  return <div className="app-shell">
    <div className="noise" aria-hidden="true" />
    <div className="topline"><span>Dhaka / Bangladesh</span><span>Ride with intent <i /></span><a href="tel:+8801700000000"><Phone size={12} /> +880 1700 000 000</a></div>
    <header className="header">
      <a className="logo" href="#top" aria-label="BBS Motors home"><LogoMark /><span>BBS<em>MOTORS</em></span></a>
      <nav className="nav" aria-label="Primary navigation"><a href="#wholesale">Wholesale</a><a href="#parts">Parts</a><a href="#workshop">Workshop</a><a href="#contact">Contact</a></nav>
      <div className="header-tools"><button className="round-button bag" aria-label="Shopping bag"><ShoppingBag size={17} /><b>0</b></button><button className="round-button menu-trigger" onClick={() => setMenuOpen(true)} aria-label="Open navigation"><Menu size={20} /></button></div>
    </header>
    <main id="top">
      <section className="hero" id="wholesale" aria-label="BBS Motors highlights">
        <div className={`hero-image ${activeSlide.imageClass}`} key={slideIndex} /><div className="hero-shade" /><div className="speed-lines" aria-hidden="true"><i /><i /><i /></div>
        <div className="hero-copy"><p className="kicker"><Sparkles size={13} /> {activeSlide.eyebrow}</p><h1><span>{activeSlide.title[0]}</span><strong>{activeSlide.title[1]}</strong></h1><p className="hero-description">{activeSlide.description}</p>{activeSlide.bookingType ? <button className="cta" onClick={() => openBooking(activeSlide.bookingType!)}>{activeSlide.action} <ArrowDownRight size={18} /></button> : <a className="cta" href="#parts">{activeSlide.action} <ArrowDownRight size={18} /></a>}</div>
        <div className="hero-footer"><div className="slide-nav"><button onClick={() => moveSlide(-1)} aria-label="Previous slide"><ArrowLeft size={18} /></button><span><b>{String(slideIndex + 1).padStart(2, '0')}</b><i /><small>03</small></span><button onClick={() => moveSlide(1)} aria-label="Next slide"><ArrowRight size={18} /></button></div><p>{activeSlide.detail}</p></div>
        <div className="slide-rail" role="tablist" aria-label="BBS services">{slides.map((slide, index) => <button key={slide.eyebrow} className={index === slideIndex ? 'active' : ''} onClick={() => setSlideIndex(index)} role="tab" aria-selected={index === slideIndex}><span>0{index + 1}</span>{['WHOLESALE', 'PARTS', 'WORKSHOP'][index]}</button>)}</div>
      </section>
      <section className="signal-strip" aria-label="BBS standards"><div className="signal-label"><span>ON THE<br />MOVE</span><i /></div><div className="signal-track"><span>FAST DISPATCH</span><b>+</b><span>FITTED BY EXPERTS</span><b>+</b><span>GENUINE GEAR</span><b>+</b><span>BUILT FOR THE ROAD</span><b>+</b></div></section>
      <PartsReel />
      <section className="features" id="parts"><div className="section-intro"><p className="kicker"><Sparkles size={13} /> THE BBS EDIT</p><h2>THE RIGHT PART<br /><strong>CHANGES THE RIDE.</strong></h2></div><p className="section-copy">Less searching. More riding. The BBS edit takes the guesswork out of keeping your motorcycle right.</p><div className="product-grid">{productNames.map((name, index) => <article className={`product-card product-${index + 1}`} key={name}><div className="product-photo"><span>0{index + 1}</span><a href="#contact" aria-label={`Explore ${name}`}><MoveUpRight size={18} /></a></div><p>{name}</p><h3>{index === 0 ? 'Protection you trust.' : index === 1 ? 'Feel every response.' : 'Keep it dialled in.'}</h3><a href="#contact">Explore collection <ChevronRight size={15} /></a></article>)}</div></section>
      <section className="workshop-panel" id="workshop"><div className="workshop-copy"><p className="kicker"><Sparkles size={13} /> BBS WORKSHOP</p><h2>NO GUESSWORK.<br /><strong>JUST GOOD WORK.</strong></h2><p>Book in with technicians who know that a properly sorted bike feels different before you even turn the key.</p><button className="cta light" onClick={() => openBooking('Workshop appointment')}>Book a service <ArrowDownRight size={18} /></button></div><div className="diagnostic-card"><div><span className="live-dot" /> LIVE BAY STATUS</div><strong>02<span>/04</span></strong><p>Workshop bays available this week.</p><button onClick={() => openBooking('Workshop appointment')}>CHECK AVAILABILITY <ArrowRight size={15} /></button></div></section>
      <section className="contact-section" id="contact"><p className="kicker"><Sparkles size={13} /> FIND YOUR LINE</p><h2>THE ROAD IS<br /><strong>CALLING.</strong></h2><button className="cta" onClick={() => openBooking('General enquiry')}>Talk to BBS <ArrowDownRight size={18} /></button><span className="contact-coordinate">23.8103 N / 90.4125 E</span></section>
    </main>
    <footer><a className="logo" href="#top"><LogoMark /><span>BBS<em>MOTORS</em></span></a><p>Parts. Workshop. Wholesale.</p><span>Copyright 2026 BBS Motors</span></footer>
    {menuOpen && <div className="menu-overlay"><button className="round-button close-menu" onClick={() => setMenuOpen(false)} aria-label="Close navigation"><X size={22} /></button><p className="kicker"><Sparkles size={13} /> NAVIGATION</p><nav><a href="#wholesale" onClick={() => setMenuOpen(false)}>Wholesale</a><a href="#parts" onClick={() => setMenuOpen(false)}>Parts</a><a href="#workshop" onClick={() => setMenuOpen(false)}>Workshop</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav><p>Let BBS get your next move sorted.</p></div>}
    {bookingType && <div className="modal-backdrop" onMouseDown={() => setBookingType(null)}><section className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title" onMouseDown={(event) => event.stopPropagation()}><button className="round-button close-modal" onClick={() => setBookingType(null)} aria-label="Close booking"><X size={20} /></button>{formState === 'sent' ? <div className="success-state"><span><Check size={31} /></span><p className="kicker">REQUEST RECEIVED</p><h2>YOU'RE ON<br /><strong>THE LIST.</strong></h2><p>Thanks. The BBS team will be in touch to confirm the next step.</p><button className="cta" onClick={() => setBookingType(null)}>Back to BBS <ArrowRight size={17} /></button></div> : <><p className="kicker"><Sparkles size={13} /> {bookingType}</p><h2 id="booking-title">LET'S GET<br /><strong>YOU SORTED.</strong></h2><p className="modal-copy">A few details and the BBS team can get you into the right lane.</p><form onSubmit={submitBooking}><label>Name<input name="name" required placeholder="Your name" /></label><label>Phone<input name="phone" required type="tel" placeholder="01XXXXXXXXX" /></label><label className="wide">What do you need?<select name="request" defaultValue={bookingType}><option>Wholesale account</option><option>Workshop appointment</option><option>Parts enquiry</option><option>General enquiry</option></select></label><label className="wide">Tell us more<textarea name="notes" rows={3} placeholder="Bike model, parts or preferred time" /></label><button className="cta" type="submit">Send request <ArrowDownRight size={18} /></button></form></>}</section></div>}
  </div>
}

function LogoMark() { return <span className="logo-mark" aria-hidden="true"><i /><i /><i /></span> }
export default App
