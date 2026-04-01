// Nav Bar
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

// PRELOADER
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('hidden');
    preloader.addEventListener('transitionend', () => {
      preloader.style.display = 'none';
    }, { once: true });

    setTimeout(() => {
      if (preloader.parentNode) {
        preloader.style.display = 'none';
      }
    }, 400);
  }
});
// END OF PRELOADER




// Add active class to nav links when clicked and on page load
const navLinks = document.querySelectorAll(".nav-links li a");

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    const linkPage = href.split('/').pop();

    const isIndex = (currentPage === '' || currentPage === 'index.html');
    const linkIsIndex = (linkPage === '' || linkPage === 'index.html');

    const active = (isIndex && linkIsIndex) || (currentPage === linkPage);

    link.classList.toggle('active', active);
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Set active link on load
setActiveNavLink();



// simple language switcher
const translations = {
  en: {
    home: "HOME",
    partners: "PARTNERS",
    products: "PRODUCTS",
    services: "SERVICES",
    offices: "OUR OFFICES",
    contact: "CONTACT",
    welcome: "Welcome to SBA Group",
    about: "ABOUT US",
    "about-text": "<b>SERVICES BEVERAGES AFRICA GROUP (SBA GROUP)</b> is a service company specialized in bottling and packaging industry.<br><br>Through its partners SBA GROUP is one of the premium brands in Africa that provides sustainable packaging and line engineering solutions needed in today's Fast-Moving Consumer Goods (FMCG) industries for beverages, food, home, and personal care production environment.<br><br>Throughout the years, SBA GROUP has been able to develop trust with its partners and clients in the sub-Saharan countries (30+) from its seven offices: Ivory Coast, Nigeria, Congo, DRC, Angola, Kenya, and Ethiopia.<br><br>From providing a complete process line for liquid/beverage as a turnkey project, to providing stand-alone equipment for each stage of the line to a total automated warehouse, we are your best bet. Our FHPC (Food Home and Personal Care) area offers a wide range of equipment for any kind of product you would want to put in PET containers as well as in sachets, pouches and sticks you may have an interest in producing.<br><br>Not only we do offer equipment meeting European standards, we also carry out the installation of this equipment within the factories to which it is transported. We have nearly 100 OEM trained engineers certified in mechanical/electrical/automation services based in Africa to cover related services in the countries that we cover.",
    vision: "OUR VISION",
    "vision-text": "Quenching global thirst through precision and care, SBA envisions a future where our bottling services redefine the packaging industry.<br><br>As a trusted partner in packaging solutions, we aim to set the highest standards for quality, efficiency, and sustainability. Our vision is to be the backbone of renowned brands, providing seamless and innovative services that not only meet but exceed customer expectations.<br><br>With a commitment to environmental responsibility, operational excellence, and customer satisfaction, we strive to shape a world where every sip reflects our dedication to excellence in bottling services.",
    history: "OUR HISTORY",
    "history-text": "SBA Group was founded in 1996 by a group of passionate entrepreneurs with a vision to revolutionize the bottling and packaging industry in Africa. Starting as a small service provider, SBA Group quickly gained recognition for its commitment to quality and customer satisfaction.<br><br>Over the years, SBA Group expanded its operations across sub-Saharan Africa, establishing offices in key countries such as Ivory Coast, Nigeria, Congo, DRC, Angola, Kenya, and Ethiopia. The company's dedication to providing innovative solutions and exceptional service has earned it a reputation as a trusted partner in the industry.<br><br>Today, SBA Group continues to grow and evolve, driven by its mission to quench global thirst through precision and care. With a focus on sustainability and operational excellence, SBA Group is poised to shape the future of the bottling and packaging industry in Africa and beyond.",
    trust: "THEY TRUST US",
    "contact-us": "CONTACT US",
    "contact-description": "We'd love to hear from you!<br> Any idea, project, question, suggestion?<br>Please, don't hesitate to contact us.",
    "our-partners": "OUR PARTNERS",
    "fields-activity": "FIELDS OF ACTIVITY",
    "fields-solution": "A SOLUTION FOR EACH PRODUCT",
    discovery: "Discovery",
    "products-title": "PRODUCTS",
    "pet-fhpc": "PET & FHPC",
    bottle: "Bottle",
    can: "Can",
    "end-of-line": "END OF LINE",
    pouches: "Pouches",
    process: "PROCESS",
    coding: "CODING",
    warehouse: "WAREHOUSE",
    "brewery-tanks": "BREWERY/ PROCESS / STORAGE TANKS",
    "contact-info": "CONTACT INFORMATION",
    "follow-us": "FOLLOW US",
    "quick-links": "QUICK LINKS",
    newsletter: "NEWSLETTER",
    "newsletter-text": "Subscribe to our newsletter for the latest updates.",
    "local-presence": "Local presence for fast response time",
    sales: "Sales",
    "after-sales-service": "After Sales Service",
    "spare-parts": "Spare Parts",
    "our-offices": "OUR OFFICES",
    "first-last-name": "First & Last Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send",
    "address": "7, Oba Akinjobi Way, Ikeja GRA - Lagos.",
    "phone": "+234 815 839 1577, +234 909 033 3774",
    "email": "xxxxx@mail.com",
    "copyright": "&copy; 2026 SBA GROUP. All RIGHTS RESERVED.",
    "developed-by": "developed by codewithmichy & danielstech",
  },
  fr: {
    home: "ACCUEIL",
    partners: "PARTENAIRES",
    products: "PRODUITS",
    services: "SERVICES",
    offices: "NOS BUREAUX",
    contact: "CONTACT",
    welcome: "Bienvenue chez SBA Group",
    about: "À PROPOS DE NOUS",
    "about-text": "<b>SERVICES BEVERAGES AFRICA GROUP (SBA GROUP)</b> est une entreprise de services spécialisée dans l'industrie de l'embouteillage et de l'emballage.<br><br>À travers ses partenaires, SBA GROUP est l'une des marques premium en Afrique qui fournit des solutions durables d'emballage et d'ingénierie de ligne nécessaires dans les industries des biens de consommation courante (FMCG) d'aujourd'hui pour les boissons, l'alimentation, les soins personnels et domestiques.<br><br>Au fil des années, SBA GROUP a pu développer la confiance avec ses partenaires et clients dans les pays subsahariens (30+) depuis ses sept bureaux : Côte d'Ivoire, Nigeria, Congo, RDC, Angola, Kenya et Éthiopie.<br><br>De la fourniture d'une ligne de processus complète pour les liquides/boissons en tant que projet clé en main, à la fourniture d'équipements autonomes pour chaque étape de la ligne jusqu'à un entrepôt entièrement automatisé, nous sommes votre meilleur choix. Notre domaine FHPC (Alimentation, Soins Domestiques et Personnels) offre une large gamme d'équipements pour tout type de produit que vous voudriez mettre dans des contenants PET ainsi que dans des sachets, pochettes et bâtonnets que vous pourriez avoir intérêt à produire.<br><br>Non seulement nous offrons des équipements répondant aux normes européennes, mais nous effectuons également l'installation de cet équipement dans les usines où il est transporté. Nous avons près de 100 ingénieurs formés par les fabricants d'origine certifiés en services mécaniques/électriques/automatisation basés en Afrique pour couvrir les services connexes dans les pays que nous couvrons.",
    vision: "NOTRE VISION",
    "vision-text": "Étancher la soif mondiale grâce à la précision et aux soins, SBA imagine un avenir où nos services d'embouteillage redéfinissent l'industrie de l'emballage.<br><br>En tant que partenaire de confiance dans les solutions d'emballage, nous visons à fixer les normes les plus élevées en matière de qualité, d'efficacité et de durabilité. Notre vision est d'être l'épine dorsale des marques renommées, en fournissant des services transparents et innovants qui non seulement répondent mais dépassent les attentes des clients.<br><br>Avec un engagement envers la responsabilité environnementale, l'excellence opérationnelle et la satisfaction client, nous nous efforçons de façonner un monde où chaque gorgée reflète notre dévouement à l'excellence dans les services d'embouteillage.",
    history: "NOTRE HISTOIRE",
    "history-text": "SBA Group a été fondée en 1996 par un groupe d'entrepreneurs passionnés avec une vision de révolutionner l'industrie de l'embouteillage et de l'emballage en Afrique. Commenceant comme petit fournisseur de services, SBA Group a rapidement gagné en reconnaissance pour son engagement envers la qualité et la satisfaction client.<br><br>Au fil des années, SBA Group a étendu ses opérations à travers l'Afrique subsaharienne, établissant des bureaux dans des pays clés tels que la Côte d'Ivoire, le Nigeria, le Congo, la RDC, l'Angola, le Kenya et l'Éthiopie. L'engagement de l'entreprise à fournir des solutions innovantes et un service exceptionnel lui a valu une réputation de partenaire de confiance dans l'industrie.<br><br>Aujourd'hui, SBA Group continue de croître et d'évoluer, motivée par sa mission d'étancher la soif mondiale grâce à la précision et aux soins. Avec un focus sur la durabilité et l'excellence opérationnelle, SBA Group est prête à façonner l'avenir de l'industrie de l'embouteillage et de l'emballage en Afrique et au-delà.",
    trust: "ILS NOUS FONT CONFIANCE",
    "contact-us": "CONTACTEZ-NOUS",
    "contact-description": "Nous aimerions avoir de vos nouvelles !<br> Une idée, un projet, une question, une suggestion ?<br>N'hésitez pas à nous contacter.",
    "our-partners": "NOS PARTENAIRES",
    "fields-activity": "DOMAINES D'ACTIVITÉ",
    "fields-solution": "UNE SOLUTION POUR CHAQUE PRODUIT",
    discovery: "Découvrir",
    "products-title": "PRODUITS",
    "pet-fhpc": "PET & FHPC",
    bottle: "Bouteille",
    can: "Canette",
    "end-of-line": "FIN DE LIGNE",
    pouches: "Pochettes",
    process: "PROCESSUS",
    coding: "CODAGE",
    warehouse: "ENTREPÔT",
    "brewery-tanks": "BRASSERIE/ PROCESSUS / RÉSERVOIRS DE STOCKAGE",
    "contact-info": "INFORMATIONS DE CONTACT",
    "follow-us": "SUIVEZ-NOUS",
    "quick-links": "LIENS RAPIDES",
    newsletter: "NEWSLETTER",
    "newsletter-text": "Abonnez-vous à notre newsletter pour les dernières mises à jour.",
    "local-presence": "Présence locale pour un temps de réponse rapide",
    sales: "Ventes",
    "after-sales-service": "Service Après-Vente",
    "spare-parts": "Pièces de Rechange",
    "our-offices": "NOS BUREAUX",
    "first-last-name": "Prénom & Nom",
    email: "Email",
    subject: "Sujet",
    message: "Message",
    send: "Envoyer",
    "address": "7, Oba Akinjobi Way, Ikeja GRA - Lagos.",
    "phone": "+234 815 839 1577, +234 909 033 3774",
    "email": "xxxxx@mail.com",
    "copyright": "&copy; 2026 SBA GROUP. Tous droits réservés.",
    "developed-by": "développé par codewithmichy & danielstech",
    "countries": "+30 PAYS",
    "employees": "+150 EMPLOYÉS",
    "equipments": "+3000 ÉQUIPEMENTS",
    "customers": "+200 CLIENTS",
    "offices-count": "7 BUREAUX",
    "serac-desc": "Serac specializes in the design and manufacture of liquid filling and capping machines.",
    "adue-desc": "Juicy Technology and Sparkling Ideas – Automated beverage preparation & water treatment.",
    "volpak-desc": "A Global leading company, specialized in form-fill-seal solutions for the flexible pouch packaging industry (Pouches/Doypack…). Volpak designs and manufactures automatic packaging machines for flexible packaging in the consumer goods market. (Food & Beverage, Personal care, Home care, Chemical, Pharmaceutical, Pet food.)",
    "electric80-desc": "Elettric80 and BEMA provide tailor made intralogistics solutions to maximize efficiency over time along the entire supply chain, increasing safety and sustainability in factories and distribution centers, ensuring full product traceability.",
    "ziemann-desc": "Your Global Partner for beverage manufacturing tanks, process technology, commercial brewing equipment, beer tanks, and turnkey breweries.",
    "andreotti-desc": "Andreotti Impianti Spa is the Italian first-class engineering company, globally recognized as one of the leaders in the design and manufacture of plants for oilseeds crushing and solvent extraction, edible oils, and fats refining , oleochemicals ( glycerin, fatty acids, biofuels). Worldwide successful for over 60 years.",
    "markem-desc": "Markem-Imaje is a global leader, specializing in innovative product identification, packaging intelligence, and connected product solutions.",
    "newsletter-placeholder": "Enter your email",
    "subscribe-btn": "Subscribe",
    // Product names
    "product-water": "Water",
    "product-sodas-csd": "Sodas (CSD)",
    "product-juice": "Juice",
    "product-beer": "Beer",
    "product-oil": "Oil",
    "product-milk": "Milk",
    "product-cosmetics": "Cosmetics",
    "product-personal-care": "Personal Care",
    "product-alcohol": "Alcohol",
    "product-sparkling-water": "Sparkling Water",
    "product-shrink-wrapper": "Shrink Wrapper",
    "product-case-packer": "Case Packer",
    "product-palletizer": "Palletizer",
    "product-conveyor": "Conveyor",
    "product-robots": "Robots",
    "product-food": "Food",
    "product-dairy-products": "Dairy Products",
    "product-water-treatment": "Water Treatment",
    "product-process": "Process",
    "product-syrup-room": "Syrup Room",
    "product-continuous-ink-jet": "Continuous Ink-jet",
    "product-thermal-transfer-printers": "Thermal Transfer printers",
    "product-large-character-printers": "Large Character High Resolution Printers",
    "product-laser-printer": "Laser printer",
    "product-print-apply-labeling": "Print and Apply Labeling Machines",
    "product-thermal-ink-jet": "Thermal Ink-jet Printers",
    "product-valve-jet-printers": "Valve-jet Large Character printers",
    "product-inks-additives": "Inks and Additives",
    "product-ribbons-labels": "Ribbons and Labels",
    "product-colos-software": "CoLOS Industrial Software Solutions",
    "product-legacy-printers": "Legacy Printers",
    "product-laser-guided-vehicles": "Laser Guided Vehicles",
    "product-storage-system": "Storage System",
    "product-pallet-control": "Pallet Control",
    "product-automatic-palletizers": "Automatic Palletizers",
    "product-stretch-wrappers": "Stretch Wrappers",
    "product-robotic-labeller": "Robotic Labeller",
    "product-palletizing-systems": "Palletizing and Depalletizing Systems",
    "product-automated-warehouses": "Automated Warehouses",
    "product-hard-seltzer": "Hard Seltzer",
    "product-distilling": "Distilling",
    "product-edible-oil": "Edible Oil",
    "product-liquid": "Liquid",
    // Service descriptions
    "service-sales-1": "SBA presence for more than 25 years",
    "service-sales-2": "More than 3000 installations throughout Africa",
    "service-sales-3": "Proximity to our customers",
    "service-sales-4": "Regular factory and client visits",
    "service-sales-5": "Sales and advice on equipment",
    "service-sales-6": "Prospecting and Market studies.",
    "service-sales-7": "An experienced and professional Team.",
    "service-sales-8": "Good market reference in the territory",
    "service-sales-9": "Local services, knowledge, and flexibility in these difficult markets.",
    "service-sales-10": "Local payment accommodation to customers.",
    "service-after-sales-1": "Nearly 100 OEM trained engineers in mechanical / electrical / automation services based in Africa to cover related services.",
    "service-after-sales-2": "Tailor-made support",
    "service-after-sales-3": "Option & upgrades",
    "service-after-sales-4": "Optional maintenance from parts and subsystems to full production line.",
    "service-after-sales-5": "Constant follow up.",
    "service-after-sales-6": "Dedicated team for all post sales requests from customers.",
    "service-after-sales-7": "Equipment diagnosis and consulting for annual maintenance support.",
    "service-after-sales-8": "Time and material-based package solutions.",
    "service-after-sales-9": "Maintenance contracts and embedded engineering services.",
    "service-spare-parts-1": "Dedicated spare parts administrators",
    "service-spare-parts-2": "Stock available in each SBA office",
    "service-spare-parts-3": "Express delivery:",
    "service-spare-parts-4": "HandCarry delivery",
    "service-spare-parts-5": "Door to Door delivery",
    "service-spare-parts-6": "Emergency Delivery in 24hours",
    "service-spare-parts-7": "Fast treatment of all requests: quote, order, delivery",
    "service-spare-parts-8": "Payment in local currency in all the countries where SBA is located",
    "service-spare-parts-9": "Flexible payment terms",
    "countries": "+30 COUNTRIES",
    "employees": "+150 EMPLOYEES",
    "equipments": "+3000 EQUIPMENTS",
    "customers": "+200 CUSTOMERS",
    "offices-count": "7 OFFICES",
    "serac-desc": "Serac se spécialise dans la conception et la fabrication de machines de remplissage et de bouchage de liquides.",
    "adue-desc": "Technologie juteuse et idées pétillantes – Préparation automatisée de boissons et traitement de l'eau.",
    "volpak-desc": "Une entreprise leader mondiale, spécialisée dans les solutions form-fill-seal pour l'industrie de l'emballage de sachets flexibles (Pouches/Doypack…). Volpak conçoit et fabrique des machines d'emballage automatiques pour l'emballage flexible sur le marché des biens de consommation. (Alimentation et boissons, Soins personnels, Soins ménagers, Chimique, Pharmaceutique, Aliments pour animaux de compagnie.)",
    "electric80-desc": "Elettric80 et BEMA fournissent des solutions intralogistiques sur mesure pour maximiser l'efficacité au fil du temps le long de toute la chaîne d'approvisionnement, augmentant la sécurité et la durabilité dans les usines et les centres de distribution, assurant une traçabilité complète des produits.",
    "ziemann-desc": "Votre partenaire mondial pour les cuves de fabrication de boissons, la technologie de processus, l'équipement de brassage commercial, les cuves à bière et les brasseries clés en main.",
    "andreotti-desc": "Andreotti Impianti Spa est la première entreprise d'ingénierie italienne, reconnue mondialement comme l'un des leaders dans la conception et la fabrication d'usines pour le concassage des graines oléagineuses et l'extraction par solvant, le raffinage des huiles et graisses comestibles, les oléochimiques (glycérine, acides gras, biocarburants). Réussi dans le monde entier depuis plus de 60 ans.",
    "markem-desc": "Markem-Imaje est un leader mondial, spécialisé dans l'identification innovante des produits, l'intelligence de l'emballage et les solutions de produits connectés.",
    "newsletter-placeholder": "Entrez votre email",
    "subscribe-btn": "S'abonner",
    // Product names
    "product-water": "Eau",
    "product-sodas-csd": "Sodas (CSD)",
    "product-juice": "Jus",
    "product-beer": "Bière",
    "product-oil": "Huile",
    "product-milk": "Lait",
    "product-cosmetics": "Cosmétiques",
    "product-personal-care": "Soins personnels",
    "product-alcohol": "Alcool",
    "product-sparkling-water": "Eau pétillante",
    "product-shrink-wrapper": "Enrobeuse rétractable",
    "product-case-packer": "Emballeur de caisses",
    "product-palletizer": "Palettiseur",
    "product-conveyor": "Convoyeur",
    "product-robots": "Robots",
    "product-food": "Alimentation",
    "product-dairy-products": "Produits laitiers",
    "product-water-treatment": "Traitement de l'eau",
    "product-process": "Processus",
    "product-syrup-room": "Salle de sirop",
    "product-continuous-ink-jet": "Jet d'encre continu",
    "product-thermal-transfer-printers": "Imprimantes à transfert thermique",
    "product-large-character-printers": "Imprimantes haute résolution à gros caractères",
    "product-laser-printer": "Imprimante laser",
    "product-print-apply-labeling": "Machines d'étiquetage impression-application",
    "product-thermal-ink-jet": "Imprimantes à jet d'encre thermique",
    "product-valve-jet-printers": "Imprimantes à gros caractères valve-jet",
    "product-inks-additives": "Encres et additifs",
    "product-ribbons-labels": "Rubans et étiquettes",
    "product-colos-software": "Solutions logicielles industrielles CoLOS",
    "product-legacy-printers": "Imprimantes héritées",
    "product-laser-guided-vehicles": "Véhicules guidés par laser",
    "product-storage-system": "Système de stockage",
    "product-pallet-control": "Contrôle de palette",
    "product-automatic-palletizers": "Palettiseurs automatiques",
    "product-stretch-wrappers": "Enrobeuses étirables",
    "product-robotic-labeller": "Étiqueteuse robotique",
    "product-palletizing-systems": "Systèmes de palettisation et dépalettisation",
    "product-automated-warehouses": "Entrepôts automatisés",
    "product-hard-seltzer": "Hard Seltzer",
    "product-distilling": "Distillation",
    "product-edible-oil": "Huile comestible",
    "product-liquid": "Liquide",
    // Service descriptions
    "service-sales-1": "Présence SBA depuis plus de 25 ans",
    "service-sales-2": "Plus de 3000 installations à travers l'Afrique",
    "service-sales-3": "Proximité avec nos clients",
    "service-sales-4": "Visites régulières d'usine et de clients",
    "service-sales-5": "Ventes et conseils sur les équipements",
    "service-sales-6": "Prospection et études de marché.",
    "service-sales-7": "Une équipe expérimentée et professionnelle.",
    "service-sales-8": "Bonne référence de marché sur le territoire",
    "service-sales-9": "Services locaux, connaissances et flexibilité dans ces marchés difficiles.",
    "service-sales-10": "Accommodation de paiement local aux clients.",
    "service-after-sales-1": "Près de 100 ingénieurs formés par les fabricants d'origine en services mécaniques / électriques / d'automatisation basés en Afrique pour couvrir les services connexes.",
    "service-after-sales-2": "Support sur mesure",
    "service-after-sales-3": "Options et mises à niveau",
    "service-after-sales-4": "Maintenance optionnelle des pièces et sous-systèmes à la ligne de production complète.",
    "service-after-sales-5": "Suivi constant.",
    "service-after-sales-6": "Équipe dédiée pour toutes les demandes après-vente des clients.",
    "service-after-sales-7": "Diagnostic d'équipement et conseil pour le support de maintenance annuel.",
    "service-after-sales-8": "Solutions de package basées sur le temps et les matériaux.",
    "service-after-sales-9": "Contrats de maintenance et services d'ingénierie intégrés.",
    "service-spare-parts-1": "Administrateurs de pièces de rechange dédiés",
    "service-spare-parts-2": "Stock disponible dans chaque bureau SBA",
    "service-spare-parts-3": "Livraison express :",
    "service-spare-parts-4": "Livraison HandCarry",
    "service-spare-parts-5": "Livraison porte à porte",
    "service-spare-parts-6": "Livraison d'urgence en 24h",
    "service-spare-parts-7": "Traitement rapide de toutes les demandes : devis, commande, livraison",
    "service-spare-parts-8": "Paiement en devise locale dans tous les pays où SBA est situé",
    "service-spare-parts-9": "Conditions de paiement flexibles",
  }
};

