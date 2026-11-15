# 📚 Carnet de Bord — Adopte un motard (Nico Robin)


<!-- ROBIN-AUTO-SYNC-START -->
### 🔄 Auto-Rattrapage Robin (2026-11-15 — Synchronisé avec Git & Fichiers)
- `2026-11-15` (`83f7c42`) : sec(audit): patch astro ^7.4.12 & durcissement .htaccess (Cloudflare Audit)
- `2026-10-23` (`5583518`) : chore: snapshot local changes & Webomatik Auto-Carnet
- `2026-10-09` (`3be8e6b`) : fix(security): update dependencies to astro ^7.3.8 and sharp ^0.35.5 (0 vulnerabilities)
- `2026-09-23` (`4907971`) : ci: modernize deployment workflow with auto-detecting ssh-key & keyscan
- `2026-09-15` (`a5cfc22`) : ci: 🐛 Fix YAML indentation for S3 backup
- **État Git** : Arbre propre, `main` en avance sur `origin/main` (commits locaux en attente de push — corriger la ligne 25 de `.github/workflows/deploy.yml` avant `git push`).
<!-- ROBIN-AUTO-SYNC-END -->
---

## 🧭 PHASE 1: ÉTAT ACTUEL & CONTEXTE OPÉRATIONNEL (VIVANT)
*Dernière synchronisation : 2026-11-15 — Statut : PRODUCTION STABLE / COMMITS LOCAUX EN ATTENTE DE PUSH*

* **Projet** : Adopte un motard (Plateforme d'accompagnement & formation à la mobilité électrique)
* **URL de Production** : [https://adopteunmotard.com](https://adopteunmotard.com)
* **Version Active** : `v2.5.0` (Stabilité validée, images WebP haute performance)
* **Stack Technique** :
  - **Moteur SSG** : [Astro ^7.4.12](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/astro.config.mjs) (Vite ^6.4.6, Sharp ^0.35.5)
  - **UI & Composants dynamiques** : React 19.2.5 & Framer Motion 12.38.0
  - **Styles** : Tailwind CSS v4.2.4 (intégré via `@tailwindcss/vite`)
  - **Icônes & Typo** : `@tabler/icons-react`, `lucide-react`, `@fontsource/inter`
* **Infrastructure & CI/CD** :
  - **Hébergeur** : Infomaniak Web Hosting (Mutualisé, cible relative : `sites/adopteunmotard.com`)
  - **Pipeline CI/CD** : GitHub Actions ([deploy.yml](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/.github/workflows/deploy.yml)) avec bi-mode Clé ED25519 / SSHPASS durci (IPv4 forcée, keyscan dynamique)
  - **Résilience & Sauvegarde** : Snapshot automatique de chaque build vers Swiss Backup S3 (`webomatik-backups`), rétention 30j/12m, et procédure de [Rollback 1 clic](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/.github/workflows/rollback.yml)
* **Routes & Architecture de Page** :
  - `/` : Landing page principale monobloc (Sections : Hero, Constat, Promesse/Expertise, Programme 12 modules, Pour Qui, Tarifs/Investissement, Témoignages, Final CTA)
  - `/robots.txt` & `/sitemap-index.xml` : Référencement naturel automatisé
* **🚫 Arbitrages & Pistes Écartées (Ne pas reproposer)** : Aucun badge de prix dans le Hero (retiré volontairement le 2026-05-31 pour favoriser la lecture narrative du tunnel) ; CTA Hero en « Slide-to-Join » plutôt qu'un bouton classique ; navigation unifiée dans `Navbar.tsx` (`client:load`) sans hybride Astro/React.
* **Backlog Actif** : 👉 **Consulter impérativement la source de vérité :** [docs/task.md](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/docs/task.md)

---

## 🗂️ PHASE 2: ARCHITECTURE DOCUMENTAIRE (HUB & SPOKE)
*Ce carnet délègue les détails techniques et historiques à des fiches ciblées afin de préserver l'économie de tokens :*

- 📖 **Registre du Journal & Archéologie Git** : [docs/journal/INDEX.md](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/docs/journal/INDEX.md)
  - Fiches quotidiennes exhaustives conservées dans `docs/journal/YYYY-MM-DD.md`.
- 📋 **Tâches & Backlog en cours** : [docs/task.md](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/docs/task.md)
- 🐛 **Registre des Incidents & Correctifs** : [.learnings/ERREURS.md](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/.learnings/ERREURS.md)
- 💡 **Règles d'Architecture & Préférences** : [.learnings/METHODES.md](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/.learnings/METHODES.md)
- 🎨 **Charte Graphique & Spécifications UI** : [design.md](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/design.md)
- 🧠 **Mémoire Globale Antigravity** : `~/.gemini/config/skills/core_brain.md`

---

## ⚡ PHASE 3: DERNIÈRES DÉCISIONS & SYNTHÈSE DES SESSIONS
*Consulter les fiches dédiées dans `docs/journal/` pour l'historique complet.*

1. **Patchs Sécurité Astro 7 & Audit Dépendances (2026-10-09 & 2026-11-15)** :
   - Montée de version vers Astro `^7.4.12`, Vite `^6.4.6` et Sharp `^0.35.5` (0 vulnérabilité npm, audit Cloudflare).
2. **Modernisation SSH & Sécurité (2026-09-23)** :
   - Mise en place du support de clé privée ED25519 avec `ssh-keyscan` automatique.
   - Suppression des flags permissifs, conservation du fallback SSHPASS sécurisé IPv4.
3. **Système de Résilience S3 & Rollback 1 clic (2026-09-15)** :
   - Sauvegarde post-build immédiate sur Swiss Backup S3 Infomaniak.
   - Workflow GitHub Actions dédié pour restaurer une version précédente en 30 secondes sans compilation.
4. **Optimisation CI `npm ci` (2026-06-24)** :
   - Installation déterministe et accélérée sur runner GitHub Actions.
5. **Désencombrement du Hero & Favicon Carré (2026-05-31)** :
   - Retrait du badge de prix dans le Hero pour favoriser la lecture narrative du tunnel de vente.
   - Intégration d'un favicon carré haute définition pour affichages desktop/mobile.
6. **Refonte Performance & Assets v2.5.0 (2026-05-05)** :
   - Conversion WebP native Astro (`astro:assets`), réduction de 80% du poids des médias, LCP optimisé.
