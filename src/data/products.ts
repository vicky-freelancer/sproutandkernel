import { FAQItem, PolicyType, Product, Review } from "../types";

// Import generated hero image
import heroImg from "../assets/images/herbal_soup_hero_1785443845796.jpg";

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "முருங்கை சூப் பொடி (Moringa Soup Powder)",
    slug: "moringa-soup-powder",
    category: "Leaf-Based",
    image: heroImg,
    gallery: [
      heroImg,
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "இரும்புச் சத்து, வைட்டமின்கள் மற்றும் ஆன்டி-ஆக்ஸிடண்ட்கள் நிறைந்த இயற்கை முருங்கை சூப் பொடி.",
    description: "SPROUT & KERNEL வழங்கும் இயற்கை முருங்கை சூப் பொடி. தூய்மையான முறையில் உலர்த்தப்பட்ட இளமுருங்கை இலைகள் மற்றும் சீரகம், மிளகு, மல்லி, இஞ்சி சேர்த்த பாரம்பரிய மூலிகை சூப். உடலின் இரும்புச் சத்தை அதிகரித்து இரத்த சோகையை நீக்கும்.",
    ingredients: [
      "சுத்தமான முருங்கை இலை பொடி (Moringa Powder)",
      "மிளகு (Black Pepper)",
      "சீரகம் (Cumin)",
      "மல்லி (Coriander)",
      "சுக்கு (Dry Ginger)",
      "பூண்டு (Garlic)",
      "இந்துப்பு (Himalayan Rock Salt)"
    ],
    benefits: [
      "இரும்புச் சத்து நிறைந்தது - ஹீமோகுளோபின் அளவை அதிகரிக்க உதவுகிறது.",
      "கண் பார்வை திறனை சரிசெய்கிறது.",
      "வைட்டமின்கள் மற்றும் ஆன்டி-ஆக்ஸிடண்ட்கள் நிறைந்துள்ளதால் நோய் எதிர்ப்புச் சக்தியை அசுர வேகத்தில் அதிகரிக்கும்.",
      "100% இயற்கை தயாரிப்பு - ரசாயனங்கள் மற்றும் பாதுகாப்பிகள் அற்றது."
    ],
    preparation: "1 டேபிள் ஸ்பூன் (10g) சூப் பொடியை 200ml தண்ணீரில் கலந்து 2-3 நிமிடங்கள் நன்றாக கொதிக்க வைக்கவும். சூடான சுவையான மூலிகை சூப் தயார்!",
    storage: "குளிர்ந்த மற்றும் உலர்ந்த இடத்தில் காற்றுப்புகாதவாறு அடைத்து வைக்கவும்.",
    weight: "100g",
    availableWeights: [
      { weight: "100g", price: 120, originalPrice: 133 }
    ],
    price: 120,
    originalPrice: 133,
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 184,
    stockStatus: "In Stock"
  },
  {
    id: "p2",
    name: "வாழைத்தண்டு சூப் பொடி (Valaithandu Soup Powder)",
    slug: "valaithandu-soup-powder",
    category: "Traditional Mix",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "சிறுநீரகக் கற்களை கரைக்கவும், உடல் எடையை குறைக்கவும் உதவும் இயற்கை வாழைத்தண்டு சூப்.",
    description: "நார்ச்சத்து நிறைந்த வாழைத்தண்டின் முழுமையான நன்மைகளுடன் தயாரிக்கப்பட்டது. சிறுநீரகத்தில் தங்கும் நச்சுகளை வெளியேற்றி (Detoxification) சிறுநீரகப் பாதையை சுத்தமாக வைத்திருக்க உதவும்.",
    ingredients: [
      "வாழைத்தண்டு பொடி (Plantain Stem Powder)",
      "மிளகு",
      "சீரகம்",
      "தனியா",
      "சின்ன வெங்காயம்",
      "இந்துப்பு"
    ],
    benefits: [
      "சிறுநீரக ஆரோக்கியத்தை மேம்படுத்தவும், உடலில் உள்ள நச்சுகளை வெளியேற்றவும் உதவும்.",
      "அதிகபடியான நார்ச்சத்து உடல் எடையை குறைக்க உதவும்.",
      "மலச்சிக்கல் மற்றும் சிறுநீரக பாதையில் ஏற்படும் தொற்று, கற்களை சரி செய்யும்."
    ],
    preparation: "200ml கொதிநீரில் 1 ஸ்பூன் சூப் பொடி சேர்த்து 2 நிமிடம் கொதிக்க வைத்து சூடாக பருகவும்.",
    storage: "காற்றுப்புகாத டப்பாவில் குளிர்ந்த இடத்தில் வைக்கவும்.",
    weight: "100g",
    availableWeights: [
      { weight: "100g", price: 120, originalPrice: 133 }
    ],
    price: 120,
    originalPrice: 133,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 142,
    stockStatus: "In Stock"
  },
  {
    id: "p3",
    name: "முடக்கத்தான் சூப் பொடி (Mudakathan Soup Powder)",
    slug: "mudakathan-soup-powder",
    category: "Traditional Mix",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "மூட்டு வலி, வீக்கம் மற்றும் வாதப் பிரச்சனைகளுக்கு நிவாரணம் தரும்பாரம்பரிய மூலிகை.",
    description: "பாரம்பரிய சித்த மருத்துவத்தில் மூட்டு ஆரோக்கியத்திற்கு முடக்கத்தான் கீரை முதன்மையானது. மூட்டுகளில் தங்கும் யூரிக் அமிலத்தை கரைத்து வலியிலிருந்து விடுதலை அளிக்கும்.",
    ingredients: [
      "தூய்மையான முடக்கத்தான் இலைகள்",
      "மிளகு",
      "சீரகம்",
      "பூண்டு",
      "சுக்கு",
      "கல் உப்பு"
    ],
    benefits: [
      "கை கால் மூட்டுகளில் உள்ள வலியையும் வீக்கத்தையும் குறைக்கும்.",
      "மூட்டுகளில் தங்கும் யூரிக் அமிலம், புரதம், கொழுப்பு முதலியவற்றை கரைத்து வெளியேற்றும்.",
      "வாதப் பிரச்சினைகளுக்கு சிறந்த நிவாரணம் தரும் பாரம்பரிய மூலிகை."
    ],
    preparation: "10g பொடியை 200ml தண்ணீரில் கலந்து 3 நிமிடங்கள் கொதிக்க வைத்து பருகவும்.",
    storage: "உலர்ந்த இடத்தில் வைக்கவும்.",
    weight: "100g",
    availableWeights: [
      { weight: "100g", price: 120, originalPrice: 133 }
    ],
    price: 120,
    originalPrice: 133,
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 215,
    stockStatus: "In Stock"
  },
  {
    id: "p4",
    name: "பிரண்டை சூப் பொடி (Pirandai / Perandai Soup Powder)",
    slug: "pirandai-soup-powder",
    category: "Traditional Mix",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "செரிமானத்தை தூண்டவும், எலும்புகளுக்கு உறுதியளிக்கவும் உதவும் பிரண்டை மூலிகை சூப்.",
    description: "எலும்புகளை வஜ்ரம் போல் உறுதியாக்கும் பிரண்டை மூலிகை. உடைந்த எலும்புகள் எளிதில் கூடவும், பசியின்மையை போக்கி நல்ல செரிமான சக்தியைத் தரவும் உதவுகிறது.",
    ingredients: [
      "இளம் பிரண்டை தண்டு பொடி",
      "மிளகு",
      "சீரகம்",
      "திப்பிலி",
      "புளிப்பொடி",
      "இந்துப்பு"
    ],
    benefits: [
      "உடல் பலத்தை கூட்டி சுறுசுறுப்பாக வைக்கும்.",
      "எலும்புகள் உறுதியாகும். எலும்பு முறிவு ஏற்பட்டால் உடைந்த எலும்புகள் விரைவில் கூடும்.",
      "செரிமானத்தை தூண்டவும் மற்றும் வயிறு உப்பசம் போக்கவும் துணைபுரிகிறது."
    ],
    preparation: "1 டேபிள் ஸ்பூன் பொடியை கொதிநீரில் சேர்த்து 2 நிமிடம் கொதிக்க வைத்து குடிக்கவும்.",
    storage: "குளிர்ந்த உலர் சூழலில் சேமிக்கவும்.",
    weight: "100g",
    availableWeights: [
      { weight: "100g", price: 120, originalPrice: 133 }
    ],
    price: 120,
    originalPrice: 133,
    rating: 4.9,
    reviewCount: 118,
    stockStatus: "In Stock"
  },
  {
    id: "p5",
    name: "வல்லாரை சூப் பொடி (Vallarai Memory Soup Powder)",
    slug: "vallarai-soup-powder",
    category: "Leaf-Based",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "ஞாபக சக்தி, மூளையின் கூர்மை மற்றும் கவனிப்புத் திறனை அதிகரிக்கும் அற்புத வல்லாரை சூப்.",
    description: "வளரும் குழந்தைகளுக்கு தினமும் கொடுக்க வேண்டிய இயற்கை நினைவாற்றல் மூலிகை. மூளையின் நரம்புகளை தூண்டி சுறுசுறுப்புடன் வைக்கும்.",
    ingredients: [
      "வல்லாரை இலை பொடி (Vallarai Leaves)",
      "சீரகம்",
      "மிளகு",
      "தனியா",
      "இந்துப்பு"
    ],
    benefits: [
      "ஞாபக சக்தியையும், மூளையின் செயல்திறனையும் மற்றும் கவனிப்புத் திறனையும் அதிகரிக்கும்.",
      "மூளையின் நரம்புகளை தூண்டி நினைவாற்றலை உயிர்ப்புடன் வைக்கும்.",
      "செரட்டோனின் சத்து உள்ளது - வளரும் குழந்தைகளுக்கு தினமும் கொடுத்து வரலாம்."
    ],
    preparation: "200ml கொதிநீரில் 1 ஸ்பூன் கலந்து 2 நிமிடம் கொதிக்க வைத்து பரிமாறவும்.",
    storage: "நேரடி வெயில் படாமல் உலர்ந்த இடத்தில் வைக்கவும்.",
    weight: "100g",
    availableWeights: [
      { weight: "100g", price: 120, originalPrice: 133 }
    ],
    price: 120,
    originalPrice: 133,
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 168,
    stockStatus: "In Stock"
  },
  {
    id: "p6",
    name: "முடவாட்டுக்கால் சூப் பொடி (Mudavattukkal Soup Powder)",
    slug: "mudavattukkal-soup-powder",
    category: "Traditional Mix",
    image: heroImg,
    gallery: [
      heroImg
    ],
    shortDescription: "சைவ 'ஆட்டுக்கால் சூப்' - முழங்கால் வலி மற்றும் எலும்பு பலத்திற்கு மிகவும் புகழ்பெற்றது.",
    description: "மலைப் பகுதிகளில் வளரும் அபூர்வ கிழங்கு மூலிகையான முடவாட்டுக்கால். ஆட்டுக்கால் சூப்பிற்கு நிகரான சுவையும் மருத்துவக் குணமும் கொண்ட 100% சைவ சூப் வகை.",
    ingredients: [
      "முடவாட்டுக்கால் கிழங்கு பொடி",
      "கருமிளகு",
      "சீரகம்",
      "பூண்டு",
      "சின்ன வெங்காய பொடி",
      "இந்துப்பு"
    ],
    benefits: [
      "சைவ 'ஆட்டுக்கால் சூப்' என்று அழைக்கப்படும் பாரம்பரிய மூலிகை.",
      "முழங்கால் வலி, மூட்டு தேய்மானம் மற்றும் எலும்பு வலிமைக்கு மிகவும் புகழ்பெற்றது.",
      "உடலுக்கு உடனடி தெம்பையும் புத்துணர்ச்சியையும் அளிக்கும்."
    ],
    preparation: "1 டேபிள் ஸ்பூன் பொடியை 220ml நீரில் 3 நிமிடங்கள் நன்றாக கொதிக்க வைத்து குடிக்கவும்.",
    storage: "காற்று புகாத வகையில் சேமிக்கவும்.",
    weight: "50g",
    availableWeights: [
      { weight: "50g", price: 95, originalPrice: 106 },
      { weight: "100g", price: 180, originalPrice: 200 }
    ],
    price: 95,
    originalPrice: 106,
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 192,
    stockStatus: "In Stock"
  },
  {
    id: "p7",
    name: "ஆவாரம்பூ சூப் பொடி (Avarampoo Soup Powder)",
    slug: "avarampoo-soup-powder",
    category: "Spices & Immunity",
    image: "/Avarampoo.jpeg",
    gallery: [
      "/Avarampoo.jpeg"
    ],
    shortDescription: "ரத்த சர்க்கரை அளவை கட்டுப்படுத்தவும், சருமத்திற்கு பொலிவு தரவும் உதவும் பொன்னிற பூ சூப்.",
    description: "'ஆவாரம்பூ பூத்திருக்க சாவாரை கண்டதுண்டோ' என்ற பழமொழிக்கு ஏற்ப, உடலின் சர்க்கரை அளவை சமன் செய்து தோலுக்கு இயற்கை பொலிவைத் தரும் தங்க நிற மூலிகை சூப்.",
    ingredients: [
      "சுத்தமான ஆவாரம்பூ இதழ்கள்",
      "சீரகம்",
      "மிளகு",
      "சுக்கு",
      "ஏலக்காய்",
      "இந்துப்பு"
    ],
    benefits: [
      "இரத்தத்தில் உள்ள சர்க்கரையின் அளவை இயற்கையாகவே கட்டுப்படுத்துகிறது.",
      "நீரிழிவு நோயாளிகளுக்கு மிகவும் சிறந்தது.",
      "சரும நோய்களை நீக்கி சருமத்திற்கு நல்ல பொலிவைத் தரும்."
    ],
    preparation: "1 ஸ்பூன் பொடியை 200ml கொதிநீரில் சேர்த்து வடிகட்டி பருகவும்.",
    storage: "ஈரப்பதம் இல்லாத இடத்தில் வைக்கவும்.",
    weight: "100g",
    availableWeights: [
      { weight: "100g", price: 120, originalPrice: 133 }
    ],
    price: 120,
    originalPrice: 133,
    rating: 4.9,
    reviewCount: 134,
    stockStatus: "In Stock"
  },
  {
    id: "p8",
    name: "தூதுவளை சூப் பொடி (Thuthuvalai Soup Powder)",
    slug: "thuthuvalai-soup-powder",
    category: "Spices & Immunity",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80"
    ],
    shortDescription: "சளி, இருமல் நீங்கவும் மற்றும் ஒட்டுமொத்த சுவாச ஆரோக்கியத்தை மேம்படுத்தவும் சிறந்தது.",
    description: "நுரையீரலை பாதுகாக்கும் இயற்கை காயகற்ப மூலிகை தூதுவளை. நெஞ்சுச்சளி, இருமல் மற்றும் தொண்டை கரகரப்பை உடனடியாக சரிசெய்யும்.",
    ingredients: [
      "தூதுவளை இலை பொடி",
      "திப்பிலி",
      "கருமிளகு",
      "சீரகம்",
      "சுக்கு",
      "இந்துப்பு"
    ],
    benefits: [
      "சளி, இருமல் நீங்கவும் மற்றும் ஒட்டுமொத்த சுவாச ஆரோக்கியத்தை மேம்படுத்தவும் சிறந்தது.",
      "நுரையீரலில் உள்ள நச்சுகளை வெளியேற்றி நுரையீரலை பாதுகாக்கும்.",
      "ஆஸ்துமா மற்றும் நெஞ்சுச்சளி பிரச்சனைகளுக்கு இயற்கை நிவாரணி."
    ],
    preparation: "10g பொடியை 200ml நீரில் 2 நிமிடங்கள் கொதிக்க வைத்து குடிக்கவும்.",
    storage: "உலர்ந்த காற்று புகாத இடத்தில் வைக்கவும்.",
    weight: "100g",
    availableWeights: [
      { weight: "100g", price: 120, originalPrice: 133 }
    ],
    price: 120,
    originalPrice: 133,
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 176,
    stockStatus: "In Stock"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    userName: "மீனாட்சி சுந்தரம்",
    userLocation: "திருச்சி, தமிழ்நாடு",
    rating: 5,
    date: "12 ஜூலை 2026",
    comment: "SPROUT & KERNEL முருங்கை சூப் பொடி மிகவும் அருமையாக உள்ளது! காலை உணவுக்கு முன் குடிக்கும்போது உடலுக்கு நல்ல சுறுசுறுப்பு கிடைக்கிறது. வாட்ஸ்அப்பில் ஆர்டர் செய்த 2 நாளில் டெலிவரி கிடைத்தது.",
    verifiedBuyer: true,
    productSlug: "moringa-soup-powder"
  },
  {
    id: "r2",
    userName: "ராஜேஷ் கண்ணன்",
    userLocation: "சென்னை, தமிழ்நாடு",
    rating: 5,
    date: "28 ஜூன் 2026",
    comment: "தூதுவளை சூப் பொடி மற்றும் முடக்கத்தான் சூப் வாங்கியிருந்தேன். தொண்டை சளி மற்றும் மூட்டு வலிக்கு நல்ல பலன் கிடைத்தது. 100% இயற்கை தயாரிப்பு!",
    verifiedBuyer: true,
    productSlug: "thuthuvalai-soup-powder"
  },
  {
    id: "r3",
    userName: "டாக்டர் அனிதா ரமேஷ்",
    userLocation: "கோயம்புத்தூர், தமிழ்நாடு",
    rating: 5,
    date: "04 மே 2026",
    comment: "பாரம்பரிய சித்த மருத்துவத்தின் நன்மைகள் மாறாமல் தயாரிக்கப்பட்டுள்ளது. வேதிப்பொருட்கள் இல்லாத உண்மையான மூலிகைச் சுவை.",
    verifiedBuyer: true,
    productSlug: "mudakathan-soup-powder"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "How do I order products through WhatsApp?",
    answer: "Simply click the 'Buy Now on WhatsApp' button on any product card or detail page. It will automatically open WhatsApp with a pre-formatted message listing the selected product name, weight, quantity, calculated price, and reference image. You can send the message, and our team will confirm availability and payment details right away."
  },
  {
    id: "f2",
    question: "What payment methods are supported?",
    answer: "After you send your WhatsApp order message, we accept all convenient payment modes including UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking, and Cash on Delivery (COD in selected pincodes)."
  },
  {
    id: "f3",
    question: "Are these herbal soup powders 100% natural?",
    answer: "Are all SPROUT & KERNEL herbal soup powders made using 100% pure sun-dried herbs and whole spices? Yes, absolutely! We strictly do NOT use artificial colors, chemical preservatives, MSG, or synthetic flavors."
  }
];

