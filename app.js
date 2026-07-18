const universityDatabase = {
  student: {
    name: "Kalina",
    studentId: "ST-2026-0418",
    faculty: "Wydział Nauk Społecznych"
  },
  modules: [
    // Twoje oryginalne dane z Semestru 1
    { semester: 1, name: "Psychologia i technologia", lecturer: "Przedmiot uniwersytecki", hours: 18, ects: 4, grade: 4.5 },
    { semester: 1, name: "Aktualne debaty o technologii", lecturer: "Przedmiot uniwersytecki", hours: 15, ects: 5, grade: 5.0 },
    { semester: 1, name: "Umiejętności akademickie", lecturer: "Przedmiot uniwersytecki", hours: 16, ects: 4, grade: 4.5 },
    { semester: 1, name: "Wprowadzenie do informatyki", lecturer: "Przedmiot uniwersytecki", hours: 20, ects: 5, grade: 5.0 },
    { semester: 1, name: "Wprowadzenie do psychologii społecznej", lecturer: "Przedmiot uniwersytecki", hours: 20, ects: 5, grade: 5.0 },
    { semester: 1, name: "Wprowadzenie do psychologii", lecturer: "Przedmiot uniwersytecki", hours: 18, ects: 4, grade: 4.5 },
    { semester: 1, name: "Języki programowania", lecturer: "Przedmiot uniwersytecki", hours: 22, ects: 5, grade: 5.0 },
    { semester: 1, name: "Matematyka 1", lecturer: "Przedmiot uniwersytecki", hours: 20, ects: 5, grade: 5.0 },
    
    // Nowe dane z Semestru 2
    { semester: 2, name: "Metodologia badań psychologicznych (wykład)", lecturer: "Przedmiot uniwersytecki", hours: 15, ects: 3, grade: 4.0 },
    { semester: 2, name: "Metodologia badań psychologicznych (ćwiczenia)", lecturer: "Przedmiot uniwersytecki", hours: 15, ects: 3, grade: 4.0 },
    { semester: 2, name: "Psychologia społeczna: praktyczne zastosowania (ćwiczenia)", lecturer: "Przedmiot uniwersytecki", hours: 20, ects: 4, grade: 4.0 },
    { semester: 2, name: "Podstawowe umiejętności psychologiczne (ćwiczenia)", lecturer: "Przedmiot uniwersytecki", hours: 16, ects: 3, grade: 3.5 },
    { semester: 2, name: "Matematyka 2", lecturer: "Przedmiot uniwersytecki", hours: 30, ects: 5, grade: 4.0 },
    { semester: 2, name: "Bazy danych (wykład)", lecturer: "Przedmiot uniwersytecki", hours: 15, ects: 2, grade: 4.0 },
    { semester: 2, name: "Bazy danych (ćwiczenia)", lecturer: "Przedmiot uniwersytecki", hours: 15, ects: 3, grade: 4.0 },
    { semester: 2, name: "Chmury obliczeniowe (wykład)", lecturer: "Przedmiot uniwersytecki", hours: 15, ects: 2, grade: 4.0 },
    { semester: 2, name: "Chmury obliczeniowe (ćwiczenia)", lecturer: "Przedmiot uniwersytecki", hours: 15, ects: 3, grade: 4.0 },
    { semester: 2, name: "Aktualne debaty o technologii 2 (wykład)", lecturer: "Przedmiot uniwersytecki", hours: 15, ects: 3, grade: 4.0 },
    { semester: 2, name: "Język angielski (ćwiczenia)", lecturer: "Lektorat", hours: 30, ects: 2, grade: 5.0 }
  ],
  upcomingClasses: [
    // Nowe, odświeżone zajęcia
    {
      dayName: "SOB",
      dayNumber: "25",
      month: "LIP",
      title: "Bazy danych",
      lecturer: "mgr Adam Wysocki",
      details: "Wykład | Grupa 1 | Sala Online",
      time: "08:15 - 10:35",
      link: "Classroom"
    },
    // Twoje stare zajęcia zachowane poniżej
    {
      dayName: "SOB",
      dayNumber: "11",
      month: "KWI",
      title: "Metodologia badań psychologicznych",
      lecturer: "dr Maksymilian Bielecki",
      details: "Wykład | Grupa 1 | Sala Online",
      time: "08:15 - 10:35",
      link: "Classroom"
    },
    {
      dayName: "SOB",
      dayNumber: "11",
      month: "KWI",
      title: "Matematyka 2",
      lecturer: "dr Katarzyna Winkowska-Nowak",
      details: "Wykład | Grupa 1 | Sala Online",
      time: "10:50 - 13:10",
      link: "Classroom"
    }
  ],
  schedule: [
    // Nowe zajęcia
    {
      dayName: "PON",
      dayNumber: "20",
      month: "LIP",
      title: "Chmury obliczeniowe",
      lecturer: "dr Jan Kowalski",
      details: "Laboratorium | Grupa 2 | Sala B-204",
      time: "09:00 - 10:30",
      link: "Szczegóły"
    },
    // Twoje oryginalne wpisy
    {
      dayName: "PON",
      dayNumber: "13",
      month: "KWI",
      title: "Wprowadzenie do psychologii",
      lecturer: "dr Monika Dąbrowska",
      details: "Ćwiczenia | Grupa 2 | Sala B-204",
      time: "09:00 - 10:30",
      link: "Szczegóły"
    },
    {
      dayName: "WT",
      dayNumber: "14",
      month: "KWI",
      title: "Języki programowania",
      lecturer: "mgr Adam Wysocki",
      details: "Laboratorium | Grupa 1 | Sala Online",
      time: "12:15 - 14:00",
      link: "Classroom"
    }
  ],
  messages: [
    // Nowa wiadomość na szczycie
    {
      from: "Uniwersytet SWPS",
      date: "18.07.2026 | 09:00",
      subject: "Witamy w Semestrze 2!"
    },
    // Twoje oryginalne wiadomości
    {
      from: "Uniwersytet SWPS",
      date: "03.04.2026 | 08:30",
      subject: "Zajęcia zmienione"
    },
    {
      from: "Wydział Projektowania w Warszawie",
      date: "26.03.2026 | 12:20",
      subject: "Zaproszenie / Invitation (Erasmus + BIP): Szkoła letnia \"Education Futures\" / Summer School \"Education Futures\""
    },
    {
      from: "Uniwersytet SWPS",
      date: "11.03.2026 | 10:55",
      subject: "Zajęcia zmienione"
    },
    {
      from: "Uniwersytet SWPS",
      date: "06.03.2026 | 08:15",
      subject: "Zajęcia zmienione"
    },
    {
      from: "Uniwersytet SWPS",
      date: "23.02.2026 | 12:35",
      subject: "Informacja o organizacji zajęć"
    }
  ],
  menuGroups: [
    {
      title: "Studia",
      items: [
        { icon: "guide", label: "Pobierz przewodnik studencki" },
        { icon: "knowledge", label: "Baza wiedzy" }
      ]
    },
    {
      title: "Sprawy bieżące",
      items: [
        { icon: "newsletter", label: "Najnowszy numer newslettera PowiadamiaMY" },
        { icon: "team", label: "Poznaj zespół Centrum Spraw Studenckich" }
      ]
    },
    {
      title: "Przejdź na Wirtualną Uczelnię",
      items: [
        { icon: "question", label: "Zadaj pytanie" },
        { icon: "card", label: "Opłaty" },
        { icon: "form", label: "Złóż podanie" },
        { icon: "document", label: "Zaświadczenia" }
      ]
    }
  ]
};

