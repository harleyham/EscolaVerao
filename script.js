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
      "nav.results": "Results",
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
      "intro.copy": "CENSIPAM integrates information and produces knowledge to support coordination, planning and government action in the Legal Amazon and the Blue Amazon. In this context, LIGEM.Redes was created as an applied research laboratory dedicated to geointelligence, network modeling of transnational illicit activities and strategic, operational and tactical decision support.",
      "summer.eyebrow": "Summer School",
      "summer.title": "Conceptual Framework",
      "summer.cardTitle": "1st Summer School in Geointelligence and Network Modeling of Transnational Illicit Activities",
      "summer.copy": "A Summer School brings together educational and scientific activities during the vacation period, creating opportunities for learning, academic enrichment and professional development. GEOMRIT 2027 will be a flexible and collaborative environment to consolidate knowledge, advance ongoing research, explore new areas of interest and strengthen academic and professional networks.",
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
      "objectives.generalCopy": "Strengthen the scientific and technological capabilities of LIGEM.Redes, CENSIPAM and other technical and scientific institutions linked to the Ministry of Defense through advanced training, scientific collaboration and interdisciplinary research in geointelligence, remote sensing, spatial behavior modeling and optimization, econometrics, artificial intelligence, high-performance computing, transportation and mobility, and impact evaluation, especially when applied to network modeling of transnational illicit activities and evaluation of their impacts on the Sustainable Development Goals (SDGs).",
      "objectives.specificTitle": "Specific objectives",
      "objectives.specific1": "Promote advanced training and capacity building through specialized teaching activities in geointelligence and network modeling of transnational illicit activities.",
      "objectives.specific2": "Encourage multi- and interdisciplinary scientific exchange among students, researchers and experts of recognized national and international excellence.",
      "objectives.specific3": "Strengthen scientific cooperation among LIGEM.Redes, CENSIPAM, universities and other technical and scientific institutions linked to the Ministry of Defense.",
      "objectives.specific4": "Support new research collaborations, scientific networks and multi- and interdisciplinary research agendas aligned with LIGEM.Redes' mission.",
      "program.eyebrow": "Program",
      "program.title": "Proposed structure",
      "program.shortCoursesLabel": "Short courses",
      "program.shortCoursesTitle": "Undergraduate and graduate level",
      "program.shortCoursesCopy": "Intensive teaching activities for undergraduate and graduate audiences, including MCG and MCPG, focused on geointelligence, network modeling, quantitative methods and related topics.",
      "program.classesLabel": "Groups",
      "program.classesValue": "25 to 30 participants",
      "program.sessionsLabel": "Sessions",
      "program.sessionsValue": "6 per short course",
      "program.durationLabel": "Duration",
      "program.durationValue": "Morning and afternoon",
      "program.seminarsLabel": "Seminars",
      "program.seminarsTitle": "National and international",
      "program.seminarsCopy": "Advanced scientific seminars with invited researchers, promoting dialogue among academia, government, the defense sector and leading national and international institutions.",
      "program.audienceLabel": "Audience",
      "program.audienceValue": "60 to 80 participants",
      "program.languagesLabel": "Languages",
      "program.languagesValue": "Portuguese and English",
      "program.focusLabel": "Focus",
      "program.focusValue": "Frontier research",
      "program.postersLabel": "Poster sessions",
      "program.postersTitle": "Research presentations",
      "program.postersCopy": "A space for students to present work, receive feedback, strengthen professional networks and encourage new scientific collaborations.",
      "program.visitLabel": "Technical visit",
      "program.visitTitle": "Applied integration",
      "program.visitCopy": "An activity designed to connect scientific concepts, institutional infrastructure, operational applications and integration among academia, government and the defense sector.",
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
      "schedule.noteMcg": "MCG = Undergraduate short course",
      "schedule.noteMcpg": "MCPG = Graduate short course",
      "audience.eyebrow": "Target audience",
      "audience.title": "Who GEOMRIT 2027 is for",
      "audience.copy": "The Summer School is aimed at faculty, researchers, undergraduate and graduate students, public-sector managers and analysts, civilian and military public servants and others interested in geointelligence, behavioral modeling, geography, statistics, econometrics, operations research, data science, transportation and logistics, high-performance computing, remote sensing, artificial intelligence, quantitative criminology, public security, sustainable development, national defense and related areas.",
      "audience.areasTitle": "Areas of interest",
      "audience.area1": "Geointelligence and remote sensing.",
      "audience.area2": "Behavioral modeling, statistics, econometrics and operations research.",
      "audience.area3": "Data science, AI, high-performance computing and networks.",
      "audience.area4": "Transportation, logistics, public security, national defense and sustainable development.",
      "team.eyebrow": "Team",
      "team.title": "Human resources",
      "team.joseInstitution": "Federal University of Ceara / LIGEM.Redes / CENSIPAM",
      "team.generalDirector": "20 hours - Summer School Director-General",
      "team.jeremiasInstitution": "Federal University of Amazonas / LIGEM.Redes / CENSIPAM",
      "team.scientificLead": "8 hours - Head of the Scientific Committee",
      "team.marceloInstitution": "Aeronautics Institute of Technology",
      "team.scientificCommittee": "8 hours - Scientific Committee",
      "team.carlosInstitution": "Superior Defense School / Air Force University / LIGEM.Redes / CENSIPAM",
      "team.organizingLead": "20 hours - Head of the Organizing Committee",
      "team.organizingCommittee": "20 hours - Organizing Committee",
      "team.cristianoRole": "Organizing Committee",
      "team.nicholasInstitution": "University of Alabama (USA)",
      "team.kevinInstitution": "University of Alabama (USA)",
      "team.shortCourseInstructor": "9 hours - Short course instructor",
      "team.speaker": "4 hours - Speaker",
      "results.eyebrow": "Expected results",
      "results.title": "Scientific visibility, intensive training and new collaborations.",
      "results.copy": "GEOMRIT 2027 is expected to increase LIGEM.Redes' visibility and strengthen its scientific network through collaboration with leading national and international researchers and institutions. The Summer School will promote scientific exchange, identify and encourage new research talent, provide intensive academic training beyond the regular academic calendar, encourage dialogue between civilian and military communities and stimulate new collaborations and multi- and interdisciplinary research agendas.",
      "results.metaLabel": "Expected results summary",
      "results.networkLabel": "Scientific network",
      "results.networkValue": "Expansion of national and international collaborations",
      "results.trainingLabel": "Training",
      "results.trainingValue": "Deeper knowledge in frontier research topics",
      "results.capacityLabel": "Capabilities",
      "results.capacityValue": "Scientific and technological institutional strengthening",
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
      "footer.copy": "GEOMRIT 2027 - LIGEM.Redes Summer School.",
      "footer.updatedLabel": "Last modified:"
    }
  };

  const textElements = document.querySelectorAll("[data-i18n]");
  const ariaElements = document.querySelectorAll("[data-i18n-aria-label]");
  const hrefElements = document.querySelectorAll("[data-i18n-href]");
  const languageButtons = document.querySelectorAll("[data-language]");
  const siteHeader = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const primaryNavigation = document.querySelector("#primary-navigation");
  const lastModifiedDate = document.querySelector("#last-modified-date");
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

  async function getFileLastModified(filePath) {
    try {
      const response = await fetch(filePath, {
        method: "HEAD",
        cache: "no-store"
      });
      const lastModified = response.headers.get("last-modified");

      if (!lastModified) {
        return null;
      }

      const date = new Date(lastModified);
      return Number.isNaN(date.getTime()) ? null : date;
    } catch (error) {
      return null;
    }
  }

  async function setLastModified(language) {
    if (!lastModifiedDate) {
      return;
    }

    const fileDates = await Promise.all([
      Promise.resolve(new Date(document.lastModified)),
      getFileLastModified("index.html"),
      getFileLastModified("styles.css"),
      getFileLastModified("script.js")
    ]);
    const modified = fileDates
      .filter(function (date) {
        return date && !Number.isNaN(date.getTime());
      })
      .sort(function (a, b) {
        return b.getTime() - a.getTime();
      })[0];
    const locale = language === "en" ? "en-US" : "pt-BR";

    if (!modified) {
      lastModifiedDate.textContent = document.lastModified;
      return;
    }

    lastModifiedDate.textContent = new Intl.DateTimeFormat(locale, {
      dateStyle: "short",
      timeStyle: "short"
    }).format(modified);
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
    setLastModified(currentLanguage);

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