export const POLICIES: Record<string, { title: string; lastUpdated: string; content: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "July 2026",
    content: [
      "At SPROUT & KERNEL, we value your privacy. We collect minimal personal information (such as name, phone number, and delivery address) strictly required for processing your orders via WhatsApp.",
      "We do not sell or share your personal information with third-party marketers.",
      "For any privacy concerns, contact us at sproutandkernel@gmail.com or via WhatsApp at +91 733 933 7772."
    ]
  },
  terms: {
    title: "Terms & Conditions",
    lastUpdated: "July 2026",
    content: [
      "By placing an order with SPROUT & KERNEL via WhatsApp or our web app, you agree to our terms of service.",
      "All products are 100% herbal and natural. Consult your healthcare provider if you have medical conditions.",
      "Prices are subject to revision, but confirmed orders will be honored at the agreed price."
    ]
  },
  shipping: {
    title: "Shipping & Delivery Policy",
    lastUpdated: "July 2026",
    content: [
      "We ship across Tamil Nadu and all over India via reputed courier partners.",
      "Orders above ₹499 qualify for Free Express Shipping.",
      "Standard delivery time is 2-4 business days across Tamil Nadu and 4-7 business days for other states."
    ]
  },
  returns: {
    title: "Returns & Refund Policy",
    lastUpdated: "July 2026",
    content: [
      "Due to the perishable nature of food and herbal products, returns are accepted only if the product received is damaged or incorrect.",
      "Please record a short unboxing video and share it on WhatsApp +91 733 933 7772 within 24 hours of delivery for immediate replacement or refund."
    ]
  }
};
