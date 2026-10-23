import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { DecalGeometry } from 'three/examples/jsm/geometries/DecalGeometry.js';

/**
 * FOREVER — 3D ANATOMICAL TATTOO STUDIO & CONFIGURATOR
 */

// ============================================================================
// 1. MULTILINGUAL DICTIONARY (PL / EN / RU)
// ============================================================================
const fitterTranslations = {
  pl: {
    fitter_page_title: "Forever — Studio Przymierzalni Tatuażu 3D",
    back_to_site: "POWRÓT DO SALONU",
    fitter_heading: "STUDIO PRZYMIERZALNI 3D",
    fitter_subheading: "Wizualizacja anatomiczna 1:1",
    mob_tab_3d: "Widok 3D",
    mob_tab_anatomy: "Część ciała",
    mob_tab_tattoo: "Twój tatuaż",
    btn_snapshot: "ZAPISZ KADR",
    btn_book_this: "ZAPISZ SIĘ Z PROJEKTEM",
    sec_body_part: "CZĘŚĆ CIAŁA",
    sec_body_part_desc: "Wybierz obszar anatomiczny, aby obejrzeć detale ułożenia tatuażu na mięśniach.",
    part_forearm: "Przedramię",
    part_forearm_sub: "Nadgarstek i łokieć",
    part_arm: "Ramię i bark",
    part_arm_sub: "Biceps, bark, rękaw",
    part_chest: "Klatka piersiowa",
    part_chest_sub: "Mostek i obojczyki",
    part_back: "Plecy i łopatki",
    part_back_sub: "Kręgosłup, łopatki",
    part_thigh: "Udo i biodro",
    part_thigh_sub: "Przód, bok uda, kolano",
    part_calf: "Noga (łydka i udo)",
    part_calf_sub: "Łydka, goleń, kolano",
    part_neck: "Szyja i obojczyki",
    part_neck_sub: "Bok szyi, kark, obojczyk",
    label_physique: "Budowa ciała:",
    build_slim: "Smukła",
    build_standard: "Standard",
    build_athletic: "Atletyczna",
    label_skin_tone: "Odcień skóry:",
    skin_name_1: "Jasna ciepła",
    skin_name_2: "Naturalna beżowa",
    skin_name_3: "Oliwkowa",
    skin_name_4: "Opalona brązowa",
    skin_name_5: "Ciemna czekoladowa",
    skin_name_6: "Gips studyjny",
    label_lighting: "Oświetlenie w studiu:",
    light_studio: "Studyjne",
    light_dramatic: "Kontrast",
    light_daylight: "Dzienne",
    label_light_angle: "Światło studyjne:",
    label_anatomy_grid: "Celownik i linie:",
    loading_3d_model: "Generowanie siatki anatomicznej...",
    canvas_hint_empty: "Wgraj swój szkic po prawej stronie lub kliknij na ciało, aby wyznaczyć miejsce tatuażu.",
    canvas_hint_active: "Kliknij lub przeciągnij tatuaż po skórze, aby zmienić pozycję. Obracaj model 360° myszą.",
    view_front: "PRZÓD",
    view_back: "TYŁ",
    view_left: "LEWY BOK",
    view_right: "PRAWY BOK",
    view_focus_tattoo: "ZBLIŻENIE",
    view_reset: "RESET",
    step_2_title: "TWÓJ SZKIC TATUAŻU",
    btn_upload_sketch: "Wgraj własny szkic (PNG / JPG / SVG)",
    upload_hint: "Przeciągnij plik tutaj, kliknij lub wklej ze schowka (Ctrl+V)",
    btn_sample_sketch: "Lub załaduj szkic kalibracyjny do testu",
    sketch_ready_status: "Nałożono na model 3D",
    btn_change_file: "Zmień plik",
    btn_add_layer: "+ Dodaj kolejny tatuaż",
    label_remove_bg: "Usuń białe tło (ze zdjęcia/kartki):",
    label_bg_threshold: "Czystość wycięcia tła:",
    label_invert_sketch: "Odwróć kolory (biały szkic na czarnym):",
    mode_mono_ink: "Tusz jednokolorowy",
    mode_orig_color: "Oryginalne kolory",
    label_active_layers: "Warstwy na tej części ciała:",
    btn_center_here: "Przenieś na środek widoku",
    step_3_title: "ROZMIAR I POŁOŻENIE",
    label_scale: "Rozmiar tatuażu:",
    size_mini: "Mały (~5 cm)",
    size_med: "Średni (~12 cm)",
    size_large: "Duży (~19 cm)",
    label_rotation: "Kąt obrotu:",
    btn_flip_h: "Odbij ↔",
    btn_flip_v: "Odbij ↕",
    sec_ink_realism: "REALIZM TUSZU W SKÓRZE",
    finish_fresh: "Świeży tusz",
    finish_healed: "Wygojony",
    finish_stencil: "Kalka (Stencil)",
    label_opacity: "Głębokość / Krycie tuszu:",
    label_ink_color: "Odcień pigmentu:",
    btn_undo: "Cofnij",
    btn_clear: "Wyczyść",
    modal_eyebrow: "REZERWACJA SESJI Z PROJEKTEM 3D",
    modal_title: "ZAPISZ SIĘ NA TATUAŻ",
    modal_desc: "Twój projekt z przymierzalni 3D został automatycznie dołączony do zgłoszenia. Oddzwonimy w ciągu 15 minut.",
    spec_body_part: "Część ciała:",
    spec_dimensions: "Szacowany wymiar:",
    spec_estimate: "Orientacyjna wycena:",
    form_name: "Twoje imię *",
    form_phone: "Telefon kontaktowy *",
    form_master: "Preferowany artysta",
    master_any: "Dowolny artysta (dobierzemy do stylu projektu)",
    form_notes: "Dodatkowe uwagi do projektu",
    btn_download_snap: "Pobierz zrzut 3D",
    btn_submit_booking: "WYŚLIJ ZGŁOSZENIE DO STUDIA",
    success_heading: "PROJEKT WYSŁANY DO STUDIA!",
    success_text: "Otrzymaliśmy wizualizację 3D Twojego tatuażu wraz z wymiarami. Nasz menedżer skontaktuje się z Tobą w ciągu 15 minut.",
    success_close: "WRÓĆ DO PRZYMIERZALNI",
    toast_photo_saved: "Zapisano zrzut ekranu 3D (PNG)",
    toast_upload_prompt: "Celownik ustawiony — wgraj swój szkic po prawej stronie, aby nałożyć tatuaż",
    toast_layer_added: "Dodano nową warstwę tatuażu — kliknij na ciało, aby ją przesunąć",
    toast_cleared: "Wyczyszczono tatuaże z modelu",
    layer_label: "Tatuaż"
  },
  en: {
    fitter_page_title: "Forever — 3D Anatomical Tattoo Studio",
    back_to_site: "BACK TO STUDIO",
    fitter_heading: "3D TATTOO STUDIO",
    fitter_subheading: "1:1 Anatomical Visualization",
    mob_tab_3d: "3D View",
    mob_tab_anatomy: "Body Part",
    mob_tab_tattoo: "Your Tattoo",
    btn_snapshot: "SAVE SNAPSHOT",
    btn_book_this: "BOOK WITH THIS PROJECT",
    sec_body_part: "BODY PART",
    sec_body_part_desc: "Switch anatomical zones to inspect how your tattoo wraps around muscles and contours.",
    part_forearm: "Forearm",
    part_forearm_sub: "Wrist & elbow",
    part_arm: "Upper Arm & Shoulder",
    part_arm_sub: "Bicep, deltoid, sleeve",
    part_chest: "Chest & Collarbone",
    part_chest_sub: "Sternum & pectoral",
    part_back: "Back & Scapula",
    part_back_sub: "Spine & shoulder blades",
    part_thigh: "Thigh & Hip",
    part_thigh_sub: "Front, outer thigh, knee",
    part_calf: "Leg (Calf & Shin)",
    part_calf_sub: "Calf muscle, shin & ankle",
    part_neck: "Neck & Collarbone",
    part_neck_sub: "Side neck, nape & collarbone",
    label_physique: "Body build:",
    build_slim: "Slim",
    build_standard: "Standard",
    build_athletic: "Athletic",
    label_skin_tone: "Skin tone:",
    skin_name_1: "Warm Fair",
    skin_name_2: "Natural Beige",
    skin_name_3: "Olive Tan",
    skin_name_4: "Warm Bronze",
    skin_name_5: "Deep Espresso",
    skin_name_6: "Studio Plaster",
    label_lighting: "Studio lighting:",
    light_studio: "Studio",
    light_dramatic: "Contrast",
    light_daylight: "Daylight",
    label_light_angle: "Studio light:",
    label_anatomy_grid: "Reticle & guides:",
    loading_3d_model: "Building anatomical mesh...",
    canvas_hint_empty: "Upload your sketch on the right or click the body to set target placement.",
    canvas_hint_active: "Click or drag the tattoo directly on the skin to reposition. Drag outside to orbit 360°.",
    view_front: "FRONT",
    view_back: "BACK",
    view_left: "LEFT",
    view_right: "RIGHT",
    view_focus_tattoo: "FOCUS",
    view_reset: "RESET",
    step_2_title: "YOUR TATTOO SKETCH",
    btn_upload_sketch: "Upload your sketch (PNG / JPG / SVG)",
    upload_hint: "Drag & drop file here, click to browse, or paste (Ctrl+V)",
    btn_sample_sketch: "Or load a calibration test sketch",
    sketch_ready_status: "Projected on 3D anatomy",
    btn_change_file: "Change file",
    btn_add_layer: "+ Add another tattoo",
    label_remove_bg: "Remove white background (paper/JPG):",
    label_bg_threshold: "Background knockout threshold:",
    label_invert_sketch: "Invert colors (white on black):",
    mode_mono_ink: "Monochrome Ink",
    mode_orig_color: "Original Colors",
    label_active_layers: "Layers on this body part:",
    btn_center_here: "Move to center of view",
    step_3_title: "SIZE & PLACEMENT",
    label_scale: "Tattoo size:",
    size_mini: "Small (~5 cm)",
    size_med: "Medium (~12 cm)",
    size_large: "Large (~19 cm)",
    label_rotation: "Rotation angle:",
    btn_flip_h: "Flip ↔",
    btn_flip_v: "Flip ↕",
    sec_ink_realism: "INK & SKIN REALISM",
    finish_fresh: "Fresh Ink",
    finish_healed: "Healed",
    finish_stencil: "Stencil",
    label_opacity: "Ink depth / opacity:",
    label_ink_color: "Pigment shade:",
    btn_undo: "Undo",
    btn_clear: "Clear",
    modal_eyebrow: "BOOK SESSION WITH 3D PROJECT",
    modal_title: "BOOK YOUR TATTOO",
    modal_desc: "Your 3D body placement preview and dimensions are attached. We will call you back within 15 minutes.",
    spec_body_part: "Body part:",
    spec_dimensions: "Estimated size:",
    spec_estimate: "Estimated price:",
    form_name: "Your name *",
    form_phone: "Phone number *",
    form_master: "Preferred artist",
    master_any: "Any artist (matched to your style)",
    form_notes: "Additional project notes",
    btn_download_snap: "Download 3D Image",
    btn_submit_booking: "SEND BOOKING REQUEST",
    success_heading: "PROJECT SENT TO STUDIO!",
    success_text: "We received your 3D tattoo visualization and measurements. Our studio manager will contact you within 15 minutes.",
    success_close: "BACK TO 3D STUDIO",
    toast_photo_saved: "Saved 3D snapshot (PNG)",
    toast_upload_prompt: "Target set — upload your sketch on the right to project it on the skin",
    toast_layer_added: "Added new tattoo layer — click on the skin to position it",
    toast_cleared: "Cleared tattoos from model",
    layer_label: "Tattoo"
  },
  ru: {
    fitter_page_title: "Forever — 3D Студия примерки татуировки",
    back_to_site: "НАЗАД В САЛОН",
    fitter_heading: "3D СТУДИЯ ПРИМЕРКИ ТАТУ",
    fitter_subheading: "Анатомическая детализация 1:1",
    mob_tab_3d: "3D Вид",
    mob_tab_anatomy: "Часть тела",
    mob_tab_tattoo: "Ваш эскиз",
    btn_snapshot: "СОХРАНИТЬ КАДР",
    btn_book_this: "ЗАПИСАТЬСЯ С ПРОЕКТОМ",
    sec_body_part: "ЧАСТЬ ТЕЛА",
    sec_body_part_desc: "Выберите зону тела, чтобы детально рассмотреть, как татуировка ложится по рельефу мышц.",
    part_forearm: "Предплечье",
    part_forearm_sub: "Запястье и сгиб локтя",
    part_arm: "Плечо и рукав",
    part_arm_sub: "Бицепс, дельта, рукав",
    part_chest: "Грудь и ключицы",
    part_chest_sub: "Грудина и ключицы",
    part_back: "Спина и лопатки",
    part_back_sub: "Позвоночник, лопатки",
    part_thigh: "Бедро",
    part_thigh_sub: "Передняя и боковая часть",
    part_calf: "Нога (икра и голень)",
    part_calf_sub: "Икроножная мышца, голень",
    part_neck: "Шея и ключицы",
    part_neck_sub: "Бок шеи, затылок, ключицы",
    label_physique: "Телосложение:",
    build_slim: "Изящное",
    build_standard: "Стандарт",
    build_athletic: "Атлетичное",
    label_skin_tone: "Оттенок кожи:",
    skin_name_1: "Светлая тёплая",
    skin_name_2: "Натуральная бежевая",
    skin_name_3: "Оливковая",
    skin_name_4: "Загорелая бронзовая",
    skin_name_5: "Тёмная шоколадная",
    skin_name_6: "Студийный гипс",
    label_lighting: "Студийный свет:",
    light_studio: "Мягкий",
    light_dramatic: "Контраст",
    light_daylight: "Дневной",
    label_light_angle: "Студийный свет:",
    label_anatomy_grid: "Прицел и линии:",
    loading_3d_model: "Построение анатомической модели...",
    canvas_hint_empty: "Загрузите свой эскиз справа или кликните по части тела, чтобы выбрать точку нанесения.",
    canvas_hint_active: "Кликайте или перетаскивайте тату прямо по коже. Вращайте камеру на 360° за пределами тату.",
    view_front: "СПЕРЕДИ",
    view_back: "СЗАДИ",
    view_left: "СЛЕВА",
    view_right: "СПРАВА",
    view_focus_tattoo: "КРУПНО",
    view_reset: "СБРОС",
    step_2_title: "ВАШ ЭСКИЗ ТАТУИРОВКИ",
    btn_upload_sketch: "Загрузить свой эскиз (PNG / JPG / SVG)",
    upload_hint: "Перетащите файл сюда, нажмите для выбора или вставьте (Ctrl+V)",
    btn_sample_sketch: "Или загрузить тестовый контур для проверки",
    sketch_ready_status: "Нанесено на 3D модель",
    btn_change_file: "Сменить файл",
    btn_add_layer: "+ Добавить ещё тату",
    label_remove_bg: "Удалить белый фон (с бумаги/JPG):",
    label_bg_threshold: "Чистота удаления фона:",
    label_invert_sketch: "Инвертировать (белый рисунок на чёрном):",
    mode_mono_ink: "Монохромный пигмент",
    mode_orig_color: "Исходные цвета",
    label_active_layers: "Слои на этой части тела:",
    btn_center_here: "Переместить в центр вида",
    step_3_title: "РАЗМЕР И ПОЛОЖЕНИЕ",
    label_scale: "Размер татуировки:",
    size_mini: "Малый (~5 см)",
    size_med: "Средний (~12 см)",
    size_large: "Крупный (~19 см)",
    label_rotation: "Угол поворота:",
    btn_flip_h: "Отразить ↔",
    btn_flip_v: "Отразить ↕",
    sec_ink_realism: "РЕАЛИЗМ ПИГМЕНТА В КОЖЕ",
    finish_fresh: "Свежая",
    finish_healed: "Зажившая",
    finish_stencil: "Трансфер",
    label_opacity: "Плотность / прозрачность:",
    label_ink_color: "Оттенок чернил:",
    btn_undo: "Отменить",
    btn_clear: "Очистить",
    modal_eyebrow: "ЗАПИСЬ НА СЕАНС С 3D-ПРОЕКТОМ",
    modal_title: "ЗАПИСАТЬСЯ НА ТАТУ",
    modal_desc: "Ваш 3D-макет на части тела и точные размеры автоматически прикреплены к заявке. Перезвоним за 15 минут.",
    spec_body_part: "Часть тела:",
    spec_dimensions: "Примерный размер:",
    spec_estimate: "Ориентировочная цена:",
    form_name: "Ваше имя *",
    form_phone: "Телефон для связи *",
    form_master: "Предпочтительный мастер",
    master_any: "Любой мастер (подберём под ваш стиль)",
    form_notes: "Пожелания к проекту",
    btn_download_snap: "Скачать 3D-снимок",
    btn_submit_booking: "ОТПРАВИТЬ ЗАЯВКУ В СТУДИЮ",
    success_heading: "ПРОЕКТ ОТПРАВЛЕН В СТУДИЮ!",
    success_text: "Мы получили вашу 3D-визуализацию татуировки с размерами. Администратор свяжется с вами в течение 15 минут.",
    success_close: "ВЕРНУТЬСЯ В 3D-СТУДИЮ",
    toast_photo_saved: "3D-снимок сохранён (PNG)",
    toast_upload_prompt: "Точка выбрана — загрузите свой эскиз справа, чтобы примерить тату",
    toast_layer_added: "Добавлен новый слой — кликните по коже, чтобы разместить его",
    toast_cleared: "Модель очищена от татуировок",
    layer_label: "Тату"
  }
};

