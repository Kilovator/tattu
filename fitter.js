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
    sec_body_part_desc: "Wybierz obszar anatomiczny z 2. modelu (Athletic), aby obejrzeć detale ułożenia tatuażu na mięśniach.",
    part_fullbody: "Sylwetka 3D",
    part_fullbody_sub: "Cała sylwetka",
    part_torso: "Tors (przód i plecy)",
    part_torso_sub: "Klatka, brzuch i plecy",
    part_arm: "Cała ręka",
    part_arm_sub: "Ramię, przedramię, dłoń",
    part_leg: "Cała noga",
    part_leg_sub: "Udo, łydka, stopa",
    part_neck: "Szyja i głowa",
    part_neck_sub: "Szyja, kark i głowa",
    part_forearm: "Cała ręka",
    part_forearm_sub: "Ramię i przedramię",
    part_chest: "Tors (przód i plecy)",
    part_chest_sub: "Klatka piersiowa",
    part_back: "Tors (przód i plecy)",
    part_back_sub: "Plecy i łopatki",
    part_thigh: "Cała noga",
    part_thigh_sub: "Udo i biodro",
    part_calf: "Cała noga",
    part_calf_sub: "Noga i łydka",
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
    canvas_hint_empty: "Wgraj zdjęcie lub szkic po lewej stronie, aby przymierzyć tatuaż na ciele.",
    canvas_hint_active: "Kliknij lub przeciągnij tatuaż po skórze, aby zmienić pozycję. Obracaj model 360° myszą.",
    view_front: "PRZÓD",
    view_back: "TYŁ",
    view_left: "LEWY BOK",
    view_right: "PRAWY BOK",
    view_focus_tattoo: "ZBLIŻENIE",
    view_reset: "RESET",
    sec_smart_prep: "OBRÓBKA I TŁO",
    step_2_title: "TWOJE ZDJĘCIE / SZKIC",
    btn_upload_sketch: "Wgraj zdjęcie lub szkic (PNG / JPG / SVG)",
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
    form_master: "Artysta tatuażu",
    booking_artist_title: "Artysta tatuażu:",
    booking_artist_val: "Oleksandr • Forever Wrocław",
    master_any: "Oleksandr (Wrocław)",
    form_notes: "Dodatkowe uwagi do projektu",
    btn_download_snap: "Pobierz zrzut 3D",
    btn_submit_booking: "WYŚLIJ ZGŁOSZENIE DO STUDIA",
    success_heading: "PROJEKT WYSŁANY DO STUDIA!",
    success_text: "Otrzymaliśmy wizualizację 3D Twojego tatuażu wraz z wymiarami. Nasz menedżer skontaktuje się z Tobą w ciągu 15 minut.",
    success_close: "WRÓĆ DO PRZYMIERZALNI",
    toast_photo_saved: "Zapisano zrzut ekranu 3D (PNG)",
    toast_upload_prompt: "Celownik ustawiony — wgraj zdjęcie lub szkic po lewej stronie, aby nałożyć tatuaż",
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
    sec_body_part_desc: "Switch anatomical zones from Model 2 (Athletic) to inspect how your tattoo wraps around muscles.",
    part_fullbody: "3D Full Body",
    part_fullbody_sub: "Complete athletic figure",
    part_torso: "Torso (Front & Back)",
    part_torso_sub: "Chest, ribs, abs & back",
    part_arm: "Full Arm",
    part_arm_sub: "Shoulder, bicep, forearm & hand",
    part_leg: "Full Leg",
    part_leg_sub: "Thigh, knee, calf & foot",
    part_neck: "Neck & Head",
    part_neck_sub: "Neck, nape & head",
    part_forearm: "Full Arm",
    part_forearm_sub: "Arm & forearm",
    part_chest: "Torso (Front & Back)",
    part_chest_sub: "Chest & ribs",
    part_back: "Torso (Front & Back)",
    part_back_sub: "Back & spine",
    part_thigh: "Full Leg",
    part_thigh_sub: "Thigh & hip",
    part_calf: "Full Leg",
    part_calf_sub: "Calf & shin",
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
    canvas_hint_empty: "Upload your photo or sketch on the left to try the tattoo on the body.",
    canvas_hint_active: "Click or drag the tattoo directly on the skin to reposition. Drag outside to orbit 360°.",
    view_front: "FRONT",
    view_back: "BACK",
    view_left: "LEFT",
    view_right: "RIGHT",
    view_focus_tattoo: "FOCUS",
    view_reset: "RESET",
    sec_smart_prep: "PREPARATION & BACKGROUND",
    step_2_title: "YOUR PHOTO / SKETCH",
    btn_upload_sketch: "Upload your photo or sketch (PNG / JPG / SVG)",
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
    form_master: "Tattoo Artist",
    booking_artist_title: "Tattoo artist:",
    booking_artist_val: "Oleksandr • Forever Wrocław",
    master_any: "Oleksandr (Wrocław)",
    form_notes: "Additional project notes",
    btn_download_snap: "Download 3D Image",
    btn_submit_booking: "SEND BOOKING REQUEST",
    success_heading: "PROJECT SENT TO STUDIO!",
    success_text: "We received your 3D tattoo visualization and measurements. Our studio manager will contact you within 15 minutes.",
    success_close: "BACK TO 3D STUDIO",
    toast_photo_saved: "Saved 3D snapshot (PNG)",
    toast_upload_prompt: "Target set — upload your photo or sketch on the left to project it on the skin",
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
    sec_body_part_desc: "Выберите зону тела со 2-й анатомической модели, чтобы рассмотреть, как тату ложится по рельефу мышц.",
    part_fullbody: "Вся фигура 3D",
    part_fullbody_sub: "Полная атлетичная фигура",
    part_torso: "Торс (грудь и спина)",
    part_torso_sub: "Грудь, живот, рёбра и спина",
    part_arm: "Полная рука",
    part_arm_sub: "Плечо, бицепс, предплечье и кисть",
    part_leg: "Полная нога",
    part_leg_sub: "Бедро, колено, голень и стопа",
    part_neck: "Шея и голова",
    part_neck_sub: "Шея, затылок и голова",
    part_forearm: "Полная рука",
    part_forearm_sub: "Плечо и предплечье",
    part_chest: "Торс (грудь и спина)",
    part_chest_sub: "Грудь и ключицы",
    part_back: "Торс (грудь и спина)",
    part_back_sub: "Спина и лопатки",
    part_thigh: "Полная нога",
    part_thigh_sub: "Бедро",
    part_calf: "Полная нога",
    part_calf_sub: "Нога (икра и голень)",
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
    canvas_hint_empty: "Загрузите фото или эскиз слева, чтобы примерить тату на теле.",
    canvas_hint_active: "Кликайте или перетаскивайте тату прямо по коже. Вращайте камеру на 360° за пределами тату.",
    view_front: "СПЕРЕДИ",
    view_back: "СЗАДИ",
    view_left: "СЛЕВА",
    view_right: "СПРАВА",
    view_focus_tattoo: "КРУПНО",
    view_reset: "СБРОС",
    sec_smart_prep: "ОБРАБОТКА И ФОН",
    step_2_title: "ВАШЕ ФОТО / ЭСКИЗ",
    btn_upload_sketch: "Загрузить фото или эскиз (PNG / JPG / SVG)",
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
    form_master: "Мастер татуировки",
    booking_artist_title: "Мастер татуировки:",
    booking_artist_val: "Олександр • Forever Вроцлав",
    master_any: "Олександр (Вроцлав)",
    form_notes: "Пожелания к проекту",
    btn_download_snap: "Скачать 3D-снимок",
    btn_submit_booking: "ОТПРАВИТЬ ЗАЯВКУ В СТУДИЮ",
    success_heading: "ПРОЕКТ ОТПРАВЛЕН В СТУДИЮ!",
    success_text: "Мы получили вашу 3D-визуализацию татуировки с размерами. Администратор свяжется с вами в течение 15 минут.",
    success_close: "ВЕРНУТЬСЯ В 3D-СТУДИЮ",
    toast_photo_saved: "3D-снимок сохранён (PNG)",
    toast_upload_prompt: "Точка выбрана — загрузите фото или эскиз слева, чтобы примерить тату",
    toast_layer_added: "Добавлен новый слой — кликните по коже, чтобы разместить его",
    toast_cleared: "Модель очищена от татуировок",
    layer_label: "Тату"
  }
};

