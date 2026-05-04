# MÉTHODES ET PRÉFÉRENCES

## Navigation Interactive (FloatingDock)
- **Méthode** : Pour garantir une interactivité fluide, préférer la création d'une `Navbar.tsx` (React) globale injectée dans le `Layout.astro` avec `client:load`, plutôt que de mixer des composants Astro et React pour la navigation.
- **Style** : Utiliser des overlays sombres (`bg-black/60`) avec du texte blanc pour les Hero sections avec images de fond afin de garantir la lisibilité du "Cyan Électrique" de la marque.

## Versioning
- **Règle d'or** : Incrémenter systématiquement la version dans `package.json` et `NOTES.md` à chaque push majeur ou changement d'UI significatif.

## Interaction Hero (Slide-to-Action)
- **Méthode** : Remplacer les boutons classiques par des interactions "Swipe" (Glisser) pour augmenter l'engagement sur les CTA critiques. Utiliser `framer-motion` (`drag="x"`) pour une sensation tactile premium.
- **Règle d'or** : Le "Swipe" doit être accompagné d'un retour visuel (changement de couleur ou opacité du texte de fond) pour guider l'utilisateur.

## Sécurité & Headers (.htaccess)
- **Méthode** : Sur un déploiement RSYNC, utiliser une règle `FilesMatch` étendue pour bloquer l'accès direct aux fichiers sources et sensibles : `^\.|\.(json|md|env|yml|yaml|log|lock|bak|swp|git|dist|astro)$`.
- **Règle d'or** : Toujours coupler le blocage de fichiers avec une `Referrer-Policy: strict-origin-when-cross-origin` pour limiter les fuites de métadonnées.