const screenContent = document.getElementById("screenContent");
const navItems = Array.from(document.querySelectorAll(".nav-item"));

let currentScreen = "grades";
let currentSemesterFilter = 2; // Domyślny widok to Semestr 2

function formatNumber(value) {
  return value.toFixed(1).replace(".", ",");
}

function getAverageGrade(modules) {
  const totalEcts = modules.reduce((sum, module) => sum + module.ects, 0);
  const weightedGradeSum = modules.reduce((sum, module) => sum + module.grade * module.ects, 0);
  return {
    totalEcts,
    averageGrade: totalEcts ? weightedGradeSum / totalEcts : 0
  };
}

function iconMarkup(type) {
  const icons = {
    guide: '<svg viewBox="0 0 24 24"><path d="M7 6h10M7 12h10M7 18h6"/><path d="M5 4h14v16H5z"/></svg>',
    knowledge: '<svg viewBox="0 0 24 24"><path d="M12 4 4 8l8 4 8-4-8-4Z"/><path d="M6 10v4l6 3 6-3v-4"/></svg>',
    newsletter: '<svg viewBox="0 0 24 24"><path d="M4 6h16v12H4z"/><path d="m4 8 8 5 8-5"/><path d="M9 13 4 18M15 13l5 5"/></svg>',
    team: '<svg viewBox="0 0 24 24"><path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M5 19a7 7 0 0 1 14 0"/><path d="M4 9h2M18 9h2"/></svg>',
    question: '<svg viewBox="0 0 24 24"><path d="M12 17h.01"/><path d="M9.1 9a3 3 0 1 1 5.4 1.8c-.74.98-1.5 1.46-1.5 2.7"/><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"/></svg>',
    card: '<svg viewBox="0 0 24 24"><path d="M3 7h18v10H3z"/><path d="M3 11h18"/></svg>',
    form: '<svg viewBox="0 0 24 24"><path d="M8 7h8"/><path d="M8 12h8"/><path d="M8 17h5"/><path d="M6 3h12v18H6z"/></svg>',
    document: '<svg viewBox="0 0 24 24"><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M10 13h4M10 17h4"/></svg>'
  };

  return icons[type] || icons.document;
}

