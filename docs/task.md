# 📋 Backlog & Tâches — Adopte un motard

Source unique de vérité pour les tâches, jalons et actions en cours de l'équipe Webomatik.

---

## 🟢 Tâches Stabilisées & Terminées (Production)
- [x] **Socle Technique & CI/CD** : Initialisation Astro 6 + React 19 + Tailwind v4 + déploiement automatique sur Infomaniak.
- [x] **Design System & Responsive UI** : Esthétique Dark-Tech Electric Mobility avec support View Transitions Light/Dark (Light par défaut).
- [x] **Interactivité & Micro-interactions** : FloatingDock réactif, Luminous Arc, bouton SlideToJoin (Framer Motion), aperçu de cours (`CoursePreview`), widget YouTube officiel.
- [x] **Optimisation de la Conversion** : Funnel direct sans friction avec prix unique (29€), CTA sécurisés menant au checkout.
- [x] **Performance & Assets (Core Web Vitals)** : Migration complète vers `astro:assets` (WebP), logo Hero limité à 600px, mise en cache Apache `mod_expires` (1 an pour médias/polices).
- [x] **Résilience & Rollback** : Sauvegarde post-déploiement automatique vers Swiss Backup S3 avec rotation 30j/12m et workflow GitHub Actions de Rollback 1 clic.
- [x] **Sécurité SSH & CI Durcie** : Prise en charge des clés asymétriques ED25519, `ssh-keyscan` dynamique et fallback SSHPASS en IPv4.
- [x] **Archéologie & Documentation Historique** : Reconstitution des fiches rétroactives dans `docs/journal/` et indexation Hub & Spoke.
- [x] **Audit Sécurité & Patch Astro 7 (Local)** : Montée vers Astro ^7.4.12, Sharp ^0.35.5 et Vite ^6.4.6 (0 vulnérabilité).
- [x] **Correctif YAML deploy.yml & Push Production** : Réparation de la ligne 25 de `.github/workflows/deploy.yml`, validation du build Astro 7 et push sur `origin/main`.
- [x] **Retrait Section Témoignages (v2.5.1)** : Désactivation complète du carrousel de 9 avis fictifs et de l'ancre `#temoignages` dans `Navbar.tsx` (conformité légale, 0 résidu dans `dist/`).
- [x] **Zone DNS Infomaniak (Emails Amen `contact@`)** : Ajout de `MX 10 mail-fr.securemail.pro` et mise à jour du SPF vers `v=spf1 include:spf.webapps.net ~all` sur `adopteunmotard.com`, propagés et vérifiés par `dig`.

---

## 🟡 Tâches en Cours / À Arbitrer (Backlog Immédiat)
- [ ] **Audit Lighthouse & Core Web Vitals en Production** : Valider les scores réels sur l'URL de production `https://adopteunmotard.com`.
- [ ] **Validation du Taux de Clic du Funnel** : Contrôler le parcours utilisateur post-retrait du carré de prix Hero (conversion bas de page).
- [ ] **Transition Clé SSH ED25519 Définitive** : Vérifier que le secret GitHub `SSH_PRIVATE_KEY` est activé sur le repository pour s'affranchir complètement du mode SSHPASS.
- [ ] **Préparation Rétrofit Hub CMS (Optionnel)** : Évaluer l'opportunité de connecter le catalogue de témoignages ou les modules de formation au Hub Webomatik / PocketBase.

---

*Fichier synchronisé par l'équipe Webomatik sous la supervision de Kuroko et Nico Robin.*
