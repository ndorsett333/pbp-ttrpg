# PBP TTRPG Feature Tracker

## ✅ Completed Features
- Initial Expo project setup (iOS, Android, Web support)
- Basic project structure with React Native

## 🚧 In Progress Features
- Setting up Node.js/Express backend API
- Database foundation with SQLite
- Basic frontend-backend communication

## 📌 Planned Features

### Phase 1 — Foundation
- [ ] Node.js/Express backend setup in `/backend` directory
- [ ] SQLite database connection
- [ ] Health check API endpoint
- [ ] Frontend API communication setup
- [ ] Basic project structure cleanup

### Phase 2 — Accounts
- [ ] User registration API
- [ ] Login/logout API endpoints
- [ ] Role system (Player/GM)
- [ ] Session-based or JWT authentication
- [ ] Frontend auth screens and state management

### Phase 3 — Campaigns
- [ ] Create campaign API (GM only)
- [ ] List campaigns API
- [ ] Join campaign API
- [ ] Campaign frontend screens
- [ ] Campaign invitation system

### Phase 4 — Posting System
- [ ] Create posts API
- [ ] View campaign feed API (chronological)
- [ ] Edit/delete posts API
- [ ] Frontend posting interface
- [ ] Markdown formatting support

### Phase 5 — Characters
- [ ] Create character API
- [ ] Character assignment to campaigns
- [ ] Character sheets frontend
- [ ] Simple stats system (key/value pairs)
- [ ] Inventory management
- [ ] Character notes

### Phase 6 — Flavor & Power Features
- [ ] Dice rolling in posts
- [ ] GM-only tools and features
- [ ] Private notes system
- [ ] Campaign invitation links
- [ ] Cozy theming (parchment/journal vibes)
- [ ] Mobile-optimized responsive design

## 🎯 Current Priority
**Phase 1**: Setting up the Node.js/Express backend API and establishing communication between the Expo frontend and backend.

## 🏗️ Tech Stack
- **Frontend**: Expo (React Native) - runs on iOS, Android, and Web
- **Backend**: Node.js + Express REST API
- **Database**: SQLite (development) → PostgreSQL (production)
- **Authentication**: Session-based or JWT
- **Communication**: REST API calls from frontend to backend

## 📝 Notes
- Cross-platform app using React Native for Web
- Keep the app simple and forum-like, not a complex VTT
- Focus on storytelling and character management
- Build incrementally, one feature at a time
- Maintain usability at every development stage