// ============================================================================
// 2. ANATOMICAL BODY PARTS METADATA
// ============================================================================
const BODY_PARTS_META = {
  forearm: {
    i18nKey: 'part_forearm',
    realHeightCm: 30,
    realCircCm: 25,
    baseDecalSize: 0.36,
    camPos: [0, 0.04, 1.95],
    camTarget: [0, 0.02, 0],
    defaultPlacement: { theta: 0, tRatio: 0.56 },
    dimsText: {
      pl: 'Obwód ~25 cm • Dł. 30 cm',
      en: 'Circ. ~25 cm • Len. 30 cm',
      ru: 'Обхват ~25 см • Дл. 30 см'
    }
  },
  arm: {
    i18nKey: 'part_arm',
    realHeightCm: 48,
    realCircCm: 34,
    baseDecalSize: 0.42,
    camPos: [0.35, 0.12, 2.25],
    camTarget: [0, 0.06, 0],
    defaultPlacement: { theta: Math.PI * 0.35, tRatio: 0.68 },
    dimsText: {
      pl: 'Biceps ~34 cm • Dł. 48 cm',
      en: 'Bicep ~34 cm • Len. 48 cm',
      ru: 'Бицепс ~34 см • Дл. 48 см'
    }
  },
  chest: {
    i18nKey: 'part_chest',
    realHeightCm: 45,
    realCircCm: 102,
    baseDecalSize: 0.48,
    camPos: [0, 0.12, 2.35],
    camTarget: [0, 0.06, 0],
    defaultPlacement: { theta: -0.32, tRatio: 0.60 },
    dimsText: {
      pl: 'Szer. ~44 cm • Wys. 45 cm',
      en: 'Width ~44 cm • H. 45 cm',
      ru: 'Шир. ~44 см • Выс. 45 см'
    }
  },
  back: {
    i18nKey: 'part_back',
    realHeightCm: 50,
    realCircCm: 106,
    baseDecalSize: 0.52,
    camPos: [0, 0.10, 2.40],
    camTarget: [0, 0.05, 0],
    defaultPlacement: { theta: 0, tRatio: 0.60 },
    dimsText: {
      pl: 'Szer. ~46 cm • Wys. 50 cm',
      en: 'Width ~46 cm • H. 50 cm',
      ru: 'Шир. ~46 см • Выс. 50 см'
    }
  },
  thigh: {
    i18nKey: 'part_thigh',
    realHeightCm: 42,
    realCircCm: 56,
    baseDecalSize: 0.44,
    camPos: [0.35, 0.06, 2.15],
    camTarget: [0, 0.02, 0],
    defaultPlacement: { theta: Math.PI * 0.28, tRatio: 0.56 },
    dimsText: {
      pl: 'Obwód ~56 cm • Dł. 42 cm',
      en: 'Circ. ~56 cm • Len. 42 cm',
      ru: 'Обхват ~56 см • Дл. 42 см'
    }
  },
  calf: {
    i18nKey: 'part_calf',
    realHeightCm: 38,
    realCircCm: 37,
    baseDecalSize: 0.38,
    camPos: [0, 0.05, -2.05],
    camTarget: [0, 0.02, 0],
    defaultPlacement: { theta: Math.PI, tRatio: 0.60 },
    dimsText: {
      pl: 'Obwód ~37 cm • Dł. 38 cm',
      en: 'Circ. ~37 cm • Len. 38 cm',
      ru: 'Обхват ~37 см • Дл. 38 см'
    }
  },
  neck: {
    i18nKey: 'part_neck',
    realHeightCm: 30,
    realCircCm: 38,
    baseDecalSize: 0.30,
    camPos: [0.45, 0.08, 1.85],
    camTarget: [0, 0.02, 0],
    defaultPlacement: { theta: Math.PI * 0.38, tRatio: 0.48 },
    dimsText: {
      pl: 'Obwód ~38 cm • Wys. 30 cm',
      en: 'Circ. ~38 cm • H. 30 cm',
      ru: 'Обхват ~38 см • Выс. 30 см'
    }
  }
};

// ============================================================================
// 3. PROCEDURAL ANATOMICAL SCULPTING ENGINE (REALISTIC EBASE MUSCULATURE)
// ============================================================================

/**
 * Shortest angular distance between two angles in radians (-PI to PI)
 */
function angDiff(a, b) {
  let d = (a - b) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
}

/**
 * Gaussian anatomical muscle / bone relief lobe
 */
function lobe(theta, t, theta0, sigmaTheta, t0, sigmaT, amp) {
  const da = angDiff(theta, theta0);
  const dt = t - t0;
  return amp * Math.exp(-(da * da) / (2 * sigmaTheta * sigmaTheta) - (dt * dt) / (2 * sigmaT * sigmaT));
}

/**
 * Diagonal / sweeping anatomical muscle or tendon ridge (rotates coordinates by `tilt`)
 */
function tiltedLobe(theta, t, theta0, sigmaTheta, t0, sigmaT, tilt, amp) {
  const da = angDiff(theta, theta0);
  const dt = t - t0;
  const c = Math.cos(tilt);
  const s = Math.sin(tilt);
  const u = da * c - dt * s * 2.2;
  const v = (da * s + dt * c * 2.2) / 2.2;
  return amp * Math.exp(-(u * u) / (2 * sigmaTheta * sigmaTheta) - (v * v) / (2 * sigmaT * sigmaT));
}

/**
 * Smoothstep helper
 */
function smoothstep(edge0, edge1, x) {
  const u = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return u * u * (3 - 2 * u);
}

/**
 * Evaluates the 3D anatomical surface point (x, y, z) for a given body part,
 * radial angle theta in [0, 2*PI] (0 = +Z front, PI/2 = +X right, PI = -Z back),
 * and longitudinal height parameter t in [0, 1] (0 = bottom cut, 1 = top cut).
 */
