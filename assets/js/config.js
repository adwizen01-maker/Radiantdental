/**
 * RADIANT DENTAL CARE - CENTRAL CONFIGURATION
 * 
 * Central configuration for Dr. Kalpit Kumar's clinic in Udaipur, Rajasthan.
 * Updates across the entire website automatically.
 */

const CLINIC_CONFIG = {
  // Brand & Identity
  clinicName: "Radiant Dental Care",
  tagline: "Expert Dental Care. Personal Attention. A Radiant Smile.",
  shortDescription: "Premier multispecialty dental clinic in Udaipur led by Dr. Kalpit Kumar, offering painless treatments, modern equipment, and compassionate care.",
  establishedYear: 2014,

  // Doctor Details
  doctor: {
    name: "Dr. Kalpit Kumar",
    title: "BDS, MDS - Dental Surgeon & Oral Healthcare Specialist",
    specialization: "Senior Dental Surgeon & Implantologist",
    experience: "12+",
    patientsTreated: "10,000+",
    rating: "4.9",
    reviewCount: "480+",
    bio: "Dr. Kalpit Kumar is a trusted and experienced dental surgeon serving Udaipur with compassionate, pain-free dental treatments. With advanced training in modern restorative dentistry, root canals, and cosmetic smile enhancement, he is committed to providing personalized patient care in a comfortable, sterile clinical environment.",
    credentials: [
      "BDS, MDS - Dental Surgery & Advanced Oral Healthcare",
      "Specialist in Painless Rotary Endodontics & Tooth Restoration",
      "Certified in Aesthetic Smile Designing & Modern Prosthetics",
      "Member of Indian Dental Association (IDA), Rajasthan Branch"
    ],
    image: "assets/images/doctor.jpg"
  },

  // Contact Information
  contact: {
    phone: "+917568754898",
    phoneDisplay: "+91 75687 54898",
    localPhoneDisplay: "075687 54898",
    emergencyPhone: "+91 75687 54898",
    whatsapp: "+917568754898",
    whatsappDisplay: "+91 75687 54898",
    whatsappDefaultMessage: "Hello Dr. Kalpit Kumar, I would like to book an appointment at Radiant Dental Care, Udaipur. Please share the available appointment slots.",
    email: "contact@radiantdentalcare.com",
    address: {
      line1: "Om Plaza, Opposite to Natraj Junior School",
      line2: "Sector No. 13, Sector 14, Hiran Magri, Gordhan Vilas Rural",
      city: "Udaipur",
      state: "Rajasthan",
      postalCode: "313001",
      country: "India",
      fullDisplay: "Om Plaza, Opposite to Natraj Junior School, Sector No. 13, Sector 14, Hiran Magri, Gordhan Vilas Rural, Udaipur, Rajasthan 313001"
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.784732152865!2d73.70823487532345!3d24.562089178125585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967efc6bdf2e4db%3A0x2a82aa7496e622b7!2sSector%2014%2C%20Hiran%20Magri%2C%20Udaipur%2C%20Rajasthan%20313001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Radiant+Dental+Care+Dr+Kalpit+Kumar+Om+Plaza+Sector+14+Hiran+Magri+Udaipur+Rajasthan+313001",
    googleReviewsUrl: "https://www.google.com/search?q=Radiant+Dental+Care%2C+Udaipur.+Dr+Kalpit+Kumar#lrd=0x3967efc6bdf2e4db:0x2a82aa7496e622b7,1,,,,",
    hours: [
      { days: "Monday - Saturday", time: "09:30 AM – 08:30 PM" },
      { days: "Sunday", time: "10:00 AM – 02:00 PM (Prior Appointment)" }
    ]
  },

  // Trust Statistics
  stats: [
    { value: 12, suffix: "+", label: "Years of Excellence", description: "Trusted practice in Udaipur" },
    { value: 10000, suffix: "+", label: "Happy Patients", description: "Smiles restored" },
    { value: 99, suffix: "%", label: "Treatment Success", description: "Painless procedures" },
    { value: 4.9, suffix: "★", label: "Google Rating", description: "Trusted by local families" }
  ],

  // Primary Treatments Catalog
  treatments: [
    {
      id: "implants",
      title: "Dental Implants",
      category: "Restorative Dentistry",
      shortDesc: "Permanent, titanium-supported tooth replacements that look, feel, and function just like your natural teeth.",
      fullDesc: "Our advanced dental implant procedures offer a lifetime solution for missing teeth. Using precision diagnostic imaging and minimally invasive surgical systems, Dr. Kalpit Kumar ensures maximum bite stability, natural chewing comfort, and rapid healing with virtually zero downtime.",
      icon: "fa-tooth",
      image: "assets/images/equipment.jpg",
      benefits: [
        "Lifelong durability with exceptional clinical success",
        "Preserves jawbone density and facial aesthetics",
        "Zero damage to adjacent natural teeth",
        "Painless surgical placement under gentle local anesthesia"
      ],
      idealFor: [
        "Patients with single or multiple missing teeth",
        "Individuals dissatisfied with loose dentures",
        "Those seeking permanent bite strength restoration"
      ],
      duration: "1 - 2 visits for surgical placement",
      recovery: "Return to normal activity within 24 hours"
    },
    {
      id: "root-canal",
      title: "Root Canal Treatment",
      category: "Endodontics",
      shortDesc: "Single-visit, painless rotary endodontic therapy designed to eliminate infection and save your natural tooth.",
      fullDesc: "Forget outdated root canal fears. With modern rotary instrumentation, apex locators, and warm obturation, Dr. Kalpit Kumar's root canal treatment is completely painless and permanently saves severely decayed or infected teeth.",
      icon: "fa-shield-halved",
      image: "assets/images/treatment_room.jpg",
      benefits: [
        "100% painless procedure with high-precision local numbing",
        "Completed in a single 45-minute sitting in most cases",
        "Accurate electronic apex locator depth determination",
        "Protected with durable zirconia/ceramic dental crown"
      ],
      idealFor: [
        "Severe, throbbing toothache or thermal sensitivity",
        "Deep tooth decay reaching the dental nerve",
        "Trauma or cracked teeth causing persistent infection"
      ],
      duration: "45 - 60 minutes per sitting",
      recovery: "Immediate pain relief; normal diet in 24 hours"
    },
    {
      id: "clear-aligners",
      title: "Clear Aligners & Orthodontics",
      category: "Orthodontics",
      shortDesc: "Discreet, virtually invisible custom aligners that straighten crooked teeth without uncomfortable metal wires.",
      fullDesc: "Achieve the aligned, confident smile you have always desired with modern clear aligner therapy. Dr. Kalpit Kumar maps your complete dental movement digitally, giving you a smooth, wire-free straightening journey.",
      icon: "fa-wand-magic-sparkles",
      image: "assets/images/aligners.jpg",
      benefits: [
        "Nearly invisible aesthetic design – nobody notices you are wearing them",
        "Easily removable for eating, brushing, and special occasions",
        "Zero painful wire pricks or dietary restrictions",
        "Predictable digital preview of your final smile"
      ],
      idealFor: [
        "Crowded, crooked, or overlapping teeth",
        "Gaps or spaces between front teeth",
        "Adults and teens desiring wire-free teeth alignment"
      ],
      duration: "6 - 14 months depending on complexity",
      recovery: "No downtime; comfortable progression"
    },
    {
      id: "teeth-whitening",
      title: "Teeth Whitening & Cleaning",
      category: "Cosmetic Dentistry",
      shortDesc: "Advanced in-office laser whitening that brightens smiles up to 8 shades lighter in just 45 minutes.",
      fullDesc: "Eliminate stubborn tea, coffee, and tobacco stains safely and effectively. Our professional cold-light whitening treatment protects enamel while lifting deep discoloration, complemented by ultrasonic scaling for optimal gum health.",
      icon: "fa-sparkles",
      image: "assets/images/smile.jpg",
      benefits: [
        "Up to 8 shades whiter in a single comfortable session",
        "Enamel-safe desensitizing formulation prevents post-treatment sensitivity",
        "Comprehensive ultrasonic deep cleaning included",
        "Long-lasting brightness with personalized home maintenance advice"
      ],
      idealFor: [
        "Yellowing or stained teeth from tea, coffee, or tobacco",
        "Wedding, interview, or festival preparation",
        "Routine dental hygiene and tartar removal"
      ],
      duration: "45 minutes",
      recovery: "Immediate radiant results; avoid dark foods for 48h"
    },
    {
      id: "smile-design",
      title: "Smile Design & Veneers",
      category: "Aesthetic Dentistry",
      shortDesc: "Custom handcrafted porcelain veneers and cosmetic contouring for symmetrical, radiant smile aesthetics.",
      fullDesc: "Smile Design combines dental artistry with precision facial harmony. Dr. Kalpit Kumar crafts ultra-thin, durable ceramic veneers and aesthetic crowns that seamlessly match your facial symmetry and natural smile arc.",
      icon: "fa-face-smile",
      image: "assets/images/before_after.jpg",
      benefits: [
        "Customized to your facial features and lip symmetry",
        "Stain-resistant, high-translucency porcelain ceramics",
        "Minimally invasive tooth preparation preserving natural structure",
        "Durable, picture-perfect aesthetics lasting 15+ years"
      ],
      idealFor: [
        "Chipped, worn-down, or uneven teeth",
        "Deep fluorosis or tetracycline stains resistant to bleach",
        "Closing unsightly gaps and creating balanced proportion"
      ],
      duration: "2 - 3 visits over 10 days",
      recovery: "Minimal sensitivity; immediate confidence boost"
    },
    {
      id: "pediatric-dentistry",
      title: "Pediatric & Preventive Care",
      category: "Pediatric Care",
      shortDesc: "Gentle, fear-free dental treatments tailored specially for infants, children, and young adolescents.",
      fullDesc: "We believe a child's early dental experiences shape their lifelong oral health attitude. Dr. Kalpit Kumar and our team provide a warm, fear-free environment with painless decay prevention, fluoride varnishes, sealants, and gentle habit correction.",
      icon: "fa-child",
      image: "assets/images/reception.jpg",
      benefits: [
        "Friendly, calm, and 100% fear-free pediatric protocol",
        "Cavity prevention with deep fluoridation & protective sealants",
        "Early interception of crooked teeth and thumb-sucking habits",
        "Interactive dental education for joyful oral hygiene"
      ],
      idealFor: [
        "First dental visits and routine checkups",
        "Milk tooth cavities, fillings, and pulpotomies",
        "Sports mouthguards and preventive maintenance"
      ],
      duration: "30 minutes per appointment",
      recovery: "Immediate recovery with cheerful encouragement"
    }
  ],

  // Real Local Testimonials (Udaipur)
  testimonials: [
    {
      name: "Suresh Menaria",
      location: "Sector 14, Hiran Magri, Udaipur",
      treatment: "Single-Sitting Root Canal",
      rating: 5,
      date: "3 weeks ago",
      comment: "I went to Dr. Kalpit Kumar with severe tooth pain that kept me awake all night. He did a single-sitting root canal and the entire procedure was completely painless. His clinic at Om Plaza is very clean, hygienic, and modern. Best dentist in Hiran Magri!",
      verified: true
    },
    {
      name: "Meenakshi Rathore",
      location: "Gordhan Vilas, Udaipur",
      treatment: "Dental Implants & Crown",
      rating: 5,
      date: "1 month ago",
      comment: "Dr. Kalpit Kumar explained the whole implant procedure very patiently. The placement was gentle and there was no swelling or trouble the next day. I can chew normally again after two years of difficulty. Very honest and polite doctor.",
      verified: true
    },
    {
      name: "Harshvardhan Sharma",
      location: "Sector 13, Udaipur",
      treatment: "Teeth Whitening & Cleaning",
      rating: 5,
      date: "2 weeks ago",
      comment: "Got my teeth cleaned and laser whitened before my brother's wedding. The difference was immediate and natural, no sensitivity at all. Dr. Kalpit is skilled and gives honest advice without pushing unnecessary treatments.",
      verified: true
    },
    {
      name: "Pooja Chundawat",
      location: "Fatehpura, Udaipur",
      treatment: "Clear Aligners",
      rating: 5,
      date: "2 months ago",
      comment: "Radiant Dental Care is the best place in Udaipur for invisible braces and smile correction. Dr. Kalpit planned everything digitally and monitors every step personally. Extremely satisfied with the results!",
      verified: true
    }
  ],

  // FAQs
  faqs: [
    {
      question: "How can I book an appointment with Dr. Kalpit Kumar?",
      answer: "You can book directly by filling out the online appointment form on this website, calling us at 075687 54898 / +91 75687 54898, or sending a quick WhatsApp message. Our clinic desk will confirm your preferred date and time slot promptly."
    },
    {
      question: "What are your clinic timings?",
      answer: "We are open Monday through Saturday from 9:30 AM to 8:30 PM. On Sundays, we are open from 10:00 AM to 2:00 PM for prior appointments and emergency consultations."
    },
    {
      question: "Where is Radiant Dental Care located in Udaipur?",
      answer: "We are located at Om Plaza, opposite to Natraj Junior School, Sector No. 13 / Sector 14, Hiran Magri, Gordhan Vilas Rural, Udaipur, Rajasthan 313001. Convenient parking is available directly in front of the clinic."
    },
    {
      question: "Do I need an advance appointment, or can I walk in?",
      answer: "While walk-ins and dental emergencies are always accommodated promptly, we recommend scheduling an appointment in advance to avoid waiting and ensure dedicated consultation time with Dr. Kalpit Kumar."
    },
    {
      question: "Are treatments at Radiant Dental Care painless?",
      answer: "Yes. Dr. Kalpit Kumar specializes in painless dentistry using gentle numbing gels, micro-anesthesia, and modern rotary instruments so you feel completely at ease throughout the procedure."
    },
    {
      question: "What sterilization and hygiene protocols do you follow?",
      answer: "Patient safety is our highest priority. We follow strict hospital-grade autoclaving, UV sterilization, and 100% disposable barrier protection for every patient."
    }
  ],

  // Clinic Highlights / Why Choose Us
  whyChooseUs: [
    {
      icon: "fa-user-doctor",
      title: "12+ Years Clinical Mastery",
      description: "Led by Dr. Kalpit Kumar, experienced dental surgeon known across Udaipur for gentle hands and clinical precision."
    },
    {
      icon: "fa-microscope",
      title: "Modern Clinical Equipment",
      description: "Equipped with advanced digital radiography, rotary endodontic systems, and painless treatment technologies."
    },
    {
      icon: "fa-heart-pulse",
      title: "100% Painless Philosophy",
      description: "Gentle chairside care, micro-anesthesia, and compassionate communication for a relaxing, anxiety-free dental visit."
    },
    {
      icon: "fa-hands-bubbles",
      title: "Hospital-Grade Sterilization",
      description: "Rigorous autoclaving protocols and single-use sealed consumables guarantee absolute patient hygiene."
    },
    {
      icon: "fa-calendar-check",
      title: "Zero Waiting & Honest Pricing",
      description: "Respect for your valuable time with scheduled appointments and transparent, honest treatment estimates with zero hidden fees."
    }
  ],

  // Gallery Photos
  gallery: [
    {
      src: "assets/images/reception.jpg",
      title: "Welcoming Reception & Lounge",
      category: "Lounge"
    },
    {
      src: "assets/images/treatment_room.jpg",
      title: "Modern Dental Operatory",
      category: "Operatory"
    },
    {
      src: "assets/images/consultation.jpg",
      title: "Doctor Consultation Suite",
      category: "Consultation"
    },
    {
      src: "assets/images/equipment.jpg",
      title: "Digital Dental Technology",
      category: "Technology"
    },
    {
      src: "assets/images/exterior.jpg",
      title: "Clinic Facility & Entrance",
      category: "Exterior"
    },
    {
      src: "assets/images/before_after.jpg",
      title: "Clinical Smile Restoration Case",
      category: "Results"
    }
  ]
};

// Freeze object to prevent unintentional mutations
if (typeof Object.freeze === "function") {
  Object.freeze(CLINIC_CONFIG);
}
