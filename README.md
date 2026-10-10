# 🛒 বাজার দর | BazarDor

### প্রয়োজনীয় পণ্যের দাম এক নজরে

**BazarDor (বাজার দর)** is a modern, responsive web application designed to help users explore and compare the prices of essential products in Bangladesh. The application provides product information, daily price trends, category-based browsing, and bazar-wise price comparisons through a clean and user-friendly interface.

Built with Next.js, Tailwind CSS, and Better Auth, BazarDor offers a convenient way to explore market prices across mobile, tablet, and desktop devices.

---

## 🌐 Project Overview

The main goal of BazarDor is to make market price information easier to access and understand. Users can browse essential products, identify price increases and decreases, sort products by price, and explore detailed market information.

The application also includes authentication, protected product detail pages, profile management, loading states, and responsive navigation to provide a complete user experience.

## ✨ Key Features

### 1. 📊 Product Price Tracking

* Browse all available products in one place.
* View product names, illustrations, units, and current prices.
* Display prices using Bengali numerals.
* Show daily price changes with clear visual indicators.
* Identify products with increasing, decreasing, or unchanged prices.

### 2. 📈 Daily Market Price Trends

* View the top six products with increasing prices.
* Explore the top six products with decreasing prices.
* Display percentage changes with directional indicators.
* Understand daily market movements through an organized interface.

### 3. 🛍️ Product and Category Browsing

* Browse products by category.
* Navigate between categories using the navbar.
* View products in a responsive card grid.
* Sort products by default order, lowest price, or highest price.
* Access individual product detail pages by selecting a product.

### 4. 🔐 Authentication and Account Management

* Register a new account using name, email, and password.
* Sign in using email and password.
* Support Google and GitHub social login through Better Auth.
* Protect restricted routes from unauthenticated access.
* Sign out securely and receive relevant notifications.
* Update profile information through a dedicated page.

### 5. 🏪 Product Details and Bazar-Wise Prices

* View detailed information about individual products.
* Display product categories, units, and descriptions.
* Show minimum, maximum, and average prices.
* Compare available prices across different bazaars.
* Present market-specific pricing information in an organized layout.

## 🚀 Additional Features

* **Responsive Navbar:** Logo, Bangla date, category navigation, and authentication controls.
* **Animated Price Ticker:** Continuously scrolling market updates with product names, prices, and price-change indicators.
* **Hero Banner:** Attractive introductory section with a call-to-action that scrolls to the All Products section.
* **Loading Skeletons:** Display loading placeholders while product information is being fetched.
* **Toast Notifications:** Provide feedback for successful login, registration, logout, and validation errors.
* **Custom 404 Page:** Show a friendly error message and a button to return to the homepage.
* **Protected Product Routes:** Require authentication before users can access restricted product details.
* **Profile Update:** Allow authenticated users to update their account name.
* **Responsive Product Grid:** Adapt product cards to different screen sizes.
* **Deployment Support:** Configure dynamic routes to work correctly after deployment and page refreshes.

---

## 🛠️ Technologies Used

| Technology              | Purpose                                   |
| ----------------------- | ----------------------------------------- |
| Next.js                 | Application development and rendering     |
| Next.js App Router      | Routing, layouts, and dynamic pages       |
| React                   | Component-based user interface            |
| TypeScript / JavaScript | Application logic and type safety         |
| Tailwind CSS            | Responsive styling and UI design          |
| Better Auth             | Authentication and user management        |
| React Hot Toast         | Success and error notifications           |
| REST API                | Fetching products, categories, and prices |
| Git                     | Version control                           |
| GitHub                  | Source code hosting                       |
| Vercel                  | Application deployment                    |

---

## 🔌 API Integration

BazarDor retrieves product and category information from the provided REST API.

### API Base URLs

**Primary API**

```text
https://api.api-store.workers.dev/api/bazardor
```

**Alternative API**

```text
https://api.abcz.workers.dev/api/bazardor
```

### Available Endpoints

| Endpoint                  | Description                         |
| ------------------------- | ----------------------------------- |
| `/products`               | Fetch all products                  |
| `/products?category=chal` | Fetch products filtered by category |
| `/products/1`             | Fetch a specific product            |
| `/categories`             | Fetch all categories                |
| `/categories/chal`        | Fetch a specific category           |

