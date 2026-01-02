# Leafclutch Technologies – Company Website
Leafclutch Technologies is a modern, responsive company website showcasing intelligent software, AI, and automation solutions. The project aims to provide potential clients with a comprehensive overview of technology services through a clean, professional interface featuring smooth animations and seamless navigation.

The development focuses on responsive design and creating an engaging user experience that effectively communicates the company's value proposition.

## Features

### Navigation and Layout
* Fixed navigation bar visible during scrolling
* Responsive hamburger menu for mobile devices
* Smooth page transitions with React Router
* Hash-based navigation to specific service sections
* Menu automatically closes when selecting a page

### Service Showcase
* Comprehensive service overview on the homepage
* Detailed sections for each service
* Six core service offerings:
  * Software Services
  * Web Development
  * App Development
  * AI & Automation
  * Data Analysis
  * DevOps & Cloud
* "Learn more" links navigate to corresponding detailed sections
* Smooth scroll behavior for anchored navigation


### User Experience
* Clean, modern UI design with consistent color palette
* Smooth animations using Framer Motion
* Hover effects on buttons, cards, and links
* Floating animations on hero section
* Responsive layouts for desktop, tablet, and mobile
* Optimized performance with proper React patterns

## Tech Stack

* React 19 with Hooks
* React Router DOM for client-side routing
* Vite for development and build tooling
* Framer Motion for animations
* Lucide React for modern icons
* React Icons for social media icons
* Plain CSS for styling

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd Leafclutch
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:5173
```

### 5. Build for production

```bash
npm run build
```

### 6. Preview production build

```bash
npm run preview
```

## Usage

### Navigating the Website

* Use the main navigation to switch between Home, Our Services, and Contact pages
* Click on service cards to view detailed information
* Click "Learn more" links to jump to specific service sections
* Access company social media through footer icons

### Mobile Navigation

* Tap the hamburger icon to open the mobile menu
* Tap the X icon to close the menu
* Menu automatically closes when selecting a page

### Contacting the Company

* Navigate to the Contact page
* Fill in the contact form with your details
* Submit the form to send your inquiry


## Project Structure

```
Leafclutch/
├── public/
│   ├── logo.png
│   └── Discord.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Intro.jsx
│   │   ├── intro.css
│   │   ├── intro_offer.jsx
│   │   ├── intro_offer.css
│   │   ├── Services_intro.jsx
│   │   ├── Services_intro.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── Technology.jsx
│   │   ├── Technology.css
│   │   ├── Contact_Form.jsx
│   │   └── Contact_Form.css
│   ├── Pages/
│   │   ├── Homepage.jsx
│   │   ├── OurServices.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Design Decisions

* Functional components with React Hooks for cleaner code
* React Router for smooth, client-side navigation
* Framer Motion for polished animations while maintaining performance
* Fixed navbar improves user experience
* Hash navigation allows direct linking to specific service sections
* Component-based architecture ensures reusability and maintainability
* Separate CSS files per component maintain organization
* Mobile-first responsive design ensures cross-device compatibility

## Requirements Fulfilled

* Fully responsive design for desktop, tablet, and mobile
* Clean and consistent UI design with proper spacing and typography
* Existing color palette maintained throughout (#0f4c6e, #ffd166, #FDFFB8)
* Responsive layouts implemented for all components
* Reusable and well-structured React components
* No major UI breaks or console errors
* Subtle animations and micro-interactions
* Accessibility considerations (ARIA labels, keyboard navigation)
* Performance optimization with proper React patterns
* Static site with no backend requirement


