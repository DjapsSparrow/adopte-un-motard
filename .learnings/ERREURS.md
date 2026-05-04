# ERREURS ET FIXES

## Build Failure: JSX in Astro Frontmatter
- **Problème** : L'utilisation de balises JSX (ex: `<IconHome />`) dans le frontmatter d'un fichier `.astro` pour passer des composants React en props à un composant hydraté (`client:load`) provoque une erreur de build Vite : `Expected ">" but found "className"`.
- **Solution** : Utiliser `React.createElement(Component, { ...props })` pour définir les éléments React dans le bloc TypeScript d'Astro, ou refactoriser le composant parent en React (`.tsx`).
- **Règle d'or** : Ne jamais instancier de JSX complexe dans le frontmatter Astro si ces instances doivent être passées à des composants React hydratés.

## Build Failure: Relative Import Paths in Subfolders
- **Problème** : Erreur `Could not resolve` lors du build pour des composants situés dans des sous-dossiers (ex: `src/components/sections/`) important des utilitaires depuis un dossier frère (ex: `src/components/ui/`) via des chemins relatifs incorrects.
- **Solution** : Vérifier scrupuleusement les niveaux de dossiers (`../ui/` au lieu de `./ui/`) ou utiliser des alias de chemins (`@/components/ui/`).

## Build Failure: Lucide-React Export (Tool vs Wrench)
- **Problème** : `The requested module 'lucide-react' does not provide an export named 'Tool'`. Échec du build GitHub Actions v1.7.0.
- **Solution** : Remplacer `<Tool />` par `<Wrench />`.
- **Règle d'or** : Valider les noms d'icônes sur le site Lucide avant le push.
