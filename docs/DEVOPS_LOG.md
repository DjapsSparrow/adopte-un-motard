# 🛠️ Journal SysAdmin & DevOps (Pa)
## 2026-11-17T13:35:00+01:00 — Migration Production Dédiée vers Cloud Managé Infomaniak (adopteunmotard.com)

### Actions Réalisées
- [x] Déploiement / Push vers production (`https://adopteunmotard.com/` et `https://www.adopteunmotard.com/`)
- [x] Configuration Serveur (Infomaniak Cloud Managé `4x9nbc.ftp.infomaniak.com` dans `sites/adopteunmotard.com`)
- [x] Secrets GitHub mis à jour (`SSH_HOST`, `SSH_USER`, `SSH_PATH`, `SSH_PRIVATE_KEY` pour `DjapsSparrow/adopte-un-motard`)
- [x] Durcissement workflows `.github/workflows/deploy.yml` et `rollback.yml` (`-o StrictHostKeyChecking=accept-new`, suppression flags réseau bloquants)
- [x] Vérification DNS (`A 84.16.72.11`, `MX 10 mail-fr.securemail.pro.` 100% préservé), SSL Let's Encrypt et HTTP/2 200 OK
- [ ] Migration Data (PocketBase)

### Checklist Stabilité
- [x] Droits d'accès vérifiés
- [x] Sauvegarde effectuée si modification DB (Site SSG pur, ancien slot `pl0pg8` conservé intact en backup)
- [x] Test de connexion serveur réussi (HTTP/2 200 OK sur `adopteunmotard.com` et `www.adopteunmotard.com`)
