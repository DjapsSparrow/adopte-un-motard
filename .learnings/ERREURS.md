# ERREURS ET FIXES

## Astro/React Hydration: Non-Serializable Props
- **Problème** : Passer des fonctions (callbacks) depuis un fichier `.astro` vers un composant React hydraté (`client:load`) échoue car les props doivent être sérialisables pour passer du serveur au client. La fonction arrive `undefined`.
- **Solution** : Passer des primitives (URL, strings) et gérer la logique événementielle (ex: `window.open`) directement à l'intérieur du composant React.

## Lucide Icons: Color Overrides in Astro
- **Problème** : Les classes Tailwind de couleur appliquées directement sur les icônes Lucide peuvent être ignorées par Astro lors du rendu statique.
- **Solution** : Toujours encapsuler l'icône dans un `div` porteur des classes de couleur ou utiliser le prop `color` de Lucide.


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

## CI/CD YAML Concatenation & Suppression Collatérale Mutualisée (2026-11-15)
- **Problème 1 (`deploy.yml`)** : Concaténation accidentelle à la ligne 25 (`run: npm run build      - name: Deploy...`) bloquant tout déclenchement de workflow GitHub Actions sur `push`.
- **Solution 1** : Rétablir le saut de ligne YAML avant `- name:`, ajouter `-4` IPv4 sur la branche ED25519 et `continue-on-error: true` sur les steps post-déploiement (webhook/S3).
- **Problème 2 (Incident FTP 404)** : À `18h49m32s`, le workflow `43743219581` d'un dépôt voisin (`fudoki`) partageant le même hébergement mutualisé (`HOSTING_ID=788037`) a lancé `rsync --delete` avec un secret `SSH_PATH` vide (sans fallback `TARGET_PATH`), supprimant `sites/adopteunmotard.com/` et `~/.ssh/authorized_keys` 40 secondes après le déploiement `v2.5.1`.
- **Solution 2** : Toujours vérifier les logs des dépôts partageant le mutualisé en cas de disparition soudaine du dossier distant ; relancer le workflow `adopte-un-motard` (`43743169498`) recrée instantanément `sites/adopteunmotard.com/` via `rsync`.
