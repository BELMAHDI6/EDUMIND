// ==========================================================================
// EDUMIND - Client Application Logic & Bilingual Engine
// ==========================================================================

const i18n = {
  fr: {
    tagline: 'Gestion Scolaire Pro',
    nav_dashboard: 'Tableau de bord',
    cat_quotidien: 'QUOTIDIEN',
    nav_eleves: 'Élèves',
    nav_inscriptions: 'Inscriptions',
    nav_paiements: 'Paiements',
    nav_echeances: 'Échéances',
    nav_caisse: 'Caisse',
    nav_planning: 'Planning',
    nav_pointage: 'Pointage',
    cat_configuration: 'CONFIGURATION',
    nav_niveaux: 'Niveaux',
    nav_salles: 'Salles',
    nav_matieres: 'Matières',
    nav_enseignants: 'Enseignants',
    nav_groupes: 'Groupes',
    nav_settings: 'Paramètres',
    title_salles: 'Salles de Cours',
    subtitle_salles: "Gestion des espaces pédagogiques, capacités d'accueil, équipements et plannings d'occupation",
    btn_new_room: 'Nouvelle salle',
    btn_check_avail: 'Disponibilité en direct',
    view_grid: 'Cartes',
    view_table: 'Tableau',
    kpi_total_rooms: 'Total des salles',
    kpi_total_capacity: "Capacité d'accueil",
    kpi_projectors: 'Avec Vidéoprojecteur',
    kpi_assigned_groups: 'Groupes programmés',
    th_capacite: 'CAPACITÉ',
    th_projecteur: 'VIDÉOPROJECTEUR',
    th_equipement: 'ÉQUIPEMENT & REMARQUES',
    th_groupes_occup: 'GROUPES ASSIGNÉS',
    th_actions: 'ACTIONS',
    lbl_room_name: 'Nom de la Salle *',
    lbl_room_capacity: 'Capacité (Places) *',
    lbl_room_projector: 'Vidéoprojecteur',
    lbl_room_notes: 'Équipements & Remarques / Emplacement',
    btn_save_room: 'Enregistrer la Salle',
    btn_print_schedule: 'Imprimer',
    title_groupes: 'Groupes',
    btn_new_group: 'Nouveau groupe',
    kpi_active_groups: 'Groupes actifs',
    kpi_enrolled_students: 'Élèves inscrits',
    kpi_fill_rate: 'Taux de remplissage',
    list_groups: 'Liste des groupes',
    th_group_name: 'NOM DU GROUPE',
    th_eleves_cap: 'ÉLÈVES / CAP.',
    th_salle: 'SALLE',
    th_statut: 'STATUT',
    greeting_morning: 'Bonjour',
    greeting_afternoon: 'Bon après-midi',
    greeting_evening: 'Bonsoir',
    kpi_eleves: 'Élèves actifs',
    kpi_inscriptions: 'Inscriptions',
    kpi_today: "Collecté aujourd'hui",
    kpi_month: 'Collecté ce mois',
    kpi_unpaid: 'Total impayé',
    kpi_profs: 'Enseignants',
    kpi_matieres: 'Matières',
    chart_title: 'Évolution des encaissements — 12 mois',
    alerts_title: 'Alertes & Notifications',
    all_good: 'Tout est en ordre',
    recent_payments: 'Paiements récents',
    recent_unpaid: 'Impayés récents',
    btn_view_reports: 'Voir les rapports',
    btn_view_all: 'Voir tout',
    th_eleve: 'ÉLÈVE',
    th_matiere: 'MATIÈRE',
    th_montant: 'MONTANT',
    th_date: 'DATE',
    th_restedu: 'RESTE DÛ',
    th_nom: 'NOM',
    th_prenom: 'PRÉNOM',
    pointage_title: 'Pointage & Présence Rapide',
    pointage_subtitle: "Scannez le badge/QR de l'élève ou saisissez son matricule pour enregistrer sa présence et vérifier son état de paiement.",
    btn_scan: 'Pointer',
    title_eleves: 'Élèves',
    btn_add_student: 'Nouvel élève',
    th_nom_prenom: 'NOM & PRÉNOM',
    th_niveau: 'NIVEAU',
    th_phone: 'TÉLÉPHONE',
    th_parent: 'PARENT & CONTACT',
    lbl_eleve: 'Élève',
    title_paiements: 'Paiements & Reçus Scolarité',
    btn_new_payment: 'Encaisser un Paiement',
    th_groupe: 'GROUPE / MATIÈRE',
    th_mode: 'MODE',
    title_echeances: 'Suivi des Échéances & Impayés',
    th_montant_du: 'MONTANT DÛ',
    title_caisse: 'Trésorerie & Journal de Caisse',
    title_enseignants: 'Gestion des Enseignants & Honoraires',
    btn_add_teacher: 'Ajouter un Enseignant',
    title_planning: 'Emploi du Temps & Groupes',
    title_attendance: "Gestion des Présences & Feuilles d'Appel",
    subtitle_attendance: "Vérification manuelle des présences par groupe, suivi des dates et nombre de séances.",
    tab_manual_attendance: "Feuille d'Appel par Groupe",
    tab_rapid_scan: "Scanner Code-barres / QR",
    lbl_select_group: "Sélectionner le Groupe",
    lbl_session_date: "Date de la Séance",
    lbl_session_num: "N° Séance",
    lbl_session_topic: "Thème / Notes du cours",
    btn_save_attendance: "Enregistrer la présence",
    btn_view_matrix: "Grille des Séances",
    btn_print_matrix: "Imprimer la Grille",
    stat_inscrits: "Total Élèves",
    stat_total_seances: "Séances Effectuées",
    stat_presents: "Présents",
    stat_absents: "Absents",
    stat_retards: "Retards / Excusés",
    stat_paid_ratio: "Abonnement Réglé",
    btn_mark_all_present: "Tous Présents",
    btn_mark_all_absent: "Tous Absents",
    btn_reset: "Réinitialiser",
    th_contact: "CONTACT & TÉL",
    th_assiduite_groupe: "ASSIDUITÉ (SÉANCES)",
    th_cotisation: "COTISATION CE MOIS",
    th_etat_presence: "PRÉSENCE À LA SÉANCE",
    th_notes: "REMARQUES",
    status_present: "Présent",
    status_absent: "Absent",
    status_late: "En retard",
    status_excused: "Justifié",
    lbl_legend: "Légende:",
    lbl_filter_month: "Filtrer par mois :",
    all_months: "Toutes les séances (Tous les mois)",
    lbl_seances_count: "séances affichées",
    lbl_avg_presence: "Moyenne présence",
    btn_close_session_absent: "Clôturer & Marquer les absents",
    title_modal_close_session: "Clôture de la séance & Marquage des Absents",
    note_modal_close_session: "Tous les élèves inscrits qui n'ont pas encore été pointés présents seront automatiquement enregistrés avec le statut Absent.",
    btn_confirm_close_absent: "Confirmer & Marquer les Absents",
    stat_en_attente: "En Attente",
    title_live_scanned: "Élèves pointés dans cette séance",
    tip_barcode_autofocus: "Le champ reste toujours actif pour enchaîner les scans au scanner",
    th_heure: "HEURE",
    login_tagline: "Système de Gestion Scolaire Professionnel",
    login_lbl_role: "Compte utilisateur",
    login_role_admin: "Administrateur",
    login_role_auto: "Sélectionné automatiquement",
    login_lbl_password: "Mot de passe",
    login_mandatory: "Obligatoire",
    login_password_ph: "Entrez votre mot de passe...",
    login_btn_submit: "Se connecter",
    login_secured: "Accès sécurisé & chiffré",
    btn_logout: "Déconnexion",
    login_err_empty: "Veuillez saisir votre mot de passe",
    login_err_invalid: "Mot de passe incorrect. Veuillez réessayer."
  },
  ar: {
    tagline: 'إدارة المدارس الذكية',
    nav_dashboard: 'لوحة التحكم',
    cat_quotidien: 'العمليات اليومية',
    nav_eleves: 'التلاميذ',
    nav_inscriptions: 'التسجيلات',
    nav_paiements: 'المدفوعات والوصولات',
    nav_echeances: 'متابعة الديون',
    nav_caisse: 'الخزينة والصندوق',
    nav_planning: 'جدول التوقيت',
    nav_pointage: 'تسجيل الحضور',
    cat_configuration: 'الإعدادات والتهيئة',
    nav_niveaux: 'المستويات',
    nav_salles: 'القاعات',
    nav_matieres: 'المواد الدراسية',
    nav_enseignants: 'الأساتذة والمستحقات',
    nav_groupes: 'الأفواج',
    nav_settings: 'إعدادات المدرسة',
    title_salles: 'قاعات التدريس',
    subtitle_salles: 'إدارة الفضاءات التعليمية، السعة الاستيعابية، التجهيزات وجداول الإشغال الأسبوعي',
    btn_new_room: 'إضافة قاعة جديدة',
    btn_check_avail: 'فحص التوفر والإشغال',
    view_grid: 'بطاقات',
    view_table: 'جدول',
    kpi_total_rooms: 'إجمالي القاعات',
    kpi_total_capacity: 'السعة الاستيعابية',
    kpi_projectors: 'مجهزة بعارض (DataShow)',
    kpi_assigned_groups: 'الأفواج المجدولة',
    th_capacite: 'السعة (مقاعد)',
    th_projecteur: 'عارض داتاشو',
    th_equipement: 'التجهيزات والملاحظات',
    th_groupes_occup: 'الأفواج والحصص',
    th_actions: 'الإجراءات',
    lbl_room_name: 'اسم القاعة *',
    lbl_room_capacity: 'السعة (عدد المقاعد) *',
    lbl_room_projector: 'عارض فيديو (DataShow)',
    lbl_room_notes: 'التجهيزات والملاحظات / الموقع والطابق',
    btn_save_room: 'حفظ بيانات القاعة',
    btn_print_schedule: 'طباعة الجدول',
    title_groupes: 'الأفواج',
    btn_new_group: 'فوج جديد',
    kpi_active_groups: 'الأفواج النشطة',
    kpi_enrolled_students: 'التلاميذ المسجلون',
    kpi_fill_rate: 'نسبة الامتلاء',
    list_groups: 'قائمة الأفواج',
    th_group_name: 'اسم الفوج',
    th_eleves_cap: 'التلاميذ / المقاعد',
    th_salle: 'القاعة',
    th_statut: 'الحالة',
    greeting_morning: 'صباح الخير',
    greeting_afternoon: 'طاب مساؤكم',
    greeting_evening: 'مساء الخير',
    kpi_eleves: 'التلاميذ النشطون',
    kpi_inscriptions: 'التسجيلات',
    kpi_today: 'المحصّل اليوم',
    kpi_month: 'المحصّل هذا الشهر',
    kpi_unpaid: 'مجموع الديون',
    kpi_profs: 'الأساتذة',
    kpi_matieres: 'المواد',
    chart_title: 'تطور المداخيل المالية — 12 شهراً',
    alerts_title: 'التنبيهات والإشعارات',
    all_good: 'كل شيء على ما يرام',
    recent_payments: 'آخر المدفوعات المستلمة',
    recent_unpaid: 'آخر الاشتراكات غير المسددة',
    btn_view_reports: 'عرض التقارير',
    btn_view_all: 'عرض الكل',
    th_eleve: 'التلميذ',
    th_matiere: 'المادة',
    th_montant: 'المبلغ',
    th_date: 'التاريخ',
    th_restedu: 'المبلغ المتبقي',
    th_nom: 'اللقب',
    th_prenom: 'الاسم',
    pointage_title: 'تسجيل الحضور السريع بالباركود',
    pointage_subtitle: 'مرر بطاقة التلميذ عبر القارئ أو أدخل رقم قيده لتسجيل حضوره والتأكد من دفع اشتراكه فوراً.',
    btn_scan: 'تسجيل الحضور',
    title_eleves: 'التلاميذ',
    btn_add_student: 'تلميذ جديد',
    th_nom_prenom: 'الاسم واللقب',
    th_niveau: 'المستوى',
    th_phone: 'الهاتف',
    th_parent: 'ولي الأمر والتواصل',
    lbl_eleve: 'التلميذ',
    title_paiements: 'المدفوعات ووصولات التسديد',
    btn_new_payment: 'تسجيل دفعة جديدة',
    th_groupe: 'الفوج / المادة',
    th_mode: 'طريقة الدفع',
    title_echeances: 'متابعة الديون والاشتراكات المستحقة',
    th_montant_du: 'المبلغ المستحق',
    title_caisse: 'الخزينة وسجل حركات الصندوق',
    title_enseignants: 'إدارة الأساتذة وحساب الأجور',
    btn_add_teacher: 'إضافة أستاذ جديد',
    title_planning: 'جدول التوقيت والأفواج',
    title_attendance: "سجل ومتابعة حضور وغياب التلاميذ",
    subtitle_attendance: "تأكيد ومتابعة الحضور والغياب حسب الأفواج، مع استعراض عدد وتواريخ الحصص الشهرية.",
    tab_manual_attendance: "ورقة التحضير اليدوي بالفوج",
    tab_rapid_scan: "المسح السريع بالباركود",
    lbl_select_group: "اختيار الفوج الدراسي",
    lbl_session_date: "تاريخ الحصة",
    lbl_session_num: "رقم الحصة",
    lbl_session_topic: "عنوان الدرس / ملاحظات",
    btn_save_attendance: "حفظ سجل الحضور",
    btn_view_matrix: "سجل وشبكة الحصص والمواظبة",
    btn_print_matrix: "طباعة كشف الحصص والمواظبة",
    stat_inscrits: "تلاميذ الفوج",
    stat_total_seances: "الحصص المنجزة",
    stat_presents: "الحاضرون",
    stat_absents: "الغائبون",
    stat_retards: "متأخر / معذور",
    stat_paid_ratio: "الاشتراكات المسددة",
    btn_mark_all_present: "تحديد الكل حاضر",
    btn_mark_all_absent: "تحديد الكل غائب",
    btn_reset: "إعادة ضبط",
    th_contact: "معلومات التواصل",
    th_assiduite_groupe: "مواظبة التلميذ (الحصص)",
    th_cotisation: "اشتراك الشهر الحالي",
    th_etat_presence: "حالة الحضور في هذه الحصة",
    th_notes: "ملاحظات وتوجيهات",
    status_present: "حاضر",
    status_absent: "غائب",
    status_late: "متأخر",
    status_excused: "معذور",
    lbl_legend: "دليل الإشارات:",
    lbl_filter_month: "تصفية حسب الشهر:",
    all_months: "جميع الأشهر (كامل الحصص)",
    lbl_seances_count: "حصص معروضة",
    lbl_avg_presence: "معدل الحضور العام",
    btn_close_session_absent: "إنهاء الحضور وتسجيل البقية غائبين",
    title_modal_close_session: "تأكيد إنهاء الحضور وتسجيل الغائبين",
    note_modal_close_session: "جميع التلاميذ المسجلين في هذا الفوج الذين لم يُسجّل حضورهم بعد، سيتم تسجيلهم تلقائياً كـ (غائبين).",
    btn_confirm_close_absent: "تأكيد وتسجيل الغياب تلقائياً",
    stat_en_attente: "في الانتظار",
    title_live_scanned: "قائمة الحضور اللحظي في هذه الحصة",
    tip_barcode_autofocus: "القارئ جاهز للمسح المتتالي والسريع تلقائياً دون الحاجة للنقر بالفأرة",
    th_heure: "الوقت",
    login_tagline: "نظام إدارة المدارس والمراكز التعليمية الاحترافي",
    login_lbl_role: "حساب المستخدم",
    login_role_admin: "المدير العام (Admin)",
    login_role_auto: "محدد تلقائياً",
    login_lbl_password: "كلمة المرور",
    login_mandatory: "إلزامي",
    login_password_ph: "أدخل كلمة المرور...",
    login_btn_submit: "تسجيل الدخول",
    login_secured: "نظام محمي ومشفر",
    btn_logout: "تسجيل الخروج",
    login_err_empty: "يرجى كتابة كلمة المرور",
    login_err_invalid: "كلمة المرور غير صحيحة، يرجى المحاولة مجدداً"
  }
};

class EdumindApp {
  constructor() {
    this.lang = localStorage.getItem('edumind_lang') || 'fr';
    this.theme = localStorage.getItem('edumind_theme') || 'dark';
    this.sidebarCollapsed = localStorage.getItem('edumind_sidebar_collapsed') === 'true';
    this.currentView = 'dashboard';
    this.revenueChart = null;

    // Cache
    this.students = [];
    this.groups = [];
    this.levels = [];
    this.teachers = [];
    this.subjects = [];
    this.rooms = [];
    this.settings = {};

    // Attendance & Session state
    this.currentAttendanceGroup = null;
    this.currentAttendanceDate = new Date().toISOString().split('T')[0];
    this.attendanceSheetData = null;
    this.attendanceRecords = {};
    this.attendanceMode = 'sheet';

    // Authentication State
    this.isAuthenticated = sessionStorage.getItem('edumind_auth') === 'true' || localStorage.getItem('edumind_auth') === 'true';
    this.currentUser = JSON.parse(sessionStorage.getItem('edumind_user') || localStorage.getItem('edumind_user') || 'null');

    this.initAudioContext();
  }

