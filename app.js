/**
 * FOREVER TATTOO SALON - INTERACTIVE SCRIPT (WITH MULTI-LANGUAGE I18N SUPPORT)
 * Supported languages: Polish (pl), English (en), Russian (ru)
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. I18N TRANSLATIONS DICTIONARY
     ========================================================================== */
  const translations = {
    pl: {
      page_title: "Forever — Studio Tatuażu Artystycznego | Warszawa",
      nav_about: "O NAS",
      nav_price: "CENNIK",
      nav_team: "ARTYŚCI",
      nav_works: "PORTFOLIO",
      nav_fitter: "PRZYMIERZALNIA",
      nav_contacts: "KONTAKT",
      hero_subtitle: "STUDIO TATUAŻU",
      hero_btn: "ZAPISZ SIĘ",
      hero_fitter_btn: "PRZYMIERZ TATUAŻ",
      about_badge: "1/ O NAS",
      about_p1: "Forever to przestrzeń twórcza, w której rodzi się sztuka pozostająca z Tobą na zawsze. Nasz zespół profesjonalnych artystów i mistrzów tatuażu stawia sobie za misję pomóc Ci zyskać wyjątkową ozdobę, wyrazić Twoją indywidualność i urzeczywistnić najśmielsze pomysły.",
      about_p2: "Pracujemy wyłącznie na nowoczesnym, certyfikowanym sprzęcie, używając w 100% sterylnych materiałów jednorazowych oraz pigmentów klasy premium. Twoje bezpieczeństwo, zdrowie i komfort są dla nas absolutnym priorytetem.",
      team_badge: "2/ NASZ ZESPÓŁ",
      master1_rank: "PRO - TATUAŻYSTA",
      master1_name: "Andriej Wołkow",
      master1_exp: "5 lat doświadczenia",
      master2_rank: "GOLD - TATUAŻYSTA",
      master2_name: "Sergiusz Tajlin",
      master2_exp: "9 lat doświadczenia",
      master3_rank: "TOP - TATUAŻYSTA",
      master3_name: "Ilia Szelkow",
      master3_exp: "3 lata doświadczenia",
      choose_master: "Wybierz artystę",
      price_badge: "3/ CENNIK",
      price_header_service: "Usługi tatuażu",
      price_header_cost: "Cena w zł",
      price_item_1_name: "Tatuaż artystyczny / autorski",
      price_item_1_val: "od 350 zł",
      price_item_2_name: "Tatuaż-napis / minimalistyczny",
      price_item_2_val: "od 150 zł",
      price_item_3_name: "Tatuaż na bliznach / maskowanie",
      price_item_3_val: "od 250 zł",
      price_item_4_name: "Korekta i odświeżenie tatuażu",
      price_item_4_val: "od 200 zł",
      price_item_5_name: "Cover-up (przykrycie starego tatuażu)",
      price_item_5_val: "od 250 zł",
      price_item_6_name: "Sesja tatuażu (2-3 godziny)",
      price_item_6_val: "od 450 zł",
      price_item_7_name: "Laserowe usuwanie tatuażu",
      price_item_7_val: "od 150 zł, 5-10 zł / cm²",
      works_badge: "4/ NASZE PRACE",
      work_caption_0: "Rękaw w stylu orientalnym",
      work_caption_1: "Duża kompozycja na całe plecy",
      work_caption_2: "Ornament i geometria",
      work_caption_3: "Grafika i realizm",
      work_caption_4: "Szczegółowy blackwork",
      work_caption_5: "Tatuaż artystyczny",
      contacts_badge: "5/ KONTAKT",
      contacts_slogan: "CZEKAMY NA CIEBIE<br>Z NIECIERPLIWOŚCIĄ!",
      footer_copy: "2025 Forever Tattoo Sp. z o.o.",
      footer_privacy: "Polityka prywatności",
      modal_booking_title: "ZAPISZ SIĘ NA SESJĘ",
      modal_booking_desc: "Zostaw swoje dane kontaktowe. Oddzwonimy w ciągu 15 minut, aby omówić projekt i dobrać dogodny termin.",
      form_label_name: "Twoje imię *",
      form_placeholder_name: "np. Jan",
      form_label_phone: "Numer telefonu *",
      form_placeholder_phone: "+48 ___ ___ ___",
      form_label_master: "Wybierz artystę",
      opt_master_any: "Dowolny artysta (dobierzemy do stylu tatuażu)",
      opt_master_1: "Sergiusz Tajlin (GOLD artysta, 9 lat doświadczenia)",
      opt_master_2: "Andriej Wołkow (PRO artysta, 5 lat doświadczenia)",
      opt_master_3: "Ilia Szelkow (TOP artysta, 3 lata doświadczenia)",
      form_label_service: "Interesująca usługa",
      opt_service_1: "Tatuaż artystyczny / autorski",
      opt_service_2: "Tatuaż-napis / minimalistyczny",
      opt_service_3: "Tatuaż na bliznach / maskowanie",
      opt_service_4: "Korekta i odświeżenie tatuażu",
      opt_service_5: "Cover-up (przykrycie starego tatuażu)",
      opt_service_6: "Sesja tatuażu (2-3 godziny)",
      opt_service_7: "Darmowa konsultacja i projekt",
      opt_service_8: "Laserowe usuwanie tatuażu",
      form_label_comment: "Komentarz lub link do inspiracji",
      form_placeholder_comment: "Opisz swój pomysł, przybliżony rozmiar i miejsce na ciele...",
      form_agreement: "Wyrażam zgodę na przetwarzanie danych osobowych (RODO)",
      form_submit: "WYŚLIJ ZGŁOSZENIE",
      success_title: "DZIĘKUJEMY ZA ZGŁOSZENIE!",
      success_desc: "Otrzymaliśmy Twoje zgłoszenie. Skontaktujemy się z Tobą w ciągu 15 minut w celu potwierdzenia terminu sesji.",
      success_btn: "WSPANIALE",
      privacy_title: "Polityka Prywatności",
      privacy_p1: "Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazywanych przez Użytkowników w związku z korzystaniem z usług studia tatuażu «Forever» (zgodnie z RODO / GDPR).",
      privacy_p2: "1. Zbieramy wyłącznie dane (imię, numer telefonu, adres e-mail), które są niezbędne do kontaktu, konsultacji i rezerwacji terminu sesji tatuażu.",
      privacy_p3: "2. Twoje dane osobowe nigdy nie są przekazywane podmiotom trzecim bez Twojej wyraźnej zgody.",
      privacy_p4: "3. Masz prawo wglądu, sprostowania lub żądania usunięcia swoich danych w dowolnym momencie, kontaktując się z nami telefonicznie lub mailowo."
    },

    en: {
      page_title: "Forever — Artistic Tattoo Studio | Warsaw, Poland",
      nav_about: "ABOUT US",
      nav_price: "PRICING",
      nav_team: "ARTISTS",
      nav_works: "PORTFOLIO",
      nav_fitter: "PRZYMIERZALNIA",
      nav_contacts: "CONTACT",
      hero_subtitle: "TATTOO STUDIO",
      hero_btn: "BOOK A SESSION",
      hero_fitter_btn: "TRY ON TATTOO",
      about_badge: "1/ ABOUT US",
      about_p1: "Forever is a creative sanctuary where art that stays with you forever is born. Our team of professional artists and masters sees its mission in helping you acquire a unique adornment, express your individuality, and bring your boldest ideas to life.",
      about_p2: "We work exclusively with modern, certified equipment, utilizing 100% sterile disposable materials and premium-class pigments. Your safety, health, and comfort are our absolute priority.",
      team_badge: "2/ OUR TEAM",
      master1_rank: "PRO - TATTOO ARTIST",
      master1_name: "Andrey Volkov",
      master1_exp: "5 years experience",
      master2_rank: "GOLD - TATTOO ARTIST",
      master2_name: "Sergey Taylin",
      master2_exp: "9 years experience",
      master3_rank: "TOP - TATTOO ARTIST",
      master3_name: "Ilya Shelkov",
      master3_exp: "3 years experience",
      choose_master: "Select artist",
      price_badge: "3/ PRICING",
      price_header_service: "Tattoo Services",
      price_header_cost: "Price in PLN",
      price_item_1_name: "Custom & Artistic Tattoo",
      price_item_1_val: "from 350 PLN",
      price_item_2_name: "Lettering / Minimalist Tattoo",
      price_item_2_val: "from 150 PLN",
      price_item_3_name: "Scar Camouflage & Cover",
      price_item_3_val: "from 250 PLN",
      price_item_4_name: "Tattoo Touch-up & Refresh",
      price_item_4_val: "from 200 PLN",
      price_item_5_name: "Cover-up (Old Tattoo Cover)",
      price_item_5_val: "from 250 PLN",
      price_item_6_name: "Single Tattoo Session (2-3 hrs)",
      price_item_6_val: "from 450 PLN",
      price_item_7_name: "Laser Tattoo Removal",
      price_item_7_val: "from 150 PLN, 5-10 PLN / cm²",
      works_badge: "4/ OUR WORKS",
      work_caption_0: "Oriental Japanese Style Sleeve",
      work_caption_1: "Full Back Dragon Composition",
      work_caption_2: "Ornamental & Geometry Blackwork",
      work_caption_3: "Graphic Realism Tattoo",
      work_caption_4: "Detailed Contrast Blackwork",
      work_caption_5: "Custom Artistic Tattoo",
      contacts_badge: "5/ CONTACT",
      contacts_slogan: "WE ARE WAITING<br>FOR YOU!",
      footer_copy: "2025 Forever Tattoo Sp. z o.o.",
      footer_privacy: "Privacy Policy",
      modal_booking_title: "BOOK A SESSION",
      modal_booking_desc: "Leave your contact details and we will call you back within 15 minutes to discuss your design and choose a convenient time.",
      form_label_name: "Your Name *",
      form_placeholder_name: "e.g. John",
      form_label_phone: "Phone Number *",
      form_placeholder_phone: "+48 ___ ___ ___",
      form_label_master: "Choose an Artist",
      opt_master_any: "Any artist (we will match by style)",
      opt_master_1: "Sergey Taylin (GOLD artist, 9 yrs exp)",
      opt_master_2: "Andrey Volkov (PRO artist, 5 yrs exp)",
      opt_master_3: "Ilya Shelkov (TOP artist, 3 yrs exp)",
      form_label_service: "Service Required",
      opt_service_1: "Custom & Artistic Tattoo",
      opt_service_2: "Lettering / Minimalist Tattoo",
      opt_service_3: "Scar Camouflage & Cover",
      opt_service_4: "Tattoo Touch-up & Refresh",
      opt_service_5: "Cover-up (Old Tattoo Cover)",
      opt_service_6: "Single Tattoo Session (2-3 hrs)",
      opt_service_7: "Free Consultation & Sketch",
      opt_service_8: "Laser Tattoo Removal",
      form_label_comment: "Comment or Reference Link",
      form_placeholder_comment: "Describe your idea, estimated size, and placement on the body...",
      form_agreement: "I agree to the processing of personal data (GDPR)",
      form_submit: "SUBMIT REQUEST",
      success_title: "THANK YOU FOR YOUR REQUEST!",
      success_desc: "We have received your request and will contact you within 15 minutes to confirm your session appointment.",
      success_btn: "EXCELLENT",
      privacy_title: "Privacy Policy",
      privacy_p1: "This Privacy Policy specifies the principles of processing and protection of personal data provided by Users in connection with using the services of «Forever» Tattoo Studio (in accordance with GDPR).",
      privacy_p2: "1. We only collect information (name, phone number, email address) that is strictly necessary to contact you, consult, and book a tattoo session.",
      privacy_p3: "2. Your personal data is never disclosed to third parties without your explicit consent.",
      privacy_p4: "3. You have the right to inspect, correct, or request deletion of your personal data at any time by contacting us."
    },

    ru: {
      page_title: "Forever — Студия художественной татуировки | Польша",
      nav_about: "О НАС",
      nav_price: "ПРАЙС",
      nav_team: "МАСТЕРА",
      nav_works: "РАБОТЫ",
      nav_fitter: "ПРИМЕРОЧНАЯ",
      nav_contacts: "КОНТАКТЫ",
      hero_subtitle: "ТАТУ САЛОН",
      hero_btn: "ЗАПИСАТЬСЯ",
      hero_fitter_btn: "ПРИМЕРИТЬ ТАТУ",
      about_badge: "1/ О НАС",
      about_p1: "Forever – творческое пространство, где рождается искусство, которое останется с вами навсегда. Наша команда профессиональных художников и мастеров видит свою миссию в том, чтобы помочь вам обрести уникальное украшение, выразить вашу индивидуальность и воплотить в жизнь самые смелые идеи.",
      about_p2: "Мы работаем только с современным и безопасным оборудованием, используем исключительно стерильные одноразовые материалы и лучшие пигменты премиум-класса. Ваше здоровье и комфорт — наш абсолютный приоритет.",
      team_badge: "2/ НАША КОМАНДА",
      master1_rank: "PRO - ТАТУ МАСТЕР",
      master1_name: "Андрей Волков",
      master1_exp: "Опыт 5 лет",
      master2_rank: "GOLD - ТАТУ МАСТЕР",
      master2_name: "Сергей Тайлин",
      master2_exp: "Опыт 9 лет",
      master3_rank: "TOP - ТАТУ МАСТЕР",
      master3_name: "Илья Шелков",
      master3_exp: "Опыт 3 года",
      choose_master: "Выбрать мастера",
      price_badge: "3/ ПРАЙС",
      price_header_service: "Услуги тату",
      price_header_cost: "Цена в zł (PLN)",
      price_item_1_name: "Художественная татуировка",
      price_item_1_val: "от 350 zł",
      price_item_2_name: "Татуировка-надпись / минимализм",
      price_item_2_val: "от 150 zł",
      price_item_3_name: "Татуировка на шрамах / перекрытие",
      price_item_3_val: "от 250 zł",
      price_item_4_name: "Коррекция и обновление тату",
      price_item_4_val: "от 200 zł",
      price_item_5_name: "Cover-up (перекрытие старого тату)",
      price_item_5_val: "от 250 zł",
      price_item_6_name: "Один сеанс тату (2-3 часа)",
      price_item_6_val: "от 450 zł",
      price_item_7_name: "Удаление тату лазером",
      price_item_7_val: "от 150 zł, 5-10 zł за кв. см.",
      works_badge: "4/ НАШИ РАБОТЫ",
      work_caption_0: "Рукав в японском стиле",
      work_caption_1: "Масштабная татуировка на всю спину",
      work_caption_2: "Орнаментал и геометрия",
      work_caption_3: "Графика и реализм",
      work_caption_4: "Детальный блэкворк",
      work_caption_5: "Художественная татуировка",
      contacts_badge: "5/ КОНТАКТЫ",
      contacts_slogan: "МЫ ЖДЕМ ВАС С<br>НЕТЕРПЕНИЕМ!",
      footer_copy: "2025 Forever Tattoo Sp. z o.o.",
      footer_privacy: "Политика конфиденциальности",
      modal_booking_title: "ЗАПИСАТЬСЯ НА СЕАНС",
      modal_booking_desc: "Оставьте ваши контакты, и мы перезвоним в течение 15 минут для обсуждения эскиза и выбора времени.",
      form_label_name: "Ваше имя *",
      form_placeholder_name: "Например, Александр",
      form_label_phone: "Телефон *",
      form_placeholder_phone: "+48 ___ ___ ___",
      form_label_master: "Выберите мастера",
      opt_master_any: "Любой мастер (подберем под ваш стиль)",
      opt_master_1: "Сергей Тайлин (GOLD мастер, опыт 9 лет)",
      opt_master_2: "Андрей Волков (PRO мастер, опыт 5 лет)",
      opt_master_3: "Илья Шелков (TOP мастер, опыт 3 года)",
      form_label_service: "Интересующая услуга",
      opt_service_1: "Художественная татуировка",
      opt_service_2: "Татуировка-надпись / минимализм",
      opt_service_3: "Татуировка на шрамах / камуфляж",
      opt_service_4: "Коррекция и обновление тату",
      opt_service_5: "Cover-up (перекрытие старого тату)",
      opt_service_6: "Один сеанс тату (2-3 часа)",
      opt_service_7: "Бесплатная консультация и разработка эскиза",
      opt_service_8: "Удаление тату лазером",
      form_label_comment: "Комментарий или ссылка на эскиз",
      form_placeholder_comment: "Опишите вашу идею, размер или желаемое место нанесения...",
      form_agreement: "Согласен на обработку персональных данных (RODO)",
      form_submit: "ОТПРАВИТЬ ЗАЯВКУ",
      success_title: "СПАСИБО ЗА ЗАЯВКУ!",
      success_desc: "Мы получили ваш запрос и свяжемся с вами в течение 15 минут для подтверждения даты сеанса.",
      success_btn: "ОТЛИЧНО",
      privacy_title: "Политика конфиденциальности",
      privacy_p1: "Настоящая Политика конфиденциальности персональных данных действует в отношении всей информации, которую тату салон «Forever» может получить о Пользователе во время использования сайта (в соответствии с RODO / GDPR).",
      privacy_p2: "1. Мы собираем только те данные (имя, номер телефона), которые необходимы для связи с вами и согласования деталей записи на тату-сеанс.",
      privacy_p3: "2. Ваши персональные данные никогда не передаются третьим лицам без вашего согласия.",
      privacy_p4: "3. Вы можете в любой момент отозвать свое согласие, связавшись с нами по телефону или email."
    }
  };

  let currentLang = localStorage.getItem('forever_tattoo_lang') || 'pl';

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'pl';
    currentLang = lang;
    localStorage.setItem('forever_tattoo_lang', lang);
    document.documentElement.lang = lang;

    const dict = translations[lang];

    // Update text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (key === 'contacts_slogan') {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Update placeholder elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update privacy policy text
    const privacyContainer = document.getElementById('privacyTextContainer');
    if (privacyContainer) {
      privacyContainer.innerHTML = `
        <p>${dict.privacy_p1}</p>
        <p>${dict.privacy_p2}</p>
        <p>${dict.privacy_p3}</p>
        <p>${dict.privacy_p4}</p>
      `;
    }

    // Update active class on buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update lightbox captions cache
    updateWorksData();
  }

  // Handle language switch clicks
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.dataset.lang);
    });
  });

  /* ==========================================================================
     2. NAVIGATION & MOBILE MENU
     ========================================================================== */
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('active');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Header background on scroll
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(11, 11, 11, 0.95)';
      header.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
    } else {
      header.style.background = 'rgba(11, 11, 11, 0.75)';
      header.style.borderBottomColor = 'rgba(255, 255, 255, 0.04)';
    }
  });

  /* ==========================================================================
     3. BOOKING MODAL
     ========================================================================== */
  const bookingModal = document.getElementById('bookingModal');
  const openBookingBtns = document.querySelectorAll('.open-booking-btn');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const selectMaster = document.getElementById('selectMaster');
  const bookingForm = document.getElementById('bookingForm');
  const modalFormContainer = document.getElementById('modalFormContainer');
  const modalSuccess = document.getElementById('modalSuccess');
  const successOkBtn = document.getElementById('successOkBtn');
  const phoneInput = document.getElementById('clientPhone');

  function openModal(presetMaster = null) {
    if (presetMaster && selectMaster) {
      for (let option of selectMaster.options) {
        if (option.value.includes(presetMaster)) {
          option.selected = true;
          break;
        }
      }
    }
    modalFormContainer.style.display = 'block';
    modalSuccess.style.display = 'none';
    bookingModal.classList.add('active');
    bookingModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    bookingModal.classList.remove('active');
    bookingModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openBookingBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (mobileDrawer.classList.contains('active')) {
        mobileDrawer.classList.remove('active');
        menuToggle.classList.remove('active');
      }
      const presetMaster = btn.dataset.presetMaster || null;
      openModal(presetMaster);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        closeModal();
      }
    });
  }

  // Polish Phone number input auto-formatting (+48 123 456 789)
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.startsWith('48')) {
        value = value.substring(2);
      }

      let formatted = '+48';
      if (value.length > 0) {
        formatted += ' ' + value.substring(0, 3);
      }
      if (value.length >= 4) {
        formatted += ' ' + value.substring(3, 6);
      }
      if (value.length >= 7) {
        formatted += ' ' + value.substring(6, 9);
      }

      e.target.value = formatted;
    });
  }

  // Form submission
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(bookingForm);
      const data = Object.fromEntries(formData.entries());
      console.log(`Nowe zgłoszenie (${currentLang.toUpperCase()}):`, data);

      modalFormContainer.style.display = 'none';
      modalSuccess.style.display = 'block';
      bookingForm.reset();
    });
  }

  if (successOkBtn) {
    successOkBtn.addEventListener('click', closeModal);
  }

  /* ==========================================================================
     4. PRIVACY POLICY MODAL
     ========================================================================== */
  const privacyModal = document.getElementById('privacyModal');
  const privacyBtn = document.getElementById('privacyBtn');
  const privacyCloseBtn = document.getElementById('privacyCloseBtn');

  if (privacyBtn && privacyModal) {
    privacyBtn.addEventListener('click', () => {
      privacyModal.classList.add('active');
      privacyModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });

    privacyCloseBtn.addEventListener('click', () => {
      privacyModal.classList.remove('active');
      privacyModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });

    privacyModal.addEventListener('click', (e) => {
      if (e.target === privacyModal) {
        privacyModal.classList.remove('active');
        privacyModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  /* ==========================================================================
     5. PORTFOLIO SLIDER / CAROUSEL
     ========================================================================== */
  const track = document.getElementById('worksTrack');
  const cards = document.querySelectorAll('.work-card');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  const dotsContainer = document.getElementById('sliderDots');

  let currentIndex = 0;

  function getVisibleCardsCount() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
  }

  function getMaxIndex() {
    const visible = getVisibleCardsCount();
    return Math.max(0, cards.length - visible);
  }

  function updateSlider() {
    const visible = getVisibleCardsCount();
    const maxIdx = getMaxIndex();
    if (currentIndex > maxIdx) currentIndex = maxIdx;
    if (currentIndex < 0) currentIndex = 0;

    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = 22;
    const shift = currentIndex * (cardWidth + gap);

    track.style.transform = `translateX(-${shift}px)`;

    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });

    prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
    nextBtn.style.opacity = currentIndex === maxIdx ? '0.3' : '1';
  }

  function createDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const maxIdx = getMaxIndex();
    for (let i = 0; i <= maxIdx; i++) {
      const dot = document.createElement('button');
      dot.classList.add('slider-dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.setAttribute('aria-label', `Slajd ${i + 1}`);
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    }
  }

  if (prevBtn && nextBtn && track) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });

    nextBtn.addEventListener('click', () => {
      const maxIdx = getMaxIndex();
      if (currentIndex < maxIdx) {
        currentIndex++;
        updateSlider();
      }
    });

    createDots();
    updateSlider();

    window.addEventListener('resize', () => {
      createDots();
      updateSlider();
    });

    let startX = 0;
    let isSwiping = false;

    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isSwiping = true;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      if (!isSwiping) return;
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (diff > 40) {
        const maxIdx = getMaxIndex();
        if (currentIndex < maxIdx) {
          currentIndex++;
          updateSlider();
        }
      } else if (diff < -40) {
        if (currentIndex > 0) {
          currentIndex--;
          updateSlider();
        }
      }
      isSwiping = false;
    }, { passive: true });
  }

  /* ==========================================================================
     6. LIGHTBOX MODAL
     ========================================================================== */
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let activePhotoIndex = 0;
  let worksData = [];

  function updateWorksData() {
    const dict = translations[currentLang] || translations.pl;
    worksData = Array.from(cards).map((card, idx) => {
      const captionKey = card.dataset.captionKey;
      return {
        src: card.querySelector('.work-img').getAttribute('src'),
        caption: dict[captionKey] || 'Tatuaż Forever'
      };
    });
    if (lightboxModal.classList.contains('active')) {
      updateLightbox();
    }
  }

  function openLightbox(index) {
    activePhotoIndex = index;
    updateLightbox();
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function updateLightbox() {
    const item = worksData[activePhotoIndex];
    if (!item) return;
    lightboxImg.src = item.src;
    lightboxCaption.textContent = item.caption;
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      openLightbox(index);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      activePhotoIndex = (activePhotoIndex - 1 + worksData.length) % worksData.length;
      updateLightbox();
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      activePhotoIndex = (activePhotoIndex + 1) % worksData.length;
      updateLightbox();
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeLightbox();
      if (privacyModal) privacyModal.classList.remove('active');
    } else if (e.key === 'ArrowLeft' && lightboxModal.classList.contains('active')) {
      activePhotoIndex = (activePhotoIndex - 1 + worksData.length) % worksData.length;
      updateLightbox();
    } else if (e.key === 'ArrowRight' && lightboxModal.classList.contains('active')) {
      activePhotoIndex = (activePhotoIndex + 1) % worksData.length;
      updateLightbox();
    }
  });

  /* ==========================================================================
     7. PARALLAX EFFECT
     ========================================================================== */
  const watermarks = document.querySelectorAll('.watermark');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    watermarks.forEach((wm, i) => {
      const speed = 0.05 + (i * 0.02);
      wm.style.transform = `translateY(${scrollY * speed * (i % 2 === 0 ? 1 : -0.7)}px)`;
    });
  }, { passive: true });

  // Initial language application
  applyLanguage(currentLang);
});
