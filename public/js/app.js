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
    btn_batch_badges: 'Badges',
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
    login_err_invalid: "Mot de passe incorrect. Veuillez réessayer.",
    dev_credit_label: "Programme réalisé par",
    dev_phone_label: "Téléphone Support",
    tab_apropos: "À propos & Support",
    about_title: "À propos d'EDUMIND & Développeur",
    about_desc: "Système professionnel complet pour la gestion scolaire, cours de soutien, élèves, paiements et présences.",
    about_contact_btn: "Appeler",
    about_whatsapp_btn: "WhatsApp",
    admin_developer_lbl: "Développé par",
    admin_phone_lbl: "Téléphone Support",
    license_title: "Protection & Activation",
    license_subtitle: "Protection du logiciel & Licence — Veloce Craft",
    license_alert_trial_expired: "La période d'essai de 7 jours est terminée. Ce logiciel nécessite une clé de licence pour fonctionner sur cet ordinateur.",
    license_alert_tampered: "Alerte de sécurité : Modification de l'horloge système détectée.",
    hwid_label: "Identifiant matériel unique de cet ordinateur (HWID) :",
    btn_copy: "Copier",
    btn_copied: "Copié !",
    hwid_hint: "Transmettez cet identifiant au développeur Veloce Craft pour obtenir votre clé d'activation permanente.",
    license_key_label: "Entrez votre clé d'activation (License Key) :",
    btn_activate: "Activer la licence",
    btn_activating: "Vérification...",
    btn_close: "Fermer",
    trial_banner_txt: "Version d'essai gratuite : reste {days} jour(s)",
    btn_enter_license: "Activer la licence permanente",
    btn_backup_download: "Télécharger la Sauvegarde Instantanée (.sqlite)",
    btn_restore_sqlite: "Restaurer une base (.sqlite)",
    btn_restore_archive: "Restaurer",
    btn_download_card_pdf: "Télécharger PDF",
    setting_lic_title: "État de la Licence du Logiciel",
    setting_lic_hwid: "Identifiant Machine (HWID)",
    setting_lic_status: "Statut de la licence",
    setting_lic_type: "Type de licence",
    setting_lic_expiry: "Date d'expiration",
    setting_lic_btn_renew: "Entrer une nouvelle clé",
    btn_export_payments: "Télécharger Paiements",
    lbl_payments_count: "opérations affichées",
    lbl_total_collected: "Total collecté",
    modal_export_title: "Télécharger & Exporter les Paiements",
    lbl_select_period_mode: "Période à exporter :",
    opt_single_month: "Mois unique",
    opt_multi_months: "Plusieurs mois",
    opt_range_months: "Plage de dates",
    opt_all_months: "Tous les mois",
    lbl_choose_single_month: "Sélectionnez le mois :",
    lbl_choose_multi_months: "Sélectionnez les mois souhaités :",
    btn_select_all: "Tout sélectionner",
    btn_deselect_all: "Désélectionner",
    lbl_from_month: "Du mois :",
    lbl_to_month: "Au mois :",
    msg_export_all_hint: "L'historique complet de tous les paiements enregistrés sera exporté.",
    lbl_filter_group: "Filtrer par groupe (optionnel) :",
    lbl_filter_method: "Mode de paiement (optionnel) :",
    lbl_count_payments: "Nombre d'opérations",
    lbl_count_students: "Élèves concernés",
    lbl_total_amount: "Total collecté",
    btn_download_excel: "Télécharger Excel (CSV)",
    btn_print_report: "Imprimer Rapport / PDF",
    btn_cancel: "Annuler",
    btn_export_caisse: "Télécharger le Journal de Caisse",
    modal_export_caisse_title: "Télécharger & Exporter le Journal de Caisse",
    lbl_select_caisse_period_mode: "Mode de sélection de la période :",
    opt_all_movements: "Tout le journal",
    opt_range_dates: "Période personnalisée",
    lbl_from_date: "Du :",
    lbl_to_date: "Au :",
    lbl_filter_caisse_type: "Type de flux :",
    opt_all_flux: "Tous les flux (Entrées & Sorties)",
    opt_entrees_only: "Entrées uniquement (+)",
    opt_sorties_only: "Sorties uniquement (-)",
    opt_all_categories: "Toutes les catégories",
    opt_all_methods: "Tous les modes de paiement",
    lbl_count_caisse_ops: "Nombre d'opérations",
    lbl_total_entrees: "Total des entrées",
    lbl_total_sorties: "Total des sorties",
    lbl_solde_net: "Solde Net",
    msg_export_caisse_all_hint: "L'historique complet de tous les flux de trésorerie (entrées et sorties) sera exporté.",
    lbl_caisse_movements_count: "opérations affichées",
    btn_quick_excel: "Excel Rapide",
    modal_card_title: "Carte Scolaire de l'Élève",
    btn_new_enrollment: "Inscrire un élève",
    title_inscriptions: "Inscriptions aux Groupes",
    th_matricule: "MATRICULE",
    th_groupe_cours: "GROUPE / COURS",
    th_matiere_prof: "MATIÈRE & ENSEIGNANT",
    th_tarif: "TARIF NET (DA)",
    lbl_filter_month: "Mois :",
    btn_prev: "Précédent",
    wizard_title: "Inscrire un Élève dans un Groupe",
    wizard_subtitle: "Assistant en 3 étapes simples et rapides",
    wizard_step1_title: "1. Élève",
    wizard_step1_sub: "Rechercher l'élève",
    wizard_step2_title: "2. Niveau",
    wizard_step2_sub: "Niveau scolaire",
    wizard_step3_title: "3. Groupe",
    wizard_step3_sub: "Matière & Confirmation",
    wizard_pane1_heading: "Étape 1 : Rechercher et sélectionner l'élève",
    wizard_pane1_desc: "Tapez le nom, prénom, numéro de matricule ou téléphone pour une recherche instantanée.",
    wizard_pane2_heading: "Étape 2 : Définir le niveau scolaire requis",
    wizard_pane2_desc: "Cliquez sur le niveau pour afficher les groupes disponibles.",
    wizard_selected_student_lbl: "Élève sélectionné :",
    wizard_pane3_heading: "Étape 3 : Choisir la matière et le groupe, puis confirmer",
    wizard_pane3_desc: "Sélectionnez le groupe souhaité, appliquez une remise mensuelle éventuelle et validez.",
    wizard_lbl_reg_date: "Date d'inscription",
    wizard_lbl_discount: "Remise mensuelle (DA)",
    wizard_lbl_free: "Gratuit",
    wizard_lbl_net_price: "Net à payer mensuel",
    wizard_btn_confirm: "Confirmer l'inscription",
    wizard_btn_confirm_pay: "Inscrire & Encaisser",
    settings_update_title: 'Mises à jour Cloud Automatiques',
    settings_update_subtitle: 'Recevez automatiquement les dernières améliorations sans jamais perdre vos données ni réinstaller le programme.',
    btn_check_update: 'Vérifier les mises à jour',
    btn_view_update: 'Mettre à jour maintenant',
    btn_install_update: 'Installer maintenant',
    update_modal_subtitle: 'Mise à jour Cloud Automatique & Sécurisée',
    update_current_ver: 'Version actuelle',
    update_new_ver: 'Nouvelle version',
    update_notes_title: 'Nouveautés & Corrections :',
    update_safety_note: 'Vos données (élèves, paiements, caisse) et votre licence sont 100% conservées.'
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
    btn_batch_badges: 'طباعة البطاقات',
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
    login_err_invalid: "كلمة المرور غير صحيحة، يرجى المحاولة مجدداً",
    dev_credit_label: "البرنامج من طرف",
    dev_phone_label: "الهاتف / الدعم الفني",
    tab_apropos: "حول البرنامج والمطور",
    about_title: "حول نظام EDUMIND والمطور",
    about_desc: "نظام احترافي متكامل لإدارة المدارس ومراكز الدروس الخصوصية، الطلاب، المدفوعات ونقاط الحضور.",
    about_contact_btn: "اتصال هاتفي",
    about_whatsapp_btn: "واتساب",
    admin_developer_lbl: "البرنامج من طرف",
    admin_phone_lbl: "رقم الهاتف / الدعم",
    license_title: "حماية وتفعيل البرنامج",
    license_subtitle: "نظام حماية التراخيص — Veloce Craft",
    license_alert_trial_expired: "انتهت الفترة التجريبية (7 أيام). يتطلب تشغيل هذا البرنامج على هذا الحاسوب تفعيل كود الترخيص.",
    license_alert_tampered: "تنبيه أمني: تم رصد تغيير غير معتاد في تاريخ وساعة النظام.",
    hwid_label: "معرّف هذا الحاسوب الفريد (Hardware ID) :",
    btn_copy: "نسخ",
    btn_copied: "تم النسخ !",
    hwid_hint: "قم بنسخ هذا المعرّف وإرساله للمطور Veloce Craft للحصول على كود التفعيل الدائم الخاص بجهازك.",
    license_key_label: "أدخل كود التفعيل (License Key) :",
    btn_activate: "تفعيل البرنامج الآن",
    btn_activating: "جاري التحقق...",
    btn_close: "إغلاق",
    trial_banner_txt: "نسخة تجريبية مجانية : متبقي {days} يوم",
    btn_enter_license: "تفعيل الترخيص الدائم",
    btn_backup_download: "تحميل نسخة احتياطية فورية (.sqlite)",
    btn_restore_sqlite: "استرجاع قاعدة بيانات (.sqlite)",
    btn_restore_archive: "استرجاع",
    btn_download_card_pdf: "تحميل البطاقة (PDF)",
    setting_lic_title: "حالة ترخيص وتفعيل البرنامج",
    setting_lic_hwid: "معرّف الجهاز الفريد (HWID)",
    setting_lic_status: "حالة الترخيص",
    setting_lic_type: "نوع الترخيص",
    setting_lic_expiry: "تاريخ انتهاء الترخيص",
    setting_lic_btn_renew: "إدخال كود ترخيص جديد",
    btn_export_payments: "تحميل المدفوعات",
    lbl_payments_count: "عملية معروضة",
    lbl_total_collected: "إجمالي المداخيل",
    modal_export_title: "تحميل وتصدير سجل المدفوعات",
    lbl_select_period_mode: "طريقة تحديد الفترة للتصدير :",
    opt_single_month: "شهر محدد",
    opt_multi_months: "عدة أشهر",
    opt_range_months: "مجال زمني",
    opt_all_months: "جميع الأشهر",
    lbl_choose_single_month: "اختر الشهر المطلوب :",
    lbl_choose_multi_months: "حدد الأشهر المطلوبة للتصدير :",
    btn_select_all: "تحديد الكل",
    btn_deselect_all: "إلغاء التحديد",
    lbl_from_month: "من شهر :",
    lbl_to_month: "إلى شهر :",
    msg_export_all_hint: "سيتم استخراج وتصدير السجل الكامل لجميع عمليات الدفع المسجلة في النظام.",
    lbl_filter_group: "تصفية حسب الفوج (اختياري) :",
    lbl_filter_method: "وسيلة الدفع (اختياري) :",
    lbl_count_payments: "عدد العمليات",
    lbl_count_students: "التلاميذ المعنيون",
    lbl_total_amount: "إجمالي المبالغ",
    btn_download_excel: "تحميل ملف Excel",
    btn_print_report: "طباعة تقرير PDF",
    btn_cancel: "إلغاء",
    btn_export_caisse: "تحميل سجل الخزينة",
    modal_export_caisse_title: "تحميل وتصدير سجل الخزينة والصندوق",
    lbl_select_caisse_period_mode: "طريقة تحديد الفترة للتصدير :",
    opt_all_movements: "كامل السجل",
    opt_range_dates: "مجال زمني / تواريخ",
    lbl_from_date: "من تاريخ :",
    lbl_to_date: "إلى تاريخ :",
    lbl_filter_caisse_type: "نوع الحركة :",
    opt_all_flux: "كل الحركات (المداخيل والمصاريف)",
    opt_entrees_only: "مداخيل فقط (+)",
    opt_sorties_only: "مصاريف فقط (-)",
    opt_all_categories: "كل التصنيفات",
    opt_all_methods: "كل الوسائل",
    lbl_count_caisse_ops: "عدد الحركات",
    lbl_total_entrees: "إجمالي المداخيل",
    lbl_total_sorties: "إجمالي المصاريف",
    lbl_solde_net: "الرصيد الصافي",
    msg_export_caisse_all_hint: "سيتم استخراج وتصدير السجل الكامل لجميع حركات الصندوق والخزينة (مداخيل ومصاريف) المسجلة في النظام.",
    lbl_caisse_movements_count: "حركات معروضة",
    btn_quick_excel: "Excel السريع",
    modal_card_title: "بطاقة التلميذ المدرسية",
    btn_new_enrollment: "تسجيل تلميذ في فوج",
    title_inscriptions: "تسجيلات التلاميذ في الأفواج",
    th_matricule: "رقم القيد",
    th_groupe_cours: "الفوج الدراسي",
    th_matiere_prof: "المادة والأستاذ",
    th_tarif: "السعر الصافي (دج)",
    lbl_filter_month: "الشهر :",
    btn_prev: "السابق",
    wizard_title: "تسجيل تلميذ في فوج دراسي",
    wizard_subtitle: "خطوات متسلسلة وسهلة لإتمام عملية التسجيل",
    wizard_step1_title: "1. التلميذ",
    wizard_step1_sub: "اختيار التلميذ",
    wizard_step2_title: "2. المستوى",
    wizard_step2_sub: "المستوى الدراسي",
    wizard_step3_title: "3. المادة والفوج",
    wizard_step3_sub: "الفوج والتأكيد",
    wizard_pane1_heading: "الخطوة الأولى: ابحث عن التلميذ واختره",
    wizard_pane1_desc: "اكتب اسم التلميذ، لقبه، رقم القيد، أو رقم الهاتف للاختيار السريع.",
    wizard_pane2_heading: "الخطوة الثانية: حدد المستوى الدراسي المطلوب",
    wizard_pane2_desc: "اختر المستوى الدراسي لعرض الأفواج المتاحة الخاصة بهذا المستوى فقط.",
    wizard_selected_student_lbl: "التلميذ المختار :",
    wizard_pane3_heading: "الخطوة الثالثة: اختر المادة والفوج الدراسي وأكد التسجيل",
    wizard_pane3_desc: "اختر الفوج المناسب وحدد التخفيض الشهري إن وجد ثم أكد التسجيل.",
    wizard_lbl_reg_date: "تاريخ التسجيل",
    wizard_lbl_discount: "تخفيض شهري (دج)",
    wizard_lbl_free: "مجاني",
    wizard_lbl_net_price: "المبلغ الصافي شهرياً",
    wizard_btn_confirm: "تأكيد التسجيل",
    wizard_btn_confirm_pay: "تسجيل ودفع فوري",
    settings_update_title: 'التحديثات السحابية التلقائية',
    settings_update_subtitle: 'احصل على آخر التحسينات بنقرة زر دون فقدان بياناتك أو إعادة تثبيت البرنامج.',
    btn_check_update: 'فحص التحديثات السحابية',
    btn_view_update: 'تحديث البرنامج الآن',
    btn_install_update: 'تثبيت التحديث الآن',
    update_modal_subtitle: 'تحديث سحابي آمن وتلقائي',
    update_current_ver: 'الإصدار الحالي',
    update_new_ver: 'الإصدار الجديد',
    update_notes_title: 'الجديد في هذا التحديث :',
    update_safety_note: 'بيانات المدرسة (الطلاب، المدفوعات، الصندوق) والترخيص محفوظة ومحمية 100%.'
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

    // Batch Badges Selection State
    this.selectedStudentIds = new Set();
    this.batchCardTheme = 'blue';
    this.batchModalSelectedIds = new Set();
    this.batchModalAllStudents = [];

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

  debounce(func, wait = 300) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  showToast(message, type = 'info') {
    let container = document.getElementById('edumindToastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'edumindToastContainer';
      container.className = 'edumind-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `edumind-toast toast-${type}`;
    
    let icon = 'fa-circle-info';
    if (type === 'success') icon = 'fa-circle-check';
    else if (type === 'warning') icon = 'fa-triangle-exclamation';
    else if (type === 'error') icon = 'fa-circle-xmark';

    toast.innerHTML = `
      <i class="fa-solid ${icon}"></i>
      <span class="toast-message">${this.escapeHtml(message)}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3500);
  }

  async init() {
    this.initSidebar();
    this.setupEventListeners();
    this.applyTheme();
    this.applyLanguage();
    this.updateGreetingDate();

    // Check License & 3-Day Trial Status
    const lic = await this.checkLicense();
    if (lic && !lic.isLicensed) {
      this.openActivationModal(false);
      return;
    }

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

    // Check for Cloud Updates in background (silent)
    this.checkForCloudUpdates(true);
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

  // ==========================================================================
  // HARDWARE LOCK, TRIAL & LICENSING SYSTEM (VELOCE CRAFT)
  // ==========================================================================
  async checkLicense() {
    try {
      const res = await fetch('/api/license/status');
      const data = await res.json();
      if (data.success) {
        this.licenseStatus = data;
        this.updateLicenseUI(data);
        return data;
      }
      return null;
    } catch (err) {
      console.error('Erreur de vérification de licence :', err);
      return null;
    }
  }

  updateLicenseUI(status) {
    if (!status) return;

    // 1. Update HWID displays
    const hwidEl = document.getElementById('hwidDisplay');
    if (hwidEl && status.hwid) {
      hwidEl.textContent = status.hwid;
    }
    const settingHwidEl = document.getElementById('settingLicHwid');
    if (settingHwidEl && status.hwid) {
      settingHwidEl.textContent = status.hwid;
    }

    // 2. Pre-fill WhatsApp link with HWID
    const btnWa = document.getElementById('btnWhatsappLic');
    if (btnWa && status.hwid) {
      const waMsg = encodeURIComponent(
        `Bonjour Veloce Craft, voici mon HWID pour l'activation EDUMIND :\n${status.hwid}`
      );
      btnWa.href = `https://wa.me/213552225150?text=${waMsg}`;
    }

    // 3. Trial Banner Handling
    const banner = document.getElementById('trialWarningBanner');
    const bannerText = document.getElementById('trialBannerText');
    if (status.isTrial && status.status === 'trial') {
      if (banner) banner.style.display = 'flex';
      if (bannerText) {
        const isAr = this.lang === 'ar';
        const dict = i18n[this.lang] || i18n.fr;
        const msgTpl = dict.trial_banner_txt || (isAr ? "نسخة تجريبية مجانية : متبقي {days} يوم" : "Version d'essai gratuite : reste {days} jour(s)");
        bannerText.textContent = msgTpl.replace('{days}', status.trialDaysRemaining);
      }
    } else {
      if (banner) banner.style.display = 'none';
    }

    // 4. Modal Lock Handling
    const modal = document.getElementById('licenseModal');
    const alertMsg = document.getElementById('licenseAlertMsg');
    const cancelBtn = document.getElementById('btnCancelActivation');

    if (!status.isLicensed) {
      if (modal) modal.style.display = 'flex';
      if (cancelBtn) cancelBtn.style.display = 'none';

      if (alertMsg) {
        if (status.status === 'tampered') {
          alertMsg.textContent = i18n[this.lang]?.license_alert_tampered || 'Modification de l\'heure système détectée.';
        } else {
          alertMsg.textContent = i18n[this.lang]?.license_alert_trial_expired || status.message;
        }
      }
    } else {
      if (!this._activationModalExplicitlyOpen && modal) {
        modal.style.display = 'none';
      }
    }

    // 5. Update Settings Information Card
    const licBadgeEl = document.getElementById('settingLicStatusBadge');
    const licTypeEl = document.getElementById('settingLicType');
    const licExpiryEl = document.getElementById('settingLicExpiry');
    if (licBadgeEl) {
      if (status.status === 'licensed') {
        licBadgeEl.className = 'badge-license active';
        licBadgeEl.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${this.lang === 'ar' ? 'ترخيص مفعل' : 'Licence Active'}`;
      } else if (status.isTrial) {
        licBadgeEl.className = 'badge-license trial';
        licBadgeEl.innerHTML = `<i class="fa-solid fa-hourglass-half"></i> ${this.lang === 'ar' ? `فترة تجريبية (${status.trialDaysRemaining} أيام)` : `Période d'essai (${status.trialDaysRemaining}j)`}`;
      } else {
        licBadgeEl.className = 'badge-license expired';
        licBadgeEl.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${this.lang === 'ar' ? 'منتهي الصلاحية' : 'Expirée'}`;
      }
    }
    if (licTypeEl) {
      licTypeEl.textContent = status.licenseType === 'lifetime'
        ? (this.lang === 'ar' ? 'ترخيص دائم (مدى الحياة)' : 'Permanente (À vie)')
        : (status.licenseType === 'annual' ? (this.lang === 'ar' ? 'ترخيص سنوي' : 'Annuelle') : (this.lang === 'ar' ? 'نسخة تجريبية 7 أيام' : 'Essai 7 jours'));
    }
    if (licExpiryEl) {
      licExpiryEl.textContent = status.licenseType === 'lifetime' || !status.expiryDate
        ? (this.lang === 'ar' ? 'دائم (بدون انتهاء)' : 'Illimité (À vie)')
        : new Date(status.expiryDate).toLocaleDateString(this.lang === 'ar' ? 'ar-DZ' : 'fr-FR');
    }
  }

  openActivationModal(allowCancel = false) {
    this._activationModalExplicitlyOpen = true;
    const modal = document.getElementById('licenseModal');
    const cancelBtn = document.getElementById('btnCancelActivation');
    const errBox = document.getElementById('activationErrorAlert');
    const keyInput = document.getElementById('inputLicenseKey');
    if (modal) modal.style.display = 'flex';
    if (cancelBtn) cancelBtn.style.display = allowCancel ? 'inline-flex' : 'none';
    if (errBox) errBox.style.display = 'none';
    if (keyInput) {
      keyInput.value = '';
      setTimeout(() => keyInput.focus(), 150);
    }
    if (this.licenseStatus) {
      this.updateLicenseUI(this.licenseStatus);
    } else {
      this.checkLicense();
    }
  }

  closeActivationModal() {
    this._activationModalExplicitlyOpen = false;
    const modal = document.getElementById('licenseModal');
    if (modal) modal.style.display = 'none';
  }

  copyHWID() {
    const hwidText = document.getElementById('hwidDisplay')?.textContent;
    if (!hwidText) return;
    navigator.clipboard.writeText(hwidText).then(() => {
      const btn = document.getElementById('btnCopyHWID');
      if (btn) {
        const origHtml = btn.innerHTML;
        const dict = i18n[this.lang] || i18n.fr;
        btn.innerHTML = `<i class="fa-solid fa-check"></i> <span>${dict.btn_copied || 'Copié !'}</span>`;
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = origHtml;
          btn.classList.remove('copied');
        }, 2500);
      }
    }).catch(() => {
      alert(hwidText);
    });
  }

  async submitActivation() {
    const keyInput = document.getElementById('inputLicenseKey');
    const errBox = document.getElementById('activationErrorAlert');
    const errMsg = document.getElementById('activationErrorMsg');
    const submitBtn = document.getElementById('btnSubmitActivation');

    const key = keyInput?.value?.trim();
    if (!key) return;

    if (errBox) errBox.style.display = 'none';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> <span>${i18n[this.lang]?.btn_activating || 'Vérification...'}</span>`;
    }

    try {
      const res = await fetch('/api/license/activate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key })
      });
      const data = await res.json();

      if (data.success) {
        this.playChime('success');
        this.licenseStatus = data.status;
        this.closeActivationModal();
        this.updateLicenseUI(data.status);
        alert(data.message || (this.lang === 'ar' ? 'تم تفعيل الترخيص بنجاح !' : 'Licence activée avec succès !'));
        location.reload();
      } else {
        this.playChime('error');
        if (errBox && errMsg) {
          errMsg.textContent = data.error || (this.lang === 'ar' ? 'كود التفعيل غير صالح' : 'Clé de licence non valide');
          errBox.style.display = 'flex';
        }
      }
    } catch (err) {
      this.playChime('error');
      if (errBox && errMsg) {
        errMsg.textContent = this.lang === 'ar' ? 'تعذر الاتصال بالخادم' : 'Erreur de communication avec le serveur';
        errBox.style.display = 'flex';
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="fa-solid fa-key"></i> <span>${i18n[this.lang]?.btn_activate || 'Activer la licence'}</span>`;
      }
    }
  }

  // ==========================================================================
  // CLOUD AUTO-UPDATER SYSTEM (VELOCE CRAFT)
  // ==========================================================================
  async checkForCloudUpdates(silent = false) {
    const btn = document.getElementById('btnManualCheckUpdate');
    const resultArea = document.getElementById('settingUpdateResultArea');
    const currentBadge = document.getElementById('settingCurrentVersionBadge');
    const banner = document.getElementById('updateAvailableBanner');
    const bannerText = document.getElementById('updateBannerText');

    if (!silent && btn) {
      btn.disabled = true;
      btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> <span>${this.lang === 'ar' ? 'جاري الفحص...' : 'Vérification...'}</span>`;
    }

    try {
      const res = await fetch('/api/updates/check');
      const data = await res.json();

      if (data.currentVersion && currentBadge) {
        currentBadge.textContent = 'v' + data.currentVersion;
      }

      if (data.success && data.updateAvailable) {
        this.availableUpdate = data;

        // Show Top Banner
        if (banner) {
          banner.style.display = 'flex';
          if (bannerText) {
            bannerText.textContent = this.lang === 'ar'
              ? `🚀 يتوفر تحديث جديد للبرنامج (v${data.remoteVersion}) مع ميزات وتحسينات جديدة!`
              : `🚀 Une nouvelle mise à jour (v${data.remoteVersion}) est disponible avec des améliorations !`;
          }
        }

        // Show Card in Settings
        if (resultArea) {
          resultArea.style.display = 'block';
          resultArea.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
              <div>
                <span style="display: inline-flex; align-items: center; gap: 6px; color: #10b981; font-weight: 700; font-size: 14px;">
                  <i class="fa-solid fa-sparkles"></i> ${this.lang === 'ar' ? 'تحديث جديد متوفر :' : 'Nouvelle version disponible :'} <strong>v${data.remoteVersion}</strong>
                </span>
                <p style="margin: 4px 0 0 0; font-size: 13px; color: var(--text-color);">
                  ${this.lang === 'ar' ? (data.notes_ar || data.notes) : data.notes}
                </p>
              </div>
              <button type="button" class="btn-primary" onclick="app.openUpdateModal()" style="background: linear-gradient(135deg, #0ea5e9, #2563eb); font-weight: 700; padding: 8px 16px; border-radius: 8px;">
                <i class="fa-solid fa-bolt"></i> ${this.lang === 'ar' ? 'تثبيت التحديث الآن' : 'Installer la mise à jour'}
              </button>
            </div>
          `;
        }

        // If not silent, open modal directly
        if (!silent) {
          this.openUpdateModal();
        }
      } else {
        if (banner) banner.style.display = 'none';

        if (!silent) {
          if (resultArea) {
            resultArea.style.display = 'block';
            resultArea.innerHTML = `
              <div style="color: #10b981; font-size: 13.5px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                <i class="fa-solid fa-circle-check"></i>
                <span>${this.lang === 'ar' ? `برنامجك في أحدث إصدار بالفعل (v${data.currentVersion})` : `Votre logiciel EDUMIND est à jour avec la dernière version (v${data.currentVersion}).`}</span>
              </div>
            `;
          }
          this.showToast(this.lang === 'ar' ? `البرنامج محدث إلى آخر إصدار (v${data.currentVersion})` : `EDUMIND est à jour (v${data.currentVersion})`, 'success');
        }
      }
    } catch (err) {
      console.warn('[Auto-Updater] Erreur lors de la vérification des mises à jour:', err.message);
      if (!silent) {
        if (resultArea) {
          resultArea.style.display = 'block';
          resultArea.innerHTML = `
            <div style="color: #ef4444; font-size: 13px; display: flex; align-items: center; gap: 8px;">
              <i class="fa-solid fa-triangle-exclamation"></i>
              <span>${this.lang === 'ar' ? 'تعذر الاتصال بخادم التحديثات (تأكد من الاتصال بالإنترنت).' : 'Impossible de contacter le serveur de mise à jour (vérifiez la connexion internet).'}</span>
            </div>
          `;
        }
      }
    } finally {
      if (!silent && btn) {
        btn.disabled = false;
        btn.innerHTML = `<i class="fa-solid fa-rotate"></i> <span>${i18n[this.lang]?.btn_check_update || 'Vérifier les mises à jour'}</span>`;
      }
    }
  }

  openUpdateModal() {
    if (!this.availableUpdate) return;
    const modal = document.getElementById('cloudUpdateModal');
    const curVerEl = document.getElementById('updCurrentVer');
    const newVerEl = document.getElementById('updNewVer');
    const notesEl = document.getElementById('updChangelogText');
    const progressBox = document.getElementById('updateProgressBox');
    const infoContainer = document.getElementById('updateInfoContainer');
    const startBtn = document.getElementById('btnStartCloudUpdate');
    const cancelBtn = document.getElementById('btnCancelUpdate');

    if (curVerEl) curVerEl.textContent = 'v' + this.availableUpdate.currentVersion;
    if (newVerEl) newVerEl.textContent = 'v' + this.availableUpdate.remoteVersion;
    if (notesEl) {
      notesEl.textContent = this.lang === 'ar' 
        ? (this.availableUpdate.notes_ar || this.availableUpdate.notes) 
        : this.availableUpdate.notes;
    }

    if (progressBox) progressBox.style.display = 'none';
    if (infoContainer) infoContainer.style.display = 'block';
    if (startBtn) {
      startBtn.disabled = false;
      startBtn.style.display = 'inline-flex';
    }
    if (cancelBtn) cancelBtn.style.display = 'inline-flex';

    if (modal) modal.style.display = 'flex';
  }

  closeUpdateModal() {
    const modal = document.getElementById('cloudUpdateModal');
    if (modal) modal.style.display = 'none';
  }

  async applyCloudUpdate() {
    if (!this.availableUpdate || !this.availableUpdate.zipUrl) return;

    const progressBox = document.getElementById('updateProgressBox');
    const statusText = document.getElementById('updateProgressStatusText');
    const progressBar = document.getElementById('updateProgressBar');
    const startBtn = document.getElementById('btnStartCloudUpdate');
    const cancelBtn = document.getElementById('btnCancelUpdate');

    if (startBtn) startBtn.style.display = 'none';
    if (cancelBtn) cancelBtn.style.display = 'none';
    if (progressBox) progressBox.style.display = 'block';

    const isAr = this.lang === 'ar';

    try {
      // Step 1: Backup
      if (statusText) statusText.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> ${isAr ? '1/3 - جاري إنشاء نسخة احتياطية من قاعدة البيانات...' : '1/3 - Sauvegarde automatique de sécurité SQLite...'}`;
      if (progressBar) progressBar.style.width = '30%';

      await new Promise(r => setTimeout(r, 600));

      // Step 2: Download & Extract
      if (statusText) statusText.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> ${isAr ? '2/3 - جاري تحميل وتثبيت التحديث بأمان...' : '2/3 - Téléchargement et application de la mise à jour...'}`;
      if (progressBar) progressBar.style.width = '75%';

      const res = await fetch('/api/updates/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ zipUrl: this.availableUpdate.zipUrl })
      });
      const data = await res.json();

      if (!data.success) {
        throw new Error(data.error || 'Erreur lors de l\'installation du patch.');
      }

      // Step 3: Success & Restart
      if (progressBar) progressBar.style.width = '100%';
      if (statusText) {
        statusText.style.color = '#10b981';
        statusText.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${isAr ? `تم التحديث بنجاح إلى v${data.newVersion}! جاري إعادة التشغيل...` : `Mise à jour v${data.newVersion} installée avec succès ! Redémarrage...`}`;
      }

      this.playChime('success');

      // Trigger restart
      setTimeout(async () => {
        try {
          await fetch('/api/updates/restart', { method: 'POST' });
        } catch(e) {}
        setTimeout(() => location.reload(), 1200);
      }, 1500);

    } catch (err) {
      this.playChime('error');
      if (statusText) {
        statusText.style.color = '#ef4444';
        statusText.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${isAr ? 'فشل التحديث : ' : 'Échec de la mise à jour : '} ${err.message}`;
      }
      if (cancelBtn) {
        cancelBtn.style.display = 'inline-flex';
        cancelBtn.textContent = isAr ? 'إغلاق' : 'Fermer';
      }
    }
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
          try { this.revenueChart.resize(); } catch (e) { }
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

    // Global Keyboard: Escape closes active modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModals();
      }
    });

    // Click outside modal content closes the modal
    document.addEventListener('click', (e) => {
      if (e.target && e.target.classList && e.target.classList.contains('modal-overlay')) {
        this.closeModals();
      }
    });

    // Debounced student and teacher search to avoid freezing the database
    const studentSearchInput = document.getElementById('searchStudentInput');
    if (studentSearchInput) {
      studentSearchInput.oninput = this.debounce(() => this.loadStudents(), 300);
    }

    const teacherSearchInput = document.getElementById('searchTeacherInput');
    if (teacherSearchInput) {
      teacherSearchInput.oninput = this.debounce((e) => {
        this.filterTeachers(teacherSearchInput.value);
      }, 250);
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

    // Inscriptions View & Wizard placeholders / selects
    const searchEnroll = document.getElementById('searchEnrollmentsTableInput');
    if (searchEnroll) {
      searchEnroll.placeholder = isAr ? 'بحث بالتلميذ، رقم القيد، الهاتف، الفوج، المادة، الأستاذ...' : 'Rechercher par élève, matricule, tél, groupe, matière, prof...';
    }
    const filterEnrollGroup = document.getElementById('filterEnrollmentGroup');
    if (filterEnrollGroup && filterEnrollGroup.options.length > 0 && filterEnrollGroup.options[0].value === 'all') {
      filterEnrollGroup.options[0].text = isAr ? 'كل الأفواج' : 'Tous les groupes';
    }
    const filterEnrollStatus = document.getElementById('filterEnrollmentStatus');
    if (filterEnrollStatus && filterEnrollStatus.options.length >= 3) {
      filterEnrollStatus.options[0].text = isAr ? 'كل الحالات' : 'Tous statuts';
      filterEnrollStatus.options[1].text = isAr ? 'النشطة فقط' : 'Actifs';
      filterEnrollStatus.options[2].text = isAr ? 'الملغاة' : 'Annulés';
    }
    const wizardStudentSearch = document.getElementById('wizardStudentSearchInput');
    if (wizardStudentSearch) {
      wizardStudentSearch.placeholder = isAr ? 'ابحث باسم التلميذ أو لقبه أو رقمه...' : 'Rechercher par nom, prénom ou matricule...';
    }
    if (this.enrollWizard?.step) {
      this.goToEnrollmentStep(this.enrollWizard.step);
    }
    if (this.currentView === 'inscriptions' && this.inscriptionsList) {
      const total = this.inscriptionsList.length;
      const active = this.inscriptionsList.filter(e => e.status === 'active').length;
      const totalBadge = document.getElementById('enrollmentsTotalBadge');
      if (totalBadge) totalBadge.textContent = isAr ? `${total} تسجيل` : `${total} Inscription(s)`;
      const activeBadge = document.getElementById('enrollmentsActiveBadge');
      if (activeBadge) activeBadge.textContent = isAr ? `${active} نشط` : `${active} Active(s)`;
      this.populateEnrollmentMonthFilter();
      this.filterEnrollmentsTable();
    }

    const btnWizardPrevEl = document.getElementById('btnWizardPrev');
    if (btnWizardPrevEl) {
      const prevIcon = btnWizardPrevEl.querySelector('i');
      if (prevIcon) {
        prevIcon.className = `fa-solid ${isAr ? 'fa-arrow-right' : 'fa-arrow-left'}`;
        prevIcon.style.marginRight = isAr ? '0' : '8px';
        prevIcon.style.marginLeft = isAr ? '8px' : '0';
      }
    }
    const btnWizardNextEl = document.getElementById('btnWizardNext');
    if (btnWizardNextEl) {
      const nextIcon = btnWizardNextEl.querySelector('i');
      if (nextIcon) {
        nextIcon.className = `fa-solid ${isAr ? 'fa-arrow-left' : 'fa-arrow-right'}`;
        nextIcon.style.marginRight = isAr ? '8px' : '0';
        nextIcon.style.marginLeft = isAr ? '0' : '8px';
      }
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

  switchView(viewName, forceReload = false) {
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

    this._lastViewLoads = this._lastViewLoads || {};
    const now = Date.now();
    const lastLoad = this._lastViewLoads[viewName] || 0;
    // Always reload pointage so live status is accurate; buffer other views for 15s
    const shouldReload = forceReload || viewName === 'pointage' || (now - lastLoad > 15000);

    if (!shouldReload) {
      return; // Instant view toggle with zero network lag
    }
    this._lastViewLoads[viewName] = now;

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
            <td colspan="12" style="text-align: center; color: var(--text-muted); padding: 40px;">
              <i class="fa-solid fa-user-slash" style="font-size: 32px; margin-bottom: 10px; opacity: 0.5; display: block;"></i>
              ${this.lang === 'ar' ? 'لم يتم العثور على أي تلميذ مطابق' : 'Aucun élève trouvé'}
            </td>
          </tr>
        `;
        this.updateBatchActionBar();
        return;
      }

      tbody.innerHTML = this.students.map(s => {
        const avatarSvg = this.getStudentAvatarSvg(s.gender);
        const billed = Number(s.total_billed || 0);
        const paid = Number(s.total_paid || 0);
        const remaining = Number(s.remaining_due || 0);
        const isActive = s.active === 1;
        const isChecked = this.selectedStudentIds && this.selectedStudentIds.has(s.id);

        return `
          <tr>
            <td style="text-align: center; vertical-align: middle;">
              <input type="checkbox" class="student-select-chk edumind-chk" value="${s.id}" ${isChecked ? 'checked' : ''} onchange="app.onStudentCheckChange(${s.id}, this.checked)">
            </td>
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
      this.updateBatchActionBar();
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

  // =========================================================================
  // BATCH BADGES & TABLE SELECTION SYSTEM (IMPRESSION GROUPÉE DES BADGES)
  // =========================================================================
  onStudentCheckChange(id, checked) {
    id = Number(id);
    if (checked) {
      this.selectedStudentIds.add(id);
    } else {
      this.selectedStudentIds.delete(id);
    }
    this.updateBatchActionBar();
  }

  toggleSelectAllStudents(checked) {
    if (!this.students || this.students.length === 0) return;
    if (checked) {
      this.students.forEach(s => this.selectedStudentIds.add(s.id));
    } else {
      this.students.forEach(s => this.selectedStudentIds.delete(s.id));
    }
    document.querySelectorAll('.student-select-chk').forEach(chk => {
      chk.checked = checked;
    });
    this.updateBatchActionBar();
  }

  updateBatchActionBar() {
    const count = this.selectedStudentIds.size;
    const bar = document.getElementById('studentsBatchActionBar');
    const countEl = document.getElementById('batchSelectedCount');
    const textEl = document.getElementById('batchSelectedText');
    const printTextEl = document.getElementById('batchPrintBtnText');
    const isAr = this.lang === 'ar';

    if (countEl) countEl.textContent = count;
    if (textEl) {
      textEl.textContent = isAr 
        ? (count === 1 ? 'تلميذ محدد' : 'تلاميذ محددين') 
        : (count === 1 ? 'élève sélectionné' : 'élèves sélectionnés');
    }
    if (printTextEl) {
      printTextEl.textContent = isAr 
        ? `طباعة البطاقات (${count})` 
        : `Imprimer les badges (${count})`;
    }

    if (bar) {
      if (count > 0) {
        bar.style.display = 'flex';
      } else {
        bar.style.display = 'none';
      }
    }

    // Sync header checkbox
    const allChk = document.getElementById('selectAllStudentsCheckbox');
    if (allChk) {
      if (this.students && this.students.length > 0) {
        const allSelected = this.students.every(s => this.selectedStudentIds.has(s.id));
        const someSelected = this.students.some(s => this.selectedStudentIds.has(s.id));
        allChk.checked = allSelected;
        allChk.indeterminate = someSelected && !allSelected;
      } else {
        allChk.checked = false;
        allChk.indeterminate = false;
      }
    }
  }

  clearSelectedStudents() {
    this.selectedStudentIds.clear();
    document.querySelectorAll('.student-select-chk').forEach(chk => {
      chk.checked = false;
    });
    const allChk = document.getElementById('selectAllStudentsCheckbox');
    if (allChk) {
      allChk.checked = false;
      allChk.indeterminate = false;
    }
    this.updateBatchActionBar();
  }

  printSelectedBadges() {
    if (this.selectedStudentIds.size === 0) {
      const isAr = this.lang === 'ar';
      this.showToast(isAr ? 'يرجى تحديد تلميذ واحد على الأقل' : 'Veuillez sélectionner au moins un élève', 'warning');
      return;
    }
    this.openBatchBadgesModal(Array.from(this.selectedStudentIds));
  }

  printAllBadges() {
    this.openBatchBadgesModal();
  }

  async openBatchBadgesModal(preSelectedIds = null) {
    const isAr = this.lang === 'ar';

    // 1. Fetch fresh list of active students or use cached
    try {
      const res = await fetch('/api/students?status=active');
      const data = await res.json();
      if (data.success && data.students) {
        this.batchModalAllStudents = data.students;
      } else {
        this.batchModalAllStudents = this.students || [];
      }
    } catch (e) {
      this.batchModalAllStudents = this.students || [];
    }

    // 2. Populate Level and Group filter dropdowns
    const levelSelect = document.getElementById('batchBadgesFilterLevel');
    if (levelSelect) {
      levelSelect.innerHTML = `<option value="">${isAr ? '-- كل المستويات --' : '-- Tous les niveaux --'}</option>` +
        (this.levels || []).map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
    }

    const groupSelect = document.getElementById('batchBadgesFilterGroup');
    if (groupSelect) {
      groupSelect.innerHTML = `<option value="">${isAr ? '-- كل الأفواج --' : '-- Tous les groupes --'}</option>` +
        (this.groups || []).map(g => `<option value="${g.id}">${this.escapeHtml(g.name)} (${this.escapeHtml(g.subject_name || '')})</option>`).join('');
    }

    // 3. Reset filters
    const searchInput = document.getElementById('batchBadgesSearchInput');
    if (searchInput) searchInput.value = '';
    if (levelSelect) levelSelect.value = '';
    if (groupSelect) groupSelect.value = '';

    // 4. Initialize selected set
    this.batchModalSelectedIds = new Set();
    if (preSelectedIds && preSelectedIds.length > 0) {
      preSelectedIds.forEach(id => this.batchModalSelectedIds.add(Number(id)));
    } else if (this.selectedStudentIds && this.selectedStudentIds.size > 0) {
      this.selectedStudentIds.forEach(id => this.batchModalSelectedIds.add(Number(id)));
    } else {
      // Default: select all active students so one-click printing is immediately available
      this.batchModalAllStudents.forEach(s => this.batchModalSelectedIds.add(s.id));
    }

    // 5. Render list and counters
    this.setBatchTheme(this.batchCardTheme || 'blue');
    await this.filterBatchBadgesList();

    // 6. Show Modal
    const modal = document.getElementById('modalBatchBadges');
    if (modal) modal.classList.add('active');
  }

  async filterBatchBadgesList() {
    const isAr = this.lang === 'ar';
    const levelId = document.getElementById('batchBadgesFilterLevel')?.value;
    const groupId = document.getElementById('batchBadgesFilterGroup')?.value;
    const search = (document.getElementById('batchBadgesSearchInput')?.value || '').trim().toLowerCase();

    let filtered = [...this.batchModalAllStudents];

    if (levelId) {
      filtered = filtered.filter(s => String(s.level_id) === String(levelId));
    }

    if (search) {
      filtered = filtered.filter(s => {
        const full = `${s.first_name || ''} ${s.last_name || ''} ${s.matricule || ''} ${s.phone || ''}`.toLowerCase();
        return full.includes(search);
      });
    }

    // If group filter is selected, filter by enrolled group students
    if (groupId) {
      try {
        const res = await fetch(`/api/groups/${groupId}/students`);
        const data = await res.json();
        if (data.success && data.students) {
          const groupStudentIds = new Set(data.students.map(item => item.student_id));
          filtered = filtered.filter(s => groupStudentIds.has(s.id));
        }
      } catch (e) {
        console.error('Failed to filter by group:', e);
      }
    }

    this._currentFilteredBatchStudents = filtered;

    const container = document.getElementById('batchBadgesStudentsContainer');
    const countEl = document.getElementById('batchListCount');
    if (countEl) countEl.textContent = filtered.length;

    if (!container) return;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 30px; font-size: 13px;">
          <i class="fa-solid fa-users-slash" style="font-size: 24px; margin-bottom: 8px; opacity: 0.5; display: block;"></i>
          ${isAr ? 'لا يوجد أي تلميذ مطابق للمعايير المحددة' : 'Aucun élève ne correspond aux critères'}
        </div>
      `;
      this.updateBatchModalCounters();
      return;
    }

    container.innerHTML = filtered.map(s => {
      const isChecked = this.batchModalSelectedIds.has(s.id);
      const fullName = `${s.first_name || ''} ${s.last_name || ''}`.trim();
      const matricule = s.matricule || `ETU-${String(s.id).padStart(4, '0')}`;
      const level = s.level_name || '—';
      const phone = s.phone || s.parent_phone || '—';

      return `
        <div class="batch-student-row ${isChecked ? 'selected' : ''}" id="batchRow_${s.id}" onclick="app.toggleBatchModalStudent(${s.id})">
          <input type="checkbox" class="edumind-chk" id="batchChk_${s.id}" ${isChecked ? 'checked' : ''} onclick="event.stopPropagation(); app.toggleBatchModalStudent(${s.id})">
          <div style="width: 32px; height: 32px; border-radius: 6px; background: rgba(59, 130, 246, 0.12); display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0;">
            ${(s.gender || '').toUpperCase() === 'F' ? '👧' : '👦'}
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="font-weight: 700; font-size: 13px; color: var(--text-heading); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              ${this.escapeHtml(fullName)}
            </div>
            <div style="font-size: 11px; color: var(--text-muted); display: flex; gap: 8px;">
              <span style="font-family: monospace; color: #60a5fa; font-weight: 600;">${this.escapeHtml(matricule)}</span>
              <span>•</span>
              <span>${this.escapeHtml(level)}</span>
              <span>•</span>
              <span>${this.escapeHtml(phone)}</span>
            </div>
          </div>
          <span class="badge-pill" style="font-size: 11px; ${isChecked ? 'background: #10b981; color: #fff;' : 'background: rgba(255,255,255,0.06); color: var(--text-muted);'}">
            ${isChecked ? (isAr ? 'محدد' : 'Sélectionné') : (isAr ? 'غير محدد' : 'Non')}
          </span>
        </div>
      `;
    }).join('');

    this.updateBatchModalCounters();
  }

  toggleBatchModalStudent(id) {
    id = Number(id);
    if (this.batchModalSelectedIds.has(id)) {
      this.batchModalSelectedIds.delete(id);
    } else {
      this.batchModalSelectedIds.add(id);
    }

    const row = document.getElementById(`batchRow_${id}`);
    const chk = document.getElementById(`batchChk_${id}`);
    const isChecked = this.batchModalSelectedIds.has(id);
    const isAr = this.lang === 'ar';

    if (row) {
      if (isChecked) row.classList.add('selected');
      else row.classList.remove('selected');
      const badgePill = row.querySelector('.badge-pill');
      if (badgePill) {
        badgePill.style.background = isChecked ? '#10b981' : 'rgba(255,255,255,0.06)';
        badgePill.style.color = isChecked ? '#fff' : 'var(--text-muted)';
        badgePill.textContent = isChecked ? (isAr ? 'محدد' : 'Sélectionné') : (isAr ? 'غير محدد' : 'Non');
      }
    }
    if (chk) chk.checked = isChecked;

    this.updateBatchModalCounters();
  }

  toggleSelectAllBatchModal() {
    const currentList = this._currentFilteredBatchStudents || this.batchModalAllStudents || [];
    if (currentList.length === 0) return;

    const allChecked = currentList.every(s => this.batchModalSelectedIds.has(s.id));
    if (allChecked) {
      // Uncheck all in current filter
      currentList.forEach(s => this.batchModalSelectedIds.delete(s.id));
    } else {
      // Check all in current filter
      currentList.forEach(s => this.batchModalSelectedIds.add(s.id));
    }

    this.filterBatchBadgesList();
  }

  setBatchTheme(theme) {
    this.batchCardTheme = theme;
    ['Blue', 'Emerald', 'Gold', 'White'].forEach(t => {
      const btn = document.getElementById(`btnBatchTheme${t}`);
      if (btn) {
        if (t.toLowerCase() === theme.toLowerCase()) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }
    });
  }

  updateBatchModalCounters() {
    const checkedCount = this.batchModalSelectedIds.size;
    const checkedEl = document.getElementById('batchModalCheckedCount');
    if (checkedEl) checkedEl.textContent = checkedCount;

    const isAr = this.lang === 'ar';
    const pagesCount = Math.ceil(checkedCount / 8) || 0;
    const estimateEl = document.getElementById('batchPagesEstimateInfo');
    if (estimateEl) {
      if (checkedCount === 0) {
        estimateEl.textContent = isAr ? 'لم يتم تحديد أي تلميذ (8 بطاقات / ورقة)' : 'Aucun élève sélectionné (8 cartes / page)';
      } else {
        estimateEl.textContent = isAr 
          ? `${checkedCount} بطاقة • ${pagesCount} ورقة A4 (${pagesCount * 8} خانة)` 
          : `${checkedCount} cartes • ${pagesCount} feuille(s) A4 (8 par page)`;
      }
    }

    const toggleTextEl = document.getElementById('batchModalToggleAllText');
    if (toggleTextEl) {
      const currentList = this._currentFilteredBatchStudents || [];
      const allChecked = currentList.length > 0 && currentList.every(s => this.batchModalSelectedIds.has(s.id));
      toggleTextEl.textContent = allChecked 
        ? (isAr ? 'إلغاء تحديد الكل' : 'Désélectionner tout') 
        : (isAr ? 'تحديد الكل' : 'Sélectionner tout');
    }

    const printBtnText = document.getElementById('btnExecuteBatchPrintText');
    if (printBtnText) {
      printBtnText.textContent = isAr 
        ? `معاينة وطباعة (${checkedCount} بطاقة)` 
        : `Imprimer (${checkedCount} badges)`;
    }
  }

  startBatchBadgesPrint() {
    const isAr = this.lang === 'ar';
    if (this.batchModalSelectedIds.size === 0) {
      this.showToast(isAr ? 'يرجى تحديد تلميذ واحد على الأقل للطباعة' : 'Veuillez sélectionner au moins un élève à imprimer', 'warning');
      return;
    }

    const studentsToPrint = (this.batchModalAllStudents || [])
      .filter(s => this.batchModalSelectedIds.has(s.id));

    if (studentsToPrint.length === 0) {
      this.showToast(isAr ? 'لم يتم العثور على بيانات التلاميذ المحددين' : 'Aucune donnée pour les élèves sélectionnés', 'warning');
      return;
    }

    this.executeBatchBadgePrint(studentsToPrint, this.batchCardTheme || 'blue');
  }

  executeBatchBadgePrint(students, theme = 'blue') {
    const isAr = this.lang === 'ar';
    const schoolName = this.settings?.school_name || 'EDUMIND ACADEMY';
    const schoolYear = this.settings?.school_year || '2025/2026';

    // Helper to generate vector SVG barcode using JsBarcode
    const generateBarcodeSvg = (matricule) => {
      try {
        if (window.JsBarcode) {
          const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          JsBarcode(svgNode, matricule, {
            format: 'CODE128',
            lineColor: '#000000',
            background: '#ffffff',
            width: 1.8,
            height: 38,
            displayValue: true,
            font: 'monospace',
            fontOptions: 'bold',
            fontSize: 11,
            textMargin: 2,
            margin: 2
          });
          return svgNode.outerHTML;
        }
      } catch (err) {
        console.warn('Barcode generation failed for:', matricule, err);
      }
      return `<div style="font-family: monospace; font-size: 11px; font-weight: 800; padding: 4px; border: 1px dashed #000; text-align: center;">${matricule}</div>`;
    };

    // Split students into chunks of 8 (8 badges per standard A4 sheet)
    const chunkSize = 8;
    const pages = [];
    for (let i = 0; i < students.length; i += chunkSize) {
      pages.push(students.slice(i, i + chunkSize));
    }

    // Build HTML for each student badge
    const renderCard = (s) => {
      const fullName = `${s.first_name || ''} ${s.last_name || ''}`.trim();
      const matricule = s.matricule || `ETU-${String(s.id).padStart(4, '0')}`;
      const levelName = s.level_name || 'Niveau non défini';
      const phone = s.phone || s.parent_phone || '-';
      const barcodeSvg = generateBarcodeSvg(matricule);
      const isFemale = (s.gender || '').toUpperCase() === 'F';

      return `
        <div class="badge-wrapper">
          <!-- Crop marks for scissors on all 4 corners -->
          <div class="crop-mark top-left"></div>
          <div class="crop-mark top-right"></div>
          <div class="crop-mark bottom-left"></div>
          <div class="crop-mark bottom-right"></div>

          <div class="print-cr80-card ${theme}">
            <div class="card-header">
              <div class="brand">
                <div class="logo">🎓</div>
                <div>
                  <div class="school-name">${this.escapeHtml(schoolName)}</div>
                  <div class="school-tag">COURS DE SOUTIEN & FORMATION</div>
                </div>
              </div>
              <div class="badge-col">
                <span class="badge-tag">OFFICIEL • نظامي</span>
                <span class="year-tag">${this.escapeHtml(schoolYear)}</span>
              </div>
            </div>

            <div class="card-body">
              <div class="avatar-box">
                ${s.photo_url 
                  ? `<img src="${s.photo_url}" alt="Photo">` 
                  : `<div style="font-size: 34px; text-align: center; line-height: 72px;">${isFemale ? '👧' : '👦'}</div>`}
              </div>
              <div class="details-box">
                <div class="student-name">${this.escapeHtml(fullName)}</div>
                <div class="matricule-pill">N° ${this.escapeHtml(matricule)}</div>
                <div class="info-line"><strong>Niveau:</strong> ${this.escapeHtml(levelName)}</div>
                <div class="info-line"><strong>Tél:</strong> ${this.escapeHtml(phone)}</div>
              </div>
            </div>

            <div class="barcode-box">
              ${barcodeSvg}
            </div>
          </div>
        </div>
      `;
    };

    // Render A4 sheets
    const sheetsHtml = pages.map((pageStudents, pageIndex) => {
      const cardsHtml = pageStudents.map(s => renderCard(s)).join('');
      return `
        <div class="a4-sheet">
          <div class="sheet-watermark">EDUMIND • Page ${pageIndex + 1}/${pages.length} — Planche 8 Badges (CR-80)</div>
          <div class="badges-grid">
            ${cardsHtml}
          </div>
        </div>
      `;
    }).join('');

    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert(isAr ? 'يرجى السماح بالنوافذ المنبثقة لطباعة البطاقات.' : 'Veuillez autoriser les fenêtres contextuelles pour imprimer les badges.');
      return;
    }

    const fullHtml = `
      <!DOCTYPE html>
      <html lang="${this.lang}" dir="ltr">
      <head>
        <meta charset="UTF-8">
        <title>EDUMIND — Planche Badges Élèves (${students.length} Cartes)</title>
        <style>
          @page {
            size: A4 portrait;
            margin: 8mm 6mm;
          }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: #f1f5f9;
            color: #0f172a;
            padding: 15px;
          }

          .a4-sheet {
            width: 198mm;
            min-height: 280mm;
            margin: 0 auto 20px;
            background: #ffffff;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            padding: 6mm 4mm;
            position: relative;
            page-break-after: always;
            break-after: page;
          }

          .sheet-watermark {
            font-size: 8.5px;
            color: #94a3b8;
            text-align: center;
            margin-bottom: 4mm;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .badges-grid {
            display: grid;
            grid-template-columns: repeat(2, 85.6mm);
            grid-auto-rows: 54mm;
            gap: 8mm 12mm;
            justify-content: center;
            align-content: start;
          }

          .badge-wrapper {
            position: relative;
            width: 85.6mm;
            height: 54mm;
          }

          /* Crop marks for scissors on each badge corner */
          .crop-mark {
            position: absolute;
            width: 12px;
            height: 12px;
            z-index: 10;
            pointer-events: none;
          }
          .crop-mark.top-left {
            top: -4px; left: -4px;
            border-top: 1.5px dashed #64748b;
            border-left: 1.5px dashed #64748b;
          }
          .crop-mark.top-right {
            top: -4px; right: -4px;
            border-top: 1.5px dashed #64748b;
            border-right: 1.5px dashed #64748b;
          }
          .crop-mark.bottom-left {
            bottom: -4px; left: -4px;
            border-bottom: 1.5px dashed #64748b;
            border-left: 1.5px dashed #64748b;
          }
          .crop-mark.bottom-right {
            bottom: -4px; right: -4px;
            border-bottom: 1.5px dashed #64748b;
            border-right: 1.5px dashed #64748b;
          }

          /* CR-80 Standard Card Dimensions & Design */
          .print-cr80-card {
            width: 85.6mm;
            height: 54mm;
            border-radius: 3.5mm;
            padding: 3mm 3.5mm;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            border: 1.2px solid #2563eb;
            background: #ffffff;
            color: #0f172a;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .print-cr80-card.blue {
            background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #172554 100%);
            color: #ffffff;
            border-color: #3b82f6;
          }
          .print-cr80-card.emerald {
            background: linear-gradient(135deg, #064e3b 0%, #065f46 60%, #022c22 100%);
            color: #ffffff;
            border-color: #10b981;
          }
          .print-cr80-card.gold {
            background: linear-gradient(135deg, #18181b 0%, #27272a 60%, #09090b 100%);
            color: #ffffff;
            border-color: #f59e0b;
          }
          .print-cr80-card.white {
            background: #ffffff;
            color: #0f172a;
            border-color: #94a3b8;
          }

          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 0.8px solid rgba(255,255,255,0.2);
            padding-bottom: 1.2mm;
          }
          .white .card-header { border-bottom-color: #cbd5e1; }

          .brand { display: flex; align-items: center; gap: 2mm; }
          .logo { font-size: 15px; }
          .school-name { font-size: 10.5px; font-weight: 800; line-height: 1.1; }
          .school-tag { font-size: 6px; opacity: 0.8; letter-spacing: 0.3px; }

          .badge-col { text-align: right; }
          .badge-tag { font-size: 6px; font-weight: 800; background: #f59e0b; color: #fff; padding: 1px 3.5px; border-radius: 2px; }
          .year-tag { font-size: 7px; display: block; opacity: 0.8; margin-top: 1px; }

          .card-body {
            display: flex;
            gap: 2.5mm;
            align-items: center;
            margin: 1mm 0;
          }

          .avatar-box {
            width: 18mm;
            height: 22mm;
            border-radius: 2mm;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.3);
            overflow: hidden;
            flex-shrink: 0;
          }
          .white .avatar-box { background: #f1f5f9; border-color: #cbd5e1; }
          .avatar-box img { width: 100%; height: 100%; object-fit: cover; }

          .details-box { flex: 1; min-width: 0; line-height: 1.2; }
          .student-name { font-size: 11.5px; font-weight: 800; margin-bottom: 0.8mm; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .matricule-pill { display: inline-block; font-family: monospace; font-size: 8px; font-weight: 800; background: rgba(59,130,246,0.25); padding: 1px 4px; border-radius: 2px; margin-bottom: 0.8mm; }
          .white .matricule-pill { background: #dbeafe; color: #1e40af; }
          .info-line { font-size: 7.2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .info-line strong { opacity: 0.75; }

          .barcode-box {
            background: #ffffff;
            border-radius: 1.8mm;
            padding: 1mm 2mm 0.5mm;
            text-align: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          .barcode-box svg {
            width: 100% !important;
            height: 10.5mm !important;
            display: block;
            margin: 0 auto;
          }

          .no-print-bar {
            max-width: 198mm;
            margin: 0 auto 15px;
            background: #ffffff;
            border-radius: 8px;
            padding: 10px 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            border: 1px solid #cbd5e1;
          }
          .no-print-btn {
            padding: 7px 18px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            border: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }
          .no-print-btn.primary {
            background: #2563eb;
            color: #ffffff;
          }
          .no-print-btn.secondary {
            background: #e2e8f0;
            color: #334155;
          }

          @media print {
            .no-print-bar { display: none !important; }
            body { background: transparent; padding: 0; margin: 0; }
            .a4-sheet { box-shadow: none; margin: 0; padding: 4mm 2mm; width: 100%; page-break-inside: avoid; }
            .a4-sheet:last-child { page-break-after: auto !important; break-after: auto !important; margin-bottom: 0; }
          }
        </style>
      </head>
      <body>
        <div class="no-print-bar">
          <div style="font-size: 13px; color: #334155; font-weight: 600;">
            🎓 <strong>EDUMIND</strong> • ${students.length} بطاقة (${pages.length} ورقة A4)
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="no-print-btn primary" onclick="window.print()">
              🖨️ ${isAr ? 'طباعة البطاقات' : 'Imprimer'}
            </button>
            <button class="no-print-btn secondary" onclick="window.close()">
              ✕ ${isAr ? 'إغلاق' : 'Fermer'}
            </button>
          </div>
        </div>

        ${sheetsHtml}

        <script>
          function doPrint() {
            setTimeout(function() { window.print(); }, 400);
          }
          if (document.readyState === 'complete') {
            doPrint();
          } else {
            window.addEventListener('load', doPrint);
          }
        </script>
      </body>
      </html>
    `;

    printWin.document.open();
    printWin.document.write(fullHtml);
    printWin.document.close();
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

  async openModalStudent() {
    // 1. Ensure levels are loaded and dropdown populated
    if (!this.levels || this.levels.length === 0) {
      await this.loadLevels();
    }
    const modalL = document.getElementById('studentLevel');
    if (modalL) {
      modalL.innerHTML = `<option value="">${this.lang === 'ar' ? '-- اختر المستوى الدراسي --' : '-- Choisir le niveau --'}</option>` +
        (this.levels || []).map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
    }

    // 2. Clean form reset
    const form = document.getElementById('studentForm');
    if (form) form.reset();

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

    const submitBtn = document.querySelector('#studentForm button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = this.lang === 'ar' ? 'حفظ بيانات التلميذ' : "Enregistrer l'Élève";
    }

    document.getElementById('modalStudent').classList.add('active');
  }

  async editStudent(id) {
    if (!this.levels || this.levels.length === 0) {
      await this.loadLevels();
    }
    const modalL = document.getElementById('studentLevel');
    if (modalL) {
      modalL.innerHTML = `<option value="">${this.lang === 'ar' ? '-- اختر المستوى الدراسي --' : '-- Choisir le niveau --'}</option>` +
        (this.levels || []).map(l => `<option value="${l.id}">${this.escapeHtml(l.name)}</option>`).join('');
    }

    let s = (this.students || []).find(item => item.id === id);
    if (!s) {
      try {
        const res = await fetch(`/api/students/${id}`);
        const data = await res.json();
        if (data.success) s = data.student;
      } catch (e) { }
    }
    if (!s) return;

    document.getElementById('modalStudentTitle').textContent = this.lang === 'ar' ? 'تعديل بيانات التلميذ' : "Modifier l'Élève";
    document.getElementById('studentId').value = s.id;
    const matInput = document.getElementById('studentMatricule');
    if (matInput) matInput.value = s.matricule || '';
    document.getElementById('studentFirstName').value = s.first_name || '';
    document.getElementById('studentLastName').value = s.last_name || '';
    document.getElementById('studentGender').value = s.gender || 'M';
    document.getElementById('studentLevel').value = s.level_id || '';
    document.getElementById('studentPhone').value = s.phone || '';
    document.getElementById('studentParentName').value = s.parent_name || '';
    document.getElementById('studentParentPhone').value = s.parent_phone || '';
    document.getElementById('studentAddress').value = s.address || '';

    const submitBtn = document.querySelector('#studentForm button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = this.lang === 'ar' ? 'حفظ التعديلات' : "Mettre à jour l'Élève";
    }

    document.getElementById('modalStudent').classList.add('active');
  }

  async saveStudent() {
    if (this._savingStudent) return; // Prevent double submit

    const submitBtn = document.querySelector('#studentForm button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
    const isAr = this.lang === 'ar';

    const id = document.getElementById('studentId')?.value || '';
    const firstName = document.getElementById('studentFirstName')?.value?.trim();
    const lastName = document.getElementById('studentLastName')?.value?.trim();

    if (!firstName || !lastName) {
      this.showToast(isAr ? 'يرجى إدخال الاسم واللقب' : 'Veuillez saisir le nom et prénom', 'warning');
      return;
    }

    const payload = {
      matricule: document.getElementById('studentMatricule')?.value?.trim() || '',
      first_name: firstName,
      last_name: lastName,
      gender: document.getElementById('studentGender')?.value || 'M',
      level_id: document.getElementById('studentLevel')?.value || '',
      phone: document.getElementById('studentPhone')?.value?.trim() || '',
      parent_name: document.getElementById('studentParentName')?.value?.trim() || '',
      parent_phone: document.getElementById('studentParentPhone')?.value?.trim() || '',
      address: document.getElementById('studentAddress')?.value?.trim() || ''
    };

    const url = id ? `/api/students/${id}` : '/api/students';
    const method = id ? 'PUT' : 'POST';

    this._savingStudent = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${isAr ? 'جاري الحفظ...' : 'Enregistrement...'}`;
    }

    try {
      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (data.success) {
        this.closeModals();
        const form = document.getElementById('studentForm');
        if (form) form.reset();
        document.getElementById('studentId').value = '';
        this.playChime('success');
        this.showToast(isAr ? 'تم حفظ بيانات التلميذ بنجاح!' : 'Élève enregistré avec succès !', 'success');
        this.loadStudents();
        if (this.currentProfileStudentId && Number(this.currentProfileStudentId) === Number(id)) {
          this.openStudentProfile(id);
        }
      } else {
        this.showToast(data.error || (isAr ? 'حدث خطأ أثناء الحفظ' : 'Erreur lors de l’enregistrement'), 'error');
      }
    } catch (e) {
      console.error(e);
      this.showToast(isAr ? 'خطأ في الاتصال بالخادم' : 'Erreur réseau ou serveur', 'error');
    } finally {
      this._savingStudent = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  }

  setStudentCardTheme(theme = 'blue') {
    this.currentCardTheme = theme;
    ['Blue', 'Emerald', 'Gold', 'White'].forEach(t => {
      const btn = document.getElementById(`btnTheme${t}`);
      if (btn) btn.classList.toggle('active', t.toLowerCase() === theme.toLowerCase());
    });
    const card = document.getElementById('printableCard');
    if (card) {
      card.className = `student-card-preview theme-${theme}`;
    }
  }

  copyStudentBarcodeMatricule() {
    const matricule = this.currentCardStudent?.matricule || document.getElementById('cardStudentMatricule')?.textContent;
    if (!matricule) return;
    navigator.clipboard.writeText(matricule).then(() => {
      this.playChime('click');
      alert(this.lang === 'ar' ? `تم نسخ رقم الباركود: ${matricule}` : `Matricule copié : ${matricule}`);
    }).catch(() => { });
  }

  async printStudentCard(id) {
    let s = (this.students || []).find(item => item.id === id);
    let enrollments = [];
    try {
      const res = await fetch(`/api/students/${id}`);
      const data = await res.json();
      if (data.success && data.student) {
        s = data.student;
        enrollments = data.enrollments || [];
      }
    } catch (e) { }

    if (!s) return;
    this.currentCardStudent = s;
    this.currentCardEnrollments = enrollments;

    // School Info from settings
    const schoolName = this.settings?.school_name || 'EDUMIND ACADEMY';
    const schoolYear = this.settings?.school_year || '2025/2026';
    const schoolLogo = this.settings?.school_logo || '/img/logo-icon.png';

    const schoolNameEl = document.getElementById('cardSchoolName');
    if (schoolNameEl) schoolNameEl.textContent = schoolName;

    const schoolYearEl = document.getElementById('cardSchoolYear');
    if (schoolYearEl) schoolYearEl.textContent = schoolYear;

    const schoolLogoEl = document.getElementById('cardSchoolLogo');
    if (schoolLogoEl && schoolLogo) schoolLogoEl.src = schoolLogo;

    // Student Info
    const fullName = `${s.first_name || ''} ${s.last_name || ''}`.trim();
    const matricule = s.matricule || `ETU-${String(s.id).padStart(4, '0')}`;
    const levelName = s.level_name || 'Niveau non défini';
    const groupName = enrollments.length > 0
      ? enrollments.map(e => e.group_name).slice(0, 2).join(' • ')
      : (this.lang === 'ar' ? 'غير مسجل في فوج' : 'Non inscrit');
    const phone = s.phone || s.parent_phone || '-';

    const nameEl = document.getElementById('cardStudentName');
    if (nameEl) nameEl.textContent = fullName;

    const matriculeEl = document.getElementById('cardStudentMatricule');
    if (matriculeEl) matriculeEl.textContent = matricule;

    const levelEl = document.getElementById('cardStudentLevel');
    if (levelEl) levelEl.textContent = levelName;

    const phoneEl = document.getElementById('cardStudentPhone');
    if (phoneEl) phoneEl.textContent = phone;

    // Avatar / Photo
    const avatarContainer = document.getElementById('cardAvatarContainer');
    if (avatarContainer) {
      if (s.photo_url) {
        avatarContainer.innerHTML = `<img src="${s.photo_url}" alt="${this.escapeHtml(fullName)}" style="width: 100%; height: 100%; object-fit: cover;">`;
      } else {
        avatarContainer.innerHTML = this.getStudentAvatarSvg(s.gender);
      }
    }

    // High-Resolution Crisp Barcode Generation
    try {
      if (window.JsBarcode) {
        JsBarcode('#cardBarcodeSvg', matricule, {
          format: 'CODE128',
          lineColor: '#000000',
          background: '#ffffff',
          width: 2.0,
          height: 48,
          displayValue: true,
          font: 'monospace',
          fontOptions: 'bold',
          fontSize: 13,
          textMargin: 3,
          margin: 4
        });
      }
    } catch (e) {
      console.warn('JsBarcode error:', e);
    }

    this.setStudentCardTheme(this.currentCardTheme || 'blue');
    document.getElementById('modalStudentCard').classList.add('active');
  }

  printSingleStudentCard(cardsCount = 1) {
    const s = this.currentCardStudent;
    if (!s) return;

    const schoolName = this.settings?.school_name || 'EDUMIND ACADEMY';
    const schoolYear = this.settings?.school_year || '2025/2026';
    const theme = this.currentCardTheme || 'blue';
    const matricule = s.matricule || `ETU-${String(s.id).padStart(4, '0')}`;
    const fullName = `${s.first_name || ''} ${s.last_name || ''}`.trim();
    const levelName = s.level_name || 'Niveau non défini';
    const phone = s.phone || s.parent_phone || '-';

    // Get current Barcode SVG HTML
    const barcodeSvgEl = document.getElementById('cardBarcodeSvg');
    const barcodeSvgHtml = barcodeSvgEl ? barcodeSvgEl.outerHTML : '';

    const isAr = this.lang === 'ar';
    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert(isAr ? 'يرجى السماح بالنوافذ المنبثقة لطباعة البطاقة.' : 'Veuillez autoriser les fenêtres contextuelles pour imprimer la carte.');
      return;
    }

    const cardHtml = `
      <div class="print-cr80-card ${theme}">
        <div class="card-header">
          <div class="brand">
            <div class="logo">🎓</div>
            <div>
              <div class="school-name">${schoolName}</div>
              <div class="school-tag">COURS DE SOUTIEN & FORMATION</div>
            </div>
          </div>
          <div class="badge-col">
            <span class="badge-tag">OFFICIEL • نظامي</span>
            <span class="year-tag">${schoolYear}</span>
          </div>
        </div>

        <div class="card-body">
          <div class="avatar-box">
            ${s.photo_url ? `<img src="${s.photo_url}" alt="Photo">` : `<div style="font-size: 38px; text-align: center; line-height: 80px;">${(s.gender || '').toUpperCase() === 'F' ? '👧' : '👦'}</div>`}
          </div>
          <div class="details-box">
            <div class="student-name">${fullName}</div>
            <div class="matricule-pill">N° ${matricule}</div>
            <div class="info-line"><strong>Niveau:</strong> ${levelName}</div>
            <div class="info-line"><strong>Tél:</strong> ${phone}</div>
          </div>
        </div>

        <div class="barcode-box">
          ${barcodeSvgHtml}
        </div>
      </div>
    `;

    const cardsContent = `
      <div class="single-card-wrap">
        <div class="crop-mark top-left"></div>
        <div class="crop-mark top-right"></div>
        <div class="crop-mark bottom-left"></div>
        <div class="crop-mark bottom-right"></div>
        ${cardHtml}
      </div>
      <div class="print-hint-sub">Traits de coupe pour découpe aux ciseaux • Format Standard CR-80 (85.6mm × 54mm)</div>
    `;

    const html = `
      <!DOCTYPE html>
      <html lang="${this.lang}" dir="ltr">
      <head>
        <meta charset="UTF-8">
        <title>Carte Scolaire — ${fullName}</title>
        <style>
          @page {
            size: A4 portrait;
            margin: 10mm;
          }
          * { box-sizing: border-box; }
          body {
            font-family: system-ui, -apple-system, sans-serif;
            margin: 0;
            padding: 20px;
            background: #f8fafc;
            color: #0f172a;
          }
          .single-card-wrap {
            position: relative;
            width: 85.6mm;
            height: 54mm;
            margin: 40px auto 10px;
          }
          .crop-mark {
            position: absolute;
            width: 15px;
            height: 15px;
          }
          .crop-mark.top-left {
            top: -6px; left: -6px;
            border-top: 1.5px dashed #64748b;
            border-left: 1.5px dashed #64748b;
          }
          .crop-mark.top-right {
            top: -6px; right: -6px;
            border-top: 1.5px dashed #64748b;
            border-right: 1.5px dashed #64748b;
          }
          .crop-mark.bottom-left {
            bottom: -6px; left: -6px;
            border-bottom: 1.5px dashed #64748b;
            border-left: 1.5px dashed #64748b;
          }
          .crop-mark.bottom-right {
            bottom: -6px; right: -6px;
            border-bottom: 1.5px dashed #64748b;
            border-right: 1.5px dashed #64748b;
          }
          .print-hint-sub {
            text-align: center;
            font-size: 11px;
            color: #64748b;
            margin-top: 15px;
          }
          .print-cr80-card {
            width: 85.6mm;
            height: 54mm;
            border-radius: 4mm;
            padding: 3.5mm 4mm;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            border: 1.5px solid #2563eb;
            background: #ffffff;
            color: #0f172a;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print-cr80-card.blue {
            background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #172554 100%);
            color: #ffffff;
            border-color: #3b82f6;
          }
          .print-cr80-card.emerald {
            background: linear-gradient(135deg, #064e3b 0%, #065f46 60%, #022c22 100%);
            color: #ffffff;
            border-color: #10b981;
          }
          .print-cr80-card.gold {
            background: linear-gradient(135deg, #18181b 0%, #27272a 60%, #09090b 100%);
            color: #ffffff;
            border-color: #f59e0b;
          }
          .print-cr80-card.white {
            background: #ffffff;
            color: #0f172a;
            border-color: #94a3b8;
          }
          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 0.8px solid rgba(255,255,255,0.2);
            padding-bottom: 1.5mm;
          }
          .white .card-header { border-bottom-color: #cbd5e1; }
          .brand { display: flex; align-items: center; gap: 2mm; }
          .logo { font-size: 16px; }
          .school-name { font-size: 11px; font-weight: 800; line-height: 1.1; }
          .school-tag { font-size: 6.5px; opacity: 0.8; letter-spacing: 0.3px; }
          .badge-col { text-align: right; }
          .badge-tag { font-size: 6.5px; font-weight: 800; background: #f59e0b; color: #fff; padding: 1px 4px; border-radius: 2px; }
          .year-tag { font-size: 7.5px; display: block; opacity: 0.8; margin-top: 1px; }

          .card-body {
            display: flex;
            gap: 3mm;
            align-items: center;
            margin: 1.5mm 0;
          }
          .avatar-box {
            width: 19mm;
            height: 23mm;
            border-radius: 2.5mm;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.3);
            overflow: hidden;
            flex-shrink: 0;
          }
          .white .avatar-box { background: #f1f5f9; border-color: #cbd5e1; }
          .avatar-box img { width: 100%; height: 100%; object-fit: cover; }

          .details-box { flex: 1; min-width: 0; line-height: 1.25; }
          .student-name { font-size: 12px; font-weight: 800; margin-bottom: 1mm; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .matricule-pill { display: inline-block; font-family: monospace; font-size: 8.5px; font-weight: 800; background: rgba(59,130,246,0.25); padding: 1px 4px; border-radius: 2px; margin-bottom: 1mm; }
          .white .matricule-pill { background: #dbeafe; color: #1e40af; }
          .info-line { font-size: 7.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .info-line strong { opacity: 0.75; }

          .barcode-box {
            background: #ffffff;
            border-radius: 2mm;
            padding: 1mm 2mm 0.5mm;
            text-align: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          .barcode-box svg {
            width: 100% !important;
            height: 11mm !important;
            display: block;
            margin: 0 auto;
          }

          @media print {
            body { background: transparent; padding: 0; }
            .print-hint-sub { display: none; }
          }
        </style>
      </head>
      <body>
        ${cardsContent}
        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 350);
          };
        </script>
      </body>
      </html>
    `;

    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
  }

  async downloadStudentCardPdf() {
    const s = this.currentCardStudent;
    if (!s) return;

    const schoolName = this.settings?.school_name || 'EDUMIND ACADEMY';
    const schoolYear = this.settings?.school_year || '2025/2026';
    const theme = this.currentCardTheme || 'blue';
    const matricule = s.matricule || `ETU-${String(s.id).padStart(4, '0')}`;
    const fullName = `${s.first_name || ''} ${s.last_name || ''}`.trim() || 'Eleve';
    const levelName = s.level_name || 'Niveau non défini';
    const phone = s.phone || s.parent_phone || '-';
    const latinOnly = `${s.first_name || ''}_${s.last_name || ''}`.replace(/[^a-zA-Z0-9_\-]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
    const safeMatricule = matricule.replace(/[^a-zA-Z0-9_\-]/g, '_');
    const filename = latinOnly ? `Carte_Scolaire_${safeMatricule}_${latinOnly}.pdf` : `Carte_Scolaire_${safeMatricule}.pdf`;

    const btn = document.getElementById('btnDownloadCardPdf');
    const origHtml = btn ? btn.innerHTML : '';
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>${this.lang === 'ar' ? 'جاري التحميل...' : 'Génération PDF...'}</span>`;
    }

    try {
      const pdfLib = window.html2pdf || (typeof html2pdf !== 'undefined' ? html2pdf : null);
      if (!pdfLib) {
        throw new Error(this.lang === 'ar' ? 'مكتبة PDF غير متوفرة' : 'Module html2pdf non disponible');
      }

      // Barcode SVG HTML
      const barcodeSvgEl = document.getElementById('cardBarcodeSvg');
      const barcodeSvgHtml = barcodeSvgEl ? barcodeSvgEl.outerHTML : '';

      // Create an isolated container for crisp rendering
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.left = '-9999px';
      container.style.top = '0';
      container.style.width = '85.6mm';
      container.style.height = '54mm';
      container.style.boxSizing = 'border-box';
      container.style.overflow = 'hidden';
      container.style.background = 'transparent';

      container.innerHTML = `
        <style>
          .pdf-cr80-card {
            width: 85.6mm;
            height: 54mm;
            max-height: 54mm;
            border-radius: 3.5mm;
            padding: 2.2mm 3.2mm 2mm;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
            box-sizing: border-box;
            border: 1.5px solid #2563eb;
            background: #ffffff;
            color: #0f172a;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .pdf-cr80-card.blue {
            background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #172554 100%);
            color: #ffffff;
            border-color: #3b82f6;
          }
          .pdf-cr80-card.emerald {
            background: linear-gradient(135deg, #064e3b 0%, #065f46 60%, #022c22 100%);
            color: #ffffff;
            border-color: #10b981;
          }
          .pdf-cr80-card.gold {
            background: linear-gradient(135deg, #18181b 0%, #27272a 60%, #09090b 100%);
            color: #ffffff;
            border-color: #f59e0b;
          }
          .pdf-cr80-card.white {
            background: #ffffff;
            color: #0f172a;
            border-color: #94a3b8;
          }
          .pdf-cr80-card .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 0.8px solid rgba(255,255,255,0.2);
            padding-bottom: 1.2mm;
          }
          .pdf-cr80-card.white .card-header { border-bottom-color: #cbd5e1; }
          .pdf-cr80-card .brand { display: flex; align-items: center; gap: 2mm; }
          .pdf-cr80-card .logo { font-size: 14px; }
          .pdf-cr80-card .school-name { font-size: 10px; font-weight: 800; line-height: 1.1; }
          .pdf-cr80-card .school-tag { font-size: 5.5px; opacity: 0.8; letter-spacing: 0.3px; }
          .pdf-cr80-card .badge-col { text-align: right; }
          .pdf-cr80-card .badge-tag { font-size: 5.5px; font-weight: 800; background: #f59e0b; color: #fff; padding: 1px 3.5px; border-radius: 2px; }
          .pdf-cr80-card .year-tag { font-size: 6.5px; display: block; opacity: 0.8; margin-top: 1px; }

          .pdf-cr80-card .card-body {
            display: flex;
            gap: 2.5mm;
            align-items: center;
            margin: 0.8mm 0;
          }
          .pdf-cr80-card .avatar-box {
            width: 16mm;
            height: 19mm;
            border-radius: 2mm;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.3);
            overflow: hidden;
            flex-shrink: 0;
          }
          .pdf-cr80-card.white .avatar-box { background: #f1f5f9; border-color: #cbd5e1; }
          .pdf-cr80-card .avatar-box img { width: 100%; height: 100%; object-fit: cover; }

          .pdf-cr80-card .details-box { flex: 1; min-width: 0; line-height: 1.2; }
          .pdf-cr80-card .student-name { font-size: 10.5px; font-weight: 800; margin-bottom: 0.6mm; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          .pdf-cr80-card .matricule-pill { display: inline-block; font-family: monospace; font-size: 7.5px; font-weight: 800; background: rgba(59,130,246,0.25); padding: 1px 3.5px; border-radius: 2px; margin-bottom: 0.6mm; }
          .pdf-cr80-card.white .matricule-pill { background: #dbeafe; color: #1e40af; }
          .pdf-cr80-card .info-line { font-size: 6.8px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 0.3mm; }
          .pdf-cr80-card .info-line strong { opacity: 0.75; }

          .pdf-cr80-card .barcode-box {
            background: #ffffff;
            border-radius: 2mm;
            padding: 0.8mm 2mm 0.6mm;
            text-align: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          .pdf-cr80-card .barcode-box svg {
            width: 100% !important;
            max-height: 10.5mm !important;
            height: auto !important;
            display: block;
            margin: 0 auto;
          }
        </style>
        <div class="pdf-cr80-card ${theme}">
          <div class="card-header">
            <div class="brand">
              <div class="logo">🎓</div>
              <div>
                <div class="school-name">${schoolName}</div>
                <div class="school-tag">COURS DE SOUTIEN & FORMATION</div>
              </div>
            </div>
            <div class="badge-col">
              <span class="badge-tag">OFFICIEL • نظامي</span>
              <span class="year-tag">${schoolYear}</span>
            </div>
          </div>

          <div class="card-body">
            <div class="avatar-box">
              ${s.photo_url ? `<img src="${s.photo_url}" alt="Photo">` : `<div style="font-size: 32px; text-align: center; line-height: 19mm;">${(s.gender || '').toUpperCase() === 'F' ? '👧' : '👦'}</div>`}
            </div>
            <div class="details-box">
              <div class="student-name">${fullName}</div>
              <div class="matricule-pill">N° ${matricule}</div>
              <div class="info-line"><strong>Niveau:</strong> ${levelName}</div>
              <div class="info-line"><strong>Tél:</strong> ${phone}</div>
            </div>
          </div>

          <div class="barcode-box">
            ${barcodeSvgHtml}
          </div>
        </div>
      `;

      document.body.appendChild(container);
      const cardNode = container.querySelector('.pdf-cr80-card');

      const opt = {
        margin: 0,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 3,
          useCORS: true,
          logging: false,
          scrollY: 0,
          scrollX: 0
        },
        jsPDF: {
          unit: 'mm',
          format: [85.6, 54],
          orientation: 'landscape'
        },
        pagebreak: { mode: 'avoid-all' }
      };

      const pdfDataUri = await pdfLib()
        .set(opt)
        .from(cardNode)
        .toPdf()
        .get('pdf')
        .then(pdf => {
          // Guarantee exactly 1 single page (removes any accidental 2nd blank page)
          while (pdf.internal.getNumberOfPages() > 1) {
            pdf.deletePage(pdf.internal.getNumberOfPages());
          }
        })
        .outputPdf('datauristring');

      document.body.removeChild(container);

      // Submit via hidden form to /api/download-pdf
      // This forces the browser to treat it as a true HTTP attachment with full filename & .pdf extension
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = '/api/download-pdf';
      form.style.display = 'none';

      const inputName = document.createElement('input');
      inputName.type = 'hidden';
      inputName.name = 'filename';
      inputName.value = filename;
      form.appendChild(inputName);

      const inputData = document.createElement('input');
      inputData.type = 'hidden';
      inputData.name = 'base64';
      const commaIdx = pdfDataUri.indexOf(',');
      inputData.value = commaIdx !== -1 ? pdfDataUri.slice(commaIdx + 1) : pdfDataUri;
      form.appendChild(inputData);

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      this.playChime('success');
    } catch (err) {
      console.error('Erreur téléchargement carte PDF:', err);
      alert((this.lang === 'ar' ? 'فشل تحميل ملف PDF: ' : 'Échec du téléchargement du PDF : ') + err.message);
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = origHtml;
      }
    }
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
  async loadPayments(monthFilter = null) {
    try {
      // 1. Load available months for filter dropdown
      await this.loadPaymentMonths();

      const activeMonth = monthFilter !== null ? monthFilter : (document.getElementById('paymentMonthFilter')?.value || 'all');
      const url = activeMonth && activeMonth !== 'all' ? `/api/payments?month=${encodeURIComponent(activeMonth)}&all=true` : '/api/payments?limit=250';
      const res = await fetch(url);
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

  async loadPaymentMonths() {
    try {
      const res = await fetch('/api/payments/months');
      const data = await res.json();
      if (!data.success) return;
      this.availablePaymentMonths = data.months || [];

      const filterSelect = document.getElementById('paymentMonthFilter');
      if (filterSelect) {
        const currentVal = filterSelect.value || 'all';
        const isAr = this.lang === 'ar';
        let html = `<option value="all">${isAr ? 'جميع الأشهر (الكل)' : 'Tous les mois (الكل)'}</option>`;
        this.availablePaymentMonths.forEach(m => {
          html += `<option value="${m.month_period}">${m.month_period} (${m.count} ${isAr ? 'عملية' : 'op.'})</option>`;
        });
        filterSelect.innerHTML = html;
        if ([...filterSelect.options].some(o => o.value === currentVal)) {
          filterSelect.value = currentVal;
        }
      }
    } catch (err) {
      console.error('Failed to load payment months:', err);
    }
  }

  onPaymentMonthFilterChange(month) {
    this.loadPayments(month);
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

    // Update Summary Bar
    const countEl = document.getElementById('paymentsFilteredCount');
    const totalEl = document.getElementById('paymentsFilteredTotal');
    const badgeEl = document.getElementById('paymentsActiveFilterBadge');
    const totalPaid = (list || []).reduce((acc, p) => acc + Number(p.paid_amount || 0), 0);

    if (countEl) countEl.textContent = (list || []).length;
    if (totalEl) totalEl.textContent = Number(totalPaid).toLocaleString() + ' DA';

    const filterSelect = document.getElementById('paymentMonthFilter');
    if (badgeEl && filterSelect) {
      const isAr = this.lang === 'ar';
      if (filterSelect.value && filterSelect.value !== 'all') {
        badgeEl.innerHTML = `<span class="badge-pill" style="background: rgba(16, 185, 129, 0.15); color: #10b981;"><i class="fa-solid fa-filter"></i> ${filterSelect.value}</span>`;
      } else {
        badgeEl.innerHTML = `<span class="badge-pill" style="background: rgba(255, 255, 255, 0.08); color: var(--text-muted);">${isAr ? 'عرض الكل' : 'Historique complet'}</span>`;
      }
    }

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
        <td><span class="badge-pill" style="background: rgba(16, 185, 129, 0.1); color: #10b981; font-weight: 600;">${p.month_period}</span></td>
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

  // -------------------------------------------------------------
  // EXPORT & DOWNLOAD PAYMENTS (SINGLE / MULTI-MONTH)
  // -------------------------------------------------------------
  async openExportPaymentsModal() {
    this.exportPaymentsMode = 'single';
    await this.loadPaymentMonths();

    // Populate Groups Filter
    const groupSelect = document.getElementById('exportGroupSelect');
    if (groupSelect) {
      const isAr = this.lang === 'ar';
      let html = `<option value="all">${isAr ? 'كل الأفواج الدراسية' : 'Tous les groupes'}</option>`;
      if (this.allGroupes && this.allGroupes.length > 0) {
        this.allGroupes.forEach(g => {
          html += `<option value="${g.id}">${g.name} (${g.subject_name || ''})</option>`;
        });
      }
      groupSelect.innerHTML = html;
      groupSelect.value = 'all';
    }

    const methodSelect = document.getElementById('exportMethodSelect');
    if (methodSelect) methodSelect.value = 'all';

    const months = this.availablePaymentMonths || [];
    const isAr = this.lang === 'ar';

    // Populate Single Month Select
    const singleSelect = document.getElementById('exportSingleMonthSelect');
    if (singleSelect) {
      singleSelect.innerHTML = months.map(m =>
        `<option value="${m.month_period}">${m.month_period} — (${m.count} ${isAr ? 'عملية' : 'op.'} - ${Number(m.total_amount || 0).toLocaleString()} DA)</option>`
      ).join('');
      // If table filter has a specific month, preselect it
      const currentTableMonth = document.getElementById('paymentMonthFilter')?.value;
      if (currentTableMonth && currentTableMonth !== 'all') {
        singleSelect.value = currentTableMonth;
      }
    }

    // Populate Multi-Months Checkboxes Grid
    const multiGrid = document.getElementById('exportMultiMonthsGrid');
    if (multiGrid) {
      multiGrid.innerHTML = months.map((m, idx) => `
        <label class="month-checkbox-label">
          <input type="checkbox" class="export-month-chk" value="${m.month_period}" ${idx < 2 ? 'checked' : ''} onchange="app.updateExportPaymentsPreview()">
          <div class="month-checkbox-info">
            <span class="month-checkbox-name">${m.month_period}</span>
            <span class="month-checkbox-count">${m.count} ${isAr ? 'عملية' : 'op.'} • ${Number(m.total_amount || 0).toLocaleString()} DA</span>
          </div>
        </label>
      `).join('');
    }

    // Populate Range Selects
    const rangeFrom = document.getElementById('exportRangeFromSelect');
    const rangeTo = document.getElementById('exportRangeToSelect');
    if (rangeFrom && rangeTo) {
      const sorted = [...months].sort((a, b) => a.month_period.localeCompare(b.month_period));
      const opts = sorted.map(m => `<option value="${m.month_period}">${m.month_period}</option>`).join('');
      rangeFrom.innerHTML = opts;
      rangeTo.innerHTML = opts;
      if (sorted.length > 0) {
        rangeFrom.value = sorted[0].month_period;
        rangeTo.value = sorted[sorted.length - 1].month_period;
      }
    }

    this.setExportMode('single');
    document.getElementById('modalExportPayments').classList.add('active');
  }

  setExportMode(mode) {
    this.exportPaymentsMode = mode;
    ['Single', 'Multi', 'Range', 'All'].forEach(m => {
      const pill = document.getElementById(`pillMode${m}`);
      const sec = document.getElementById(`exportSection${m}`);
      const active = m.toLowerCase() === mode.toLowerCase();
      if (pill) pill.classList.toggle('active', active);
      if (sec) sec.style.display = active ? 'block' : 'none';
    });
    this.updateExportPaymentsPreview();
  }

  toggleAllExportMonths(checked) {
    document.querySelectorAll('.export-month-chk').forEach(chk => {
      chk.checked = checked;
    });
    this.updateExportPaymentsPreview();
  }

  async updateExportPaymentsPreview() {
    try {
      const params = new URLSearchParams();
      params.append('all', 'true');

      const mode = this.exportPaymentsMode || 'single';
      if (mode === 'single') {
        const val = document.getElementById('exportSingleMonthSelect')?.value;
        if (val) params.append('month', val);
      } else if (mode === 'multi') {
        const checked = [...document.querySelectorAll('.export-month-chk:checked')].map(c => c.value);
        if (checked.length > 0) {
          params.append('months', checked.join(','));
        } else {
          this.cachedExportPayments = [];
          this.renderExportPreviewStats([]);
          return;
        }
      } else if (mode === 'range') {
        const from = document.getElementById('exportRangeFromSelect')?.value;
        const to = document.getElementById('exportRangeToSelect')?.value;
        if (from) params.append('from_month', from);
        if (to) params.append('to_month', to);
      } else if (mode === 'all') {
        // No month restriction
      }

      const grp = document.getElementById('exportGroupSelect')?.value;
      if (grp && grp !== 'all') params.append('group_id', grp);

      const mthd = document.getElementById('exportMethodSelect')?.value;
      if (mthd && mthd !== 'all') params.append('method', mthd);

      const res = await fetch(`/api/payments?${params.toString()}`);
      const data = await res.json();
      if (data.success) {
        this.cachedExportPayments = data.payments || [];
        this.renderExportPreviewStats(this.cachedExportPayments);
      }
    } catch (err) {
      console.error('Failed to update export preview:', err);
    }
  }

  renderExportPreviewStats(list) {
    const countEl = document.getElementById('exportPreviewCount');
    const studentsEl = document.getElementById('exportPreviewStudents');
    const totalEl = document.getElementById('exportPreviewTotal');

    const total = (list || []).reduce((sum, p) => sum + Number(p.paid_amount || 0), 0);
    const uniqueStudents = new Set((list || []).map(p => p.student_id)).size;

    if (countEl) countEl.textContent = (list || []).length;
    if (studentsEl) studentsEl.textContent = uniqueStudents;
    if (totalEl) totalEl.textContent = Number(total).toLocaleString() + ' DA';
  }

  async executeExportPayments(type = 'excel') {
    if (!this.cachedExportPayments || this.cachedExportPayments.length === 0) {
      await this.updateExportPaymentsPreview();
    }

    const list = this.cachedExportPayments || [];
    if (list.length === 0) {
      alert(this.lang === 'ar' ? 'لا توجد عمليات دفع لتصديرها وفق الاختيارات المحددة.' : 'Aucun paiement trouvé pour les critères sélectionnés.');
      return;
    }

    // Determine label for period
    let periodLabel = '';
    const mode = this.exportPaymentsMode || 'single';
    if (mode === 'single') {
      periodLabel = document.getElementById('exportSingleMonthSelect')?.value || 'mois';
    } else if (mode === 'multi') {
      const checked = [...document.querySelectorAll('.export-month-chk:checked')].map(c => c.value);
      periodLabel = checked.join('_');
    } else if (mode === 'range') {
      periodLabel = `${document.getElementById('exportRangeFromSelect')?.value || ''}_au_${document.getElementById('exportRangeToSelect')?.value || ''}`;
    } else {
      periodLabel = 'tous_les_mois';
    }

    if (type === 'excel') {
      this.exportPaymentsToExcel(list, periodLabel);
    } else if (type === 'print') {
      this.printPaymentsReport(list, periodLabel);
    }
  }

  exportPaymentsToExcel(list, periodLabel = 'export') {
    const isAr = this.lang === 'ar';
    const headers = isAr ? [
      'رقم الوصل', 'رقم القيد', 'اسم التلميذ', 'هاتف التلميذ', 'هاتف الولي',
      'الفوج الدراسي', 'المادة', 'الأستاذ', 'شهر الاشتراك', 'المبلغ الأصلي (دج)',
      'التخفيض (دج)', 'المبلغ المدفوع (دج)', 'المتبقي (دج)', 'طريقة الدفع', 'تاريخ العملية', 'ملاحظات'
    ] : [
      'N° Reçu', 'Matricule', 'Nom Élève', 'Tél Élève', 'Tél Parent',
      'Groupe', 'Matière', 'Enseignant', 'Période / Mois', 'Montant Base (DA)',
      'Remise (DA)', 'Montant Payé (DA)', 'Reste Dû (DA)', 'Mode de Paiement', 'Date Paiement', 'Notes'
    ];

    const rows = list.map(p => [
      `"${p.receipt_no || ''}"`,
      `"${p.matricule || ''}"`,
      `"${(p.student_name || '').replace(/"/g, '""')}"`,
      `"${p.student_phone || ''}"`,
      `"${p.parent_phone || ''}"`,
      `"${(p.group_name || '').replace(/"/g, '""')}"`,
      `"${(p.subject_name || '').replace(/"/g, '""')}"`,
      `"${(p.teacher_name || '').replace(/"/g, '""')}"`,
      `"${p.month_period || ''}"`,
      p.base_amount || 0,
      p.discount || 0,
      p.paid_amount || 0,
      p.remaining_amount || 0,
      `"${(p.payment_method || '').toUpperCase()}"`,
      `"${p.payment_date ? p.payment_date.slice(0, 19) : ''}"`,
      `"${(p.notes || '').replace(/"/g, '""')}"`
    ]);

    // Total Row
    const totalPaid = list.reduce((sum, p) => sum + Number(p.paid_amount || 0), 0);
    const totalRem = list.reduce((sum, p) => sum + Number(p.remaining_amount || 0), 0);
    const totalRow = [
      isAr ? '"المجموع الإجمالي"' : '"TOTAL GÉNÉRAL"',
      '""',
      `"${list.length} ${isAr ? 'عملية' : 'opérations'}"`,
      '""', '""', '""', '""', '""', '""', '""', '""',
      totalPaid,
      totalRem,
      '""', '""', '""'
    ];

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';')), totalRow.join(';')].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const safePeriod = periodLabel.replace(/[^a-zA-Z0-9_\-]/g, '_');
    a.download = `paiements_edumind_${safePeriod}_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.playChime('success');
  }

  printPaymentsReport(list, periodLabel) {
    const isAr = this.lang === 'ar';
    const totalPaid = list.reduce((sum, p) => sum + Number(p.paid_amount || 0), 0);
    const uniqueStudents = new Set(list.map(p => p.student_id)).size;

    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert(isAr ? 'يرجى السماح بالنوافذ المنبثقة (Popups) لطباعة التقرير.' : 'Veuillez autoriser les fenêtres contextuelles (Popups) pour imprimer le rapport.');
      return;
    }

    const title = isAr ? 'تقرير سجل المدفوعات والتحصيلات' : 'Rapport Historique des Paiements';
    const html = `
      <!DOCTYPE html>
      <html lang="${this.lang}" dir="${isAr ? 'rtl' : 'ltr'}">
      <head>
        <meta charset="UTF-8">
        <title>${title} — EDUMIND</title>
        <style>
          body { font-family: system-ui, -apple-system, sans-serif; margin: 20px; color: #1e293b; font-size: 12px; }
          .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f766e; padding-bottom: 12px; margin-bottom: 15px; }
          .school-title { font-size: 20px; font-weight: 800; color: #0f766e; margin: 0; }
          .kpi-boxes { display: flex; gap: 15px; margin-bottom: 15px; }
          .kpi-box { flex: 1; padding: 10px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; text-align: center; }
          .kpi-val { font-size: 16px; font-weight: 700; color: #0f766e; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th, td { border: 1px solid #cbd5e1; padding: 6px 8px; text-align: ${isAr ? 'right' : 'left'}; }
          th { background-color: #f1f5f9; font-weight: 700; font-size: 11px; text-transform: uppercase; }
          tr:nth-child(even) { background-color: #f8fafc; }
          .amount { font-weight: 700; color: #047857; text-align: right; }
          .footer { margin-top: 30px; display: flex; justify-content: space-between; padding-top: 10px; }
          .signature-box { width: 220px; text-align: center; padding-top: 40px; border-top: 1px dashed #94a3b8; font-weight: 600; }
          @media print {
            body { margin: 10mm; font-size: 11px; }
            button { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <h1 class="school-title">EDUMIND ACADEMY</h1>
            <p style="margin: 3px 0; color: #64748b;">${isAr ? 'مؤسسة التعليم والدروس الخصوصية' : 'Système de Gestion Scolaire & Cours de Soutien'}</p>
            <p style="margin: 0; color: #94a3b8; font-size: 11px;">Tél: 0552225150 • Algérie</p>
          </div>
          <div style="text-align: ${isAr ? 'left' : 'right'};">
            <h2 style="margin: 0; font-size: 16px; color: #1e293b;">${title}</h2>
            <p style="margin: 3px 0; font-weight: 600; color: #0f766e;">${isAr ? 'الفترة' : 'Période'} : ${periodLabel}</p>
            <p style="margin: 0; color: #94a3b8; font-size: 11px;">${new Date().toLocaleDateString(this.lang === 'ar' ? 'ar-DZ' : 'fr-FR')} ${new Date().toLocaleTimeString()}</p>
          </div>
        </div>

        <div class="kpi-boxes">
          <div class="kpi-box">
            <div style="color: #64748b; font-size: 11px;">${isAr ? 'عدد العمليات' : 'Total Opérations'}</div>
            <div class="kpi-val">${list.length}</div>
          </div>
          <div class="kpi-box">
            <div style="color: #64748b; font-size: 11px;">${isAr ? 'التلاميذ المعنيون' : 'Élèves Uniques'}</div>
            <div class="kpi-val">${uniqueStudents}</div>
          </div>
          <div class="kpi-box">
            <div style="color: #64748b; font-size: 11px;">${isAr ? 'إجمالي المبالغ المحصلة' : 'Montant Total Collecté'}</div>
            <div class="kpi-val">${Number(totalPaid).toLocaleString()} DA</div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>${isAr ? 'رقم الوصل' : 'N° Reçu'}</th>
              <th>${isAr ? 'التلميذ' : 'Élève'}</th>
              <th>${isAr ? 'الفوج / المادة' : 'Groupe / Matière'}</th>
              <th>${isAr ? 'الشهر' : 'Mois'}</th>
              <th>${isAr ? 'المبلغ المدفوع' : 'Montant Payé'}</th>
              <th>${isAr ? 'طريقة الدفع' : 'Mode'}</th>
              <th>${isAr ? 'التاريخ' : 'Date'}</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(p => `
              <tr>
                <td><strong>${p.receipt_no}</strong></td>
                <td>${p.student_name} <small style="color: #64748b;">(${p.matricule || ''})</small></td>
                <td>${p.subject_name || p.group_name}</td>
                <td>${p.month_period}</td>
                <td class="amount">${Number(p.paid_amount).toLocaleString()} DA</td>
                <td style="text-transform: uppercase;">${p.payment_method}</td>
                <td>${p.payment_date ? p.payment_date.slice(0, 10) : ''}</td>
              </tr>
            `).join('')}
          </tbody>
          <tfoot>
            <tr style="background: #e2e8f0; font-weight: 700;">
              <td colspan="4" style="text-align: center;">${isAr ? 'المجموع الإجمالي' : 'TOTAL GÉNÉRAL'}</td>
              <td class="amount" style="font-size: 13px;">${Number(totalPaid).toLocaleString()} DA</td>
              <td colspan="2"></td>
            </tr>
          </tfoot>
        </table>

        <div class="footer">
          <div class="signature-box">${isAr ? 'توقيع أمين الصندوق' : 'Signature Caissier / Secrétaire'}</div>
          <div class="signature-box">${isAr ? 'ختم وتوقيع الإدارة' : 'Cachet & Signature Direction'}</div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 400);
          };
        </script>
      </body>
      </html>
    `;

    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
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

      this.currentCaisseMovements = data.movements || [];

      // Update Summary Bar
      const count = this.currentCaisseMovements.length;
      const totalIn = this.currentCaisseMovements.reduce((sum, m) => sum + (m.type === 'entree' ? Number(m.amount || 0) : 0), 0);
      const totalOut = this.currentCaisseMovements.reduce((sum, m) => sum + (m.type === 'sortie' ? Number(m.amount || 0) : 0), 0);
      const soldeNet = totalIn - totalOut;

      const countEl = document.getElementById('caisseFilteredCount');
      const inEl = document.getElementById('caisseFilteredIn');
      const outEl = document.getElementById('caisseFilteredOut');
      const netEl = document.getElementById('caisseFilteredNet');

      if (countEl) countEl.textContent = count;
      if (inEl) inEl.textContent = '+' + Number(totalIn).toLocaleString() + ' DA';
      if (outEl) outEl.textContent = '-' + Number(totalOut).toLocaleString() + ' DA';
      if (netEl) {
        netEl.textContent = (soldeNet >= 0 ? '+' : '') + Number(soldeNet).toLocaleString() + ' DA';
        netEl.style.color = soldeNet >= 0 ? '#10b981' : '#ef4444';
      }

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

  // -------------------------------------------------------------
  // EXPORT & DOWNLOAD CAISSE (SINGLE / MULTI-MONTH / RANGE / ALL)
  // -------------------------------------------------------------
  async loadCaisseMonths() {
    try {
      const res = await fetch('/api/caisse/months');
      const data = await res.json();
      if (data.success) {
        this.availableCaisseMonths = data.months || [];
      }
    } catch (err) {
      console.error('Failed to load caisse months:', err);
      this.availableCaisseMonths = [];
    }
  }

  async openExportCaisseModal() {
    this.exportCaisseMode = 'single';
    await this.loadCaisseMonths();

    const isAr = this.lang === 'ar';

    // Populate Category Filter
    const catSelect = document.getElementById('exportCaisseCategorySelect');
    if (catSelect) {
      const entrees = this.getCaisseCategories('entree') || [];
      const sorties = this.getCaisseCategories('sortie') || [];
      const allCats = [...new Set([...entrees, ...sorties, 'Paiement élève', 'Salaire enseignant', 'Loyer', 'Électricité', 'Fournitures', 'Maintenance', 'Autre'])];

      let html = `<option value="all">${isAr ? 'كل التصنيفات (Toutes)' : 'Toutes les catégories'}</option>`;
      allCats.forEach(c => {
        html += `<option value="${this.escapeHtml(c)}">${this.escapeHtml(c)}</option>`;
      });
      catSelect.innerHTML = html;
      catSelect.value = 'all';
    }

    const typeSelect = document.getElementById('exportCaisseTypeSelect');
    if (typeSelect) typeSelect.value = 'all';

    const methodSelect = document.getElementById('exportCaisseMethodSelect');
    if (methodSelect) methodSelect.value = 'all';

    const months = this.availableCaisseMonths || [];

    // Populate Single Month Select
    const singleSelect = document.getElementById('exportCaisseSingleMonthSelect');
    if (singleSelect) {
      if (months.length === 0) {
        const currentM = new Date().toISOString().slice(0, 7);
        singleSelect.innerHTML = `<option value="${currentM}">${currentM} (${isAr ? 'الشهر الحالي' : 'Mois en cours'})</option>`;
      } else {
        singleSelect.innerHTML = months.map(m =>
          `<option value="${m.month_period}">${m.month_period} — (${m.count} ${isAr ? 'حركة' : 'op.'} • +${Number(m.total_entrees || 0).toLocaleString()} DA / -${Number(m.total_sorties || 0).toLocaleString()} DA)</option>`
        ).join('');
      }
    }

    // Populate Multi-Months Checkboxes Grid
    const multiGrid = document.getElementById('exportCaisseMultiMonthsGrid');
    if (multiGrid) {
      if (months.length === 0) {
        multiGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 10px;">${isAr ? 'لا توجد حركات مسجلة بأشهر سابقة' : 'Aucun mouvement enregistré'}</div>`;
      } else {
        multiGrid.innerHTML = months.map((m, idx) => `
          <label class="month-checkbox-label">
            <input type="checkbox" class="export-caisse-month-chk" value="${m.month_period}" ${idx < 2 ? 'checked' : ''} onchange="app.updateExportCaissePreview()">
            <div class="month-checkbox-info">
              <span class="month-checkbox-name">${m.month_period}</span>
              <span class="month-checkbox-count">${m.count} ${isAr ? 'حركة' : 'op.'} • ${Number(m.solde_net || 0).toLocaleString()} DA</span>
            </div>
          </label>
        `).join('');
      }
    }

    // Populate Date Range Inputs
    const rangeFrom = document.getElementById('exportCaisseRangeFromDate');
    const rangeTo = document.getElementById('exportCaisseRangeToDate');
    const todayStr = new Date().toISOString().split('T')[0];
    const firstDayStr = todayStr.slice(0, 8) + '01';
    if (rangeFrom && !rangeFrom.value) rangeFrom.value = firstDayStr;
    if (rangeTo && !rangeTo.value) rangeTo.value = todayStr;

    this.setExportCaisseMode('single');
    document.getElementById('modalExportCaisse').classList.add('active');
  }

  setExportCaisseMode(mode) {
    this.exportCaisseMode = mode;
    ['Single', 'Multi', 'Range', 'All'].forEach(m => {
      const pill = document.getElementById(`pillCaisseMode${m}`);
      const sec = document.getElementById(`exportCaisseSection${m}`);
      const active = m.toLowerCase() === mode.toLowerCase();
      if (pill) pill.classList.toggle('active', active);
      if (sec) sec.style.display = active ? 'block' : 'none';
    });
    this.updateExportCaissePreview();
  }

  toggleAllExportCaisseMonths(checked) {
    document.querySelectorAll('.export-caisse-month-chk').forEach(chk => {
      chk.checked = checked;
    });
    this.updateExportCaissePreview();
  }

  async updateExportCaissePreview() {
    try {
      const params = new URLSearchParams();
      params.append('all', 'true');

      const mode = this.exportCaisseMode || 'single';
      if (mode === 'single') {
        const val = document.getElementById('exportCaisseSingleMonthSelect')?.value;
        if (val) params.append('month', val);
      } else if (mode === 'multi') {
        const checked = [...document.querySelectorAll('.export-caisse-month-chk:checked')].map(c => c.value);
        if (checked.length > 0) {
          params.append('months', checked.join(','));
        } else {
          this.cachedExportCaisse = [];
          this.renderExportCaissePreviewStats([]);
          return;
        }
      } else if (mode === 'range') {
        const from = document.getElementById('exportCaisseRangeFromDate')?.value;
        const to = document.getElementById('exportCaisseRangeToDate')?.value;
        if (from) params.append('from', from);
        if (to) params.append('to', to);
      } else if (mode === 'all') {
        // No date / month restriction
      }

      const type = document.getElementById('exportCaisseTypeSelect')?.value;
      if (type && type !== 'all') params.append('type', type);

      const cat = document.getElementById('exportCaisseCategorySelect')?.value;
      if (cat && cat !== 'all') params.append('category', cat);

      const mthd = document.getElementById('exportCaisseMethodSelect')?.value;
      if (mthd && mthd !== 'all') params.append('method', mthd);

      const res = await fetch(`/api/caisse/movements?${params.toString()}`);
      const data = await res.json();
      if (data.success) {
        this.cachedExportCaisse = data.movements || [];
        this.renderExportCaissePreviewStats(this.cachedExportCaisse);
      }
    } catch (err) {
      console.error('Failed to update caisse export preview:', err);
    }
  }

  renderExportCaissePreviewStats(list) {
    const countEl = document.getElementById('exportCaissePreviewCount');
    const inEl = document.getElementById('exportCaissePreviewIn');
    const outEl = document.getElementById('exportCaissePreviewOut');
    const netEl = document.getElementById('exportCaissePreviewNet');

    const totalIn = (list || []).reduce((sum, m) => sum + (m.type === 'entree' ? Number(m.amount || 0) : 0), 0);
    const totalOut = (list || []).reduce((sum, m) => sum + (m.type === 'sortie' ? Number(m.amount || 0) : 0), 0);
    const soldeNet = totalIn - totalOut;

    if (countEl) countEl.textContent = (list || []).length;
    if (inEl) inEl.textContent = '+' + Number(totalIn).toLocaleString() + ' DA';
    if (outEl) outEl.textContent = '-' + Number(totalOut).toLocaleString() + ' DA';
    if (netEl) {
      netEl.textContent = (soldeNet >= 0 ? '+' : '') + Number(soldeNet).toLocaleString() + ' DA';
      netEl.style.color = soldeNet >= 0 ? '#10b981' : '#ef4444';
    }
  }

  quickExportCaisseTable() {
    const list = this.currentCaisseMovements || [];
    if (list.length === 0) {
      alert(this.lang === 'ar' ? 'لا توجد حركات معروضة في الجدول حالياً لتصديرها.' : 'Aucun mouvement affiché dans le tableau à exporter.');
      return;
    }
    this.exportCaisseToExcel(list, 'vue_actuelle');
  }

  async executeExportCaisse(type = 'excel') {
    if (!this.cachedExportCaisse || this.cachedExportCaisse.length === 0) {
      await this.updateExportCaissePreview();
    }

    const list = this.cachedExportCaisse || [];
    if (list.length === 0) {
      alert(this.lang === 'ar' ? 'لا توجد حركات مسجلة لتصديرها وفق الاختيارات المحددة.' : 'Aucun mouvement trouvé pour les critères sélectionnés.');
      return;
    }

    // Determine label for period
    let periodLabel = '';
    const mode = this.exportCaisseMode || 'single';
    if (mode === 'single') {
      periodLabel = document.getElementById('exportCaisseSingleMonthSelect')?.value || 'mois';
    } else if (mode === 'multi') {
      const checked = [...document.querySelectorAll('.export-caisse-month-chk:checked')].map(c => c.value);
      periodLabel = checked.join('_');
    } else if (mode === 'range') {
      periodLabel = `${document.getElementById('exportCaisseRangeFromDate')?.value || ''}_au_${document.getElementById('exportCaisseRangeToDate')?.value || ''}`;
    } else {
      periodLabel = 'tout_le_journal';
    }

    if (type === 'excel') {
      this.exportCaisseToExcel(list, periodLabel);
    } else if (type === 'print') {
      this.printCaisseReport(list, periodLabel);
    }
  }

  exportCaisseToExcel(list, periodLabel = 'export') {
    const isAr = this.lang === 'ar';
    const headers = isAr ? [
      'المعرف', 'التاريخ', 'الوقت', 'نوع الحركة', 'البيان / الوصف',
      'التصنيف', 'المرجع / الوصل', 'طريقة الدفع', 'المعني / المستفيد',
      'المداخيل (+ دج)', 'المصاريف (- دج)', 'المسؤول', 'ملاحظات'
    ] : [
      'ID', 'Date', 'Heure', 'Flux', 'Désignation / Motif',
      'Catégorie', 'Référence', 'Mode de Paiement', 'Bénéficiaire / Personne',
      'Entrée (+ DA)', 'Sortie (- DA)', 'Responsable', 'Notes'
    ];

    const rows = list.map(m => {
      const isEntree = m.type === 'entree';
      const fluxText = isEntree ? (isAr ? 'مدخول (+)' : 'Entrée (+)') : (isAr ? 'مصروف (-)' : 'Sortie (-)');
      return [
        m.id,
        `"${m.movement_date || ''}"`,
        `"${m.movement_time || ''}"`,
        `"${fluxText}"`,
        `"${(m.title || '').replace(/"/g, '""')}"`,
        `"${(m.category || '').replace(/"/g, '""')}"`,
        `"${(m.reference || '').replace(/"/g, '""')}"`,
        `"${(m.payment_method || 'espece').toUpperCase()}"`,
        `"${(m.person_name || '').replace(/"/g, '""')}"`,
        isEntree ? Number(m.amount || 0) : 0,
        !isEntree ? Number(m.amount || 0) : 0,
        `"${(m.user_name || '').replace(/"/g, '""')}"`,
        `"${(m.notes || '').replace(/"/g, '""')}"`
      ];
    });

    // Total Row
    const totalIn = list.reduce((sum, m) => sum + (m.type === 'entree' ? Number(m.amount || 0) : 0), 0);
    const totalOut = list.reduce((sum, m) => sum + (m.type === 'sortie' ? Number(m.amount || 0) : 0), 0);
    const soldeNet = totalIn - totalOut;

    const totalRow = [
      isAr ? '"المجموع الإجمالي"' : '"TOTAL GÉNÉRAL"',
      '""', '""',
      `"${list.length} ${isAr ? 'حركة' : 'opérations'}"`,
      '""', '""', '""', '""', '""',
      totalIn,
      totalOut,
      `"${isAr ? 'الرصيد الصافي' : 'Solde Net'}: ${soldeNet} DA"`,
      '""'
    ];

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';')), totalRow.join(';')].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const safePeriod = periodLabel.replace(/[^a-zA-Z0-9_\-]/g, '_');
    a.download = `caisse_edumind_${safePeriod}_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.playChime('success');
  }

  printCaisseReport(list, periodLabel) {
    const isAr = this.lang === 'ar';
    const totalIn = list.reduce((sum, m) => sum + (m.type === 'entree' ? Number(m.amount || 0) : 0), 0);
    const totalOut = list.reduce((sum, m) => sum + (m.type === 'sortie' ? Number(m.amount || 0) : 0), 0);
    const soldeNet = totalIn - totalOut;

    const printWin = window.open('', '_blank');
    if (!printWin) {
      alert(isAr ? 'يرجى السماح بالنوافذ المنبثقة (Popups) لطباعة التقرير.' : 'Veuillez autoriser les fenêtres contextuelles (Popups) pour imprimer le rapport.');
      return;
    }

    const title = isAr ? 'تقرير حركة الخزينة والصندوق' : 'Journal des Mouvements de Caisse & Trésorerie';
    const html = `
      <!DOCTYPE html>
      <html lang="${this.lang}" dir="${isAr ? 'rtl' : 'ltr'}">
      <head>
        <meta charset="UTF-8">
        <title>${title} — EDUMIND</title>
        <style>
          body { font-family: system-ui, -apple-system, sans-serif; margin: 20px; color: #1e293b; font-size: 12px; }
          .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #d97706; padding-bottom: 12px; margin-bottom: 15px; }
          .school-title { font-size: 20px; font-weight: 800; color: #b45309; margin: 0; }
          .kpi-boxes { display: flex; gap: 12px; margin-bottom: 15px; }
          .kpi-box { flex: 1; padding: 10px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; text-align: center; }
          .kpi-val { font-size: 16px; font-weight: 700; margin-top: 4px; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th, td { border: 1px solid #cbd5e1; padding: 6px 8px; text-align: ${isAr ? 'right' : 'left'}; }
          th { background-color: #f1f5f9; font-weight: 700; font-size: 11px; text-transform: uppercase; }
          tr:nth-child(even) { background-color: #f8fafc; }
          .inflow { font-weight: 700; color: #047857; text-align: right; }
          .outflow { font-weight: 700; color: #b91c1c; text-align: right; }
          .badge-flux { display: inline-block; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 700; }
          .badge-entree { background: #d1fae5; color: #065f46; }
          .badge-sortie { background: #fee2e2; color: #991b1b; }
          .footer { margin-top: 30px; display: flex; justify-content: space-between; padding-top: 10px; }
          .signature-box { width: 220px; text-align: center; padding-top: 40px; border-top: 1px dashed #94a3b8; font-weight: 600; }
          @media print {
            body { margin: 10mm; font-size: 11px; }
            button { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <h1 class="school-title">EDUMIND ACADEMY</h1>
            <p style="margin: 3px 0; color: #64748b;">${isAr ? 'مؤسسة التعليم والدروس الخصوصية' : 'Système de Gestion Scolaire & Cours de Soutien'}</p>
            <p style="margin: 0; color: #94a3b8; font-size: 11px;">Tél: 0552225150 • Algérie</p>
          </div>
          <div style="text-align: ${isAr ? 'left' : 'right'};">
            <h2 style="margin: 0; font-size: 16px; color: #1e293b;">${title}</h2>
            <p style="margin: 3px 0; font-weight: 600; color: #d97706;">${isAr ? 'الفترة' : 'Période'} : ${periodLabel}</p>
            <p style="margin: 0; color: #94a3b8; font-size: 11px;">${new Date().toLocaleDateString(this.lang === 'ar' ? 'ar-DZ' : 'fr-FR')} ${new Date().toLocaleTimeString()}</p>
          </div>
        </div>

        <div class="kpi-boxes">
          <div class="kpi-box">
            <div style="color: #64748b; font-size: 11px;">${isAr ? 'عدد العمليات' : 'Total Opérations'}</div>
            <div class="kpi-val" style="color: #1e293b;">${list.length}</div>
          </div>
          <div class="kpi-box">
            <div style="color: #64748b; font-size: 11px;">${isAr ? 'إجمالي المداخيل (+)' : 'Total Entrées (+)'}</div>
            <div class="kpi-val" style="color: #047857;">+${Number(totalIn).toLocaleString()} DA</div>
          </div>
          <div class="kpi-box">
            <div style="color: #64748b; font-size: 11px;">${isAr ? 'إجمالي المصاريف (-)' : 'Total Sorties (-)'}</div>
            <div class="kpi-val" style="color: #b91c1c;">-${Number(totalOut).toLocaleString()} DA</div>
          </div>
          <div class="kpi-box">
            <div style="color: #64748b; font-size: 11px;">${isAr ? 'الرصيد الصافي' : 'Solde Net'}</div>
            <div class="kpi-val" style="color: ${soldeNet >= 0 ? '#047857' : '#b91c1c'};">${soldeNet >= 0 ? '+' : ''}${Number(soldeNet).toLocaleString()} DA</div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 85px;">${isAr ? 'التاريخ' : 'Date'}</th>
              <th style="width: 70px;">${isAr ? 'النوع' : 'Flux'}</th>
              <th>${isAr ? 'البيان / الوصف' : 'Désignation / Motif'}</th>
              <th>${isAr ? 'التصنيف' : 'Catégorie'}</th>
              <th style="width: 75px;">${isAr ? 'المرجع' : 'Réf'}</th>
              <th style="width: 75px;">${isAr ? 'الوسيلة' : 'Mode'}</th>
              <th style="text-align: right; width: 100px;">${isAr ? 'المبلغ' : 'Montant'}</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(m => {
      const isEntree = m.type === 'entree';
      return `
                <tr>
                  <td>
                    <strong>${m.movement_date || ''}</strong>
                    ${m.movement_time ? `<br><small style="color:#64748b;">${m.movement_time.slice(0, 5)}</small>` : ''}
                  </td>
                  <td>
                    <span class="badge-flux ${isEntree ? 'badge-entree' : 'badge-sortie'}">
                      ${isEntree ? (isAr ? 'مدخول' : 'Entrée') : (isAr ? 'مصروف' : 'Sortie')}
                    </span>
                  </td>
                  <td>
                    <strong>${this.escapeHtml(m.title)}</strong>
                    ${m.person_name ? `<br><small style="color: #64748b;">${this.escapeHtml(m.person_name)}</small>` : ''}
                  </td>
                  <td>${this.escapeHtml(m.category || '')}</td>
                  <td style="font-family: monospace; font-size: 11px;">${this.escapeHtml(m.reference || '-')}</td>
                  <td style="text-transform: capitalize;">${m.payment_method || 'Espèces'}</td>
                  <td class="${isEntree ? 'inflow' : 'outflow'}">
                    ${isEntree ? '+' : '-'}${Number(m.amount || 0).toLocaleString()} DA
                  </td>
                </tr>
              `;
    }).join('')}
          </tbody>
          <tfoot>
            <tr style="background: #e2e8f0; font-weight: 700;">
              <td colspan="4" style="text-align: center;">${isAr ? 'المجموع الإجمالي' : 'TOTAL GÉNÉRAL'}</td>
              <td colspan="2" style="font-size: 11px; text-align: center;">
                <span style="color: #047857;">+${Number(totalIn).toLocaleString()}</span> / <span style="color: #b91c1c;">-${Number(totalOut).toLocaleString()}</span>
              </td>
              <td style="text-align: right; font-size: 13px; color: ${soldeNet >= 0 ? '#047857' : '#b91c1c'}; font-weight: 800;">
                ${soldeNet >= 0 ? '+' : ''}${Number(soldeNet).toLocaleString()} DA
              </td>
            </tr>
          </tfoot>
        </table>

        <div class="footer">
          <div class="signature-box">${isAr ? 'توقيع أمين الصندوق' : 'Signature Caissier / Secrétaire'}</div>
          <div class="signature-box">${isAr ? 'ختم وتوقيع الإدارة' : 'Cachet & Signature Direction'}</div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 400);
          };
        </script>
      </body>
      </html>
    `;

    printWin.document.open();
    printWin.document.write(html);
    printWin.document.close();
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
    if (select) {
      select.innerHTML = `<option value="">${this.lang === 'ar' ? '-- اختر المادة --' : '-- Choisir une matière --'}</option>` +
        this.subjects.map(s => `<option value="${s.id}">${this.escapeHtml(s.name)}</option>`).join('');
    }

    const form = document.getElementById('teacherForm');
    if (form) form.reset();

    document.getElementById('modalTeacherTitle').textContent = this.lang === 'ar' ? 'إضافة أستاذ جديد' : 'Ajouter un Enseignant';
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

    const submitBtn = document.querySelector('#teacherForm button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = this.lang === 'ar' ? 'حفظ الأستاذ' : "Enregistrer l'Enseignant";
    }

    document.getElementById('modalTeacher').classList.add('active');
  }

  async editTeacher(id) {
    await this.loadConfigurationData();
    const t = this.teachers.find(item => item.id === id);
    if (!t) return;

    const select = document.getElementById('teacherSubject');
    if (select) {
      select.innerHTML = `<option value="">${this.lang === 'ar' ? '-- اختر المادة --' : '-- Choisir une matière --'}</option>` +
        this.subjects.map(s => `<option value="${s.id}" ${s.id == t.subject_id ? 'selected' : ''}>${this.escapeHtml(s.name)}</option>`).join('');
    }

    document.getElementById('modalTeacherTitle').textContent = this.lang === 'ar' ? "تعديل بيانات الأستاذ" : "Modifier l'Enseignant";
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

    const submitBtn = document.querySelector('#teacherForm button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = this.lang === 'ar' ? 'حفظ التعديلات' : "Mettre à jour l'Enseignant";
    }

    document.getElementById('modalTeacher').classList.add('active');
  }

  async saveTeacher() {
    if (this._savingTeacher) return;

    const submitBtn = document.querySelector('#teacherForm button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
    const isAr = this.lang === 'ar';

    const id = document.getElementById('teacherId')?.value || '';
    const firstName = document.getElementById('teacherFirstName')?.value?.trim();
    const lastName = document.getElementById('teacherLastName')?.value?.trim();

    if (!firstName || !lastName) {
      this.showToast(isAr ? 'يرجى إدخال الاسم واللقب للأستاذ' : 'Veuillez saisir le nom et prénom de l’enseignant.', 'warning');
      return;
    }

    const payload = {
      matricule: document.getElementById('teacherMatricule') ? document.getElementById('teacherMatricule').value.trim() : '',
      first_name: firstName,
      last_name: lastName,
      phone: document.getElementById('teacherPhone')?.value?.trim() || '',
      subject_id: document.getElementById('teacherSubject')?.value || '',
      remuneration_type: document.getElementById('teacherRemunType')?.value || 'percent',
      remuneration_rate: parseFloat(document.getElementById('teacherRemunRate')?.value) || 0,
      tarif_heure: parseFloat(document.getElementById('teacherTarifHeure')?.value) || 0,
      tarif_seance: parseFloat(document.getElementById('teacherTarifSeance')?.value) || 0,
      salaire_fixe: parseFloat(document.getElementById('teacherSalaireFixe')?.value) || 0,
      tarif_par_eleve: parseFloat(document.getElementById('teacherTarifParEleve')?.value) || 0
    };

    const url = id ? `/api/teachers/${id}` : '/api/teachers';
    const method = id ? 'PUT' : 'POST';

    this._savingTeacher = true;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${isAr ? 'جاري الحفظ...' : 'Enregistrement...'}`;
    }

    try {
      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        this.closeModals();
        const form = document.getElementById('teacherForm');
        if (form) form.reset();
        document.getElementById('teacherId').value = '';
        this.playChime('success');
        this.showToast(isAr ? 'تم حفظ بيانات الأستاذ بنجاح!' : 'Enseignant enregistré avec succès !', 'success');
        this.loadTeachers();
      } else {
        this.showToast(data.error || (isAr ? 'حدث خطأ أثناء الحفظ' : 'Erreur lors de l’enregistrement'), 'error');
      }
    } catch (e) {
      console.error(e);
      this.showToast(isAr ? 'خطأ في الاتصال بالخادم' : 'Erreur réseau ou serveur', 'error');
    } finally {
      this._savingTeacher = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
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

  // ===========================================================================
  // INSCRIPTIONS (ENROLLMENTS) - 3-STEP POP-UP WIZARD & REGISTRATION TABLE
  // ===========================================================================
  async loadInscriptionsView(preselectedStudentId) {
    try {
      if (!this.inscriptionsList) this.inscriptionsList = [];

      // Load dependencies concurrently
      await Promise.all([
        this.loadStudents(),
        this.loadGroups(),
        this.loadLevels ? this.loadLevels() : Promise.resolve(),
        this.loadSubjects ? this.loadSubjects() : Promise.resolve()
      ]);

      // Setup Level & Group filters in Table
      const filterLvlSelect = document.getElementById('filterEnrollmentLevel');
      if (filterLvlSelect) {
        const isAr = this.lang === 'ar';
        filterLvlSelect.innerHTML = `<option value="all">${isAr ? 'كل المستويات' : 'Tous les niveaux'}</option>` +
          (this.levels || []).map(l => `<option value="${l.id}">${l.name}</option>`).join('');
      }

      const filterGrpSelect = document.getElementById('filterEnrollmentGroup');
      if (filterGrpSelect) {
        const isAr = this.lang === 'ar';
        filterGrpSelect.innerHTML = `<option value="all">${isAr ? 'كل الأفواج' : 'Tous les groupes'}</option>` +
          (this.groups || []).map(g => `<option value="${g.id}">${g.name} (${g.subject_name || ''})</option>`).join('');
      }

      // Load & Render Existing Inscriptions List
      await this.loadInscriptionsList();

      // If preselected, open wizard immediately for this student
      if (preselectedStudentId) {
        this.openEnrollmentWizard(preselectedStudentId);
      }
    } catch (err) {
      console.error('Erreur lors du chargement de la vue inscriptions:', err);
    }
  }

  // ==================== 3-STEP ENROLLMENT WIZARD ====================

  openEnrollmentWizard(preselectedStudentId = null) {
    // Initialize wizard state
    this.enrollWizard = {
      step: 1,
      selectedStudent: null,
      selectedLevelId: null,
      selectedSubjectId: 'all',
      selectedGroup: null,
      discount: 0
    };

    // Reset date to today
    const dateInput = document.getElementById('wizardRegDate');
    if (dateInput) dateInput.value = new Date().toISOString().slice(0, 10);

    // Reset discount
    const discountInput = document.getElementById('wizardDiscountInput');
    if (discountInput) discountInput.value = '0';
    this.setWizardDiscount(0);

    // Reset search input
    const searchInput = document.getElementById('wizardStudentSearchInput');
    if (searchInput) searchInput.value = '';

    // Open modal
    const modal = document.getElementById('modalEnrollmentWizard');
    if (modal) modal.classList.add('active');

    if (preselectedStudentId) {
      this.selectWizardStudent(preselectedStudentId);
      this.goToEnrollmentStep(2);
    } else {
      this.resetWizardStudentSelection();
      this.goToEnrollmentStep(1);
    }
  }

  closeEnrollmentWizard() {
    const modal = document.getElementById('modalEnrollmentWizard');
    if (modal) modal.classList.remove('active');
  }

  goToEnrollmentStep(targetStep) {
    const isAr = this.lang === 'ar';

    // Step 1 Validation: Must have selected a student before moving to step 2 or 3
    if (targetStep > 1 && !this.enrollWizard.selectedStudent) {
      alert(isAr ? 'يرجى اختيار التلميذ أولاً للمتابعة' : 'Veuillez sélectionner un élève avant de continuer.');
      return;
    }

    // Step 2 Validation: Must have selected a level before moving to step 3
    if (targetStep > 2 && !this.enrollWizard.selectedLevelId) {
      alert(isAr ? 'يرجى اختيار المستوى الدراسي للمتابعة' : 'Veuillez sélectionner un niveau scolaire.');
      return;
    }

    this.enrollWizard.step = targetStep;

    // 1. Update Stepper Indicator UI
    for (let i = 1; i <= 3; i++) {
      const item = document.getElementById(`wizardStepIndicator${i}`);
      const line = document.getElementById(`wizardStepLine${i}`);
      const pane = document.getElementById(`wizardStepPane${i}`);

      if (item) {
        item.classList.remove('active', 'completed');
        if (i < targetStep) item.classList.add('completed');
        else if (i === targetStep) item.classList.add('active');
      }

      if (line) {
        if (i < targetStep) line.classList.add('filled');
        else line.classList.remove('filled');
      }

      if (pane) {
        if (i === targetStep) pane.classList.add('active');
        else pane.classList.remove('active');
      }
    }

    // 2. Update Footer Navigation Buttons
    const btnPrev = document.getElementById('btnWizardPrev');
    const btnNext = document.getElementById('btnWizardNext');
    const btnConfirm = document.getElementById('btnWizardConfirm');
    const btnConfirmPay = document.getElementById('btnWizardConfirmAndPay');
    const btnCancel = document.getElementById('btnWizardCancel');

    const arrowNext = isAr ? 'fa-arrow-left' : 'fa-arrow-right';
    const arrowPrev = isAr ? 'fa-arrow-right' : 'fa-arrow-left';

    if (btnCancel) {
      btnCancel.innerHTML = `<span data-i18n="btn_cancel">${isAr ? 'إلغاء' : 'Annuler'}</span>`;
    }

    if (btnPrev) {
      btnPrev.style.display = targetStep > 1 ? 'inline-flex' : 'none';
      btnPrev.innerHTML = `<i class="fa-solid ${arrowPrev}" style="${isAr ? 'margin-left:8px;' : 'margin-right:8px;'}"></i> <span data-i18n="btn_prev">${isAr ? 'السابق' : 'Précédent'}</span>`;
    }

    if (targetStep === 1) {
      if (btnNext) {
        btnNext.style.display = 'inline-flex';
        btnNext.innerHTML = `<span>${isAr ? 'التالي: اختيار المستوى' : 'Suivant : Niveau'}</span> <i class="fa-solid ${arrowNext}" style="${isAr ? 'margin-right:8px;' : 'margin-left:8px;'}"></i>`;
      }
      if (btnConfirm) btnConfirm.style.display = 'none';
      if (btnConfirmPay) btnConfirmPay.style.display = 'none';

      if (!this.enrollWizard.selectedStudent) {
        this.searchWizardStudents('');
        const sInput = document.getElementById('wizardStudentSearchInput');
        if (sInput) setTimeout(() => sInput.focus(), 100);
      }
    } else if (targetStep === 2) {
      if (btnNext) {
        btnNext.style.display = 'inline-flex';
        btnNext.innerHTML = `<span>${isAr ? 'التالي: المادة والفوج' : 'Suivant : Groupe'}</span> <i class="fa-solid ${arrowNext}" style="${isAr ? 'margin-right:8px;' : 'margin-left:8px;'}"></i>`;
      }
      if (btnConfirm) btnConfirm.style.display = 'none';
      if (btnConfirmPay) btnConfirmPay.style.display = 'none';

      this.renderWizardLevels();
    } else if (targetStep === 3) {
      if (btnNext) btnNext.style.display = 'none';
      if (btnConfirm) {
        btnConfirm.style.display = 'inline-flex';
        btnConfirm.innerHTML = `<i class="fa-solid fa-check-double" style="${isAr ? 'margin-left:6px;' : 'margin-right:6px;'}"></i> <span data-i18n="wizard_btn_confirm">${isAr ? 'تأكيد التسجيل' : "Confirmer l'inscription"}</span>`;
      }
      if (btnConfirmPay) {
        btnConfirmPay.style.display = 'inline-flex';
        btnConfirmPay.innerHTML = `<i class="fa-solid fa-cash-register" style="${isAr ? 'margin-left:6px;' : 'margin-right:6px;'}"></i> <span data-i18n="wizard_btn_confirm_pay">${isAr ? 'تسجيل ودفع فوري' : 'Inscrire & Encaisser'}</span>`;
        btnConfirmPay.title = isAr ? 'تأكيد التسجيل وفتح وصل الدفع فوراً' : "Confirmer l'inscription et ouvrir le reçu de paiement immédiatement";
      }

      this.renderWizardSubjectPills();
      this.renderWizardGroups();
      this.updateWizardCalculations();
    }
  }

  goToNextEnrollmentStep() {
    this.goToEnrollmentStep(this.enrollWizard.step + 1);
  }

  goToPrevEnrollmentStep() {
    this.goToEnrollmentStep(this.enrollWizard.step - 1);
  }

  // ---------- STEP 1: STUDENT SELECTION ----------

  searchWizardStudents(query = '') {
    const listContainer = document.getElementById('wizardStudentsResultsList');
    const clearBtn = document.getElementById('btnClearWizardStudentSearch');
    if (clearBtn) clearBtn.style.display = query ? 'block' : 'none';
    if (!listContainer) return;

    const isAr = this.lang === 'ar';
    const students = this.students || [];
    const term = (query || '').trim().toLowerCase();

    // If search term is empty, do NOT show the students list initially
    if (!term) {
      listContainer.innerHTML = `
        <div style="padding: 34px 16px; text-align: center; color: var(--text-muted);">
          <div style="width: 48px; height: 48px; border-radius: 50%; background: rgba(6, 182, 212, 0.1); border: 1px solid rgba(6, 182, 212, 0.25); display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; color: #06b6d4; font-size: 20px;">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px; color: var(--text-heading);">
            ${isAr ? 'اكتب اسم أو لقب أو رقم قيد التلميذ للبحث' : 'Tapez le nom, prénom ou matricule pour rechercher'}
          </div>
          <div style="font-size: 12px; color: var(--text-muted);">
            ${isAr ? 'ستظهر نتائج البحث فورياً بمجرد الكتابة' : 'Les résultats de recherche apparaîtront instantanément'}
          </div>
        </div>
      `;
      return;
    }

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    const filtered = students.filter(s => {
      const fn = norm(s.first_name);
      const ln = norm(s.last_name);
      const mat = (s.matricule || '').toLowerCase();
      const phone = (s.phone || '').toLowerCase();
      const pphone = (s.parent_phone || '').toLowerCase();
      return `${fn} ${ln}`.includes(normTerm) ||
             `${ln} ${fn}`.includes(normTerm) ||
             mat.includes(normTerm) ||
             phone.includes(normTerm) ||
             pphone.includes(normTerm);
    });

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div style="padding: 30px 16px; text-align: center; color: var(--text-muted);">
          <i class="fa-solid fa-user-slash" style="font-size: 26px; color: #94a3b8; margin-bottom: 8px; display: block; opacity: 0.7;"></i>
          <div style="font-weight: 600; font-size: 13.5px; color: var(--text-heading);">
            ${isAr ? 'لم يتم العثور على أي تلميذ يطابق بحثك' : 'Aucun élève trouvé'}
          </div>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = filtered.map(s => {
      const initials = `${(s.first_name || '')[0] || ''}${(s.last_name || '')[0] || ''}`.toUpperCase() || 'E';
      const lvl = s.level_name || (this.levels && this.levels.find(l => l.id === s.level_id)?.name) || '';
      const phone = s.phone || s.parent_phone || '';
      
      const activeCount = (this.inscriptionsList || []).filter(e => String(e.student_id) === String(s.id) && e.status === 'active').length;
      const countTag = activeCount > 0
        ? `<span class="badge-pill badge-blue" style="font-size:10.5px;"><i class="fa-solid fa-graduation-cap"></i> ${activeCount} ${isAr ? 'أفواج' : 'cours'}</span>`
        : `<span class="badge-pill badge-green" style="font-size:10.5px;"><i class="fa-solid fa-sparkles"></i> ${isAr ? 'تسجيل جديد' : 'Nouveau'}</span>`;

      const avatarHtml = s.photo_url
        ? `<img src="${s.photo_url}" style="width:38px; height:38px; border-radius:50%; object-fit:cover; flex-shrink:0;" alt="">`
        : `<div style="width:38px; height:38px; border-radius:50%; background:linear-gradient(135deg, #0284c7, #06b6d4); color:white; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:13px; flex-shrink:0;">${initials}</div>`;

      return `
        <div class="wizard-student-item" onclick="app.selectWizardStudent(${s.id})">
          ${avatarHtml}
          <div style="flex: 1; min-width: 0;">
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px;">
              <strong style="color: var(--text-heading); font-size: 14px;">${s.first_name} ${s.last_name}</strong>
              ${countTag}
            </div>
            <div style="display: flex; align-items: center; gap: 8px; font-size: 11.5px; color: var(--text-muted); margin-top: 3px; flex-wrap: wrap;">
              <span class="badge-pill badge-cyan" style="font-size: 10px;">${s.matricule || 'ELE-XXXX'}</span>
              ${lvl ? `<span><i class="fa-solid fa-layer-group"></i> ${lvl}</span>` : ''}
              ${phone ? `<span><i class="fa-solid fa-phone"></i> ${phone}</span>` : ''}
            </div>
          </div>
          <div class="wizard-student-select-btn">
            <span>${isAr ? 'اختيار' : 'Choisir'}</span>
            <i class="fa-solid ${isAr ? 'fa-arrow-left' : 'fa-arrow-right'}"></i>
          </div>
        </div>
      `;
    }).join('');
  }

  clearWizardStudentSearch() {
    const input = document.getElementById('wizardStudentSearchInput');
    if (input) {
      input.value = '';
      input.focus();
    }
    this.searchWizardStudents('');
  }

  selectWizardStudent(studentId) {
    const student = (this.students || []).find(s => String(s.id) === String(studentId));
    if (!student) return;

    this.enrollWizard.selectedStudent = student;
    // Auto-suggest student's level
    if (student.level_id) {
      this.enrollWizard.selectedLevelId = student.level_id;
    }

    // Hide results list & show selected card
    const listContainer = document.getElementById('wizardStudentsResultsList');
    if (listContainer) listContainer.style.display = 'none';

    const card = document.getElementById('wizardSelectedStudentCard');
    if (card) {
      card.style.display = 'block';

      const avatarEl = document.getElementById('wizardSelectedStudentAvatar');
      if (avatarEl) {
        if (student.photo_url) {
          avatarEl.innerHTML = `<img src="${student.photo_url}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" alt="">`;
        } else {
          const initials = `${(student.first_name || '')[0] || ''}${(student.last_name || '')[0] || ''}`.toUpperCase() || 'E';
          avatarEl.textContent = initials;
        }
      }

      const nameEl = document.getElementById('wizardSelectedStudentName');
      if (nameEl) nameEl.textContent = `${student.first_name} ${student.last_name}`;

      const matEl = document.getElementById('wizardSelectedStudentMat');
      if (matEl) matEl.textContent = student.matricule || 'ELE-XXXX';

      const lvlEl = document.getElementById('wizardSelectedStudentLevel');
      if (lvlEl) {
        const lvlName = student.level_name || (this.levels && this.levels.find(l => l.id === student.level_id)?.name) || 'Sans niveau';
        lvlEl.textContent = lvlName;
      }

      const phoneEl = document.getElementById('wizardSelectedStudentPhone');
      if (phoneEl) {
        const ph = student.phone || student.parent_phone || 'Sans téléphone';
        phoneEl.innerHTML = `<i class="fa-solid fa-phone"></i> ${ph}`;
      }

      // Existing active enrollments
      const groupsEl = document.getElementById('wizardSelectedStudentGroups');
      if (groupsEl) {
        const isAr = this.lang === 'ar';
        const activeStudentEnrollments = (this.inscriptionsList || []).filter(e => 
          String(e.student_id) === String(student.id) && e.status === 'active'
        );

        if (activeStudentEnrollments.length > 0) {
          const badges = activeStudentEnrollments.map(e => 
            `<span class="badge-pill badge-blue" style="font-size:11px; margin:2px 4px 2px 0; display:inline-flex; align-items:center; gap:4px;">
               <i class="fa-solid fa-check"></i> ${e.group_name} (${e.subject_name || ''})
             </span>`
          ).join('');
          groupsEl.innerHTML = `<strong>${isAr ? 'الأفواج المسجل فيها حالياً:' : 'Déjà inscrit dans:'}</strong><div style="margin-top:4px;">${badges}</div>`;
        } else {
          groupsEl.innerHTML = `<span style="color:#10b981;"><i class="fa-solid fa-circle-check"></i> ${isAr ? 'التلميذ غير مسجل في أي فوج حالياً (تسجيل جديد)' : 'Nouvel élève (aucune inscription active)'}</span>`;
        }
      }
    }

    // UX Improvement: Auto-advance to Step 2 (Level Selection) smoothly
    setTimeout(() => {
      this.goToEnrollmentStep(2);
    }, 150);
  }

  resetWizardStudentSelection() {
    this.enrollWizard.selectedStudent = null;
    const card = document.getElementById('wizardSelectedStudentCard');
    if (card) card.style.display = 'none';

    const listContainer = document.getElementById('wizardStudentsResultsList');
    if (listContainer) listContainer.style.display = 'block';

    const input = document.getElementById('wizardStudentSearchInput');
    if (input) {
      input.value = '';
      input.focus();
    }
    this.searchWizardStudents('');
  }

  // ---------- STEP 2: LEVEL SELECTION ----------

  renderWizardLevels() {
    const student = this.enrollWizard.selectedStudent;
    const isAr = this.lang === 'ar';

    // Update banner
    const step2Name = document.getElementById('wizardStep2StudentName');
    if (step2Name && student) step2Name.textContent = `${student.first_name} ${student.last_name}`;

    const step2OrigLvl = document.getElementById('wizardStep2StudentOrigLevel');
    if (step2OrigLvl && student) {
      const origName = student.level_name || (this.levels && this.levels.find(l => l.id === student.level_id)?.name) || 'Non défini';
      step2OrigLvl.textContent = `${isAr ? 'المستوى المسجل:' : 'Niveau de base :'} ${origName}`;
    }

    const grid = document.getElementById('wizardLevelsGrid');
    if (!grid) return;

    const levels = this.levels || [];
    if (levels.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 30px;">${isAr ? 'لا توجد مستويات معرفة في النظام' : 'Aucun niveau disponible'}</div>`;
      return;
    }

    grid.innerHTML = levels.map(l => {
      const isSelected = String(this.enrollWizard.selectedLevelId) === String(l.id);
      // Count how many groups exist for this level
      const groupsCount = (this.groups || []).filter(g => String(g.level_id) === String(l.id)).length;

      return `
        <div class="level-select-card ${isSelected ? 'selected' : ''}" onclick="app.selectWizardLevel(${l.id})">
          <div class="level-card-header">
            <span class="level-card-cat">${l.category || (isAr ? 'عام' : 'Général')}</span>
            ${isSelected ? '<i class="fa-solid fa-circle-check" style="color: #06b6d4; font-size: 18px;"></i>' : '<i class="fa-regular fa-circle" style="color: var(--text-muted); font-size: 16px;"></i>'}
          </div>
          <div class="level-card-name">${l.name}</div>
          <div style="font-size: 11.5px; color: var(--text-muted); margin-top: 8px; display: flex; align-items: center; gap: 4px;">
            <i class="fa-solid fa-users-rectangle"></i>
            <span>${groupsCount} ${isAr ? 'أفواج متاحة' : (groupsCount > 1 ? 'groupes disponibles' : 'groupe disponible')}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  selectWizardLevel(levelId) {
    this.enrollWizard.selectedLevelId = levelId;
    this.renderWizardLevels();
    // Reset selected group when level changes
    this.enrollWizard.selectedGroup = null;

    // UX Improvement: Auto-advance to Step 3 (Subject & Group Selection) smoothly
    setTimeout(() => {
      this.goToEnrollmentStep(3);
    }, 150);
  }

  // ---------- STEP 3: SUBJECT & GROUP SELECTION & CONFIRM ----------

  renderWizardSubjectPills() {
    const container = document.getElementById('wizardSubjectFilterPills');
    if (!container) return;
    const isAr = this.lang === 'ar';
    const levelId = this.enrollWizard.selectedLevelId;

    // Filter subjects that actually have groups in this level
    const levelGroups = (this.groups || []).filter(g => String(g.level_id) === String(levelId));
    const distinctSubs = [];
    const seen = new Set();
    levelGroups.forEach(g => {
      if (g.subject_id && !seen.has(g.subject_id)) {
        seen.add(g.subject_id);
        distinctSubs.push({ id: g.subject_id, name: g.subject_name || (isAr ? 'أخرى' : 'Autre'), color: g.subject_color || '#3b82f6' });
      }
    });

    let html = `<button type="button" class="filter-pill-btn ${this.enrollWizard.selectedSubjectId === 'all' ? 'active' : ''}" onclick="app.setWizardSubjectFilter('all')">
      ${isAr ? 'كل المواد' : 'Toutes les matières'} (${levelGroups.length})
    </button>`;

    html += distinctSubs.map(sub => {
      const isAct = String(this.enrollWizard.selectedSubjectId) === String(sub.id);
      const subCount = levelGroups.filter(g => String(g.subject_id) === String(sub.id)).length;
      return `<button type="button" class="filter-pill-btn ${isAct ? 'active' : ''}" onclick="app.setWizardSubjectFilter(${sub.id})">
        <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:${sub.color}; margin-right:4px;"></span>
        ${sub.name} (${subCount})
      </button>`;
    }).join('');

    container.innerHTML = html;
  }

  setWizardSubjectFilter(subId) {
    this.enrollWizard.selectedSubjectId = subId;
    this.renderWizardSubjectPills();
    this.renderWizardGroups();
  }

  renderWizardGroups() {
    const grid = document.getElementById('wizardGroupsGrid');
    if (!grid) return;

    const isAr = this.lang === 'ar';
    const levelId = this.enrollWizard.selectedLevelId;
    const subId = this.enrollWizard.selectedSubjectId;
    const student = this.enrollWizard.selectedStudent;

    let groups = (this.groups || []).filter(g => String(g.level_id) === String(levelId));
    if (subId !== 'all') {
      groups = groups.filter(g => String(g.subject_id) === String(subId));
    }

    if (groups.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 35px; background: rgba(0,0,0,0.1); border-radius: 10px;">
          <i class="fa-solid fa-graduation-cap" style="font-size: 28px; color: #64748b; margin-bottom: 8px; display: block;"></i>
          ${isAr ? 'لا توجد أفواج متاحة لهذا المستوى والمادة المختارة' : 'Aucun groupe disponible pour ce niveau et matière'}
        </div>
      `;
      return;
    }

    grid.innerHTML = groups.map(g => {
      const isSelected = this.enrollWizard.selectedGroup && String(this.enrollWizard.selectedGroup.id) === String(g.id);
      
      const isAlreadyEnrolled = student && (this.inscriptionsList || []).some(e => 
        String(e.student_id) === String(student.id) && 
        String(e.group_id) === String(g.id) && 
        e.status === 'active'
      );

      const enrolledCount = g.enrolled_count || g.students_count || 0;
      const maxStudents = g.max_students || 25;
      const isFull = enrolledCount >= maxStudents;

      let capBadge = `<span class="badge-pill badge-green" style="font-size:10px;">${enrolledCount}/${maxStudents} ${isAr ? 'مقعد' : 'places'}</span>`;
      if (isFull) capBadge = `<span class="badge-pill badge-red" style="font-size:10px;"><i class="fa-solid fa-triangle-exclamation"></i> ${isAr ? 'مكتمل' : 'Complet'}</span>`;

      const timing = g.day_of_week && g.start_time ? `${g.day_of_week} ${g.start_time}-${g.end_time || ''}` : '';

      return `
        <div class="group-select-card ${isSelected ? 'selected' : ''} ${isAlreadyEnrolled ? 'disabled' : ''}" 
             onclick="${isAlreadyEnrolled ? '' : `app.selectWizardGroup(${g.id})`}">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 6px;">
            <span class="badge-pill badge-blue" style="font-size: 10.5px; background: ${g.subject_color || '#3b82f6'}22; color: ${g.subject_color || '#3b82f6'};">
              ${g.subject_name || (isAr ? 'عام' : 'Général')}
            </span>
            <div style="display: flex; gap: 4px; align-items: center;">
              ${isAlreadyEnrolled ? `<span class="badge-pill badge-red" style="font-size:9.5px;">${isAr ? 'مسجل مسبقاً' : 'Déjà inscrit'}</span>` : ''}
              ${capBadge}
            </div>
          </div>
          <strong style="color: var(--text-primary); font-size: 14px; display: block; margin-bottom: 4px;">
            ${g.name}
          </strong>
          <div style="font-size: 12px; color: var(--text-muted); line-height: 1.5;">
            <div><i class="fa-solid fa-chalkboard-user"></i> ${g.teacher_name || (isAr ? 'غير محدد' : 'Non assigné')}</div>
            ${timing ? `<div><i class="fa-regular fa-clock"></i> ${timing}</div>` : ''}
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; border-top: 1px dashed rgba(148, 163, 184, 0.15); padding-top: 6px;">
            <strong style="color: #10b981; font-size: 13.5px;">${parseFloat(g.price_monthly || 0).toLocaleString('fr-FR')} ${isAr ? 'دج' : 'DA'}</strong>
            <span style="font-size: 11px; color: ${isSelected ? '#10b981' : 'var(--text-muted)'}; font-weight: 700;">
              ${isSelected ? `<i class="fa-solid fa-circle-check"></i> ${isAr ? 'محدد' : 'Sélectionné'}` : (isAlreadyEnrolled ? '' : (isAr ? 'انقر للاختيار' : 'Choisir'))}
            </span>
          </div>
        </div>
      `;
    }).join('');
  }

  selectWizardGroup(groupId) {
    const group = (this.groups || []).find(g => String(g.id) === String(groupId));
    if (!group) return;

    this.enrollWizard.selectedGroup = group;
    this.renderWizardGroups();
    this.updateWizardCalculations();
  }

  setWizardDiscount(amount) {
    const input = document.getElementById('wizardDiscountInput');
    if (!input) return;

    if (amount === 'free') {
      const normalPrice = this.enrollWizard.selectedGroup ? (parseFloat(this.enrollWizard.selectedGroup.price_monthly) || 0) : 0;
      input.value = normalPrice;
    } else {
      input.value = amount;
    }

    this.updateWizardCalculations();
  }

  updateWizardCalculations() {
    const isAr = this.lang === 'ar';
    const group = this.enrollWizard.selectedGroup;
    const normalPrice = group ? (parseFloat(group.price_monthly) || 0) : 0;
    const discountInput = document.getElementById('wizardDiscountInput');
    const discount = discountInput ? (parseFloat(discountInput.value) || 0) : 0;
    const net = Math.max(0, normalPrice - discount);
    const currency = isAr ? 'دج' : 'DA';

    const netEl = document.getElementById('wizardNetPrice');
    if (netEl) netEl.textContent = `${net.toLocaleString('fr-FR')} ${currency}`;

    const noticeEl = document.getElementById('wizardDiscountNotice');
    if (noticeEl) {
      if (discount > 0) {
        noticeEl.style.display = 'block';
        noticeEl.textContent = isAr
          ? `(-${discount.toLocaleString('fr-FR')} دج تخفيض)`
          : `(-${discount.toLocaleString('fr-FR')} DA remise)`;
      } else {
        noticeEl.style.display = 'none';
      }
    }
  }

  async confirmWizardEnrollment(andPay = false) {
    const isAr = this.lang === 'ar';
    const student = this.enrollWizard.selectedStudent;
    const group = this.enrollWizard.selectedGroup;

    if (!student) {
      alert(isAr ? 'يرجى اختيار التلميذ' : 'Veuillez sélectionner un élève.');
      this.goToEnrollmentStep(1);
      return;
    }

    if (!group) {
      alert(isAr ? 'يرجى اختيار الفوج الدراسي المطلوب' : 'Veuillez sélectionner un groupe.');
      return;
    }

    const discountInput = document.getElementById('wizardDiscountInput');
    const discount = discountInput ? (parseFloat(discountInput.value) || 0) : 0;
    const regDate = document.getElementById('wizardRegDate')?.value || new Date().toISOString().slice(0, 10);

    const payload = {
      student_id: student.id,
      group_id: group.id,
      discount_amount: discount,
      registration_date: regDate
    };

    try {
      const res = await fetch('/api/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        this.closeEnrollmentWizard();
        await this.loadInscriptionsList();

        if (andPay) {
          alert(isAr ? 'تم تسجيل التلميذ بنجاح! جاري فتح نافذة استلام الدفع والوصل...' : 'Inscription réussie ! Ouverture du reçu de paiement...');
          if (typeof this.openNewPaymentModal === 'function') {
            this.openNewPaymentModal(student.id, group.id);
          }
        } else {
          alert(isAr ? 'تم تسجيل التلميذ في الفوج بنجاح!' : 'Élève inscrit dans le groupe avec succès !');
        }
      } else {
        alert(data.error || (isAr ? 'خطأ أثناء التسجيل' : 'Erreur lors de l’inscription'));
      }
    } catch (err) {
      console.error(err);
      alert(isAr ? 'خطأ في الاتصال بالخادم' : 'Erreur de connexion avec le serveur.');
    }
  }

  // --- CHARGEMENT ET GESTION DU TABLEAU DES INSCRIPTIONS ---
  async loadInscriptionsList() {
    try {
      this.inscriptionsList = await this.fetchEnrollments();

      // Update badge counters
      const total = this.inscriptionsList.length;
      const active = this.inscriptionsList.filter(e => e.status === 'active').length;

      const totalBadge = document.getElementById('enrollmentsTotalBadge');
      if (totalBadge) totalBadge.textContent = `${total} Inscription(s)`;

      const activeBadge = document.getElementById('enrollmentsActiveBadge');
      if (activeBadge) activeBadge.textContent = `${active} Active(s)`;

      this.populateEnrollmentMonthFilter();
      this.filterEnrollmentsTable();
    } catch (err) {
      console.error('Erreur chargement inscriptions list:', err);
    }
  }

  async fetchEnrollments(filters = {}) {
    // 1. Try direct API
    try {
      const params = new URLSearchParams();
      if (filters.search) params.append('search', filters.search);
      if (filters.group_id && filters.group_id !== 'all') params.append('group_id', filters.group_id);
      if (filters.status && filters.status !== 'all') params.append('status', filters.status);

      const res = await fetch(`/api/enrollments?${params.toString()}`);
      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        data = null;
      }
      if (data && data.success && Array.isArray(data.enrollments)) {
        return data.enrollments;
      }
    } catch (e) {
      console.warn('API /api/enrollments non disponible, fallback actif:', e);
    }

    // 2. Fallback: Aggregate from /api/groups/:id/students
    const list = [];
    const groupsToFetch = this.groups || [];
    for (const g of groupsToFetch) {
      try {
        const res = await fetch(`/api/groups/${g.id}/students`);
        const data = await res.json();
        if (data.success && Array.isArray(data.students)) {
          for (const s of data.students) {
            list.push({
              id: s.enrollment_id || `${s.student_id}-${g.id}`,
              student_id: s.student_id || s.id,
              group_id: g.id,
              first_name: s.first_name,
              last_name: s.last_name,
              matricule: s.matricule,
              phone: s.phone || s.parent_phone || '',
              photo_url: s.photo_url || null,
              level_name: s.level_name || (this.levels?.find(l => l.id === s.level_id)?.name) || '',
              group_name: g.name,
              price_monthly: g.price_monthly || 0,
              subject_name: g.subject_name || '',
              teacher_name: g.teacher_name || '',
              registration_date: s.registration_date || '2026-09-01',
              discount_amount: s.discount_amount || 0,
              status: s.enrollment_status || 'active'
            });
          }
        }
      } catch (err) {
        // continue
      }
    }
    return list;
  }

  filterEnrollmentsTable() {
    const searchInput = document.getElementById('searchEnrollmentsTableInput');
    const groupFilter = document.getElementById('filterEnrollmentGroup');
    const statusFilter = document.getElementById('filterEnrollmentStatus');
    const monthFilter = document.getElementById('filterEnrollmentMonth');

    const term = (searchInput ? searchInput.value : '').trim().toLowerCase();
    const grpVal = groupFilter ? groupFilter.value : 'all';
    const stVal = statusFilter ? statusFilter.value : 'all';
    const monthVal = (monthFilter ? monthFilter.value : 'all');

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    const filtered = (this.inscriptionsList || []).filter(e => {
      // Month Filter (matching YYYY-MM)
      if (monthVal && monthVal !== 'all') {
        const regDate = e.registration_date || '';
        if (!regDate.startsWith(monthVal)) return false;
      }
      // Group Filter
      if (grpVal !== 'all' && String(e.group_id) !== String(grpVal)) return false;
      // Status Filter
      if (stVal !== 'all' && e.status !== stVal) return false;

      // Search
      if (!term) return true;

      const fn = norm(e.first_name);
      const ln = norm(e.last_name);
      const mat = (e.matricule || '').toLowerCase();
      const ph = (e.phone || '').toLowerCase();
      const gn = norm(e.group_name);
      const sub = norm(e.subject_name);
      const tn = norm(e.teacher_name);

      return `${fn} ${ln}`.includes(normTerm) ||
        `${ln} ${fn}`.includes(normTerm) ||
        mat.includes(normTerm) ||
        ph.includes(normTerm) ||
        gn.includes(normTerm) ||
        sub.includes(normTerm) ||
        tn.includes(normTerm);
    });

    this.renderInscriptionsTable(filtered);
  }

  populateEnrollmentMonthFilter() {
    const filterSelect = document.getElementById('filterEnrollmentMonth');
    if (!filterSelect) return;

    const currentVal = filterSelect.value || 'all';
    const isAr = this.lang === 'ar';

    // Tally counts per month
    const monthCounts = {};
    (this.inscriptionsList || []).forEach(e => {
      const m = (e.registration_date || '').slice(0, 7);
      if (m && m.length === 7 && m.includes('-')) {
        monthCounts[m] = (monthCounts[m] || 0) + 1;
      }
    });

    const sortedMonths = Object.keys(monthCounts).sort().reverse();

    let html = `<option value="all">${isAr ? 'كل الأشهر (الكل)' : 'Tous les mois (الكل)'}</option>`;
    sortedMonths.forEach(m => {
      const count = monthCounts[m];
      html += `<option value="${m}">${m} (${count} ${isAr ? 'عملية' : 'op.'})</option>`;
    });

    filterSelect.innerHTML = html;
    if ([...filterSelect.options].some(o => o.value === currentVal)) {
      filterSelect.value = currentVal;
    }
  }

  renderInscriptionsTable(list = []) {
    const tbody = document.getElementById('inscriptionsTableBody');
    if (!tbody) return;

    const isAr = this.lang === 'ar';

    if (!list || list.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="9" style="text-align: center; padding: 40px; color: var(--text-muted);">
            <div style="font-size: 36px; margin-bottom: 12px; color: #64748b;">
              <i class="fa-solid fa-folder-open"></i>
            </div>
            <div style="font-size: 15px; font-weight: 600;">
              ${isAr ? 'لا توجد تسجيلات مطابقة للمعايير المحددة' : 'Aucune inscription trouvée'}
            </div>
            <div style="font-size: 13px; margin-top: 4px;">
              ${isAr ? 'جرب تغيير نص البحث أو الفلتر أعلاه' : 'Essayez de modifier votre recherche ou vos filtres.'}
            </div>
          </td>
        </tr>
      `;

      const countInfo = document.getElementById('inscriptionsCountInfo');
      if (countInfo) countInfo.textContent = isAr ? 'عرض 0 تسجيل' : 'Affichage de 0 inscription';

      const revInfo = document.getElementById('inscriptionsTotalRevenue');
      if (revInfo) revInfo.textContent = '';
      return;
    }

    let totalMonthlyRevenue = 0;

    tbody.innerHTML = list.map((e, index) => {
      const normalPrice = parseFloat(e.price_monthly) || 0;
      const discount = parseFloat(e.discount_amount) || 0;
      const net = Math.max(0, normalPrice - discount);

      if (e.status === 'active') {
        totalMonthlyRevenue += net;
      }

      const isActive = e.status === 'active';
      const statusBadge = isActive
        ? `<span class="badge-pill badge-green"><i class="fa-solid fa-circle-check"></i> ${isAr ? 'نشط' : 'Actif'}</span>`
        : `<span class="badge-pill badge-red"><i class="fa-solid fa-circle-xmark"></i> ${isAr ? 'ملغى' : 'Annulé'}</span>`;

      const discountLabel = discount > 0
        ? `<div style="font-size: 11px; color: #f59e0b;">-${discount.toLocaleString('fr-FR')} DA</div>`
        : '';

      const actionBtn = isActive
        ? `<button class="btn-icon" style="color: #ef4444;" onclick="app.cancelEnrollmentFromInscriptions(${e.id}, ${e.student_id}, '${(e.first_name || '').replace(/'/g, "\\'")} ${(e.last_name || '').replace(/'/g, "\\'")}', '${(e.group_name || '').replace(/'/g, "\\'")}')" title="${isAr ? 'إلغاء التسجيل' : 'Désinscrire'}">
             <i class="fa-solid fa-user-minus"></i>
           </button>`
        : `<button class="btn-icon" style="color: #10b981;" onclick="app.reactivateEnrollment(${e.id})" title="${isAr ? 'إعادة التفعيل' : 'Réactiver'}">
             <i class="fa-solid fa-rotate-left"></i>
           </button>`;

      return `
        <tr style="${!isActive ? 'opacity: 0.65;' : ''}">
          <td style="color: var(--text-muted); font-size: 12px;">${index + 1}</td>
          <td style="font-size: 12px; white-space: nowrap;">
            <i class="fa-regular fa-calendar" style="color: var(--text-muted); margin-right: 4px;"></i>
            ${e.registration_date || '2026-09-01'}
          </td>
          <td>
            <div style="display: flex; align-items: center; gap: 8px;">
              <div style="width: 30px; height: 30px; border-radius: 50%; background: linear-gradient(135deg, #0284c7, #06b6d4); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; flex-shrink: 0;">
                ${((e.first_name || '')[0] || 'E').toUpperCase()}
              </div>
              <div>
                <a href="javascript:void(0)" onclick="app.openStudentProfile(${e.student_id})" style="font-weight: 600; color: var(--text-primary); text-decoration: none;">
                  ${e.first_name} ${e.last_name}
                </a>
                <div style="font-size: 11px; color: var(--text-muted);">
                  ${e.level_name || ''} ${e.phone ? `&bull; ${e.phone}` : ''}
                </div>
              </div>
            </div>
          </td>
          <td>
            <span class="badge-pill badge-cyan" style="font-size: 11px;">
              ${e.matricule || 'ELE-XXXX'}
            </span>
          </td>
          <td>
            <strong style="color: #38bdf8; font-size: 13px;">${e.group_name}</strong>
          </td>
          <td>
            <div>
              <span class="badge-pill badge-blue" style="font-size: 11px;">${e.subject_name || 'Général'}</span>
              <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">
                <i class="fa-solid fa-chalkboard-user"></i> ${e.teacher_name || 'Non assigné'}
              </div>
            </div>
          </td>
          <td style="text-align: right;">
            <strong style="color: #10b981; font-size: 13.5px;">${net.toLocaleString('fr-FR')} DA</strong>
            ${discountLabel}
          </td>
          <td style="text-align: center;">
            ${statusBadge}
          </td>
          <td style="text-align: center;">
            ${actionBtn}
          </td>
        </tr>
      `;
    }).join('');

    const countInfo = document.getElementById('inscriptionsCountInfo');
    if (countInfo) {
      countInfo.textContent = isAr
        ? `عرض ${list.length} تسجيل`
        : `Affichage de ${list.length} inscription(s)`;
    }

    const revBadge = document.getElementById('enrollmentsRevenueBadge');
    if (revBadge) {
      revBadge.textContent = isAr 
        ? `${totalMonthlyRevenue.toLocaleString('fr-FR')} دج / شهر` 
        : `${totalMonthlyRevenue.toLocaleString('fr-FR')} DA / mois`;
    }

    const revInfo = document.getElementById('inscriptionsTotalRevenue');
    if (revInfo) {
      revInfo.innerHTML = `
        <span style="color: var(--text-muted); font-size: 12px;">${isAr ? 'إجمالي الفوترة الشهرية النشطة :' : 'Total Facturation Mensuelle Active :'}</span>
        <span style="color: #10b981; font-size: 15px; font-weight: 700; margin-left: 6px; margin-right: 6px;">${totalMonthlyRevenue.toLocaleString('fr-FR')} ${isAr ? 'دج' : 'DA'}</span>
      `;
    }
  }

  async cancelEnrollmentFromInscriptions(enrollmentId, studentId, studentName, groupName) {
    const isAr = this.lang === 'ar';
    const msg = isAr
      ? `هل أنت متأكد من رغبتك في إلغاء تسجيل التلميذ (${studentName}) في الفوج (${groupName})؟`
      : `Voulez-vous vraiment désinscrire ${studentName} du groupe ${groupName} ?`;

    if (!confirm(msg)) return;

    try {
      const res = await fetch(`/api/enrollments/${enrollmentId}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        await this.loadInscriptionsList();
      } else {
        alert(data.error || (isAr ? 'حدث خطأ أثناء إلغاء التسجيل' : 'Erreur lors de la désinscription'));
      }
    } catch (err) {
      console.error(err);
      alert(isAr ? 'خطأ في الاتصال' : 'Erreur de connexion');
    }
  }

  async reactivateEnrollment(enrollmentId) {
    const isAr = this.lang === 'ar';
    if (!confirm(isAr ? 'هل تريد إعادة تفعيل هذا التسجيل؟' : 'Voulez-vous réactiver cette inscription ?')) return;

    try {
      const res = await fetch(`/api/enrollments/${enrollmentId}/reactivate`, { method: 'PATCH' });
      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        await this.loadInscriptionsList();
      } else {
        alert(data.error || 'Erreur lors de la réactivation');
      }
    } catch (err) {
      console.error(err);
    }
  }

  // --- EXPORTATION ET IMPRESSION DU RÉPERTOIRE ---
  exportEnrollmentsToExcel() {
    const searchInput = document.getElementById('searchEnrollmentsTableInput');
    const groupFilter = document.getElementById('filterEnrollmentGroup');
    const statusFilter = document.getElementById('filterEnrollmentStatus');
    const monthInput = document.getElementById('filterEnrollmentMonth');

    const term = (searchInput ? searchInput.value : '').trim().toLowerCase();
    const grpVal = groupFilter ? groupFilter.value : 'all';
    const stVal = statusFilter ? statusFilter.value : 'all';
    const monthVal = (monthInput ? monthInput.value : 'all');

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    const list = (this.inscriptionsList || []).filter(e => {
      if (monthVal && monthVal !== 'all' && (!e.registration_date || !e.registration_date.startsWith(monthVal))) return false;
      if (grpVal !== 'all' && String(e.group_id) !== String(grpVal)) return false;
      if (stVal !== 'all' && e.status !== stVal) return false;
      if (!term) return true;
      const fn = norm(e.first_name);
      const ln = norm(e.last_name);
      const mat = (e.matricule || '').toLowerCase();
      const ph = (e.phone || '').toLowerCase();
      const gn = norm(e.group_name);
      const sub = norm(e.subject_name);
      const tn = norm(e.teacher_name);
      return `${fn} ${ln}`.includes(normTerm) || `${ln} ${fn}`.includes(normTerm) || mat.includes(normTerm) || ph.includes(normTerm) || gn.includes(normTerm) || sub.includes(normTerm) || tn.includes(normTerm);
    });

    if (list.length === 0) {
      alert(this.lang === 'ar' ? 'لا توجد بيانات للتصدير' : 'Aucune donnée à exporter');
      return;
    }

    const isAr = this.lang === 'ar';
    const headers = isAr ? [
      'التاريخ', 'رقم القيد', 'اللقب', 'الاسم', 'المستوى', 'الهاتف', 'الفوج', 'المادة', 'الأستاذ', 'السعر العادي (دج)', 'الخصم (دج)', 'الصافي (دج)', 'الحالة'
    ] : [
      'Date Inscription', 'Matricule', 'Nom', 'Prénom', 'Niveau', 'Téléphone', 'Groupe', 'Matière', 'Enseignant', 'Tarif Normal (DA)', 'Remise (DA)', 'Net à Payer (DA)', 'Statut'
    ];

    const rows = list.map(e => {
      const normal = parseFloat(e.price_monthly) || 0;
      const disc = parseFloat(e.discount_amount) || 0;
      const net = Math.max(0, normal - disc);
      const statusStr = e.status === 'active' ? (isAr ? 'نشط' : 'Actif') : (isAr ? 'ملغى' : 'Annulé');

      return [
        `"${e.registration_date || ''}"`,
        `"${e.matricule || ''}"`,
        `"${(e.last_name || '').replace(/"/g, '""')}"`,
        `"${(e.first_name || '').replace(/"/g, '""')}"`,
        `"${(e.level_name || '').replace(/"/g, '""')}"`,
        `"${e.phone || ''}"`,
        `"${(e.group_name || '').replace(/"/g, '""')}"`,
        `"${(e.subject_name || '').replace(/"/g, '""')}"`,
        `"${(e.teacher_name || '').replace(/"/g, '""')}"`,
        normal,
        disc,
        net,
        `"${statusStr}"`
      ];
    });

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';'))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const fileSuffix = (monthVal && monthVal !== 'all') ? `_${monthVal}` : `_${new Date().toISOString().slice(0, 10)}`;
    a.download = `inscriptions_edumind${fileSuffix}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.playChime('success');
  }

  printEnrollmentsReport() {
    const isAr = this.lang === 'ar';
    const searchInput = document.getElementById('searchEnrollmentsTableInput');
    const groupFilter = document.getElementById('filterEnrollmentGroup');
    const statusFilter = document.getElementById('filterEnrollmentStatus');
    const monthInput = document.getElementById('filterEnrollmentMonth');

    const term = (searchInput ? searchInput.value : '').trim().toLowerCase();
    const grpVal = groupFilter ? groupFilter.value : 'all';
    const stVal = statusFilter ? statusFilter.value : 'all';
    const monthVal = (monthInput ? monthInput.value : 'all');

    const norm = (str) => (str || '').toLowerCase()
      .replace(/[أإآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .trim();

    const normTerm = norm(term);

    const list = (this.inscriptionsList || []).filter(e => {
      if (monthVal && monthVal !== 'all' && (!e.registration_date || !e.registration_date.startsWith(monthVal))) return false;
      if (grpVal !== 'all' && String(e.group_id) !== String(grpVal)) return false;
      if (stVal !== 'all' && e.status !== stVal) return false;
      if (!term) return true;
      const fn = norm(e.first_name);
      const ln = norm(e.last_name);
      const mat = (e.matricule || '').toLowerCase();
      const ph = (e.phone || '').toLowerCase();
      const gn = norm(e.group_name);
      const sub = norm(e.subject_name);
      const tn = norm(e.teacher_name);
      return `${fn} ${ln}`.includes(normTerm) || `${ln} ${fn}`.includes(normTerm) || mat.includes(normTerm) || ph.includes(normTerm) || gn.includes(normTerm) || sub.includes(normTerm) || tn.includes(normTerm);
    });

    if (list.length === 0) {
      alert(isAr ? 'لا توجد بيانات للطباعة' : 'Aucune donnée à imprimer');
      return;
    }

    const schoolName = this.settings?.school_name || 'EDUMIND';
    const schoolPhone = this.settings?.school_phone || '';
    const dateStr = new Date().toLocaleDateString(isAr ? 'ar-DZ' : 'fr-FR');

    let totalNet = 0;
    const tableRows = list.map((e, idx) => {
      const normal = parseFloat(e.price_monthly) || 0;
      const disc = parseFloat(e.discount_amount) || 0;
      const net = Math.max(0, normal - disc);
      if (e.status === 'active') totalNet += net;

      return `
        <tr>
          <td style="text-align: center;">${idx + 1}</td>
          <td>${e.registration_date || ''}</td>
          <td><strong>${e.first_name} ${e.last_name}</strong></td>
          <td style="text-align: center;"><code>${e.matricule}</code></td>
          <td>${e.group_name}</td>
          <td>${e.subject_name || ''} - ${e.teacher_name || ''}</td>
          <td style="text-align: right; font-weight: bold;">${net.toLocaleString('fr-FR')} DA</td>
          <td style="text-align: center;">${e.status === 'active' ? 'Actif' : 'Annulé'}</td>
        </tr>
      `;
    }).join('');

    const html = `
      <!DOCTYPE html>
      <html dir="${isAr ? 'rtl' : 'ltr'}">
      <head>
        <meta charset="utf-8">
        <title>Rapport des Inscriptions - ${schoolName}</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, sans-serif; margin: 20px; color: #1e293b; font-size: 12px; }
          .header { display: flex; justify-content: space-between; border-bottom: 2px solid #06b6d4; padding-bottom: 12px; margin-bottom: 16px; }
          .title { font-size: 20px; font-weight: bold; color: #0284c7; }
          table { width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 11.5px; }
          th, td { border: 1px solid #cbd5e1; padding: 6px 8px; }
          th { background: #f1f5f9; color: #334155; font-weight: 600; }
          .total-box { margin-top: 16px; text-align: ${isAr ? 'left' : 'right'}; font-size: 14px; font-weight: bold; }
          @media print { @page { size: A4 landscape; margin: 12mm; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="title">${schoolName}</div>
            <div>${schoolPhone ? 'Tél: ' + schoolPhone : ''}</div>
          </div>
          <div style="text-align: ${isAr ? 'left' : 'right'};">
            <h3>${isAr ? 'تقرير تسجيلات التلاميذ في الأفواج' : 'Rapport des Inscriptions aux Cours'}</h3>
            <div>${monthVal && monthVal !== 'all' ? (isAr ? `الشهر: <strong>${monthVal}</strong> &bull; ` : `Mois: <strong>${monthVal}</strong> &bull; `) : ''}Date: ${dateStr} &bull; Total: ${list.length} élève(s)</div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 30px;">#</th>
              <th>Date</th>
              <th>Élève</th>
              <th>Matricule</th>
              <th>Groupe</th>
              <th>Matière & Enseignant</th>
              <th>Tarif Net</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>

        <div class="total-box">
          ${isAr ? 'إجمالي الفوترة الشهرية النشطة:' : 'Total Facturation Mensuelle Active:'} 
          <span style="color: #0284c7;">${totalNet.toLocaleString('fr-FR')} DA</span>
        </div>

        <script>
          window.onload = () => { window.print(); };
        </script>
      </body>
      </html>
    `;

    const printWin = window.open('', '_blank', 'width=950,height=750');
    if (printWin) {
      printWin.document.write(html);
      printWin.document.close();
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
      } catch (e) { }
      return ["Paiement élève", "Inscription", "Avance", "Don / Subvention", "Autre entrée"];
    } else {
      try {
        if (this.settings?.caisse_categories_sortie) {
          const parsed = JSON.parse(this.settings.caisse_categories_sortie);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) { }
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
    const isAr = this.lang === 'ar';
    try {
      const res = await fetch('/api/backup/list');
      const data = await res.json();
      if (data.success && data.backups && data.backups.length > 0) {
        listContainer.innerHTML = data.backups.map(b => `
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 9px 14px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); border-radius: 8px; font-size: 13px; gap: 8px; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-file-shield" style="color: #10b981; font-size: 15px;"></i>
              <div>
                <span style="font-weight: 600; color: var(--text-color);">${isAr ? 'نسخة احتياطية ليوم' : 'Sauvegarde du'} ${b.dateStr}</span>
                <span style="color: var(--text-muted); font-size: 11px; margin-left: 6px;">(${b.sizeKb} Ko)</span>
              </div>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
              <button type="button" class="btn-secondary" onclick="app.restoreArchiveBackup('${b.filename}')" style="padding: 5px 12px; font-size: 11.5px; border: 1px solid #f59e0b; color: #f59e0b; background: rgba(245,158,11,0.1); cursor: pointer; display: inline-flex; align-items: center; gap: 6px;" title="${isAr ? 'استرجاع هذه النسخة الاحتياطية' : 'Restaurer cette archive'}">
                <i class="fa-solid fa-rotate-left"></i> ${isAr ? 'استرجاع' : 'Restaurer'}
              </button>
              <a href="/api/backup/download-archive/${b.filename}" class="btn-secondary" style="padding: 5px 12px; font-size: 11.5px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">
                <i class="fa-solid fa-download"></i> ${isAr ? 'تحميل' : 'Télécharger'}
              </a>
            </div>
          </div>
        `).join('');
      } else {
        listContainer.innerHTML = `<div style="color: var(--text-muted); font-size: 12.5px; font-style: italic; padding: 6px 0;">${isAr ? 'لا توجد نسخ مؤرشفة حالياً. يتم إنشاء نسخة تلقائية كل يوم.' : 'Aucune archive pour le moment. Une sauvegarde se crée automatiquement chaque jour.'}</div>`;
      }
    } catch (e) {
      console.warn('Erreur chargement archives de sauvegarde:', e);
      listContainer.innerHTML = `<div style="color: var(--text-muted); font-size: 12px;">Impossible de charger la liste des archives.</div>`;
    }
  }

  async handleSqliteRestoreUpload(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    // Reset so same file can be re-selected if desired
    e.target.value = '';

    const isAr = this.lang === 'ar';
    const confirmMsg = isAr
      ? `⚠️ تنبيه هام واستثنائي :\n\nاسترجاع قاعدة البيانات من الملف "${file.name}" سيستبدل كافة البيانات الحالية في البرنامج!\n\n(سيقوم النظام بحفظ نسخة أمان احتياطية لبياناتك الحالية تلقائياً قبل البدء).\n\nهل أنت متأكد من الاسترجاع والمتابعة الآن؟`
      : `⚠️ AVERTISSEMENT IMPORTANT :\n\nLa restauration depuis le fichier "${file.name}" remplacera TOUTES les données actuelles de l'établissement !\n\n(Une copie de sécurité automatique de vos données actuelles sera créée avant la restauration).\n\nConfirmez-vous la restauration immédiate ?`;

    if (!confirm(confirmMsg)) return;

    try {
      const res = await fetch('/api/backup/restore', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/octet-stream'
        },
        body: file
      });

      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        alert(isAr ? '✅ تم استرجاع قاعدة البيانات بنجاح! سيتم الآن إعادة تحميل البرنامج لتحديث البيانات...' : '✅ Base de données restaurée avec succès ! L\'application va maintenant redémarrer...');
        setTimeout(() => {
          window.location.reload();
        }, 1200);
      } else {
        alert((isAr ? '❌ فشل الاسترجاع: ' : '❌ Échec de la restauration : ') + (data.error || 'Erreur inconnue'));
      }
    } catch (err) {
      console.error('Erreur upload restore:', err);
      alert(isAr ? '❌ خطأ أثناء رفع ملف قاعدة البيانات' : '❌ Erreur de communication lors de l\'envoi du fichier : ' + err.message);
    }
  }

  async restoreArchiveBackup(filename) {
    const isAr = this.lang === 'ar';
    const confirmMsg = isAr
      ? `⚠️ هل أنت متأكد من استرجاع النسخة الاحتياطية (${filename})؟ ستستبدل بيانات العمل الحالية.`
      : `⚠️ Voulez-vous vraiment restaurer la sauvegarde (${filename}) ? Les données actuelles seront remplacées.`;

    if (!confirm(confirmMsg)) return;

    try {
      const res = await fetch(`/api/backup/restore-archive/${encodeURIComponent(filename)}`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        this.playChime('success');
        alert(isAr ? '✅ تم استرجاع النسخة الاحتياطية بنجاح! جاري التحديث...' : '✅ Base restaurée avec succès ! Rechargement en cours...');
        setTimeout(() => { window.location.reload(); }, 1200);
      } else {
        alert((isAr ? '❌ خطأ: ' : '❌ Erreur : ') + (data.error || 'Erreur'));
      }
    } catch (err) {
      console.error(err);
      alert(isAr ? '❌ خطأ في الاتصال بالخادم' : '❌ Erreur de connexion');
    }
  }

  async saveSettings() {
    return this.saveEtablissementSettings();
  }

  closeModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    this._savingStudent = false;
    this._savingTeacher = false;
  }
}

// Instantiate and start app
const app = new EdumindApp();
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