// ============================================================================
// 2. ANATOMICAL BODY PARTS METADATA (EXTRACTED FROM MODEL 2 — ATHLETIC MALE)
// ============================================================================
const BODY_PARTS_META = {
  fullbody: {
    i18nKey: 'part_fullbody',
    realHeightCm: 178,
    realCircCm: 104,
    baseDecalSize: 0.19,
    camPos: [0, 0.08, 2.38],
    camTarget: [0, 0.05, 0],
    defaultPlacement: { theta: -0.18, tRatio: 0.72 },
    dimsText: {
      pl: 'Model 2 (Athletic) • Wys. 178 cm',
      en: 'Model 2 (Athletic) • H. 178 cm',
      ru: 'Модель 2 (Атлет) • Рост 178 см'
    }
  },
  torso: {
    i18nKey: 'part_torso',
    realHeightCm: 68,
    realCircCm: 104,
    baseDecalSize: 0.44,
    camPos: [0, 0.05, 1.95],
    camTarget: [0, 0.02, 0],
    defaultPlacement: { theta: 0, tRatio: 0.58 },
    dimsText: {
      pl: 'Tors (klatka i plecy) ~104 cm • Wys. 68 cm',
      en: 'Torso (Chest & Back) ~104 cm • H. 68 cm',
      ru: 'Торс (грудь и спина) ~104 см • Рост 68 см'
    }
  },
  arm: {
    i18nKey: 'part_arm',
    realHeightCm: 76,
    realCircCm: 36,
    baseDecalSize: 0.38,
    camPos: [0, 0.04, 1.95],
    camTarget: [0, 0.02, 0],
    defaultPlacement: { theta: -0.15, tRatio: 0.55 },
    dimsText: {
      pl: 'Cała ręka (od barku do dłoni) • Dł. 76 cm',
      en: 'Full Arm (Shoulder to hand) • Len. 76 cm',
      ru: 'Полная рука (от плеча до кисти) • Дл. 76 см'
    }
  },
  leg: {
    i18nKey: 'part_leg',
    realHeightCm: 90,
    realCircCm: 58,
    baseDecalSize: 0.40,
    camPos: [0, 0.02, 2.10],
    camTarget: [0, -0.02, 0],
    defaultPlacement: { theta: 0, tRatio: 0.58 },
    dimsText: {
      pl: 'Cała noga ze stopą • Dł. 90 cm',
      en: 'Full Leg with Foot • Len. 90 cm',
      ru: 'Полная нога со стопой • Дл. 90 см'
    }
  },
  neck: {
    i18nKey: 'part_neck',
    realHeightCm: 38,
    realCircCm: 41,
    baseDecalSize: 0.36,
    camPos: [0, 0.05, 1.80],
    camTarget: [0, 0.02, 0],
    defaultPlacement: { theta: 0, tRatio: 0.42 },
    dimsText: {
      pl: 'Szyja i głowa • Obwód ~41 cm',
      en: 'Neck & Head • Circ. ~41 cm',
      ru: 'Шея и голова • Обхват ~41 см'
    }
  }
};

