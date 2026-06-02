/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { JetAsset, WatchAsset, Testimonial } from './types';

export const PRIVATE_JETS: JetAsset[] = [
  {
    id: 'g700',
    model: 'Gulfstream G700',
    range: '7,750 nm (14,353 km)',
    capacity: 'Up to 19 Passengers',
    hourlyRate: '$14,500 / hr',
    marketRate: 'Est. Procurement: $78,000,000',
    description: 'The pinnacle of business aviation. Features up to five living areas, custom circadian lighting, and whisper-quiet flight acoustics tailored for intercontinental strategic transits.',
    availability: 'Limited Operational Windows - Monaco / Geneva base'
  },
  {
    id: 'global-7500',
    model: 'Bombardier Global 7500',
    range: '7,700 nm (14,260 km)',
    capacity: 'Up to 19 Passengers',
    hourlyRate: '$13,800 / hr',
    marketRate: 'Est. Procurement: $75,000,000',
    description: 'Boasting the largest and most luxurious cabin in its class. Equipped with a dedicated master suite, full-size bed, stand-up shower, and cutting-edge fly-by-wire mechanics.',
    availability: 'Discreet Charter Available upon 24-hr Notification'
  },
  {
    id: 'falcon-10x',
    model: 'Dassault Falcon 10X',
    range: '7,500 nm (13,900 km)',
    capacity: 'Up to 16 Passengers',
    hourlyRate: '$15,200 / hr',
    marketRate: 'Est. Procurement: $80,000,000',
    description: 'The luxury of custom European engineering. Features a penthouse-style cabin space and standard military-grade flight deck avionics for maximum safety and trans-oceanic reliability.',
    availability: 'Aviation Portfolio Advisory Only'
  }
];

export const HOROLOGY_ASSETS: WatchAsset[] = [
  {
    id: 'patek-5711',
    brand: 'Patek Philippe',
    model: 'Nautilus "Tiffany & Co." Dial',
    reference: '5711/1A-018',
    year: '2021',
    condition: 'Unworn (With Original Double Box & Papers)',
    estimatedValue: '$1,850,000 - $2,200,000',
    scarcityIndex: 'Extremely Scarce (1 of 170 examples worldwide)',
    description: 'The ultimate symbol of modern horology status. Commissioned to commemorate Patek Philippe’s 170-year partnership with Tiffany & Co., featuring the distinctive robin\'s-egg blue lacquered dial.'
  },
  {
    id: 'ap-openworked',
    brand: 'Audemars Piguet',
    model: 'Royal Oak Double Balance Wheel Openworked',
    reference: '15407OR.OO.1220OR.01',
    year: '2023',
    condition: 'Pristine (Private Vault Archive)',
    estimatedValue: '$650,000 - $780,000',
    scarcityIndex: 'Highly Limited Annual Production Allocation',
    description: 'A masterclass in micromechanics. Features a 18-carat pink gold case surrounding an intricately openworked charcoal-toned dial, exposing the dual golden balance wheel system.'
  },
  {
    id: 'daytona-rainbow',
    brand: 'Rolex',
    model: 'Daytona "Rainbow" Everose Gold',
    reference: '116595RBOW',
    year: '2022',
    condition: 'Mint (Single Owner, Geneva Estate)',
    estimatedValue: '$520,000 - $610,000',
    scarcityIndex: 'VVIP Allocation Tier (Under 100/yr)',
    description: 'Adorned with 36 baguette-cut sapphires in a custom rainbow gradation. Hand-selected brilliant-cut diamonds embellish the lugs and guards, combined with crystalline black gold sub-dials.'
  }
];