function renderHomeScreen() {
  const classesMarkup = universityDatabase.upcomingClasses
    .map(
      (item) => `
        <article class="schedule-card">
          <div class="schedule-date">
            <span>${item.dayName}</span>
            <strong>${item.dayNumber}</strong>
            <small>${item.month}</small>
          </div>
          <div>
            <h3 class="schedule-title">${item.title}</h3>
            <p class="lecturer">${item.lecturer}</p>
            <div class="schedule-meta">
              <div>
                <p>${item.details}</p>
                <div class="schedule-time">${item.time}</div>
              </div>
              <a class="schedule-link" href="#">${item.link}</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  screenContent.innerHTML = `
    <header class="topbar home-greeting">
      <div>
        <p class="eyebrow">Panel studenta</p>
        <h1>Cześć, ${universityDatabase.student.name}</h1>
      </div>
    </header>

    <section class="banner-card">
      <div class="banner-mark"></div>
      <div class="banner-text">
        <h3>BądźmyMY bezpieczni</h3>
        <p>Sprawdź materiały w Bazie Wiedzy</p>
      </div>
    </section>

    <div class="carousel-dots">
      <span></span>
      <span class="active"></span>
      <span></span>
      <span></span>
    </div>

    <section class="section-head">
      <h2>Najbliższe zajęcia</h2>
      <a class="section-link" href="#">Kolejne zajęcia</a>
    </section>

    <section class="stack">${classesMarkup}</section>
  `;
}

function renderScheduleScreen() {
  const scheduleMarkup = universityDatabase.schedule
    .map(
      (item) => `
        <article class="schedule-card">
          <div class="schedule-date">
            <span>${item.dayName}</span>
            <strong>${item.dayNumber}</strong>
            <small>${item.month}</small>
          </div>
          <div>
            <h3 class="schedule-title">${item.title}</h3>
            <p class="lecturer">${item.lecturer}</p>
            <div class="schedule-meta">
              <div>
                <p>${item.details}</p>
                <div class="schedule-time">${item.time}</div>
              </div>
              <a class="schedule-link" href="#">${item.link}</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  screenContent.innerHTML = `
    <header class="topbar">
      <div>
        <p class="eyebrow">Twój kalendarz</p>
        <h1>Plan zajęć</h1>
      </div>
    </header>

    <section class="stack">
      ${scheduleMarkup}
      <div class="schedule-card schedule-placeholder">
        Widok planu jest przykładowy. Możemy dodać pełny tygodniowy harmonogram, jeśli chcesz.
      </div>
    </section>
  `;
}

function renderGradesScreen() {
  const { modules, student } = universityDatabase;
  
  // Filtrowanie modułów według wybranego semestru
  const filteredModules = modules.filter(m => m.semester === currentSemesterFilter);
  const { totalEcts, averageGrade } = getAverageGrade(filteredModules);

  const gradesMarkup = filteredModules
    .map(
      (module) => `
        <article class="grade-card">
          <div class="grade-card-head">
            <div>
              <p class="grade-meta">Moduł</p>
              <h3 class="grade-card-title">${module.name}</h3>
              <p class="lecturer">${module.lecturer}</p>
            </div>
            <div>
              <p class="grade-meta">Ocena</p>
              <div class="grade-value">${module.grade.toFixed(1).replace(".", ",")}</div>
            </div>
          </div>
          <div class="grade-card-footer">
            <p class="grade-hours">${module.hours} godz. | ${formatNumber(module.ects)} ECTS</p>
          </div>
        </article>
      `
    )
    .join("");

  screenContent.innerHTML = `
    <header class="topbar">
      <div>
        <p class="eyebrow">Panel studenta</p>
        <h1>Oceny</h1>
      </div>
    </header>

    <div class="tabs">
      <button class="${currentSemesterFilter === 1 ? 'active' : ''}" data-semester="1" type="button">Semestr 1</button>
      <button class="${currentSemesterFilter === 2 ? 'active' : ''}" data-semester="2" type="button">Semestr 2</button>
    </div>

    <section class="summary-card">
      <article>
        <span class="summary-label">Zebrane punkty ECTS</span>
        <strong>${formatNumber(totalEcts)} / ${formatNumber(totalEcts)}</strong>
      </article>
      <article>
        <span class="summary-label">Średnia ocen</span>
        <strong>${averageGrade.toFixed(2).replace(".", ",")}</strong>
      </article>
    </section>

    <section class="student-card">
      <div>
        <p class="student-label">Student</p>
        <h2>${student.name}</h2>
      </div>
      <div class="student-meta">
        <span>${student.studentId}</span>
        <span>${student.faculty}</span>
      </div>
    </section>

    <section class="stack">${gradesMarkup}</section>
  `;

  // Podpinanie logiki zmiany semestru
  const tabButtons = screenContent.querySelectorAll('.tabs button[data-semester]');
  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      currentSemesterFilter = parseInt(e.target.dataset.semester);
      renderGradesScreen();
    });
  });
}

