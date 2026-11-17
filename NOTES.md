# 📚 Carnet de Bord — Adopte un motard (Nico Robin)


<!-- ROBIN-AUTO-SYNC-START -->
### 🔄 Auto-Rattrapage Robin (2026-11-15 — Clôture de Session)
- `2026-11-15` : Clôture complète — [fiche du jour](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/docs/journal/2026-11-15.md), DNS `MX`/`SPF` Amen propagés, incident FTP `fudoki` résolu (`HTTP 200`, `v2.5.1`).
- `2026-11-15` (`v2.5.1`, `ce92d57`) : feat(landing): remove testimonials section & navbar anchor (conformité légale)
- `2026-11-15` (`d58c230`) : fix(ci): repair deploy.yml YAML syntax, IPv4 & S3 resilience
- `2026-11-15` (`83f7c42`) : sec(audit): patch astro ^7.4.12 & durcissement .htaccess (Cloudflare Audit)
- `2026-10-23` (`5583518`) : chore: snapshot local changes & Webomatik Auto-Carnet
- **État Git** : Session clôturée, arbre propre et synchronisé avec `origin/main` (`https://adopteunmotard.com` live en `v2.5.1`, `MX 10 mail-fr.securemail.pro` + SPF Amen actifs).
<!-- ROBIN-AUTO-SYNC-END -->
---

## 🧭 PHASE 1: ÉTAT ACTUEL & CONTEXTE OPÉRATIONNEL (VIVANT)
*Dernière synchronisation : 2026-11-15 (Clôture) — Statut : 100% STABLE / PRODUCTION SYNCHRONISÉE*

* **Projet** : Adopte un motard (Plateforme d'accompagnement & formation à la mobilité électrique)
* **URL de Production** : [https://adopteunmotard.com](https://adopteunmotard.com) et [https://www.adopteunmotard.com](https://www.adopteunmotard.com) (`HTTP 200`, site 100 % statique sans formulaire ni envoi SMTP local)
* **Version Active** : `v2.5.2` (Migration Production Dédiée vers Cloud Managé Infomaniak 4x9nbc - Pa ; MX Amen `10 mail-fr.securemail.pro.` 100% préservé)
* **Stack Technique** :
  - **Moteur SSG** : [Astro ^7.4.12](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/astro.config.mjs) (Vite ^6.4.6, Sharp ^0.35.5)
  - **UI & Composants dynamiques** : React 19.2.5 & Framer Motion 12.38.0
  - **Styles** : Tailwind CSS v4.2.4 (intégré via `@tailwindcss/vite`)
  - **Icônes & Typo** : `@tabler/icons-react`, `lucide-react`, `@fontsource/inter`
* **Infrastructure & CI/CD** :
  - **Hébergeur** : Cloud Managé Infomaniak (`4x9nbc.ftp.infomaniak.com`, cible : `sites/adopteunmotard.com`) - Migré depuis l'ancien mutualisé `pl0pg8`
  - **Pipeline CI/CD** : GitHub Actions ([deploy.yml](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/.github/workflows/deploy.yml)) avec clé ED25519 (`infomaniak_aefe_dep`), `StrictHostKeyChecking=accept-new`
  - **Résilience & Sauvegarde** : Snapshot automatique de chaque build vers Swiss Backup S3 (`webomatik-backups`), rétention 30j/12m, et procédure de [Rollback 1 clic](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/.github/workflows/rollback.yml)
* **Routes & Architecture de Page** :
  - `/` : Landing page principale monobloc (Sections : Hero, Constat, Promesse/Expertise, Programme 12 modules, Pour Qui, Tarifs/Investissement, Final CTA — Témoignages désactivés en `v2.5.1`)
  - `/robots.txt` & `/sitemap-index.xml` : Référencement naturel automatisé
* **🚫 Arbitrages & Pistes Écartées (Ne pas reproposer)** : Aucun badge de prix dans le Hero (retiré volontairement le 2026-05-31 pour favoriser la lecture narrative du tunnel) ; CTA Hero en « Slide-to-Join » plutôt qu'un bouton classique ; navigation unifiée dans `Navbar.tsx` (`client:load`) sans hybride Astro/React ; Section Témoignages désactivée (conformité légale — zéro faux avis client, à réactiver uniquement avec de vrais témoignages).
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

1. **Zone DNS Infomaniak & Messagerie Amen (2026-11-15)** :
   - Ajout de `MX 10 mail-fr.securemail.pro` (`.`) et remplacement du SPF (`TXT` `34011230`) par `"v=spf1 include:spf.webapps.net ~all"` via API Infomaniak v2, vérifiés sur `ns11`/`ns12` et `8.8.8.8`/`1.1.1.1`.
2. **Retrait Légal des Témoignages Fictifs — v2.5.1 (2026-11-15)** :
   - Désactivation de `<Testimonials />` sur l'accueil et retrait de l'ancre `#temoignages` dans `Navbar.tsx` (0 résidu texte/photo dans `dist/`, composant conservé hors-build pour futurs vrais avis).
3. **Patchs Sécurité Astro 7 & Audit Dépendances (2026-10-09 & 2026-11-15)** :
   - Montée de version vers Astro `^7.4.12`, Vite `^6.4.6` et Sharp `^0.35.5` (0 vulnérabilité npm, audit Cloudflare).
4. **Modernisation SSH & Sécurité (2026-09-23)** :
   - Mise en place du support de clé privée ED25519 avec `ssh-keyscan` automatique.
   - Suppression des flags permissifs, conservation du fallback SSHPASS sécurisé IPv4.
5. **Système de Résilience S3 & Rollback 1 clic (2026-09-15)** :
   - Sauvegarde post-build immédiate sur Swiss Backup S3 Infomaniak.
   - Workflow GitHub Actions dédié pour restaurer une version précédente en 30 secondes sans compilation.
6. **Optimisation CI `npm ci` (2026-06-24)** :
   - Installation déterministe et accélérée sur runner GitHub Actions.
7. **Désencombrement du Hero & Favicon Carré (2026-05-31)** :
   - Retrait du badge de prix dans le Hero pour favoriser la lecture narrative du tunnel de vente.
   - Intégration d'un favicon carré haute définition pour affichages desktop/mobile.
8. **Refonte Performance & Assets v2.5.0 (2026-05-05)** :
   - Conversion WebP native Astro (`astro:assets`), réduction de 80% du poids des médias, LCP optimisé.