function evaluateAnatomySurface(partId, theta, t, buildType = 'standard') {
  const girthMul = buildType === 'slim' ? 0.88 : (buildType === 'athletic' ? 1.10 : 1.0);
  const muscleMul = buildType === 'slim' ? 0.76 : (buildType === 'athletic' ? 1.36 : 1.0);

  const sinT = Math.sin(theta);
  const cosT = Math.cos(theta);
  let y = (t - 0.5) * 1.50;
  let w = 0.25;
  let d = 0.22;
  let cx = 0;
  let cz = 0;
  let dy = 0;
  let rxAdd = 0;
  let rzAdd = 0;
  let relief = 0;

  if (partId === 'forearm') {
    // Realistic Forearm, Wrist, Palm & Distal Elbow:
    // t=0.0 -> Palm & thumb metacarpal base
    // t=0.18 -> Narrow flat wrist with ulnar/radial styloid bones & flexor tendons
    // t=0.62 -> Muscular upper forearm (brachioradialis, pronator teres, flexors, extensors)
    // t=0.88 -> Elbow joint (antecubital fossa hollow in front, sharp olecranon in back)
    // t=1.0 -> Distal bicep & brachialis cut
    y = (t - 0.5) * 1.52;

    const palmEnv = smoothstep(0.20, 0.04, t) * (1 - smoothstep(0.03, 0.0, t) * 0.18);
    const wristPinch = Math.exp(-Math.pow((t - 0.20) / 0.065, 2));
    const muscleBelly = smoothstep(0.19, 0.60, t) * (1 - 0.22 * smoothstep(0.68, 0.90, t));
    const upperArmStart = smoothstep(0.86, 1.0, t);

    // Forearm is noticeably wider than deep at the wrist & palm, rounder at mid-belly
    w = 0.132 + 0.118 * muscleBelly - 0.018 * wristPinch + 0.068 * palmEnv + 0.025 * upperArmStart;
    d = 0.092 + 0.116 * muscleBelly - 0.022 * wristPinch - 0.024 * palmEnv + 0.032 * upperArmStart;

    // Anatomical S-sweep of forearm bone axis + slight natural flexion at elbow & wrist
    cx = 0.024 * Math.sin(t * Math.PI * 1.1) - 0.024 * palmEnv;
    cz = -0.018 * Math.sin(t * Math.PI) + 0.042 * upperArmStart + 0.018 * palmEnv;

    // Squircle/flattened anatomical cross-section at wrist and anterior forearm plane
    const flatPlane = (0.45 * wristPinch + 0.65 * palmEnv + 0.22 * muscleBelly) * 0.018 * Math.cos(2 * theta);
    relief -= flatPlane;

    // 1. Brachioradialis (major sweeping ridge from outer upper elbow to radial wrist)
    relief += tiltedLobe(theta, t, 0.36 * Math.PI, 0.36, 0.62, 0.22, -0.38, 0.056 * muscleMul);
    // Extensor carpi radialis longus (adjacent outer ridge)
    relief += tiltedLobe(theta, t, 0.56 * Math.PI, 0.32, 0.66, 0.20, -0.32, 0.042 * muscleMul);

    // 2. Pronator teres & Flexor carpi radialis (warm medial-anterior belly)
    relief += tiltedLobe(theta, t, -0.26 * Math.PI, 0.42, 0.60, 0.19, 0.35, 0.048 * muscleMul);
    // Flexor carpi ulnaris (medial-posterior edge)
    relief += lobe(theta, t, -0.64 * Math.PI, 0.36, 0.56, 0.22, 0.038 * muscleMul);

    // 3. Longitudinal intermuscular grooves (define real forearm anatomy in lighting)
    relief -= tiltedLobe(theta, t, 0.08 * Math.PI, 0.12, 0.55, 0.22, -0.25, 0.018 * muscleMul);
    relief -= lobe(theta, t, 0.82 * Math.PI, 0.14, 0.54, 0.24, 0.016 * muscleMul);

    // 4. Anterior wrist tendons (Palmaris longus & Flexor carpi radialis cords) + flat wrist depression
    relief -= lobe(theta, t, 0.0, 0.45, 0.22, 0.08, 0.018);
    relief += lobe(theta, t, -0.05 * Math.PI, 0.055, 0.24, 0.09, 0.009);
    relief += lobe(theta, t, 0.09 * Math.PI, 0.055, 0.24, 0.09, 0.008);

    // 5. Ulnar styloid process (distinct bony bump on outer-back wrist) & Radial styloid
    relief += lobe(theta, t, -0.62 * Math.PI, 0.20, 0.19, 0.028, 0.022);
    relief += lobe(theta, t, 0.48 * Math.PI, 0.22, 0.18, 0.030, 0.015);

    // 6. Palm anatomy at bottom (Thenar thumb mound on radial side, Hypothenar on ulnar, hollow central palm)
    relief += lobe(theta, t, 0.35 * Math.PI, 0.38, 0.08, 0.055, 0.052);
    relief += lobe(theta, t, -0.38 * Math.PI, 0.32, 0.07, 0.050, 0.028);
    relief -= lobe(theta, t, 0.0, 0.34, 0.07, 0.050, 0.026);
    relief -= lobe(theta, t, Math.PI, 0.45, 0.08, 0.055, 0.018);

    // 7. Elbow joint (t = 0.88): Deep cubital fossa in front, prominent Olecranon bone in back, epicondyles on sides
    relief -= lobe(theta, t, 0.0, 0.38, 0.87, 0.048, 0.036);
    relief += lobe(theta, t, Math.PI, 0.26, 0.87, 0.045, 0.044);
    relief += lobe(theta, t, -0.52 * Math.PI, 0.22, 0.88, 0.038, 0.024);
    relief += lobe(theta, t, 0.52 * Math.PI, 0.22, 0.88, 0.038, 0.020);
    // Distal biceps tendon diving into cubital fossa
    relief += lobe(theta, t, 0.0, 0.12, 0.93, 0.06, 0.022 * muscleMul);
  }
  else if (partId === 'arm') {
    // Full Arm & Shoulder Sleeve:
    // t=0.0 -> Wrist, t=0.42 -> Elbow Joint, t=0.66 -> Biceps & Triceps, t=0.86 -> Deltoid Shoulder Cap, t=0.97 -> Acromion/Trapezius neck slope
    y = (t - 0.5) * 1.58;
    const lowerArm = smoothstep(0.0, 0.36, t) * (1 - smoothstep(0.36, 0.45, t) * 0.22);
    const upperArm = smoothstep(0.42, 0.58, t);
    const deltoidCap = smoothstep(0.68, 0.86, t) * (1 - smoothstep(0.90, 1.0, t) * 0.42);
    const wristPinch = Math.exp(-Math.pow((t - 0.06) / 0.05, 2));

    w = 0.125 - 0.012 * wristPinch + 0.075 * lowerArm + 0.065 * upperArm + 0.052 * deltoidCap;
    d = 0.105 - 0.014 * wristPinch + 0.072 * lowerArm + 0.082 * upperArm + 0.042 * deltoidCap;

    // Natural anatomical elbow bend & shoulder posture
    const forearmFlex = smoothstep(0.44, 0.0, t);
    cz = forearmFlex * 0.11 - 0.02 * Math.sin(t * Math.PI);
    cx = -0.022 * Math.sin(t * Math.PI) + 0.035 * smoothstep(0.78, 1.0, t);

    // 1. Deltoid 3-head shoulder cap (Lateral +X, Anterior +Z, Posterior -Z)
    relief += lobe(theta, t, 0.48 * Math.PI, 0.48, 0.83, 0.11, 0.078 * muscleMul);
    relief += tiltedLobe(theta, t, 0.18 * Math.PI, 0.38, 0.81, 0.10, 0.35, 0.046 * muscleMul);
    relief += tiltedLobe(theta, t, 0.80 * Math.PI, 0.38, 0.81, 0.10, -0.35, 0.046 * muscleMul);
    // Deltoid V-insertion groove into humerus (classic anatomical landmark at t=0.67, lateral)
    relief -= lobe(theta, t, 0.48 * Math.PI, 0.28, 0.67, 0.038, 0.022 * muscleMul);
    // Medial armpit / axillary hollow on inner upper arm (-X)
    relief -= lobe(theta, t, -0.50 * Math.PI, 0.42, 0.82, 0.12, 0.052);

    // 2. Biceps brachii prominent oval belly + Brachialis outer cushion
    relief += lobe(theta, t, 0.02 * Math.PI, 0.42, 0.63, 0.11, 0.064 * muscleMul);
    relief += lobe(theta, t, 0.32 * Math.PI, 0.26, 0.56, 0.08, 0.028 * muscleMul);
    // Medial & lateral bicipital sulci (grooves separating bicep from tricep)
    relief -= lobe(theta, t, 0.28 * Math.PI, 0.16, 0.63, 0.12, 0.022 * muscleMul);
    relief -= lobe(theta, t, -0.28 * Math.PI, 0.16, 0.63, 0.12, 0.024 * muscleMul);

    // 3. Triceps brachii horseshoe (Lateral head high & outer, Long head inner-back, flat tendon sheet below)
    relief += tiltedLobe(theta, t, 0.72 * Math.PI, 0.32, 0.68, 0.10, -0.25, 0.058 * muscleMul);
    relief += tiltedLobe(theta, t, -0.74 * Math.PI, 0.34, 0.66, 0.11, 0.20, 0.052 * muscleMul);
    relief -= lobe(theta, t, Math.PI, 0.32, 0.53, 0.055, 0.024);

    // 4. Elbow joint (t = 0.42): Olecranon tip & Antecubital crease
    relief += lobe(theta, t, Math.PI, 0.26, 0.42, 0.035, 0.038);
    relief -= lobe(theta, t, 0.0, 0.38, 0.42, 0.040, 0.032);

    // 5. Forearm musculature in lower half (t = 0.08..0.40)
    relief += tiltedLobe(theta, t, 0.36 * Math.PI, 0.40, 0.28, 0.10, -0.35, 0.044 * muscleMul);
    relief += tiltedLobe(theta, t, -0.26 * Math.PI, 0.40, 0.26, 0.09, 0.30, 0.034 * muscleMul);
    relief -= lobe(theta, t, 0.0, 0.40, 0.07, 0.05, 0.015);
  }
  else if (partId === 'chest') {
    // Sculpted Male/Unisex Classical Torso Bust (Chest, Clavicles, Deltoids, Ribcage & Upper Abs):
    // t=0.0 -> Waist / Mid-Abdomen, t=0.30 -> Ribcage & Serratus, t=0.58 -> Pectorals, t=0.79 -> Clavicles & Deltoid Shoulders, t=0.94 -> Neck Column
    y = (t - 0.5) * 1.50;
    const vTaper = smoothstep(0.05, 0.74, t);
    const shoulderCap = smoothstep(0.55, 0.76, t) * (1 - smoothstep(0.79, 0.90, t));
    const neckCol = smoothstep(0.80, 0.91, t);

    // Realistic broad shoulder-to-waist ratio + anatomical ribcage depth
    const baseW = 0.36 + 0.14 * vTaper + 0.15 * shoulderCap;
    const baseD = 0.22 + 0.055 * smoothstep(0.15, 0.62, t) * (1 - smoothstep(0.72, 0.88, t));

    w = baseW * (1 - 0.62 * neckCol);
    d = baseD * (1 - 0.38 * neckCol);

    // Natural lordosis/thoracic posture
    cz = 0.028 * Math.sin(t * Math.PI) - 0.025 * neckCol;

    // Anatomical squircle torso cross-section (flattens front chest & back plane instead of looking like a round barrel)
    const torsoSquircle = (1 - neckCol) * (0.034 * Math.cos(2 * theta) - 0.008 * Math.cos(4 * theta));
    relief -= torsoSquircle;

    // Slope shoulders naturally from neck down to deltoids
    dy -= 0.045 * smoothstep(0.72, 0.86, t) * Math.pow(Math.sin(theta), 2) * (1 - neckCol);

    // 1. Pectoralis Major armor plates (squared inner border, sweeping outer insertion toward deltoid)
    relief += tiltedLobe(theta, t, 0.20 * Math.PI, 0.32, 0.58, 0.11, -0.18, 0.068 * muscleMul);
    relief += tiltedLobe(theta, t, -0.20 * Math.PI, 0.32, 0.58, 0.11, 0.18, 0.068 * muscleMul);
    // Crisp inframammary / lower pectoral crease
    relief -= tiltedLobe(theta, t, 0.20 * Math.PI, 0.30, 0.43, 0.026, -0.14, 0.024 * muscleMul);
    relief -= tiltedLobe(theta, t, -0.20 * Math.PI, 0.30, 0.43, 0.026, 0.14, 0.024 * muscleMul);

    // 2. Deep Sternal Cleavage (center line between pecs)
    relief -= lobe(theta, t, 0.0, 0.075, 0.57, 0.15, 0.048 * muscleMul);

    // 3. Clavicles (pronounced collarbones sweeping from jugular notch to acromion) & Suprasternal Notch
    relief -= lobe(theta, t, 0.0, 0.11, 0.79, 0.032, 0.038);
    relief += tiltedLobe(theta, t, 0.21 * Math.PI, 0.28, 0.79, 0.022, 0.12, 0.032);
    relief += tiltedLobe(theta, t, -0.21 * Math.PI, 0.28, 0.79, 0.022, -0.12, 0.032);
    // Infraclavicular fossa (subtle hollow under outer collarbone / Mohrenheim fossa)
    relief -= lobe(theta, t, 0.31 * Math.PI, 0.14, 0.72, 0.035, 0.018);
    relief -= lobe(theta, t, -0.31 * Math.PI, 0.14, 0.72, 0.035, 0.018);

    // 4. Anterior & Lateral Deltoid Shoulder Caps + Axillary Armpit Cutouts
    relief += lobe(theta, t, 0.44 * Math.PI, 0.28, 0.70, 0.10, 0.058 * muscleMul);
    relief += lobe(theta, t, -0.44 * Math.PI, 0.28, 0.70, 0.10, 0.058 * muscleMul);
    relief -= lobe(theta, t, 0.38 * Math.PI, 0.18, 0.50, 0.06, 0.028);
    relief -= lobe(theta, t, -0.38 * Math.PI, 0.18, 0.50, 0.06, 0.028);

    // 5. Costal Arch (Ribcage) & Rectus Abdominis (Upper & Mid Abs with Linea Alba & Semilunaris)
    relief -= lobe(theta, t, 0.0, 0.04, 0.22, 0.18, 0.022 * muscleMul); // Linea alba
    relief -= lobe(theta, t, 0.22 * Math.PI, 0.08, 0.22, 0.16, 0.016 * muscleMul); // Linea semilunaris
    relief -= lobe(theta, t, -0.22 * Math.PI, 0.08, 0.22, 0.16, 0.016 * muscleMul);
    // Upper & middle abdominal pairs
    [0.32, 0.17].forEach((abT) => {
      relief += lobe(theta, t, 0.09 * Math.PI, 0.10, abT, 0.052, 0.024 * muscleMul);
      relief += lobe(theta, t, -0.09 * Math.PI, 0.10, abT, 0.052, 0.024 * muscleMul);
    });
    // Ribcage / Serratus anterior subtle side ribs
    relief += tiltedLobe(theta, t, 0.34 * Math.PI, 0.22, 0.34, 0.08, -0.3, 0.020 * muscleMul);
    relief += tiltedLobe(theta, t, -0.34 * Math.PI, 0.22, 0.34, 0.08, 0.3, 0.020 * muscleMul);

    // 6. Sternocleidomastoid cords on neck column (t > 0.82)
    relief += lobe(theta, t, 0.14 * Math.PI, 0.18, 0.89, 0.07, 0.018);
    relief += lobe(theta, t, -0.14 * Math.PI, 0.18, 0.89, 0.07, 0.018);
  }
  else if (partId === 'back') {
    // Dorsal Anatomical Torso Bust (Note: theta=0 / +Z is the BACK surface so Front Camera faces the Back directly):
    // t=0.0 -> Lower Lumbar/Waist, t=0.45 -> Lats & Mid-Back, t=0.68 -> Scapulae & Deltoids, t=0.80 -> Trapezius & Shoulders, t=0.94 -> Nape of Neck
    y = (t - 0.5) * 1.54;
    const latV = smoothstep(0.06, 0.75, t);
    const shoulderCap = smoothstep(0.56, 0.77, t) * (1 - smoothstep(0.80, 0.91, t));
    const neckCol = smoothstep(0.82, 0.92, t);

    const baseW = 0.34 + 0.18 * latV + 0.14 * shoulderCap;
    const baseD = 0.21 + 0.055 * smoothstep(0.20, 0.68, t) * (1 - smoothstep(0.74, 0.90, t));

    w = baseW * (1 - 0.62 * neckCol);
    d = baseD * (1 - 0.38 * neckCol);

    // Realistic S-curve of vertebral column (lumbar lordosis hollow at lower back, thoracic kyphosis rounding at upper back)
    cz = -0.036 * Math.cos(t * Math.PI * 1.30);

    // Flatten dorsal and ventral ribcage planes
    relief -= (1 - neckCol) * (0.034 * Math.cos(2 * theta) - 0.008 * Math.cos(4 * theta));

    // 1. Deep Median Spinal Furrow (from lumbar t=0.08 up to thoracic t=0.78)
    relief -= lobe(theta, t, 0.0, 0.068, 0.44, 0.32, 0.048 * muscleMul);
    // C7 Vertebra prominens bone bump at base of neck (t=0.84)
    relief += lobe(theta, t, 0.0, 0.10, 0.84, 0.028, 0.018);

    // 2. Erector Spinae (two thick vertical lumbar muscle columns flanking the lower spine)
    relief += lobe(theta, t, 0.09 * Math.PI, 0.11, 0.24, 0.15, 0.038 * muscleMul);
    relief += lobe(theta, t, -0.09 * Math.PI, 0.11, 0.24, 0.15, 0.038 * muscleMul);

    // 3. Scapulae (Shoulder Blades: winged triangular plates + sharp diagonal Spine of Scapula + Infraspinatus/Teres major)
    relief += tiltedLobe(theta, t, 0.21 * Math.PI, 0.24, 0.64, 0.11, 0.22, 0.052 * muscleMul);
    relief += tiltedLobe(theta, t, -0.21 * Math.PI, 0.24, 0.64, 0.11, -0.22, 0.052 * muscleMul);
    // Spine of Scapula ridge sweeping out toward acromion
    relief += tiltedLobe(theta, t, 0.25 * Math.PI, 0.25, 0.73, 0.025, 0.18, 0.028 * muscleMul);
    relief += tiltedLobe(theta, t, -0.25 * Math.PI, 0.25, 0.73, 0.025, -0.18, 0.028 * muscleMul);
    // Medial border shadow of scapula
    relief -= lobe(theta, t, 0.11 * Math.PI, 0.05, 0.62, 0.09, 0.015 * muscleMul);
    relief -= lobe(theta, t, -0.11 * Math.PI, 0.05, 0.62, 0.09, 0.015 * muscleMul);

    // 4. Trapezius (Kite/diamond hood from occipital nape down between shoulder blades)
    relief += tiltedLobe(theta, t, 0.10 * Math.PI, 0.20, 0.76, 0.13, -0.25, 0.036 * muscleMul);
    relief += tiltedLobe(theta, t, -0.10 * Math.PI, 0.20, 0.76, 0.13, 0.25, 0.036 * muscleMul);

    // 5. Latissimus Dorsi & Teres Major ("wings" flaring out on sides)
    relief += tiltedLobe(theta, t, 0.35 * Math.PI, 0.28, 0.50, 0.16, 0.28, 0.046 * muscleMul);
    relief += tiltedLobe(theta, t, -0.35 * Math.PI, 0.28, 0.50, 0.16, -0.28, 0.046 * muscleMul);

    // 6. Posterior Deltoid Shoulder Caps
    relief += lobe(theta, t, 0.44 * Math.PI, 0.28, 0.72, 0.09, 0.056 * muscleMul);
    relief += lobe(theta, t, -0.44 * Math.PI, 0.28, 0.72, 0.09, 0.056 * muscleMul);
  }
  else if (partId === 'calf' || partId === 'thigh') {
    // Sculpted Athletic Leg (Knee, Shin, Gastrocnemius Calf Diamond, Achilles Tendon, Malleoli Ankles & Foot Arch):
    // t=0.0 -> Foot arch & calcaneus heel base
    // t=0.14 -> Narrow ankle with sharp Achilles tendon & inner/outer ankle bones (malleoli)
    // t=0.60 -> High-contrast Gastrocnemius medial & lateral calf heads + Anterior Tibialis shin
    // t=0.86 -> Knee joint (Patella, patellar ligament, tibial tuberosity, popliteal hollow)
    // t=1.0 -> Distal Thigh (Vastus medialis teardrop & Vastus lateralis sweep)
    y = (t - 0.5) * 1.54;

    const calfBell = Math.exp(-Math.pow((t - 0.60) / 0.21, 2));
    const anklePinch = Math.exp(-Math.pow((t - 0.17) / 0.085, 2));
    const kneeAndThigh = smoothstep(0.75, 0.98, t);
    const footFlare = smoothstep(0.14, 0.02, t) * (1 - smoothstep(0.02, 0.0, t) * 0.2);

    w = 0.128 + 0.112 * calfBell - 0.028 * anklePinch + 0.068 * kneeAndThigh + 0.022 * footFlare;
    d = 0.138 + 0.125 * calfBell - 0.026 * anklePinch + 0.065 * kneeAndThigh + 0.075 * footFlare;

    // Natural leg axis: calf projects backward (-Z), shin curves slightly, foot dorsum projects forward (+Z)
    cz = -0.028 * calfBell + 0.065 * footFlare + 0.015 * kneeAndThigh;
    cx = -0.015 * Math.sin(t * Math.PI);

    // 1. Gastrocnemius Calf Diamond (Back of leg, theta near PI):
    // Medial head (-0.84*PI) sits slightly lower and fuller; Lateral head (+0.84*PI) sits slightly higher
    relief += lobe(theta, t, -0.83 * Math.PI, 0.34, 0.58, 0.13, 0.078 * muscleMul);
    relief += lobe(theta, t, 0.83 * Math.PI, 0.32, 0.63, 0.12, 0.068 * muscleMul);
    // Inter-gastrocnemius vertical cleft & sharp lower diamond V-step where gastroc meets soleus
    relief -= lobe(theta, t, Math.PI, 0.10, 0.61, 0.11, 0.026 * muscleMul);
    relief -= lobe(theta, t, -0.84 * Math.PI, 0.28, 0.42, 0.032, 0.018 * muscleMul);
    relief -= lobe(theta, t, 0.84 * Math.PI, 0.28, 0.46, 0.032, 0.018 * muscleMul);

    // 2. Soleus muscle (flanking the lower calf below the gastrocnemius heads)
    relief += lobe(theta, t, -0.74 * Math.PI, 0.30, 0.38, 0.11, 0.032 * muscleMul);
    relief += lobe(theta, t, 0.72 * Math.PI, 0.30, 0.40, 0.11, 0.032 * muscleMul);

    // 3. Sharp Achilles Tendon cord at back of ankle + deep retro-malleolar hollows on both sides
    relief += lobe(theta, t, Math.PI, 0.13, 0.20, 0.11, 0.036);
    relief -= lobe(theta, t, 0.78 * Math.PI, 0.18, 0.18, 0.085, 0.032);
    relief -= lobe(theta, t, -0.78 * Math.PI, 0.18, 0.18, 0.085, 0.032);
    // Calcaneus heel bone at bottom back
    relief += lobe(theta, t, Math.PI, 0.26, 0.05, 0.045, 0.038);

    // 4. Medial Malleolus (inner ankle bone — higher & more anterior) & Lateral Malleolus (outer ankle bone — lower & more posterior)
    relief += lobe(theta, t, -0.46 * Math.PI, 0.18, 0.15, 0.026, 0.032);
    relief += lobe(theta, t, 0.54 * Math.PI, 0.18, 0.12, 0.026, 0.030);

    // 5. Anterior Shin: Sharp Tibial Crest bone edge + Tibialis Anterior & Peroneus Longus outer sweep
    relief += lobe(theta, t, -0.03 * Math.PI, 0.11, 0.50, 0.26, 0.024);
    relief += lobe(theta, t, 0.20 * Math.PI, 0.26, 0.58, 0.18, 0.038 * muscleMul);
    relief += lobe(theta, t, 0.48 * Math.PI, 0.24, 0.56, 0.19, 0.032 * muscleMul);

    // 6. Knee Joint & Distal Thigh (t = 0.80..0.98): Patella, Tibial Tuberosity, Vastus Medialis ("Teardrop"), Popliteal Fossa
    relief += lobe(theta, t, 0.0, 0.22, 0.86, 0.038, 0.034); // Kneecap (Patella)
    relief += lobe(theta, t, 0.0, 0.14, 0.76, 0.028, 0.018); // Tibial tuberosity
    relief -= lobe(theta, t, Math.PI, 0.34, 0.85, 0.048, 0.038); // Back of knee hollow
    relief += lobe(theta, t, -0.26 * Math.PI, 0.28, 0.94, 0.06, 0.045 * muscleMul); // Vastus medialis teardrop
    relief += lobe(theta, t, 0.34 * Math.PI, 0.32, 0.95, 0.07, 0.042 * muscleMul); // Vastus lateralis
  }
  else if (partId === 'neck') {
    // Classical Sculpted Neck, Throat, Jawline, Chin, Nape & Collarbone Bust:
    // t=0.0 -> Upper Chest & Deltoid Shoulders
    // t=0.20 -> Clavicles & Suprasternal Jugular Notch
    // t=0.30..0.72 -> Cylindrical/Slender Neck Column with SCM V-muscles & Trapezius slope
    // t=0.76..1.0 -> Sculpted Mandible Jawline, Chin, Submental under-chin shadow & Occiput
    y = (t - 0.5) * 1.40;
    const shoulderBase = Math.pow(smoothstep(0.42, 0.02, t), 1.35);
    const neckPinch = Math.exp(-Math.pow((t - 0.52) / 0.20, 2));
    const headBase = smoothstep(0.68, 0.92, t);

    w = 0.185 - 0.018 * neckPinch + 0.31 * shoulderBase + 0.045 * headBase;
    d = 0.185 - 0.012 * neckPinch + 0.095 * shoulderBase + 0.105 * headBase;

    // Natural forward inclination of the human neck + strong anterior chin/jaw projection
    cz = 0.038 * (t - 0.32) + 0.075 * headBase * smoothstep(0.3, 1.0, cosT);

    // Flatten the upper chest/shoulder base front & back
    relief -= shoulderBase * 0.028 * Math.cos(2 * theta);
    // Natural downward slope of the shoulders at the sides
    dy -= 0.065 * shoulderBase * Math.pow(Math.sin(theta), 2);

    // 1. Sculpted Mandible / Jawline & Chin (theta near 0, t = 0.76..0.95)
    relief += lobe(theta, t, 0.0, 0.28, 0.85, 0.075, 0.082); // Chin point (mentum)
    relief += tiltedLobe(theta, t, 0.26 * Math.PI, 0.28, 0.84, 0.055, 0.20, 0.048); // Right mandibular angle (gonion)
    relief += tiltedLobe(theta, t, -0.26 * Math.PI, 0.28, 0.84, 0.055, -0.20, 0.048); // Left mandibular angle
    // Deep Submental Hollow (realistic shadow under the chin and jawline)
    relief -= lobe(theta, t, 0.0, 0.42, 0.70, 0.042, 0.048);

    // 2. Thyroid Cartilage (subtle Adam's apple / laryngeal prominence on anterior throat)
    relief += lobe(theta, t, 0.0, 0.12, 0.56, 0.045, 0.016 * muscleMul);

    // 3. Sternocleidomastoid (SCM) diagonal V-muscles sweeping from mastoid behind ear to pit of throat
    const scmAngle = 0.06 * Math.PI + 0.40 * Math.PI * smoothstep(0.18, 0.76, t);
    relief += lobe(theta, t, scmAngle, 0.18, 0.48, 0.22, 0.034 * muscleMul);
    relief += lobe(theta, t, -scmAngle, 0.18, 0.48, 0.22, 0.034 * muscleMul);
    // Lesser supraclavicular fossa (hollow behind SCM above collarbone)
    relief -= lobe(theta, t, 0.34 * Math.PI, 0.16, 0.26, 0.06, 0.020);
    relief -= lobe(theta, t, -0.34 * Math.PI, 0.16, 0.26, 0.06, 0.020);

    // 4. Suprasternal Jugular Notch (deep pit at base of throat, t=0.19, theta=0)
    relief -= lobe(theta, t, 0.0, 0.13, 0.19, 0.038, 0.042);

    // 5. Prominent Clavicles (collarbone ridges sweeping left & right at t=0.17)
    relief += tiltedLobe(theta, t, 0.22 * Math.PI, 0.30, 0.17, 0.026, 0.12, 0.034);
    relief += tiltedLobe(theta, t, -0.22 * Math.PI, 0.30, 0.17, 0.026, -0.12, 0.034);

    // 6. Trapezius & Nape of Neck (back of neck): Nuchal furrow & C7 vertebra bump
    relief += lobe(theta, t, 0.68 * Math.PI, 0.34, 0.32, 0.16, 0.044 * muscleMul);
    relief += lobe(theta, t, -0.68 * Math.PI, 0.34, 0.32, 0.16, 0.044 * muscleMul);
    relief -= lobe(theta, t, Math.PI, 0.11, 0.56, 0.18, 0.018); // Nuchal groove
    relief += lobe(theta, t, Math.PI, 0.12, 0.20, 0.035, 0.018); // C7 vertebra prominens
  }

  // Apply physique girth multiplier & smooth studio sculpture bevel at top/bottom section cuts
  const cutBevel = smoothstep(0.0, 0.024, t) * smoothstep(1.0, 0.976, t);
  const scaleFactor = girthMul * (0.92 + 0.08 * cutBevel);

  const rx = (w + rxAdd + relief) * scaleFactor;
  const rz = (d + rzAdd + relief) * scaleFactor;

  const x = cx + rx * sinT;
  const z = cz + rz * cosT;

  return new THREE.Vector3(x, y + dy, z);
}