export const CLIENT_TESTIMONIALS: Testimonial[] = [
  {
    location: 'Monaco (Larvotto)',
    quote: '"Riviera Flow arranged the charter and secure transfer of our family office advisory council from Nice to Geneva in under four hours, matching the experience with absolute confidentiality."',
    clientType: 'Private Multi-Family Office CIO'
  },
  {
    location: 'Geneva (Cologny)',
    quote: '"Their network bypassed three-year boutique waiting lists to locate and authenticate our piece in Tokyo. The escorts hand-delivered the asset to our private banking vault safely."',
    clientType: 'Investment Class Watch Collector'
  },
  {
    location: 'London (Belgravia)',
    quote: '"Operational architecture at its finest. Discretion is not a buzzword for Riviera Flow—it is their fundamental blueprint. Every asset we trace with them is handled with extreme care."',
    clientType: 'UHNW Tech Founder & Aviation Charter Client'
  }
];

export const EXCLUSIVITY_STRATEGY = {
  title: 'Psychological Triggers of Exclusivity',
  subtitle: 'Creating a Closed-Door Circle for the 0.001%',
  principles: [
    {
      title: 'The Hard Barrier ("Request Private Access")',
      detail: 'UHNWIs do not respond to vulgar "Sign Up Now" call-to-actions. Riviera Flow uses a professional, high-friction credentials form. Requesting their private corporate email or family office code establishes that this is a private club, raising the percieved value of the network.'
    },
    {
      title: 'Invisibility over Visibility (Unlisted Assets)',
      detail: 'Never list exact prices or instant booking calendars for jets or rare watches. Always state "Price on Application" or "Bespoke Quote Requested". For the ultra-rich, if an asset is instantly purchasable at the tap of a button, it loses its premium charm. Value lies in the chase.'
    },
    {
      title: 'Geographic Elite Alignment (Monaco, London, Geneva)',
      detail: 'By anchoring the branding to specific high-density wealth hubs, you build immediate local trust. High-net-worth circles are tight; seeing tailored focus on the Geneva-Monaco axis signals deep understanding of their actual weekly routes.'
    },
    {
      title: 'Zero Obvious Advertising & Safe Escrow Logistics',
      detail: 'Affiliate links should be integrated as "Direct Escrow Liaison" or "Bespoke Partner Handshake". Ensure your communication emphasizes white-glove handovers with direct escrow protection. You act as the private introductory concierge.'
    }
  ],
  affiliatePlaybook: {
    description: 'How to monetize Riviera Flow effectively without tarnishing the premium branding:',
    steps: [
      'Jet Charter Commissions: Partner with digital brokers (e.g., Air Charter Service, Wheels Up, or NetJets Private Office) that pay 2-5% on introduced multi-sector charters ($50k–$200k flight costs = $1,500–$10,000 per lead).',
      'Watch Consignment Introductions: Connect leads with boutique brokers on Chrono24 pre-vetted or elite auction offices in Geneva. Introductions for $1M+ timepieces routinely command 1.5% finder fees.',
      'Bespoke Family Office Onboarding: Monetize through monthly retainer structures by partnering with independent asset managers who manage flight logistics, security escorts, and horological portfolios.'
    ]
  }
};

export const LUXURY_CSS_STYLE_GUIDE = `
/* RIVIERA FLOW - OFFICIAL LUXURY CSS STYLE GUIDE */

/* 1. Brand Color Palette */
--color-obsidian: #0D0E11;        /* Primary deep canvas dark, not flat black */
--color-slate-gray: #1E2129;      /* Segment containers and subtle inputs */
--color-gold-champagne: #C5A880;  /* Accent color, soft refined gold, never neon yellow */
--color-gold-hover: #D7BC97;      /* Interactive hover feedback gold */
--color-alabaster: #F5EFEB;       /* Master high-contrast serif font color */
--color-platinum-muted: #8E929E;  /* Subtitle text / specifications font */

/* 2. Typography Pairings */
- Primary Display & Headings: "Cinzel" or "Playfair Display" (elegant, classic serif)
- Primary Interface & UI: "Inter" (ultra-clean, highly legible sans-serif for numbers)
- Data Details & System Ledger: "JetBrains Mono" or "Courier New" (adds high-end bespoke watchmaker tracking look)

/* 3. Aesthetic Boundaries */
- Minimal border widths (1px) with extremely low-opacity gold styling (border-opacity: 0.1)
- Padding should default to double of standard interfaces: use ample negative space (p-6, p-12, py-24) to create breathing room.
- Smooth transitions: 400ms duration with cubic-bezier curves for a "heavy, mechanical" luxury tactile sensation.
`;

