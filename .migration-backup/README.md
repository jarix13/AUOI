# BYDAUTO.AE — Landing page (vente de domaine)

Page unique statique, prête pour **Vercel**. Design sombre cinématographique, dégradé violet/bleu, carte blanche centrale, 8 langues (FR, EN, ZH, JA, AR + RTL, ES, RU, TR), détection automatique de la langue du navigateur (par défaut : Anglais), préférence sauvegardée. Modal d'offre animé (fadeIn + scale) envoyé par email via Web3Forms — **aucun prix affiché**, l'email destinataire reste invisible pour le visiteur.

## 1) Configurer l'envoi d'email (Web3Forms)
1. Créez un compte gratuit sur https://web3forms.com avec **mongarminvivo@gmail.com** (adresse qui recevra les offres).
2. Copiez votre **Access Key** (gratuit, jusqu'à 250 envois/mois).
3. Dans `index.html`, remplacez :
   ```js
   const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";
   ```
   par votre clé réelle.

L'adresse email n'apparaît nulle part dans le code visible — elle est liée à la clé côté Web3Forms.

## 2) Déployer sur Vercel
- Poussez ce dossier sur GitHub puis « Import Project » sur Vercel, **ou**
- `npm i -g vercel` puis `vercel` à la racine.

Vercel sert automatiquement `index.html`. Aucun build nécessaire.

## Fichiers
- `index.html` — la page (à déployer)
- `vercel.json` — config statique
- `frontend/public/bydauto.html` — copie pour prévisualisation interne uniquement
