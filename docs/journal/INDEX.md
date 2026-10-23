# 📖 Registre Historique & Annuaire du Journal de Bord

Cet index centralise l'intégralité des fiches de session et jalons d'ingénierie du projet **Adopte un motard**.  
Conformément à l'architecture de documentation "Hub & Spoke", chaque entrée synthétise le contexte opérationnel, les incidents rencontrés et pointe vers le compte-rendu exhaustif du jour.

---

## 🗂️ Table des Sessions & Jalons Historiques

| Date | Thème & Version | Mots-clés / Modules | Incidents & Arbitrages Clés | Fiche Détaillée |
| :--- | :--- | :--- | :--- | :---: |
| **2026-05-03** | Genesis, Big Bang technique & CI Infomaniak (`v1.0.0`) | Astro 6, React 19, Tailwind v4, CI/CD, `.htaccess`, Infomaniak | Échec setup-node CI résolu ; déploiement RSYNC sécurisé via variable d'environnement `SSHPASS`. | [Lire la fiche](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/docs/journal/2026-05-03.md) |
| **2026-05-04** | Développement UI massif & Pivot Design System (`v1.1.0` → `v2.4.3`) | Aceternity UI, FloatingDock, Mobile Dock Arc, Dark-Tech Pivot, SlideToJoin, Testimonials, Savings Calculator, View Transitions Light/Dark, LiquidSwitch, SEO | Non-serializable props Astro/React contournées via `href` ; refonte Navbar en React pur ; retrait du calculateur de ROI ; animation View Transitions. | [Lire la fiche](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/docs/journal/2026-05-04.md) |
| **2026-05-05** | Refonte Performance & Assets (`v2.5.0` → `v2.5.2`) | `astro:assets`, WebP, Core Web Vitals, LCP Hero, Apache `mod_expires`, Caching | Poids des images réduit de >80% ; redimensionnement du logo Hero à 600px max (LCP) ; cache navigateur d'un an activé. | [Lire la fiche](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/docs/journal/2026-05-05.md) |
| **2026-05-11** | CI / Migration pipeline serveur isolé | GitHub Actions, TARGET_PATH, hébergement mutualisé Infomaniak | Conflits potentiels de répertoires résolus par un chemin relatif strict `sites/adopteunmotard.com`. | [Lire la fiche](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/docs/journal/2026-05-11.md) |
| **2026-05-18** | CI / Webhook de notification d'échec | Monitoring, Webhook POST, Kuroko alert, GitHub Actions | Échecs silencieux éliminés grâce à une notification HTTP POST instantanée conditionnée à `if: failure()`. | [Lire la fiche](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/docs/journal/2026-05-18.md) |
| **2026-05-31** | Ajustements UI : Hero & Favicon | Hero, désencombrement, Favicon carré, identité visuelle, conversion | Retrait du carré de prix prématuré dans le Hero ; intégration d'un favicon carré haute définition pour mobile/desktop. | [Lire la fiche](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/docs/journal/2026-05-31.md) |
| **2026-06-24** | CI / Optimisation npm ci | Pipeline speed, `npm ci`, package-lock, déterminisme CI | Accélération du temps de run et suppression des risques de dérive de sous-dépendances en production. | [Lire la fiche](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/docs/journal/2026-06-24.md) |
| **2026-09-15** | CI / Sauvegarde S3 & Rollback 1 clic | Swiss Backup S3, Infomaniak S3, boto3 rotation, Rollback dispatch | Erreur d'indentation Python corrigée ; mise en place de la rétention 30j / 12m et restauration en moins de 30s. | [Lire la fiche](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/docs/journal/2026-09-15.md) |
| **2026-09-23** | CI / Modernisation SSH ED25519 & Keyscan | Clé asymétrique ED25519, `ssh-keyscan`, `known_hosts`, fallback SSHPASS | Élimination de `StrictHostKeyChecking=no` et prise en charge bi-mode clé privée / mot de passe durci avec IPv4 forcée. | [Lire la fiche](file:///Volumes/Bakku%20Pakku/APP%20DEV/Sites/adopte%20un%20motard/docs/journal/2026-09-23.md) |

---

*Index maintenu par Nico Robin (Archiviste & Gardienne de la Mémoire)*