// Aliases for compatibility
BODY_PARTS_META.forearm = BODY_PARTS_META.arm;
BODY_PARTS_META.chest = BODY_PARTS_META.torso;
BODY_PARTS_META.back = BODY_PARTS_META.torso;
BODY_PARTS_META.thigh = BODY_PARTS_META.leg;
BODY_PARTS_META.calf = BODY_PARTS_META.leg;

// ============================================================================
// 3. SKETCHFAB MODEL 2 (ATHLETIC MALE) BINARY LOADER & ANATOMICAL PART SLICER
// ============================================================================
let model2SourceData = null;
let model2LoadingPromise = null;

/**
 * Loads and decodes `assets/models/model2_athletic.bin` (the 2nd model — Athletic Male
 * extracted from Sketchfab scene `31f1e665ed684f4eabc125788d616cf3`), computing
 * seamless vertex normals and anatomical ambient-occlusion vertex colors across the entire sculpt.
 */
async function loadModel2Binary() {
  if (model2SourceData) return model2SourceData;
  if (model2LoadingPromise) return model2LoadingPromise;

  const modelUrl = new URL('./assets/models/model2_athletic.bin', import.meta.url).href;
  model2LoadingPromise = fetch(modelUrl)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.arrayBuffer();
    })
    .then((buf) => {
      const view = new DataView(buf);
      const magic = view.getUint32(0, true);
      if (magic !== 0x324D4653) {
        throw new Error('Invalid SFM2 binary header');
      }
      const numV = view.getUint32(4, true);
      const numT = view.getUint32(8, true);

      const vI16 = new Int16Array(buf, 12, numV * 3);
      const idxU16 = new Uint16Array(buf, 12 + numV * 6, numT * 3);

      const positionsCm = new Float32Array(numV * 3);
      for (let i = 0; i < numV; i++) {
        positionsCm[i * 3] = vI16[i * 3] / 300.0;
        positionsCm[i * 3 + 1] = vI16[i * 3 + 1] / 300.0 + 90.0;
        positionsCm[i * 3 + 2] = vI16[i * 3 + 2] / 300.0;
      }

      // Compute smooth vertex normals on the full unified Model 2 mesh
      const fullGeo = new THREE.BufferGeometry();
      fullGeo.setAttribute('position', new THREE.BufferAttribute(positionsCm, 3));
      fullGeo.setIndex(new THREE.BufferAttribute(idxU16, 1));
      fullGeo.computeVertexNormals();
      const normals = fullGeo.getAttribute('normal').array;

      // Compute subtle anatomical shading / warm subsurface vertex colors from surface normals
      const colors = new Float32Array(numV * 3);
      for (let i = 0; i < numV; i++) {
        const ny = normals[i * 3 + 1];
        const nz = normals[i * 3 + 2];
        const shade = Math.max(0.84, Math.min(1.04, 0.96 + ny * 0.055 + Math.abs(nz) * 0.025));
        const warmCrease = ny < -0.25 ? (-ny - 0.25) * 0.045 : 0;
        colors[i * 3] = Math.min(1.05, shade * 1.008 + warmCrease);
        colors[i * 3 + 1] = shade * 0.992;
        colors[i * 3 + 2] = shade * 0.978;
      }

      model2SourceData = {
        numV,
        numT,
        positionsCm,
        normals,
        colors,
        indices: idxU16
      };
      return model2SourceData;
    });

  return model2LoadingPromise;
}

/**
 * Slicing predicates and studio alignment parameters for each body part of Model 2
 */