/**
 * Builds the complete Three.js Group for an anatomical body part:
 * - High-density seamless skin mesh (`skinMesh`) with welded seam normals
 * - Dark obsidian architectural cross-section caps at top & bottom cuts
 * - Subtle anatomical symmetry/measurement lines (`guideGroup`)
 */
function buildAnatomicalBodyPart(partId, buildType, skinMat, showGuides = true) {
  const group = new THREE.Group();
  const radialSegs = 160;
  const heightSegs = 192;

  const numCols = radialSegs + 1;
  const numRows = heightSegs + 1;
  const positions = new Float32Array(numCols * numRows * 3);
  const colors = new Float32Array(numCols * numRows * 3);
  const uvs = new Float32Array(numCols * numRows * 2);

  for (let j = 0; j <= heightSegs; j++) {
    const t = j / heightSegs;
    const rowIndices = [];
    let sumR = 0;

    for (let i = 0; i <= radialSegs; i++) {
      // Ensure exact closure at seam i === radialSegs
      const theta = (i === radialSegs ? 0 : i / radialSegs) * Math.PI * 2;
      const pt = evaluateAnatomySurface(partId, theta, t, buildType);

      const idx = (j * numCols + i) * 3;
      positions[idx] = pt.x;
      positions[idx + 1] = pt.y;
      positions[idx + 2] = pt.z;

      const r = Math.hypot(pt.x, pt.z);
      sumR += r;
      rowIndices.push({ idx, r, y: pt.y });

      const uvIdx = (j * numCols + i) * 2;
      uvs[uvIdx] = i / radialSegs;
      uvs[uvIdx + 1] = t;
    }

    // Compute subtle anatomical crease ambient occlusion & warm vascular undertones per vertex
    const avgR = sumR / (radialSegs + 1) || 0.25;
    for (let i = 0; i <= radialSegs; i++) {
      const { idx, r } = rowIndices[i];
      // Negative delta = anatomical sulcus/hollow (darker warm shadow), Positive = muscle/bone ridge (brighter)
      const delta = (r - avgR) / avgR;
      const ao = Math.max(0.82, Math.min(1.05, 1.0 + delta * 0.42));
      // Subtle warm subcutaneous scatter in hollows (slightly richer red/warmth in creases)
      const rWarm = Math.min(1.06, ao * 1.01 + (delta < 0 ? -delta * 0.06 : 0));
      const gWarm = ao * 0.99;
      const bWarm = ao * 0.975;

      colors[idx] = rWarm;
      colors[idx + 1] = gWarm;
      colors[idx + 2] = bWarm;
    }
  }

  const indices = [];
  for (let j = 0; j < heightSegs; j++) {
    for (let i = 0; i < radialSegs; i++) {
      const a = j * numCols + i;
      const b = j * numCols + i + 1;
      const c = (j + 1) * numCols + i;
      const d = (j + 1) * numCols + i + 1;

      indices.push(a, b, d);
      indices.push(a, d, c);
    }
  }

  const skinGeo = new THREE.BufferGeometry();
  skinGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  skinGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  skinGeo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  skinGeo.setIndex(indices);
  skinGeo.computeVertexNormals();

  // Stitch normals seamlessly across theta = 0 / 2*PI seam
  const normAttr = skinGeo.getAttribute('normal');
  for (let j = 0; j <= heightSegs; j++) {
    const idx0 = j * numCols;
    const idxLast = j * numCols + radialSegs;
    const nx = (normAttr.getX(idx0) + normAttr.getX(idxLast)) * 0.5;
    const ny = (normAttr.getY(idx0) + normAttr.getY(idxLast)) * 0.5;
    const nz = (normAttr.getZ(idx0) + normAttr.getZ(idxLast)) * 0.5;
    const len = Math.hypot(nx, ny, nz) || 1;
    normAttr.setXYZ(idx0, nx / len, ny / len, nz / len);
    normAttr.setXYZ(idxLast, nx / len, ny / len, nz / len);
  }
  normAttr.needsUpdate = true;

  const skinMesh = new THREE.Mesh(skinGeo, skinMat);
  skinMesh.castShadow = true;
  skinMesh.receiveShadow = true;
  skinMesh.name = 'anatomySkinMesh';
  group.add(skinMesh);

  // Architectural cross-section end caps (Bottom t=0 and Top t=1)
  const capMat = new THREE.MeshStandardMaterial({
    color: 0x121216,
    roughness: 0.45,
    metalness: 0.55
  });

  [0, 1].forEach((endT) => {
    const row = endT === 0 ? 0 : heightSegs;
    const capVerts = [];
    let centerX = 0, centerY = 0, centerZ = 0;

    for (let i = 0; i < radialSegs; i++) {
      const idx = (row * numCols + i) * 3;
      centerX += positions[idx];
      centerY += positions[idx + 1];
      centerZ += positions[idx + 2];
    }
    centerX /= radialSegs;
    centerY /= radialSegs;
    centerZ /= radialSegs;

    for (let i = 0; i < radialSegs; i++) {
      const nextI = (i + 1) % radialSegs;
      const idxA = (row * numCols + i) * 3;
      const idxB = (row * numCols + nextI) * 3;

      if (endT === 1) {
        capVerts.push(
          centerX, centerY, centerZ,
          positions[idxA], positions[idxA + 1], positions[idxA + 2],
          positions[idxB], positions[idxB + 1], positions[idxB + 2]
        );
      } else {
        capVerts.push(
          centerX, centerY, centerZ,
          positions[idxB], positions[idxB + 1], positions[idxB + 2],
          positions[idxA], positions[idxA + 1], positions[idxA + 2]
        );
      }
    }

    const capGeo = new THREE.BufferGeometry();
    capGeo.setAttribute('position', new THREE.Float32BufferAttribute(capVerts, 3));
    capGeo.computeVertexNormals();
    const capMesh = new THREE.Mesh(capGeo, capMat);
    capMesh.name = 'sectionCap';
    group.add(capMesh);
  });

  // Anatomical symmetry & reference guide lines on surface
  const guideGroup = new THREE.Group();
  guideGroup.name = 'anatomyGuides';
  guideGroup.visible = showGuides;

  const guideMat = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.14,
    depthWrite: false
  });

  // Vertical anterior & posterior symmetry lines (theta = 0 and theta = PI)
  [0, Math.PI, Math.PI * 0.5, Math.PI * 1.5].forEach((ang, idx) => {
    const pts = [];
    for (let j = 4; j <= heightSegs - 4; j += 2) {
      const t = j / heightSegs;
      const p = evaluateAnatomySurface(partId, ang, t, buildType);
      p.x *= 1.004;
      p.z *= 1.004;
      pts.push(p);
    }
    const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
    const m = idx < 2 ? guideMat : new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.07, depthWrite: false });
    guideGroup.add(new THREE.Line(lineGeo, m));
  });

  // Horizontal mid-section contour ring (t = 0.55)
  const ringPts = [];
  for (let i = 0; i <= radialSegs; i++) {
    const theta = (i / radialSegs) * Math.PI * 2;
    const p = evaluateAnatomySurface(partId, theta, 0.55, buildType);
    p.x *= 1.004;
    p.z *= 1.004;
    ringPts.push(p);
  }
  const ringGeo = new THREE.BufferGeometry().setFromPoints(ringPts);
  guideGroup.add(new THREE.Line(ringGeo, guideMat));

  group.add(guideGroup);

  return { group, skinMesh, guideGroup };
}