let currentLang = localStorage.getItem('sba-language') || 'en';

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('sba-language', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      // Handle different element types
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else if (el.tagName === 'BUTTON') {
        el.textContent = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
}

// initialize with saved language
updateLanguage(currentLang);

// event listeners on flags
const flags = document.querySelectorAll('.flag');
flags.forEach(flag => {
  flag.addEventListener('click', () => {
    const lang = flag.getAttribute('data-lang');
    if (lang && lang !== currentLang) {
      updateLanguage(lang);
    }
  });
});
// END OF LANGUAGE SWITCHER



// Style hero link wrappers and enable natural navigation
const heroLinks = document.querySelectorAll('.hero-images a');
heroLinks.forEach(link => {
  link.style.cursor = 'pointer';
  // additional click handling can be added here if needed
});


// ABOUT section reveal on scroll
document.addEventListener('DOMContentLoaded', function() {
  const aboutSection = document.querySelector('.about-section.reveal');
  if (!aboutSection) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        entry.target.classList.remove('reveal');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.25
  });

  observer.observe(aboutSection);
});

// END OF ABOUT SECTION REVEAL



// Image slider functionality
document.addEventListener('DOMContentLoaded', function () {

  const slider = document.getElementById('image-slider');
  const leftArrow  = document.getElementById('left-arrow');
  const rightArrow = document.getElementById('right-arrow');

  if (!slider || !leftArrow || !rightArrow) {
    console.warn("Slider or arrows not found");
    return;
  }

  const slides = slider.querySelectorAll('img');
  const totalSlides = slides.length;
  let currentIndex = 0;

  function updateSlider() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  // Click handlers
  rightArrow.addEventListener('click', nextSlide);
  leftArrow.addEventListener('click', prevSlide);

   // Optional: auto play (every 4.5 seconds)
  let autoInterval = setInterval(nextSlide, 4500);

  // Pause when hovering
  slider.parentElement.addEventListener('mouseenter', () => {
    clearInterval(autoInterval);
  });

  slider.parentElement.addEventListener('mouseleave', () => {
    autoInterval = setInterval(nextSlide, 4500);
  });

  // Very basic touch support
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  slider.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 60) nextSlide();
    if (touchEndX - touchStartX > 60) prevSlide();
  }, { passive: true });

  // Show first slide
  updateSlider();
});
// END OF IMAGE SLIDER



