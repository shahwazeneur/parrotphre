# 🌱 Greenisphere - Eco-Friendly Marketplace

A modern eCommerce marketplace focused on sustainable and eco-friendly products, where every purchase rewards users with Carbon Credits and supports environmental projects.

## Features

### 🛍️ Marketplace
- **Product Categories**: Reusable Products, Zero-Waste Essentials, Organic & Natural, Recycled/Upcycled Products
- **Product Cards**: Display price, sustainability badges, CO₂ saved, and carbon credits earned
- **Product Details**: Comprehensive environmental impact stats, materials used, lifecycle information

### 💚 Carbon Credit System
- **Green Credits**: Earn carbon credits with every purchase
- **User Dashboard**: Track total credits, trees planted equivalent, and CO₂ offset
- **Gamified Progress**: Visual progress bars and impact metrics

### 🌍 Sustainability Transparency
- **Impact Metrics**: Real-time tracking of trees planted, CO₂ offset, water saved
- **Project Showcase**: Active environmental projects funded by purchases
- **Transparency Reports**: Detailed breakdown of how revenue supports sustainability

### 📚 Green Lab (Learning Hub)
- **Mini Courses**: 
  - Upcycling Basics
  - Recycling Correctly
  - DIY Eco-Friendly Products
  - Home Composting
- **Interactive Lessons**: Step-by-step guides with tips and illustrations
- **Beginner-Friendly**: Easy-to-follow content for all skill levels

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## Design System

### Color Palette
- **Forest Green**: Primary brand color (#369459)
- **Leaf Green**: Accent color (#22c55e)
- **Earth Brown**: Secondary accent (#b8865a)
- **Soft Neutrals**: Background gradients and text

### Typography
- **Font**: Inter (Google Fonts)
- **Style**: Clean, modern, rounded edges for friendly feel

### UI Elements
- Glassmorphism effects
- Soft shadows and gradients
- Micro-animations
- Organic shapes with modern cards

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
greenisphere/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── products/          # Product pages
│   ├── dashboard/         # User dashboard
│   ├── sustainability/   # Impact page
│   └── green-lab/         # Learning hub
├── components/            # React components
│   ├── layout/           # Navbar, Footer
│   ├── home/             # Homepage components
│   └── products/         # Product components
├── lib/                  # Utilities and data
│   ├── types.ts         # TypeScript types
│   ├── data.ts          # Sample data
│   └── carbonCredits.ts # Credit calculation logic
└── public/               # Static assets
```

## Carbon Credit System

### Calculation
- 1 Green Credit = 0.5 kg CO₂ saved
- Credits are calculated per product based on environmental impact
- Each product has a predefined credit value

### Conversion
- **Trees**: 1 tree ≈ 20 kg CO₂ = 40 credits
- **CO₂ Offset**: Direct conversion (credits × 0.5)

## Sample Data

The project includes sample product data with:
- 8 eco-friendly products across all categories
- Complete product information (prices, images, materials, impact)
- 4 mini courses in Green Lab
- Mock user dashboard data

## Future Enhancements

- [ ] User authentication and accounts
- [ ] Shopping cart functionality
- [ ] Payment integration
- [ ] Backend API for real data
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Real-time impact tracking
- [ ] Social sharing features
- [ ] Product reviews and ratings
- [ ] Email notifications
- [ ] Mobile app

## Contributing

This is a showcase project. Feel free to fork and extend it for your own use!

## License

MIT License - feel free to use this project for learning and development.

---

Made with 🌱 for the planet
