# Design System : AdopteUnMotard (Signature Fusion)

## 1. Philosophie & Atmosphere

Ce design repose sur la clarte absolue et la consonance visuelle avec votre identite d'expert. L'interface s'efface pour laisser place au texte et a la promesse. C'est un style Papier : on a l'impression de lire un manifeste ou un guide pratique haut de gamme.

- Style Papier : Fond creme pour reduire la fatigue visuelle et renforcer l'aspect premium.
- Energie Switch : Utilisation du cyan pour symboliser la transition electrique et guider l'action.
- Lisibilite : Contrastes forts, espaces blancs genereux et typographie massive.

## 2. Palette de Couleurs Signature

- Fond Principal (Paper) : #F2EFE9
- Action Primaire (Electric Cyan) : #A8E6E2
- Texte & Structure (Carbon Grey) : #3D4144
- Accent Alerte (Power Red) : #E63946
- Texte de Corps (Deep Charcoal) : #1A1A1B
- Blanc de Contraste (Pure White) : #FFFFFF

## 3. Typographie

Le systeme utilise une police unique, moderne et tres lisible (type Inter ou Plus Jakarta Sans).

- H1 (Titre Hero) : 60px | Bold (800) | #3D4144 | Centre.
- H2 (Titres de section) : 32px | Bold (700) | #3D4144 | Espacement genereux au-dessus.
- H3 (Sous-titres) : 22px | Semibold (600) | #3D4144 | Pour les benefices ou modules.
- Corps de texte : 18px | Regular (400) | #1A1A1B | Interlignage 1.6.
- Bouton : 16px | Bold (700) | #1A1A1B | Toujours en gras.

## 4. Composants Cles

- Boutons Pill : Coins arrondis au maximum (radius: 100px). Fond Electric Cyan, texte Deep Charcoal. Pas d'ombre portee.
- Cartes (Modules) : Fond Pure White, bordure 1px solide Electric Cyan (opacite 15%), coins arrondis 12px.
- FAQ (Accordeons) : Style epure avec lignes de separation simples en Carbon Grey (opacite 20%). Question en gras, reponse en Deep Charcoal.

## 5. Principes de Mise en Page (Layout)

- Largeur Max : 800px pour le texte pour garantir une lecture confortable et centree.
- Espaces Blancs : Marges verticales entre 100px et 120px entre les grandes sections.
- Le Pattern de vente : 1. Titre accrocheur / 2. Video ou image forte / 3. Bouton d'action immediat / 4. Liste de problemes / 5. La solution / 6. Detail des modules / 7. FAQ + Garantie / 8. CTA Final.

## 6. Motion & Interactions (Framer Motion)

- Transitions globales : Timing de 0.33s avec l'easing Tesla [0.5, 0, 0, 0.75].
- Apparition au scroll : Opacite 0 vers 1, Y-offset 20px vers 0px, duree 0.5s, easeOut.
- Hover State Boutons : Scale 1.02, box-shadow cyan diffuse, transition fluide sans delai.
- Sobriete : Aucune animation ne doit ralentir la lecture ou retarder l'acces a l'information.

## 7. Les Do's & Don'ts

- A FAIRE : Utiliser le Power Red uniquement pour les alertes et l'Electric Cyan pour tout ce qui est positif.
- A FAIRE : Presenter les preuves sociales dans des blocs blancs simples.
- A EVITER : Les photos avec des cadres compliques (privilegier le plein ecran ou bords arrondis legers).
- A EVITER : Plus de 2 polices differentes sur la meme page.l'accès à l'information.

### ✅ À FAIRE

- Utiliser des icônes simples et unicolores.
- Écrire des titres courts et percutants.
- Mettre des preuves sociales (témoignages) dans des blocs blancs simples.
- Utiliser l'orange uniquement pour ce qui est cliquable.

### ❌ À ÉVITER

- Pas de photos avec des cadres compliqués (utiliser des bords arrondis ou du plein écran).
- Pas de animations "gadgets" qui ralentissent la lecture.
- Pas de menus de navigation complexes (un seul bouton "Rejoindre" suffit).
- Ne jamais utiliser plus de 2 polices différentes.### Composant : Calculateur de Rentabilité
- **Interactivité** : Slider horizontal pour le kilométrage annuel.
- **Visuel** : Utiliser un graphique à barres contrastées.
  - Barre Grise (#3D4144) pour le thermique.
  - Barre Cyan (#A8E6E2) pour l'électrique.
- **Animation Framer Motion** : Les chiffres d'économies doivent "compter" (odomètre) de 0 jusqu'au montant final lors du déplacement du curseur.
- **Texte de conclusion** : "Rentabilisez l'achat de votre bécane (et de cette formation) dès vos premiers 3 000 km."