// Trust slide functionality
document.addEventListener('DOMContentLoaded', function () {
  const trustSlide = document.querySelector('.trust-slide');
  if (!trustSlide) return;

  const trustImages = trustSlide.querySelectorAll('img');
  if (trustImages.length === 0) return;

  let trustIndex = 0;

  function showTrustImage(index) {
    trustImages.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function nextTrustImage() {
    trustIndex = (trustIndex + 1) % trustImages.length;
    showTrustImage(trustIndex);
  }

  // Show first image
  showTrustImage(trustIndex);

  // Auto transition every 3 seconds
  setInterval(nextTrustImage, 3000);
});

// END OF INDEX HTML PAGE 




// PARTNER CARDS
// Partner cards: support click/tap focus overlay behavior for hover-first interactions
document.addEventListener('DOMContentLoaded', function() {
  const logoCards = document.querySelectorAll('.logo-card');
  if (!logoCards.length) return;

  let activeCard = null;

  logoCards.forEach(card => {
    card.setAttribute('tabindex', '0');

    card.addEventListener('click', function(event) {
      // if user clicked the actual website link, preserve navigation
      if (event.target.closest('.website-link')) {
        return;
      }

      event.preventDefault();

      if (card.classList.contains('is-active')) {
        card.classList.remove('is-active');
        activeCard = null;
      } else {
        if (activeCard && activeCard !== card) {
          activeCard.classList.remove('is-active');
        }
        card.classList.add('is-active');
        activeCard = card;
      }
    });

    card.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.click();
      }
    });
  });

  document.addEventListener('click', function(event) {
    if (!event.target.closest('.logo-card') && activeCard) {
      activeCard.classList.remove('is-active');
      activeCard = null;
    }
  });
});
// END OF PARTNER CARDS











