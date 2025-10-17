# Portfolio Hugo Mouraud

Portfolio moderne et animé créé avec Next.js 15, React 19, TypeScript et Tailwind CSS v4.

## 🚀 Fonctionnalités

- **Design Moderne** : Interface élégante avec animations smooth grâce à Framer Motion
- **Fond Animé** : Particules interactives et gradients flottants pour un effet visuel captivant
- **Responsive** : Adapté à tous les types d'écrans (mobile, tablette, desktop)
- **Navigation Smooth** : Défilement fluide entre les sections
- **Formulaire de Contact** : Intégration EmailJS pour recevoir les messages directement par email
- **Sections Complètes** :
  - Hero avec présentation et liens sociaux
  - À propos (sport, double diplôme, passion du code)
  - Expériences professionnelles avec timeline
  - Projet de fin d'études (GymPartner)
  - Formulaire de contact

## 🛠️ Technologies Utilisées

- **Next.js 15.5.5** avec App Router
- **React 19.1.0**
- **TypeScript 5**
- **Tailwind CSS v4**
- **Framer Motion** pour les animations
- **React Icons** pour les icônes
- **EmailJS** pour le formulaire de contact

## 📦 Installation

1. Installer les dépendances
```bash
npm install
```

2. Configurer EmailJS (voir section ci-dessous)

3. Lancer le serveur de développement
```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📧 Configuration EmailJS

Pour que le formulaire de contact fonctionne, vous devez configurer EmailJS :

1. Créez un compte gratuit sur [EmailJS](https://www.emailjs.com/)

2. Créez un nouveau service email (Gmail, Outlook, etc.)

3. Créez un template d'email avec les variables suivantes :
   - `{{from_name}}` : Nom de l'expéditeur
   - `{{from_email}}` : Email de l'expéditeur
   - `{{message}}` : Message
   - `{{to_email}}` : Votre email (hugo.mouraud@epitech.eu)

4. Récupérez vos clés :
   - Service ID
   - Template ID
   - Public Key

5. Ouvrez le fichier `src/components/Contact.tsx` et remplacez les valeurs suivantes (lignes 24-33) :
```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',    // Remplacer par votre Service ID
  'YOUR_TEMPLATE_ID',   // Remplacer par votre Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'hugo.mouraud@epitech.eu',
  },
  'YOUR_PUBLIC_KEY'     // Remplacer par votre Public Key
);
```

## 🏗️ Build pour Production

```bash
npm run build
```

## 🚀 Déploiement sur Vercel

1. Pushez votre code sur GitHub

2. Connectez-vous sur [Vercel](https://vercel.com)

3. Importez votre repository GitHub

4. Vercel détectera automatiquement Next.js et configurera le build

5. Cliquez sur "Deploy"

Votre portfolio sera en ligne en quelques minutes !

## 📝 Personnalisation

### Modifier les liens Strava
Dans `src/components/About.tsx`, ligne 64, remplacez l'URL Strava par votre profil :
```tsx
href="https://www.strava.com/athletes/VOTRE_ID"
```

### Modifier les informations de contact
- Email : Cherchez `hugo.mouraud@epitech.eu` dans les fichiers et remplacez
- LinkedIn : `https://www.linkedin.com/in/hugo-mouraud`
- GitHub : `https://github.com/HugoMrd`

## 📂 Structure du Projet

```
secondportfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal avec métadonnées
│   │   ├── page.tsx            # Page d'accueil avec toutes les sections
│   │   └── globals.css         # Styles globaux
│   └── components/
│       ├── Navbar.tsx          # Navigation sticky
│       ├── Hero.tsx            # Section hero avec présentation
│       ├── About.tsx           # Section à propos
│       ├── Experience.tsx      # Expériences professionnelles
│       ├── Project.tsx         # Projet de fin d'études
│       ├── Contact.tsx         # Formulaire de contact
│       ├── Footer.tsx          # Footer avec liens
│       ├── AnimatedBackground.tsx  # Particules et gradients animés
│       └── FloatingIcons.tsx   # Icônes flottantes décoratives
├── public/                     # Assets statiques
└── package.json
```

## 🎨 Personnalisation des Couleurs

Les couleurs principales sont définies avec Tailwind :
- Bleu : `blue-600` à `blue-400`
- Violet : `purple-600` à `purple-400`

Pour modifier, remplacez ces classes dans les composants.

## 📱 Responsive Design

Le portfolio est entièrement responsive avec des breakpoints :
- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

## ⚡ Performance

- Utilisation de Turbopack pour des builds ultra-rapides
- Images optimisées avec Next.js Image
- Code splitting automatique
- Animations optimisées avec Framer Motion

## 👤 Auteur

**Hugo Mouraud**
- Email: hugo.mouraud@epitech.eu
- LinkedIn: [Hugo Mouraud](https://www.linkedin.com/in/hugo-mouraud)
- GitHub: [@HugoMrd](https://github.com/HugoMrd)

---

Fait avec ❤️ et Next.js