function renderMessagesScreen() {
  const messagesMarkup = universityDatabase.messages
    .map(
      (item) => `
        <article class="message-card">
          <div class="message-card-head">
            <span class="message-from">${item.from}</span>
            <span class="message-meta">${item.date}</span>
          </div>
          <h3>${item.subject}</h3>
        </article>
      `
    )
    .join("");

  screenContent.innerHTML = `
    <header class="topbar">
      <div>
        <p class="eyebrow">Komunikacja</p>
        <h1>Wiadomości</h1>
      </div>
    </header>

    <div class="tabs">
      <button class="active" type="button">Z uczelni</button>
      <button type="button">Zmiany w planie zajęć</button>
      <button type="button">Nowe</button>
    </div>

    <section class="stack">${messagesMarkup}</section>
  `;
}

function renderMoreScreen() {
  const groupsMarkup = universityDatabase.menuGroups
    .map(
      (group) => `
        <section class="menu-group">
          <div class="menu-group-header">
            <p class="menu-group-title">${group.title}</p>
            <div class="menu-line"></div>
          </div>
          <div class="menu-card">
            ${group.items
              .map(
                (item) => `
                  <div class="menu-item">
                    <span class="menu-icon" aria-hidden="true">${iconMarkup(item.icon)}</span>
                    <h3>${item.label}</h3>
                  </div>
                `
              )
              .join("")}
          </div>
        </section>
      `
    )
    .join("");

  screenContent.innerHTML = `
    <header class="topbar">
      <div>
        <p class="eyebrow">Skróty i narzędzia</p>
        <h1>Menu</h1>
      </div>
    </header>

    ${groupsMarkup}
  `;
}

function renderScreen(screen) {
  currentScreen = screen;

  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.screen === screen);
  });

  const renderers = {
    home: renderHomeScreen,
    schedule: renderScheduleScreen,
    grades: renderGradesScreen,
    messages: renderMessagesScreen,
    more: renderMoreScreen
  };

  const renderer = renderers[screen] || renderGradesScreen;
  renderer();
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    renderScreen(item.dataset.screen);
  });
});

renderScreen(currentScreen);