// CONTACT FORM VALIDATION
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    alert('Thank you for contacting us! We will get back to you soon.');
    form.reset();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});









// OUR SERVICES
// Our Services hovering sliding behavior
(function () {
  const cards = document.querySelectorAll(".service-card");
  const wrapper = document.querySelector(".services-grid-wrapper");

  if (!cards.length || !wrapper) return;

  const clearState = () => {
    cards.forEach((item) => {
      item.classList.remove("active", "inactive");
    });
  };

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      cards.forEach((other) => {
        other.classList.toggle("inactive", other !== card);
      });
      card.classList.add("active");
    });

    card.addEventListener("mouseleave", () => {
      clearState();
    });

    card.addEventListener("focus", () => {
      card.classList.add("active");
      cards.forEach((other) => {
        if (other !== card) other.classList.add("inactive");
      });
    });

    card.addEventListener("blur", () => {
      clearState();
    });
  });

  wrapper.addEventListener("mouseleave", clearState);
})();

// Randomize service card images at page load
(function () {
  const serviceImagePools = {
    sales: [
      "https://images.unsplash.com/photo-1581091870620-8a9d8f3d9766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1532453288672-3e8d68e74528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    ],
    "after-sales": [
      "https://images.unsplash.com/photo-1627460151005-0e9f8f21f7d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    ],
    "spare-parts": [
      "https://images.unsplash.com/photo-1612485481691-92f5b7abd3b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1581092580490-2e4dfdffee3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    ],
  };

  const cards = document.querySelectorAll(".service-card");
  cards.forEach((card) => {
    const type = card.dataset.service;
    const pool = serviceImagePools[type] || [];
    if (!pool.length) return;
    const randomUrl = pool[Math.floor(Math.random() * pool.length)];
    const bg = card.querySelector(".card-bg");
    if (bg) {
      // Preload the image to ensure it loads before setting as background
      const img = new Image();
      img.onload = function() {
        bg.style.backgroundImage = `url('${randomUrl}')`;
      };
      img.onerror = function() {
        // If Unsplash image fails, keep the fallback image from CSS
        console.warn(`Failed to load image: ${randomUrl}`);
      };
      img.src = randomUrl;
    }
  });
})();




// OFFICE HTML
// Offices map with Leaflet - Enhanced Vector-Based Interactive Map
(() => {
  const officeCards = Array.from(
    document.querySelectorAll(".office-card[data-country]"),
  );

  // Initialize map centered on Africa
  const map = L.map("map", {
    attributionControl: false,
    zoomControl: true,
  }).setView([0, 20], 3);

  // Add dark vector tile layer for better aesthetics
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
    {
      attribution: "© OpenStreetMap, © CartoDB",
      maxZoom: 19,
    },
  ).addTo(map);

  // Add subtle labels layer
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/dark_only/{z}/{x}/{y}{r}.png",
    {
      maxZoom: 19,
      opacity: 0.12,
    },
  ).addTo(map);

  // Office data with coordinates, details, and emoji flags
  const offices = [
    {
      code: "NG",
      name: "Nigeria",
      flag: "🇳🇬",
      lat: 6.5244,
      lng: 3.3792,
      city: "Lagos",
      address: "7, Oba Akinjobi Way, Ikeja GRA",
    },
    {
      code: "CI",
      name: "Côte d'Ivoire",
      flag: "🇨🇮",
      lat: 5.36,
      lng: -4.0083,
      city: "Abidjan",
      address: "Rue Paul Langevin",
    },
    {
      code: "KE",
      name: "Kenya",
      flag: "🇰🇪",
      lat: -1.2864,
      lng: 36.8172,
      city: "Nairobi",
      address: "Westside Towers, 7th Floor",
    },
    {
      code: "AO",
      name: "Angola",
      flag: "🇦🇴",
      lat: -8.8147,
      lng: 13.2302,
      city: "Luanda",
      address: "Bairro Benfica Gleba Gu 11",
    },
    {
      code: "CG",
      name: "Congo",
      flag: "🇨🇬",
      lat: -4.2634,
      lng: 15.2429,
      city: "Brazzaville",
      address: "Quartier Batignolles",
    },
    {
      code: "CD",
      name: "Democratic Republic of the Congo",
      flag: "🇨🇩",
      lat: -4.4419,
      lng: 15.2663,
      city: "Kinshasa",
      address: "11 Avenue Mbandaka",
    },
  ];

  const markers = {};
  const countryToCard = {};

  officeCards.forEach((card) => {
    const code = card.dataset.country;
    if (code) countryToCard[code] = card;
  });

  // Create custom styled markers for each office
  offices.forEach((office) => {
    const pulseMarker = L.divIcon({
      className: "custom-marker-container",
      html: `<div class="marker-pulse"></div><div class="marker-dot"><span class="marker-flag">${office.flag}</span></div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
      popupAnchor: [0, -16],
    });

    const marker = L.marker([office.lat, office.lng], {
      icon: pulseMarker,
    }).addTo(map);

    const popupContent = `
      <div class="office-popup">
        <strong>${office.flag} ${office.name}</strong>
        <div class="popup-city">${office.city}</div>
        <div class="popup-address">${office.address}</div>
      </div>
    `;

    marker.bindPopup(popupContent, {
      className: "office-popup-container",
      closeButton: false,
      offset: [0, -10],
    });

    markers[office.code] = marker;

    marker.on("mouseover", () => {
      highlightOffice(office.code);
      marker.openPopup();
    });

    marker.on("mouseout", () => {
      clearHighlights();
      marker.closePopup();
    });

    marker.on("click", () => {
      map.setView([office.lat, office.lng], 5);
    });
  });

  const highlightOffice = (code) => {
    officeCards.forEach((card) => {
      card.classList.toggle("is-active", card.dataset.country === code);
    });
    // Highlight marker
    document.querySelectorAll(".custom-marker-container").forEach((m) => {
      m.classList.remove("marker-active");
    });
    if (markers[code]) {
      markers[code].getElement().classList.add("marker-active");
    }
  };

  const clearHighlights = () => {
    officeCards.forEach((card) => {
      card.classList.remove("is-active");
    });
    document.querySelectorAll(".custom-marker-container").forEach((m) => {
      m.classList.remove("marker-active");
    });
  };

  // Add interactivity to office cards
  officeCards.forEach((card) => {
    const code = card.dataset.country;
    if (!code || !markers[code]) return;

    card.addEventListener("pointerenter", () => {
      highlightOffice(code);
      markers[code].openPopup();
    });

    card.addEventListener("pointerleave", () => {
      clearHighlights();
      markers[code].closePopup();
    });

    card.addEventListener("click", () => {
      const office = offices.find((o) => o.code === code);
      if (office) {
        map.setView([office.lat, office.lng], 5);
        markers[code].openPopup();
      }
    });
  });

  // Enable dragging for desktop users to allow map exploration
  if (!L.Browser.mobile) {
    map.dragging.enable();
  }
})();