const MODEL2_PART_SLICES = {
  fullbody: {
    filter: () => true,
    rotZDeg: 0,
    rotXDeg: 0,
    rotYDeg: 0,
    targetSpan3D: 1.74,
    capFilter: null,
    capNormal: [0, 1, 0]
  },
  torso: {
    // Complete Torso (Waist up): Chest, ribs, abs, back, spine, shoulders, arms & neck intact!
    filter: (x, y) => y >= 88.0,
    rotZDeg: 0,
    rotXDeg: 0,
    rotYDeg: 0,
    targetSpan3D: 1.66,
    capFilter: (x, y, z) => y < 92.0 && Math.abs(x) < 25.0,
    capNormal: [0, -1, 0]
  },
  arm: {
    // Complete Arm from shoulder socket to hand & fingers
    filter: (x, y) => y >= 70.0 && y <= 153.0 && x <= -14.5 && (y >= 138.0 || x <= -18.5) && (y >= 120.0 || x <= -24.0) && (y >= 95.0 || x <= -30.0),
    rotZDeg: 12,
    rotXDeg: 4,
    rotYDeg: 0,
    targetSpan3D: 1.62,
    capFilter: (x, y, z) => y > 140.0,
    capNormal: [1, 0.4, 0]
  },
  leg: {
    // Complete Leg from hip/glute down to heel, foot and all toes intact!
    filter: (x, y) => y <= 92.0 && x <= 0.0 && (y < 68.0 ? x >= -31.5 : x >= -23.5),
    rotZDeg: 0,
    rotXDeg: 0,
    rotYDeg: 0,
    targetSpan3D: 1.66,
    capFilter: (x, y, z) => y > 85.0,
    capNormal: [0, 1, 0]
  },
  neck: {
    // Neck & Head with collarbone line
    filter: (x, y) => y >= 143.0 && Math.abs(x) <= 22.0,
    rotZDeg: 0,
    rotXDeg: 0,
    rotYDeg: 0,
    targetSpan3D: 1.52,
    capFilter: (x, y, z) => y < 147.0,
    capNormal: [0, -1, 0]
  }
};

MODEL2_PART_SLICES.forearm = MODEL2_PART_SLICES.arm;
MODEL2_PART_SLICES.chest = MODEL2_PART_SLICES.torso;
MODEL2_PART_SLICES.back = MODEL2_PART_SLICES.torso;
MODEL2_PART_SLICES.thigh = MODEL2_PART_SLICES.leg;
MODEL2_PART_SLICES.calf = MODEL2_PART_SLICES.leg;

function getGirthMultiplier(buildType) {
  if (buildType === 'slim') return 0.91;
  if (buildType === 'athletic') return 1.09;
  return 1.0;
}


/**
 * Extracts and transforms the requested anatomical part from Model 2 (or the full 2nd model)
 */