/**
 * Generates a subtle procedural skin pore / micro-grain bump texture
 */
function createSkinMicroTexture() {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const imgData = ctx.createImageData(size, size);
  const data = imgData.data;

  // Deterministic pseudo-random organic grain
  let seed = 1337;
  for (let i = 0; i < data.length; i += 4) {
    seed = (seed * 16807) % 2147483647;
    const v = 120 + ((seed & 255) * 0.12);
    data[i] = v;
    data[i + 1] = v;
    data[i + 2] = v;
    data[i + 3] = 255;
  }
  ctx.putImageData(imgData, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(14, 18);
  return tex;
}

// ============================================================================
// 4. APPLICATION STATE & THREE.JS SCENE
// ============================================================================
let currentLang = localStorage.getItem('forever_tattoo_lang') || 'pl';
let currentPartId = 'forearm';
let currentBuild = 'standard';
let currentSkinColorHex = '#ead0be';
let showGuides = true;

// Lighting state
let currentLightPreset = 'studio';
let currentLightAngleDeg = 35;

// Sketch & Image Processing State
let rawUploadedImage = null;
let currentSketchFileName = 'szkic-kalibracyjny.png';
let sketchAspectRatio = 1.0;
let removeWhiteBg = true;
let bgThreshold = 85; // 30..98
let invertSketch = false;
let isMonoInk = true;
let flipH = false;
let flipV = false;

// Active Tattoo Transform State
let tattooScale = 1.0;
let tattooRotation = 0;
let tattooOpacity = 0.92;
let tattooFinish = 'fresh'; // 'fresh' | 'healed' | 'stencil'
let tattooTintHex = '#141416';

// Processed Three.js Texture
let processedTattooTexture = null;
let processedPreviewDataUrl = '';

// Placed Tattoo Layers on the current body part
// Each layer: { id, name, texture, previewUrl, theta, tRatio, scale, rotation, opacity, flipH, flipV, finish, tintHex, isMono, mesh }
let tattooLayers = [];
let activeLayerId = null;
let layerCounter = 1;

// Target reticle position on body part (in cylindrical coords theta, tRatio)
let targetCoords = { theta: 0, tRatio: 0.56 };

// Three.js Objects
const container = document.getElementById('webglContainer');
let scene, camera, renderer, controls;
let keyLight, fillLight, rimLight, ambientLight;
let currentModelGroup = null;
let currentBodyMesh = null;
let currentGuideGroup = null;
let skinMaterial = null;
let skinBumpTexture = null;
let reticleGroup = null;

// Raycasting & Direct Manipulation
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let isDraggingDecal = false;
let pointerDownPos = { x: 0, y: 0 };
let cameraAnimFrame = null;

// ============================================================================
// 5. INITIALIZE THREE.JS STUDIO
// ============================================================================
function initThree() {
  const width = container.clientWidth;
  const height = container.clientHeight;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(36, width / height, 0.08, 50);
  camera.position.set(0, 0.04, 1.95);

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    preserveDrawingBuffer: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.minDistance = 0.55;
  controls.maxDistance = 4.2;
  controls.target.set(0, 0.02, 0);
  controls.maxPolarAngle = Math.PI * 0.85;
  controls.minPolarAngle = Math.PI * 0.15;

  setupStudioLighting();
  createReticleGizmo();

  skinBumpTexture = createSkinMicroTexture();
  skinMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(currentSkinColorHex),
    vertexColors: true,
    roughness: 0.56,
    metalness: 0.01,
    clearcoat: 0.08,
    clearcoatRoughness: 0.52,
    sheen: 0.35,
    sheenRoughness: 0.58,
    sheenColor: new THREE.Color(0xffbfa3),
    bumpMap: skinBumpTexture,
    bumpScale: 0.0022
  });

  // Build initial body part (Forearm)
  rebuildAnatomyMesh(true);

  // Event Listeners
  window.addEventListener('resize', onWindowResize);
  renderer.domElement.addEventListener('pointerdown', onPointerDown);
  renderer.domElement.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);

  animate();
}

function setupStudioLighting() {
  ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
  scene.add(ambientLight);

  keyLight = new THREE.DirectionalLight(0xfff4ea, 1.85);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 1024;
  keyLight.shadow.mapSize.height = 1024;
  keyLight.shadow.bias = -0.0005;
  scene.add(keyLight);

  fillLight = new THREE.DirectionalLight(0xdbe8ff, 0.55);
  scene.add(fillLight);

  rimLight = new THREE.DirectionalLight(0xffffff, 1.55);
  scene.add(rimLight);

  updateStudioLighting();
}

function updateStudioLighting() {
  const rad = THREE.MathUtils.degToRad(currentLightAngleDeg);
  const r = 3.6;

  keyLight.position.set(Math.sin(rad) * r, 2.2, Math.cos(rad) * r);
  fillLight.position.set(-Math.sin(rad + 0.85) * r, 1.0, Math.cos(rad + 0.85) * r);
  rimLight.position.set(-Math.sin(rad) * r, 2.5, -Math.cos(rad) * r);

  if (currentLightPreset === 'studio') {
    ambientLight.intensity = 0.45;
    keyLight.color.setHex(0xfff4ea);
    keyLight.intensity = 1.85;
    fillLight.intensity = 0.55;
    rimLight.intensity = 1.55;
  } else if (currentLightPreset === 'dramatic') {
    ambientLight.intensity = 0.26;
    keyLight.color.setHex(0xffeedd);
    keyLight.intensity = 2.25;
    fillLight.intensity = 0.25;
    rimLight.intensity = 2.15;
  } else if (currentLightPreset === 'daylight') {
    ambientLight.intensity = 0.78;
    keyLight.color.setHex(0xffffff);
    keyLight.intensity = 1.45;
    fillLight.intensity = 0.85;
    rimLight.intensity = 0.95;
  }
}

/**
 * Creates the 3D surface placement reticle ring
 */
function createReticleGizmo() {
  reticleGroup = new THREE.Group();

  // Outer precision ring
  const ringGeo = new THREE.RingGeometry(0.052, 0.058, 48);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.75,
    depthTest: false
  });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  reticleGroup.add(ringMesh);

  // Center dot
  const dotGeo = new THREE.CircleGeometry(0.008, 24);
  const dotMat = new THREE.MeshBasicMaterial({
    color: 0x10b981,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.9,
    depthTest: false
  });
  reticleGroup.add(new THREE.Mesh(dotGeo, dotMat));

  reticleGroup.renderOrder = 999;
  scene.add(reticleGroup);
}

/**
 * Positions the 3D reticle at cylindrical coordinates (theta, tRatio) on the current body part
 */
function updateReticlePosition() {
  if (!reticleGroup || !currentBodyMesh) return;
  reticleGroup.visible = showGuides;

  const hit = getSurfaceHitFromCoords(targetCoords.theta, targetCoords.tRatio);
  if (!hit) return;

  const offsetPoint = hit.point.clone().addScaledVector(hit.normal, 0.004);
  reticleGroup.position.copy(offsetPoint);

  const eye = offsetPoint.clone().add(hit.normal);
  const up = new THREE.Vector3(0, 1, 0);
  if (Math.abs(hit.normal.dot(up)) > 0.98) up.set(0, 0, 1);
  const m = new THREE.Matrix4().lookAt(eye, offsetPoint, up);
  reticleGroup.quaternion.setFromRotationMatrix(m);
}

// ============================================================================
// 6. REBUILD ANATOMY MESH & RE-PROJECT TATTOO LAYERS
// ============================================================================
function rebuildAnatomyMesh(resetCamera = false) {
  if (currentModelGroup) {
    scene.remove(currentModelGroup);
    currentModelGroup.traverse((c) => {
      if (c.geometry) c.geometry.dispose();
    });
  }

  const built = buildAnatomicalBodyPart(currentPartId, currentBuild, skinMaterial, showGuides);
  currentModelGroup = built.group;
  currentBodyMesh = built.skinMesh;
  currentGuideGroup = built.guideGroup;

  scene.add(currentModelGroup);
  currentModelGroup.updateMatrixWorld(true);

  const meta = BODY_PARTS_META[currentPartId];
  if (resetCamera && meta) {
    targetCoords = { ...meta.defaultPlacement };
    animateCameraTo(
      new THREE.Vector3(...meta.camPos),
      new THREE.Vector3(...meta.camTarget)
    );
  }

  // Re-project all existing tattoo layers onto the new/updated body part!
  tattooLayers.forEach((layer) => {
    if (resetCamera && tattooLayers.length === 1) {
      // Place single active tattoo right on the default anatomical zone of the new body part
      layer.theta = meta.defaultPlacement.theta;
      layer.tRatio = meta.defaultPlacement.tRatio;
    }
    rebuildLayerDecalMesh(layer);
  });

  updateReticlePosition();
  updateHudAndDimensions();
}

/**
 * Raycasts inward toward the centerline at (theta, tRatio) to get exact surface point & normal
 */