### Example API Requests

Fetch all products:

```javascript
const response = await fetch(
  "https://api.api-store.workers.dev/api/bazardor/products"
);

const products = await response.json();
```

Fetch products from a specific category:

```javascript
const response = await fetch(
  "https://api.api-store.workers.dev/api/bazardor/products?category=chal"
);

const products = await response.json();
```

*Note: Adjust the response handling according to the actual API response structure used in the application.*

---

## 📁 Application Routes

| Route              | Description                                  |
| ------------------ | -------------------------------------------- |
| `/`                | Homepage with market trends and all products |
| `/category/[slug]` | Category-specific product listing            |
| `/product/[slug]`  | Product details and bazar-wise pricing       |
| `/signin`          | User login page                              |
| `/signup`          | User registration page                       |
| `/profile`         | User profile page                            |
| `/profile/update`  | Update profile information                   |
| Unknown routes     | Custom 404 page                              |

---

## 🔐 Authentication System

BazarDor uses Better Auth to manage authentication and user accounts.

### Supported Authentication Methods

* Email and password registration.
* Email and password login.
* Google social authentication.
* GitHub social authentication.

### Account Management

* Display the appropriate authentication controls in the navbar.
* Redirect unauthenticated users when they attempt to access protected routes.
* Display toast notifications for authentication errors and successful actions.
* Allow users to sign out.
* Provide a profile page and name-update functionality.

Social login requires valid OAuth credentials and the appropriate callback configuration.

---

## 🎨 User Interface and Responsive Design

The interface is designed to provide a consistent experience across different screen sizes.

### Desktop

* Multi-column product grids.
* Full navigation and category links.
* Side-by-side hero content and banner image.
* Organized product and market information.

### Tablet

* Adapted grid columns.
* Flexible navigation and content spacing.
* Readable product cards and price indicators.

### Mobile

* Single-column or appropriately reduced product grids.
* Stacked hero section.
* Touch-friendly buttons and navigation.
* Usable price ticker and readable Bengali text.

---

## ⚙️ Installation and Setup

Follow these steps to run BazarDor locally.

### Prerequisites

Make sure you have installed:

* Node.js
* npm, yarn, or pnpm
* Git

Authentication providers and database configuration may also be required depending on your implementation.

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd bazardor
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual repository URL.

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

Create a `.env.local` file in the root directory.

Example:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.api-store.workers.dev/api/bazardor
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
```

Add the required database connection string and Google/GitHub OAuth credentials according to your Better Auth configuration.

**Security note:** Never commit actual authentication secrets, OAuth client secrets, or database credentials to GitHub.

### Step 4: Start the Development Server

```bash
npm run dev
```

Open the following URL in your browser:

```text
http://localhost:3000
```

### Step 5: Create a Production Build

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

---

## 🚀 Deployment

BazarDor can be deployed using Vercel or another compatible hosting platform.

### Deployment Steps

1. Push the latest project code to GitHub.
2. Import the repository into Vercel.
3. Configure all required environment variables.
4. Configure Better Auth and the Google/GitHub OAuth callback URLs.
5. Deploy the application.
6. Test authentication, product listing, category filtering, sorting, and profile updates.
7. Refresh dynamic routes directly to confirm they work after deployment.
8. Check the deployed website on mobile and desktop devices.

---

## 🔮 Future Improvements

Potential future enhancements include:

* Historical price charts.
* Advanced product search and filtering.
* Market comparison by location.
* Price history for individual products.
* Improved accessibility and localization.
* Additional market insights and analytics.

---

## 👨‍💻 Project Information

**Project Name:** বাজার দর (BazarDor)
**Project Type:** Market Price Tracking Web Application
**Primary Language:** Bengali
**Framework:** Next.js

### 🔗 Project Links

* **Live Website:** https://bazar-dor-theta.vercel.app/
* **GitHub Repository:** https://github.com/UK-Biswas/bazar-dor/

---

<p align="center">
  <strong>🛒 বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</strong>
</p>