function buildAnatomicalBodyPart(partId, buildType, skinMat, showGuides = true) {
  const group = new THREE.Group();
  const guideGroup = new THREE.Group();
  guideGroup.name = 'anatomyGuides';
  guideGroup.visible = showGuides;

  if (!model2SourceData) {
    const dummyGeo = new THREE.BufferGeometry();
    const dummyMesh = new THREE.Mesh(dummyGeo, skinMat);
    group.add(dummyMesh);
    group.add(guideGroup);
    return { group, skinMesh: dummyMesh, guideGroup };
  }

  const sliceCfg = MODEL2_PART_SLICES[partId] || MODEL2_PART_SLICES.fullbody;
  const girthMul = getGirthMultiplier(buildType);

  const { numV, numT, positionsCm, normals, colors, indices } = model2SourceData;
  const filterFn = sliceCfg.filter;

  const selectedTris = [];
  const oldToNewV = new Int32Array(numV).fill(-1);
  let subNumV = 0;

  for (let t = 0; t < numT; t++) {
    const a = indices[t * 3];
    const b = indices[t * 3 + 1];
    const c = indices[t * 3 + 2];

    if (partId === 'fullbody') {
      selectedTris.push(a, b, c);
    } else {
      const mx = (positionsCm[a * 3] + positionsCm[b * 3] + positionsCm[c * 3]) / 3.0;
      const my = (positionsCm[a * 3 + 1] + positionsCm[b * 3 + 1] + positionsCm[c * 3 + 1]) / 3.0;
      const mz = (positionsCm[a * 3 + 2] + positionsCm[b * 3 + 2] + positionsCm[c * 3 + 2]) / 3.0;
      if (filterFn(mx, my, mz)) {
        selectedTris.push(a, b, c);
        if (oldToNewV[a] === -1) oldToNewV[a] = subNumV++;
        if (oldToNewV[b] === -1) oldToNewV[b] = subNumV++;
        if (oldToNewV[c] === -1) oldToNewV[c] = subNumV++;
      }
    }
  }

  if (partId === 'fullbody') {
    subNumV = numV;
    for (let i = 0; i < numV; i++) oldToNewV[i] = i;
  }

  // Seamless Anatomical Skin-Capping
  // Detects open boundary edges at the cut and seals them directly with matching skin geometry!
  const capTris = [];
  let capCenter = null;
  if (sliceCfg.capFilter && selectedTris.length > 0) {
    const edgeCount = new Map();
    for (let i = 0; i < selectedTris.length; i += 3) {
      const u0 = selectedTris[i];
      const u1 = selectedTris[i + 1];
      const u2 = selectedTris[i + 2];

      const k0 = (u0 * 100000) + u1;
      const k1 = (u1 * 100000) + u2;
      const k2 = (u2 * 100000) + u0;
      edgeCount.set(k0, (edgeCount.get(k0) || 0) + 1);
      edgeCount.set(k1, (edgeCount.get(k1) || 0) + 1);
      edgeCount.set(k2, (edgeCount.get(k2) || 0) + 1);
    }

    const bEdges = [];
    const bVerts = new Set();
    edgeCount.forEach((cnt, k) => {
      const u = Math.floor(k / 100000);
      const v = k % 100000;
      const revKey = (v * 100000) + u;
      if (!edgeCount.has(revKey)) {
        const xu = positionsCm[u * 3];
        const yu = positionsCm[u * 3 + 1];
        const zu = positionsCm[u * 3 + 2];
        const xv = positionsCm[v * 3];
        const yv = positionsCm[v * 3 + 1];
        const zv = positionsCm[v * 3 + 2];
        if (sliceCfg.capFilter(xu, yu, zu) && sliceCfg.capFilter(xv, yv, zv)) {
          bEdges.push([u, v]);
          bVerts.add(u);
          bVerts.add(v);
        }
      }
    });

    if (bEdges.length > 0 && bVerts.size > 0) {
      let sumX = 0, sumY = 0, sumZ = 0;
      let sumColR = 0, sumColG = 0, sumColB = 0;
      bVerts.forEach((v) => {
        sumX += positionsCm[v * 3];
        sumY += positionsCm[v * 3 + 1];
        sumZ += positionsCm[v * 3 + 2];
        sumColR += colors[v * 3];
        sumColG += colors[v * 3 + 1];
        sumColB += colors[v * 3 + 2];
      });
      const cnt = bVerts.size;
      const capNorm = sliceCfg.capNormal || [0, 1, 0];
      capCenter = {
        pos: [sumX / cnt, sumY / cnt, sumZ / cnt],
        norm: capNorm,
        col: [sumColR / cnt, sumColG / cnt, sumColB / cnt],
        newIdx: subNumV++
      };

      bEdges.forEach(([u, v]) => {
        capTris.push(oldToNewV[v], oldToNewV[u], capCenter.newIdx);
      });
    }
  }

  const cz = Math.cos((sliceCfg.rotZDeg * Math.PI) / 180);
  const sz = Math.sin((sliceCfg.rotZDeg * Math.PI) / 180);
  const cx = Math.cos((sliceCfg.rotXDeg * Math.PI) / 180);
  const sx = Math.sin((sliceCfg.rotXDeg * Math.PI) / 180);
  const cy = Math.cos((sliceCfg.rotYDeg * Math.PI) / 180);
  const sy = Math.sin((sliceCfg.rotYDeg * Math.PI) / 180);

  function rotateVec(vx, vy, vz) {
    const x1 = vx * cz - vy * sz;
    const y1 = vx * sz + vy * cz;
    const z1 = vz;
    const x2 = x1;
    const y2 = y1 * cx - z1 * sx;
    const z2 = y1 * sx + z1 * cx;
    const x3 = x2 * cy + z2 * sy;
    const y3 = y2;
    const z3 = -x2 * sy + z2 * cy;
    return [x3, y3, z3];
  }

  const subPos = new Float32Array(subNumV * 3);
  const subNorm = new Float32Array(subNumV * 3);
  const subCol = new Float32Array(subNumV * 3);
  const subUv = new Float32Array(subNumV * 2);

  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;
  let minZ = Infinity, maxZ = -Infinity;

  for (let oldIdx = 0; oldIdx < numV; oldIdx++) {
    const newIdx = oldToNewV[oldIdx];
    if (newIdx === -1) continue;

    const [rx, ry, rz] = rotateVec(
      positionsCm[oldIdx * 3],
      positionsCm[oldIdx * 3 + 1],
      positionsCm[oldIdx * 3 + 2]
    );
    const [nx, ny, nz] = rotateVec(
      normals[oldIdx * 3],
      normals[oldIdx * 3 + 1],
      normals[oldIdx * 3 + 2]
    );

    subPos[newIdx * 3] = rx;
    subPos[newIdx * 3 + 1] = ry;
    subPos[newIdx * 3 + 2] = rz;

    subNorm[newIdx * 3] = nx;
    subNorm[newIdx * 3 + 1] = ny;
    subNorm[newIdx * 3 + 2] = nz;

    subCol[newIdx * 3] = colors[oldIdx * 3];
    subCol[newIdx * 3 + 1] = colors[oldIdx * 3 + 1];
    subCol[newIdx * 3 + 2] = colors[oldIdx * 3 + 2];

    if (rx < minX) minX = rx;
    if (rx > maxX) maxX = rx;
    if (ry < minY) minY = ry;
    if (ry > maxY) maxY = ry;
    if (rz < minZ) minZ = rz;
    if (rz > maxZ) maxZ = rz;
  }

  if (capCenter) {
    const [rx, ry, rz] = rotateVec(capCenter.pos[0], capCenter.pos[1], capCenter.pos[2]);
    const [nx, ny, nz] = rotateVec(capCenter.norm[0], capCenter.norm[1], capCenter.norm[2]);
    const idx = capCenter.newIdx;

    subPos[idx * 3] = rx;
    subPos[idx * 3 + 1] = ry;
    subPos[idx * 3 + 2] = rz;

    subNorm[idx * 3] = nx;
    subNorm[idx * 3 + 1] = ny;
    subNorm[idx * 3 + 2] = nz;

    subCol[idx * 3] = capCenter.col[0];
    subCol[idx * 3 + 1] = capCenter.col[1];
    subCol[idx * 3 + 2] = capCenter.col[2];

    if (rx < minX) minX = rx;
    if (rx > maxX) maxX = rx;
    if (ry < minY) minY = ry;
    if (ry > maxY) maxY = ry;
    if (rz < minZ) minZ = rz;
    if (rz > maxZ) maxZ = rz;
  }

  const midX = (minX + maxX) * 0.5;
  const midY = (minY + maxY) * 0.5;
  const midZ = (minZ + maxZ) * 0.5;
  const heightCm = Math.max(1.0, maxY - minY);
  const scaleToStudio = sliceCfg.targetSpan3D / heightCm;

  for (let i = 0; i < subNumV; i++) {
    const x = (subPos[i * 3] - midX) * scaleToStudio * girthMul;
    const y = (subPos[i * 3 + 1] - midY) * scaleToStudio;
    const z = (subPos[i * 3 + 2] - midZ) * scaleToStudio * girthMul;

    subPos[i * 3] = x;
    subPos[i * 3 + 1] = y;
    subPos[i * 3 + 2] = z;

    let nx = subNorm[i * 3] / girthMul;
    let ny = subNorm[i * 3 + 1];
    let nz = subNorm[i * 3 + 2] / girthMul;
    const nLen = Math.hypot(nx, ny, nz) || 1.0;
    subNorm[i * 3] = nx / nLen;
    subNorm[i * 3 + 1] = ny / nLen;
    subNorm[i * 3 + 2] = nz / nLen;

    const theta = Math.atan2(x, z);
    subUv[i * 2] = (theta / (Math.PI * 2)) + 0.5;
    subUv[i * 2 + 1] = (y / sliceCfg.targetSpan3D) + 0.5;
  }

  const totalIndices = selectedTris.length + capTris.length;
  const subIndices = subNumV > 65535 ? new Uint32Array(totalIndices) : new Uint16Array(totalIndices);
  for (let i = 0; i < selectedTris.length; i++) {
    subIndices[i] = oldToNewV[selectedTris[i]];
  }
  for (let i = 0; i < capTris.length; i++) {
    subIndices[selectedTris.length + i] = capTris[i];
  }

  const skinGeo = new THREE.BufferGeometry();
  skinGeo.setAttribute('position', new THREE.BufferAttribute(subPos, 3));
  skinGeo.setAttribute('normal', new THREE.BufferAttribute(subNorm, 3));
  skinGeo.setAttribute('color', new THREE.BufferAttribute(subCol, 3));
  skinGeo.setAttribute('uv', new THREE.BufferAttribute(subUv, 2));
  skinGeo.setIndex(new THREE.BufferAttribute(subIndices, 1));
  skinGeo.computeBoundingBox();
  skinGeo.computeBoundingSphere();

  const skinMesh = new THREE.Mesh(skinGeo, skinMat);
  skinMesh.castShadow = true;
  skinMesh.receiveShadow = true;
  skinMesh.name = 'anatomySkinMesh';
  group.add(skinMesh);

  // Subtle studio reference axis & pedestal ring
  const guideMat = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.12,
    depthWrite: false
  });
  const halfSpan = sliceCfg.targetSpan3D * 0.5;
  const axisGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, -halfSpan * 1.02, 0),
    new THREE.Vector3(0, halfSpan * 1.02, 0)
  ]);
  guideGroup.add(new THREE.Line(axisGeo, guideMat));

  const ringPts = [];
  const pedRadius = partId === 'fullbody' ? 0.36 : 0.28;
  for (let i = 0; i <= 64; i++) {
    const a = (i / 64) * Math.PI * 2;
    ringPts.push(new THREE.Vector3(Math.cos(a) * pedRadius, -halfSpan - 0.04, Math.sin(a) * pedRadius));
  }
  const pedGeo = new THREE.BufferGeometry().setFromPoints(ringPts);
  guideGroup.add(new THREE.Line(pedGeo, guideMat));

  group.add(guideGroup);

  return { group, skinMesh, guideGroup };
}

