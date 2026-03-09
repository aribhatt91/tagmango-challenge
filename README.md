
# About the App

This app is built as a part of an assignment from TagMango

## Data
- Used dummy APIs and fake delays to mimic fetch operations
- Used TypeScript interfaces to define the Data models

## UI Components

### Layout and Themes
- The base layout is composed of the header, the sidenav, and the feed
- Used `next/themes` and CSS variables for theming
- Used `Tailwind` to create composable and responsive layout and component design
- Added a floating button at the bottom-right to demonstrate theme switch
- ThemeProvider and UserProvider wraps the app layout

### Navigation Header
- The top header is desktop-only.
- The user avatar is fetched with a fake delay to mimic real world fetch

### Side-nav and Mobile-nav
- The navigation used to navigate pages (Day 1, Day 2 etc) is visually appealing and tricky to build
- Used overlays, background image and CSS blur to achieve the frost glass effect
- Used CSS mask to create the unique design of the active tab indicator

### Feed
- The feed is divided into two parts, the User submission and the Subscriber's posts
- We use 2 fake API calls to asynchronously fetch data for the 2 sections
- Both the sections have their own pending and error states
- The pending state uses Skeleton cards
- The User's submission section has a confetti banner
