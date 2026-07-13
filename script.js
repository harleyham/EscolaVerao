(function () {
  const storageKey = "geomrit-language";
  const translations = {
    en: {
      "meta.title": "GEOMRIT 2027 | LIGEM.Redes Summer School",
      "meta.description": "GEOMRIT 2027, the 1st Summer School in Geointelligence and Network Modeling of Transnational Illicit Activities.",
      "nav.mainLabel": "Main navigation",
      "nav.sectionsLabel": "Sections",
      "nav.home": "Home",
      "nav.summerSchool": "Summer School",
      "nav.program": "Program",
      "nav.schedule": "Schedule",
      "nav.registration": "Registration",
      "nav.photos": "Photos",
      "nav.contact": "Contact",
      "nav.language": "Language",
      "nav.languageSwitch": "Language switcher",
      "nav.openMenu": "Open menu",
      "nav.closeMenu": "Close menu",
      "hero.bgLabel": "Aerial view of the Amazon forest",
      "hero.eyebrow": "1st Summer School",
      "hero.title": "Geointelligence and Network Modeling of Transnational Illicit Activities",
      "hero.copy": "An initiative by LIGEM.Redes to strengthen advanced training, scientific collaboration and interdisciplinary research applied to the Amazon.",
      "hero.factsLabel": "Quick information",
      "hero.editionLabel": "Edition",
      "hero.periodLabel": "Expected period",
      "hero.periodValue": "Jan. or Feb. 2027",
      "hero.languagesLabel": "Languages",
      "hero.languagesValue": "Portuguese and English",
      "intro.title": "A school to consolidate scientific and technological capabilities.",
      "intro.copy": "GEOMRIT 2027 was conceived as a strategic initiative to consolidate and expand the scientific capabilities of LIGEM.Redes, CENSIPAM and other technical and scientific institutions linked to the Ministry of Defense.",
      "summer.eyebrow": "Summer School",
      "summer.title": "Conceptual Framework",
      "summer.cardTitle": "1st Summer School in Geointelligence and Network Modeling of Transnational Illicit Activities",
      "summer.copy": "The program combines intensive teaching activities with opportunities for exchange and scientific collaboration through undergraduate and graduate short courses, advanced scientific seminars, poster presentations and interactions with leading national and international researchers.",
      "summer.metaLabel": "Summer school details",
      "summer.dateLabel": "Schedule",
      "summer.dateValue": "Second half of January or February 2027",
      "summer.participantsLabel": "Participants",
      "summer.participantsValue": "25 to 30 per short course; 60 to 80 in seminars",
      "summer.formatLabel": "Format",
      "summer.formatValue": "Intensive teaching, seminars, posters and technical visit",
      "objectives.eyebrow": "Objectives",
      "objectives.title": "Advanced training, scientific collaboration and applied research.",
      "objectives.generalTitle": "General objective",
      "objectives.generalCopy": "Strengthen the scientific and technological capabilities of LIGEM.Redes, CENSIPAM and institutions linked to the Ministry of Defense, encouraging research in geointelligence, remote sensing, modeling, optimization, econometrics, artificial intelligence, high-performance computing, transportation, mobility and impact evaluation.",
      "objectives.specificTitle": "Specific objectives",
      "objectives.specific1": "Promote advanced training in geointelligence and network modeling of transnational illicit activities.",
      "objectives.specific2": "Encourage multi- and interdisciplinary scientific exchange.",
      "objectives.specific3": "Strengthen cooperation among LIGEM.Redes, CENSIPAM, universities and partner institutions.",
      "objectives.specific4": "Support new collaborations, scientific networks and research agendas aligned with LIGEM.Redes' mission.",
      "program.eyebrow": "Program",
      "program.title": "Proposed structure",
      "program.shortCoursesLabel": "Short courses",
      "program.shortCoursesTitle": "Undergraduate and graduate level",
      "program.shortCoursesCopy": "Specialized activities in geointelligence, network modeling, computing, quantitative methods and related topics.",
      "program.classesLabel": "Groups",
      "program.classesValue": "25 to 30 participants",
      "program.sessionsLabel": "Sessions",
      "program.sessionsValue": "6 per short course",
      "program.durationLabel": "Duration",
      "program.durationValue": "Morning and afternoon",
      "program.seminarsLabel": "Seminars",
      "program.seminarsTitle": "National and international",
      "program.seminarsCopy": "Advanced scientific talks with invited researchers, promoting dialogue among academia, government and the defense sector.",
      "program.audienceLabel": "Audience",
      "program.audienceValue": "60 to 80 participants",
      "program.languagesLabel": "Languages",
      "program.languagesValue": "Portuguese and English",
      "program.focusLabel": "Focus",
      "program.focusValue": "Frontier research",
      "program.postersLabel": "Poster sessions",
      "program.postersTitle": "Research presentations",
      "program.postersCopy": "A space for students and researchers to share work, receive feedback and expand scientific collaboration networks.",
      "program.visitLabel": "Technical visit",
      "program.visitTitle": "Applied integration",
      "program.visitCopy": "An activity designed to connect scientific concepts, institutional infrastructure and operational applications.",
      "schedule.eyebrow": "Proposed schedule",
      "schedule.title": "Week agenda",
      "schedule.tableLabel": "Proposed GEOMRIT 2027 schedule",
      "schedule.dayHeader": "Day",
      "schedule.activitiesHeader": "Main activities",
      "schedule.timeHeader": "Time",
      "schedule.monday": "Monday",
      "schedule.mondayActivities": "Registration, opening session, national seminar, undergraduate short course and graduate short course #1",
      "schedule.tuesday": "Tuesday",
      "schedule.tuesdayActivities": "International seminar and continuation of undergraduate and graduate short courses #1",
      "schedule.wednesday": "Wednesday",
      "schedule.wednesdayActivities": "Technical visit",
      "schedule.thursday": "Thursday",
      "schedule.thursdayActivities": "Graduate short course #2, sessions 1 to 4",
      "schedule.friday": "Friday",
      "schedule.fridayActivities": "Poster session, graduate short course #2 and closing session",
      "audience.eyebrow": "Target audience",
      "audience.title": "Who GEOMRIT 2027 is for",
      "audience.copy": "The Summer School is aimed at faculty, researchers, undergraduate and graduate students, public-sector managers and analysts, civilian and military public servants, and others interested in areas connected to the theme.",
      "audience.areasTitle": "Areas of interest",
      "audience.area1": "Geointelligence and remote sensing.",
      "audience.area2": "Behavioral modeling, statistics, econometrics and operations research.",
      "audience.area3": "Data science, AI, high-performance computing and networks.",
      "audience.area4": "Transportation, logistics, public security, national defense and sustainable development.",
      "team.eyebrow": "Team",
      "team.title": "Human resources",
      "team.joseInstitution": "Federal University of Ceara / LIGEM.Redes / CENSIPAM",
      "team.generalDirector": "Summer School Director-General",
      "team.jeremiasInstitution": "Federal University of Amazonas / LIGEM.Redes / CENSIPAM",
      "team.scientificLead": "Head of the Scientific Committee",
      "team.marceloInstitution": "Aeronautics Institute of Technology",
      "team.scientificCommittee": "Scientific Committee",
      "team.carlosInstitution": "Superior Defense School / Air Force University / LIGEM.Redes / CENSIPAM",
      "team.organizingLead": "Head of the Organizing Committee",
      "team.organizingCommittee": "Organizing Committee",
      "team.nicholasInstitution": "University of Alabama (USA)",
      "team.shortCourseInstructor": "Short course instructor",
      "registration.eyebrow": "Registration",
      "registration.title": "Registration and participation",
      "registration.copy": "The call for applications, registration form and definitive dates will be announced by the GEOMRIT 2027 coordination team. Selection will consider thematic alignment, academic or professional profile, and availability of places per activity.",
      "registration.button": "Express interest",
      "registration.mailto": "mailto:contato@ligemredes.org?subject=GEOMRIT%202027%20-%20Registration",
      "registration.item1": "Short courses with 25 to 30 participants.",
      "registration.item2": "Scientific seminars with 60 to 80 participants.",
      "registration.item3": "Activities in Portuguese and English.",
      "registration.item4": "Possible student support subject to project availability.",
      "photos.eyebrow": "Event photos",
      "photos.title": "GEOMRIT 2027 Gallery",
      "photos.copy": "Photo records from the Summer School will be made available here after the activities take place.",
      "photos.galleryLabel": "Event photo gallery",
      "photos.item1Title": "Opening",
      "photos.item1Copy": "Institutional photos from the opening ceremony.",
      "photos.item2Title": "Seminars",
      "photos.item2Copy": "Records of national and international scientific talks.",
      "photos.item3Title": "Short courses and workshops",
      "photos.item3Copy": "Records of training activities, laboratories and practical sessions.",
      "photos.item4Title": "Posters and technical visit",
      "photos.item4Copy": "Gallery dedicated to presentations, scientific interactions and applied activities.",
      "photos.viewGallery": "View gallery",
      "photos.backToGallery": "Back",
      "photos.abertura.metaTitle": "Opening | GEOMRIT 2027 | Photos",
      "photos.abertura.metaDescription": "Photo gallery from the GEOMRIT 2027 Summer School opening ceremony.",
      "photos.abertura.title": "Opening",
      "photos.abertura.copy": "Records from the opening ceremony of the 1st Summer School in Geointelligence and Network Modeling of Transnational Illicit Activities.",
      "photos.seminarios.metaTitle": "Seminars | GEOMRIT 2027 | Photos",
      "photos.seminarios.metaDescription": "Photo gallery from the GEOMRIT 2027 Summer School seminars.",
      "photos.seminarios.title": "Seminars",
      "photos.seminarios.copy": "Records of national and international scientific talks at GEOMRIT 2027.",
      "photos.minicursos.metaTitle": "Short courses and workshops | GEOMRIT 2027 | Photos",
      "photos.minicursos.metaDescription": "Photo gallery from the GEOMRIT 2027 Summer School short courses and workshops.",
      "photos.minicursos.title": "Short courses and workshops",
      "photos.minicursos.copy": "Records of training activities, laboratories and practical sessions at GEOMRIT 2027.",
      "photos.posteres.metaTitle": "Posters and technical visit | GEOMRIT 2027 | Photos",
      "photos.posteres.metaDescription": "Photo gallery from the GEOMRIT 2027 Summer School poster sessions and technical visit.",
      "photos.posteres.title": "Posters and technical visit",
      "photos.posteres.copy": "Records of presentations, scientific interactions and applied activities at GEOMRIT 2027.",
      "contact.eyebrow": "Contact and support",
      "contact.title": "Summer School coordination",
      "contact.schoolName": "1st Summer School in Geointelligence and Network Modeling of Transnational Illicit Activities",
      "contact.sponsorsTitle": "Confirmed and potential sponsors",
      "contact.sponsorsCopy": "The Summer School will be funded in part with resources approved under the LIGEM.Redes project, supported by FINEP. Support is also being discussed with CNPq, FAPDF, the Brazilian Space Agency, UNODC, the Ministry of Justice and Public Security, the Ministry of Defense and the Embassy of the United States.",
      "footer.copy": "GEOMRIT 2027 - LIGEM.Redes Summer School."
    }
  };

  const textElements = document.querySelectorAll("[data-i18n]");
  const ariaElements = document.querySelectorAll("[data-i18n-aria-label]");
  const hrefElements = document.querySelectorAll("[data-i18n-href]");
  const languageButtons = document.querySelectorAll("[data-language]");
  const siteHeader = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNavigation = document.querySelector("#primary-navigation");
  const metaDescription = document.querySelector('meta[name="description"]');
  const pageTitleKey = document.body ? document.body.getAttribute("data-i18n-title") : "";
  const pageDescriptionKey = document.body ? document.body.getAttribute("data-i18n-description") : "";
  const originalTitle = document.title;
  const originalDescription = metaDescription ? metaDescription.content : "";
  const originalText = new Map();
  const originalAriaLabels = new Map();
  const originalHrefs = new Map();
  let currentLanguage = "pt";

  textElements.forEach(function (element) {
    originalText.set(element, element.textContent.trim());
  });

  ariaElements.forEach(function (element) {
    originalAriaLabels.set(element, element.getAttribute("aria-label") || "");
  });

  hrefElements.forEach(function (element) {
    originalHrefs.set(element, element.getAttribute("href") || "");
  });

  function getSavedLanguage() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function saveLanguage(language) {
    try {
      localStorage.setItem(storageKey, language);
    } catch (error) {
      // Ignore storage restrictions; the language switch still works for the current page view.
    }
  }

  function getMenuLabel(isOpen) {
    if (currentLanguage === "en") {
      return isOpen ? translations.en["nav.closeMenu"] : translations.en["nav.openMenu"];
    }

    return isOpen ? "Fechar menu" : "Abrir menu";
  }

  function setMenuOpen(isOpen) {
    if (!siteHeader || !menuToggle) {
      return;
    }

    const isMobile = window.innerWidth <= 620;

    siteHeader.classList.toggle("is-menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", getMenuLabel(isOpen));

    if (primaryNavigation) {
      primaryNavigation.setAttribute("aria-hidden", String(isMobile && !isOpen));
      primaryNavigation.querySelectorAll("a, button").forEach(function (element) {
        if (isMobile && !isOpen) {
          element.setAttribute("tabindex", "-1");
        } else {
          element.removeAttribute("tabindex");
        }
      });
    }
  }

  function setLanguage(language) {
    const isEnglish = language === "en";
    const dictionary = isEnglish ? translations.en : {};
    currentLanguage = isEnglish ? "en" : "pt";

    document.documentElement.lang = isEnglish ? "en" : "pt-BR";
    document.title = dictionary[pageTitleKey] || dictionary["meta.title"] || originalTitle;

    if (metaDescription) {
      metaDescription.content = dictionary[pageDescriptionKey] || dictionary["meta.description"] || originalDescription;
    }

    textElements.forEach(function (element) {
      const key = element.getAttribute("data-i18n");
      element.textContent = dictionary[key] || originalText.get(element);
    });

    ariaElements.forEach(function (element) {
      const key = element.getAttribute("data-i18n-aria-label");
      element.setAttribute("aria-label", dictionary[key] || originalAriaLabels.get(element));
    });

    hrefElements.forEach(function (element) {
      const key = element.getAttribute("data-i18n-href");
      element.setAttribute("href", dictionary[key] || originalHrefs.get(element));
    });

    languageButtons.forEach(function (button) {
      const isActive = button.getAttribute("data-language") === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    setMenuOpen(siteHeader ? siteHeader.classList.contains("is-menu-open") : false);

    saveLanguage(language);
  }

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-language") || "pt");
    });
  });

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      setMenuOpen(siteHeader ? !siteHeader.classList.contains("is-menu-open") : false);
    });
  }

  if (primaryNavigation) {
    primaryNavigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuOpen(false);
      });
    });
  }

  document.querySelectorAll(".photo-card[data-thumbnails]").forEach(function (card) {
    const image = card.querySelector("img");
    const thumbnails = (card.getAttribute("data-thumbnails") || "")
      .split("|")
      .filter(Boolean);
    let currentIndex = 0;

    if (!image || thumbnails.length < 2) {
      return;
    }

    window.setInterval(function () {
      currentIndex = (currentIndex + 1) % thumbnails.length;
      image.classList.add("is-changing");

      window.setTimeout(function () {
        image.src = thumbnails[currentIndex];
        image.classList.remove("is-changing");
      }, 180);
    }, 5000);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  });

  window.addEventListener("resize", function () {
    const isOpen = siteHeader ? siteHeader.classList.contains("is-menu-open") : false;
    setMenuOpen(window.innerWidth > 620 ? false : isOpen);
  });

  setLanguage(getSavedLanguage() === "en" ? "en" : "pt");
})();