/**
 * Fast local-patch DecalGeometry builder:
 * Extracts only the triangles of `bodyMesh` within bounding sphere radius of `position`
 * before running `DecalGeometry`, keeping tattoo projection & skin dragging < 1ms at 60 FPS
 * even on the 135,914-triangle full Model 2 mesh!
 */
function createFastDecalGeometry(bodyMesh, position, orientation, size) {
  const geo = bodyMesh.geometry;
  const posAttr = geo.getAttribute('position');
  const normAttr = geo.getAttribute('normal');
  const idxAttr = geo.getIndex();

  if (!idxAttr) {
    return new DecalGeometry(bodyMesh, position, orientation, size);
  }

  const posArr = posAttr.array;
  const normArr = normAttr.array;
  const idxArr = idxAttr.array;

  const radius = Math.max(size.x, size.y, size.z) * 0.92;
  const rSq = radius * radius;
  const px = position.x;
  const py = position.y;
  const pz = position.z;

  const patchPos = [];
  const patchNorm = [];
  const numTris = idxArr.length / 3;

  for (let t = 0; t < numTris; t++) {
    const a = idxArr[t * 3];
    const b = idxArr[t * 3 + 1];
    const c = idxArr[t * 3 + 2];

    const ax = posArr[a * 3], ay = posArr[a * 3 + 1], az = posArr[a * 3 + 2];
    const dx = ax - px, dy = ay - py, dz = az - pz;
    if (dx * dx + dy * dy + dz * dz > rSq) {
      const bx = posArr[b * 3] - px, by = posArr[b * 3 + 1] - py, bz = posArr[b * 3 + 2] - pz;
      if (bx * bx + by * by + bz * bz > rSq) {
        const cx = posArr[c * 3] - px, cy = posArr[c * 3 + 1] - py, cz = posArr[c * 3 + 2] - pz;
        if (cx * cx + cy * cy + cz * cz > rSq) continue;
      }
    }

    patchPos.push(
      ax, ay, az,
      posArr[b * 3], posArr[b * 3 + 1], posArr[b * 3 + 2],
      posArr[c * 3], posArr[c * 3 + 1], posArr[c * 3 + 2]
    );
    patchNorm.push(
      normArr[a * 3], normArr[a * 3 + 1], normArr[a * 3 + 2],
      normArr[b * 3], normArr[b * 3 + 1], normArr[b * 3 + 2],
      normArr[c * 3], normArr[c * 3 + 1], normArr[c * 3 + 2]
    );
  }

  const patchGeo = new THREE.BufferGeometry();
  patchGeo.setAttribute('position', new THREE.Float32BufferAttribute(patchPos, 3));
  patchGeo.setAttribute('normal', new THREE.Float32BufferAttribute(patchNorm, 3));

  const patchMesh = new THREE.Mesh(patchGeo);
  patchMesh.matrixWorld.copy(bodyMesh.matrixWorld);

  const decalGeo = new DecalGeometry(patchMesh, position, orientation, size);
  patchGeo.dispose();
  return decalGeo;
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
let currentPartId = 'fullbody';
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
    bumpScale: 0.0022,
    side: THREE.DoubleSide
  });

  // Load Sketchfab Model 2 (Athletic Male) binary and build initial mesh
  const loaderEl = document.getElementById('fitterLoader');
  if (loaderEl) loaderEl.style.display = 'flex';
  loadModel2Binary()
    .then(() => {
      if (loaderEl) loaderEl.style.display = 'none';
      rebuildAnatomyMesh(true);
    })
    .catch((err) => {
      console.error('Failed to load Model 2 binary:', err);
      if (loaderEl) loaderEl.style.display = 'none';
    });

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
 * Positions the 3D reticle on the current body part surface
 */
