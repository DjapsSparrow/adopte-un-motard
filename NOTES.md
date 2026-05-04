# PHASE 1: ÉTAT ACTUEL
(2026-05-04) - **STABILITÉ: 100% BLEU (Widgets Swap)**

## 🚀 Résumé de Session
Inversion des positions des widgets flottants pour éviter les chevauchements avec les menus. L'aperçu du programme est désormais à gauche (avec ouverture latérale gauche) et le widget YouTube est à droite.

### Fichiers Modifiés :
- `package.json` : Passage en v1.8.8.
- `src/components/ui/CoursePreview.tsx` : Bascule à gauche (bouton + sidebar).
- `src/components/ui/YouTubeWidget.tsx` : Bascule à droite (bouton + label).

### Objectif Prochain :
- Test de performance mobile final.

## 📜 Journal des Versions (Changelog)
- **v1.8.8** (2026-05-04) : Widgets Swap. Inversion CoursePreview (gauche) et YouTubeWidget (droite). Sidebar Aperçu s'ouvre depuis la gauche.
- **v1.8.7** (2026-05-04) : Mobile UI Cleanup. Masquage du ScrollToTop sur mobile et alignement des widgets YouTube/Aperçu à `bottom-20`.
- **v1.8.6** (2026-05-04) : Course Preview Sidebar. Panneau latéral interactif listant les 12 modules et leçons pour rassurer sur le contenu avant l'achat.
- **v1.8.5** (2026-05-04) : Marketing Polish. Optimisation du wording ("3h de conseils pour éviter les pièges") pour augmenter la valeur perçue.
- **v1.8.4** (2026-05-04) : Testimonials Expansion. Ajout de 4 avis supplémentaires couvrant la montagne, le touring longue distance et la technique mécanique.
- **v1.8.3** (2026-05-04) : Authentic Testimonials. Remplacement des placeholders par 5 avis stratégiques (peur de l'autonomie, choix du modèle, sécurité urbaine, etc.) avec portraits réels.
- **v1.8.2** (2026-05-04) : YouTube Integration. Widget flottant bas-gauche menant à la chaîne officielle pour renforcer l'autorité métier.
- **v1.8.1** (2026-05-04) : ScrollToTop Utility. Bouton dynamique apparaissant à 45% de scroll (fade in vers le haut) et disparaissant en dessous (fade out vers le bas).
- **v1.8.0** (2026-05-04) : Funnel Optimization. Déplacement du `SlideToJoin` en clôture de page. Le Hero affiche désormais le prix (29€) et la durée de formation (+2h) pour maximiser la perception de valeur immédiate.
- **v1.7.9** (2026-05-04) : Library Sync. Extraction et ajout du composant `SlideToJoin` à la bibliothèque Antigravity globale.
- **v1.7.8** (2026-05-04) : Build Hotfix. Correction d'une variable non définie (`target`) empêchant le pré-rendu static du site.
- **v1.7.7** (2026-05-04) : Navbar Reordering. Alignement des items du dock avec l'ordre réel des sections (Accueil > Programme > Ma Promesse > Pour qui > Tarifs > Témoignages > Rejoindre).
- **v1.7.6** (2026-05-04) : Sales CTA & External Liaison. Intégration du lien d'achat (29€) sur tous les CTAs avec ouverture `_blank`. Ajout d'un bloc de prix dans la section Investissement.
- **v1.7.5** (2026-05-04) : SlideToJoin Contrast Fix. Amélioration de la lisibilité du texte sur l'arc lumineux (Backdrop blur + Darker bg).
- **v1.7.4** (2026-05-04) : Above-the-fold Optimization. Hiérarchie corrigée et tailles ajustées pour garantir la visibilité du CTA sans scroll.
- **v1.7.3** (2026-05-04) : Hero Layout Adjustment. Contenu remonté et restauration du logo.
- **v1.7.2** (2026-05-04) : High-Fidelity Luminous Arc. Intégration d'un arc SVG parallax inspiré de Bolt.new.
- **v1.7.1** (2026-05-04) : Hotfix Lucide Icons. Correction de l'import `Tool` -> `Wrench`.
- **v1.7.0** (2026-05-04) : Content Restoration & Swipe Interaction. Réintégration de la copie métier et ajout du bouton interactif "Slide to Join".
- **v1.6.0** (2026-05-04) : Major Design System Pivot. Transition vers l'esthétique "Antigravity Electric Mobility" (Full Dark, Electric Blue, Bento Grid).
- **v1.5.4** (2026-05-04) : Hero Background Refresh. Nouvelle image "Signature" pour un impact visuel accru.
- **v1.5.3** (2026-05-04) : Security Hardening. Audit complet, Referrer-Policy renforcée, blocage étendu des fichiers sensibles.
- **v1.5.2** (2026-05-04) : Click-outside Mobile Menu. Fermeture automatique si on clique n'importe où ailleurs sur l'écran.
- **v1.5.1** (2026-05-04) : Auto-close Mobile Menu. Le menu se replie automatiquement après la sélection d'une section.
- **v1.5.0** (2026-05-04) : Simplified Mobile Dock. Trigger à droite, menu vertical, texte à gauche.
- **v1.4.3** (2026-05-04) : iPhone Viewport Fix. Resserrement de l'arc pour garantir que les labels restent dans l'écran sur les téléphones étroits.
- **v1.4.2** (2026-05-04) : Dynamic Label Positioning. Les labels s'écartent vers l'extérieur pour éviter tout chevauchement.
- **v1.4.1** (2026-05-04) : Mobile Dock Labels. Ajout de texte sous les pictos pour compenser l'absence de hover sur mobile.
- **v1.4.0** (2026-05-04) : New Mobile Dock Arc. Déploiement semi-circulaire pour éviter l'obstruction centrale.
- **v1.3.1** (2026-05-04) : Fix espacement blocs Problem (flex gap).
- **v1.3.0** (2026-05-04) : UX Polish. Hero haute visibilité, ElectricText, Dock optimisé, Espacement sections.
- **v1.2.0** (2026-05-04) : UI Enhancements (Aceternity UI). FloatingDock, CanvasText, AnimatedTestimonials.
- **v1.1.0** (2026-05-04) : Intégration de la Landing Page. Style Papier, Inter font, structure complète.
- **v1.0.0** (2026-05-03) : Big Bang technique. Astro + React + Tailwind + Sécurité.



---

# PHASE 2: HISTORIQUE
(Vide - Début du projet)

