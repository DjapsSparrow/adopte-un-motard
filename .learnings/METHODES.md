# MÉTHODES ET PRÉFÉRENCES

## Navigation Interactive (FloatingDock)
- **Méthode** : Pour garantir une interactivité fluide, préférer la création d'une `Navbar.tsx` (React) globale injectée dans le `Layout.astro` avec `client:load`, plutôt que de mixer des composants Astro et React pour la navigation.
- **Style** : Utiliser des overlays sombres (`bg-black/60`) avec du texte blanc pour les Hero sections avec images de fond afin de garantir la lisibilité du "Cyan Électrique" de la marque.

## Versioning
- **Règle d'or** : Incrémenter systématiquement la version dans `package.json` et `NOTES.md` à chaque push majeur ou changement d'UI significatif.