function updateReticlePosition() {
  if (!reticleGroup || !currentBodyMesh) return;
  reticleGroup.visible = showGuides;

  const hit = getSurfaceHitFromCoords(targetCoords);
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
  if (!model2SourceData) return;

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
    targetCoords = { ...meta.defaultPlacement, partId: currentPartId };
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
      layer.localPoint = null;
      layer.normal = null;
      layer.partId = currentPartId;
    }
    rebuildLayerDecalMesh(layer);
  });

  updateReticlePosition();
  updateHudAndDimensions();
}

/**
 * Raycasts onto `currentBodyMesh` using either stored 3D surface hit (`localPoint`, `normal`)
 * or cylindrical coordinates (`theta`, `tRatio`) to get exact surface point & normal.
 */
function getSurfaceHitFromCoords(coordsOrTheta, maybeTRatio) {
  if (!currentBodyMesh) return null;

  let theta = 0;
  let tRatio = 0.56;
  let localPoint = null;
  let storedNormal = null;
  let partId = null;

  if (typeof coordsOrTheta === 'object' && coordsOrTheta !== null) {
    theta = coordsOrTheta.theta ?? 0;
    tRatio = coordsOrTheta.tRatio ?? 0.56;
    localPoint = coordsOrTheta.localPoint || null;
    storedNormal = coordsOrTheta.normal || null;
    partId = coordsOrTheta.partId || null;
  } else {
    theta = coordsOrTheta ?? 0;
    tRatio = maybeTRatio ?? 0.56;
  }

  const girthMul = getGirthMultiplier(currentBuild);

  // 1. If we have an exact 3D surface point on this body part, cast along its local normal
  if (localPoint && storedNormal && partId === currentPartId) {
    const targetPt = new THREE.Vector3(
      localPoint.x * girthMul,
      localPoint.y,
      localPoint.z * girthMul
    );
    const nVec = new THREE.Vector3(storedNormal.x, storedNormal.y, storedNormal.z).normalize();
    const origin = targetPt.clone().addScaledVector(nVec, 0.45);
    const dirIn = nVec.clone().negate();

    raycaster.set(origin, dirIn);
    const hits = raycaster.intersectObject(currentBodyMesh, false);
    if (hits.length > 0) {
      const hit = hits[0];
      const normal = hit.face.normal.clone().transformDirection(currentBodyMesh.matrixWorld).normalize();
      return { point: hit.point, normal };
    }
  }

  // 2. Fallback radial raycast for initial default placement or when switching body parts
  const span = getPartSpan3D(currentPartId);
  const clampedT = Math.max(0.06, Math.min(0.94, tRatio));
  const y = (clampedT - 0.5) * span;
  const centerPt = new THREE.Vector3(0, y, 0);

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
  const cfg = MODEL2_PART_SLICES[partId];
  return cfg ? cfg.targetSpan3D : 1.52;
}