  initAudioContext() {
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    } catch (e) {
      console.warn('Web Audio API not supported');
    }
  }

  playChime(type = 'success') {
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    if (type === 'success') {
      // Pleasant high chime
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, this.audioCtx.currentTime); // D5
      osc.frequency.setValueAtTime(880, this.audioCtx.currentTime + 0.1); // A5
      gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.5);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.5);
    } else if (type === 'warning') {
      // Distinct double notification beep for unpaid / already scanned
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, this.audioCtx.currentTime);
      osc.frequency.setValueAtTime(554.37, this.audioCtx.currentTime + 0.12); // C#5
      gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.45);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.45);
    } else {
      // Error buzzer
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.4);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.4);
    }
  }

  escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  async init() {
    this.initSidebar();
    this.setupEventListeners();
    this.applyTheme();
    this.applyLanguage();
    this.updateGreetingDate();

    // Check Authentication Gate
    if (!this.isAuthenticated) {
      this.showLoginScreen();
      return;
    } else {
      this.hideLoginScreen(false);
    }

    // Initial Data Fetch (Only when authenticated)
    await this.loadSettings();
    await this.loadConfigurationData();
    await this.loadDashboardData();
  }

  showLoginScreen() {
    const screen = document.getElementById('loginScreen');
    if (screen) {
      screen.classList.add('active');
      const passInput = document.getElementById('loginPassword');
      if (passInput) {
        passInput.value = '';
        setTimeout(() => passInput.focus(), 150);
      }
      const errAlert = document.getElementById('loginErrorAlert');
      if (errAlert) errAlert.style.display = 'none';
    }
  }

  hideLoginScreen(animated = true) {
    const screen = document.getElementById('loginScreen');
    if (screen) {
      if (animated) {
        screen.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        screen.style.opacity = '0';
        screen.style.pointerEvents = 'none';
        setTimeout(() => {
          screen.classList.remove('active');
          screen.style.opacity = '';
          screen.style.pointerEvents = '';
        }, 360);
      } else {
        screen.classList.remove('active');
      }
    }
  }

  toggleLoginPasswordVisibility() {
    const input = document.getElementById('loginPassword');
    const eyeIcon = document.getElementById('eyeIconLogin');
    if (!input) return;
    if (input.type === 'password') {
      input.type = 'text';
      if (eyeIcon) {
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
      }
    } else {
      input.type = 'password';
      if (eyeIcon) {
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
      }
    }
  }

  toggleLanguageFromLogin() {
    this.toggleLanguage();
    const btnText = document.getElementById('loginLangText');
    if (btnText) {
      btnText.textContent = this.lang === 'fr' ? 'العربية' : 'Français';
    }
  }

  async handleLogin() {
    const passwordInput = document.getElementById('loginPassword');
    const roleInput = document.getElementById('loginRole');
    const errAlert = document.getElementById('loginErrorAlert');
    const errMsg = document.getElementById('loginErrorMessage');
    const submitBtn = document.getElementById('btnLoginSubmit');
    const btnText = submitBtn?.querySelector('.btn-login-text');
    const btnSpinner = submitBtn?.querySelector('.btn-login-spinner');
    const btnIcon = submitBtn?.querySelector('.btn-login-icon');

    const password = passwordInput?.value?.trim();
    const role = roleInput?.value || 'admin';

    const isAr = this.lang === 'ar';
    const dict = i18n[this.lang] || i18n.fr;

    if (!password) {
      if (errAlert && errMsg) {
        errMsg.textContent = dict.login_err_empty || 'Veuillez saisir votre mot de passe';
        errAlert.style.display = 'flex';
      }
      this.playChime('error');
      passwordInput?.focus();
      return;
    }

    // Loading UI State
    if (submitBtn) submitBtn.disabled = true;
    if (btnText) btnText.style.opacity = '0.5';
    if (btnIcon) btnIcon.style.display = 'none';
    if (btnSpinner) btnSpinner.style.display = 'inline-block';
    if (errAlert) errAlert.style.display = 'none';

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role, password })
      });
      const data = await res.json();

      if (data.success) {
        this.isAuthenticated = true;
        this.currentUser = data.user;
        sessionStorage.setItem('edumind_auth', 'true');
        sessionStorage.setItem('edumind_user', JSON.stringify(data.user));

        this.playChime('success');
        this.hideLoginScreen(true);

        // Fetch application data
        await this.loadSettings();
        await this.loadConfigurationData();
        await this.loadDashboardData();
      } else {
        if (errAlert && errMsg) {
          errMsg.textContent = isAr ? 'كلمة المرور غير صحيحة، يرجى المحاولة مجدداً' : (data.error || 'Mot de passe incorrect');
          errAlert.style.display = 'flex';
          errAlert.classList.remove('errorShake');
          void errAlert.offsetWidth;
          errAlert.classList.add('errorShake');
        }
        this.playChime('warning');
        if (passwordInput) {
          passwordInput.select();
          passwordInput.focus();
        }
      }
    } catch (e) {
      console.error('Login error:', e);
      if (errAlert && errMsg) {
        errMsg.textContent = isAr ? 'تعذر الاتصال بالخادم' : 'Erreur de connexion au serveur';
        errAlert.style.display = 'flex';
      }
      this.playChime('error');
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (btnText) btnText.style.opacity = '1';
      if (btnIcon) btnIcon.style.display = 'inline-block';
      if (btnSpinner) btnSpinner.style.display = 'none';
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.currentUser = null;
    sessionStorage.removeItem('edumind_auth');
    sessionStorage.removeItem('edumind_user');
    localStorage.removeItem('edumind_auth');
    localStorage.removeItem('edumind_user');

    this.playChime('warning');
    this.showLoginScreen();
  }

  initSidebar() {
    // Apply saved collapsed state on larger screens
    if (this.sidebarCollapsed && window.innerWidth > 900) {
      document.body.classList.add('sidebar-collapsed');
    } else {
      document.body.classList.remove('sidebar-collapsed');
    }
    this.updateSidebarTooltips();
  }

  toggleSidebar(forceState = null) {
    const isMobile = window.innerWidth <= 900;
    if (isMobile) {
      const isOpen = document.body.classList.contains('sidebar-mobile-open');
      const newState = forceState !== null ? forceState : !isOpen;
      if (newState) {
        document.body.classList.add('sidebar-mobile-open');
      } else {
        document.body.classList.remove('sidebar-mobile-open');
      }
    } else {
      const isCollapsed = document.body.classList.contains('sidebar-collapsed');
      const newState = forceState !== null ? forceState : !isCollapsed;
      this.sidebarCollapsed = newState;
      localStorage.setItem('edumind_sidebar_collapsed', this.sidebarCollapsed);
      if (newState) {
        document.body.classList.add('sidebar-collapsed');
      } else {
        document.body.classList.remove('sidebar-collapsed');
      }
      this.updateSidebarTooltips();

      // Dispatch resize event smoothly so canvas / charts adapt to new container width
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
        if (this.revenueChart) {
          try { this.revenueChart.resize(); } catch (e) {}
        }
      }, 350);
    }
  }

  updateSidebarTooltips() {
    document.querySelectorAll('.sidebar .nav-item').forEach(item => {
      const label = item.querySelector('span:not(.nav-icon)');
      if (label) {
        item.setAttribute('data-tooltip', label.textContent.trim());
      }
    });

    const isAr = this.lang === 'ar';
    const isCollapsed = document.body.classList.contains('sidebar-collapsed');
    const collapseBtn = document.getElementById('btnSidebarCollapse');
    const toggleBtn = document.getElementById('btnSidebarToggle');

    const collapseTitle = isCollapsed 
      ? (isAr ? 'توسيع القائمة (Ctrl+B)' : 'Développer le menu (Ctrl+B)')
      : (isAr ? 'تصغير القائمة (Ctrl+B)' : 'Réduire le menu (Ctrl+B)');

    if (collapseBtn) collapseBtn.title = collapseTitle;
    if (toggleBtn) toggleBtn.title = isAr ? 'القائمة الجانبية (Ctrl+B)' : 'Menu latéral (Ctrl+B)';
  }

  setupEventListeners() {
    // Navigation Items
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const view = item.getAttribute('data-view');
        if (view) this.switchView(view);
        // On mobile, auto close drawer on navigation
        if (window.innerWidth <= 900) {
          document.body.classList.remove('sidebar-mobile-open');
        }
      });
    });

    // Top Header Sidebar Toggle Button
    const btnSidebarToggle = document.getElementById('btnSidebarToggle');
    if (btnSidebarToggle) {
      btnSidebarToggle.addEventListener('click', () => {
        this.toggleSidebar();
      });
    }

    // Sidebar Inner Collapse Button
    const btnSidebarCollapse = document.getElementById('btnSidebarCollapse');
    if (btnSidebarCollapse) {
      btnSidebarCollapse.addEventListener('click', () => {
        this.toggleSidebar();
      });
    }

    // Brand Logo Click: expands if currently collapsed
    const brandLogo = document.getElementById('brandLogoTrigger');
    if (brandLogo) {
      brandLogo.addEventListener('click', () => {
        if (document.body.classList.contains('sidebar-collapsed')) {
          this.toggleSidebar(false);
        }
      });
    }

    // Mobile Backdrop Click: close drawer
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    if (sidebarBackdrop) {
      sidebarBackdrop.addEventListener('click', () => {
        document.body.classList.remove('sidebar-mobile-open');
      });
    }

    // Global Keyboard Shortcut: Ctrl+B or Cmd+B to toggle sidebar
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') {
        const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
        if (tag !== 'input' && tag !== 'textarea') {
          e.preventDefault();
          this.toggleSidebar();
        }
      }
    });

    // Language Toggle
    const btnLang = document.getElementById('btnLangToggle');
    if (btnLang) {
      btnLang.addEventListener('click', () => {
        this.lang = this.lang === 'fr' ? 'ar' : 'fr';
        localStorage.setItem('edumind_lang', this.lang);
        this.applyLanguage();
      });
    }

    // Theme Toggle
    const btnTheme = document.getElementById('btnThemeToggle');
    if (btnTheme) {
      btnTheme.addEventListener('click', () => {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('edumind_theme', this.theme);
        this.applyTheme();
      });
    }
  }

  applyTheme() {
    if (this.theme === 'light') {
      document.body.classList.add('light-theme');
      document.getElementById('btnThemeToggle').innerHTML = '<i class="fa-solid fa-sun" style="color: #f59e0b;"></i>';
    } else {
      document.body.classList.remove('light-theme');
      document.getElementById('btnThemeToggle').innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  }

  applyLanguage() {
    const isAr = this.lang === 'ar';
    document.documentElement.lang = this.lang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';

    if (isAr) {
      document.body.classList.add('rtl');
      document.getElementById('langButtonText').textContent = 'Français';
    } else {
      document.body.classList.remove('rtl');
      document.getElementById('langButtonText').textContent = 'العربية';
    }

    // Translate DOM elements with data-i18n
    const dict = i18n[this.lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    const loginPass = document.getElementById('loginPassword');
    if (loginPass) {
      loginPass.placeholder = isAr ? 'أدخل كلمة المرور...' : 'Entrez votre mot de passe...';
    }
    const loginLangText = document.getElementById('loginLangText');
    if (loginLangText) {
      loginLangText.textContent = isAr ? 'Français' : 'العربية';
    }

    const searchGroupes = document.getElementById('groupesFilterSearch');
    if (searchGroupes) {
      searchGroupes.placeholder = isAr ? 'بحث...' : 'Rechercher...';
    }

    const statusSelect = document.getElementById('groupesFilterStatus');
    if (statusSelect) {
      statusSelect.options[0].text = isAr ? 'النشطة فقط' : 'Actifs';
      statusSelect.options[1].text = isAr ? 'كل الحالات' : 'Tous les statuts';
      statusSelect.options[2].text = isAr ? 'غير النشطة' : 'Inactifs';
    }

    const searchStudent = document.getElementById('searchStudentInput');
    if (searchStudent) {
      searchStudent.placeholder = isAr ? 'الاسم، رقم القيد، الهاتف...' : 'Nom, matricule, téléphone...';
    }

    const filterStudentStatus = document.getElementById('filterStudentStatus');
    if (filterStudentStatus) {
      filterStudentStatus.options[0].text = isAr ? 'النشطون فقط' : 'Actifs';
      filterStudentStatus.options[1].text = isAr ? 'كل الحالات' : 'Tous les statuts';
      filterStudentStatus.options[2].text = isAr ? 'غير النشطين' : 'Inactifs';
    }

    const filterStudentPayment = document.getElementById('filterStudentPayment');
    if (filterStudentPayment) {
      filterStudentPayment.options[0].text = isAr ? 'كل المدفوعات' : 'Tous paiements';
      filterStudentPayment.options[1].text = isAr ? 'مستوفٍ / لا ديون' : 'À jour';
      filterStudentPayment.options[2].text = isAr ? 'متأخر / ديون' : 'En retard / Dette';
    }

    const searchAtt = document.getElementById('attStudentSearch');
    if (searchAtt) {
      searchAtt.placeholder = isAr ? 'بحث عن تلميذ بالفوج...' : 'Filtrer un élève...';
    }
    const topicAtt = document.getElementById('attSessionTopic');
    if (topicAtt) {
      topicAtt.placeholder = isAr ? 'مثال: الفصل الثاني / حل تمارين' : 'Ex: Chapitre 2 / Exercices';
    }
    const searchPayments = document.getElementById('searchPaymentInput');
    if (searchPayments) {
      searchPayments.placeholder = isAr ? 'بحث باسم التلميذ، رقم الوصل، الفوج...' : 'Rechercher élève, N° reçu, groupe...';
    }
    const payStudentSearch = document.getElementById('payStudentSearch');
    if (payStudentSearch) {
      payStudentSearch.placeholder = isAr ? 'ابحث بكتابة اسم التلميذ أو لقبه أو رقم التسجيل...' : 'Rechercher par nom, prénom ou matricule...';
    }
    const searchTeachers = document.getElementById('searchTeacherInput');
    if (searchTeachers) {
      searchTeachers.placeholder = isAr ? 'بحث باسم الأستاذ، المادة، الهاتف...' : "Rechercher par nom d'enseignant, matière...";
    }

    if (this.currentView === 'groupes') {
      const levelSelect = document.getElementById('groupesFilterLevel');
      if (levelSelect) levelSelect.removeAttribute('data-loaded');
      const subjectSelect = document.getElementById('groupesFilterSubject');
      if (subjectSelect) subjectSelect.removeAttribute('data-loaded');
      const teacherSelect = document.getElementById('groupesFilterTeacher');
      if (teacherSelect) teacherSelect.removeAttribute('data-loaded');
      this.populateGroupesFilters();
      this.filterGroupes();
    } else if (this.currentView === 'eleves') {
      const levelSelect = document.getElementById('filterStudentLevel');
      if (levelSelect) levelSelect.removeAttribute('data-loaded');
      if (this.currentProfileStudentId) {
        this.openStudentProfile(this.currentProfileStudentId);
      } else {
        this.loadStudents();
      }
    } else if (this.currentView === 'salles') {
      this.loadRooms();
    }

    const searchRooms = document.getElementById('roomsFilterSearch');
    if (searchRooms) {
      searchRooms.placeholder = isAr ? 'البحث عن قاعة...' : 'Rechercher une salle...';
    }
    const filterProj = document.getElementById('roomsFilterProjector');
    if (filterProj) {
      filterProj.options[0].text = isAr ? 'كل أجهزة العرض' : 'Tous vidéoprojecteurs';
      filterProj.options[1].text = isAr ? 'مجهزة بعارض (DataShow)' : 'Avec vidéoprojecteur';
      filterProj.options[2].text = isAr ? 'بدون عارض' : 'Sans vidéoprojecteur';
    }
    const filterCap = document.getElementById('roomsFilterCapacity');
    if (filterCap) {
      filterCap.options[0].text = isAr ? 'كل السعات' : 'Toutes capacités';
      filterCap.options[1].text = isAr ? 'أقل من 20 مقعد' : '< 20 places';
      filterCap.options[2].text = isAr ? 'من 20 إلى 29 مقعد' : '20 à 29 places';
      filterCap.options[3].text = isAr ? '30 مقعد فما فوق' : '30+ places';
    }
    const filterOcc = document.getElementById('roomsFilterOccupancy');
    if (filterOcc) {
      filterOcc.options[0].text = isAr ? 'كل القاعات' : 'Toutes les salles';
      filterOcc.options[1].text = isAr ? 'مشغولة (بها أفواج)' : 'Occupées (avec groupes)';
      filterOcc.options[2].text = isAr ? 'شاغرة (بدون أفواج)' : 'Disponibles (sans groupes)';
    }

    this.updateGreetingDate();
    this.updateSidebarTooltips();
  }

  updateGreetingDate() {
    const now = new Date();
    const hour = now.getHours();
    let greetingKey = 'greeting_morning';
    if (hour >= 12 && hour < 18) greetingKey = 'greeting_afternoon';
    else if (hour >= 18) greetingKey = 'greeting_evening';

    const greetingEl = document.getElementById('greetingText');
    if (greetingEl) {
      greetingEl.textContent = i18n[this.lang][greetingKey];
    }

    // Formatted Date
    const dateOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const dateStr = now.toLocaleDateString(this.lang === 'ar' ? 'ar-DZ' : 'fr-FR', dateOptions);
    const dateEl = document.getElementById('currentDateDisplay');
    if (dateEl) dateEl.textContent = dateStr;
  }

  switchView(viewName) {
    this.currentView = viewName;

    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
      if (item.getAttribute('data-view') === viewName) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update active view container
    document.querySelectorAll('.view-container').forEach(view => {
      view.classList.remove('active');
    });

    const target = document.getElementById(`view-${viewName}`);
    if (target) {
      target.classList.add('active');
    }

    // Trigger loads for specific views
    if (viewName === 'dashboard') this.loadDashboardData();
    else if (viewName === 'eleves') {
      const profileView = document.getElementById('studentProfileView');
      const listView = document.getElementById('studentsListView');
      if (profileView) profileView.classList.remove('active');
      if (listView) listView.classList.remove('hidden');
      this.loadStudents();
    }
    else if (viewName === 'inscriptions') this.loadInscriptionsView();
    else if (viewName === 'paiements') this.loadPayments();
    else if (viewName === 'echeances') this.loadEcheances();
    else if (viewName === 'caisse') this.loadCaisse();
    else if (viewName === 'planning') this.loadPlanningView();
    else if (viewName === 'enseignants') this.loadTeachers();
    else if (viewName === 'groupes') this.loadGroupesView();
    else if (viewName === 'niveaux') this.loadLevels();
    else if (viewName === 'salles') this.loadRooms();
    else if (viewName === 'matieres') this.loadSubjects();
    else if (viewName === 'settings') this.loadSettingsInputs();
    else if (viewName === 'pointage') {
      this.loadAttendanceView();
    }
  }

  // -------------------------------------------------------------
  // API LOADERS & RENDERERS
  // -------------------------------------------------------------
  async loadSettings() {
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      if (data.success) {
        this.settings = data.settings;
        if (this.settings.school_name) {
          document.getElementById('cardSchoolName').textContent = this.settings.school_name;
        }
        if (this.settings.active_year) {
          document.getElementById('badgeSchoolYear').innerHTML = `<i class="fa-regular fa-calendar"></i><span>Année ${this.settings.active_year}</span>`;
        }
      }
    } catch (err) {
      console.error('Failed to load settings:', err);
    }
  }

  async loadConfigurationData() {
    try {
      const [resL, resS, resR] = await Promise.all([
        fetch('/api/levels'),
        fetch('/api/subjects'),
        fetch('/api/rooms')
      ]);
      const levelsData = await resL.json();
      const subjectsData = await resS.json();
      const roomsData = await resR.json();

      this.levels = levelsData.levels || [];
      this.subjects = subjectsData.subjects || [];
      this.rooms = roomsData.rooms || [];

      // Populate Level filters & selects
      const filterL = document.getElementById('filterStudentLevel');
      const modalL = document.getElementById('studentLevel');
      if (filterL && modalL) {
        let opts = `<option value="">Tous les niveaux</option>`;
        this.levels.forEach(lvl => {
          opts += `<option value="${lvl.id}">${lvl.name}</option>`;
        });
        filterL.innerHTML = opts;
        modalL.innerHTML = opts;
      }
    } catch (err) {
      console.error('Failed to load configuration data:', err);
    }
  }

  async loadDashboardData() {
    try {
      const res = await fetch('/api/dashboard/stats');
      const data = await res.json();
      if (!data.success) return;

      const { kpis, monthlyEvolution, recentPayments, unpaidStudents, alerts } = data;

      // Update KPI numbers
      document.getElementById('kpiActiveStudents').textContent = kpis.activeStudents;
      document.getElementById('kpiEnrollments').textContent = kpis.enrollments;
      document.getElementById('kpiTodayCollected').textContent = `${Number(kpis.todayCollected).toLocaleString()} DA`;
      document.getElementById('kpiMonthCollected').textContent = `${Number(kpis.thisMonthCollected).toLocaleString()} DA`;
      document.getElementById('kpiTotalUnpaid').textContent = `${Number(kpis.totalUnpaid).toLocaleString()} DA`;
      document.getElementById('kpiRecoveryRate').textContent = `Recouvrement : ${kpis.recoveryRate}%`;
      document.getElementById('kpiTeachers').textContent = kpis.teachersCount;
      document.getElementById('kpiSubjects').textContent = kpis.subjectsCount;

      // Render 12-Month Chart
      this.renderRevenueChart(monthlyEvolution);

      // Render Recent Payments Table
      const payBody = document.getElementById('recentPaymentsTableBody');
      if (recentPayments.length === 0) {
        payBody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 24px;">Aucun paiement récent</td></tr>`;
      } else {
        payBody.innerHTML = recentPayments.map(p => `
          <tr>
            <td><strong>${p.student_name}</strong></td>
            <td><span class="badge-pill" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa;">${p.subject_name}</span></td>
            <td><strong style="color: #10b981;">${Number(p.paid_amount).toLocaleString()} DA</strong></td>
            <td style="color: var(--text-muted); font-size: 12px;">${p.payment_date.slice(0, 16).replace('T', ' ')}</td>
          </tr>
        `).join('');
      }

      // Render Recent Unpaid Table
      const unpaidBody = document.getElementById('recentUnpaidTableBody');
      if (unpaidStudents.length === 0) {
        unpaidBody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: var(--text-muted); padding: 24px;">Aucun impayé trouvé</td></tr>`;
      } else {
        unpaidBody.innerHTML = unpaidStudents.map(u => `
          <tr>
            <td><strong>${u.student_name}</strong></td>
            <td><span class="badge-pill" style="background: rgba(239, 68, 68, 0.15); color: #f87171;">${u.subject_name}</span></td>
            <td><strong style="color: #ef4444;">${Number(u.amount_due).toLocaleString()} DA</strong></td>
          </tr>
        `).join('');
      }

      // Alerts
      const alertsContainer = document.getElementById('alertsContainer');
      if (alerts && alerts.length > 0) {
        alertsContainer.innerHTML = alerts.map(a => `
          <div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 12px 16px; border-radius: 6px; margin-bottom: 8px;">
            <strong style="color: #f59e0b;">${a.title}</strong>
            <p style="font-size: 12px; margin-top: 4px; color: var(--text-main);">${a.message}</p>
          </div>
        `).join('');
      }
    } catch (err) {
      console.error('Error loading dashboard stats:', err);
    }
  }

  renderRevenueChart(data) {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;

    if (this.revenueChart) {
      this.revenueChart.destroy();
    }

    const labels = data.map(d => d.label);
    const amounts = data.map(d => d.amount);

    this.revenueChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Recouvrement (DA)',
          data: amounts,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.15)',
          borderWidth: 3,
          tension: 0.35,
          fill: true,
          pointBackgroundColor: '#3b82f6',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => ` ${context.parsed.y.toLocaleString()} DA`
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#94a3b8', font: { size: 11 } }
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: {
              color: '#94a3b8',
              font: { size: 11 },
              callback: (val) => `${val.toLocaleString()} DA`
            }
          }
        }
      }
    });
  }

  // -------------------------------------------------------------
  // STUDENTS MODULE (STYLE SCHOOLARIS: LIST & FICHE ÉLÈVE)
  // -------------------------------------------------------------
  getStudentAvatarSvg(gender) {
    const isGirl = (gender || '').toUpperCase() === 'F';
    return isGirl 
      ? `<div class="student-avatar-circle girl" title="Féminin"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='32' r='32' fill='%23fde047'/><path d='M16 28 C16 16, 48 16, 48 28 C48 38, 48 48, 48 48 C44 46, 38 46, 32 46 C26 46, 20 46, 16 48 Z' fill='%2392400e'/><circle cx='32' cy='30' r='12' fill='%23fed7aa'/><path d='M22 28 C22 22, 42 22, 42 28 C38 24, 26 24, 22 28 Z' fill='%2392400e'/><path d='M18 56 C20 44, 44 44, 46 56 Z' fill='%23f97316'/></svg>" alt="F"></div>`
      : `<div class="student-avatar-circle boy" title="Masculin"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><circle cx='32' cy='32' r='32' fill='%23bae6fd'/><path d='M20 24 C20 16, 44 16, 44 24 C44 20, 20 20, 20 24 Z' fill='%231e293b'/><circle cx='32' cy='30' r='12' fill='%23fed7aa'/><path d='M22 24 C26 20, 38 20, 42 24 C38 22, 26 22, 22 24 Z' fill='%231e293b'/><path d='M18 56 C20 44, 44 44, 46 56 Z' fill='%232563eb'/></svg>" alt="M"></div>`;
  }

  async loadStudents() {
    try {
      const search = document.getElementById('searchStudentInput')?.value || '';
      const levelId = document.getElementById('filterStudentLevel')?.value || '';
      const status = document.getElementById('filterStudentStatus')?.value || 'active';
      const paymentStatus = document.getElementById('filterStudentPayment')?.value || 'all';

      // Ensure levels are loaded
      if (!this.levels || this.levels.length === 0) {
        await this.loadLevels();
      }

      // Populate filterStudentLevel if needed
      const levelSelect = document.getElementById('filterStudentLevel');
      if (levelSelect && (levelSelect.options.length <= 1 || levelSelect.getAttribute('data-loaded') !== '1')) {
        const cur = levelSelect.value;
        levelSelect.innerHTML = `<option value="">${this.lang === 'ar' ? 'كل المستويات' : 'Tous niveaux'}</option>` +
          (this.levels || []).map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
        levelSelect.value = cur;
        levelSelect.setAttribute('data-loaded', '1');
      }

      const params = new URLSearchParams({
        search,
        level_id: levelId,
        status,
        payment_status: paymentStatus
      });

      const res = await fetch(`/api/students?${params.toString()}`);
      const data = await res.json();
      if (!data.success) return;

      this.students = data.students || [];
      const tbody = document.getElementById('schoolarisStudentsTableBody');
      if (!tbody) return;

      if (this.students.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="11" style="text-align: center; color: var(--text-muted); padding: 40px;">
              <i class="fa-solid fa-user-slash" style="font-size: 32px; margin-bottom: 10px; opacity: 0.5; display: block;"></i>
              ${this.lang === 'ar' ? 'لم يتم العثور على أي تلميذ مطابق' : 'Aucun élève trouvé'}
            </td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = this.students.map(s => {
        const avatarSvg = this.getStudentAvatarSvg(s.gender);
        const billed = Number(s.total_billed || 0);
        const paid = Number(s.total_paid || 0);
        const remaining = Number(s.remaining_due || 0);
        const isActive = s.active === 1;

        return `
          <tr>
            <td>
              <div style="display: flex; align-items: center; gap: 10px;">
                ${avatarSvg}
                <span style="font-weight: 700; color: #60a5fa; font-size: 13px; font-family: monospace;">${this.escapeHtml(s.matricule)}</span>
              </div>
            </td>
            <td>
              <strong style="color: var(--text-heading); font-size: 14px; cursor: pointer;" onclick="app.openStudentProfile(${s.id})" title="Voir la fiche">${this.escapeHtml(s.last_name)}</strong>
            </td>
            <td>
              <span style="color: var(--text-main); cursor: pointer;" onclick="app.openStudentProfile(${s.id})" title="Voir la fiche">${this.escapeHtml(s.first_name)}</span>
            </td>
            <td>
              <span style="color: var(--text-muted); font-weight: 500;">${this.escapeHtml(s.level_name || '—')}</span>
            </td>
            <td>
              <span style="font-size: 13px;">${this.escapeHtml(s.phone || '—')}</span>
            </td>
            <td style="text-align: center;">
              <span class="badge-pill" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa; font-weight: 700;">${s.active_groups_count || 0}</span>
            </td>
            <td>
              <span style="font-weight: 600;">${billed.toLocaleString()} DA</span>
            </td>
            <td>
              <span style="font-weight: 700; color: #10b981;">${paid.toLocaleString()} DA</span>
            </td>
            <td>
              <span style="font-weight: 700; color: ${remaining > 0 ? '#ef4444' : 'var(--text-heading)'};">${remaining.toLocaleString()} DA</span>
            </td>
            <td>
              <span class="badge-status-pill ${isActive ? 'active' : 'inactive'}" 
                    onclick="app.openStudentProfile(${s.id})" 
                    title="${this.lang === 'ar' ? 'عرض تفاصيل وملف التلميذ' : 'Voir la fiche élève'}">
                ${isActive ? (this.lang === 'ar' ? 'نشط' : 'Actif') : (this.lang === 'ar' ? 'غير نشط' : 'Inactif')}
              </span>
            </td>
            <td style="text-align: right;">
              <div style="display: inline-flex; gap: 6px; align-items: center;">
                <button class="btn-action-enroll" title="${this.lang === 'ar' ? 'تسجيل في المواد' : 'Inscrire aux matières'}" onclick="app.openEnrollStudent(${s.id})">
                  <i class="fa-solid fa-file-circle-plus"></i>
                </button>
                <button class="btn-action-badge" title="${this.lang === 'ar' ? 'بطاقة التلميذ' : 'Badge élève'}" onclick="app.showStudentCard(${s.id})">
                  <i class="fa-solid fa-id-card"></i>
                </button>
                <button class="btn-action-edit" title="${this.lang === 'ar' ? 'تعديل' : 'Modifier'}" onclick="app.editStudent(${s.id})">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn-action-delete" title="${this.lang === 'ar' ? 'حذف / تعطيل' : 'Supprimer'}" onclick="app.deleteStudent(${s.id})">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    } catch (err) {
      console.error('Failed to load students:', err);
    }
  }

  // -------------------------------------------------------------
  // FICHE ÉLÈVE (STUDENT PROFILE VIEW)
  // -------------------------------------------------------------
  async openStudentProfile(id) {
    try {
      this.currentProfileStudentId = id;
      const res = await fetch(`/api/students/${id}`);
      const data = await res.json();
      if (!data.success) {
        alert(data.error || 'Erreur lors du chargement du profil');
        return;
      }

      const { student, stats, enrollments, payments } = data;

      // Switch sub-views inside view-eleves
      const listEl = document.getElementById('studentsListView');
      const profileEl = document.getElementById('studentProfileView');
      if (listEl) listEl.classList.add('hidden');
      if (profileEl) profileEl.classList.add('active');

      // 1. Hero Card
      const avatarEl = document.getElementById('profileHeroAvatar');
      const isGirl = (student.gender || '').toUpperCase() === 'F';
      avatarEl.innerHTML = isGirl
        ? `<img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'><circle cx='40' cy='40' r='40' fill='%23fde047'/><path d='M20 34 C20 18, 60 18, 60 34 C60 48, 60 62, 60 62 C55 60, 48 60, 40 60 C32 60, 25 60, 20 62 Z' fill='%2392400e'/><circle cx='40' cy='38' r='16' fill='%23fed7aa'/><path d='M28 34 C28 26, 52 26, 52 34 C48 30, 32 30, 28 34 Z' fill='%2392400e'/><path d='M22 72 C25 56, 55 56, 58 72 Z' fill='%23f97316'/></svg>" style="width:100%;height:100%;" alt="Avatar">`
        : `<img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'><circle cx='40' cy='40' r='40' fill='%23bae6fd'/><path d='M25 30 C25 20, 55 20, 55 30 C55 25, 25 25, 25 30 Z' fill='%231e293b'/><circle cx='40' cy='38' r='16' fill='%23fed7aa'/><path d='M28 30 C32 26, 48 26, 52 30 C48 28, 32 28, 28 30 Z' fill='%231e293b'/><path d='M22 72 C25 56, 55 56, 58 72 Z' fill='%232563eb'/></svg>" style="width:100%;height:100%;" alt="Avatar">`;

      document.getElementById('profileHeroMatricule').textContent = student.matricule;
      document.getElementById('profileHeroName').textContent = `${student.first_name} ${student.last_name}`;
      document.getElementById('profileHeroLevel').textContent = student.level_name || 'Niveau non défini';

      const statusPill = document.getElementById('profileHeroStatusPill');
      if (stats.remaining_due <= 0) {
        statusPill.className = 'hero-pill hero-pill-status up-to-date';
        statusPill.textContent = this.lang === 'ar' ? 'مستوفٍ / لا توجد ديون' : 'À jour';
      } else {
        statusPill.className = 'hero-pill hero-pill-status late';
        statusPill.textContent = this.lang === 'ar' ? `متأخر (${stats.remaining_due.toLocaleString()} دج)` : `En retard (${stats.remaining_due.toLocaleString()} DA)`;
      }

      document.getElementById('profileHeroEnrollmentsPill').textContent = this.lang === 'ar' 
        ? `${stats.enrollments_count} تسجيلات` 
        : `${stats.enrollments_count} inscription(s)`;

      document.getElementById('profileHeroPaymentsPill').textContent = this.lang === 'ar' 
        ? `${stats.payments_count} وصولات دفع` 
        : `${stats.payments_count} paiement(s)`;

      // 2. 4 Financial KPIs
      document.getElementById('profileKpiBilled').textContent = `${Number(stats.total_billed).toLocaleString()} DA`;
      document.getElementById('profileKpiPaid').textContent = `${Number(stats.total_paid).toLocaleString()} DA`;
      const remEl = document.getElementById('profileKpiRemaining');
      remEl.textContent = `${Number(stats.remaining_due).toLocaleString()} DA`;
      if (stats.remaining_due > 0) {
        remEl.className = 'profile-kpi-value red';
      } else {
        remEl.className = 'profile-kpi-value';
      }
      document.getElementById('profileKpiPayments').textContent = stats.payments_count;

      // 3. Personal Information Table
      document.getElementById('profileInfoGender').textContent = (student.gender || '').toUpperCase() === 'F' 
        ? (this.lang === 'ar' ? 'أنثى' : 'Féminin') 
        : (this.lang === 'ar' ? 'ذكر' : 'Masculin');
      document.getElementById('profileInfoLevel').textContent = student.level_name || '-';
      document.getElementById('profileInfoDate').textContent = student.created_at ? student.created_at.slice(0, 10) : '-';
      document.getElementById('profileInfoPhone').textContent = student.phone || '-';
      document.getElementById('profileInfoParentPhone').textContent = student.parent_phone || '-';
      document.getElementById('profileInfoParentName').textContent = student.parent_name || '-';
      document.getElementById('profileInfoAddress').textContent = student.address || '-';

      // 4. Inscriptions Container
      document.getElementById('profileInscriptionsTitle').textContent = this.lang === 'ar' 
        ? `الاشتراكات (${enrollments.length})` 
        : `Inscriptions (${enrollments.length})`;

      const enrollContainer = document.getElementById('profileInscriptionsContainer');
      if (enrollments.length === 0) {
        enrollContainer.innerHTML = `
          <div style="text-align: center; color: var(--text-muted); padding: 30px;">
            ${this.lang === 'ar' ? 'لا يوجد أي اشتراك مسجل حالياً' : 'Aucune inscription'}
          </div>
        `;
      } else {
        enrollContainer.innerHTML = enrollments.map(e => `
          <div class="profile-group-item">
            <div>
              <div style="font-weight: 700; color: var(--text-heading); font-size: 14px;">
                <span class="subject-dot" style="background-color: ${e.subject_color || '#3b82f6'};"></span>
                ${this.escapeHtml(e.group_name)}
              </div>
              <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">
                <i class="fa-solid fa-chalkboard-user"></i> ${this.escapeHtml(e.teacher_name || '-')} • 
                <i class="fa-regular fa-clock"></i> ${this.escapeHtml(e.day_of_week || '')} ${this.escapeHtml(e.start_time || '')}
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="text-align: right;">
                <div style="font-weight: 700; color: #10b981; font-size: 13.5px;">${Number(e.price_monthly).toLocaleString()} DA</div>
                ${Number(e.discount_amount) > 0 ? `<div style="font-size: 11px; color: #f59e0b;">Remise: -${Number(e.discount_amount)} DA</div>` : ''}
              </div>
              <button class="btn-icon" title="${this.lang === 'ar' ? 'إلغاء التسجيل' : 'Désinscrire de ce groupe'}" 
                      onclick="app.cancelEnrollment(${e.enrollment_id}, ${student.id})"
                      style="color: #f87171; padding: 6px;"
                      onmouseover="this.style.color='#ef4444'" 
                      onmouseout="this.style.color='#f87171'">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        `).join('');
      }

      // 5. Payments History
      document.getElementById('profilePaymentsTitle').textContent = this.lang === 'ar' 
        ? `سجل المدفوعات (${payments.length})` 
        : `Historique des paiements (${payments.length})`;

      const paymentsTbody = document.getElementById('profilePaymentsTableBody');
      if (payments.length === 0) {
        paymentsTbody.innerHTML = `
          <tr>
            <td colspan="7" style="text-align: center; color: var(--text-muted); padding: 30px;">
              ${this.lang === 'ar' ? 'لا توجد مدفوعات مسجلة.' : 'Aucun paiement.'}
            </td>
          </tr>
        `;
      } else {
        paymentsTbody.innerHTML = payments.map(p => `
          <tr>
            <td><strong style="color: #60a5fa;">${this.escapeHtml(p.receipt_no)}</strong></td>
            <td>${this.escapeHtml(p.month_period)}</td>
            <td><strong>${this.escapeHtml(p.group_name)}</strong></td>
            <td><span class="badge-pill" style="text-transform: uppercase;">${this.escapeHtml(p.payment_method)}</span></td>
            <td><strong style="color: #10b981;">${Number(p.paid_amount).toLocaleString()} DA</strong></td>
            <td>${p.payment_date ? p.payment_date.slice(0, 10) : '-'}</td>
            <td style="text-align: right;">
              <button class="btn-icon" title="Voir / Imprimer le reçu" onclick="app.showReceipt(${p.id})">
                <i class="fa-solid fa-receipt" style="color: #10b981;"></i>
              </button>
            </td>
          </tr>
        `).join('');
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error(err);
    }
  }

  backToStudentsList() {
    this.currentProfileStudentId = null;
    const profileView = document.getElementById('studentProfileView');
    const listView = document.getElementById('studentsListView');
    if (profileView) profileView.classList.remove('active');
    if (listView) listView.classList.remove('hidden');
    this.loadStudents();
  }

  editCurrentProfileStudent() {
    if (this.currentProfileStudentId) {
      this.editStudent(this.currentProfileStudentId);
    }
  }

  enrollCurrentProfileStudent() {
    if (this.currentProfileStudentId) {
      this.openEnrollStudent(this.currentProfileStudentId);
    }
  }

  badgeCurrentProfileStudent() {
    if (this.currentProfileStudentId) {
      this.showStudentCard(this.currentProfileStudentId);
    }
  }

  reportCurrentProfileStudent() {
    if (this.currentProfileStudentId) {
      this.openStudentAttendanceReport(this.currentProfileStudentId);
    }
  }

  openEnrollStudent(studentId) {
    this.closeModals();
    this.switchView('inscriptions');
    this.loadInscriptionsView(studentId);
  }

  async cancelEnrollment(enrollmentId, studentId) {
    const msg = this.lang === 'ar' 
      ? 'هل أنت متأكد من إلغاء تسجيل هذا التلميذ في هذا الفوج؟' 
      : 'Voulez-vous vraiment désinscrire cet élève de ce groupe ?';
    if (!confirm(msg)) return;
    try {
      const res = await fetch(`/api/enrollments/${enrollmentId}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        this.openStudentProfile(studentId);
      } else {
        alert(data.error || 'Erreur lors de la désinscription');
      }
    } catch (e) {
      console.error(e);
    }
  }

  showStudentCard(id) {
    this.printStudentCard(id);
  }

  printStudentFiche() {
    window.print();
  }

  async toggleStudentStatus(id) {
    try {
      const res = await fetch(`/api/students/${id}/toggle-status`, { method: 'PATCH' });
      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        this.loadStudents();
      }
    } catch (err) {
      console.error(err);
    }
  }

  async deleteStudent(id) {
    const msg = this.lang === 'ar' ? 'هل أنت متأكد من تعطيل هذا التلميذ؟' : 'Voulez-vous vraiment désactiver cet élève ?';
    if (!confirm(msg)) return;
    try {
      const res = await fetch(`/api/students/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        this.loadStudents();
      }
    } catch (err) {
      console.error(err);
    }
  }

  async openStudentAttendanceReport(id) {
    try {
      const [resStu, resAtt] = await Promise.all([
        fetch(`/api/students/${id}`),
        fetch(`/api/students/${id}/attendance`)
      ]);
      const dataStu = await resStu.json();
      const dataAtt = await resAtt.json();

      if (!dataStu.success) return;

      const student = dataStu.student;
      const stats = dataStu.stats;
      const attendance = dataAtt.attendance || [];

      document.getElementById('attReportTitle').textContent = `Rapport d'Assiduité — ${student.first_name} ${student.last_name}`;
      document.getElementById('attReportSubtitle').textContent = `Matricule: ${student.matricule} • Taux d'assiduité: ${stats.attendance_rate || 100}%`;

      document.getElementById('attTotalCount').textContent = stats.total_sessions || attendance.length;
      document.getElementById('attPresentCount').textContent = stats.present_count || attendance.filter(a => a.status === 'present').length;
      document.getElementById('attLateCount').textContent = attendance.filter(a => a.status === 'late').length;
      document.getElementById('attAbsentCount').textContent = attendance.filter(a => a.status === 'absent').length;

      const tbody = document.getElementById('attReportTableBody');
      if (attendance.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 24px;">
              ${this.lang === 'ar' ? 'لا توجد أي جلسات حضور مسجلة لهذا التلميذ حتى الآن.' : 'Aucun pointage de présence enregistré pour cet élève.'}
            </td>
          </tr>
        `;
      } else {
        tbody.innerHTML = attendance.map(a => `
          <tr>
            <td><strong>${a.session_date}</strong></td>
            <td>${a.check_in_time || '-'}</td>
            <td>${this.escapeHtml(a.group_name)} (${this.escapeHtml(a.subject_name)})</td>
            <td>${this.escapeHtml(a.teacher_name || '-')}</td>
            <td>
              <span class="badge-pill" style="${a.status === 'present' ? 'background:rgba(16,185,129,0.12);color:#10b981;' : (a.status === 'late' ? 'background:rgba(245,158,11,0.12);color:#f59e0b;' : 'background:rgba(239,68,68,0.12);color:#ef4444;')}">
                ${a.status === 'present' ? 'Présent' : (a.status === 'late' ? 'En retard' : 'Absent')}
              </span>
            </td>
          </tr>
        `).join('');
      }

      document.getElementById('modalStudentAttendanceReport').classList.add('active');
    } catch (err) {
      console.error(err);
    }
  }

  printAllBadges() {
    if (!this.students || this.students.length === 0) return;
    this.showStudentCard(this.students[0].id);
  }

  exportStudentsToExcel() {
    if (!this.students || this.students.length === 0) {
      alert(this.lang === 'ar' ? 'لا توجد بيانات للتصدير' : 'Aucune donnée à exporter');
      return;
    }

    const isAr = this.lang === 'ar';
    const headers = isAr ? [
      'رقم القيد', 'اللقب', 'الاسم', 'الجنس', 'المستوى', 'الهاتف', 'هاتف الولي', 'اسم الولي', 'العنوان', 'الاشتراكات', 'الفوترة (دج)', 'المدفوع (دج)', 'المتبقي (دج)', 'الحالة'
    ] : [
      'Matricule', 'Nom', 'Prénom', 'Genre', 'Niveau', 'Téléphone', 'Tél Parent', 'Nom Tuteur', 'Adresse', 'Inscriptions', 'Facturé (DA)', 'Payé (DA)', 'Reste Dû (DA)', 'Statut'
    ];

    const rows = this.students.map(s => [
      `"${s.matricule}"`,
      `"${(s.last_name || '').replace(/"/g, '""')}"`,
      `"${(s.first_name || '').replace(/"/g, '""')}"`,
      `"${s.gender || 'M'}"`,
      `"${(s.level_name || '').replace(/"/g, '""')}"`,
      `"${s.phone || ''}"`,
      `"${s.parent_phone || ''}"`,
      `"${(s.parent_name || '').replace(/"/g, '""')}"`,
      `"${(s.address || '').replace(/"/g, '""')}"`,
      s.active_groups_count || 0,
      s.total_billed || 0,
      s.total_paid || 0,
      s.remaining_due || 0,
      s.active ? (isAr ? 'نشط' : 'Actif') : (isAr ? 'غير نشط' : 'Inactif')
    ]);

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';'))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `eleves_edumind_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.playChime('success');
  }

  openModalStudent() {
    document.getElementById('modalStudentTitle').textContent = this.lang === 'ar' ? 'تسجيل تلميذ جديد' : 'Inscrire un Nouvel Élève';
    document.getElementById('studentId').value = '';
    const matInput = document.getElementById('studentMatricule');
    if (matInput) matInput.value = '';
    document.getElementById('studentFirstName').value = '';
    document.getElementById('studentLastName').value = '';
    document.getElementById('studentGender').value = 'M';
    document.getElementById('studentLevel').value = '';
    document.getElementById('studentPhone').value = '';
    document.getElementById('studentParentName').value = '';
    document.getElementById('studentParentPhone').value = '';
    document.getElementById('studentAddress').value = '';
    document.getElementById('modalStudent').classList.add('active');
  }

  async editStudent(id) {
    let s = (this.students || []).find(item => item.id === id);
    if (!s) {
      try {
        const res = await fetch(`/api/students/${id}`);
        const data = await res.json();
        if (data.success) s = data.student;
      } catch (e) {}
    }
    if (!s) return;

    document.getElementById('modalStudentTitle').textContent = this.lang === 'ar' ? 'تعديل بيانات التلميذ' : "Modifier l'Élève";
    document.getElementById('studentId').value = s.id;
    const matInput = document.getElementById('studentMatricule');
    if (matInput) matInput.value = s.matricule || '';
    document.getElementById('studentFirstName').value = s.first_name;
    document.getElementById('studentLastName').value = s.last_name;
    document.getElementById('studentGender').value = s.gender;
    document.getElementById('studentLevel').value = s.level_id || '';
    document.getElementById('studentPhone').value = s.phone || '';
    document.getElementById('studentParentName').value = s.parent_name || '';
    document.getElementById('studentParentPhone').value = s.parent_phone || '';
    document.getElementById('studentAddress').value = s.address || '';
    document.getElementById('modalStudent').classList.add('active');
  }

  async saveStudent() {
    const id = document.getElementById('studentId').value;
    const payload = {
      matricule: document.getElementById('studentMatricule')?.value || '',
      first_name: document.getElementById('studentFirstName').value,
      last_name: document.getElementById('studentLastName').value,
      gender: document.getElementById('studentGender').value,
      level_id: document.getElementById('studentLevel').value,
      phone: document.getElementById('studentPhone').value,
      parent_name: document.getElementById('studentParentName').value,
      parent_phone: document.getElementById('studentParentPhone').value,
      address: document.getElementById('studentAddress').value
    };

    const url = id ? `/api/students/${id}` : '/api/students';
    const method = id ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (data.success) {
        this.closeModals();
        this.playChime('success');
        this.loadStudents();
        if (this.currentProfileStudentId && Number(this.currentProfileStudentId) === Number(id)) {
          this.openStudentProfile(id);
        }
      } else {
        alert(data.error || 'Erreur lors de l’enregistrement');
      }
    } catch (e) {
      console.error(e);
      alert('Erreur réseau');
    }
  }

  async printStudentCard(id) {
    let s = (this.students || []).find(item => item.id === id);
    if (!s) {
      try {
        const res = await fetch(`/api/students/${id}`);
        const data = await res.json();
        if (data.success) s = data.student;
      } catch (e) {}
    }
    if (!s) return;

    document.getElementById('cardStudentName').textContent = `${s.first_name} ${s.last_name}`;
    document.getElementById('cardStudentMatricule').textContent = s.matricule;
    document.getElementById('cardStudentLevel').textContent = s.level_name || 'Niveau non défini';
    document.getElementById('cardStudentPhone').textContent = `Tél: ${s.phone || s.parent_phone || '-'}`;

    // Render Barcode
    try {
      JsBarcode('#cardBarcodeSvg', s.matricule, {
        format: 'CODE128',
        lineColor: '#0f172a',
        width: 1.8,
        height: 45,
        displayValue: true,
        fontSize: 12
      });
    } catch (e) {
      console.warn('Barcode error', e);
    }

    document.getElementById('modalStudentCard').classList.add('active');
  }

  // -------------------------------------------------------------
  // ATTENDANCE & SESSIONS MANAGEMENT (MANUAL & RAPID SCAN)
  // -------------------------------------------------------------
  async switchAttendanceMode(mode) {
    this.attendanceMode = mode;
    const btnSheet = document.getElementById('tabBtnSheet');
    const btnScan = document.getElementById('tabBtnScan');
    const viewSheet = document.getElementById('attendanceSheetView');
    const viewScan = document.getElementById('attendanceScanView');

    if (mode === 'sheet') {
      btnSheet?.classList.add('active');
      btnScan?.classList.remove('active');
      if (viewSheet) viewSheet.style.display = 'block';
      if (viewScan) viewScan.style.display = 'none';
      if (this.currentAttendanceGroup) {
        await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
      }
    } else {
      btnScan?.classList.add('active');
      btnSheet?.classList.remove('active');
      if (viewSheet) viewSheet.style.display = 'none';
      if (viewScan) viewScan.style.display = 'block';

      const scanSelect = document.getElementById('scanSelectGroup');
      if (scanSelect && this.currentAttendanceGroup) {
        scanSelect.value = this.currentAttendanceGroup;
      }
      await this.loadScanLiveList();
      setTimeout(() => document.getElementById('pointageInput')?.focus(), 80);
    }
  }

  async loadAttendanceView() {
    const dateInput = document.getElementById('attSessionDate');
    const scanDateInput = document.getElementById('scanSessionDate');
    if (dateInput && !dateInput.value) {
      dateInput.value = this.currentAttendanceDate;
    }
    if (scanDateInput && !scanDateInput.value) {
      scanDateInput.value = this.currentAttendanceDate;
    }

    try {
      const res = await fetch('/api/attendance/groups');
      const data = await res.json();
      if (!data.success) return;

      const groups = data.groups || [];
      const select = document.getElementById('attSelectGroup');
      const scanSelect = document.getElementById('scanSelectGroup');
      if (!select) return;

      const currentSelected = select.value || this.currentAttendanceGroup;

      const optionsHtml = `<option value="">-- ${this.lang === 'ar' ? 'اختر الفوج الدراسي' : 'Choisir un groupe'} --</option>` +
        groups.map(g => `
          <option value="${g.id}" ${currentSelected == g.id ? 'selected' : ''}>
            ${this.escapeHtml(g.name)} — ${this.escapeHtml(g.subject_name || '')} (${g.students_count || 0} ${this.lang === 'ar' ? 'تلميذ' : 'élèves'}, ${g.sessions_count || 0} ${this.lang === 'ar' ? 'حصة' : 'séances'})
          </option>
        `).join('');

      select.innerHTML = optionsHtml;
      if (scanSelect) scanSelect.innerHTML = optionsHtml;

      if (!currentSelected && groups.length > 0) {
        this.currentAttendanceGroup = groups[0].id;
        select.value = groups[0].id;
        if (scanSelect) scanSelect.value = groups[0].id;
      } else if (currentSelected) {
        this.currentAttendanceGroup = currentSelected;
        if (scanSelect) scanSelect.value = currentSelected;
      }

      if (this.currentAttendanceGroup) {
        await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
        await this.loadScanLiveList();
      }
    } catch (err) {
      console.error('Failed to load attendance groups:', err);
    }
  }

  async onAttendanceGroupChange(groupId) {
    this.currentAttendanceGroup = groupId;
    const scanSelect = document.getElementById('scanSelectGroup');
    if (scanSelect && groupId) scanSelect.value = groupId;

    if (groupId) {
      await this.fetchAttendanceSheet(groupId, this.currentAttendanceDate);
      await this.loadScanLiveList();
    } else {
      this.resetAttendanceSheetUI();
    }
  }

  async onAttendanceDateChange(date) {
    if (!date) return;
    this.currentAttendanceDate = date;
    const scanDate = document.getElementById('scanSessionDate');
    if (scanDate) scanDate.value = date;

    if (this.currentAttendanceGroup) {
      await this.fetchAttendanceSheet(this.currentAttendanceGroup, date);
      await this.loadScanLiveList();
    }
  }

  async onScanGroupChange(groupId) {
    this.currentAttendanceGroup = groupId;
    const attSelect = document.getElementById('attSelectGroup');
    if (attSelect && groupId) attSelect.value = groupId;
    await this.loadScanLiveList();
    if (this.currentAttendanceGroup) {
      await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
    }
    setTimeout(() => document.getElementById('pointageInput')?.focus(), 50);
  }

  async onScanDateChange(date) {
    if (!date) return;
    this.currentAttendanceDate = date;
    const attDate = document.getElementById('attSessionDate');
    if (attDate) attDate.value = date;
    await this.loadScanLiveList();
    if (this.currentAttendanceGroup) {
      await this.fetchAttendanceSheet(this.currentAttendanceGroup, date);
    }
    setTimeout(() => document.getElementById('pointageInput')?.focus(), 50);
  }

  resetAttendanceSheetUI() {
    this.attendanceSheetData = null;
    this.attendanceRecords = {};
    const tbody = document.getElementById('attStudentsTableBody');
    if (tbody) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);">
            <i class="fa-solid fa-hand-pointer" style="font-size: 32px; margin-bottom: 10px; display: block; opacity: 0.5;"></i>
            ${this.lang === 'ar' ? 'يرجى اختيار فوج لعرض ورقة الحضور والتلاميذ.' : "Veuillez sélectionner un groupe ci-dessus pour afficher la feuille d'appel."}
          </td>
        </tr>
      `;
    }
    const detailsBar = document.getElementById('attGroupDetailsBar');
    if (detailsBar) detailsBar.style.display = 'none';
    this.updateAttendanceLiveStats();
  }

  async fetchAttendanceSheet(groupId, date) {
    if (!groupId) return this.resetAttendanceSheetUI();

    try {
      const res = await fetch(`/api/attendance/sheet?group_id=${groupId}&date=${date}`);
      const data = await res.json();
      if (!data.success) {
        alert(data.error || 'Erreur lors du chargement de la feuille de présence');
        return;
      }

      this.attendanceSheetData = data;
      this.attendanceRecords = {};

      // Fill session controls
      const sNumberInput = document.getElementById('attSessionNumber');
      const sTopicInput = document.getElementById('attSessionTopic');
      if (sNumberInput) sNumberInput.value = data.session?.session_number || 1;
      if (sTopicInput) sTopicInput.value = data.session?.topic || '';

      // Update Group Details Sub-bar
      const g = data.group;
      const detailsBar = document.getElementById('attGroupDetailsBar');
      if (detailsBar && g) {
        detailsBar.style.display = 'flex';
        document.getElementById('attGroupLevel').textContent = `${this.lang === 'ar' ? 'المستوى:' : 'Niveau:'} ${g.level_name || '-'}`;
        document.getElementById('attGroupSubject').textContent = `${this.lang === 'ar' ? 'المادة:' : 'Matière:'} ${g.subject_name || '-'}`;
        document.getElementById('attGroupTeacher').textContent = `${this.lang === 'ar' ? 'الأستاذ:' : 'Enseignant:'} ${g.teacher_name || '-'}`;
        document.getElementById('attGroupRoom').textContent = `${this.lang === 'ar' ? 'القاعة:' : 'Salle:'} ${g.room_name || '-'}`;
        document.getElementById('attGroupSchedule').textContent = `${g.day_of_week || ''} (${g.start_time || ''} - ${g.end_time || ''})`;
      }

      // Initialize attendance records
      const students = data.students || [];
      students.forEach(s => {
        this.attendanceRecords[s.student_id] = {
          status: s.status || 'present',
          notes: s.notes || ''
        };
      });

      this.renderAttendanceStudents(students);
      this.updateAttendanceLiveStats();
    } catch (err) {
      console.error('fetchAttendanceSheet error:', err);
    }
  }

  renderAttendanceStudents(studentsList) {
    const tbody = document.getElementById('attStudentsTableBody');
    if (!tbody) return;

    if (!studentsList || studentsList.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);">
            <i class="fa-solid fa-users-slash" style="font-size: 32px; margin-bottom: 10px; display: block; opacity: 0.5;"></i>
            ${this.lang === 'ar' ? 'لا يوجد أي تلميذ مسجل في هذا الفوج حالياً.' : 'Aucun élève inscrit dans ce groupe pour le moment.'}
          </td>
        </tr>
      `;
      return;
    }

    const totalSessions = this.attendanceSheetData?.total_sessions || 0;

    tbody.innerHTML = studentsList.map((s, index) => {
      const record = this.attendanceRecords[s.student_id] || { status: 'present', notes: '' };
      const currentStatus = record.status;

      // Payment badge
      let paymentBadgeHtml = '';
      if (s.is_paid) {
        paymentBadgeHtml = `<span class="att-badge-paid"><i class="fa-solid fa-circle-check"></i> ${this.lang === 'ar' ? 'مسدد' : 'À jour'}</span>`;
      } else if (s.payment_badge === 'partial') {
        paymentBadgeHtml = `<span class="att-badge-partial"><i class="fa-solid fa-circle-exclamation"></i> ${s.payment_text}</span>`;
      } else {
        paymentBadgeHtml = `<span class="att-badge-due"><i class="fa-solid fa-triangle-exclamation"></i> ${this.lang === 'ar' ? 'غير مسدد' : 'Impayé'}</span>`;
      }

      // Attendance rate in this group
      const attended = s.sessions_attended || 0;
      const ratePercent = totalSessions > 0 ? Math.min(100, Math.round((attended / totalSessions) * 100)) : 100;
      let barColor = '#10b981';
      if (ratePercent < 50) barColor = '#ef4444';
      else if (ratePercent < 75) barColor = '#f59e0b';

      return `
        <tr data-student-id="${s.student_id}" class="att-student-row">
          <td style="font-weight: 700; color: var(--text-muted);">${index + 1}</td>
          <td>
            <div style="display: flex; align-items: center; gap: 12px;">
              <div class="student-avatar-box" style="width: 38px; height: 38px; border-radius: 50%; font-size: 16px; flex-shrink: 0;">
                <i class="fa-solid fa-user"></i>
              </div>
              <div>
                <div style="font-weight: 800; color: var(--text-heading); font-size: 14px;">
                  ${this.escapeHtml(s.first_name)} ${this.escapeHtml(s.last_name)}
                </div>
                <div style="font-size: 11px; color: #60a5fa; font-weight: 600;">
                  ${this.escapeHtml(s.matricule)}
                </div>
              </div>
            </div>
          </td>
          <td>
            <div style="font-size: 12px; font-weight: 600;">
              <div><i class="fa-solid fa-phone" style="font-size: 10px; color: var(--text-muted);"></i> ${s.phone || '-'}</div>
              ${s.parent_phone ? `<div style="color: var(--text-muted); font-size: 11px;"><i class="fa-solid fa-user-shield" style="font-size: 10px;"></i> ${s.parent_phone}</div>` : ''}
            </div>
          </td>
          <td>
            <div class="att-progress-container">
              <div style="display: flex; justify-content: space-between; font-size: 11px; font-weight: 700;">
                <span>${attended} / ${totalSessions}</span>
                <span style="color: ${barColor};">${ratePercent}%</span>
              </div>
              <div class="att-progress-bar">
                <div class="att-progress-fill" style="width: ${ratePercent}%; background-color: ${barColor};"></div>
              </div>
            </div>
          </td>
          <td>
            ${paymentBadgeHtml}
          </td>
          <td style="text-align: center;">
            <div class="att-status-group" id="statusGroup_${s.student_id}">
              <button type="button" class="att-btn-status present ${currentStatus === 'present' ? 'active' : ''}" onclick="app.setStudentAttendanceStatus(${s.student_id}, 'present')" title="${this.lang === 'ar' ? 'حاضر' : 'Présent'}">
                <i class="fa-solid fa-check"></i>
                <span>${this.lang === 'ar' ? 'حاضر' : 'Présent'}</span>
              </button>
              <button type="button" class="att-btn-status absent ${currentStatus === 'absent' ? 'active' : ''}" onclick="app.setStudentAttendanceStatus(${s.student_id}, 'absent')" title="${this.lang === 'ar' ? 'غائب' : 'Absent'}">
                <i class="fa-solid fa-xmark"></i>
                <span>${this.lang === 'ar' ? 'غائب' : 'Absent'}</span>
              </button>
              <button type="button" class="att-btn-status late ${currentStatus === 'late' ? 'active' : ''}" onclick="app.setStudentAttendanceStatus(${s.student_id}, 'late')" title="${this.lang === 'ar' ? 'متأخر' : 'En retard'}">
                <i class="fa-regular fa-clock"></i>
                <span>${this.lang === 'ar' ? 'متأخر' : 'Retard'}</span>
              </button>
              <button type="button" class="att-btn-status excused ${currentStatus === 'excused' ? 'active' : ''}" onclick="app.setStudentAttendanceStatus(${s.student_id}, 'excused')" title="${this.lang === 'ar' ? 'معذور' : 'Justifié'}">
                <i class="fa-regular fa-file-lines"></i>
                <span>${this.lang === 'ar' ? 'مبرر' : 'Justifié'}</span>
              </button>
            </div>
          </td>
          <td>
            <input type="text" class="form-control" style="height: 32px; font-size: 12px; padding: 4px 8px;" placeholder="${this.lang === 'ar' ? 'ملاحظة...' : 'Remarque...'}" value="${this.escapeHtml(record.notes || '')}" oninput="app.setStudentAttendanceNotes(${s.student_id}, this.value)">
          </td>
        </tr>
      `;
    }).join('');
  }

  setStudentAttendanceStatus(studentId, status) {
    if (!this.attendanceRecords[studentId]) {
      this.attendanceRecords[studentId] = { status, notes: '' };
    } else {
      this.attendanceRecords[studentId].status = status;
    }

    const groupDiv = document.getElementById(`statusGroup_${studentId}`);
    if (groupDiv) {
      groupDiv.querySelectorAll('.att-btn-status').forEach(btn => {
        if (btn.classList.contains(status)) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }

    this.updateAttendanceLiveStats();
  }

  setStudentAttendanceNotes(studentId, notes) {
    if (!this.attendanceRecords[studentId]) {
      this.attendanceRecords[studentId] = { status: 'present', notes };
    } else {
      this.attendanceRecords[studentId].notes = notes;
    }
  }

  markAllAttendance(status) {
    if (!this.attendanceSheetData?.students) return;

    this.attendanceSheetData.students.forEach(s => {
      this.setStudentAttendanceStatus(s.student_id, status);
    });
  }

  filterAttendanceStudents(query) {
    const q = (query || '').toLowerCase().trim();
    const rows = document.querySelectorAll('.att-student-row');
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(q) ? '' : 'none';
    });
  }

  updateAttendanceLiveStats() {
    const students = this.attendanceSheetData?.students || [];
    const total = students.length;
    const totalHeld = this.attendanceSheetData?.total_sessions || 0;

    let present = 0;
    let absent = 0;
    let late = 0;
    let excused = 0;
    let paidCount = 0;

    students.forEach(s => {
      const rec = this.attendanceRecords[s.student_id];
      const st = rec ? rec.status : null;
      if (st === 'present') present++;
      else if (st === 'absent') absent++;
      else if (st === 'late') late++;
      else if (st === 'excused') excused++;

      if (s.is_paid) paidCount++;
    });

    const elTotal = document.getElementById('attStatTotal');
    const elSessions = document.getElementById('attStatSessions');
    const elPresent = document.getElementById('attStatPresent');
    const elAbsent = document.getElementById('attStatAbsent');
    const elLate = document.getElementById('attStatLate');
    const elPayments = document.getElementById('attStatPayments');

    if (elTotal) elTotal.textContent = total;
    if (elSessions) elSessions.textContent = totalHeld;
    if (elPresent) elPresent.textContent = present;
    if (elAbsent) elAbsent.textContent = absent;
    if (elLate) elLate.textContent = `${late + excused} (${late}R / ${excused}J)`;
    if (elPayments) elPayments.textContent = `${paidCount} / ${total}`;
  }

  async saveAttendanceSheet() {
    if (!this.currentAttendanceGroup || !this.currentAttendanceDate) {
      alert(this.lang === 'ar' ? 'يرجى اختيار الفوج وتاريخ الحصة أولاً' : 'Veuillez sélectionner un groupe et une date.');
      return;
    }

    const sNumber = document.getElementById('attSessionNumber')?.value || 1;
    const sTopic = document.getElementById('attSessionTopic')?.value || '';

    const records = Object.keys(this.attendanceRecords).map(id => ({
      student_id: Number(id),
      status: this.attendanceRecords[id].status || 'present',
      notes: this.attendanceRecords[id].notes || ''
    }));

    try {
      const btn = document.getElementById('btnSaveAttendance');
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${this.lang === 'ar' ? 'جاري الحفظ...' : 'Enregistrement...'}`;
      }

      const res = await fetch('/api/attendance/sheet/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          group_id: this.currentAttendanceGroup,
          session_date: this.currentAttendanceDate,
          session_number: sNumber,
          topic: sTopic,
          records
        })
      });

      const data = await res.json();
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = `<i class="fa-solid fa-floppy-disk"></i> <span>${this.lang === 'ar' ? 'حفظ سجل الحضور' : 'Enregistrer'}</span>`;
      }

      if (data.success) {
        this.playChime('success');
        alert(this.lang === 'ar' ? '✅ تم حفظ سجل حضور الحصة بنجاح!' : '✅ Feuille de présence enregistrée avec succès !');
        await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
      } else {
        this.playChime('error');
        alert(data.error || 'Erreur lors de la sauvegarde');
      }
    } catch (err) {
      console.error('saveAttendanceSheet error:', err);
      alert('Erreur serveur lors de la sauvegarde');
    }
  }

  getMonthLabel(yearMonthStr) {
    if (!yearMonthStr || yearMonthStr === 'all') {
      return this.lang === 'ar' ? 'جميع الأشهر (كامل الحصص)' : 'Toutes les séances (Tous les mois)';
    }
    const parts = yearMonthStr.split('-');
    if (parts.length < 2) return yearMonthStr;
    const year = parts[0];
    const month = parseInt(parts[1], 10);
    const monthsAr = [
      'جانفي (01)', 'فيفري (02)', 'مارس (03)', 'أفريل (04)', 'ماي (05)', 'جوان (06)',
      'جويلية (07)', 'أوت (08)', 'سبتمبر (09)', 'أكتوبر (10)', 'نوفمبر (11)', 'ديسمبر (12)'
    ];
    const monthsFr = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    const mName = this.lang === 'ar' ? monthsAr[month - 1] : monthsFr[month - 1];
    return `${mName} ${year}`;
  }

  async openAttendanceMatrixModal(selectedMonth = null) {
    if (!this.currentAttendanceGroup) {
      alert(this.lang === 'ar' ? 'يرجى اختيار الفوج أولاً' : 'Veuillez sélectionner un groupe.');
      return;
    }

    if (selectedMonth !== null) {
      this.matrixSelectedMonth = selectedMonth;
    } else if (!this.matrixSelectedMonth) {
      this.matrixSelectedMonth = 'all';
    }

    try {
      const url = `/api/attendance/matrix?group_id=${this.currentAttendanceGroup}&month=${encodeURIComponent(this.matrixSelectedMonth)}`;
      const res = await fetch(url);
      const data = await res.json();
      if (!data.success) {
        alert(data.error || 'Erreur lors du chargement de la grille');
        return;
      }

      this.matrixData = data;
      const g = data.group;
      document.getElementById('matrixModalGroupTitle').textContent = `${g.name} — ${g.subject_name || ''}`;

      // Populate month filter dropdown
      const monthSelect = document.getElementById('matrixFilterMonth');
      if (monthSelect) {
        const availableMonths = data.available_months || [];
        const totalAllSessions = availableMonths.reduce((sum, m) => sum + m.count, 0);

        let optionsHtml = `<option value="all" ${this.matrixSelectedMonth === 'all' ? 'selected' : ''}>
          ${this.lang === 'ar' ? `جميع الأشهر (${totalAllSessions} حصص)` : `Toutes les séances (${totalAllSessions} séances)`}
        </option>`;

        availableMonths.forEach(m => {
          const label = this.getMonthLabel(m.month_val);
          const countText = this.lang === 'ar' ? `${m.count} حصص` : `${m.count} séances`;
          optionsHtml += `<option value="${m.month_val}" ${this.matrixSelectedMonth === m.month_val ? 'selected' : ''}>
            ${label} (${countText})
          </option>`;
        });

        monthSelect.innerHTML = optionsHtml;
      }

      const sessions = data.sessions || [];
      const students = data.students || [];

      // Calculate totals and average attendance
      const countEl = document.getElementById('matrixCountSessions');
      if (countEl) countEl.textContent = sessions.length;

      const avgEl = document.getElementById('matrixAvgAttendance');
      if (avgEl) {
        if (students.length > 0 && sessions.length > 0) {
          const totalRates = students.reduce((acc, st) => acc + (st.attendanceRate || 0), 0);
          const avg = Math.round(totalRates / students.length);
          avgEl.textContent = `${avg}%`;
        } else {
          avgEl.textContent = '100%';
        }
      }

      const monthSubtitle = this.matrixSelectedMonth === 'all'
        ? (this.lang === 'ar' ? 'كامل الحصص المسجلة' : 'Toute la période')
        : this.getMonthLabel(this.matrixSelectedMonth);

      document.getElementById('matrixModalGroupSubtitle').textContent =
        `${this.lang === 'ar' ? 'الأستاذ:' : 'Enseignant:'} ${g.teacher_name || '-'} | ${this.lang === 'ar' ? 'الفترة المعروضة:' : 'Période:'} ${monthSubtitle} (${sessions.length} ${this.lang === 'ar' ? 'حصص' : 'séances'})`;

      const table = document.getElementById('attendanceMatrixTable');
      if (!table) return;

      let headHtml = `
        <thead>
          <tr>
            <th style="min-width: 200px; text-align: ${this.lang === 'ar' ? 'right' : 'left'};">${this.lang === 'ar' ? 'اسم ولقب التلميذ' : 'Élève / Matricule'}</th>
      `;

      sessions.forEach(sess => {
        headHtml += `
          <th style="min-width: 85px;" title="${this.escapeHtml(sess.topic || '')}">
            <div style="font-size: 11px; font-weight: 800; color: #60a5fa;">${this.lang === 'ar' ? 'ح' : 'S'}${sess.session_number}</div>
            <div style="font-size: 10px; color: var(--text-muted);">${sess.session_date}</div>
            <button type="button" onclick="event.stopPropagation(); app.deleteAttendanceSession(${g.id}, '${sess.session_date}')" style="background: none; border: none; color: #ef4444; font-size: 10px; cursor: pointer; opacity: 0.6; margin-top: 2px;" title="${this.lang === 'ar' ? 'حذف هذه الحصة' : 'Supprimer cette séance'}">
              <i class="fa-solid fa-trash"></i>
            </button>
          </th>
        `;
      });

      headHtml += `
            <th style="min-width: 90px;">${this.lang === 'ar' ? 'مجموع الحضور' : 'Présences'}</th>
            <th style="min-width: 75px;">${this.lang === 'ar' ? 'نسبة المواظبة' : '%'}</th>
          </tr>
        </thead>
      `;

      let bodyHtml = '<tbody>';
      if (students.length === 0) {
        bodyHtml += `<tr><td colspan="${sessions.length + 3}" style="text-align: center; padding: 20px;">${this.lang === 'ar' ? 'لا يوجد أي تلميذ مسجل بالفوج' : 'Aucun élève'}</td></tr>`;
      } else if (sessions.length === 0) {
        bodyHtml += `<tr><td colspan="4" style="text-align: center; padding: 25px; color: var(--text-muted);">${this.lang === 'ar' ? 'لا توجد أي حصص مسجلة في هذا الشهر المحدد.' : 'Aucune séance enregistrée pour ce mois sélectionné.'}</td></tr>`;
      } else {
        students.forEach(st => {
          bodyHtml += `
            <tr class="matrix-student-row" data-name="${this.escapeHtml(st.first_name + ' ' + st.last_name).toLowerCase()}" data-matricule="${this.escapeHtml(st.matricule).toLowerCase()}">
              <td style="font-weight: 700; text-align: ${this.lang === 'ar' ? 'right' : 'left'};">
                ${this.escapeHtml(st.first_name)} ${this.escapeHtml(st.last_name)}
                <div style="font-size: 10px; color: var(--text-muted);">${this.escapeHtml(st.matricule)}</div>
              </td>
          `;

          sessions.forEach(sess => {
            const status = st.sessions[sess.session_date];
            let badge = '<span class="att-matrix-badge none">-</span>';
            if (status === 'present') badge = `<span class="att-matrix-badge present" title="${this.lang === 'ar' ? 'حاضر' : 'Présent'}">P</span>`;
            else if (status === 'absent') badge = `<span class="att-matrix-badge absent" title="${this.lang === 'ar' ? 'غائب' : 'Absent'}">A</span>`;
            else if (status === 'late') badge = `<span class="att-matrix-badge late" title="${this.lang === 'ar' ? 'متأخر' : 'Retard'}">R</span>`;
            else if (status === 'excused') badge = `<span class="att-matrix-badge excused" title="${this.lang === 'ar' ? 'معذور' : 'Justifié'}">J</span>`;

            bodyHtml += `<td>${badge}</td>`;
          });

          const rateColor = st.attendanceRate >= 75 ? '#10b981' : (st.attendanceRate >= 50 ? '#f59e0b' : '#ef4444');

          bodyHtml += `
              <td style="font-weight: 700;">${st.presentCount} / ${st.totalHeld}</td>
              <td style="font-weight: 800; color: ${rateColor};">${st.attendanceRate}%</td>
            </tr>
          `;
        });
      }
      bodyHtml += '</tbody>';

      table.innerHTML = headHtml + bodyHtml;
      document.getElementById('modalAttendanceMatrix')?.classList.add('active');
    } catch (err) {
      console.error('openAttendanceMatrixModal error:', err);
    }
  }

  onAttendanceMatrixMonthChange(month) {
    this.openAttendanceMatrixModal(month);
  }

  filterMatrixStudents(query) {
    const q = (query || '').toLowerCase().trim();
    const rows = document.querySelectorAll('.matrix-student-row');
    rows.forEach(r => {
      const name = r.getAttribute('data-name') || '';
      const matricule = r.getAttribute('data-matricule') || '';
      if (!q || name.includes(q) || matricule.includes(q)) {
        r.style.display = '';
      } else {
        r.style.display = 'none';
      }
    });
  }

  async deleteAttendanceSession(groupId, sessionDate) {
    const confirmMsg = this.lang === 'ar'
      ? `هل أنت متأكد من حذف الحصة بتاريخ ${sessionDate} وسجل حضورها؟`
      : `Voulez-vous vraiment supprimer la séance du ${sessionDate} et ses présences ?`;

    if (!confirm(confirmMsg)) return;

    try {
      const res = await fetch('/api/attendance/session', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ group_id: groupId, session_date: sessionDate })
      });
      const data = await res.json();
      if (data.success) {
        alert(this.lang === 'ar' ? 'تم حذف الحصة بنجاح' : 'Séance supprimée avec succès');
        await this.openAttendanceMatrixModal();
        if (this.currentAttendanceDate === sessionDate) {
          await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
        }
      }
    } catch (err) {
      console.error('deleteAttendanceSession error:', err);
    }
  }

  printAttendanceSheet() {
    if (!this.attendanceSheetData || !this.attendanceSheetData.group) {
      alert(this.lang === 'ar' ? 'يرجى اختيار الفوج أولاً' : 'Veuillez sélectionner un groupe.');
      return;
    }

    const g = this.attendanceSheetData.group;
    const date = this.currentAttendanceDate;
    const sNumber = document.getElementById('attSessionNumber')?.value || 1;
    const sTopic = document.getElementById('attSessionTopic')?.value || '';
    const students = this.attendanceSheetData.students || [];
    const schoolName = this.settings?.school_name || 'EDUMIND Academy';

    const printDiv = document.getElementById('attendancePrintSheet');
    if (!printDiv) return;

    printDiv.innerHTML = `
      <div style="font-family: Arial, sans-serif; color: #000; padding: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 16px;">
          <div>
            <h1 style="margin: 0; font-size: 22px; text-transform: uppercase;">${this.escapeHtml(schoolName)}</h1>
            <div style="font-size: 13px; color: #555;">FEUILLE D'ÉMARGEMENT & PRÉSENCES / ورقة الحضور الرسمية</div>
          </div>
          <div style="text-align: right; font-size: 13px;">
            <div><strong>Date:</strong> ${date}</div>
            <div><strong>Année scolaire:</strong> ${this.settings?.active_year || '2025-2026'}</div>
          </div>
        </div>

        <div style="background: #f8f9fa; border: 1px solid #ddd; border-radius: 6px; padding: 12px 16px; margin-bottom: 18px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; font-size: 13px;">
          <div><strong>Groupe / الفوج:</strong> ${this.escapeHtml(g.name)}</div>
          <div><strong>Matière / المادة:</strong> ${this.escapeHtml(g.subject_name || '-')}</div>
          <div><strong>Niveau / المستوى:</strong> ${this.escapeHtml(g.level_name || '-')}</div>
          <div><strong>Enseignant / الأستاذ:</strong> ${this.escapeHtml(g.teacher_name || '-')}</div>
          <div><strong>Séance N° / رقم الحصة:</strong> ${sNumber}</div>
          <div><strong>Thème / الدرس:</strong> ${this.escapeHtml(sTopic || '-')}</div>
        </div>

        <table style="width: 100%; border-collapse: collapse; font-size: 12px; margin-bottom: 20px;">
          <thead>
            <tr style="background: #e9ecef;">
              <th style="border: 1px solid #999; padding: 6px; width: 30px;">#</th>
              <th style="border: 1px solid #999; padding: 6px; text-align: left;">Matricule</th>
              <th style="border: 1px solid #999; padding: 6px; text-align: left;">Nom & Prénom / الاسم واللقب</th>
              <th style="border: 1px solid #999; padding: 6px; width: 80px;">Présence</th>
              <th style="border: 1px solid #999; padding: 6px; width: 90px;">Cotisation</th>
              <th style="border: 1px solid #999; padding: 6px; width: 140px;">Émargement / التوقيع</th>
              <th style="border: 1px solid #999; padding: 6px;">Remarques</th>
            </tr>
          </thead>
          <tbody>
            ${students.map((st, i) => {
              const rec = this.attendanceRecords[st.student_id] || { status: 'present', notes: '' };
              let statusLabel = 'Présent';
              if (rec.status === 'absent') statusLabel = 'ABSENT';
              else if (rec.status === 'late') statusLabel = 'Retard';
              else if (rec.status === 'excused') statusLabel = 'Justifié';

              return `
                <tr>
                  <td style="border: 1px solid #999; padding: 6px; text-align: center;">${i + 1}</td>
                  <td style="border: 1px solid #999; padding: 6px;">${st.matricule}</td>
                  <td style="border: 1px solid #999; padding: 6px; font-weight: bold;">${this.escapeHtml(st.first_name)} ${this.escapeHtml(st.last_name)}</td>
                  <td style="border: 1px solid #999; padding: 6px; text-align: center; font-weight: bold;">${statusLabel}</td>
                  <td style="border: 1px solid #999; padding: 6px; text-align: center;">${st.is_paid ? 'À jour' : 'Impayé'}</td>
                  <td style="border: 1px solid #999; padding: 6px;"></td>
                  <td style="border: 1px solid #999; padding: 6px;">${this.escapeHtml(rec.notes || '')}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>

        <div style="display: flex; justify-content: space-between; margin-top: 30px; font-size: 13px;">
          <div>Visa de l'Administration / تأشيرة الإدارة</div>
          <div>Signature de l'Enseignant / توقيع الأستاذ</div>
        </div>
      </div>
    `;

    printDiv.style.display = 'block';
    window.print();
    setTimeout(() => { printDiv.style.display = 'none'; }, 1000);
  }

  printAttendanceMatrix() {
    const modalTable = document.getElementById('attendanceMatrixTable');
    if (!modalTable) return;

    const printDiv = document.getElementById('attendancePrintMatrix');
    if (!printDiv) return;

    const gTitle = document.getElementById('matrixModalGroupTitle')?.textContent || '';
    const schoolName = this.settings?.school_name || 'EDUMIND Academy';
    const periodLabel = this.getMonthLabel(this.matrixSelectedMonth);

    printDiv.innerHTML = `
      <div style="font-family: Arial, sans-serif; color: #000; padding: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 16px;">
          <div>
            <h1 style="margin: 0; font-size: 20px; text-transform: uppercase;">${this.escapeHtml(schoolName)}</h1>
            <div style="font-size: 13px; color: #555;">${this.lang === 'ar' ? 'سجل الحصص والمواظبة العامة' : 'GRILLE DES SÉANCES & ASSIDUITÉ'}</div>
          </div>
          <div style="text-align: right; font-size: 13px;">
            <div><strong>${this.lang === 'ar' ? 'الفوج:' : 'Groupe:'}</strong> ${this.escapeHtml(gTitle)}</div>
            <div><strong>${this.lang === 'ar' ? 'الفترة:' : 'Période:'}</strong> ${this.escapeHtml(periodLabel)}</div>
            <div><strong>${this.lang === 'ar' ? 'تاريخ الاستخراج:' : 'Date:'}</strong> ${new Date().toLocaleDateString(this.lang === 'ar' ? 'ar-DZ' : 'fr-FR')}</div>
          </div>
        </div>

        <div style="margin-bottom: 16px;">
          ${modalTable.outerHTML}
        </div>

        <div style="display: flex; justify-content: space-between; margin-top: 30px; font-size: 13px;">
          <div>${this.lang === 'ar' ? 'تأشيرة الإدارة' : "Visa de l'Administration"}</div>
          <div>${this.lang === 'ar' ? 'توقيع الأستاذ' : "Signature de l'Enseignant"}</div>
        </div>
      </div>
    `;

    printDiv.style.display = 'block';
    window.print();
    setTimeout(() => { printDiv.style.display = 'none'; }, 1000);
  }

  // -------------------------------------------------------------
  // RAPID POINTAGE SCANNER (ATTENDANCE & CHIME)
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // RAPID POINTAGE SCANNER (ATTENDANCE & CHIME)
  // -------------------------------------------------------------
  async handlePointageScan() {
    const input = document.getElementById('pointageInput');
    const code = input.value.trim();
    if (!code) return;

    const groupId = document.getElementById('scanSelectGroup')?.value || this.currentAttendanceGroup || null;
    const sessionDate = document.getElementById('scanSessionDate')?.value || this.currentAttendanceDate || new Date().toISOString().split('T')[0];

    try {
      const res = await fetch('/api/pointage/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code, group_id: groupId, session_date: sessionDate })
      });

      const data = await res.json();
      const card = document.getElementById('pointageResultCard');
      const badge = document.getElementById('pointageBadge');
      const infoText = document.getElementById('pointageInfoText');

      if (!data.success) {
        this.playChime('error');
        card.className = 'pointage-result-card status-due';
        badge.style.background = '#ef4444';
        badge.textContent = this.lang === 'ar' ? 'غير مسجل في النظام ❌' : 'NON TROUVÉ ❌';
        infoText.innerHTML = `<h3 style="color: #ef4444; font-size: 18px;">${this.escapeHtml(data.error)}</h3>`;
        card.style.display = 'block';
        input.value = '';
        setTimeout(() => input.focus(), 20);
        return;
      }

      const s = data.student;

      if (data.notInSelectedGroup) {
        this.playChime('error');
        card.className = 'pointage-result-card status-due';
        badge.style.background = '#ef4444';
        badge.textContent = this.lang === 'ar' ? '⚠️ غير مسجل في هذا الفوج' : '⚠️ NON INSCRIT DANS CE GROUPE';
        infoText.innerHTML = `
          <h3 style="font-size: 20px; font-weight: 800; color: #fff;">${this.escapeHtml(s.first_name)} ${this.escapeHtml(s.last_name)}</h3>
          <p style="color: #94a3b8; font-size: 13.5px;">Matricule: <strong style="color: #60a5fa;">${s.matricule}</strong></p>
          <p style="color: #f87171; font-weight: 700; font-size: 13.5px; margin-top: 4px;">
            ${this.lang === 'ar' ? 'التلميذ مسجل في المركز لكنه غير مقيد في هذا الفوج المختار!' : 'Cet élève n\'est pas inscrit dans ce groupe.'}
          </p>
        `;
      } else if (data.alreadyMarked) {
        this.playChime('warning');
        card.className = 'pointage-result-card status-paid';
        badge.style.background = '#f59e0b';
        badge.textContent = this.lang === 'ar' ? 'ℹ️ سُجِّل حضوره مسبقاً اليوم' : 'ℹ️ DÉJÀ ENREGISTRÉ AUJOURD\'HUI';
        infoText.innerHTML = `
          <h3 style="font-size: 20px; font-weight: 800; color: #fff;">${this.escapeHtml(s.first_name)} ${this.escapeHtml(s.last_name)}</h3>
          <p style="color: #94a3b8; font-size: 13.5px;">Matricule: <strong style="color: #60a5fa;">${s.matricule}</strong> | ${s.level_name || '-'}</p>
          <p style="color: #fbbf24; font-weight: 700; margin-top: 4px; font-size: 13.5px;">
            ${this.lang === 'ar' ? 'تم تسجيل حضور هذا التلميذ سابقاً عند: ' + (data.existingTime || '') : 'Pointage déjà validé précédemment à ' + (data.existingTime || '')}
          </p>
        `;
      } else if (data.isPaid) {
        this.playChime('success');
        card.className = 'pointage-result-card status-paid';
        badge.style.background = '#10b981';
        badge.textContent = this.lang === 'ar' ? '✅ الحساب مسدد (حاضر)' : '✅ INSCRIPTION À JOUR (PAYÉ)';
        infoText.innerHTML = `
          <h3 style="font-size: 20px; font-weight: 800; color: #fff;">${this.escapeHtml(s.first_name)} ${this.escapeHtml(s.last_name)}</h3>
          <p style="color: #94a3b8; font-size: 13.5px;">Matricule: <strong style="color: #60a5fa;">${s.matricule}</strong> | ${s.level_name || '-'}</p>
          <p style="color: #10b981; font-weight: 700; margin-top: 4px; font-size: 13.5px;">
            ${this.lang === 'ar' ? 'تم تأكيد دفع اشتراك الشهر. سُجّل الحضور عند ' + data.timestamp : 'Paiement vérifié pour ce mois. Présence enregistrée à ' + data.timestamp}
          </p>
        `;
      } else {
        this.playChime('warning');
        card.className = 'pointage-result-card status-due';
        badge.style.background = '#ef4444';
        badge.textContent = this.lang === 'ar' ? '⚠️ تنبيه: اشتراك غير مسدد' : '⚠️ ATTENTION: ABONNEMENT IMPAYÉ';
        infoText.innerHTML = `
          <h3 style="font-size: 20px; font-weight: 800; color: #fff;">${this.escapeHtml(s.first_name)} ${this.escapeHtml(s.last_name)}</h3>
          <p style="color: #94a3b8; font-size: 13.5px;">Matricule: <strong style="color: #60a5fa;">${s.matricule}</strong> | Tél: ${s.phone || s.parent_phone || '-'}</p>
          <p style="color: #ef4444; font-weight: 700; margin-top: 4px; font-size: 13.5px;">
            ${this.lang === 'ar' ? 'التلميذ لم يسدد اشتراك هذا الشهر بعد. تم تسجيل الحضور مع تنبيه بالمستحقات.' : 'L\'élève n\'a pas encore réglé ce mois. Présence notée avec retard de paiement.'}
          </p>
        `;
      }

      card.style.display = 'block';

      if (data.groupStats) {
        const statTotal = document.getElementById('scanStatTotal');
        const statPresent = document.getElementById('scanStatPresent');
        const statPending = document.getElementById('scanStatPending');
        if (statTotal) statTotal.textContent = data.groupStats.totalEnrolled;
        if (statPresent) statPresent.textContent = data.groupStats.presentCount;
        if (statPending) statPending.textContent = data.groupStats.remainingCount;
      }

      await this.loadScanLiveList();
      if (this.currentAttendanceGroup) {
        await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
      }

      input.value = '';
      setTimeout(() => { input.focus(); }, 15);
    } catch (err) {
      console.error('Scan error:', err);
    }
  }

  async loadScanLiveList() {
    const groupId = document.getElementById('scanSelectGroup')?.value || this.currentAttendanceGroup;
    const sessionDate = document.getElementById('scanSessionDate')?.value || this.currentAttendanceDate || new Date().toISOString().split('T')[0];
    const tbody = document.getElementById('scanLiveTableBody');
    if (!tbody) return;

    if (!groupId) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 30px; color: var(--text-muted);">${this.lang === 'ar' ? 'يرجى اختيار الفوج لعرض قائمة الحضور اللحظي.' : 'Veuillez sélectionner un groupe pour afficher la présence.'}</td></tr>`;
      return;
    }

    try {
      const res = await fetch(`/api/pointage/live-list?group_id=${groupId}&session_date=${sessionDate}`);
      const data = await res.json();
      if (!data.success) return;

      const stats = data.stats || { totalEnrolled: 0, presentCount: 0, pendingCount: 0 };
      const elTotal = document.getElementById('scanStatTotal');
      const elPresent = document.getElementById('scanStatPresent');
      const elPending = document.getElementById('scanStatPending');
      if (elTotal) elTotal.textContent = stats.totalEnrolled;
      if (elPresent) elPresent.textContent = stats.presentCount;
      if (elPending) elPending.textContent = stats.pendingCount;

      const scanBadge = document.getElementById('scanBadgeCount');
      if (scanBadge) {
        scanBadge.textContent = `${stats.presentCount} ${this.lang === 'ar' ? 'حاضرين' : 'présents'} / ${stats.totalEnrolled}`;
      }

      const students = data.students || [];
      if (students.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 30px; color: var(--text-muted);">${this.lang === 'ar' ? 'لا يوجد أي تلاميذ مسجلين في هذا الفوج حتى الآن.' : 'Aucun élève inscrit dans ce groupe.'}</td></tr>`;
        return;
      }

      tbody.innerHTML = students.map((s, idx) => {
        const isPresent = s.attendance_status === 'present';
        const isAbsent = s.attendance_status === 'absent';
        const isPaid = (s.payment_id && (s.remaining_amount === 0 || s.remaining_amount === null));

        let statusBadge = `<span style="background: rgba(148, 163, 184, 0.12); color: #94a3b8; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 700;">${this.lang === 'ar' ? 'في الانتظار' : 'En attente'}</span>`;
        if (isPresent) {
          statusBadge = `<span style="background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 800; display: inline-flex; align-items: center; gap: 4px;"><i class="fa-solid fa-check"></i> ${this.lang === 'ar' ? 'حاضر' : 'Présent'}</span>`;
        } else if (isAbsent) {
          statusBadge = `<span style="background: rgba(239, 68, 68, 0.15); color: #ef4444; padding: 4px 10px; border-radius: 6px; font-size: 11px; font-weight: 800; display: inline-flex; align-items: center; gap: 4px;"><i class="fa-solid fa-xmark"></i> ${this.lang === 'ar' ? 'غائب' : 'Absent'}</span>`;
        }

        let paymentBadge = `<span style="color: #ef4444; font-size: 12px; font-weight: 700;"><i class="fa-solid fa-circle-exclamation"></i> ${this.lang === 'ar' ? 'غير مسدد' : 'Impayé'}</span>`;
        if (isPaid) {
          paymentBadge = `<span style="color: #10b981; font-size: 12px; font-weight: 700;"><i class="fa-solid fa-circle-check"></i> ${this.lang === 'ar' ? 'مسدد' : 'Réglé'}</span>`;
        } else if (s.remaining_amount > 0) {
          paymentBadge = `<span style="color: #f59e0b; font-size: 12px; font-weight: 700;"><i class="fa-solid fa-clock"></i> ${this.lang === 'ar' ? 'متبقي ' + s.remaining_amount + ' دج' : 'Reste ' + s.remaining_amount + ' DA'}</span>`;
        }

        return `
          <tr style="${isPresent ? 'background: rgba(16, 185, 129, 0.04);' : ''}">
            <td style="color: var(--text-muted); font-weight: 700;">${idx + 1}</td>
            <td><strong style="color: var(--text-muted); font-size: 12px;">${s.check_in_time || '--:--'}</strong></td>
            <td><strong style="color: #60a5fa; font-family: monospace;">${s.matricule}</strong></td>
            <td>
              <div style="display: flex; align-items: center; gap: 8px;">
                <div class="student-avatar-box" style="width: 28px; height: 28px; font-size: 12px; border-radius: 6px;">
                  <i class="fa-solid fa-user"></i>
                </div>
                <strong>${this.escapeHtml(s.last_name)} ${this.escapeHtml(s.first_name)}</strong>
              </div>
            </td>
            <td>${paymentBadge}</td>
            <td style="text-align: center;">${statusBadge}</td>
            <td style="text-align: center;">
              ${isPresent ? `
                <button type="button" class="btn-icon" style="color: #ef4444; font-size: 12px;" title="${this.lang === 'ar' ? 'إلغاء الحضور' : 'Annuler présence'}" onclick="app.cancelScannedAttendance(${s.id})">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              ` : `
                <button type="button" class="btn-icon" style="color: #10b981; font-size: 12px;" title="${this.lang === 'ar' ? 'تسجيل كحاضر' : 'Pointer présent'}" onclick="app.quickMarkPresent(${s.id})">
                  <i class="fa-solid fa-check"></i>
                </button>
              `}
            </td>
          </tr>
        `;
      }).join('');
    } catch (err) {
      console.error('loadScanLiveList error:', err);
    }
  }

  async cancelScannedAttendance(studentId) {
    const groupId = document.getElementById('scanSelectGroup')?.value || this.currentAttendanceGroup;
    const sessionDate = document.getElementById('scanSessionDate')?.value || this.currentAttendanceDate || new Date().toISOString().split('T')[0];
    if (!groupId || !studentId) return;

    if (!confirm(this.lang === 'ar' ? 'هل تريد إلغاء تسجيل حضور هذا التلميذ؟' : 'Annuler le pointage de cet élève ?')) return;

    try {
      const res = await fetch('/api/pointage/cancel', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ student_id: studentId, group_id: groupId, session_date: sessionDate })
      });
      const data = await res.json();
      if (data.success) {
        this.playChime('warning');
        await this.loadScanLiveList();
        if (this.currentAttendanceGroup) {
          await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  async quickMarkPresent(studentId) {
    const groupId = document.getElementById('scanSelectGroup')?.value || this.currentAttendanceGroup;
    const sessionDate = document.getElementById('scanSessionDate')?.value || this.currentAttendanceDate || new Date().toISOString().split('T')[0];
    if (!groupId || !studentId) return;

    try {
      const res = await fetch('/api/pointage/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: String(studentId), group_id: groupId, session_date: sessionDate })
      });
      const data = await res.json();
      if (data.success) {
        this.playChime(data.isPaid ? 'success' : 'warning');
        await this.loadScanLiveList();
        if (this.currentAttendanceGroup) {
          await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  async confirmCloseAttendanceSession() {
    const groupId = document.getElementById('scanSelectGroup')?.value || 
                    document.getElementById('attSelectGroup')?.value || 
                    this.currentAttendanceGroup;
    const sessionDate = document.getElementById('scanSessionDate')?.value || 
                        document.getElementById('attSessionDate')?.value || 
                        this.currentAttendanceDate || 
                        new Date().toISOString().split('T')[0];

    if (!groupId) {
      alert(this.lang === 'ar' ? 'يرجى اختيار الفوج أولاً!' : 'Veuillez sélectionner un groupe d\'abord !');
      return;
    }

    try {
      const res = await fetch(`/api/pointage/live-list?group_id=${groupId}&session_date=${sessionDate}`);
      const data = await res.json();
      if (!data.success) return;

      const stats = data.stats || { totalEnrolled: 0, presentCount: 0, pendingCount: 0 };
      const groupSelect = document.getElementById('scanSelectGroup') || document.getElementById('attSelectGroup');
      const groupName = groupSelect?.options[groupSelect.selectedIndex]?.text?.split('—')[0] || 'Groupe';

      const summaryEl = document.getElementById('closeSessionSummaryText');
      if (summaryEl) {
        if (this.lang === 'ar') {
          summaryEl.innerHTML = `
            هل تريد <strong>تأكيد انتهاء حضور كامل التلاميذ</strong> لهذا الفوج؟<br>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 8px; padding: 12px; margin-top: 12px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; text-align: center;">
              <div><span style="color: var(--text-muted); font-size: 11px;">إجمالي المسجلين</span><div style="font-size: 18px; font-weight: 800;">${stats.totalEnrolled}</div></div>
              <div><span style="color: #10b981; font-size: 11px;">الحاضرون المسجلون</span><div style="font-size: 18px; font-weight: 800; color: #10b981;">${stats.presentCount}</div></div>
              <div><span style="color: #ef4444; font-size: 11px;">سيُسجلون كغائبين</span><div style="font-size: 18px; font-weight: 800; color: #ef4444;">${stats.pendingCount}</div></div>
            </div>
            <div style="margin-top: 12px; font-size: 13px;">
              <strong>الفوج:</strong> ${this.escapeHtml(groupName)}<br>
              <strong>تاريخ الحصة:</strong> ${sessionDate}
            </div>
          `;
        } else {
          summaryEl.innerHTML = `
            Confirmez-vous la <strong>fin de l'appel</strong> pour ce groupe ?<br>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 8px; padding: 12px; margin-top: 12px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; text-align: center;">
              <div><span style="color: var(--text-muted); font-size: 11px;">Total Inscrits</span><div style="font-size: 18px; font-weight: 800;">${stats.totalEnrolled}</div></div>
              <div><span style="color: #10b981; font-size: 11px;">Présents Pointés</span><div style="font-size: 18px; font-weight: 800; color: #10b981;">${stats.presentCount}</div></div>
              <div><span style="color: #ef4444; font-size: 11px;">Seront Notés Absents</span><div style="font-size: 18px; font-weight: 800; color: #ef4444;">${stats.pendingCount}</div></div>
            </div>
            <div style="margin-top: 12px; font-size: 13px;">
              <strong>Groupe :</strong> ${this.escapeHtml(groupName)}<br>
              <strong>Date :</strong> ${sessionDate}
            </div>
          `;
        }
      }

      this.closeSessionPendingTarget = { groupId, sessionDate };
      document.getElementById('modalConfirmCloseSession')?.classList.add('active');
    } catch (e) {
      console.error(e);
    }
  }

  async executeCloseAttendanceSession() {
    if (!this.closeSessionPendingTarget) return;
    const { groupId, sessionDate } = this.closeSessionPendingTarget;
    const sNumber = document.getElementById('attSessionNumber')?.value || 1;
    const sTopic = document.getElementById('attSessionTopic')?.value || 'Séance de cours';
    const btn = document.getElementById('btnExecuteCloseSession');

    try {
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${this.lang === 'ar' ? 'جاري المعالجة...' : 'Traitement...'}`;
      }

      const res = await fetch('/api/attendance/close-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          group_id: groupId,
          session_date: sessionDate,
          session_number: sNumber,
          topic: sTopic
        })
      });

      const data = await res.json();
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = `<i class="fa-solid fa-check"></i> <span data-i18n="btn_confirm_close_absent">${this.lang === 'ar' ? 'تأكيد وتسجيل الغياب تلقائياً' : 'Confirmer & Marquer les Absents'}</span>`;
      }

      if (data.success) {
        this.closeModals();
        this.playChime('success');
        alert(this.lang === 'ar' ? 
          `✅ ${data.message}\nتم تثبيت الحضور وتسجيل الغائبين المتبقين بنجاح.` : 
          `✅ ${data.message}`);

        await this.loadScanLiveList();
        if (this.currentAttendanceGroup) {
          await this.fetchAttendanceSheet(this.currentAttendanceGroup, this.currentAttendanceDate);
        }
      } else {
        this.playChime('error');
        alert(data.error || 'Erreur');
      }
    } catch (err) {
      console.error('executeCloseAttendanceSession error:', err);
      if (btn) btn.disabled = false;
      alert('Erreur serveur lors de la clôture');
    }
  }

  // -------------------------------------------------------------
  // PAYMENTS & RECEIPTS
  // -------------------------------------------------------------
  async loadPayments() {
    try {
      const res = await fetch('/api/payments');
      const data = await res.json();
      if (!data.success) return;

      this.payments = data.payments || [];
      const searchInput = document.getElementById('searchPaymentInput');
      if (searchInput && searchInput.value.trim()) {
        this.filterPayments(searchInput.value);
      } else {
        this.renderPaymentsTable(this.payments);
      }
    } catch (err) {
      console.error('Failed to load payments:', err);
    }
  }

  filterPayments(query = '') {
    const list = this.payments || [];
    const term = (query || '').trim().toLowerCase();
    if (!term) {
      this.renderPaymentsTable(list);
      return;
    }

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    const filtered = list.filter(p => {
      const sName = norm(p.student_name);
      const mat = (p.matricule || '').toLowerCase();
      const rcpt = (p.receipt_no || '').toLowerCase();
      const grp = norm(p.group_name);
      const subj = norm(p.subject_name);
      const period = norm(p.month_period);

      return sName.includes(normTerm) || mat.includes(normTerm) || rcpt.includes(normTerm) || grp.includes(normTerm) || subj.includes(normTerm) || period.includes(normTerm);
    });

    this.renderPaymentsTable(filtered);
  }

  renderPaymentsTable(list) {
    const tbody = document.getElementById('paymentsTableBody');
    if (!tbody) return;

    if (!list || list.length === 0) {
      const isAr = this.lang === 'ar';
      tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 35px;">
        <i class="fa-solid fa-receipt" style="font-size: 28px; margin-bottom: 8px; opacity: 0.4; display: block;"></i>
        ${isAr ? 'لم يتم العثور على أي دفعة مطابقة' : 'Aucun paiement trouvé'}
      </td></tr>`;
      return;
    }

    tbody.innerHTML = list.map(p => `
      <tr>
        <td><strong style="color: #60a5fa;">${p.receipt_no}</strong></td>
        <td><strong>${p.student_name}</strong> <span style="font-size: 11px; color: var(--text-muted); font-family: monospace;">(${p.matricule || ''})</span></td>
        <td><span class="badge-pill" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa;">${p.subject_name || p.group_name}</span></td>
        <td>${p.month_period}</td>
        <td><strong style="color: #10b981;">${Number(p.paid_amount).toLocaleString()} DA</strong></td>
        <td><span style="text-transform: uppercase; font-size: 11px; font-weight: 700;">${p.payment_method}</span></td>
        <td style="color: var(--text-muted); font-size: 12px;">${p.payment_date ? p.payment_date.slice(0, 10) : ''}</td>
        <td>
          <button class="btn-primary" style="padding: 5px 12px; font-size: 12px;" onclick="app.showReceipt(${p.id})">
            <i class="fa-solid fa-print"></i> Reçu
          </button>
        </td>
      </tr>
    `).join('');
  }

  async openModalPayment(preselectedStudentId = null, preselectedGroupId = null) {
    try {
      const res = await fetch('/api/students?status=all');
      const data = await res.json();
      if (data && data.success && Array.isArray(data.students)) {
        this.studentsForPayment = data.students;
      } else {
        await this.loadStudents();
        this.studentsForPayment = this.students || [];
      }
    } catch (e) {
      await this.loadStudents();
      this.studentsForPayment = this.students || [];
    }

    await this.loadGroups();

    const searchInput = document.getElementById('payStudentSearch');
    if (searchInput) {
      searchInput.value = '';
    }

    this.renderPaymentStudentOptions('', preselectedStudentId);

    const groupSelect = document.getElementById('payGroupSelect');
    groupSelect.innerHTML = '<option value="">-- Choisir un groupe --</option>' +
      this.groups.map(g => `<option value="${g.id}" ${preselectedGroupId && g.id == preselectedGroupId ? 'selected' : ''}>${g.name} (${g.price_monthly} DA)</option>`).join('');

    // Set default month
    const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    const now = new Date();
    document.getElementById('payMonthPeriod').value = `${months[now.getMonth()]} ${now.getFullYear()}`;
    document.getElementById('payDiscount').value = '0';
    document.getElementById('payAmount').value = '';

    if (preselectedGroupId) {
      this.onPaymentGroupChange();
    } else if (preselectedStudentId) {
      this.onPaymentStudentChange();
    }

    document.getElementById('modalPayment').classList.add('active');

    if (!preselectedStudentId && searchInput) {
      setTimeout(() => searchInput.focus(), 150);
    }
  }

  filterPaymentStudents(query = '') {
    this.renderPaymentStudentOptions(query);
  }

  renderPaymentStudentOptions(filter = '', selectedId = null) {
    const studentSelect = document.getElementById('payStudentSelect');
    if (!studentSelect) return;

    const list = this.studentsForPayment || this.students || [];
    const term = (filter || '').trim().toLowerCase();

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    const filtered = !term ? list : list.filter(s => {
      const fn = norm(s.first_name);
      const ln = norm(s.last_name);
      const full1 = `${fn} ${ln}`;
      const full2 = `${ln} ${fn}`;
      const mat = (s.matricule || '').toLowerCase();
      const phone = (s.phone || '').toLowerCase();

      return full1.includes(normTerm) || full2.includes(normTerm) || mat.includes(normTerm) || phone.includes(normTerm);
    });

    const isAr = this.lang === 'ar';
    let defaultLabel = isAr ? '-- اختر تلميذاً --' : '-- Choisir un élève --';
    if (term) {
      defaultLabel = filtered.length > 0
        ? (isAr ? `-- (${filtered.length}) تلميذ مطابق --` : `-- (${filtered.length}) élève(s) trouvé(s) --`)
        : (isAr ? '-- لا يوجد تلميذ بهذا الاسم --' : '-- Aucun élève trouvé --');
    }

    const currentVal = selectedId !== null && selectedId !== undefined ? String(selectedId) : studentSelect.value;

    studentSelect.innerHTML = `<option value="">${defaultLabel}</option>` +
      filtered.map(s => {
        const isSel = currentVal && String(s.id) === currentVal;
        return `<option value="${s.id}" ${isSel ? 'selected' : ''}>${s.first_name} ${s.last_name} (${s.matricule})</option>`;
      }).join('');

    // If exactly 1 student matched the search, auto-select it!
    if (term && filtered.length === 1) {
      studentSelect.value = String(filtered[0].id);
      this.onPaymentStudentChange();
    }
  }

  handlePaymentStudentSearchKey(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const select = document.getElementById('payStudentSelect');
      if (select) {
        if (!select.value && select.options.length > 1) {
          select.selectedIndex = 1;
          this.onPaymentStudentChange();
        }
        const amountInput = document.getElementById('payAmount');
        if (amountInput) amountInput.focus();
      }
    }
  }

  onPaymentStudentChange() {
    const studentSelect = document.getElementById('payStudentSelect');
    const studentId = studentSelect ? studentSelect.value : null;
    if (!studentId) return;

    const student = (this.studentsForPayment || this.students || []).find(s => String(s.id) === String(studentId));
    if (student) {
      const searchInput = document.getElementById('payStudentSearch');
      if (searchInput && document.activeElement !== searchInput) {
        searchInput.value = `${student.first_name} ${student.last_name}`;
      }
    }

    // Trigger group price if already chosen
    if (document.getElementById('payGroupSelect').value) {
      this.onPaymentGroupChange();
    } else if (this.groups && this.groups.length > 0) {
      document.getElementById('payGroupSelect').value = this.groups[0].id;
      this.onPaymentGroupChange();
    }
  }

  onPaymentGroupChange() {
    const groupId = document.getElementById('payGroupSelect').value;
    const g = this.groups.find(item => item.id == groupId);
    if (g) {
      const discount = parseFloat(document.getElementById('payDiscount').value) || 0;
      document.getElementById('payAmount').value = Math.max(0, g.price_monthly - discount);
    }
  }

  async savePayment() {
    const studentId = document.getElementById('payStudentSelect').value;
    const groupId = document.getElementById('payGroupSelect').value;
    const paidAmount = document.getElementById('payAmount').value;

    if (!studentId || !groupId || !paidAmount) {
      alert('Veuillez sélectionner un élève, un groupe et renseigner le montant.');
      return;
    }

    const payload = {
      student_id: studentId,
      group_id: groupId,
      month_period: document.getElementById('payMonthPeriod').value,
      paid_amount: paidAmount,
      discount: document.getElementById('payDiscount').value,
      payment_method: document.getElementById('payMethod').value
    };

    const res = await fetch('/api/payments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (data.success) {
      this.closeModals();
      this.loadPayments();
      this.loadDashboardData();
      this.loadCaisse();

      // Show and print official receipt directly!
      if (data.payment) {
        this.renderReceipt(data.payment);
      }
    } else {
      alert(data.error || 'Erreur lors de l’enregistrement du paiement');
    }
  }

  async showReceipt(paymentId) {
    try {
      const res = await fetch(`/api/payments/${paymentId}`);
      const data = await res.json();
      if (data.success && data.payment) {
        this.renderReceipt(data.payment);
      }
    } catch (err) {
      console.error('Failed to load receipt:', err);
    }
  }

  showPaymentReceipt(paymentId) {
    return this.showReceipt(paymentId);
  }

  renderReceipt(p) {
    document.getElementById('rcptSchoolName').textContent = this.settings.school_name || 'EDUMIND ACADEMY';
    document.getElementById('rcptSchoolContact').textContent = `${this.settings.school_address || 'Alger, Algérie'} | Tél: ${this.settings.school_phone || '0550 00 00 00'}`;
    document.getElementById('rcptNumber').textContent = p.receipt_no;

    const pDate = p.payment_date ? new Date(p.payment_date) : new Date();
    document.getElementById('rcptDate').textContent = pDate.toLocaleString('fr-FR');
    document.getElementById('rcptStudent').textContent = `${p.first_name} ${p.last_name}`;
    document.getElementById('rcptMatricule').textContent = p.matricule;
    document.getElementById('rcptGroup').textContent = `${p.group_name} (${p.subject_name || ''})`;
    document.getElementById('rcptTeacher').textContent = p.teacher_name || 'Équipe pédagogique';
    document.getElementById('rcptMonth').textContent = p.month_period;
    document.getElementById('rcptMethod').textContent = p.payment_method;

    document.getElementById('rcptBasePrice').textContent = `${Number(p.base_amount).toLocaleString()} DA`;
    document.getElementById('rcptDiscount').textContent = `${Number(p.discount || 0).toLocaleString()} DA`;
    document.getElementById('rcptRemaining').textContent = `${Number(p.remaining_amount || 0).toLocaleString()} DA`;
    document.getElementById('rcptTotalPaid').textContent = `${Number(p.paid_amount).toLocaleString()} DA`;

    document.getElementById('modalReceipt').classList.add('active');
  }

  // -------------------------------------------------------------
  // ECHEANCES & CAISSE
  // -------------------------------------------------------------
  async loadEcheances() {
    try {
      const res = await fetch('/api/dashboard/stats');
      const data = await res.json();
      if (!data.success) return;

      const tbody = document.getElementById('echeancesTableBody');
      if (data.unpaidStudents.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 30px;">Aucun impayé pour le moment!</td></tr>`;
        return;
      }

      tbody.innerHTML = data.unpaidStudents.map(u => `
        <tr>
          <td><strong>${u.student_name}</strong></td>
          <td>${u.group_name}</td>
          <td><span class="badge-pill" style="background: rgba(239, 68, 68, 0.15); color: #f87171;">${u.subject_name}</span></td>
          <td>${u.phone || '-'}</td>
          <td><strong style="color: #ef4444;">${Number(u.amount_due).toLocaleString()} DA</strong></td>
          <td>
            <button class="btn-primary" style="padding: 6px 14px; font-size: 12px;" onclick="app.openModalPayment()">
              Régulariser
            </button>
          </td>
        </tr>
      `).join('');
    } catch (err) {
      console.error(err);
    }
  }

  // -------------------------------------------------------------
  // CAISSE & TRÉSORERIE ENGINE
  // -------------------------------------------------------------
  async loadCaisse() {
    try {
      const res = await fetch('/api/caisse/summary');
      const data = await res.json();
      if (!data.success) return;

      document.getElementById('caisseTodayIn').textContent = `${Number(data.today.income).toLocaleString()} DA`;
      document.getElementById('caisseTodayOut').textContent = `${Number(data.today.expenses).toLocaleString()} DA`;
      document.getElementById('caisseNetBalance').textContent = `${Number(data.allTime.soldeNet).toLocaleString()} DA`;

      const monthInEl = document.getElementById('caisseMonthIn');
      if (monthInEl) monthInEl.textContent = `${Number(data.month.income).toLocaleString()} DA`;
      const monthOutEl = document.getElementById('caisseMonthOut');
      if (monthOutEl) monthOutEl.textContent = `${Number(data.month.expenses).toLocaleString()} DA`;
      const allTimeEl = document.getElementById('caisseAllTimeBalance');
      if (allTimeEl) allTimeEl.textContent = `${Number(data.month.balance).toLocaleString()} DA (ce mois)`;

      await this.loadCaisseMovements();
    } catch (err) {
      console.error('loadCaisse error:', err);
    }
  }

  async loadCaisseMovements() {
    try {
      const type = document.getElementById('caisseFilterType')?.value || 'all';
      const category = document.getElementById('caisseFilterCategory')?.value || 'all';
      const from = document.getElementById('caisseFilterFrom')?.value || '';
      const to = document.getElementById('caisseFilterTo')?.value || '';
      const search = document.getElementById('caisseFilterSearch')?.value || '';

      const query = new URLSearchParams({ type, category, from, to, search, limit: 100 });
      const res = await fetch(`/api/caisse/movements?${query.toString()}`);
      const data = await res.json();
      if (!data.success) return;

      const tbody = document.getElementById('caisseTableBody');
      if (!tbody) return;

      if (data.movements.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-muted); padding: 28px;">Aucun mouvement de caisse trouvé</td></tr>`;
        return;
      }

      tbody.innerHTML = data.movements.map(m => {
        const isEntree = m.type === 'entree';
        const badge = isEntree
          ? `<span class="caisse-badge badge-entree"><i class="fa-solid fa-arrow-down"></i> Entrée</span>`
          : `<span class="caisse-badge badge-sortie"><i class="fa-solid fa-arrow-up"></i> Sortie</span>`;
        const amountDisplay = isEntree
          ? `<strong style="color: #10b981;">+${Number(m.amount).toLocaleString()} DA</strong>`
          : `<strong style="color: #ef4444;">-${Number(m.amount).toLocaleString()} DA</strong>`;

        return `
          <tr>
            <td style="font-size: 12px; color: var(--text-muted); white-space: nowrap;">
              <strong>${m.movement_date || ''}</strong> ${m.movement_time ? `<br><small>${m.movement_time}</small>` : ''}
            </td>
            <td>${badge}</td>
            <td>
              <strong>${this.escapeHtml(m.title)}</strong>
              ${m.person_name ? `<div style="font-size: 11px; color: var(--text-muted);"><i class="fa-regular fa-user"></i> ${this.escapeHtml(m.person_name)}</div>` : ''}
            </td>
            <td>
              <span class="badge-pill" style="background: rgba(148, 163, 184, 0.12); color: var(--text-main); font-size: 11px;">
                ${this.escapeHtml(m.category)}
              </span>
            </td>
            <td style="font-family: monospace; font-size: 12px;">${this.escapeHtml(m.reference || '-')}</td>
            <td style="font-size: 12px; text-transform: capitalize;">${m.payment_method || 'Espèces'}</td>
            <td style="text-align: right;">${amountDisplay}</td>
            <td style="text-align: center;">
              <button class="btn-icon" style="color: #ef4444;" title="Supprimer le mouvement" onclick="app.deleteCaisseMovement(${m.id})">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        `;
      }).join('');
    } catch (err) {
      console.error('loadCaisseMovements error:', err);
    }
  }

  filterCaisse() {
    this.loadCaisseMovements();
  }

  resetCaisseFilters() {
    if (document.getElementById('caisseFilterType')) document.getElementById('caisseFilterType').value = 'all';
    if (document.getElementById('caisseFilterCategory')) document.getElementById('caisseFilterCategory').value = 'all';
    if (document.getElementById('caisseFilterFrom')) document.getElementById('caisseFilterFrom').value = '';
    if (document.getElementById('caisseFilterTo')) document.getElementById('caisseFilterTo').value = '';
    if (document.getElementById('caisseFilterSearch')) document.getElementById('caisseFilterSearch').value = '';
    this.loadCaisseMovements();
  }

  openModalCaisseMovement(type = 'sortie') {
    this.setCaisseModalType(type);
    document.getElementById('caisseMovTitle').value = '';
    document.getElementById('caisseMovAmount').value = '';
    document.getElementById('caisseMovRef').value = '';
    document.getElementById('caisseMovDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('modalCaisseMovement').classList.add('active');
  }

  setCaisseModalType(type) {
    document.getElementById('caisseMovType').value = type;
    const btnIn = document.getElementById('btnCaisseTypeEntree');
    const btnOut = document.getElementById('btnCaisseTypeSortie');
    const title = document.getElementById('caisseModalTitle');
    const catSelect = document.getElementById('caisseMovCategory');

    if (type === 'entree') {
      title.textContent = "Nouvelle Entrée de Caisse";
      btnIn.className = "btn-primary";
      btnIn.style = "flex: 1; background: #10b981; border-color: #10b981;";
      btnOut.className = "btn-secondary";
      btnOut.style = "flex: 1; border-color: #ef4444; color: #ef4444;";
    } else {
      title.textContent = "Nouvelle Sortie (Dépense de Caisse)";
      btnOut.className = "btn-primary";
      btnOut.style = "flex: 1; background: #ef4444; border-color: #ef4444;";
      btnIn.className = "btn-secondary";
      btnIn.style = "flex: 1; border-color: #10b981; color: #10b981;";
    }

    const categories = this.getCaisseCategories(type);
    catSelect.innerHTML = categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
  }

  async saveCaisseMovement() {
    try {
      const type = document.getElementById('caisseMovType').value;
      const title = document.getElementById('caisseMovTitle').value;
      const category = document.getElementById('caisseMovCategory').value;
      const amount = document.getElementById('caisseMovAmount').value;
      const payment_method = document.getElementById('caisseMovMethod').value;
      const movement_date = document.getElementById('caisseMovDate').value;
      const reference = document.getElementById('caisseMovRef').value;

      const res = await fetch('/api/caisse/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, title, category, amount, payment_method, movement_date, reference })
      });
      const data = await res.json();
      if (!data.success) {
        alert(data.error || 'Erreur lors de l’enregistrement');
        return;
      }
      this.closeModals();
      this.loadCaisse();
    } catch (e) {
      console.error(e);
      alert('Erreur réseau');
    }
  }

  async deleteCaisseMovement(id) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce mouvement de caisse ?')) return;
    try {
      const res = await fetch(`/api/caisse/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        this.loadCaisse();
      }
    } catch (e) {
      console.error(e);
    }
  }

  openModalExpense() {
    this.openModalCaisseMovement('sortie');
  }

  async saveExpense() {
    try {
      const title = document.getElementById('expenseTitle')?.value || 'Dépense générale';
      const category = document.getElementById('expenseCategory')?.value || 'Autre dépense';
      const amount = document.getElementById('expenseAmount')?.value || 0;

      const res = await fetch('/api/caisse/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'sortie',
          title,
          category,
          amount,
          payment_method: 'espece',
          movement_date: new Date().toISOString().split('T')[0]
        })
      });
      const data = await res.json();
      if (!data.success) {
        alert(data.error || 'Erreur lors de l’enregistrement');
        return;
      }
      this.closeModals();
      this.loadCaisse();
      this.loadDashboardData();
    } catch (e) {
      console.error(e);
      alert('Erreur réseau');
    }
  }

  // -------------------------------------------------------------
  // TEACHERS & 8-MODES REMUNERATION SETTLEMENTS
  // -------------------------------------------------------------
  async loadTeachers() {
    try {
      const res = await fetch('/api/teachers');
      const data = await res.json();
      if (!data.success) return;
      this.teachers = data.teachers || [];

      const searchInput = document.getElementById('searchTeacherInput');
      if (searchInput && searchInput.value.trim()) {
        this.filterTeachers(searchInput.value);
      } else {
        this.renderTeachersTable(this.teachers);
      }
    } catch (err) {
      console.error(err);
    }
  }

  filterTeachers(query = '') {
    const list = this.teachers || [];
    const term = (query || '').trim().toLowerCase();
    if (!term) {
      this.renderTeachersTable(list);
      return;
    }

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    const filtered = list.filter(t => {
      const fn = norm(t.first_name);
      const ln = norm(t.last_name);
      const full1 = `${fn} ${ln}`;
      const full2 = `${ln} ${fn}`;
      const mat = (t.matricule || '').toLowerCase();
      const phone = (t.phone || '').toLowerCase();
      const subj = norm(t.subject_name);

      return full1.includes(normTerm) || full2.includes(normTerm) || mat.includes(normTerm) || phone.includes(normTerm) || subj.includes(normTerm);
    });

    this.renderTeachersTable(filtered);
  }

  renderTeachersTable(list) {
    const tbody = document.getElementById('teachersTableBody');
    if (!tbody) return;

    if (!list || list.length === 0) {
      const isAr = this.lang === 'ar';
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 35px;">
        <i class="fa-solid fa-chalkboard-user" style="font-size: 28px; margin-bottom: 8px; opacity: 0.4; display: block;"></i>
        ${isAr ? 'لم يتم العثور على أي أستاذ مطابق' : 'Aucun enseignant trouvé'}
      </td></tr>`;
      return;
    }

    const modeLabels = {
      percent: this.lang === 'ar' ? 'نسبة مئوية (%)' : 'Pourcentage (%)',
      hourly: this.lang === 'ar' ? 'سعر بالساعة (دج/سا)' : 'Tarif horaire (DA/h)',
      per_session: this.lang === 'ar' ? 'سعر بالحصة (دج)' : 'Tarif par séance (DA)',
      fixed_salary: this.lang === 'ar' ? 'راتب شهري ثابت (دج)' : 'Salaire fixe (DA)',
      hourly_per_student: this.lang === 'ar' ? 'ساعي × عدد التلاميذ' : 'Horaire × Nb élèves',
      session_per_student: this.lang === 'ar' ? 'حصص × عدد التلاميذ' : 'Séance × Nb élèves',
      percent_per_student: this.lang === 'ar' ? 'نسبة حسب التلميذ' : 'Pourcentage par élève',
      fixed_per_student: this.lang === 'ar' ? 'مبلغ ثابت لكل تلميذ' : 'Forfait fixe par élève'
    };

    tbody.innerHTML = list.map(t => {
      const mKey = t.remuneration_type || 'percent';
      const mLabel = modeLabels[mKey] || mKey;
      return `
        <tr>
          <td><strong style="color: #f97316;">${t.matricule}</strong></td>
          <td><strong>${this.escapeHtml(t.first_name)} ${this.escapeHtml(t.last_name)}</strong></td>
          <td>${this.escapeHtml(t.subject_name || '-')}</td>
          <td>${this.escapeHtml(t.phone || '-')}</td>
          <td>
            <span class="badge-pill" style="background: rgba(249, 115, 22, 0.12); color: #ea580c; font-size: 11.5px;">
              ${mLabel}
            </span>
          </td>
          <td>${t.groups_count} ${this.lang === 'ar' ? 'أفواج' : 'groupe(s)'}</td>
          <td>
            <div style="display: flex; gap: 8px; align-items: center;">
              <button class="btn-primary" style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 5px 12px; font-size: 11px; display: flex; align-items: center; gap: 5px;" onclick="app.openModalTeacherPayout(${t.id})">
                <i class="fa-solid fa-hand-holding-dollar"></i> ${this.lang === 'ar' ? 'تسوية المستحقات' : 'Régler Honoraires'}
              </button>
              <button class="btn-icon" title="Modifier" onclick="app.editTeacher(${t.id})">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn-icon" style="color: #ef4444;" title="Supprimer" onclick="app.deleteTeacher(${t.id})">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  onTeacherRemunTypeChange() {
    // Dynamic styling when selecting mode
  }

  async openModalTeacherPayout(teacherId) {
    this.activePayoutTeacherId = teacherId;
    const now = new Date();
    const period = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    document.getElementById('payoutPeriod').value = period;
    document.getElementById('payoutTeacherId').value = teacherId;
    document.getElementById('modalTeacherPayout').classList.add('active');
    await this.refreshTeacherPayoutData();
  }

  async refreshTeacherPayoutData() {
    const teacherId = this.activePayoutTeacherId;
    if (!teacherId) return;

    const period = document.getElementById('payoutPeriod').value || new Date().toISOString().slice(0, 7);
    const loading = document.getElementById('teacherPayoutLoading');

    try {
      loading.style.display = 'block';
      const res = await fetch(`/api/teachers/${teacherId}/earnings?month=${period}`);
      const data = await res.json();
      loading.style.display = 'none';
      if (!data.success) return;

      this.currentPayoutEarnings = data;

      document.getElementById('payoutTeacherName').textContent = `${data.teacher.first_name} ${data.teacher.last_name}`;
      document.getElementById('payoutTeacherMeta').textContent = `Matricule: ${data.teacher.matricule} · ${data.groupsData.length} groupe(s) actif(s)`;

      document.getElementById('payoutTotalStudents').textContent = data.totalStudents;
      document.getElementById('payoutTotalSessions').textContent = `${data.sessionsPerMonth} (${data.hoursPerMonth}h)`;
      document.getElementById('payoutTotalCollected').textContent = `${Number(data.totalCollected).toLocaleString()} DA`;

      // Render 8 mode cards
      const modesGrid = document.getElementById('payoutModesGrid');
      const curMode = data.teacher.remuneration_type || 'percent';
      this.selectedPayoutMode = curMode;

      modesGrid.innerHTML = Object.entries(data.modes).map(([key, info]) => {
        const isActive = key === curMode;
        return `
          <div class="payout-mode-card ${isActive ? 'active' : ''}" id="payoutModeCard_${key}" onclick="app.selectPayoutMode('${key}')">
            <div>
              <div class="payout-mode-title">${info.label}</div>
              <div class="payout-mode-desc">Taux: <strong>${info.rate} ${info.unit}</strong></div>
            </div>
            <div class="payout-mode-val">${Number(info.amount).toLocaleString()} DA</div>
          </div>
        `;
      }).join('');

      this.selectPayoutMode(curMode);
    } catch (err) {
      loading.style.display = 'none';
      console.error(err);
    }
  }

  selectPayoutMode(modeKey) {
    if (!this.currentPayoutEarnings?.modes?.[modeKey]) return;
    this.selectedPayoutMode = modeKey;
    const info = this.currentPayoutEarnings.modes[modeKey];

    document.querySelectorAll('.payout-mode-card').forEach(card => card.classList.remove('active'));
    document.getElementById(`payoutModeCard_${modeKey}`)?.classList.add('active');

    document.getElementById('payoutCalculatedAmountBadge').textContent = `${Number(info.amount).toLocaleString()} DA`;
    document.getElementById('payoutAmountPaid').value = info.amount;
  }

  async submitTeacherPayout() {
    try {
      const teacherId = this.activePayoutTeacherId;
      const period = document.getElementById('payoutPeriod').value;
      const paid_amount = document.getElementById('payoutAmountPaid').value;
      const payment_method = document.getElementById('payoutPaymentMethod').value;
      const notes = document.getElementById('payoutNotes').value;

      const modeInfo = this.currentPayoutEarnings?.modes?.[this.selectedPayoutMode] || {};

      const payload = {
        teacher_id: teacherId,
        period,
        remuneration_mode: this.selectedPayoutMode,
        base_calculation: modeInfo.base || 0,
        rate_value: modeInfo.rate || 0,
        students_count: this.currentPayoutEarnings?.totalStudents || 0,
        sessions_count: this.currentPayoutEarnings?.sessionsPerMonth || 0,
        hours_count: this.currentPayoutEarnings?.hoursPerMonth || 0,
        total_collected: this.currentPayoutEarnings?.totalCollected || 0,
        teacher_share_percent: modeInfo.unit === '%' ? modeInfo.rate : 0,
        paid_amount,
        payment_method,
        notes
      };

      const res = await fetch('/api/teachers/payout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!data.success) {
        alert(data.error || 'Erreur lors du règlement');
        return;
      }

      this.closeModals();
      this.loadCaisse();
      this.loadTeachers();

      // Open printable Bulletin de Paie
      this.openBulletinPaie(data.payout, modeInfo);
    } catch (e) {
      console.error(e);
      alert('Erreur réseau');
    }
  }

  openBulletinPaie(payout, modeInfo) {
    const s = this.settings || {};
    if (s.school_name) document.getElementById('bulletinSchoolName').textContent = s.school_name;
    if (s.school_address) document.getElementById('bulletinSchoolAddress').textContent = s.school_address;
    if (s.school_phone) document.getElementById('bulletinSchoolPhone').textContent = `Tél: ${s.school_phone}`;

    document.getElementById('bulletinRefNo').textContent = `RÉF: ${payout.id ? `PAY-${new Date().getFullYear()}-${String(payout.id).padStart(4, '0')}` : 'PAY'}`;
    document.getElementById('bulletinDate').textContent = `Date: ${new Date().toLocaleDateString('fr-FR')}`;

    document.getElementById('bulletinTeacherName').textContent = `M./Mme ${payout.first_name} ${payout.last_name}`;
    document.getElementById('bulletinTeacherMeta').textContent = `Matricule: ${payout.matricule || '-'} · ${payout.subject_name || 'Enseignant'}`;
    document.getElementById('bulletinPeriod').textContent = payout.period || 'Mois courant';

    const modeLabels = {
      percent: 'Pourcentage sur encaissements',
      hourly: 'Tarif horaire',
      per_session: 'Tarif par séance',
      fixed_salary: 'Salaire mensuel fixe',
      hourly_per_student: 'Horaire × Nombre d’élèves',
      session_per_student: 'Séance × Nombre d’élèves',
      percent_per_student: 'Pourcentage par élève',
      fixed_per_student: 'Forfait fixe par élève'
    };
    const designation = modeLabels[payout.remuneration_mode] || payout.remuneration_mode;

    document.getElementById('bulletinTableBody').innerHTML = `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">
          <strong>${designation}</strong>
          ${payout.notes ? `<div style="font-size: 11px; color: #64748b;">${this.escapeHtml(payout.notes)}</div>` : ''}
        </td>
        <td style="padding: 10px; text-align: center; border-bottom: 1px solid #e2e8f0;">
          ${Number(payout.base_calculation || 0).toLocaleString()}
        </td>
        <td style="padding: 10px; text-align: center; border-bottom: 1px solid #e2e8f0;">
          ${payout.rate_value || '-'}
        </td>
        <td style="padding: 10px; text-align: right; font-weight: 700; border-bottom: 1px solid #e2e8f0;">
          ${Number(payout.paid_amount).toLocaleString()} DA
        </td>
      </tr>
    `;

    document.getElementById('bulletinMethod').textContent = `Règlement en: ${payout.payment_method || 'Espèces'}`;
    document.getElementById('bulletinTotalAmount').textContent = `${Number(payout.paid_amount).toLocaleString()} DA`;

    document.getElementById('modalBulletinPaie').classList.add('active');
  }

  printBulletinPaie() {
    window.print();
  }

  // -------------------------------------------------------------
  // GROUPS & PLANNING
  // -------------------------------------------------------------
  normalizeDay(dayStr) {
    if (!dayStr) return '';
    const d = dayStr.trim().toLowerCase();
    if (d === 'samedi' || d.includes('سبت')) return 'Samedi';
    if (d === 'dimanche' || d.includes('أحد') || d.includes('احد')) return 'Dimanche';
    if (d === 'lundi' || d.includes('إثنين') || d.includes('اثنين') || d.includes('إثنين')) return 'Lundi';
    if (d === 'mardi' || d.includes('ثلاثاء')) return 'Mardi';
    if (d === 'mercredi' || d.includes('أربعاء') || d.includes('اربعاء')) return 'Mercredi';
    if (d === 'jeudi' || d.includes('خميس')) return 'Jeudi';
    if (d === 'vendredi' || d.includes('جمعة') || d.includes('جمعه')) return 'Vendredi';
    return dayStr;
  }

  calculateDurationHours(start, end) {
    if (!start || !end) return 0;
    const [h1, m1] = start.split(':').map(Number);
    const [h2, m2] = end.split(':').map(Number);
    if (isNaN(h1) || isNaN(m1) || isNaN(h2) || isNaN(m2)) return 0;
    const diff = (h2 * 60 + m2) - (h1 * 60 + m1);
    return diff > 0 ? diff / 60 : 0;
  }

  formatDuration(hours) {
    if (!hours || hours <= 0) return '-';
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    if (m === 0) return `${h}h`;
    return `${h}h ${m}min`;
  }

  async loadPlanningView() {
    if (!this.teachers || this.teachers.length === 0 || !this.rooms || this.rooms.length === 0) {
      await Promise.all([this.loadTeachers(), this.loadRooms(), this.loadLevels(), this.loadSubjects()]);
    }
    this.populatePlanningFilters();
    await this.loadGroups();
  }

  populatePlanningFilters() {
    const teacherSelect = document.getElementById('filterPlanningTeacher');
    if (teacherSelect && this.teachers) {
      const current = teacherSelect.value;
      teacherSelect.innerHTML = `<option value="">Tous les enseignants</option>` +
        this.teachers.map(t => `<option value="${t.id}">${this.escapeHtml(t.name)}</option>`).join('');
      teacherSelect.value = current;
    }

    const roomSelect = document.getElementById('filterPlanningRoom');
    if (roomSelect && this.rooms) {
      const current = roomSelect.value;
      roomSelect.innerHTML = `<option value="">Toutes les salles</option>` +
        this.rooms.map(r => `<option value="${r.id}">${this.escapeHtml(r.name)}</option>`).join('');
      roomSelect.value = current;
    }

    const levelSelect = document.getElementById('filterPlanningLevel');
    if (levelSelect && this.levels) {
      const current = levelSelect.value;
      levelSelect.innerHTML = `<option value="">Tous les niveaux</option>` +
        this.levels.map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
      levelSelect.value = current;
    }

    const subjectSelect = document.getElementById('filterPlanningSubject');
    if (subjectSelect && this.subjects) {
      const current = subjectSelect.value;
      subjectSelect.innerHTML = `<option value="">Toutes les matières</option>` +
        this.subjects.map(s => `<option value="${s.id}">${this.escapeHtml(s.name)}</option>`).join('');
      subjectSelect.value = current;
    }
  }

  getFilteredPlanningGroups() {
    let groups = this.groups || [];
    const search = (document.getElementById('searchPlanningInput')?.value || '').toLowerCase().trim();
    const teacherId = document.getElementById('filterPlanningTeacher')?.value;
    const roomId = document.getElementById('filterPlanningRoom')?.value;
    const levelId = document.getElementById('filterPlanningLevel')?.value;
    const subjectId = document.getElementById('filterPlanningSubject')?.value;
    const filterDay = document.getElementById('filterPlanningDay')?.value;

    return groups.filter(g => {
      if (teacherId && String(g.teacher_id) !== String(teacherId)) return false;
      if (roomId && String(g.room_id) !== String(roomId)) return false;
      if (levelId && String(g.level_id) !== String(levelId)) return false;
      if (subjectId && String(g.subject_id) !== String(subjectId)) return false;
      if (filterDay && this.normalizeDay(g.day_of_week) !== filterDay) return false;

      if (search) {
        const text = `${g.name || ''} ${g.subject_name || ''} ${g.teacher_name || ''} ${g.room_name || ''} ${g.level_name || ''}`.toLowerCase();
        if (!text.includes(search)) return false;
      }
      return true;
    });
  }

  filterPlanning() {
    this.renderPlanningTable();
    this.renderWeeklyScheduleGrid();
    this.updatePlanningKpis();
  }

  resetPlanningFilters() {
    const search = document.getElementById('searchPlanningInput');
    if (search) search.value = '';
    const t = document.getElementById('filterPlanningTeacher');
    if (t) t.value = '';
    const r = document.getElementById('filterPlanningRoom');
    if (r) r.value = '';
    const l = document.getElementById('filterPlanningLevel');
    if (l) l.value = '';
    const s = document.getElementById('filterPlanningSubject');
    if (s) s.value = '';
    const d = document.getElementById('filterPlanningDay');
    if (d) d.value = '';
    this.filterPlanning();
  }

  updatePlanningKpis() {
    const filtered = this.getFilteredPlanningGroups();
    
    // Total groups
    const kpiGroups = document.getElementById('planningKpiTotalGroups');
    if (kpiGroups) kpiGroups.textContent = filtered.length;

    // Total hours
    let totalHours = 0;
    filtered.forEach(g => {
      totalHours += this.calculateDurationHours(g.start_time, g.end_time);
    });
    const kpiHours = document.getElementById('planningKpiTotalHours');
    if (kpiHours) {
      kpiHours.textContent = totalHours % 1 === 0 ? `${totalHours}h` : `${totalHours.toFixed(1)}h`;
    }

    // Unique active teachers
    const teachersSet = new Set(filtered.map(g => g.teacher_id).filter(Boolean));
    const kpiTeachers = document.getElementById('planningKpiTeachersCount');
    if (kpiTeachers) kpiTeachers.textContent = teachersSet.size;

    // Unique rooms
    const roomsSet = new Set(filtered.map(g => g.room_id).filter(Boolean));
    const kpiRooms = document.getElementById('planningKpiRoomsCount');
    if (kpiRooms) kpiRooms.textContent = roomsSet.size;
  }

  renderPlanningTable() {
    const tbody = document.getElementById('groupsTableBody');
    if (!tbody) return;

    const filtered = this.getFilteredPlanningGroups();
    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="10" style="text-align: center; color: var(--text-muted); padding: 36px 20px;">
        <i class="fa-solid fa-calendar-xmark" style="font-size: 28px; margin-bottom: 8px; display: block; opacity: 0.5;"></i>
        Aucun groupe ne correspond aux critères de recherche
      </td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(g => {
      const durHours = this.calculateDurationHours(g.start_time, g.end_time);
      const durText = this.formatDuration(durHours);
      const normDay = this.normalizeDay(g.day_of_week) || g.day_of_week || '-';
      const capRate = g.max_students > 0 ? Math.min(100, Math.round(((g.enrolled_count || 0) / g.max_students) * 100)) : 0;
      
      const roomBadge = g.room_name 
        ? `<span style="font-weight: 600; color: var(--text-main);"><i class="fa-solid fa-door-open" style="color: #38bdf8; margin-right: 4px;"></i>${this.escapeHtml(g.room_name)}</span>`
        : `<span class="badge-pill" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; font-size: 11px; padding: 2px 7px;">
             <i class="fa-solid fa-triangle-exclamation"></i> Sans salle
           </span>`;

      return `
        <tr>
          <td>
            <div style="font-weight: 700; color: var(--text-main);">${this.escapeHtml(g.name)}</div>
          </td>
          <td><span class="badge-pill" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa;">${this.escapeHtml(g.level_name || '-')}</span></td>
          <td><span class="badge-pill" style="background: rgba(168, 85, 247, 0.12); color: #c084fc;">${this.escapeHtml(g.subject_name || '-')}</span></td>
          <td>
            <div style="display: flex; align-items: center; gap: 6px;">
              <i class="fa-solid fa-chalkboard-user" style="color: var(--text-muted); font-size: 12px;"></i>
              <span>${this.escapeHtml(g.teacher_name || '-')}</span>
            </div>
          </td>
          <td>${roomBadge}</td>
          <td>
            <div style="font-weight: 600; color: var(--text-main);">
              <span style="color: #60a5fa;">${normDay}</span>
              <span style="font-size: 12px; margin-left: 4px; color: #10b981;">${g.start_time || ''} - ${g.end_time || ''}</span>
            </div>
          </td>
          <td>
            <span class="badge-pill" style="background: rgba(148, 163, 184, 0.12); color: var(--text-muted); font-size: 11px;">
              ${durText}
            </span>
          </td>
          <td><strong style="color: #10b981;">${Number(g.price_monthly || 0).toLocaleString()} DA</strong></td>
          <td>
            <div style="min-width: 90px;">
              <div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 3px;">
                <span>${g.enrolled_count || 0}/${g.max_students}</span>
                <span style="color: var(--text-muted);">${capRate}%</span>
              </div>
              <div style="width: 100%; height: 5px; background: rgba(255,255,255,0.08); border-radius: 4px; overflow: hidden;">
                <div style="width: ${capRate}%; height: 100%; background: ${capRate >= 90 ? '#ef4444' : capRate >= 70 ? '#f59e0b' : '#3b82f6'};"></div>
              </div>
            </div>
          </td>
          <td>
            <div style="display: flex; gap: 8px;">
              <button class="btn-icon" title="Modifier" onclick="app.editGroup(${g.id})">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn-icon" style="color: #ef4444;" title="Supprimer" onclick="app.deleteGroup(${g.id})">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  async loadGroups() {
    try {
      const res = await fetch('/api/groups');
      const data = await res.json();
      if (!data.success) return;
      this.groups = data.groups || [];
      this.populatePlanningFilters();
      this.filterPlanning();
    } catch (err) {
      console.error(err);
    }
  }

  // -------------------------------------------------------------
  // SCHOOLARIS STYLE: GROUPES VIEW & ACTIONS
  // -------------------------------------------------------------
  async loadGroupesView() {
    try {
      // Ensure configuration data (levels, subjects, teachers) is available
      if (!this.levels || this.levels.length === 0 || !this.teachers || this.teachers.length === 0) {
        await Promise.all([this.loadLevels(), this.loadTeachers(), this.loadSubjects(), this.loadRooms()]);
      }

      const res = await fetch('/api/groups?status=all');
      const data = await res.json();
      if (!data.success) return;

      this.allGroupes = data.groups || [];
      const stats = data.stats || {};

      // Populate filter select options
      this.populateGroupesFilters();

      // Update KPI cards matching Schoolaris
      const activeCount = stats.active_groups_count !== undefined ? stats.active_groups_count : this.allGroupes.filter(g => g.active === 1).length;
      const totalCapacity = stats.total_capacity || 0;
      const totalEnrolled = stats.total_enrolled || 0;
      const fillRate = stats.fill_rate || (totalCapacity > 0 ? Math.min(100, Math.round((totalEnrolled / totalCapacity) * 100)) : 0);

      const kpiActiveEl = document.getElementById('groupesKpiActive');
      if (kpiActiveEl) kpiActiveEl.textContent = activeCount;

      const kpiStudentsEl = document.getElementById('groupesKpiStudents');
      if (kpiStudentsEl) kpiStudentsEl.textContent = totalEnrolled;

      const kpiCapacityEl = document.getElementById('groupesKpiCapacity');
      if (kpiCapacityEl) {
        kpiCapacityEl.textContent = this.lang === 'ar' 
          ? `من أصل ${totalCapacity} مقعد`
          : `sur ${totalCapacity} places`;
      }

      const kpiFillRateEl = document.getElementById('groupesKpiFillRate');
      if (kpiFillRateEl) kpiFillRateEl.textContent = `${fillRate}%`;

      const fillRateBarEl = document.getElementById('groupesFillRateBar');
      if (fillRateBarEl) fillRateBarEl.style.width = `${fillRate}%`;

      // Trigger table filtering & rendering
      this.filterGroupes();
    } catch (err) {
      console.error('Failed to load groupes view:', err);
    }
  }

  populateGroupesFilters() {
    // 1. Levels
    const levelSelect = document.getElementById('groupesFilterLevel');
    if (levelSelect && (levelSelect.options.length <= 1 || levelSelect.getAttribute('data-loaded') !== '1')) {
      const currentVal = levelSelect.value;
      levelSelect.innerHTML = `<option value="">${this.lang === 'ar' ? 'كل المستويات' : 'Tous niveaux'}</option>` +
        (this.levels || []).map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
      levelSelect.value = currentVal;
      levelSelect.setAttribute('data-loaded', '1');
    }

    // 2. Subjects
    const subjectSelect = document.getElementById('groupesFilterSubject');
    if (subjectSelect && (subjectSelect.options.length <= 1 || subjectSelect.getAttribute('data-loaded') !== '1')) {
      const currentVal = subjectSelect.value;
      subjectSelect.innerHTML = `<option value="">${this.lang === 'ar' ? 'كل المواد' : 'Toutes matières'}</option>` +
        (this.subjects || []).map(s => `<option value="${s.id}">${this.escapeHtml(s.name)}</option>`).join('');
      subjectSelect.value = currentVal;
      subjectSelect.setAttribute('data-loaded', '1');
    }

    // 3. Teachers
    const teacherSelect = document.getElementById('groupesFilterTeacher');
    if (teacherSelect && (teacherSelect.options.length <= 1 || teacherSelect.getAttribute('data-loaded') !== '1')) {
      const currentVal = teacherSelect.value;
      teacherSelect.innerHTML = `<option value="">${this.lang === 'ar' ? 'كل الأساتذة' : 'Tous enseignants'}</option>` +
        (this.teachers || []).map(t => `<option value="${t.id}">${this.escapeHtml(t.first_name + ' ' + t.last_name)}</option>`).join('');
      teacherSelect.value = currentVal;
      teacherSelect.setAttribute('data-loaded', '1');
    }
  }

  filterGroupes() {
    if (!this.allGroupes) return;

    const search = (document.getElementById('groupesFilterSearch')?.value || '').trim().toLowerCase();
    const levelId = document.getElementById('groupesFilterLevel')?.value;
    const subjectId = document.getElementById('groupesFilterSubject')?.value;
    const teacherId = document.getElementById('groupesFilterTeacher')?.value;
    const status = document.getElementById('groupesFilterStatus')?.value || 'active';

    const filtered = this.allGroupes.filter(g => {
      // Status filter
      if (status === 'active' && g.active !== 1) return false;
      if (status === 'inactive' && g.active !== 0) return false;

      // Level filter
      if (levelId && String(g.level_id) !== String(levelId)) return false;

      // Subject filter
      if (subjectId && String(g.subject_id) !== String(subjectId)) return false;

      // Teacher filter
      if (teacherId && String(g.teacher_id) !== String(teacherId)) return false;

      // Text search
      if (search) {
        const nameMatch = (g.name || '').toLowerCase().includes(search);
        const subMatch = (g.subject_name || '').toLowerCase().includes(search);
        const lvlMatch = (g.level_name || '').toLowerCase().includes(search);
        const teachMatch = (g.teacher_name || '').toLowerCase().includes(search);
        const roomMatch = (g.room_name || '').toLowerCase().includes(search);
        if (!nameMatch && !subMatch && !lvlMatch && !teachMatch && !roomMatch) {
          return false;
        }
      }

      return true;
    });

    // Update counter display
    const counterEl = document.getElementById('groupesCounterDisplay');
    if (counterEl) {
      if (this.lang === 'ar') {
        counterEl.textContent = filtered.length === 1 ? 'فوج واحد' : `${filtered.length} أفواج`;
      } else {
        counterEl.textContent = filtered.length <= 1 ? `${filtered.length} groupe` : `${filtered.length} groupes`;
      }
    }

    this.renderSchoolarisGroupesTable(filtered);
  }

  renderSchoolarisGroupesTable(groups) {
    const tbody = document.getElementById('schoolarisGroupesTableBody');
    if (!tbody) return;

    if (groups.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align: center; color: var(--text-muted); padding: 40px;">
            <i class="fa-solid fa-folder-open" style="font-size: 32px; margin-bottom: 10px; opacity: 0.5; display: block;"></i>
            ${this.lang === 'ar' ? 'لم يتم العثور على أي أفواج مطابقة' : 'Aucun groupe trouvé correspondant aux critères'}
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = groups.map(g => {
      const enrolled = g.enrolled_count || 0;
      const max = g.max_students || 25;
      const percent = max > 0 ? Math.min(100, Math.round((enrolled / max) * 100)) : 0;
      const subjectColor = g.subject_color || '#3b82f6';
      const isActive = g.active === 1;

      return `
        <tr>
          <td>
            <strong style="color: var(--text-heading); font-size: 14.5px;">${this.escapeHtml(g.name)}</strong>
          </td>
          <td>
            <span class="subject-dot" style="background-color: ${subjectColor};"></span>
            <span style="font-weight: 600;">${this.escapeHtml(g.subject_name)}</span>
          </td>
          <td>
            <span style="color: var(--text-muted); font-weight: 500;">${this.escapeHtml(g.level_name)}</span>
          </td>
          <td>
            <span style="font-weight: 500;">${this.escapeHtml(g.teacher_name)}</span>
          </td>
          <td>
            <div style="font-weight: 700; font-size: 13.5px; color: var(--text-heading);">${enrolled} / ${max}</div>
            <div class="mini-cap-bar-track">
              <div class="mini-cap-bar-fill" style="width: ${percent}%;"></div>
            </div>
          </td>
          <td>
            ${g.room_name && g.room_name !== '-' ? `
              <span class="badge-room-tag">
                <i class="fa-solid fa-users" style="font-size: 10.5px; opacity: 0.8;"></i>
                <span>${this.escapeHtml(g.room_name.toUpperCase())}</span>
              </span>
            ` : `<span style="color: var(--text-muted); font-size: 12px;">-</span>`}
          </td>
          <td>
            <span class="badge-status-pill ${isActive ? 'active' : 'inactive'}" 
                  onclick="app.toggleGroupStatus(${g.id})" 
                  title="${this.lang === 'ar' ? 'انقر لتغيير الحالة' : 'Cliquer pour changer le statut'}">
              ${isActive ? (this.lang === 'ar' ? 'نشط' : 'Actif') : (this.lang === 'ar' ? 'غير نشط' : 'Inactif')}
            </span>
          </td>
          <td style="text-align: right;">
            <div style="display: inline-flex; gap: 8px; align-items: center;">
              <button class="btn-action-view" title="${this.lang === 'ar' ? 'عرض التلاميذ' : 'Voir les élèves'}" onclick="app.viewGroupStudents(${g.id})">
                <i class="fa-solid fa-users"></i>
              </button>
              <button class="btn-action-edit" title="${this.lang === 'ar' ? 'تعديل' : 'Modifier'}" onclick="app.editGroup(${g.id})">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn-action-delete" title="${this.lang === 'ar' ? 'حذف / تعطيل' : 'Supprimer'}" onclick="app.deleteGroup(${g.id})">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  async toggleGroupStatus(id) {
    try {
      const res = await fetch(`/api/groups/${id}/toggle-status`, { method: 'PATCH' });
      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        await this.loadGroupesView();
      }
    } catch (err) {
      console.error(err);
    }
  }

  exportGroupesToExcel() {
    if (!this.allGroupes || this.allGroupes.length === 0) {
      alert(this.lang === 'ar' ? 'لا توجد بيانات للتصدير' : 'Aucune donnée à exporter');
      return;
    }

    // Get current filtered list
    const search = (document.getElementById('groupesFilterSearch')?.value || '').trim().toLowerCase();
    const levelId = document.getElementById('groupesFilterLevel')?.value;
    const subjectId = document.getElementById('groupesFilterSubject')?.value;
    const teacherId = document.getElementById('groupesFilterTeacher')?.value;
    const status = document.getElementById('groupesFilterStatus')?.value || 'active';

    const listToExport = this.allGroupes.filter(g => {
      if (status === 'active' && g.active !== 1) return false;
      if (status === 'inactive' && g.active !== 0) return false;
      if (levelId && String(g.level_id) !== String(levelId)) return false;
      if (subjectId && String(g.subject_id) !== String(subjectId)) return false;
      if (teacherId && String(g.teacher_id) !== String(teacherId)) return false;
      if (search) {
        const nameMatch = (g.name || '').toLowerCase().includes(search);
        const subMatch = (g.subject_name || '').toLowerCase().includes(search);
        const lvlMatch = (g.level_name || '').toLowerCase().includes(search);
        const teachMatch = (g.teacher_name || '').toLowerCase().includes(search);
        const roomMatch = (g.room_name || '').toLowerCase().includes(search);
        if (!nameMatch && !subMatch && !lvlMatch && !teachMatch && !roomMatch) return false;
      }
      return true;
    });

    const isAr = this.lang === 'ar';
    const headers = isAr ? [
      'اسم الفوج', 'المادة', 'المستوى', 'الأستاذ', 'القاعة', 'اليوم', 'التوقيت', 'السعر الشهري (دج)', 'المسجلون', 'المقاعد', 'الحالة'
    ] : [
      'Nom du Groupe', 'Matière', 'Niveau', 'Enseignant', 'Salle', 'Jour', 'Horaires', 'Prix Mensuel (DA)', 'Élèves Inscrits', 'Capacité Max', 'Statut'
    ];

    const rows = listToExport.map(g => [
      `"${(g.name || '').replace(/"/g, '""')}"`,
      `"${(g.subject_name || '').replace(/"/g, '""')}"`,
      `"${(g.level_name || '').replace(/"/g, '""')}"`,
      `"${(g.teacher_name || '').replace(/"/g, '""')}"`,
      `"${(g.room_name || '').replace(/"/g, '""')}"`,
      `"${(g.day_of_week || '').replace(/"/g, '""')}"`,
      `"${(g.start_time || '')} - ${(g.end_time || '')}"`,
      g.price_monthly || 0,
      g.enrolled_count || 0,
      g.max_students || 25,
      g.active ? (isAr ? 'نشط' : 'Actif') : (isAr ? 'غير نشط' : 'Inactif')
    ]);

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';'))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `groupes_edumind_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.playChime('success');
  }

  async viewGroupStudents(id) {
    try {
      this.currentSelectedGroupId = id;
      const res = await fetch(`/api/groups/${id}/students`);
      const data = await res.json();
      if (!data.success) {
        alert(data.error || 'Erreur lors du chargement des élèves');
        return;
      }

      const { group, students } = data;
      document.getElementById('modalGroupStudentsTitle').textContent = `${group.name}`;
      document.getElementById('modalGroupStudentsSubtitle').textContent = 
        `${group.subject_name} — ${group.level_name} (${group.teacher_name}) — ${students.length} / ${group.max_students} inscrit(s)`;

      const tbody = document.getElementById('groupStudentsTableBody');
      if (students.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">
              ${this.lang === 'ar' ? 'لا يوجد أي تلميذ مسجل في هذا الفوج حالياً.' : 'Aucun élève inscrit dans ce groupe pour le moment.'}
            </td>
          </tr>
        `;
      } else {
        tbody.innerHTML = students.map(s => `
          <tr>
            <td><strong style="color: #60a5fa;">${this.escapeHtml(s.matricule)}</strong></td>
            <td><strong>${this.escapeHtml(s.first_name + ' ' + s.last_name)}</strong></td>
            <td>${this.escapeHtml(s.phone || s.parent_phone || '-')}</td>
            <td>${s.registration_date || '-'}</td>
            <td>${Number(s.discount_amount) > 0 ? `<span style="color: #f59e0b;">-${Number(s.discount_amount)} DA</span>` : '0 DA'}</td>
            <td><span class="badge-pill" style="background: rgba(16, 185, 129, 0.12); color: #10b981;">${s.payments_count} reçu(s)</span></td>
          </tr>
        `).join('');
      }

      document.getElementById('modalGroupStudents').classList.add('active');
    } catch (err) {
      console.error(err);
    }
  }

  quickEnrollFromGroupModal() {
    const groupId = this.currentSelectedGroupId;
    this.closeModals();
    this.switchView('inscriptions');
    setTimeout(() => {
      const select = document.getElementById('enrollGroupSelect');
      if (select && groupId) {
        select.value = groupId;
      }
    }, 150);
  }

  // -------------------------------------------------------------
  // CONFIGURATION: NIVEAUX (LEVELS)
  // -------------------------------------------------------------
  async loadLevels() {
    try {
      const res = await fetch('/api/levels');
      const data = await res.json();
      if (!data.success) return;
      this.levels = data.levels;

      const tbody = document.getElementById('levelsTableBody');
      if (this.levels.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 24px;">Aucun niveau configuré</td></tr>`;
        return;
      }

      tbody.innerHTML = this.levels.map(l => `
        <tr>
          <td><strong style="color: #60a5fa;">#${l.id}</strong></td>
          <td><strong>${l.name}</strong></td>
          <td><span class="badge-pill" style="background: rgba(59, 130, 246, 0.12); color: #60a5fa;">${l.category}</span></td>
          <td>
            <div style="display: flex; gap: 8px;">
              <button class="btn-icon" title="Modifier" onclick="app.editLevel(${l.id})">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn-icon" style="color: #ef4444;" title="Supprimer" onclick="app.deleteLevel(${l.id})">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `).join('');
    } catch (err) {
      console.error(err);
    }
  }

  openModalLevel() {
    document.getElementById('modalLevelTitle').textContent = 'Ajouter un Niveau';
    document.getElementById('levelId').value = '';
    document.getElementById('levelName').value = '';
    document.getElementById('levelCategory').value = 'CEM';
    document.getElementById('modalLevel').classList.add('active');
  }

  editLevel(id) {
    const l = this.levels.find(item => item.id === id);
    if (!l) return;
    document.getElementById('modalLevelTitle').textContent = 'Modifier le Niveau';
    document.getElementById('levelId').value = l.id;
    document.getElementById('levelName').value = l.name;
    document.getElementById('levelCategory').value = l.category || 'CEM';
    document.getElementById('modalLevel').classList.add('active');
  }

  async saveLevel() {
    const id = document.getElementById('levelId').value;
    const payload = {
      name: document.getElementById('levelName').value,
      category: document.getElementById('levelCategory').value
    };
    const url = id ? `/api/levels/${id}` : '/api/levels';
    const method = id ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.success) {
      this.closeModals();
      await this.loadConfigurationData();
      this.loadLevels();
    }
  }

  async deleteLevel(id) {
    if (!confirm('Voulez-vous vraiment supprimer ce niveau ?')) return;
    const res = await fetch(`/api/levels/${id}`, { method: 'DELETE' });
    const data = await res.json();
    if (data.success) {
      await this.loadConfigurationData();
      this.loadLevels();
    }
  }

  // -------------------------------------------------------------
  // CONFIGURATION: SALLES (ROOMS) - ENHANCED
  // -------------------------------------------------------------
  setRoomsViewMode(mode) {
    this.roomsViewMode = mode;
    const btnGrid = document.getElementById('btnRoomsViewGrid');
    const btnTable = document.getElementById('btnRoomsViewTable');
    const gridContainer = document.getElementById('roomsCardsGrid');
    const tableContainer = document.getElementById('roomsTableContainer');

    if (mode === 'table') {
      btnGrid?.classList.remove('active');
      btnTable?.classList.add('active');
      if (gridContainer) gridContainer.style.display = 'none';
      if (tableContainer) tableContainer.style.display = 'block';
    } else {
      btnTable?.classList.remove('active');
      btnGrid?.classList.add('active');
      if (tableContainer) tableContainer.style.display = 'none';
      if (gridContainer) gridContainer.style.display = 'grid';
    }
  }

  async loadRooms() {
    try {
      const res = await fetch('/api/rooms');
      const data = await res.json();
      if (!data.success) return;
      this.rooms = data.rooms;

      if (!this.groups || this.groups.length === 0) {
        try {
          const gRes = await fetch('/api/groups');
          const gData = await gRes.json();
          if (gData.success) this.groups = gData.groups;
        } catch (e) {
          console.warn('Could not preload groups for rooms', e);
        }
      }

      const groupsPerRoom = {};
      if (this.groups && this.groups.length > 0) {
        this.groups.forEach(g => {
          if (g.room_id && (g.active === 1 || g.active === undefined)) {
            if (!groupsPerRoom[g.room_id]) groupsPerRoom[g.room_id] = [];
            groupsPerRoom[g.room_id].push(g);
          }
        });
      }

      this.rooms.forEach(r => {
        const assigned = groupsPerRoom[r.id] || [];
        r.computed_groups_count = assigned.length;
        r.assigned_groups = assigned;
        const subjects = [...new Set(assigned.map(g => g.subject_name).filter(Boolean))];
        r.computed_subjects_list = subjects.join(', ');
      });

      const totalRooms = this.rooms.length;
      const totalCapacity = this.rooms.reduce((sum, r) => sum + (parseInt(r.capacity) || 0), 0);
      const projectorCount = this.rooms.filter(r => r.has_projector == 1 || r.has_projector === true).length;
      const totalGroupsAssigned = this.rooms.reduce((sum, r) => sum + (r.computed_groups_count || 0), 0);

      const kpiTotal = document.getElementById('roomsKpiTotal');
      if (kpiTotal) kpiTotal.textContent = totalRooms;

      const kpiCap = document.getElementById('roomsKpiCapacity');
      if (kpiCap) kpiCap.textContent = `${totalCapacity} ${this.lang === 'ar' ? 'مقعد' : 'places'}`;

      const kpiProj = document.getElementById('roomsKpiProjector');
      if (kpiProj) {
        const pct = totalRooms > 0 ? Math.round((projectorCount / totalRooms) * 100) : 0;
        kpiProj.textContent = `${projectorCount} (${pct}%)`;
      }

      const kpiGroups = document.getElementById('roomsKpiGroups');
      if (kpiGroups) kpiGroups.textContent = totalGroupsAssigned;

      this.filterRooms();
    } catch (err) {
      console.error(err);
    }
  }

  filterRooms() {
    if (!this.rooms) return;

    const search = (document.getElementById('roomsFilterSearch')?.value || '').trim().toLowerCase();
    const projFilter = document.getElementById('roomsFilterProjector')?.value || '';
    const capFilter = document.getElementById('roomsFilterCapacity')?.value || '';
    const occFilter = document.getElementById('roomsFilterOccupancy')?.value || '';

    const filtered = this.rooms.filter(r => {
      if (search) {
        const nameMatch = (r.name || '').toLowerCase().includes(search);
        const notesMatch = (r.notes || '').toLowerCase().includes(search);
        const subjectsMatch = (r.computed_subjects_list || '').toLowerCase().includes(search);
        if (!nameMatch && !notesMatch && !subjectsMatch) return false;
      }

      if (projFilter === 'yes' && !(r.has_projector == 1 || r.has_projector === true)) return false;
      if (projFilter === 'no' && (r.has_projector == 1 || r.has_projector === true)) return false;

      const cap = parseInt(r.capacity) || 0;
      if (capFilter === 'small' && cap >= 20) return false;
      if (capFilter === 'medium' && (cap < 20 || cap > 29)) return false;
      if (capFilter === 'large' && cap < 30) return false;

      const hasGroups = (r.computed_groups_count || 0) > 0;
      if (occFilter === 'occupied' && !hasGroups) return false;
      if (occFilter === 'free' && hasGroups) return false;

      return true;
    });

    const counter = document.getElementById('roomsCounterDisplay');
    if (counter) {
      const unit = this.lang === 'ar' ? 'قاعة' : (filtered.length > 1 ? 'salles' : 'salle');
      counter.textContent = `${filtered.length} ${unit}`;
    }

    const cardsGrid = document.getElementById('roomsCardsGrid');
    if (cardsGrid) {
      if (filtered.length === 0) {
        cardsGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; color: var(--text-muted);">
            <div style="font-size: 38px; margin-bottom: 12px; opacity: 0.5;"><i class="fa-solid fa-door-closed"></i></div>
            <div style="font-size: 16px; font-weight: 600;">${this.lang === 'ar' ? 'لم يتم العثور على أي قاعة مطابقة للبحث' : 'Aucune salle ne correspond aux critères de recherche'}</div>
          </div>
        `;
      } else {
        cardsGrid.innerHTML = filtered.map(r => {
          const hasProj = r.has_projector == 1 || r.has_projector === true;
          const groupsCount = r.computed_groups_count || 0;
          const subjects = r.computed_subjects_list;

          return `
            <div class="room-card-item">
              <div class="room-card-header">
                <div class="room-card-identity">
                  <div class="room-icon-box">
                    <i class="fa-solid fa-door-open"></i>
                  </div>
                  <div>
                    <div class="room-card-title">${this.escapeHtml(r.name)}</div>
                    <div class="room-card-id-tag">
                      <span>#${r.id}</span>
                      ${r.notes ? `<span>•</span> <span title="${this.escapeHtml(r.notes)}">${this.escapeHtml(r.notes)}</span>` : ''}
                    </div>
                  </div>
                </div>
                <div class="room-cap-badge" title="${r.capacity} places">
                  <i class="fa-solid fa-users"></i>
                  <span>${r.capacity} ${this.lang === 'ar' ? 'مقعد' : 'pl'}</span>
                </div>
              </div>

              <div class="room-card-body">
                <div class="room-equipment-tags">
                  ${hasProj 
                    ? `<span class="tag-projector-yes"><i class="fa-solid fa-video"></i> ${this.lang === 'ar' ? 'عارض داتاشو' : 'Vidéoprojecteur'}</span>`
                    : `<span class="tag-projector-no"><i class="fa-solid fa-video-slash"></i> ${this.lang === 'ar' ? 'بدون عارض' : 'Sans projecteur'}</span>`
                  }
                  ${r.notes ? `<span class="tag-room-equip"><i class="fa-solid fa-circle-info"></i> ${this.escapeHtml(r.notes)}</span>` : ''}
                </div>

                <div class="room-groups-box">
                  <div class="room-groups-info">
                    <i class="fa-solid fa-calendar-days"></i>
                    <span>${groupsCount} ${this.lang === 'ar' ? 'أفواج مبرمجة' : (groupsCount > 1 ? 'groupes programmés' : 'groupe programmé')}</span>
                  </div>
                  <span class="room-groups-badge">${groupsCount > 0 ? (this.lang === 'ar' ? 'قيد الاستغلال' : 'Occupée') : (this.lang === 'ar' ? 'شاغرة' : 'Libre')}</span>
                </div>

                ${subjects ? `
                  <div style="font-size: 11.5px; color: var(--text-muted); display: flex; align-items: center; gap: 6px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    <i class="fa-solid fa-book-open" style="color: #60a5fa;"></i>
                    <span title="${this.escapeHtml(subjects)}">${this.escapeHtml(subjects)}</span>
                  </div>
                ` : ''}
              </div>

              <div class="room-card-footer">
                <button type="button" class="btn-room-schedule" onclick="app.openRoomTimetable(${r.id})" title="${this.lang === 'ar' ? 'عرض جدول استعمال القاعة' : 'Voir emploi du temps'}">
                  <i class="fa-regular fa-calendar-days"></i>
                  <span>${this.lang === 'ar' ? 'جدول التوقيت' : 'Emploi du temps'}</span>
                </button>
                <div style="display: flex; gap: 4px;">
                  <button class="btn-icon" title="${this.lang === 'ar' ? 'تعديل' : 'Modifier'}" onclick="app.editRoom(${r.id})">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button class="btn-icon" style="color: #ef4444;" title="${this.lang === 'ar' ? 'حذف' : 'Supprimer'}" onclick="app.deleteRoom(${r.id})">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    const tbody = document.getElementById('roomsTableBody');
    if (tbody) {
      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 32px;">${this.lang === 'ar' ? 'لا توجد أي قاعة مطابقة للبحث' : 'Aucune salle configurée ou trouvée'}</td></tr>`;
      } else {
        tbody.innerHTML = filtered.map(r => {
          const hasProj = r.has_projector == 1 || r.has_projector === true;
          const groupsCount = r.computed_groups_count || 0;
          return `
            <tr>
              <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div class="room-icon-box" style="width: 34px; height: 34px; font-size: 15px;">
                    <i class="fa-solid fa-door-open"></i>
                  </div>
                  <div>
                    <strong style="color: var(--text-heading); font-size: 14px;">${this.escapeHtml(r.name)}</strong>
                    <div style="font-size: 11px; color: var(--text-muted);">#${r.id}</div>
                  </div>
                </div>
              </td>
              <td>
                <span class="room-cap-badge">
                  <i class="fa-solid fa-users"></i> ${r.capacity} ${this.lang === 'ar' ? 'مقعد' : 'places'}
                </span>
              </td>
              <td>
                ${hasProj 
                  ? `<span class="tag-projector-yes"><i class="fa-solid fa-check"></i> ${this.lang === 'ar' ? 'متوفر' : 'Oui'}</span>` 
                  : `<span class="tag-projector-no">${this.lang === 'ar' ? 'غير متوفر' : 'Non'}</span>`
                }
              </td>
              <td>
                <span style="color: var(--text-main); font-size: 13px;">${this.escapeHtml(r.notes || '-')}</span>
              </td>
              <td>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span class="room-groups-badge" style="cursor: pointer;" onclick="app.openRoomTimetable(${r.id})">
                    <i class="fa-solid fa-calendar-days"></i> ${groupsCount} ${this.lang === 'ar' ? 'أفواج' : 'groupes'}
                  </span>
                  ${r.computed_subjects_list ? `<span style="font-size: 11.5px; color: var(--text-muted); max-width: 140px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${this.escapeHtml(r.computed_subjects_list)}">${this.escapeHtml(r.computed_subjects_list)}</span>` : ''}
                </div>
              </td>
              <td>
                <div style="display: flex; gap: 6px;">
                  <button class="btn-icon" title="${this.lang === 'ar' ? 'جدول التوقيت' : 'Emploi du temps'}" onclick="app.openRoomTimetable(${r.id})">
                    <i class="fa-regular fa-calendar-days" style="color: #3b82f6;"></i>
                  </button>
                  <button class="btn-icon" title="${this.lang === 'ar' ? 'تعديل' : 'Modifier'}" onclick="app.editRoom(${r.id})">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button class="btn-icon" style="color: #ef4444;" title="${this.lang === 'ar' ? 'حذف' : 'Supprimer'}" onclick="app.deleteRoom(${r.id})">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          `;
        }).join('');
      }
    }
  }

  async openRoomTimetable(roomId) {
    const r = this.rooms?.find(item => item.id === roomId);
    if (!r) return;

    this.currentTimetableRoom = r;
    const titleEl = document.getElementById('roomTimetableTitle');
    const capEl = document.getElementById('roomTimetableCapBadge');
    const projEl = document.getElementById('roomTimetableProjBadge');
    const equipEl = document.getElementById('roomTimetableEquipNotes');
    const daysGrid = document.getElementById('roomTimetableDaysGrid');

    if (titleEl) titleEl.textContent = `${this.lang === 'ar' ? 'جدول استعمال' : 'Emploi du Temps —'} ${r.name}`;
    if (capEl) capEl.textContent = `${this.lang === 'ar' ? 'السعة:' : 'Capacité:'} ${r.capacity} ${this.lang === 'ar' ? 'مقعد' : 'places'}`;
    if (projEl) {
      const hasP = r.has_projector == 1 || r.has_projector === true;
      projEl.textContent = `${this.lang === 'ar' ? 'عارض داتاشو:' : 'Vidéoprojecteur:'} ${hasP ? (this.lang === 'ar' ? 'متوفر' : 'Oui') : (this.lang === 'ar' ? 'غير متوفر' : 'Non')}`;
    }
    if (equipEl) equipEl.textContent = r.notes || '';

    if (daysGrid) {
      daysGrid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 30px;"><i class="fa-solid fa-spinner fa-spin"></i> ${this.lang === 'ar' ? 'جاري تحميل جدول التوقيت...' : 'Chargement du planning...'}</div>`;
    }

    document.getElementById('modalRoomTimetable')?.classList.add('active');

    let sessions = [];
    try {
      const res = await fetch(`/api/rooms/${roomId}/schedule`);
      const data = await res.json();
      if (data.success && data.schedule) {
        sessions = data.schedule;
      } else {
        sessions = (this.groups || []).filter(g => g.room_id == roomId && (g.active === 1 || g.active === undefined));
      }
    } catch (e) {
      sessions = (this.groups || []).filter(g => g.room_id == roomId && (g.active === 1 || g.active === undefined));
    }

    const groupsBadge = document.getElementById('roomTimetableGroupsBadge');
    if (groupsBadge) {
      groupsBadge.textContent = `${sessions.length} ${this.lang === 'ar' ? 'حصص مبرمجة' : (sessions.length > 1 ? 'séances programmées' : 'séance programmée')}`;
    }

    const days = [
      { key: 'Samedi', fr: 'Samedi', ar: 'السبت' },
      { key: 'Dimanche', fr: 'Dimanche', ar: 'الأحد' },
      { key: 'Lundi', fr: 'Lundi', ar: 'الإثنين' },
      { key: 'Mardi', fr: 'Mardi', ar: 'الثلاثاء' },
      { key: 'Mercredi', fr: 'Mercredi', ar: 'الأربعاء' },
      { key: 'Jeudi', fr: 'Jeudi', ar: 'الخميس' },
      { key: 'Vendredi', fr: 'Vendredi', ar: 'الجمعة' }
    ];

    if (daysGrid) {
      daysGrid.innerHTML = days.map(d => {
        const daySessions = sessions.filter(s => s.day_of_week && s.day_of_week.toLowerCase() === d.key.toLowerCase());
        const dayLabel = this.lang === 'ar' ? d.ar : d.fr;

        return `
          <div class="room-day-column">
            <div class="room-day-header">
              <span>${dayLabel}</span>
              <span class="room-day-badge">${daySessions.length} ${this.lang === 'ar' ? 'حصص' : 'cours'}</span>
            </div>
            <div class="room-day-sessions-list">
              ${daySessions.length === 0 ? `
                <div class="room-session-empty">${this.lang === 'ar' ? 'لا توجد حصص في هذا اليوم' : 'Aucun cours programmé'}</div>
              ` : daySessions.map(s => `
                <div class="room-session-item" style="border-inline-start-color: ${s.subject_color || '#3b82f6'};">
                  <div class="room-session-time">
                    <i class="fa-regular fa-clock"></i>
                    <span>${s.start_time || '--:--'} — ${s.end_time || '--:--'}</span>
                  </div>
                  <div class="room-session-name">${this.escapeHtml(s.name)}</div>
                  <div class="room-session-details">
                    <span style="font-weight: 600; color: ${s.subject_color || 'var(--text-main)'};">
                      <i class="fa-solid fa-book"></i> ${this.escapeHtml(s.subject_name || '')}
                    </span>
                    ${s.teacher_name ? `<span><i class="fa-solid fa-user-tie"></i> ${this.escapeHtml(s.teacher_name)}</span>` : ''}
                    ${s.enrolled_count !== undefined ? `<span><i class="fa-solid fa-users"></i> ${s.enrolled_count}/${s.max_students || r.capacity}</span>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).join('');
    }
  }

  printRoomTimetable() {
    window.print();
  }

  openModalRoom() {
    document.getElementById('modalRoomTitle').textContent = this.lang === 'ar' ? 'إضافة قاعة جديدة' : 'Ajouter une Salle';
    document.getElementById('roomId').value = '';
    document.getElementById('roomName').value = '';
    document.getElementById('roomCapacity').value = '25';
    document.getElementById('roomProjector').value = '1';
    const notesEl = document.getElementById('roomNotes');
    if (notesEl) notesEl.value = '';
    document.getElementById('modalRoom').classList.add('active');
  }

  editRoom(id) {
    const r = this.rooms.find(item => item.id === id);
    if (!r) return;
    document.getElementById('modalRoomTitle').textContent = this.lang === 'ar' ? 'تعديل بيانات القاعة' : 'Modifier la Salle';
    document.getElementById('roomId').value = r.id;
    document.getElementById('roomName').value = r.name;
    document.getElementById('roomCapacity').value = r.capacity;
    document.getElementById('roomProjector').value = (r.has_projector == 1 || r.has_projector === true) ? '1' : '0';
    const notesEl = document.getElementById('roomNotes');
    if (notesEl) notesEl.value = r.notes || '';
    document.getElementById('modalRoom').classList.add('active');
  }

  async saveRoom() {
    const id = document.getElementById('roomId').value;
    const notesEl = document.getElementById('roomNotes');
    const payload = {
      name: document.getElementById('roomName').value.trim(),
      capacity: document.getElementById('roomCapacity').value,
      has_projector: document.getElementById('roomProjector').value === '1',
      notes: notesEl ? notesEl.value.trim() : ''
    };
    if (!payload.name) {
      alert(this.lang === 'ar' ? 'يرجى إدخال اسم القاعة' : 'Veuillez saisir le nom de la salle');
      return;
    }
    const url = id ? `/api/rooms/${id}` : '/api/rooms';
    const method = id ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.success) {
      this.closeModals();
      await this.loadConfigurationData();
      await this.loadRooms();
    } else {
      alert(data.error || 'Erreur lors de l\'enregistrement de la salle');
    }
  }

  async deleteRoom(id) {
    const confirmMsg = this.lang === 'ar' 
      ? 'هل أنت متأكد من حذف هذه القاعة؟' 
      : 'Voulez-vous vraiment supprimer cette salle ?';
    if (!confirm(confirmMsg)) return;
    const res = await fetch(`/api/rooms/${id}`, { method: 'DELETE' });
    const data = await res.json();
    if (data.success) {
      await this.loadConfigurationData();
      await this.loadRooms();
    }
  }

  // -------------------------------------------------------------
  // CONFIGURATION: MATIÈRES (SUBJECTS)
  // -------------------------------------------------------------
  async loadSubjects() {
    try {
      const res = await fetch('/api/subjects');
      const data = await res.json();
      if (!data.success) return;
      this.subjects = data.subjects;

      const tbody = document.getElementById('subjectsTableBody');
      if (this.subjects.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 24px;">Aucune matière configurée</td></tr>`;
        return;
      }

      tbody.innerHTML = this.subjects.map(s => `
        <tr>
          <td><strong>${s.name}</strong></td>
          <td><span class="badge-pill" style="background: rgba(255,255,255,0.06);">${s.code || '-'}</span></td>
          <td><span style="display: inline-block; width: 18px; height: 18px; border-radius: 4px; background: ${s.color}; vertical-align: middle;"></span></td>
          <td>
            <div style="display: flex; gap: 8px;">
              <button class="btn-icon" title="Modifier" onclick="app.editSubject(${s.id})">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn-icon" style="color: #ef4444;" title="Supprimer" onclick="app.deleteSubject(${s.id})">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      `).join('');
    } catch (err) {
      console.error(err);
    }
  }

  openModalSubject() {
    document.getElementById('modalSubjectTitle').textContent = 'Ajouter une Matière';
    document.getElementById('subjectId').value = '';
    document.getElementById('subjectName').value = '';
    document.getElementById('subjectCode').value = '';
    document.getElementById('subjectColor').value = '#3b82f6';
    document.getElementById('modalSubject').classList.add('active');
  }

  editSubject(id) {
    const s = this.subjects.find(item => item.id === id);
    if (!s) return;
    document.getElementById('modalSubjectTitle').textContent = 'Modifier la Matière';
    document.getElementById('subjectId').value = s.id;
    document.getElementById('subjectName').value = s.name;
    document.getElementById('subjectCode').value = s.code || '';
    document.getElementById('subjectColor').value = s.color || '#3b82f6';
    document.getElementById('modalSubject').classList.add('active');
  }

  async saveSubject() {
    const id = document.getElementById('subjectId').value;
    const payload = {
      name: document.getElementById('subjectName').value,
      code: document.getElementById('subjectCode').value,
      color: document.getElementById('subjectColor').value
    };
    const url = id ? `/api/subjects/${id}` : '/api/subjects';
    const method = id ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.success) {
      this.closeModals();
      await this.loadConfigurationData();
      this.loadSubjects();
    }
  }

  async deleteSubject(id) {
    if (!confirm('Voulez-vous vraiment supprimer cette matière ?')) return;
    const res = await fetch(`/api/subjects/${id}`, { method: 'DELETE' });
    const data = await res.json();
    if (data.success) {
      await this.loadConfigurationData();
      this.loadSubjects();
    }
  }

  // -------------------------------------------------------------
  // ENSEIGNANTS (TEACHERS) MODAL & ACTIONS
  // -------------------------------------------------------------
  async openModalTeacher() {
    await this.loadConfigurationData();
    const select = document.getElementById('teacherSubject');
    select.innerHTML = '<option value="">-- Choisir une matière --</option>' +
      this.subjects.map(s => `<option value="${s.id}">${this.escapeHtml(s.name)}</option>`).join('');

    document.getElementById('modalTeacherTitle').textContent = 'Ajouter un Enseignant';
    document.getElementById('teacherId').value = '';
    const teacherMatriculeEl = document.getElementById('teacherMatricule');
    if (teacherMatriculeEl) teacherMatriculeEl.value = '';
    document.getElementById('teacherFirstName').value = '';
    document.getElementById('teacherLastName').value = '';
    document.getElementById('teacherPhone').value = '';
    document.getElementById('teacherRemunType').value = 'percent';
    document.getElementById('teacherRemunRate').value = '50';
    document.getElementById('teacherTarifHeure').value = '1200';
    document.getElementById('teacherTarifSeance').value = '2000';
    document.getElementById('teacherSalaireFixe').value = '40000';
    document.getElementById('teacherTarifParEleve').value = '1000';
    document.getElementById('modalTeacher').classList.add('active');
  }

  async editTeacher(id) {
    await this.loadConfigurationData();
    const t = this.teachers.find(item => item.id === id);
    if (!t) return;

    const select = document.getElementById('teacherSubject');
    select.innerHTML = '<option value="">-- Choisir une matière --</option>' +
      this.subjects.map(s => `<option value="${s.id}" ${s.id == t.subject_id ? 'selected' : ''}>${this.escapeHtml(s.name)}</option>`).join('');

    document.getElementById('modalTeacherTitle').textContent = "Modifier l'Enseignant";
    document.getElementById('teacherId').value = t.id;
    const teacherMatriculeEl = document.getElementById('teacherMatricule');
    if (teacherMatriculeEl) teacherMatriculeEl.value = t.matricule || '';
    document.getElementById('teacherFirstName').value = t.first_name || '';
    document.getElementById('teacherLastName').value = t.last_name || '';
    document.getElementById('teacherPhone').value = t.phone || '';
    document.getElementById('teacherRemunType').value = t.remuneration_type || 'percent';
    document.getElementById('teacherRemunRate').value = t.remuneration_rate ?? 50;
    document.getElementById('teacherTarifHeure').value = t.tarif_heure ?? 1200;
    document.getElementById('teacherTarifSeance').value = t.tarif_seance ?? 2000;
    document.getElementById('teacherSalaireFixe').value = t.salaire_fixe ?? 40000;
    document.getElementById('teacherTarifParEleve').value = t.tarif_par_eleve ?? 1000;
    document.getElementById('modalTeacher').classList.add('active');
  }

  async saveTeacher() {
    const id = document.getElementById('teacherId').value;
    const payload = {
      matricule: document.getElementById('teacherMatricule') ? document.getElementById('teacherMatricule').value.trim() : '',
      first_name: document.getElementById('teacherFirstName').value.trim(),
      last_name: document.getElementById('teacherLastName').value.trim(),
      phone: document.getElementById('teacherPhone').value.trim(),
      subject_id: document.getElementById('teacherSubject').value,
      remuneration_type: document.getElementById('teacherRemunType').value,
      remuneration_rate: parseFloat(document.getElementById('teacherRemunRate').value) || 0,
      tarif_heure: parseFloat(document.getElementById('teacherTarifHeure').value) || 0,
      tarif_seance: parseFloat(document.getElementById('teacherTarifSeance').value) || 0,
      salaire_fixe: parseFloat(document.getElementById('teacherSalaireFixe').value) || 0,
      tarif_par_eleve: parseFloat(document.getElementById('teacherTarifParEleve').value) || 0
    };

    if (!payload.first_name || !payload.last_name) {
      alert('Veuillez saisir le nom et prénom de l’enseignant.');
      return;
    }

    const url = id ? `/api/teachers/${id}` : '/api/teachers';
    const method = id ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        this.closeModals();
        this.loadTeachers();
      } else {
        alert(data.error || 'Erreur lors de l’enregistrement');
      }
    } catch (e) {
      console.error(e);
      alert('Erreur réseau');
    }
  }

  async deleteTeacher(id) {
    if (!confirm('Voulez-vous vraiment désactiver cet enseignant ?')) return;
    try {
      const res = await fetch(`/api/teachers/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        this.loadTeachers();
      }
    } catch (e) {
      console.error(e);
    }
  }

  // -------------------------------------------------------------
  // GROUPES & PLANNING ENGINE (CONFLICTS & WEEKLY VIEW)
  // -------------------------------------------------------------
  togglePlanningView() {
    const listEl = document.getElementById('planningListView');
    const gridEl = document.getElementById('planningGridView');
    const textEl = document.getElementById('planningViewText');
    const btnEl = document.getElementById('btnPlanningToggle');

    if (listEl.style.display === 'none') {
      listEl.style.display = 'block';
      gridEl.style.display = 'none';
      textEl.textContent = 'Vue Grille Hebdo';
      btnEl.querySelector('i').className = 'fa-solid fa-table-cells';
    } else {
      listEl.style.display = 'none';
      gridEl.style.display = 'block';
      textEl.textContent = 'Vue Liste';
      btnEl.querySelector('i').className = 'fa-solid fa-list';
      this.renderWeeklyScheduleGrid();
    }
  }

  renderWeeklyScheduleGrid() {
    const container = document.getElementById('weeklyScheduleGrid');
    if (!container) return;

    // Week days starting from Saturday (Standard for Algerian / MENA schools)
    const daysConfig = [
      { key: 'Samedi', labelFr: 'Samedi', labelAr: 'السبت' },
      { key: 'Dimanche', labelFr: 'Dimanche', labelAr: 'الأحد' },
      { key: 'Lundi', labelFr: 'Lundi', labelAr: 'الإثنين' },
      { key: 'Mardi', labelFr: 'Mardi', labelAr: 'الثلاثاء' },
      { key: 'Mercredi', labelFr: 'Mercredi', labelAr: 'الأربعاء' },
      { key: 'Jeudi', labelFr: 'Jeudi', labelAr: 'الخميس' },
      { key: 'Vendredi', labelFr: 'Vendredi', labelAr: 'الجمعة' }
    ];

    const isAr = (this.currentLang || 'fr') === 'ar';
    const groups = this.getFilteredPlanningGroups ? this.getFilteredPlanningGroups() : (this.groups || []);

    container.innerHTML = daysConfig.map(dayObj => {
      const dayGroups = groups
        .filter(g => this.normalizeDay(g.day_of_week) === dayObj.key)
        .sort((a, b) => (a.start_time || '').localeCompare(b.start_time || ''));

      const displayLabel = isAr ? dayObj.labelAr : `${dayObj.labelFr} / ${dayObj.labelAr}`;

      const cardsHtml = dayGroups.length === 0
        ? `<div style="color: var(--text-muted); font-size: 11.5px; text-align: center; padding: 26px 8px; font-style: italic;">
             <i class="fa-regular fa-calendar-xmark" style="display: block; font-size: 20px; margin-bottom: 6px; opacity: 0.35;"></i>
             Aucun cours
           </div>`
        : dayGroups.map(g => {
            const hasRoom = !!g.room_name;
            const durHours = this.calculateDurationHours(g.start_time, g.end_time);
            const durText = this.formatDuration(durHours);

            return `
              <div class="schedule-card" style="border-left: 4px solid ${hasRoom ? '#3b82f6' : '#ef4444'};" onclick="app.editGroup(${g.id})" title="Cliquer pour modifier ce groupe">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px; gap: 4px;">
                  <span class="badge-pill" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa; font-size: 10px; padding: 2px 6px; max-width: 58%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    ${this.escapeHtml(g.subject_name || 'Matière')}
                  </span>
                  <span style="font-size: 11px; font-weight: 700; color: #10b981; white-space: nowrap;">
                    ${g.start_time || ''} - ${g.end_time || ''}
                  </span>
                </div>
                <div style="font-weight: 700; font-size: 12.5px; color: var(--text-main); margin-bottom: 3px; line-height: 1.3;">
                  ${this.escapeHtml(g.name)}
                </div>
                <div style="font-size: 11px; color: var(--text-muted); display: flex; justify-content: space-between; align-items: center;">
                  <span><i class="fa-solid fa-chalkboard-user" style="color: #a78bfa;"></i> ${this.escapeHtml(g.teacher_name || '-')}</span>
                  <span style="font-size: 10.5px; color: var(--text-muted);">${durText}</span>
                </div>
                <div style="font-size: 11px; color: var(--text-muted); display: flex; justify-content: space-between; align-items: center; margin-top: 4px; padding-top: 4px; border-top: 1px solid rgba(255,255,255,0.05);">
                  ${hasRoom 
                    ? `<span><i class="fa-solid fa-door-open" style="color: #38bdf8;"></i> ${this.escapeHtml(g.room_name)}</span>`
                    : `<span style="color: #ef4444; font-weight: 600;"><i class="fa-solid fa-triangle-exclamation"></i> Sans salle</span>`
                  }
                  <span style="color: #60a5fa; font-weight: 600;">${g.enrolled_count || 0}/${g.max_students}</span>
                </div>
              </div>
            `;
          }).join('');

      return `
        <div class="day-column">
          <div class="day-header">
            <div class="day-header-left">
              <span>${displayLabel}</span>
              <span class="day-count-badge">${dayGroups.length}</span>
            </div>
            <button type="button" class="day-quick-add-btn" onclick="app.quickAddGroupForDay('${dayObj.key}')" title="Ajouter une séance ce jour">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          <div class="day-cards">
            ${cardsHtml}
          </div>
        </div>
      `;
    }).join('');
  }

  quickAddGroupForDay(day) {
    this.openModalGroup();
    const daySelect = document.getElementById('groupDay');
    if (daySelect) {
      daySelect.value = day;
      this.checkGroupFormConflicts();
    }
  }

  printPlanning() {
    const filtered = this.getFilteredPlanningGroups ? this.getFilteredPlanningGroups() : (this.groups || []);
    const schoolName = this.settings?.school_name || 'EDUMIND Academy';
    const activeYear = this.settings?.active_year || '2025-2026';
    const phone = this.settings?.school_phone || '';
    const nowStr = new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    const teacherSelect = document.getElementById('filterPlanningTeacher');
    const teacherId = teacherSelect?.value;
    const teacherText = teacherId && teacherSelect.selectedOptions[0] ? teacherSelect.selectedOptions[0].text : null;

    const roomSelect = document.getElementById('filterPlanningRoom');
    const roomId = roomSelect?.value;
    const roomText = roomId && roomSelect.selectedOptions[0] ? roomSelect.selectedOptions[0].text : null;

    let subtitle = "Emploi du Temps Général";
    if (teacherText && teacherId) subtitle = `Emploi du Temps — Enseignant: ${teacherText}`;
    else if (roomText && roomId) subtitle = `Emploi du Temps — Salle: ${roomText}`;

    const daysOrder = ['Samedi', 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
    const rows = [...filtered].sort((a, b) => {
      const d1 = daysOrder.indexOf(this.normalizeDay(a.day_of_week));
      const d2 = daysOrder.indexOf(this.normalizeDay(b.day_of_week));
      if (d1 !== d2) return d1 - d2;
      return (a.start_time || '').localeCompare(b.start_time || '');
    });

    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert('Veuillez autoriser les fenêtres pop-up pour imprimer');
      return;
    }

    printWin.document.write(`
      <!DOCTYPE html>
      <html lang="fr" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title>${subtitle} - ${schoolName}</title>
        <style>
          @page { size: A4 landscape; margin: 12mm; }
          body { font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; margin: 0; padding: 10px; font-size: 12px; }
          .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #2563eb; padding-bottom: 10px; margin-bottom: 14px; }
          .title { font-size: 20px; font-weight: bold; color: #1e3a8a; }
          .subtitle { font-size: 14px; color: #2563eb; font-weight: 600; margin-top: 4px; }
          .meta { text-align: right; font-size: 11px; color: #64748b; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th { background: #f1f5f9; color: #334155; font-weight: 700; text-align: left; padding: 8px 10px; border: 1px solid #cbd5e1; font-size: 11px; }
          td { padding: 7px 10px; border: 1px solid #cbd5e1; font-size: 11.5px; }
          tr:nth-child(even) { background: #f8fafc; }
          .badge { display: inline-block; padding: 2px 7px; border-radius: 4px; font-size: 10.5px; font-weight: 600; }
          .badge-day { background: #eff6ff; color: #1d4ed8; font-weight: bold; }
          .badge-sub { background: #f5f3ff; color: #6d28d9; }
          .footer { margin-top: 20px; display: flex; justify-content: space-between; font-size: 10px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 8px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="title">${this.escapeHtml(schoolName)}</div>
            <div class="subtitle">${this.escapeHtml(subtitle)}</div>
          </div>
          <div class="meta">
            <div>Année Scolaire: <strong>${this.escapeHtml(activeYear)}</strong></div>
            <div>Date: ${nowStr}</div>
            ${phone ? `<div>Tél: ${this.escapeHtml(phone)}</div>` : ''}
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Jour</th>
              <th>Horaire</th>
              <th>Groupe</th>
              <th>Matière</th>
              <th>Niveau</th>
              <th>Enseignant</th>
              <th>Salle</th>
              <th>Effectif</th>
            </tr>
          </thead>
          <tbody>
            ${rows.length === 0 ? '<tr><td colspan="8" style="text-align: center; padding: 20px; color: #94a3b8;">Aucune séance trouvée</td></tr>' : 
              rows.map(g => `
                <tr>
                  <td><span class="badge badge-day">${this.normalizeDay(g.day_of_week) || '-'}</span></td>
                  <td><strong>${g.start_time || ''} - ${g.end_time || ''}</strong></td>
                  <td><strong>${this.escapeHtml(g.name)}</strong></td>
                  <td><span class="badge badge-sub">${this.escapeHtml(g.subject_name || '-')}</span></td>
                  <td>${this.escapeHtml(g.level_name || '-')}</td>
                  <td>${this.escapeHtml(g.teacher_name || '-')}</td>
                  <td>${this.escapeHtml(g.room_name || 'Non assignée')}</td>
                  <td>${g.enrolled_count || 0} / ${g.max_students}</td>
                </tr>
              `).join('')}
          </tbody>
        </table>

        <div class="footer">
          <div>Total: ${rows.length} séances programmées</div>
          <div>EDUMIND — Système de Gestion Scolaire</div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 400);
          };
        </script>
      </body>
      </html>
    `);
    printWin.document.close();
  }

  async checkGroupFormConflicts() {
    const alertBox = document.getElementById('groupConflictAlert');
    const alertMsg = document.getElementById('groupConflictMessage');
    const forceLabel = document.getElementById('forceConflictCheckLabel');
    const forceInput = document.getElementById('forceScheduleConflict');

    const day_of_week = document.getElementById('groupDay').value;
    const start_time = document.getElementById('groupStartTime').value;
    const end_time = document.getElementById('groupEndTime').value;
    const room_id = document.getElementById('groupRoom').value;
    const teacher_id = document.getElementById('groupTeacher').value;
    const exclude_group_id = document.getElementById('groupId').value || null;

    if (!day_of_week || !start_time || !end_time || (!room_id && !teacher_id)) {
      alertBox.style.display = 'none';
      forceLabel.style.display = 'none';
      return;
    }

    try {
      const res = await fetch('/api/planning/check-conflicts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ day_of_week, start_time, end_time, room_id, teacher_id, exclude_group_id })
      });
      const data = await res.json();

      if (data.hasConflict && data.conflicts && data.conflicts.length > 0) {
        const msgs = data.conflicts.map(c => `• ${this.escapeHtml(c.message)}`).join('<br>');
        alertMsg.innerHTML = msgs;
        alertBox.style.display = 'block';
        forceLabel.style.display = 'block';
      } else {
        alertBox.style.display = 'none';
        forceLabel.style.display = 'none';
        if (forceInput) forceInput.checked = false;
      }
    } catch (e) {
      console.error('Error checking conflicts:', e);
    }
  }

  checkModalRoomsAvailability() {
    const day = document.getElementById('groupDay')?.value || 'Samedi';
    const start = document.getElementById('groupStartTime')?.value || '14:00';
    const end = document.getElementById('groupEndTime')?.value || '16:00';

    this.openModalRoomsAvailability(day, start, end);
  }

  async openModalRoomsAvailability(presetDay, presetStart, presetEnd) {
    if (presetDay) document.getElementById('availFilterDay').value = presetDay;
    if (presetStart) document.getElementById('availFilterStart').value = presetStart;
    if (presetEnd) document.getElementById('availFilterEnd').value = presetEnd;

    document.getElementById('modalRoomAvailability').classList.add('active');
    await this.loadRoomsAvailability();
  }

  async loadRoomsAvailability() {
    const day = document.getElementById('availFilterDay').value;
    const start = document.getElementById('availFilterStart').value;
    const end = document.getElementById('availFilterEnd').value;
    const grid = document.getElementById('roomsAvailabilityGrid');

    try {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 20px; color: var(--text-muted);"><i class="fa-solid fa-spinner fa-spin"></i> Vérification des disponibilités...</div>`;
      const res = await fetch(`/api/planning/rooms-availability?day_of_week=${encodeURIComponent(day)}&start_time=${encodeURIComponent(start)}&end_time=${encodeURIComponent(end)}`);
      const data = await res.json();
      if (!data.success) return;

      if (data.rooms.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 20px; color: var(--text-muted);">Aucune salle enregistrée dans le système.</div>`;
        return;
      }

      grid.innerHTML = data.rooms.map(r => {
        const isFree = r.is_available;
        const borderCol = isFree ? '#10b981' : '#ef4444';
        const bgBadge = isFree ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)';
        const textBadge = isFree ? '#10b981' : '#ef4444';
        const iconBadge = isFree ? 'fa-check' : 'fa-ban';

        return `
          <div class="room-avail-card" style="border: 1.5px solid ${borderCol}; border-radius: 8px; padding: 12px; background: var(--card-bg);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <strong style="font-size: 14px;">${this.escapeHtml(r.name)}</strong>
              <span class="badge-pill" style="background: ${bgBadge}; color: ${textBadge}; font-size: 11px;">
                <i class="fa-solid ${iconBadge}"></i> ${isFree ? 'Disponible' : 'Occupée'}
              </span>
            </div>
            <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">
              <div><i class="fa-solid fa-users"></i> Capacité: <strong>${r.capacity}</strong> places</div>
              <div><i class="fa-solid fa-video"></i> Vidéoprojecteur: <strong>${r.has_projector ? 'Oui' : 'Non'}</strong></div>
            </div>
            ${!isFree && r.occupied_by ? `
              <div style="background: #fef2f2; border: 1px solid #fee2e2; border-radius: 4px; padding: 6px 8px; font-size: 11px; color: #991b1b; margin-bottom: 10px;">
                Occupée par: <strong>${this.escapeHtml(r.occupied_by.group_name)}</strong> (${r.occupied_by.start_time} - ${r.occupied_by.end_time})
              </div>
            ` : ''}
            ${isFree ? `
              <button type="button" class="btn-primary" style="width: 100%; font-size: 11.5px; padding: 6px;" onclick="app.selectRoomFromAvailability(${r.id})">
                <i class="fa-solid fa-check"></i> Choisir cette salle
              </button>
            ` : ''}
          </div>
        `;
      }).join('');
    } catch (e) {
      console.error(e);
      grid.innerHTML = `<div style="grid-column: 1/-1; color: #ef4444; text-align: center;">Erreur de connexion</div>`;
    }
  }

  selectRoomFromAvailability(roomId) {
    const select = document.getElementById('groupRoom');
    if (select) {
      select.value = roomId;
    }
    document.getElementById('modalRoomAvailability').classList.remove('active');
    this.checkGroupFormConflicts();
  }

  async openModalGroup() {
    await this.loadConfigurationData();
    await this.loadTeachers();

    const lvlSelect = document.getElementById('groupLevel');
    lvlSelect.innerHTML = this.levels.map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');

    const subSelect = document.getElementById('groupSubject');
    subSelect.innerHTML = this.subjects.map(s => `<option value="${s.id}">${this.escapeHtml(s.name)}</option>`).join('');

    const tchSelect = document.getElementById('groupTeacher');
    tchSelect.innerHTML = '<option value="">-- Choisir un enseignant --</option>' +
      this.teachers.map(t => `<option value="${t.id}">${this.escapeHtml(t.first_name)} ${this.escapeHtml(t.last_name)}</option>`).join('');

    const rmSelect = document.getElementById('groupRoom');
    rmSelect.innerHTML = '<option value="">-- Choisir une salle --</option>' +
      this.rooms.map(r => `<option value="${r.id}">${this.escapeHtml(r.name)} (${r.capacity} pl)</option>`).join('');

    document.getElementById('modalGroupTitle').textContent = 'Créer un Nouveau Groupe';
    document.getElementById('groupId').value = '';
    document.getElementById('groupName').value = '';
    document.getElementById('groupDay').value = 'Samedi';
    document.getElementById('groupStartTime').value = '14:00';
    document.getElementById('groupEndTime').value = '16:00';
    document.getElementById('groupPrice').value = '2000';
    document.getElementById('groupMaxStudents').value = '25';

    // Reset conflict elements
    document.getElementById('groupConflictAlert').style.display = 'none';
    document.getElementById('forceConflictCheckLabel').style.display = 'none';
    const forceCheck = document.getElementById('forceScheduleConflict');
    if (forceCheck) forceCheck.checked = false;

    document.getElementById('modalGroup').classList.add('active');
  }

  async editGroup(id) {
    await this.loadConfigurationData();
    await this.loadTeachers();
    const g = this.groups.find(item => item.id === id);
    if (!g) return;

    const lvlSelect = document.getElementById('groupLevel');
    lvlSelect.innerHTML = this.levels.map(l => `<option value="${l.id}" ${l.id == g.level_id ? 'selected' : ''}>${this.escapeHtml(l.name)}</option>`).join('');

    const subSelect = document.getElementById('groupSubject');
    subSelect.innerHTML = this.subjects.map(s => `<option value="${s.id}" ${s.id == g.subject_id ? 'selected' : ''}>${this.escapeHtml(s.name)}</option>`).join('');

    const tchSelect = document.getElementById('groupTeacher');
    tchSelect.innerHTML = '<option value="">-- Choisir un enseignant --</option>' +
      this.teachers.map(t => `<option value="${t.id}" ${t.id == g.teacher_id ? 'selected' : ''}>${this.escapeHtml(t.first_name)} ${this.escapeHtml(t.last_name)}</option>`).join('');

    const rmSelect = document.getElementById('groupRoom');
    rmSelect.innerHTML = '<option value="">-- Choisir une salle --</option>' +
      this.rooms.map(r => `<option value="${r.id}" ${r.id == g.room_id ? 'selected' : ''}>${this.escapeHtml(r.name)} (${r.capacity} pl)</option>`).join('');

    document.getElementById('modalGroupTitle').textContent = 'Modifier le Groupe';
    document.getElementById('groupId').value = g.id;
    document.getElementById('groupName').value = g.name;
    document.getElementById('groupDay').value = g.day_of_week || 'Samedi';
    document.getElementById('groupStartTime').value = g.start_time || '14:00';
    document.getElementById('groupEndTime').value = g.end_time || '16:00';
    document.getElementById('groupPrice').value = g.price_monthly;
    document.getElementById('groupMaxStudents').value = g.max_students;

    // Reset conflict elements
    document.getElementById('groupConflictAlert').style.display = 'none';
    document.getElementById('forceConflictCheckLabel').style.display = 'none';
    const forceCheck = document.getElementById('forceScheduleConflict');
    if (forceCheck) forceCheck.checked = false;

    document.getElementById('modalGroup').classList.add('active');
    this.checkGroupFormConflicts();
  }

  async saveGroup() {
    const id = document.getElementById('groupId').value;
    const force = document.getElementById('forceScheduleConflict')?.checked || false;

    const payload = {
      name: document.getElementById('groupName').value.trim(),
      level_id: document.getElementById('groupLevel').value,
      subject_id: document.getElementById('groupSubject').value,
      teacher_id: document.getElementById('groupTeacher').value,
      room_id: document.getElementById('groupRoom').value,
      day_of_week: document.getElementById('groupDay').value,
      start_time: document.getElementById('groupStartTime').value,
      end_time: document.getElementById('groupEndTime').value,
      price_monthly: document.getElementById('groupPrice').value,
      max_students: document.getElementById('groupMaxStudents').value,
      force: force
    };

    if (!payload.name) {
      alert('Veuillez saisir un nom pour le groupe.');
      return;
    }

    const url = id ? `/api/groups/${id}` : '/api/groups';
    const method = id ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (res.status === 409 || (!data.success && data.conflicts)) {
        // Schedule Conflict triggered!
        const alertBox = document.getElementById('groupConflictAlert');
        const alertMsg = document.getElementById('groupConflictMessage');
        const forceLabel = document.getElementById('forceConflictCheckLabel');

        const msgs = (data.conflicts || [{ message: data.error }]).map(c => `• ${this.escapeHtml(c.message || data.error)}`).join('<br>');
        alertMsg.innerHTML = msgs;
        alertBox.style.display = 'block';
        forceLabel.style.display = 'block';
        return;
      }

      if (data.success) {
        this.closeModals();
        await this.loadGroups();
        if (typeof this.loadGroupesView === 'function') await this.loadGroupesView();
        if (typeof this.renderWeeklyScheduleGrid === 'function') this.renderWeeklyScheduleGrid();
      } else {
        alert(data.error || 'Erreur lors de l’enregistrement');
      }
    } catch (e) {
      console.error(e);
      alert('Erreur réseau');
    }
  }

  async deleteGroup(id) {
    if (!confirm(this.lang === 'ar' ? 'هل تريد حقاً تعطيل هذا الفوج؟' : 'Voulez-vous vraiment désactiver ce groupe ?')) return;
    try {
      const res = await fetch(`/api/groups/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        await this.loadGroups();
        if (typeof this.loadGroupesView === 'function') await this.loadGroupesView();
        if (typeof this.renderWeeklyScheduleGrid === 'function') this.renderWeeklyScheduleGrid();
      }
    } catch (e) {
      console.error(e);
    }
  }

  // -------------------------------------------------------------
  // INSCRIPTIONS (ENROLLMENTS) VIEW
  // -------------------------------------------------------------
  async loadInscriptionsView(preselectedStudentId) {
    await this.loadStudents();
    await this.loadGroups();

    const stuSelect = document.getElementById('enrollStudentSelect');
    if (stuSelect) {
      stuSelect.innerHTML = '<option value="">-- Choisir un élève --</option>' +
        this.students.map(s => `<option value="${s.id}">${s.first_name} ${s.last_name} (${s.matricule})</option>`).join('');
      if (preselectedStudentId) {
        stuSelect.value = preselectedStudentId;
      }
    }

    const grpSelect = document.getElementById('enrollGroupSelect');
    if (grpSelect) {
      grpSelect.innerHTML = '<option value="">-- Choisir un groupe --</option>' +
        this.groups.map(g => `<option value="${g.id}">${g.name} — ${g.subject_name} (${g.price_monthly} DA)</option>`).join('');
    }
  }

  async saveEnrollment() {
    const payload = {
      student_id: document.getElementById('enrollStudentSelect').value,
      group_id: document.getElementById('enrollGroupSelect').value,
      discount_amount: document.getElementById('enrollDiscount').value
    };

    const res = await fetch('/api/enrollments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data.success) {
      alert('Élève inscrit dans le groupe avec succès !');
      this.switchView('eleves');
    } else {
      alert(data.error || 'Erreur lors de l’inscription');
    }
  }

  // -------------------------------------------------------------
  // PARAMÈTRES (SETTINGS) VIEW
  // -------------------------------------------------------------
  switchSettingsTab(tabName) {
    document.querySelectorAll('.settings-subnav .settings-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.settingsTab === tabName);
    });
    document.querySelectorAll('.settings-panels-container .settings-tab-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === `settingsTab-${tabName}`);
    });
  }

  async loadSettingsInputs() {
    await this.loadSettings();

    // 1. Établissement
    const schoolNameInput = document.getElementById('settingSchoolName');
    if (schoolNameInput) schoolNameInput.value = this.settings.school_name || 'Schoolaris';
    const schoolAddressInput = document.getElementById('settingSchoolAddress');
    if (schoolAddressInput) schoolAddressInput.value = this.settings.school_address || '';
    const schoolPhoneInput = document.getElementById('settingSchoolPhone');
    if (schoolPhoneInput) schoolPhoneInput.value = this.settings.school_phone || '0550 000 000';
    const schoolEmailInput = document.getElementById('settingSchoolEmail');
    if (schoolEmailInput) schoolEmailInput.value = this.settings.school_email || 'contact@ecole.dz';
    const currencyInput = document.getElementById('settingCurrency');
    if (currencyInput) currencyInput.value = this.settings.currency || 'DA';
    const activeYearInput = document.getElementById('settingActiveYear');
    if (activeYearInput) activeYearInput.value = this.settings.active_year || '2025-2026';

    // Logo
    this.schoolLogoBase64 = this.settings.school_logo || '';
    const previewContainer = document.getElementById('settingLogoPreviewContainer');
    const previewImg = document.getElementById('settingLogoPreview');
    const fileNameSpan = document.getElementById('settingLogoFileName');
    if (this.schoolLogoBase64 && previewImg && previewContainer) {
      previewImg.src = this.schoolLogoBase64;
      previewContainer.style.display = 'inline-flex';
      if (fileNameSpan) fileNameSpan.textContent = 'Logo enregistré';
    } else {
      if (previewContainer) previewContainer.style.display = 'none';
      if (fileNameSpan) fileNameSpan.textContent = 'Aucun fichier sélectionné';
    }

    // 2. Badges élèves (impression)
    const badgeWidthInput = document.getElementById('settingBadgeWidth');
    if (badgeWidthInput) badgeWidthInput.value = this.settings.badge_width || '85.6';
    const badgeHeightInput = document.getElementById('settingBadgeHeight');
    if (badgeHeightInput) badgeHeightInput.value = this.settings.badge_height || '53.98';

    // 3. Facturation & Échéances
    const prorataMensuel = document.getElementById('settingProrataMensuel');
    if (prorataMensuel) prorataMensuel.checked = this.settings.prorata_mensuel === '1';
    const prorataHebdo = document.getElementById('settingProrataHebdo');
    if (prorataHebdo) prorataHebdo.checked = this.settings.prorata_hebdo === '1';
    const billingGenDay = document.getElementById('settingBillingGenDay');
    if (billingGenDay) billingGenDay.value = this.settings.billing_gen_day || '1';
    const billingDueDay = document.getElementById('settingBillingDueDay');
    if (billingDueDay) billingDueDay.value = this.settings.billing_due_day || '15';
    const alertStartup = document.getElementById('settingAlertStartup');
    if (alertStartup) alertStartup.checked = this.settings.alert_startup !== '0';
    const autoSilentGen = document.getElementById('settingAutoSilentGen');
    if (autoSilentGen) autoSilentGen.checked = this.settings.auto_silent_gen === '1';

    // 4. Caisse categories
    this.renderCaisseCategories();

    // 5. Backups
    await this.loadBackupsList();
  }

  handleSchoolLogoUpload(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert('Le logo ne doit pas dépasser 2 Mo');
      return;
    }
    const reader = new FileReader();
    reader.onload = (evt) => {
      this.schoolLogoBase64 = evt.target.result;
      const previewImg = document.getElementById('settingLogoPreview');
      const previewContainer = document.getElementById('settingLogoPreviewContainer');
      const fileNameSpan = document.getElementById('settingLogoFileName');
      if (previewImg) previewImg.src = this.schoolLogoBase64;
      if (previewContainer) previewContainer.style.display = 'inline-flex';
      if (fileNameSpan) fileNameSpan.textContent = file.name;
    };
    reader.readAsDataURL(file);
  }

  removeSchoolLogo() {
    this.schoolLogoBase64 = '';
    const fileInput = document.getElementById('settingLogoFile');
    if (fileInput) fileInput.value = '';
    const previewContainer = document.getElementById('settingLogoPreviewContainer');
    if (previewContainer) previewContainer.style.display = 'none';
    const fileNameSpan = document.getElementById('settingLogoFileName');
    if (fileNameSpan) fileNameSpan.textContent = 'Aucun fichier sélectionné';
  }

  async saveEtablissementSettings() {
    const payload = {
      school_name: document.getElementById('settingSchoolName')?.value || '',
      school_address: document.getElementById('settingSchoolAddress')?.value || '',
      school_phone: document.getElementById('settingSchoolPhone')?.value || '',
      school_email: document.getElementById('settingSchoolEmail')?.value || '',
      currency: document.getElementById('settingCurrency')?.value || 'DA',
      active_year: document.getElementById('settingActiveYear')?.value || '2025-2026',
      school_logo: this.schoolLogoBase64 || ''
    };

    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        alert('Informations de l’établissement enregistrées avec succès !');
        await this.loadSettings();
      } else {
        alert(data.error || 'Erreur lors de l’enregistrement');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur de connexion');
    }
  }

  async saveBadgeSettings() {
    const payload = {
      badge_width: document.getElementById('settingBadgeWidth')?.value || '85.6',
      badge_height: document.getElementById('settingBadgeHeight')?.value || '53.98'
    };

    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        alert('Dimensions des badges enregistrées avec succès !');
        await this.loadSettings();
      } else {
        alert(data.error || 'Erreur lors de l’enregistrement');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur de connexion');
    }
  }

  async saveBillingSettings() {
    const payload = {
      prorata_mensuel: document.getElementById('settingProrataMensuel')?.checked ? '1' : '0',
      prorata_hebdo: document.getElementById('settingProrataHebdo')?.checked ? '1' : '0',
      billing_gen_day: document.getElementById('settingBillingGenDay')?.value || '1',
      billing_due_day: document.getElementById('settingBillingDueDay')?.value || '15',
      alert_startup: document.getElementById('settingAlertStartup')?.checked ? '1' : '0',
      auto_silent_gen: document.getElementById('settingAutoSilentGen')?.checked ? '1' : '0'
    };

    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        alert('Paramètres de facturation enregistrés avec succès !');
        await this.loadSettings();
      } else {
        alert(data.error || 'Erreur lors de l’enregistrement');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur de connexion');
    }
  }

  async changePassword() {
    const old_password = document.getElementById('settingOldPassword')?.value;
    const new_password = document.getElementById('settingNewPassword')?.value;
    const confirm_password = document.getElementById('settingConfirmPassword')?.value;

    if (!old_password || !new_password || !confirm_password) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    if (new_password !== confirm_password) {
      alert('Le nouveau mot de passe et la confirmation ne correspondent pas');
      return;
    }
    if (new_password.length < 4) {
      alert('Le mot de passe doit comporter au moins 4 caractères');
      return;
    }

    try {
      const res = await fetch('/api/settings/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ old_password, new_password })
      });
      const data = await res.json();
      if (data.success) {
        alert('Mot de passe modifié avec succès !');
        document.getElementById('settingOldPassword').value = '';
        document.getElementById('settingNewPassword').value = '';
        document.getElementById('settingConfirmPassword').value = '';
      } else {
        alert(data.error || 'Erreur lors du changement de mot de passe');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur de connexion');
    }
  }

  getCaisseCategories(type) {
    if (type === 'entree') {
      try {
        if (this.settings?.caisse_categories_entree) {
          const parsed = JSON.parse(this.settings.caisse_categories_entree);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) {}
      return ["Paiement élève", "Inscription", "Avance", "Don / Subvention", "Autre entrée"];
    } else {
      try {
        if (this.settings?.caisse_categories_sortie) {
          const parsed = JSON.parse(this.settings.caisse_categories_sortie);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) {}
      return ["Salaire enseignant", "Fournitures", "Loyer", "Eau / Électricité", "Téléphone / Internet", "Maintenance", "Remboursement", "Autre sortie"];
    }
  }

  renderCaisseCategories() {
    const entrees = this.getCaisseCategories('entree');
    const sorties = this.getCaisseCategories('sortie');

    const wrapperEntree = document.getElementById('caisseTagsEntree');
    if (wrapperEntree) {
      wrapperEntree.innerHTML = entrees.map((tag, idx) => `
        <span class="caisse-tag caisse-tag-green">
          <span>${tag}</span>
          <button type="button" class="tag-remove-btn" onclick="app.removeCaisseCategory('entree', ${idx})" title="Supprimer">×</button>
        </span>
      `).join('');
    }

    const wrapperSortie = document.getElementById('caisseTagsSortie');
    if (wrapperSortie) {
      wrapperSortie.innerHTML = sorties.map((tag, idx) => `
        <span class="caisse-tag caisse-tag-red">
          <span>${tag}</span>
          <button type="button" class="tag-remove-btn" onclick="app.removeCaisseCategory('sortie', ${idx})" title="Supprimer">×</button>
        </span>
      `).join('');
    }
  }

  async addCaisseCategory(type) {
    const inputId = type === 'entree' ? 'inputNewCatEntree' : 'inputNewCatSortie';
    const input = document.getElementById(inputId);
    if (!input) return;
    const val = input.value.trim();
    if (!val) return;

    const list = [...this.getCaisseCategories(type)];
    if (list.includes(val)) {
      alert('Cette catégorie existe déjà');
      return;
    }
    list.push(val);

    const settingKey = type === 'entree' ? 'caisse_categories_entree' : 'caisse_categories_sortie';
    const payload = { [settingKey]: JSON.stringify(list) };

    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        if (!this.settings) this.settings = {};
        this.settings[settingKey] = JSON.stringify(list);
        input.value = '';
        this.renderCaisseCategories();
      }
    } catch (err) {
      console.error(err);
      alert('Erreur lors de l’ajout de la catégorie');
    }
  }

  async removeCaisseCategory(type, index) {
    const list = [...this.getCaisseCategories(type)];
    if (index < 0 || index >= list.length) return;
    list.splice(index, 1);

    const settingKey = type === 'entree' ? 'caisse_categories_entree' : 'caisse_categories_sortie';
    const payload = { [settingKey]: JSON.stringify(list) };

    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        if (!this.settings) this.settings = {};
        this.settings[settingKey] = JSON.stringify(list);
        this.renderCaisseCategories();
      }
    } catch (err) {
      console.error(err);
      alert('Erreur lors de la suppression de la catégorie');
    }
  }

  async loadBackupsList() {
    const listContainer = document.getElementById('backupsListContainer');
    if (!listContainer) return;
    try {
      const res = await fetch('/api/backup/list');
      const data = await res.json();
      if (data.success && data.backups && data.backups.length > 0) {
        listContainer.innerHTML = data.backups.map(b => `
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 9px 14px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 8px; font-size: 13px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-file-shield" style="color: #10b981; font-size: 15px;"></i>
              <div>
                <span style="font-weight: 600; color: var(--text-color);">Sauvegarde du ${b.dateStr}</span>
                <span style="color: var(--text-muted); font-size: 11px; margin-left: 6px;">(${b.sizeKb} Ko)</span>
              </div>
            </div>
            <a href="/api/backup/download-archive/${b.filename}" class="btn-secondary" style="padding: 5px 12px; font-size: 11.5px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
              <i class="fa-solid fa-download"></i> Télécharger
            </a>
          </div>
        `).join('');
      } else {
        listContainer.innerHTML = `<div style="color: var(--text-muted); font-size: 12.5px; font-style: italic; padding: 6px 0;">Aucune archive pour le moment. Une sauvegarde se crée automatiquement chaque jour.</div>`;
      }
    } catch (e) {
      console.warn('Erreur chargement archives de sauvegarde:', e);
      listContainer.innerHTML = `<div style="color: var(--text-muted); font-size: 12px;">Impossible de charger la liste des archives.</div>`;
    }
  }

  async saveSettings() {
    return this.saveEtablissementSettings();
  }

  closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  }
}

// Instantiate and start app
const app = new EdumindApp();
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