function getSurfaceHitFromCoords(theta, tRatio) {
  if (!currentBodyMesh) return null;
  const clampedT = Math.max(0.05, Math.min(0.95, tRatio));
  const surfPt = evaluateAnatomySurface(currentPartId, theta, clampedT, currentBuild);
  const centerPt = new THREE.Vector3(0, surfPt.y, 0);

  const dirOut = new THREE.Vector3(Math.sin(theta), 0, Math.cos(theta)).normalize();
  const origin = centerPt.clone().addScaledVector(dirOut, 2.2);
  const dirIn = dirOut.clone().negate();

  raycaster.set(origin, dirIn);
  const hits = raycaster.intersectObject(currentBodyMesh, false);
  if (hits.length > 0) {
    const hit = hits[0];
    const normal = hit.face.normal.clone().transformDirection(currentBodyMesh.matrixWorld).normalize();
    return { point: hit.point, normal };
  }
  return null;
}

function getPartSpan3D(partId) {
  if (partId === 'arm') return 1.58;
  if (partId === 'back' || partId === 'calf' || partId === 'thigh') return 1.54;
  if (partId === 'forearm') return 1.52;
  if (partId === 'neck') return 1.40;
  return 1.50;
}

/**
 * Converts a 3D intersection on the body mesh into cylindrical (theta, tRatio) coordinates
 */
function intersectionToCoords(intersection) {
  const pt = intersection.point;
  let theta = Math.atan2(pt.x, pt.z);
  const span = getPartSpan3D(currentPartId);
  let tRatio = (pt.y / span) + 0.5;
  tRatio = Math.max(0.05, Math.min(0.95, tRatio));
  return { theta, tRatio };
}

// ============================================================================
// 7. SMART SKETCH IMAGE PROCESSOR (BACKGROUND KNOCKOUT, TINT, FLIP)
// ============================================================================
function processUploadedSketch(onComplete) {
  if (!rawUploadedImage) return;

  const size = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, size, size);

  const imgW = rawUploadedImage.naturalWidth || rawUploadedImage.width || 512;
  const imgH = rawUploadedImage.naturalHeight || rawUploadedImage.height || 512;
  sketchAspectRatio = imgW / imgH;

  // Leave 8% padding around border so DecalGeometry never clips edge pixels
  const maxBox = size * 0.84;
  const scale = Math.min(maxBox / imgW, maxBox / imgH);
  const drawW = imgW * scale;
  const drawH = imgH * scale;

  ctx.save();
  ctx.translate(size / 2, size / 2);
  ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
  ctx.drawImage(rawUploadedImage, -drawW / 2, -drawH / 2, drawW, drawH);
  ctx.restore();

  const imgData = ctx.getImageData(0, 0, size, size);
  const data = imgData.data;

  // Parse selected ink color
  let targetHex = tattooTintHex;
  if (tattooFinish === 'stencil') {
    targetHex = '#52267a';
  } else if (tattooFinish === 'healed' && tattooTintHex === '#141416') {
    targetHex = '#263038';
  }
  const inkColor = new THREE.Color(targetHex);
  const inkR = Math.round(inkColor.r * 255);
  const inkG = Math.round(inkColor.g * 255);
  const inkB = Math.round(inkColor.b * 255);

  const thresh = (bgThreshold / 100) * 255;

  for (let i = 0; i < data.length; i += 4) {
    let a = data[i + 3];
    if (a === 0) continue;

    let r = data[i];
    let g = data[i + 1];
    let b = data[i + 2];

    if (invertSketch) {
      r = 255 - r;
      g = 255 - g;
      b = 255 - b;
    }

    const lum = 0.299 * r + 0.587 * g + 0.114 * b;

    if (removeWhiteBg) {
      if (lum >= thresh) {
        a = 0;
      } else {
        const darkness = Math.min(1, (thresh - lum) / Math.max(25, thresh * 0.72));
        a = Math.round(a * Math.pow(darkness, 0.85));
      }
    }

    if (a > 0 && isMonoInk) {
      data[i] = inkR;
      data[i + 1] = inkG;
      data[i + 2] = inkB;
    } else if (a > 0) {
      data[i] = r;
      data[i + 1] = g;
      data[i + 2] = b;
    }

    data[i + 3] = a;
  }

  ctx.putImageData(imgData, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = true;
  tex.needsUpdate = true;

  processedTattooTexture = tex;
  processedPreviewDataUrl = canvas.toDataURL('image/png');

  // Update thumbnail in UI
  const thumbImg = document.getElementById('sketchThumbImg');
  if (thumbImg) thumbImg.src = processedPreviewDataUrl;

  if (onComplete) onComplete(tex, processedPreviewDataUrl);
}

/**
 * Inspects whether a newly loaded image has an opaque light/white background
 */
function detectHasWhiteBackground(img) {
  const c = document.createElement('canvas');
  c.width = 32;
  c.height = 32;
  const ctx = c.getContext('2d');
  ctx.drawImage(img, 0, 0, 32, 32);
  const corners = [
    ctx.getImageData(1, 1, 1, 1).data,
    ctx.getImageData(30, 1, 1, 1).data,
    ctx.getImageData(1, 30, 1, 1).data,
    ctx.getImageData(30, 30, 1, 1).data
  ];
  let opaqueWhiteCount = 0;
  corners.forEach((px) => {
    const lum = 0.299 * px[0] + 0.587 * px[1] + 0.114 * px[2];
    if (px[3] > 235 && lum > 200) opaqueWhiteCount++;
  });
  return opaqueWhiteCount >= 2;
}

/**
 * Generates a crisp botanical/geometric calibration sketch on a canvas for instant testing
 */
function generateCalibrationSketchDataUrl() {
  const size = 768;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, size, size);

  ctx.strokeStyle = '#111111';
  ctx.fillStyle = '#111111';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  const cx = size / 2;
  const cy = size / 2;

  // Fine-line sacred geometry / gothic dagger & crescent composition
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx, 70);
  ctx.lineTo(cx, size - 70);
  ctx.stroke();

  // Diamond central frame
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(cx, 130);
  ctx.lineTo(cx + 150, cy);
  ctx.lineTo(cx, size - 130);
  ctx.lineTo(cx - 150, cy);
  ctx.closePath();
  ctx.stroke();

  // Inner concentric sun/mandala ring
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.arc(cx, cy, 88, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(cx, cy, 56, 0, Math.PI * 2);
  ctx.stroke();

  // 12 radial botanical/gothic petals
  for (let i = 0; i < 12; i++) {
    const ang = (i / 12) * Math.PI * 2;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(ang);
    ctx.beginPath();
    ctx.moveTo(0, -56);
    ctx.quadraticCurveTo(22, -100, 0, -135);
    ctx.quadraticCurveTo(-22, -100, 0, -56);
    ctx.stroke();
    ctx.restore();
  }

  // Crescent moons top & bottom
  [185, size - 185].forEach((my, idx) => {
    const dir = idx === 0 ? 1 : -1;
    ctx.beginPath();
    ctx.arc(cx, my, 28, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, my - 8 * dir, 22, 0, Math.PI * 2);
    ctx.fill();
  });

  return c.toDataURL('image/png');
}

// ============================================================================
// 8. TATTOO LAYER CREATION & DECAL PROJECTION
// ============================================================================
function rebuildLayerDecalMesh(layer) {
  if (!currentBodyMesh || !layer.texture) return;

  if (layer.mesh) {
    scene.remove(layer.mesh);
    if (layer.mesh.geometry) layer.mesh.geometry.dispose();
    if (layer.mesh.material) layer.mesh.material.dispose();
    layer.mesh = null;
  }

  const hit = getSurfaceHitFromCoords(layer.theta, layer.tRatio);
  if (!hit) return;

  const position = hit.point;
  const normal = hit.normal;

  const eye = position.clone().add(normal);
  const up = new THREE.Vector3(0, 1, 0);
  if (Math.abs(normal.dot(up)) > 0.98) up.set(0, 0, 1);

  const m = new THREE.Matrix4().lookAt(eye, position, up);
  // Proper rotation around local surface normal (Z axis) without gimbal lock
  const rotZ = new THREE.Matrix4().makeRotationZ(THREE.MathUtils.degToRad(layer.rotation));
  m.multiply(rotZ);

  const orientation = new THREE.Euler().setFromRotationMatrix(m);

  const meta = BODY_PARTS_META[currentPartId];
  const baseDim = (meta ? meta.baseDecalSize : 0.38) * layer.scale;
  const size = new THREE.Vector3(baseDim, baseDim, baseDim * 1.15);

  const decalGeo = new DecalGeometry(currentBodyMesh, position, orientation, size);

  const rough = layer.finish === 'fresh' ? 0.42 : (layer.finish === 'healed' ? 0.72 : 0.65);
  const decalMat = new THREE.MeshPhysicalMaterial({
    map: layer.texture,
    color: 0xffffff,
    transparent: true,
    opacity: layer.opacity,
    depthTest: true,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -4,
    roughness: rough,
    metalness: 0.02,
    bumpMap: skinBumpTexture,
    bumpScale: 0.0014
  });

  const decalMesh = new THREE.Mesh(decalGeo, decalMat);
  decalMesh.renderOrder = 10 + tattooLayers.indexOf(layer);
  decalMesh.userData.layerId = layer.id;

  scene.add(decalMesh);
  layer.mesh = decalMesh;
}

function getActiveLayer() {
  return tattooLayers.find((l) => l.id === activeLayerId) || null;
}

function createOrUpdateActiveLayerFromProcessed() {
  if (!processedTattooTexture) return;

  let active = getActiveLayer();
  if (!active) {
    const newLayer = {
      id: `layer_${Date.now()}_${layerCounter}`,
      indexNum: layerCounter++,
      name: currentSketchFileName,
      texture: processedTattooTexture,
      previewUrl: processedPreviewDataUrl,
      theta: targetCoords.theta,
      tRatio: targetCoords.tRatio,
      scale: tattooScale,
      rotation: tattooRotation,
      opacity: tattooOpacity,
      flipH,
      flipV,
      finish: tattooFinish,
      tintHex: tattooTintHex,
      isMono: isMonoInk,
      mesh: null
    };
    tattooLayers.push(newLayer);
    activeLayerId = newLayer.id;
    rebuildLayerDecalMesh(newLayer);
  } else {
    active.name = currentSketchFileName;
    active.texture = processedTattooTexture;
    active.previewUrl = processedPreviewDataUrl;
    active.scale = tattooScale;
    active.rotation = tattooRotation;
    active.opacity = tattooOpacity;
    active.flipH = flipH;
    active.flipV = flipV;
    active.finish = tattooFinish;
    active.tintHex = tattooTintHex;
    active.isMono = isMonoInk;
    rebuildLayerDecalMesh(active);
  }

  renderLayersChipsUI();
  updateHudAndDimensions();
}

function selectLayer(layerId) {
  const layer = tattooLayers.find((l) => l.id === layerId);
  if (!layer) return;
  activeLayerId = layer.id;

  // Sync UI controls to selected layer
  tattooScale = layer.scale;
  tattooRotation = layer.rotation;
  tattooOpacity = layer.opacity;
  flipH = layer.flipH;
  flipV = layer.flipV;
  tattooFinish = layer.finish;
  tattooTintHex = layer.tintHex;
  isMonoInk = layer.isMono;
  targetCoords = { theta: layer.theta, tRatio: layer.tRatio };

  syncSlidersFromState();
  updateReticlePosition();
  renderLayersChipsUI();
  updateHudAndDimensions();
}

function deleteLayer(layerId) {
  const idx = tattooLayers.findIndex((l) => l.id === layerId);
  if (idx === -1) return;
  const removed = tattooLayers[idx];
  if (removed.mesh) {
    scene.remove(removed.mesh);
    if (removed.mesh.geometry) removed.mesh.geometry.dispose();
    if (removed.mesh.material) removed.mesh.material.dispose();
  }
  tattooLayers.splice(idx, 1);

  if (tattooLayers.length > 0) {
    selectLayer(tattooLayers[tattooLayers.length - 1].id);
  } else {
    activeLayerId = null;
    renderLayersChipsUI();
    updateHudAndDimensions();
  }
}

function renderLayersChipsUI() {
  const bar = document.getElementById('placedLayersBar');
  const row = document.getElementById('layersChipsRow');
  if (!bar || !row) return;

  if (tattooLayers.length === 0) {
    bar.style.display = 'none';
    return;
  }

  bar.style.display = 'flex';
  row.innerHTML = '';
  const dict = fitterTranslations[currentLang] || fitterTranslations.pl;

  tattooLayers.forEach((layer, idx) => {
    const chip = document.createElement('div');
    chip.className = `layer-chip${layer.id === activeLayerId ? ' active' : ''}`;
    chip.innerHTML = `
      <span>#${idx + 1} ${dict.layer_label || 'Tatuaż'}</span>
      <button type="button" class="layer-chip-del" title="Usuń">&times;</button>
    `;
    chip.addEventListener('click', (e) => {
      if (e.target.classList.contains('layer-chip-del')) {
        deleteLayer(layer.id);
      } else {
        selectLayer(layer.id);
      }
    });
    row.appendChild(chip);
  });
}

// ============================================================================
// 9. POINTER INTERACTION (CLICK TO PLACE + DRAG ON SKIN TO SLIDE TATTOO)
// ============================================================================
function getCanvasMouseNDC(e) {
  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
}

function onPointerDown(e) {
  if (e.button !== 0) return;
  pointerDownPos.x = e.clientX;
  pointerDownPos.y = e.clientY;
  isDraggingDecal = false;

  getCanvasMouseNDC(e);
  raycaster.setFromCamera(mouse, camera);

  // Check if user pressed directly on a placed tattoo decal (or holds Shift on skin)
  const decalMeshes = tattooLayers.map((l) => l.mesh).filter(Boolean);
  if (decalMeshes.length > 0) {
    const decalHits = raycaster.intersectObjects(decalMeshes, false);
    if (decalHits.length > 0) {
      const hitLayerId = decalHits[0].object.userData.layerId;
      if (hitLayerId && hitLayerId !== activeLayerId) {
        selectLayer(hitLayerId);
      }
      isDraggingDecal = true;
      controls.enabled = false;
      container.classList.add('dragging-decal');
      return;
    }
  }

  if (e.shiftKey && currentBodyMesh) {
    const bodyHits = raycaster.intersectObject(currentBodyMesh, false);
    if (bodyHits.length > 0) {
      isDraggingDecal = true;
      controls.enabled = false;
      container.classList.add('dragging-decal');
      moveActiveTattooToIntersection(bodyHits[0]);
    }
  }
}