/**
 * Converts a 3D raycast intersection on the body mesh into surface coordinates
 */
function intersectionToCoords(intersection) {
  const pt = intersection.point;
  const girthMul = getGirthMultiplier(currentBuild);
  const worldNormal = intersection.face
    ? intersection.face.normal.clone().transformDirection(currentBodyMesh.matrixWorld).normalize()
    : new THREE.Vector3(0, 0, 1);

  const theta = Math.atan2(pt.x, pt.z);
  const span = getPartSpan3D(currentPartId);
  let tRatio = (pt.y / span) + 0.5;
  tRatio = Math.max(0.03, Math.min(0.97, tRatio));

  return {
    theta,
    tRatio,
    localPoint: {
      x: pt.x / girthMul,
      y: pt.y,
      z: pt.z / girthMul
    },
    normal: {
      x: worldNormal.x,
      y: worldNormal.y,
      z: worldNormal.z
    },
    partId: currentPartId
  };
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

  const hit = getSurfaceHitFromCoords(layer);
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

  const decalGeo = createFastDecalGeometry(currentBodyMesh, position, orientation, size);

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
      localPoint: targetCoords.localPoint || null,
      normal: targetCoords.normal || null,
      partId: targetCoords.partId || currentPartId,
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
  targetCoords = {
    theta: layer.theta,
    tRatio: layer.tRatio,
    localPoint: layer.localPoint || null,
    normal: layer.normal || null,
    partId: layer.partId || currentPartId
  };

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
    active.localPoint = coords.localPoint;
    active.normal = coords.normal;
    active.partId = coords.partId;
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
  const hit = getSurfaceHitFromCoords(targetCoords);
  if (!hit) return;

  const dist = currentPartId === 'fullbody' ? 0.85 : 1.15;
  const camPos = hit.point.clone().addScaledVector(hit.normal, dist);
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
  const cmFormatted = `~${cm.w} × ${cm.h} cm`;
  const realCmEl = document.getElementById('realCmDisplay');
  if (realCmEl) {
    realCmEl.textContent = cmFormatted;
  }
  const scaleDisplay = document.getElementById('scaleValueDisplay');
  if (scaleDisplay) {
    scaleDisplay.textContent = cmFormatted;
  }

  const hintText = document.getElementById('canvasHintText');
  if (hintText) {
    hintText.textContent = tattooLayers.length > 0 ? dict.canvas_hint_active : dict.canvas_hint_empty;
  }
}

function updateSliderProgress(slider) {
  if (!slider) return;
  const min = parseFloat(slider.min) !== undefined && !isNaN(parseFloat(slider.min)) ? parseFloat(slider.min) : 0;
  const max = parseFloat(slider.max) !== undefined && !isNaN(parseFloat(slider.max)) ? parseFloat(slider.max) : 100;
  const val = parseFloat(slider.value) !== undefined && !isNaN(parseFloat(slider.value)) ? parseFloat(slider.value) : 0;
  const range = max - min || 1;
  const pct = Math.max(0, Math.min(100, ((val - min) / range) * 100));
  slider.style.setProperty('--slider-pct', `${pct.toFixed(2)}%`);
}

function syncSlidersFromState() {
  const scaleSlider = document.getElementById('scaleSlider');
  const scaleDisplay = document.getElementById('scaleValueDisplay');
  const scalePct = Math.round(tattooScale * 100);
  if (scaleSlider) {
    scaleSlider.value = scalePct;
    updateSliderProgress(scaleSlider);
  }
  const cm = computeCurrentTattooCm();
  if (scaleDisplay) scaleDisplay.textContent = `~${cm.w} × ${cm.h} cm`;

  const rotateSlider = document.getElementById('rotateSlider');
  const rotateDisplay = document.getElementById('rotateValueDisplay');
  if (rotateSlider) {
    rotateSlider.value = tattooRotation;
    updateSliderProgress(rotateSlider);
  }
  if (rotateDisplay) rotateDisplay.textContent = `${tattooRotation}°`;

  const opacitySlider = document.getElementById('opacitySlider');
  const opacityDisplay = document.getElementById('opacityValueDisplay');
  const opPct = Math.round(tattooOpacity * 100);
  if (opacitySlider) {
    opacitySlider.value = opPct;
    updateSliderProgress(opacitySlider);
  }
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

  const rightUploadTriggerBtn = document.getElementById('rightUploadTriggerBtn');
  if (rightUploadTriggerBtn && fileInput) {
    rightUploadTriggerBtn.addEventListener('click', () => fileInput.click());
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
      const cm = computeCurrentTattooCm();
      if (scaleDisplay) scaleDisplay.textContent = `~${cm.w} × ${cm.h} cm`;

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

  // 13.5. Bind and Initialize all Neumorphic Range Sliders
  document.querySelectorAll('.fitter-range').forEach((slider) => {
    updateSliderProgress(slider);
    slider.addEventListener('input', () => updateSliderProgress(slider));
  });

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