export const STREAMLIT_APP_CODE = `
# -*- coding: utf-8 -*-
"""
RIVIERA FLOW - PRIVATE HUB
Perfectly Formatted Streamlit Web App Implementation for 100% Free Hosting.
Targeting: Monaco, London, Geneva Private Concierge Procurement.
"""

import streamlit as st
import datetime

# 1. Page Configuration
st.set_page_config(
    page_title="Riviera Flow | Bespoke Private Concierge",
    page_icon="⚜️",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# 2. Inject Luxury "Old Money" CSS Styling
luxury_css = """
<style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap');
    
    /* Root level overrides */
    .stApp {
        background-color: #0D0E11 !important;
        color: #F5EFEB !important;
    }
    
    /* Refined Typography */
    h1 {
        font-family: 'Cinzel', serif !important;
        color: #C5A880 !important;
        font-size: 2.8rem !important;
        letter-spacing: 0.15em !important;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 0.5rem !important;
    }
    
    h2 {
        font-family: 'Playfair Display', serif !important;
        color: #C5A880 !important;
        font-size: 1.8rem !important;
        font-weight: 400 !important;
        border-bottom: 2px solid rgba(197, 168, 128, 0.15) !important;
        padding-bottom: 10px !important;
        letter-spacing: 0.05em !important;
        margin-top: 2rem !important;
    }
    
    h3 {
        font-family: 'Cinzel', serif !important;
        color: #F5EFEB !important;
        font-size: 1.2rem !important;
        letter-spacing: 0.08em !important;
    }

    p, span, label, div.stText, .stMarkdown {
        font-family: 'Inter', sans-serif !important;
        color: #8E929E !important;
        font-size: 0.95rem;
    }

    /* Elegant Custom Containers */
    .luxury-card {
        background-color: #121419 !important;
        border: 1px solid rgba(197, 168, 128, 0.12) !important;
        border-radius: 4px !important;
        padding: 2.5rem !important;
        margin-bottom: 2rem !important;
        box-shadow: 0 10px 30px rgba(0,0,0,0.4) !important;
    }

    .luxury-specs {
        font-family: 'JetBrains Mono', monospace !important;
        color: #C5A880 !important;
        font-size: 0.85rem !important;
    }

    .subtitle-accent {
        font-family: 'Playfair Display', serif !important;
        font-style: italic !important;
        color: #C5A880 !important;
        text-align: center;
        font-size: 1.25rem !important;
        margin-bottom: 3rem !important;
        letter-spacing: 0.05em !important;
    }
    
    /* Input Styling customization (Subtle & high-end) */
    div[data-baseweb="input"] {
        background-color: #1A1D24 !important;
        border: 1px solid rgba(197, 168, 128, 0.2) !important;
        color: #F5EFEB !important;
    }
    
    div[data-baseweb="select"] {
        background-color: #1A1D24 !important;
        border: 1px solid rgba(197, 168, 128, 0.2) !important;
    }

    /* Exclusive Private Access CTA Button */
    .stButton>button {
        background-color: #C5A880 !important;
        color: #0D0E11 !important;
        font-family: 'Cinzel', serif !important;
        font-weight: 700 !important;
        font-size: 1rem !important;
        letter-spacing: 0.15em !important;
        border: 1px solid #C5A880 !important;
        border-radius: 2px !important;
        padding: 0.6rem 2rem !important;
        transition: all 400ms ease;
        width: 100% !important;
    }
    
    .stButton>button:hover {
        background-color: #D7BC97 !important;
        border-color: #D7BC97 !important;
        color: #0D0E11 !important;
        transform: translateY(-2px);
    }
</style>
"""
st.markdown(luxury_css, unsafe_allow_html=True)

# 3. Header Section (Discreet Locations branding)
col_h1, col_h2, col_h3 = st.columns([1,2,1])
with col_h2:
    st.markdown("<h1>RIVIERA FLOW</h1>", unsafe_allow_html=True)
    st.markdown("<p style='text-align: center; font-size: 0.8rem; letter-spacing: 0.25em; text-transform: uppercase; color: #8E929E;'>MONACO • LONDON • GENEVA</p>", unsafe_allow_html=True)
    st.markdown("<div class='subtitle-accent'>Bespoke Private Concierge & Operational Asset Architecture</div>", unsafe_allow_html=True)

# 4. Hero & Brand Mission Section
st.markdown("<div class='luxury-card'>", unsafe_allow_html=True)
st.markdown("<h3>Discreet Operational Systems for Sovereign Individuals</h3>", unsafe_allow_html=True)
st.markdown(
    "In an era redefined by information velocity, true luxury is represented by silence, extreme privacy, and flawless operations. "
    "Riviera Flow operates as an invisible hand, coordinating the private procurement of long-range intercontinental aviation assets "
    "and investment-grade horological masterpieces with direct escrow custody, protecting your legacy and absolute confidentiality."
)
st.markdown("<p class='luxury-specs'>STATUS: STRICTLY CONFIDENTIAL // ACCESS: PRIVATE MEMBERS ONLY</p>", unsafe_allow_html=True)
st.markdown("</div>", unsafe_allow_html=True)

# 5. Core Services Dual Panels
col_left, col_right = st.columns(2)

with col_left:
    st.markdown("<div class='luxury-card' style='height: 520px;'>", unsafe_allow_html=True)
    st.markdown("<h2>I. PRIVATE AVIATION</h2>", unsafe_allow_html=True)
    st.markdown("<h3>Bespoke Intercontinental Jet Procurement</h3>", unsafe_allow_html=True)
    st.markdown(
        "Bespoke route architecture matching global high-density hubs (Nice Cote d\\'Azur, Geneva Cointrin, London Farnborough). "
        "We coordinate the private acquisition or discreet charter of ultra-long-range models, bypass commercial friction, and secure "
        "your private boarding arrangements without public telemetry."
    )
    st.markdown("<p class='luxury-specs'>• GULFSTREAM G700 / GLOBALS<br>• DISCREET CREW & OFF-RADAR LOGISTICS<br>• HIGH-TICKET ESCROW LIAISON</p>", unsafe_allow_html=True)
    st.markdown("</div>", unsafe_allow_html=True)

with col_right:
    st.markdown("<div class='luxury-card' style='height: 520px;'>", unsafe_allow_html=True)
    st.markdown("<h2>II. HOROLOGICAL ASSETS</h2>", unsafe_allow_html=True)
    st.markdown("<h3>Investment-Grade Masterpiece Sourcing</h3>", unsafe_allow_html=True)
    st.markdown(
        "Secure acquisition of $500k to $2.5M+ horological assets (Patek Philippe, Audemars Piguet, Rolex Tier-1). "
        "Every piece is authenticated through certified Swiss master horologists, acquired through legal private estate trusts, "
        "and delivered via private security escorts to your designated banking locker."
    )
    st.markdown("<p class='luxury-specs'>• PATEK TIFFANY & ROLEX EXCLUSIVES<br>• Swiss Master Authentication Certificates<br>• Fully Protected Vault Transfers</p>", unsafe_allow_html=True)
    st.markdown("</div>", unsafe_allow_html=True)

# 6. Trust & Discreet Logistics Panel
st.subheader("Discretion & Security Protocols")
col1, col2, col3 = st.columns(3)
with col1:
    st.markdown("<h3>NDA-By-Default</h3>", unsafe_allow_html=True)
    st.write("All consultation records and member identities are governed by strict Swiss Non-Disclosure Agreements, managed through trusted law offices in Geneva.")
with col2:
    st.markdown("<h3>Insured Logistics</h3>", unsafe_allow_html=True)
    st.write("Every asset in transport is backed by multi-million Swiss Franc Lloyd’s of London insurance coverage, tracked via military-grade transit telemetry.")
with col3:
    st.markdown("<h3>Escrow Payment Architecture</h3>", unsafe_allow_html=True)
    st.write("Full support for multi-sig hardware wallets, private banking escrow, and absolute proof-of-funds structures avoiding third-party surveillance.")

st.markdown("<div style='margin-bottom: 4rem;'></div>", unsafe_allow_html=True)

# 7. INVITATION ONLY INTAKE FLOW (The Conversion Funnel)
st.markdown("<div class='luxury-card'>", unsafe_allow_html=True)
st.markdown("<h2 style='text-align: center; border-bottom: none;'>REQUEST DISCREET ACCESS</h2>", unsafe_allow_html=True)
st.markdown("<p style='text-align: center; max-width: 700px; margin: 0 auto 2rem auto;'>Our platform accepts limited nominations per calendar quarter to maintain white-glove response times. Secure entry requires credential verification. Expect communication within 120 minutes of formal submission.</p>", unsafe_allow_html=True)

# Interactive Form
with st.form("private_access_form"):
    c_name, c_email = st.columns(2)
    with c_name:
        fullname = st.text_input("FULL NAME / REPRESENTATIVE", placeholder="e.g., Honorable John Doe")
    with c_email:
        email = st.text_input("SECURE CORPORATE OR PRIVATE EMAIL", placeholder="e.g., counsel@doe-familyoffice.com")
        
    c_focus, c_volume = st.columns(2)
    with c_focus:
        focus_area = st.selectbox("PRIMARY FOCUS AREA", ["Private Jet Procurement", "Horological Asset Sourcing", "Dual Portfolio Integration"])
    with c_volume:
        est_worth = st.selectbox("ANTICIPATED ANNUAL VOLUME", ["$500,000 - $2,000,000", "$2,000,000 - $10,000,000", "$10,000,000+"])
        
    special_requirements = st.text_area("DISCREET SPECIFICATIONS", placeholder="Please communicate specific tail numbers, reference catalogs, or secure delivery coordinates.")
    
    st.markdown("<div style='margin-bottom: 1rem;'></div>", unsafe_allow_html=True)
    agree_nda = st.checkbox("I request that all submitted data be held in immediate Swiss escrow and processed under standard mutual NDA protocol.")
    
    submit_btn = st.form_submit_button("SUBMIT INTENT OF ACCESS")
    
    if submit_btn:
        if not fullname or not email:
            st.error("Credential field empty. Please supply a valid identity and secure communication channel.")
        elif not agree_nda:
            st.warning("Please acknowledge the Mutual NDA Agreement prior to transmission.")
        else:
            ticket_id = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
            st.success(f"ACCESS INQUIRY TRANSMITTED SUCCESSFULLY. Ticket Reference Code: RF-GEN-{ticket_id}. Our Private Liaison officer has been notified.")
            st.balloons()
st.markdown("</div>", unsafe_allow_html=True)

# Footer
st.markdown("<p style='text-align: center; font-size: 0.75rem; color: #50545E; margin-top: 5rem;'>© 2026 RIVIERA FLOW MONACO S.A. ALL PRIVACY INTENTS SECURED UNDER GENOVA STATUTES. NO PRICE ADVERTISING PERMITTED BY REGIONAL STATUTE.</p>", unsafe_allow_html=True)
`;
