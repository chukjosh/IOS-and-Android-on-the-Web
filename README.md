# 📱 iOS & Android on the Web

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://iosandroidweb.vercel.app)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/K1YlQFkT4sx)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

> Experience authentic iOS and Android interfaces built entirely with modern web technologies

IOS-and-Android-on-the-Web is a web-based simulation that lets you experience both iOS and Android interfaces directly in your browser. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for smooth animations and interactions.

## 🌟 Features

### 📱 iOS Interface
- **Authentic iPhone Frame**: Realistic device frame with proper proportions
- **Dynamic Lock Screen**: Swipe-to-unlock functionality with live time display
- **Interactive Home Screen**: Multi-page app grid with smooth page transitions
- **Control Center**: Swipe-down gesture with toggles, sliders, and music controls
- **App Library**: Categorized app organization with search functionality
- **Dynamic Wallpapers**: Multiple wallpaper themes that adapt to light/dark mode
- **Realistic Apps**: Fully functional Safari, Messages, Music, Photos, and more
- **Gesture Support**: Natural swipe gestures for navigation

### 🤖 Android Interface
- **Material Design**: Authentic Android styling with proper shadows and elevations
- **Android Frame**: Realistic device frame with power and volume buttons
- **Lock Screen**: Android-style lock screen with swipe-to-unlock
- **Notification Panel**: Pull-down notifications with quick settings toggles
- **Home Screen**: Multi-page layout with widgets and app shortcuts
- **App Drawer**: Grid-based app organization with Material Design icons
- **Dynamic Wallpapers**: Gradient wallpapers that sync with theme changes
- **Rich Apps**: Phone, Messages, Camera, Settings, Chrome, Gmail, and more

### 🎨 Shared Features
- **Theme Synchronization**: Seamless light/dark mode switching
- **Wallpaper System**: Coordinated wallpaper themes across both platforms
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: 60fps animations powered by Framer Motion
- **Touch Gestures**: Native-feeling touch interactions and swipe gestures
- **Realistic Content**: Authentic app interfaces with proper layouts

## 🚀 Live Demo

[View Live Demo →](https://iosandroidweb.vercel.app)

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) for consistent components
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth animations
- **Icons**: [Lucide React](https://lucide.dev/) for consistent iconography
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) for theme management

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chukhosh/IOS-and-Android-on-the-Web.git
   cd IOS-and-Android-on-the-Web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── android/           # Android interface page
│   ├── ios/               # iOS interface page
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── android/           # Android-specific components
│   ├── control-center/    # iOS Control Center modules
│   ├── messages/          # Messages app components
│   ├── music/             # Music app components
│   ├── phone/             # Phone app components
│   ├── safari/            # Safari browser components
│   └── ui/                # Shared UI components
├── lib/                   # Utility functions and state management
│   ├── android-app-state.tsx
│   ├── app-state.tsx
│   ├── wallpaper-state.tsx
│   └── utils.ts
└── public/                # Static assets and icons
```

## 🎯 Key Components

### iOS Components
- **`IPhoneFrame`**: Realistic iPhone device frame
- **`LockScreen`**: iOS-style lock screen with time and unlock
- **`HomeScreen`**: App grid with page indicators and widgets
- **`ControlCenter`**: Swipe-down control panel with toggles
- **`AppView`**: Container for individual app interfaces

### Android Components
- **`AndroidFrame`**: Material Design device frame
- **`AndroidLockScreen`**: Android-style lock screen
- **`AndroidHomeScreen`**: Home screen with widgets and apps
- **`AndroidNotificationPanel`**: Pull-down notification system
- **`AndroidAppView`**: Container for Android app interfaces

### Shared Components
- **`WallpaperSwitcher`**: Theme-aware wallpaper selection
- **`ThemeProvider`**: Dark/light mode management
- **`SwipeDetector`**: Touch gesture recognition

## 🎨 Customization

### Adding New Wallpapers

1. **iOS Wallpapers**: Update `lib/wallpaper-state.tsx`
   ```typescript
   const wallpapers = {
     newTheme: {
       light: "url-to-light-wallpaper",
       dark: "url-to-dark-wallpaper"
     }
   }
   ```

2. **Android Wallpapers**: Update `lib/android-wallpaper-state.tsx`
   ```typescript
   const wallpaperGradients = {
     newTheme: "linear-gradient(135deg, #color1 0%, #color2 100%)"
   }
   ```

### Creating New Apps

1. Create a new component in the appropriate platform folder
2. Add the app to the app state management
3. Include the app icon and metadata
4. Register the app in the home screen grid

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Experience

The application is fully responsive and provides an authentic mobile experience:
- **Touch Gestures**: Native swipe and tap interactions
- **Viewport Optimization**: Proper scaling on mobile devices
- **Performance**: Optimized animations for mobile hardware
- **PWA Ready**: Can be installed as a Progressive Web App

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Apple** for iOS design inspiration
- **Google** for Material Design principles
- **Vercel** for seamless deployment
- **shadcn/ui** for beautiful UI components

## 📞 Contact

- **GitHub**: [@chukjosh](https://github.com/chukjosh)
- **Project Link**: [https://github.com/chukjosh/IOS-and-Android-on-the-Web](https://github.com/chukjosh/IOS-and-Android-on-the-Web)
- **Live Demo**: [https://iosandroidweb.vercel.app](https://iosandroidweb.vercel.app)

---

<div align="center">
  <p>Built with ❤️ using modern web technologies</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