function onPointerMove(e) {
  if (!isDraggingDecal || !currentBodyMesh) return;

  getCanvasMouseNDC(e);
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObject(currentBodyMesh, false);
  if (hits.length > 0) {
    moveActiveTattooToIntersection(hits[0]);
  }
}

function onPointerUp(e) {
  if (isDraggingDecal) {
    isDraggingDecal = false;
    controls.enabled = true;
    container.classList.remove('dragging-decal');
    return;
  }

  const dist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
  if (dist > 6 || e.target !== renderer.domElement) return;

  // It was a clean click on the 3D canvas
  getCanvasMouseNDC(e);
  raycaster.setFromCamera(mouse, camera);

  if (currentBodyMesh) {
    const hits = raycaster.intersectObject(currentBodyMesh, false);
    if (hits.length > 0) {
      moveActiveTattooToIntersection(hits[0]);
    }
  }
}

function moveActiveTattooToIntersection(intersection) {
  const coords = intersectionToCoords(intersection);
  targetCoords = coords;
  updateReticlePosition();

  const active = getActiveLayer();
  if (active) {
    active.theta = coords.theta;
    active.tRatio = coords.tRatio;
    rebuildLayerDecalMesh(active);
  } else if (processedTattooTexture) {
    createOrUpdateActiveLayerFromProcessed();
  } else {
    const dict = fitterTranslations[currentLang] || fitterTranslations.pl;
    showStudioToast(dict.toast_upload_prompt);
    const dropzone = document.getElementById('uploadDropzone');
    if (dropzone) {
      dropzone.classList.add('drag-over');
      setTimeout(() => dropzone.classList.remove('drag-over'), 700);
    }
  }
}

// ============================================================================
// 10. CAMERA VIEWS, FOCUS ON TATTOO & ANIMATION
// ============================================================================
function animateCameraTo(targetPos, targetLookAt, durationMs = 420) {
  if (cameraAnimFrame) cancelAnimationFrame(cameraAnimFrame);

  const startPos = camera.position.clone();
  const startLook = controls.target.clone();
  const startTime = performance.now();

  function step(now) {
    const t = Math.min(1, (now - startTime) / durationMs);
    const ease = 1 - Math.pow(1 - t, 3);
    camera.position.lerpVectors(startPos, targetPos, ease);
    controls.target.lerpVectors(startLook, targetLookAt, ease);
    controls.update();

    if (t < 1) {
      cameraAnimFrame = requestAnimationFrame(step);
    } else {
      cameraAnimFrame = null;
    }
  }

  cameraAnimFrame = requestAnimationFrame(step);
}

function setCameraView(view) {
  const meta = BODY_PARTS_META[currentPartId];
  const dist = meta ? Math.hypot(meta.camPos[0], meta.camPos[2]) : 2.1;
  const y = meta ? meta.camPos[1] : 0.06;
  const target = meta ? new THREE.Vector3(...meta.camTarget) : new THREE.Vector3(0, 0, 0);

  switch (view) {
    case 'front':
      animateCameraTo(new THREE.Vector3(0, y, dist), target);
      break;
    case 'back':
      animateCameraTo(new THREE.Vector3(0, y, -dist), target);
      break;
    case 'left':
      animateCameraTo(new THREE.Vector3(-dist, y, 0), target);
      break;
    case 'right':
      animateCameraTo(new THREE.Vector3(dist, y, 0), target);
      break;
    case 'reset':
      if (meta) {
        animateCameraTo(new THREE.Vector3(...meta.camPos), target);
      }
      break;
  }

  document.querySelectorAll('.cam-views-group .cam-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.view === view);
  });
}

function focusCameraOnActiveTattoo() {
  const hit = getSurfaceHitFromCoords(targetCoords.theta, targetCoords.tRatio);
  if (!hit) return;

  const camPos = hit.point.clone().addScaledVector(hit.normal, 1.15);
  animateCameraTo(camPos, hit.point, 450);
}

// ============================================================================
// 11. REAL-WORLD DIMENSIONS (CM) & PRICE ESTIMATOR
// ============================================================================
function computeCurrentTattooCm() {
  const meta = BODY_PARTS_META[currentPartId] || BODY_PARTS_META.forearm;
  const span3D = getPartSpan3D(currentPartId);
  const cmPerUnit = meta.realHeightCm / span3D;
  const boxCm = meta.baseDecalSize * tattooScale * cmPerUnit * 0.84;

  let wCm = boxCm;
  let hCm = boxCm;
  if (sketchAspectRatio > 1) {
    hCm = boxCm / sketchAspectRatio;
  } else if (sketchAspectRatio < 1) {
    wCm = boxCm * sketchAspectRatio;
  }

  return {
    w: Math.max(1.5, wCm).toFixed(1),
    h: Math.max(1.5, hCm).toFixed(1),
    maxDim: Math.max(wCm, hCm)
  };
}

function estimatePriceString(maxCm) {
  if (currentLang === 'en') {
    if (maxCm < 7) return 'from 200 PLN';
    if (maxCm < 15) return 'from 350 PLN';
    return 'from 450 PLN (Session)';
  }
  if (currentLang === 'ru') {
    if (maxCm < 7) return 'от 200 zł';
    if (maxCm < 15) return 'от 350 zł';
    return 'от 450 zł (Сеанс)';
  }
  if (maxCm < 7) return 'od 200 zł';
  if (maxCm < 15) return 'od 350 zł';
  return 'od 450 zł (Sesja)';
}

function updateHudAndDimensions() {
  const dict = fitterTranslations[currentLang] || fitterTranslations.pl;
  const meta = BODY_PARTS_META[currentPartId] || BODY_PARTS_META.forearm;
  const partLabel = dict[meta.i18nKey] || 'Przedramię';

  const hudName = document.getElementById('hudPartName');
  const hudDims = document.getElementById('hudPartDims');
  const activeZoneBadge = document.getElementById('activeZoneNameBadge');
  if (hudName) hudName.textContent = partLabel;
  if (hudDims) hudDims.textContent = meta.dimsText[currentLang] || meta.dimsText.pl;
  if (activeZoneBadge) activeZoneBadge.textContent = partLabel;

  const cm = computeCurrentTattooCm();
  const realCmEl = document.getElementById('realCmDisplay');
  if (realCmEl) {
    realCmEl.textContent = `~${cm.w} × ${cm.h} cm`;
  }

  const hintText = document.getElementById('canvasHintText');
  if (hintText) {
    hintText.textContent = tattooLayers.length > 0 ? dict.canvas_hint_active : dict.canvas_hint_empty;
  }
}

function syncSlidersFromState() {
  const scaleSlider = document.getElementById('scaleSlider');
  const scaleDisplay = document.getElementById('scaleValueDisplay');
  const scalePct = Math.round(tattooScale * 100);
  if (scaleSlider) scaleSlider.value = scalePct;
  if (scaleDisplay) scaleDisplay.textContent = `${scalePct}%`;

  const rotateSlider = document.getElementById('rotateSlider');
  const rotateDisplay = document.getElementById('rotateValueDisplay');
  if (rotateSlider) rotateSlider.value = tattooRotation;
  if (rotateDisplay) rotateDisplay.textContent = `${tattooRotation}°`;

  const opacitySlider = document.getElementById('opacitySlider');
  const opacityDisplay = document.getElementById('opacityValueDisplay');
  const opPct = Math.round(tattooOpacity * 100);
  if (opacitySlider) opacitySlider.value = opPct;
  if (opacityDisplay) opacityDisplay.textContent = `${opPct}%`;

  document.querySelectorAll('#inkFinishGroup .tri-seg-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.finish === tattooFinish);
  });

  document.querySelectorAll('.ink-color-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.tint === tattooTintHex);
  });
}

