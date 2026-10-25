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
      page_title: "Forever — Studio Tatuażu Artystycznego | Wrocław",
      nav_about: "O NAS",
      nav_price: "CENNIK",
      nav_works: "PORTFOLIO",
      nav_reviews: "OPINIE",
      nav_fitter: "EDYTOR 3D",
      nav_contacts: "KONTAKT",
      hero_subtitle: "STUDIO TATUAŻU",
      hero_city: "WROCŁAW",
      hero_btn: "ZAPISZ SIĘ",
      hero_fitter_btn: "PRZYMIERZ TATUAŻ",
      about_badge: "O NAS",
      about_p1: "Forever to autorskie studio tatuażu we Wrocławiu, stworzone przez artystę tatuażu Oleksandra. To kameralna, bezpieczna przestrzeń, w której każdy projekt tworzony jest indywidualnie — z pełnym szacunkiem do anatomii ciała i unikalnego stylu klienta.",
      about_p2: "Pracujemy wyłącznie na nowoczesnym, certyfikowanym sprzęcie, używając w 100% sterylnych materiałów jednorazowych oraz hipoalergicznych pigmentów klasy premium. Sesje odbywają się w komfortowej atmosferze 1 na 1 w sercu Wrocławia.",
      price_badge: "CENNIK",
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
      works_badge: "NASZE PRACE",
      work_caption_0: "Rękaw w stylu orientalnym",
      work_caption_1: "Duża kompozycja na całe plecy",
      work_caption_2: "Ornament i geometria",
      work_caption_3: "Grafika i realizm",
      work_caption_4: "Szczegółowy blackwork",
      work_caption_5: "Tatuaż artystyczny",
      work_caption_6: "Gotycki portret i cienie",
      work_caption_7: "Mroczny wąż i motyw neotradycyjny",
      work_caption_8: "Floral botaniczny blackwork",
      work_caption_9: "Geometria i cienka linia",
      work_caption_10: "Mroczny anioł i skrzydła",
      work_caption_11: "Autorska kompozycja Oleksandra",
      reviews_badge: "OPINIE KLIENTÓW",
      reviews_rating_score: "5.0 / 5.0",
      reviews_rating_sub: "Google Maps • Wrocław",
      review1_name: "Mateusz K.",
      review1_city: "Wrocław",
      review1_text: "„Oleksandr to prawdziwy mistrz! Robiłem u niego autorski rękaw. Precyzja linii, dbałość o sterylność i genialne wyczucie kompozycji na ciele. Całość wygoiła się idealnie bez żadnych poprawek. Zdecydowanie polecam każdemu we Wrocławiu!”",
      review2_name: "Karolina W.",
      review2_city: "Wrocław",
      review2_text: "„Mój pierwszy tatuaż i nie mogłam trafić w lepsze ręce. Oleksandr stworzył projekt na podstawie moich luźnych pomysłów i dopracował go w przymierzalni 3D. Sesja przebiegła bezstresowo i niemal bezboleśnie. Atmosfera w salonie 10/10.”",
      review3_name: "Piotr D.",
      review3_city: "Wrocław",
      review3_text: "„Przyjechałem do Oleksandra na cover-up starego tatuażu. Niewielu tatuatorów chciało się tego podjąć, a on zamienił starą plamę w mroczne dzieło sztuki. Profesjonalizm i gotycki kunszt na najwyższym poziomie.”",
      review4_name: "Elena S.",
      review4_city: "Wrocław",
      review4_text: "„Świetna atmosfera, idealna sterylność i wielki talent. Oleksandr jest niezwykle cierpliwy i słucha klienta. Dziara na żebrach zrobiona bardzo delikatnie. Najlepszy tatuażysta we Wrocławiu!”",
      review5_name: "Jakub M.",
      review5_city: "Wrocław",
      review5_text: "„Pełen profesjonalizm od wstępnej konsultacji po opiekę pozabiegową. Indywidualne podejście, zero pośpiechu, sesja 1 na 1. Autorski wzór wygląda na żywo jeszcze lepiej niż na papierze. Wrócę na pewno!”",
      review6_name: "Zofia B.",
      review6_city: "Wrocław",
      review6_text: "„Piękne, czyste studio, świetna playlista i niesamowite umiejętności Oleksandra. Drobny, precyzyjny tatuaż na obojczyku wyszedł perfekcyjnie. Polecam z całego serca każdemu!”",
      review_verified: "Zweryfikowana wizyta",
      contacts_badge: "KONTAKT",
      contact_city_addr: "Wrocław, Polska",
      contacts_slogan: "CZEKAMY NA CIEBIE<br>Z NIECIERPLIWOŚCIĄ!",
      footer_copy: "2025 Forever Tattoo • Oleksandr • Wrocław, Polska",
      footer_privacy: "Polityka prywatności",
      modal_booking_title: "ZAPISZ SIĘ NA SESJĘ",
      modal_booking_desc: "Zostaw swoje dane kontaktowe. Oddzwonimy w ciągu 15 minut, aby omówić projekt i dobrać dogodny termin.",
      booking_artist_title: "Artysta tatuażu:",
      booking_artist_val: "Oleksandr • Forever Wrocław",
      form_label_name: "Twoje imię *",
      form_placeholder_name: "np. Jan",
      form_label_phone: "Numer telefonu *",
      form_placeholder_phone: "+48 ___ ___ ___",
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
      page_title: "Forever — Artistic Tattoo Studio | Wrocław, Poland",
      nav_about: "ABOUT US",
      nav_price: "PRICING",
      nav_works: "PORTFOLIO",
      nav_reviews: "REVIEWS",
      nav_fitter: "3D EDITOR",
      nav_contacts: "CONTACT",
      hero_subtitle: "TATTOO STUDIO",
      hero_city: "WROCŁAW",
      hero_btn: "BOOK A SESSION",
      hero_fitter_btn: "TRY ON TATTOO",
      about_badge: "ABOUT US",
      about_p1: "Forever is a private custom tattoo studio in Wrocław, created by tattoo artist Oleksandr. It is an intimate, safe sanctuary where every design is crafted individually with full respect to anatomy and your personal style.",
      about_p2: "We work exclusively with certified modern equipment, using 100% sterile single-use disposable materials and premium hypoallergenic pigments. Sessions are held 1-on-1 in a comfortable atmosphere in the heart of Wrocław.",
      price_badge: "PRICING",
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
      works_badge: "OUR WORKS",
      work_caption_0: "Oriental Japanese Style Sleeve",
      work_caption_1: "Full Back Dragon Composition",
      work_caption_2: "Ornamental & Geometry Blackwork",
      work_caption_3: "Graphic Realism Tattoo",
      work_caption_4: "Detailed Contrast Blackwork",
      work_caption_5: "Custom Artistic Tattoo",
      work_caption_6: "Gothic Portrait & Shading",
      work_caption_7: "Dark Neotraditional Snake",
      work_caption_8: "Floral Botanical Blackwork",
      work_caption_9: "Geometry & Fine-line",
      work_caption_10: "Dark Angel & Wings",
      work_caption_11: "Custom Piece by Oleksandr",
      reviews_badge: "CLIENT REVIEWS",
      reviews_rating_score: "5.0 / 5.0",
      reviews_rating_sub: "Google Maps • Wrocław",
      review1_name: "Mateusz K.",
      review1_city: "Wrocław",
      review1_text: "“Oleksandr is a true master! Got a full custom sleeve done here. Precision linework, top-notch hygiene, and an amazing eye for anatomical placement. Healed flawlessly without touch-ups. Highly recommended in Wrocław!”",
      review2_name: "Karolina W.",
      review2_city: "Wrocław",
      review2_text: "“My very first tattoo and I couldn't have chosen better. Oleksandr built the design based on my rough ideas and tuned it in 3D. The session was stress-free and virtually painless. 10/10 vibe!”",
      review3_name: "Piotr D.",
      review3_city: "Wrocław",
      review3_text: "“Came to Oleksandr for an old tattoo cover-up. Other artists hesitated, but he turned an old blunder into a dark masterpiece. Pure gothic craftsmanship at the highest standard.”",
      review4_name: "Elena S.",
      review4_city: "Wrocław",
      review4_text: "“Wonderful atmosphere, impeccable sterility, and immense artistic talent. Oleksandr is very patient and attentive. My rib tattoo was done so gently. The best tattoo artist in Wrocław!”",
      review5_name: "Jakub M.",
      review5_city: "Wrocław",
      review5_text: "“Utmost professionalism from the initial chat to aftercare. Individual approach, zero rush, private 1-on-1 session. The custom sketch looks even more stunning in ink. Definitely coming back!”",
      review6_name: "Zofia B.",
      review6_city: "Wrocław",
      review6_text: "“Clean and atmospheric studio, great music, and superb skills by Oleksandr. The delicate collarbone piece turned out immaculate. Heartily recommended!”",
      review_verified: "Verified client",
      contacts_badge: "CONTACT",
      contact_city_addr: "Wrocław, Poland",
      contacts_slogan: "WE ARE WAITING<br>FOR YOU!",
      footer_copy: "2025 Forever Tattoo • Oleksandr • Wrocław, Poland",
      footer_privacy: "Privacy Policy",
      modal_booking_title: "BOOK A SESSION",
      modal_booking_desc: "Leave your contact details and we will call you back within 15 minutes to discuss your design and choose a convenient time.",
      booking_artist_title: "Tattoo Artist:",
      booking_artist_val: "Oleksandr • Forever Wrocław",
      form_label_name: "Your Name *",
      form_placeholder_name: "e.g. John",
      form_label_phone: "Phone Number *",
      form_placeholder_phone: "+48 ___ ___ ___",
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
      page_title: "Forever — Авторская студия татуировки | Вроцлав, Польша",
      nav_about: "О НАС",
      nav_price: "ПРАЙС",
      nav_works: "РАБОТЫ",
      nav_reviews: "ОТЗЫВЫ",
      nav_fitter: "3D РЕДАКТОР",
      nav_contacts: "КОНТАКТЫ",
      hero_subtitle: "ТАТУ САЛОН",
      hero_city: "ВРОЦЛАВ",
      hero_btn: "ЗАПИСАТЬСЯ",
      hero_fitter_btn: "ПРИМЕРИТЬ ТАТУ",
      about_badge: "О НАС",
      about_p1: "Forever — авторская тату-студия во Вроцлаве, основанная тату-мастером Александром (Oleksandr). Это камерное, безопасное пространство, где каждый эскиз создаётся индивидуально — с учётом анатомии вашего тела и неповторимого стиля.",
      about_p2: "Работа ведётся исключительно на современном сертифицированном оборудовании с использованием 100% стерильных одноразовых расходников и гипоаллергенных пигментов премиум-класса. Индивидуальные сеансы 1 на 1 в самом сердце Вроцлава.",
      price_badge: "ПРАЙС",
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
      works_badge: "НАШИ РАБОТЫ",
      work_caption_0: "Рукав в японском стиле",
      work_caption_1: "Масштабная татуировка на всю спину",
      work_caption_2: "Орнаментал и геометрия",
      work_caption_3: "Графика и реализм",
      work_caption_4: "Детальный блэкворк",
      work_caption_5: "Художественная татуировка",
      work_caption_6: "Готический портрет и тени",
      work_caption_7: "Змей в неотрадиционном стиле",
      work_caption_8: "Ботанический блэкворк на предплечье",
      work_caption_9: "Геометрия и тонкая линия",
      work_caption_10: "Темный ангел и крылья",
      work_caption_11: "Авторская композиция Александра",
      reviews_badge: "ОТЗЫВЫ КЛИЕНТОВ",
      reviews_rating_score: "5.0 / 5.0",
      reviews_rating_sub: "Google Maps • Wrocław",
      review1_name: "Матвей К.",
      review1_city: "Вроцлав",
      review1_text: "«Александр — настоящий профи своего дела! Делал у него авторский рукав. Точнейшая линия, абсолютная стерильность и отличное чувство анатомии. Всё зажило идеально без коррекций. Лучший мастер во Вроцлаве!»",
      review2_name: "Каролина В.",
      review2_city: "Вроцлав",
      review2_text: "«Моя первая татуировка, и я безумно рада, что пошла именно к Александру. Он помог собрать идею в единый проект и примерил его в 3D. Сеанс прошёл легко и практически безболезненно. Атмосфера 10 из 10.»",
      review3_name: "Петр Д.",
      review3_city: "Вроцлав",
      review3_text: "«Приезжал к Александру на кавер-ап старого партака. Мало кто брался за такую сложную работу, а он превратил её в крутейший готический арт. Высочайший уровень мастерства!»",
      review4_name: "Елена С.",
      review4_city: "Вроцлав",
      review4_text: "«Потрясающая студия, полная стерильность и огромный талант мастера. Александр очень внимателен к деталям и пожеланиям. Тату на рёбрах сделал максимально аккуратно. Всем рекомендую во Вроцлаве!»",
      review5_name: "Якуб М.",
      review5_city: "Вроцлав",
      review5_text: "«Профессионализм на каждом этапе: от первой консультации до рекомендаций по уходу. Индивидуальный сеанс 1 на 1 без суеты. На коже рисунок смотрится ещё круче, чем на эскизе. Обязательно вернусь!»",
      review6_name: "Зофия Б.",
      review6_city: "Вроцлав",
      review6_text: "«Очень стильная и чистая студия, отличная музыка и золотые руки Александра. Тонкая надпись на ключице выполнена ювелирно. Рекомендую от всей души!»",
      review_verified: "Подтвержденный визит",
      contacts_badge: "КОНТАКТЫ",
      contact_city_addr: "Вроцлав, Польша",
      contacts_slogan: "МЫ ЖДЕМ ВАС С<br>НЕТЕРПЕНИЕМ!",
      footer_copy: "2025 Forever Tattoo • Oleksandr • Wrocław, Polska",
      footer_privacy: "Политика конфиденциальности",
      modal_booking_title: "ЗАПИСАТЬСЯ НА СЕАНС",
      modal_booking_desc: "Оставьте ваши контакты, и мы перезвоним в течение 15 минут для обсуждения эскиза и выбора времени.",
      booking_artist_title: "Тату-мастер:",
      booking_artist_val: "Александр • Forever Вроцлав",
      form_label_name: "Ваше имя *",
      form_placeholder_name: "Например, Денис",
      form_label_phone: "Телефон *",
      form_placeholder_phone: "+48 ___ ___ ___",
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
  const portfolioScrubber = document.getElementById('portfolioScrubber');
  const sliderCurrentNum = document.getElementById('sliderCurrentNum');
  const sliderTotalNum = document.getElementById('sliderTotalNum');

  let currentIndex = 0;
  let isScrubbing = false;

  function getVisibleCardsCount() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
  }

  function getMaxIndex() {
    const visible = getVisibleCardsCount();
    return Math.max(0, cards.length - visible);
  }

  function updateScrubberFill(val, max) {
    if (!portfolioScrubber) return;
    const pct = max > 0 ? Math.max(0, Math.min(100, (val / max) * 100)) : 0;
    portfolioScrubber.style.setProperty('--slider-pct', `${pct.toFixed(2)}%`);
  }

  function updateSlider(animateTrack = true) {
    const maxIdx = getMaxIndex();
    if (currentIndex > maxIdx) currentIndex = maxIdx;
    if (currentIndex < 0) currentIndex = 0;

    const firstCard = cards[0];
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 340;
    const gap = 22;
    const shift = currentIndex * (cardWidth + gap);

    if (animateTrack) {
      track.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
    } else {
      track.style.transition = 'none';
    }
    track.style.transform = `translateX(-${shift}px)`;

    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });

    if (prevBtn) prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
    if (nextBtn) nextBtn.style.opacity = currentIndex === maxIdx ? '0.3' : '1';

    if (portfolioScrubber && !isScrubbing) {
      portfolioScrubber.max = maxIdx;
      portfolioScrubber.value = currentIndex;
      updateScrubberFill(currentIndex, maxIdx);
    }

    if (sliderCurrentNum) {
      sliderCurrentNum.textContent = String(currentIndex + 1).padStart(2, '0');
    }
    if (sliderTotalNum) {
      sliderTotalNum.textContent = String(cards.length).padStart(2, '0');
    }
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

  if (portfolioScrubber) {
    portfolioScrubber.addEventListener('input', (e) => {
      isScrubbing = true;
      const maxIdx = getMaxIndex();
      const val = parseFloat(e.target.value);
      updateScrubberFill(val, maxIdx);

      const firstCard = cards[0];
      const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 340;
      const gap = 22;
      const shift = val * (cardWidth + gap);
      track.style.transition = 'none';
      track.style.transform = `translateX(-${shift}px)`;

      const roundedIdx = Math.round(val);
      if (sliderCurrentNum) {
        sliderCurrentNum.textContent = String(roundedIdx + 1).padStart(2, '0');
      }

      const dots = document.querySelectorAll('.slider-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === roundedIdx);
      });
    });

    const finishScrubbing = () => {
      if (!isScrubbing) return;
      isScrubbing = false;
      const val = parseFloat(portfolioScrubber.value);
      currentIndex = Math.max(0, Math.min(getMaxIndex(), Math.round(val)));
      updateSlider(true);
    };

    portfolioScrubber.addEventListener('change', finishScrubbing);
    portfolioScrubber.addEventListener('pointerup', finishScrubbing);
    portfolioScrubber.addEventListener('touchend', finishScrubbing);
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
     7. PARALLAX EFFECT (ENHANCED SCROLL-LINKED MOTION FOR GOTHIC ILLUSTRATIONS)
     ========================================================================== */
  const watermarks = document.querySelectorAll('.watermark');
  let targetScrollY = window.scrollY;
  let currentScrollY = window.scrollY;
  let parallaxRafId = null;

  function renderWatermarksParallax() {
    currentScrollY += (targetScrollY - currentScrollY) * 0.14;
    if (Math.abs(targetScrollY - currentScrollY) < 0.25) {
      currentScrollY = targetScrollY;
    }

    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

    watermarks.forEach((wm, i) => {
      const speedY = parseFloat(wm.dataset.speedY ?? (0.38 * (i % 2 === 0 ? 1 : -1)));
      const speedX = parseFloat(wm.dataset.speedX ?? (0.06 * (i % 2 === 0 ? 1 : -1)));
      const speedRot = parseFloat(wm.dataset.speedRot ?? (0.02 * (i % 2 === 0 ? 1 : -1)));
      const baseRot = parseFloat(wm.dataset.baseRot ?? 0);

      let anchor = 0;
      if (wm.dataset.anchor === 'bottom') {
        anchor = maxScroll;
      } else if (wm.dataset.anchor) {
        anchor = parseFloat(wm.dataset.anchor);
      }

      const delta = currentScrollY - anchor;
      const translateY = delta * speedY;
      const translateX = Math.sin(currentScrollY * 0.0035 + i * 1.4) * 28 + (delta * speedX * 0.35);
      const rotate = baseRot + (delta * speedRot);
      const scale = 1 + Math.sin(currentScrollY * 0.0025 + i) * 0.05;

      wm.style.transform = `translate3d(${translateX.toFixed(1)}px, ${translateY.toFixed(1)}px, 0) rotate(${rotate.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
    });

    if (Math.abs(targetScrollY - currentScrollY) >= 0.25) {
      parallaxRafId = requestAnimationFrame(renderWatermarksParallax);
    } else {
      parallaxRafId = null;
    }
  }

  window.addEventListener('scroll', () => {
    targetScrollY = window.scrollY;
    if (!parallaxRafId) {
      parallaxRafId = requestAnimationFrame(renderWatermarksParallax);
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    targetScrollY = window.scrollY;
    if (!parallaxRafId) {
      parallaxRafId = requestAnimationFrame(renderWatermarksParallax);
    }
  });

  // Initial render of parallax positions
  renderWatermarksParallax();

  // Initial language application
  applyLanguage(currentLang);
});