// ============================================================================
// 12. LANGUAGE APPLICATION & TOAST HELPER
// ============================================================================
function applyFitterLanguage(lang) {
  if (!fitterTranslations[lang]) lang = 'pl';
  currentLang = lang;
  localStorage.setItem('forever_tattoo_lang', lang);
  document.documentElement.lang = lang;

  const dict = fitterTranslations[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (dict[key]) {
      el.setAttribute('title', dict[key]);
      el.setAttribute('aria-label', dict[key]);
    }
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update active skin tone name
  const activeSkinBtn = document.querySelector('.skin-tone-btn.active');
  const skinNameDisplay = document.getElementById('skinToneNameDisplay');
  if (activeSkinBtn && skinNameDisplay) {
    const key = activeSkinBtn.dataset.nameKey;
    if (dict[key]) skinNameDisplay.textContent = dict[key];
  }

  renderLayersChipsUI();
  updateHudAndDimensions();
}

let toastTimeout = null;
function showStudioToast(message) {
  const toast = document.getElementById('studioToast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, 2600);
}

/**
 * Captures a clean PNG snapshot of the 3D viewport (without guides/reticle)
 */
function captureClean3DSnapshot() {
  const prevReticle = reticleGroup ? reticleGroup.visible : false;
  const prevGuides = currentGuideGroup ? currentGuideGroup.visible : false;

  if (reticleGroup) reticleGroup.visible = false;
  if (currentGuideGroup) currentGuideGroup.visible = false;

  renderer.render(scene, camera);
  const dataUrl = renderer.domElement.toDataURL('image/png');

  if (reticleGroup) reticleGroup.visible = prevReticle;
  if (currentGuideGroup) currentGuideGroup.visible = prevGuides;
  renderer.render(scene, camera);

  return dataUrl;
}

// ============================================================================
// 13. WINDOW RESIZE & RENDER LOOP
// ============================================================================
function onWindowResize() {
  if (!container || !renderer || !camera) return;
  const w = container.clientWidth;
  const h = container.clientHeight;
  if (w === 0 || h === 0) return;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

// ============================================================================
// 14. LOAD IMAGE FILE INTO STUDIO
// ============================================================================
function loadSketchFromUrl(url, fileName = 'szkic-tatuazu.png') {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    rawUploadedImage = img;
    currentSketchFileName = fileName;

    // Auto-detect if image has an opaque white paper background
    removeWhiteBg = detectHasWhiteBackground(img);
    invertSketch = false;
    flipH = false;
    flipV = false;

    const removeBgBtn = document.getElementById('removeBgToggle');
    const bgGroup = document.getElementById('bgThresholdGroup');
    const invertBtn = document.getElementById('invertSketchToggle');
    if (removeBgBtn) {
      removeBgBtn.classList.toggle('active', removeWhiteBg);
      removeBgBtn.setAttribute('aria-checked', String(removeWhiteBg));
    }
    if (bgGroup) {
      bgGroup.style.display = removeWhiteBg ? 'flex' : 'none';
    }
    if (invertBtn) {
      invertBtn.classList.remove('active');
      invertBtn.setAttribute('aria-checked', 'false');
    }

    const fileNameEl = document.getElementById('sketchFileName');
    if (fileNameEl) fileNameEl.textContent = fileName;

    const dropzone = document.getElementById('uploadDropzone');
    const loadedPanel = document.getElementById('loadedSketchPanel');
    if (dropzone) dropzone.style.display = 'none';
    if (loadedPanel) loadedPanel.style.display = 'flex';

    processUploadedSketch(() => {
      createOrUpdateActiveLayerFromProcessed();
    });
  };
  img.src = url;
}

function handleUploadedFile(file) {
  if (!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    loadSketchFromUrl(ev.target.result, file.name);
  };
  reader.readAsDataURL(file);
}

// ============================================================================
// 15. UI EVENT BINDINGS
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initThree();
  applyFitterLanguage(currentLang);

  // 1. Body Part Cards (7 Anatomical Zones)
  document.querySelectorAll('.body-part-card').forEach((card) => {
    card.addEventListener('click', () => {
      const part = card.dataset.part;
      if (!part || part === currentPartId) return;

      document.querySelectorAll('.body-part-card').forEach((c) => c.classList.remove('active'));
      card.classList.add('active');
      currentPartId = part;
      rebuildAnatomyMesh(true);
    });
  });

  // 2. Anatomical Build / Physique (Slim / Standard / Athletic)
  document.querySelectorAll('#physiqueGroup .tri-seg-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#physiqueGroup .tri-seg-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentBuild = btn.dataset.build;
      rebuildAnatomyMesh(false);
    });
  });

  // 3. Skin Tones
  document.querySelectorAll('.skin-tone-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.skin-tone-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentSkinColorHex = btn.dataset.color;

      if (skinMaterial) {
        skinMaterial.color.set(currentSkinColorHex);
        const isPlaster = currentSkinColorHex === '#28282c';
        skinMaterial.sheen = isPlaster ? 0.05 : 0.28;
        skinMaterial.roughness = isPlaster ? 0.48 : 0.64;
      }

      const thumbBox = document.getElementById('sketchThumbBox');
      if (thumbBox) thumbBox.style.backgroundColor = currentSkinColorHex;

      const dict = fitterTranslations[currentLang] || fitterTranslations.pl;
      const nameEl = document.getElementById('skinToneNameDisplay');
      if (nameEl && dict[btn.dataset.nameKey]) {
        nameEl.textContent = dict[btn.dataset.nameKey];
      }
    });
  });

  // 4. Studio Lighting Presets & Direction Slider
  document.querySelectorAll('#lightingGroup .tri-seg-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#lightingGroup .tri-seg-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentLightPreset = btn.dataset.light;
      updateStudioLighting();
    });
  });

  const lightAngleSlider = document.getElementById('lightAngleSlider');
  const lightAngleValue = document.getElementById('lightAngleValue');
  if (lightAngleSlider) {
    lightAngleSlider.addEventListener('input', (e) => {
      currentLightAngleDeg = parseInt(e.target.value, 10);
      if (lightAngleValue) lightAngleValue.textContent = `${currentLightAngleDeg}°`;
      updateStudioLighting();
    });
  }

  // 5. Symmetry Guides & Reticle Toggle
  const toggleGuideBtn = document.getElementById('toggleGuideBtn');
  if (toggleGuideBtn) {
    toggleGuideBtn.addEventListener('click', () => {
      showGuides = !showGuides;
      toggleGuideBtn.classList.toggle('active', showGuides);
      toggleGuideBtn.setAttribute('aria-checked', String(showGuides));
      if (currentGuideGroup) currentGuideGroup.visible = showGuides;
      if (reticleGroup) reticleGroup.visible = showGuides;
    });
  }

  // 6. Upload Sketch (Click, Change, Drag & Drop, Paste Ctrl+V, Sample Calibration Sketch)
  const fileInput = document.getElementById('tattooFileInput');
  const dropzone = document.getElementById('uploadDropzone');
  const changeSketchBtn = document.getElementById('changeSketchBtn');
  const loadSampleBtn = document.getElementById('loadSampleSketchBtn');
  const addNewLayerBtn = document.getElementById('addNewLayerBtn');

  if (dropzone) {
    dropzone.addEventListener('click', (e) => {
      if (e.target === loadSampleBtn) return;
      fileInput.click();
    });
  }

  if (changeSketchBtn) {
    changeSketchBtn.addEventListener('click', () => fileInput.click());
  }

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleUploadedFile(e.target.files[0]);
        fileInput.value = '';
      }
    });
  }

  if (loadSampleBtn) {
    loadSampleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const sampleUrl = generateCalibrationSketchDataUrl();
      loadSketchFromUrl(sampleUrl, 'szkic-kalibracyjny.png');
    });
  }

  // Global Drag & Drop support
  window.addEventListener('dragover', (e) => {
    e.preventDefault();
    if (dropzone) dropzone.classList.add('drag-over');
  });
  window.addEventListener('dragleave', () => {
    if (dropzone) dropzone.classList.remove('drag-over');
  });
  window.addEventListener('drop', (e) => {
    e.preventDefault();
    if (dropzone) dropzone.classList.remove('drag-over');
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUploadedFile(e.dataTransfer.files[0]);
    }
  });

  // Paste from Clipboard (Ctrl+V)
  window.addEventListener('paste', (e) => {
    if (!e.clipboardData || !e.clipboardData.items) return;
    for (const item of e.clipboardData.items) {
      if (item.type.startsWith('image/')) {
        const blob = item.getAsFile();
        handleUploadedFile(blob);
        break;
      }
    }
  });

  // Add another tattoo layer
  if (addNewLayerBtn) {
    addNewLayerBtn.addEventListener('click', () => {
      if (!processedTattooTexture) return;
      // Offset slightly so the new layer is clearly visible
      targetCoords = {
        theta: targetCoords.theta + 0.28,
        tRatio: Math.max(0.18, Math.min(0.82, targetCoords.tRatio - 0.12))
      };
      activeLayerId = null;
      createOrUpdateActiveLayerFromProcessed();
      updateReticlePosition();
      const dict = fitterTranslations[currentLang] || fitterTranslations.pl;
      showStudioToast(dict.toast_layer_added);
    });
  }

  // Move active tattoo to center of current camera view
  const centerOnViewBtn = document.getElementById('centerOnViewBtn');
  if (centerOnViewBtn) {
    centerOnViewBtn.addEventListener('click', () => {
      if (!currentBodyMesh) return;
      raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
      const hits = raycaster.intersectObject(currentBodyMesh, false);
      if (hits.length > 0) {
        moveActiveTattooToIntersection(hits[0]);
      }
    });
  }

  // 7. Smart Sketch Filters (Background removal, Threshold, Invert, Mono vs Color)
  const removeBgToggle = document.getElementById('removeBgToggle');
  const bgThresholdGroup = document.getElementById('bgThresholdGroup');
  const bgThresholdSlider = document.getElementById('bgThresholdSlider');
  const bgThresholdValue = document.getElementById('bgThresholdValue');
  const invertSketchToggle = document.getElementById('invertSketchToggle');
  const modeMonoBtn = document.getElementById('modeMonoBtn');
  const modeColorBtn = document.getElementById('modeColorBtn');

  if (removeBgToggle) {
    removeBgToggle.addEventListener('click', () => {
      removeWhiteBg = !removeWhiteBg;
      removeBgToggle.classList.toggle('active', removeWhiteBg);
      removeBgToggle.setAttribute('aria-checked', String(removeWhiteBg));
      if (bgThresholdGroup) bgThresholdGroup.style.display = removeWhiteBg ? 'flex' : 'none';
      processUploadedSketch(() => createOrUpdateActiveLayerFromProcessed());
    });
  }

  if (bgThresholdSlider) {
    bgThresholdSlider.addEventListener('input', (e) => {
      bgThreshold = parseInt(e.target.value, 10);
      if (bgThresholdValue) bgThresholdValue.textContent = `${bgThreshold}%`;
      processUploadedSketch(() => createOrUpdateActiveLayerFromProcessed());
    });
  }

  if (invertSketchToggle) {
    invertSketchToggle.addEventListener('click', () => {
      invertSketch = !invertSketch;
      invertSketchToggle.classList.toggle('active', invertSketch);
      invertSketchToggle.setAttribute('aria-checked', String(invertSketch));
      processUploadedSketch(() => createOrUpdateActiveLayerFromProcessed());
    });
  }

  if (modeMonoBtn && modeColorBtn) {
    modeMonoBtn.addEventListener('click', () => {
      isMonoInk = true;
      modeMonoBtn.classList.add('active');
      modeColorBtn.classList.remove('active');
      processUploadedSketch(() => createOrUpdateActiveLayerFromProcessed());
    });
    modeColorBtn.addEventListener('click', () => {
      isMonoInk = false;
      modeColorBtn.classList.add('active');
      modeMonoBtn.classList.remove('active');
      processUploadedSketch(() => createOrUpdateActiveLayerFromProcessed());
    });
  }

  // 8. Scale, Rotation & Mirror Controls
  const scaleSlider = document.getElementById('scaleSlider');
  const scaleDisplay = document.getElementById('scaleValueDisplay');
  if (scaleSlider) {
    scaleSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      tattooScale = val / 100;
      if (scaleDisplay) scaleDisplay.textContent = `${val}%`;

      document.querySelectorAll('[data-scale]').forEach((p) => {
        p.classList.toggle('active', parseInt(p.dataset.scale, 10) === val);
      });

      const active = getActiveLayer();
      if (active) {
        active.scale = tattooScale;
        rebuildLayerDecalMesh(active);
      }
      updateHudAndDimensions();
    });
  }

  document.querySelectorAll('[data-scale]').forEach((pill) => {
    pill.addEventListener('click', () => {
      const val = parseInt(pill.dataset.scale, 10);
      if (scaleSlider) {
        scaleSlider.value = val;
        scaleSlider.dispatchEvent(new Event('input'));
      }
    });
  });

  const rotateSlider = document.getElementById('rotateSlider');
  const rotateDisplay = document.getElementById('rotateValueDisplay');
  if (rotateSlider) {
    rotateSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      tattooRotation = val;
      if (rotateDisplay) rotateDisplay.textContent = `${val}°`;

      const active = getActiveLayer();
      if (active) {
        active.rotation = tattooRotation;
        rebuildLayerDecalMesh(active);
      }
    });
  }

  document.querySelectorAll('[data-rot]').forEach((pill) => {
    pill.addEventListener('click', () => {
      const val = parseInt(pill.dataset.rot, 10);
      if (rotateSlider) {
        rotateSlider.value = val;
        rotateSlider.dispatchEvent(new Event('input'));
      }
    });
  });

  const flipHBtn = document.getElementById('flipHBtn');
  const flipVBtn = document.getElementById('flipVBtn');
  if (flipHBtn) {
    flipHBtn.addEventListener('click', () => {
      flipH = !flipH;
      flipHBtn.classList.toggle('active', flipH);
      processUploadedSketch(() => createOrUpdateActiveLayerFromProcessed());
    });
  }
  if (flipVBtn) {
    flipVBtn.addEventListener('click', () => {
      flipV = !flipV;
      flipVBtn.classList.toggle('active', flipV);
      processUploadedSketch(() => createOrUpdateActiveLayerFromProcessed());
    });
  }

  // 9. Ink Realism (Fresh / Healed / Stencil, Opacity, Pigment Shade)
  document.querySelectorAll('#inkFinishGroup .tri-seg-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#inkFinishGroup .tri-seg-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      tattooFinish = btn.dataset.finish;

      if (tattooFinish === 'fresh') {
        tattooOpacity = 0.94;
      } else if (tattooFinish === 'healed') {
        tattooOpacity = 0.78;
      } else if (tattooFinish === 'stencil') {
        tattooOpacity = 0.85;
      }
      syncSlidersFromState();
      processUploadedSketch(() => createOrUpdateActiveLayerFromProcessed());
    });
  });

  const opacitySlider = document.getElementById('opacitySlider');
  const opacityDisplay = document.getElementById('opacityValueDisplay');
  if (opacitySlider) {
    opacitySlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      tattooOpacity = val / 100;
      if (opacityDisplay) opacityDisplay.textContent = `${val}%`;
      const active = getActiveLayer();
      if (active && active.mesh) {
        active.opacity = tattooOpacity;
        active.mesh.material.opacity = tattooOpacity;
      }
    });
  }

  document.querySelectorAll('.ink-color-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ink-color-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      tattooTintHex = btn.dataset.tint;
      isMonoInk = true;
      if (modeMonoBtn && modeColorBtn) {
        modeMonoBtn.classList.add('active');
        modeColorBtn.classList.remove('active');
      }
      processUploadedSketch(() => createOrUpdateActiveLayerFromProcessed());
    });
  });

  // 10. Camera Quick Bar & Zoom
  document.querySelectorAll('.cam-btn[data-view]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setCameraView(btn.dataset.view);
    });
  });

  const focusTattooBtn = document.getElementById('focusTattooBtn');
  if (focusTattooBtn) {
    focusTattooBtn.addEventListener('click', focusCameraOnActiveTattoo);
  }

  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');
  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', () => {
      const dir = camera.position.clone().sub(controls.target);
      const nextLen = Math.max(controls.minDistance, dir.length() * 0.8);
      dir.setLength(nextLen);
      animateCameraTo(controls.target.clone().add(dir), controls.target.clone(), 240);
    });
  }
  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', () => {
      const dir = camera.position.clone().sub(controls.target);
      const nextLen = Math.min(controls.maxDistance, dir.length() * 1.25);
      dir.setLength(nextLen);
      animateCameraTo(controls.target.clone().add(dir), controls.target.clone(), 240);
    });
  }

  // 11. Undo & Clear
  document.getElementById('undoBtn')?.addEventListener('click', () => {
    if (tattooLayers.length > 0) {
      deleteLayer(tattooLayers[tattooLayers.length - 1].id);
    }
  });

  document.getElementById('clearAllBtn')?.addEventListener('click', () => {
    while (tattooLayers.length > 0) {
      deleteLayer(tattooLayers[0].id);
    }
    const dict = fitterTranslations[currentLang] || fitterTranslations.pl;
    showStudioToast(dict.toast_cleared);
  });

  // 12. Snapshot Button
  document.getElementById('takePhotoBtn')?.addEventListener('click', () => {
    const dataUrl = captureClean3DSnapshot();
    const link = document.createElement('a');
    link.download = `forever-3d-${currentPartId}-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
    const dict = fitterTranslations[currentLang] || fitterTranslations.pl;
    showStudioToast(dict.toast_photo_saved);
  });

  // 13. Integrated Booking Modal with 3D Project Preview
  const bookingModal = document.getElementById('fitterBookingModal');
  const bookBtn = document.getElementById('bookWithTattooBtn');
  const closeBookingBtn = document.getElementById('closeBookingModalBtn');
  const bookingForm = document.getElementById('fitterBookingForm');
  const bookingFormView = document.getElementById('bookingFormView');
  const bookingSuccessView = document.getElementById('bookingSuccessView');
  const closeSuccessBtn = document.getElementById('closeSuccessBtn');
  const downloadCardBtn = document.getElementById('downloadCardBtn');

  let latestModalSnapUrl = '';

  function openBookingModal() {
    latestModalSnapUrl = captureClean3DSnapshot();
    const snapImg = document.getElementById('modalProjectSnap');
    if (snapImg) snapImg.src = latestModalSnapUrl;

    const dict = fitterTranslations[currentLang] || fitterTranslations.pl;
    const meta = BODY_PARTS_META[currentPartId] || BODY_PARTS_META.forearm;
    const cm = computeCurrentTattooCm();

    const specPart = document.getElementById('modalSpecPart');
    const specSize = document.getElementById('modalSpecSize');
    const specPrice = document.getElementById('modalSpecPrice');

    if (specPart) specPart.textContent = dict[meta.i18nKey] || 'Przedramię';
    if (specSize) specSize.textContent = `~${cm.w} × ${cm.h} cm`;
    if (specPrice) specPrice.textContent = estimatePriceString(cm.maxDim);

    if (bookingFormView) bookingFormView.style.display = 'block';
    if (bookingSuccessView) bookingSuccessView.style.display = 'none';
    if (bookingModal) {
      bookingModal.classList.add('active');
      bookingModal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeBookingModal() {
    if (bookingModal) {
      bookingModal.classList.remove('active');
      bookingModal.setAttribute('aria-hidden', 'true');
    }
  }

  if (bookBtn) bookBtn.addEventListener('click', openBookingModal);
  if (closeBookingBtn) closeBookingBtn.addEventListener('click', closeBookingModal);
  if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', closeBookingModal);

  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeBookingModal();
    });
  }

  if (downloadCardBtn) {
    downloadCardBtn.addEventListener('click', () => {
      if (!latestModalSnapUrl) return;
      const a = document.createElement('a');
      a.download = `projekt-3d-${currentPartId}.png`;
      a.href = latestModalSnapUrl;
      a.click();
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (bookingFormView) bookingFormView.style.display = 'none';
      if (bookingSuccessView) bookingSuccessView.style.display = 'block';
      bookingForm.reset();
    });
  }

  // 14. Language Switcher
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyFitterLanguage(btn.dataset.lang);
    });
  });

  // 15. Mobile Panel Switcher Tabs
  const workspace = document.getElementById('fitterWorkspace');
  document.querySelectorAll('.mobile-tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mobile-tab-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      if (workspace) {
        workspace.setAttribute('data-mobile-tab', btn.dataset.panel);
      }
      setTimeout(onWindowResize, 50);
    });
  });
});
