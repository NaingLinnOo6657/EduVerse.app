
# EduVerse: The Future of Collaborative Learning

---

## Table of Contents
1.  [Introduction: The EduVerse Vision](#1-introduction-the-eduverse-vision)
    1.1. [Executive Summary](#11-executive-summary)
    1.2. [The Problem We Solve](#12-the-problem-we-solve)
    1.3. [Our Mission and Philosophy](#13-our-mission-and-philosophy)
    1.4. [Target Audience](#14-target-audience)
    1.5. [Key Differentiators](#15-key-differentiators)
2.  [Core Features: A Deep Dive](#2-core-features-a-deep-dive)
    2.1. [Role-Based Architecture](#21-role-based-architecture)
        2.1.1. [The Student Experience](#211-the-student-experience)
        2.1.2. [The Professional Experience](#212-the-professional-experience)
        2.1.3. [The Admin Experience](#213-the-admin-experience)
    2.2. [The Home Feed: A Personalized Knowledge Hub](#22-the-home-feed-a-personalized-knowledge-hub)
        2.2.1. [Content Diversity](#221-content-diversity)
        2.2.2. [Engagement Mechanics](#222-engagement-mechanics)
    2.3. [AI-Powered Content Assistant](#23-ai-powered-content-assistant)
        2.3.1. [Feature Overview](#231-feature-overview)
        2.3.2. [Technical Implementation](#232-technical-implementation)
    2.4. [Channels: Collaborative Learning Spaces](#24-channels-collaborative-learning-spaces)
        2.4.1. [Functionality and Purpose](#241-functionality-and-purpose)
        2.4.2. [Role-Based Permissions](#242-role-based-permissions)
    2.5. [E-Library: A Vast Digital Repository](#25-e-library-a-vast-digital-repository)
        2.5.1. [Resource Collection](#251-resource-collection)
        2.5.2. [User Interface and Experience](#252-user-interface-and-experience)
    2.6. [Virtual Classroom & Meetings](#26-virtual-classroom--meetings)
        2.6.1. [Core Functionality](#261-core-functionality)
        2.6.2. [Upcoming Features](#262-upcoming-features)
    2.7. [AI Meeting Assistant & Recap](#27-ai-meeting-assistant--recap)
        2.7.1. [Transcription and Summarization](#271-transcription-and-summarization)
        2.7.2. [Use Cases](#272-use-cases)
    2.8. [AI Chatbot: Your Personal Study Buddy](#28-ai-chatbot-your-personal-study-buddy)
        2.8.1. [Capabilities](#281-capabilities)
        2.8.2. [User Interaction Flow](#282-user-interaction-flow)
    2.9. [Dynamic User Profiles](#29-dynamic-user-profiles)
        2.9.1. [A Centralized Identity](#291-a-centralized-identity)
        2.9.2. [Role-Specific Views](#292-role-specific-views)
3.  [Design System and Style Guidelines](#3-design-system-and-style-guidelines)
    3.1. [Color Palette](#31-color-palette)
    3.2. [Typography](#32-typography)
    3.3. [Iconography](#33-iconography)
    3.4. [Layout and Responsiveness](#34-layout-and-responsiveness)
4.  [Technical Architecture](#4-technical-architecture)
    4.1. [Technology Stack](#41-technology-stack)
        4.1.1. [Frontend Framework: Next.js & React](#411-frontend-framework-nextjs--react)
        4.1.2. [UI Components: shadcn/ui](#412-ui-components-shadcnui)
        4.1.3. [Styling: Tailwind CSS](#413-styling-tailwind-css)
        4.1.4. [Generative AI: Google AI & Genkit](#414-generative-ai-google-ai--genkit)
    4.2. [Project Structure](#42-project-structure)
    4.3. [State Management](#43-state-management)
    4.4. [AI Integration with Genkit](#44-ai-integration-with-genkit)
        4.4.1. [Overview of Genkit Flows](#441-overview-of-genkit-flows)
        4.4.2. [Flow: `answer-study-questions.ts`](#442-flow-answer-study-questionsts)
        4.4.3. [Flow: `suggest-content.ts`](#443-flow-suggest-contentts)
        4.4.4. [Flow: `transcribe-meeting.ts`](#444-flow-transcribe-meetingts)
        4.4.5. [Flow: `summarize-meeting.ts`](#445-flow-summarize-meetingts)
5.  [Component Library Documentation](#5-component-library-documentation)
    5.1. [Core Layout Components](#51-core-layout-components)
        5.1.1. [`DesktopSidebar`](#511-desktopsidebar)
        5.1.2. [`DesktopHeader`](#512-desktopheader)
        5.1.3. [`MobileHeader`](#513-mobileheader)
        5.1.4. [`BottomNav`](#514-bottomnav)
    5.2. [Feature Components](#52-feature-components)
        5.2.1. [`AuthForm`](#521-authform)
        5.2.2. [Dashboard Page Components](#522-dashboard-page-components)
6.  [Getting Started: Setup and Development](#6-getting-started-setup-and-development)
    6.1. [Prerequisites](#61-prerequisites)
    6.2. [Installation](#62-installation)
    6.3. [Running the Development Server](#63-running-the-development-server)
    6.4. [Environment Variables](#64-environment-variables)
7.  [Future Roadmap and Contribution](#7-future-roadmap-and-contribution)
    7.1. [Short-Term Goals (Next 3 Months)](#71-short-term-goals-next-3-months)
    7.2. [Long-Term Vision (Next 12 Months)](#72-long-term-vision-next-12-months)
    7.3. [Contributing to EduVerse](#73-contributing-to-eduverse)
8.  [Conclusion](#8-conclusion)

---

## 1. Introduction: The EduVerse Vision

### 1.1. Executive Summary
EduVerse is a next-generation, AI-enhanced social media platform meticulously engineered for the education sector. It transcends the limitations of traditional learning management systems and generic social networks by creating a dynamic, interconnected ecosystem where knowledge is not just consumed but co-created, shared, and celebrated. The platform is built upon a robust, role-based architecture that caters to the unique needs of its three core user groups: **Students**, **Professionals** (educators, researchers, experts), and **Admins** (institutional representatives).

At its heart, EduVerse leverages the power of cutting-edge Generative AI to foster a more engaging, accessible, and personalized learning experience. From an AI chatbot that serves as a 24/7 study assistant to an intelligent content suggestion engine that combats writer's block, AI is woven into the fabric of the platform to augment human potential, not replace it. Key features include a personalized content feed, collaborative channels, a comprehensive e-library, an integrated virtual classroom with an AI meeting assistant, and dynamic user profiles that serve as living portfolios of academic and professional achievements.

Built on a modern, scalable tech stack featuring Next.js, React, Tailwind CSS, and Google's Genkit for AI orchestration, EduVerse is designed to be responsive, performant, and intuitive across all devices. This document serves as a comprehensive guide to the project's vision, features, architecture, and future roadmap.

### 1.2. The Problem We Solve
The digital education landscape is fragmented. Students juggle learning management systems for coursework, messaging apps for group projects, video conferencing tools for lectures, and generic social media for community. This disjointed experience creates cognitive overhead, stifles organic collaboration, and fails to capture the holistic journey of a learner.

-   **Information Silos:** Knowledge is often trapped within specific courses or institutional portals, preventing cross-disciplinary discovery and collaboration.
-   **Passive Consumption:** Traditional online learning can be a one-way street, with students passively consuming content rather than actively engaging with it, their peers, and their instructors.
-   **Lack of Recognition:** A student's achievements, projects, and skills are often scattered across various platforms or confined to a static transcript. There is no dynamic, reputable space to showcase their learning journey and connect with opportunities.
-   **Engagement Gap:** Educators and institutions struggle to create and maintain engaging online communities. Generic social platforms are noisy and not optimized for academic discourse, while institutional forums often feel sterile and underutilized.
-   **Accessibility Barriers:** Creating high-quality, engaging educational content can be daunting. Students may not know what to ask, and educators may lack the time or tools to produce a steady stream of relevant material.

EduVerse directly addresses these challenges by unifying these disparate functions into a single, cohesive platform. It breaks down silos, encourages active participation, and provides a dedicated space for the entire educational community to connect, collaborate, and grow.

### 1.3. Our Mission and Philosophy
**Our mission is to democratize and re-energize the learning experience by building a global, interconnected community dedicated to the pursuit and sharing of knowledge.**

Our guiding philosophies are:

1.  **Community over Content:** While content is crucial, we believe true learning flourishes within a supportive community. Our features are designed to facilitate interaction, discussion, and mentorship.
2.  **AI as an Augment:** We see AI not as a replacement for educators but as a powerful tool to augment their capabilities and enhance the student experience. Our AI features are designed to handle repetitive tasks, provide personalized support, and spark creativity, freeing up humans for higher-order thinking and connection.
3.  **Learning as a Journey, Not a Destination:** We believe learning is a lifelong process. EduVerse is designed to support users from their first day as a student to their ongoing professional development, with profiles that evolve to reflect their growing expertise.
4.  **Accessibility and Inclusivity:** A truly global learning platform must be accessible to everyone. This principle guides our design, from the responsive UI to AI tools that help users create more engaging and understandable content.
5.  **Simplicity and Focus:** The platform is intentionally designed to be clean and intuitive, removing the noise and distractions of conventional social media to create a focused environment for learning and professional growth.

### 1.4. Target Audience
EduVerse is designed for a symbiotic ecosystem of three distinct user roles:

-   **Students/Learners:** From K-12 to higher education and lifelong learners, students are the primary consumers and creators on the platform. They use EduVerse to supplement their formal education, collaborate on projects, showcase their work, and connect with mentors and peers.
-   **Professionals/Educators:** This group includes teachers, university professors, researchers, subject matter experts, and industry professionals. They use EduVerse to share their knowledge, publish articles, teach courses, mentor students, and build their professional reputation in a focused, academic environment.
-   **Admins/Institutions:** This role represents educational institutions like schools, universities, and online course providers. They use EduVerse as a community-building and administrative tool to manage courses, host channels, announce events, and engage with their student body on a modern, interactive platform.

### 1.5. Key Differentiators
-   **Education-First Focus:** Unlike generic platforms, every feature in EduVerse is designed with the learner and educator in mind.
-   **Integrated AI Suite:** A cohesive set of AI tools (chat, content suggestion, meeting assistance) that work together to enhance the user experience.
-   **Role-Based Architecture:** A tailored experience that provides relevant tools and permissions for each user type, creating a balanced and functional ecosystem.
-   **Unified Platform:** Combines social networking, learning management, and collaboration tools into a single, seamless experience.
-   **Dynamic, Living Profiles:** User profiles act as evolving portfolios, showcasing a user's complete academic and professional journey.

---

## 2. Core Features: A Deep Dive

### 2.1. Role-Based Architecture
The foundation of EduVerse is its intelligent, role-based system. Upon signing up, a user selects a role that defines their permissions, the tools available to them, and how they are presented on the platform. This ensures that the experience is tailored, relevant, and uncluttered.

#### 2.1.1. The Student Experience
-   **Goal:** To learn, collaborate, and showcase growth.
-   **Permissions & Views:**
    -   **Home Feed:** Consume content from followed professionals and institutions, and share their own learning progress, project updates, and questions.
    -   **Profile:** A dynamic portfolio featuring their learning path, completed projects, and earned certificates. This view is designed to be shared with potential employers or academic institutions.
    -   **Channels:** Join and participate in course, subject, or interest-based channels. They can engage in discussions, access shared files, but cannot create top-level channels.
    -   **E-Library:** Full access to browse and search all educational resources.
    -   **AI Tools:** Full access to the AI Chatbot for study help and the AI Content Assistant for post ideas.

#### 2.1.2. The Professional Experience
-   **Goal:** To teach, share expertise, mentor, and build a professional reputation.
-   **Permissions & Views:**
    -   **Home Feed:** Publish in-depth articles, share research findings, post tutorials, and engage in high-level discussions. Their content is prioritized for students interested in their fields.
    -   **Profile:** A curriculum vitae-style page highlighting their biography, skills, a list of courses they teach, and a portfolio of their publications.
    -   **Channels:** Can join any channel and are often moderators or experts within subject-specific channels.
    -   **E-Library:** Can contribute resources to the library (pending admin approval).

#### 2.1.3. The Admin Experience
-   **Goal:** To manage their institution's community, courses, and resources.
-   **Permissions & Views:**
    -   **Home Feed:** Post official announcements, promote courses, and share institutional news and events. These posts can be broadcast to all members of their institution.
    -   **Profile:** An institutional page detailing the organization's mission, managed courses, and hosted channels.
    -   **Channels:** **Can create and manage official channels** for courses or the institution itself. They have full moderation capabilities within these channels.
    -   **E-Library:** Can upload and manage official course materials and other resources.

### 2.2. The Home Feed: A Personalized Knowledge Hub
The Home feed is the vibrant heart of EduVerse. It's an infinitely scrolling timeline of content from across the platform, intelligently curated for each user.

#### 2.2.1. Content Diversity
The feed is designed to accommodate a wide range of educational content formats:
-   **Student Posts:** Project showcases, questions for the community, sharing learning milestones, and forming study groups.
-   **Professional Articles:** Long-form posts that function as mini-essays or research summaries, complete with images and formatted text.
-   **Admin Announcements:** Official news, course enrollment openings, event schedules, and platform updates.
-   **Visual Content:** All user roles can share images to supplement their posts, from screenshots of code to diagrams of scientific concepts.

#### 2.2.2. Engagement Mechanics
Standard social media engagement features are included but are framed within an educational context:
-   **Like:** An acknowledgment of value or agreement.
-   **Comment:** The primary mechanism for discussion, debate, and clarification.
-   **Share:** To propagate valuable information across the network.

### 2.3. AI-Powered Content Assistant
A key innovation to drive engagement and accessibility. This feature, located prominently on the Home feed, helps users overcome the "blank page" problem.

#### 2.3.1. Feature Overview
The assistant is a card that displays a list of thought-provoking, AI-generated post ideas. Users can click an idea to auto-populate the post creation text area, providing an instant starting point for their own content. A "Get new ideas" button allows them to refresh the suggestions at any time.

#### 2.3.2. Technical Implementation
-   **Backend:** This feature is powered by the `suggest-content.ts` Genkit flow.
-   **Input to AI:** The AI model receives a carefully crafted prompt that includes the user's role (`Student`, `Professional`, or `Admin`), their declared interests (e.g., "Quantum Physics," "Javascript"), and a list of currently trending topics on the platform.
-   **Output:** The model is instructed to return a JSON array of 3-5 creative and engaging content suggestions. The prompt guides the AI to phrase these as interesting questions or thought-provoking statements, moving beyond generic topics.
-   **Frontend:** The `HomeFeed` component in `src/app/dashboard/page.tsx` calls the `suggestContent` server action. It manages the loading state and renders the suggestions, providing a seamless and interactive user experience.

### 2.4. Channels: Collaborative Learning Spaces
Channels are focused hubs for community interaction, akin to groups or forums but designed specifically for learning.

#### 2.4.1. Functionality and Purpose
-   **Types:** Channels can be created for specific university courses (e.g., "CS101 Intro to Programming"), broad subjects ("Renaissance Art History"), or special interests ("AI & Machine Learning").
-   **Content:** Inside a channel, members can find announcements, share files, hold discussions, and see schedules for upcoming meetings or virtual classes.

#### 2.4.2. Role-Based Permissions
This is where the Admin role is most distinct. Only Admins have the authority to create new channels, ensuring that these spaces are well-managed and serve a clear purpose. Students and Professionals can freely join and participate in existing channels, fostering a vibrant environment for collaborative learning. The "Create Channel" button is conditionally rendered on the page based on the user's role, which is retrieved from local storage in the current experimental setup.

### 2.5. E-Library: A Vast Digital Repository
The E-Library serves as a centralized, searchable database of educational materials.

#### 2.5.1. Resource Collection
The library is populated with a wide array of resources, including:
-   Textbooks
-   Research Papers
-   Technical Manuals
-   Classic Literature
-   Study Guides

The initial collection includes 50 diverse titles to demonstrate the breadth of the library's potential.

#### 2.5.2. User Interface and Experience
The design emphasizes discoverability and ease of use.
-   **Layout:** A clean, grid-based layout displays book covers, titles, and authors.
-   **Visuals:** Each book is represented by a placeholder image (`100x150.png`) with a `data-ai-hint` attribute. This hint (e.g., "quantum physics," "old book") can be used by future AI-powered image generation or search tools to find relevant cover art.
-   **Functionality:** A prominent search bar allows users to quickly find resources, and a "Load More" button supports pagination for browsing the extensive collection.

### 2.6. Virtual Classroom & Meetings
EduVerse integrates live video sessions directly into the platform, eliminating the need for external video conferencing tools.

#### 2.6.1. Core Functionality
The meeting page serves as the central hub for all live interactions.
-   **Instant Meetings:** Users can start a new meeting with a single click.
-   **Scheduled Meetings:** The platform allows for scheduling future sessions, which appear in the "Upcoming Meetings" list.
-   **Joining:** Users can easily see and join upcoming meetings they are invited to.

#### 2.6.2. Upcoming Features
The current page is a scaffold for a more robust virtual classroom. Future development will include:
-   Screen sharing
-   Virtual whiteboards
-   Breakout rooms
-   Real-time polling and Q&A

### 2.7. AI Meeting Assistant & Recap
This feature transforms transient video calls into persistent, searchable knowledge assets.

#### 2.7.1. Transcription and Summarization
-   **Process:** Users can upload an audio recording of a meeting. The application first sends this audio data (as a data URI) to the `transcribeMeeting` AI flow. Once the full transcript is returned, it is then passed to the `summarizeMeeting` AI flow.
-   **Output:** The user is presented with two outputs: a full, verbatim transcript of the meeting and a concise, AI-generated summary of the key discussion points, decisions, and action items.

#### 2.7.2. Use Cases
-   **Accessibility:** Students who missed a class can catch up quickly with the summary and refer to the transcript for details.
-   **Review:** Meeting participants can easily review decisions made without having to re-watch the entire recording.
-   **Searchability:** Transcripts can be indexed and searched, making it easy to find specific information from past meetings.

### 2.8. AI Chatbot: Your Personal Study Buddy
The Chat page features a direct line to an AI Assistant designed to help with academic queries.

#### 2.8.1. Capabilities
The chatbot is a powerful tool for students. It can:
-   Explain complex concepts in simple terms.
-   Provide answers to study questions with citations.
-   Assist in drafting content like essays or reports.
-   Solve certain types of problems.

#### 2.8.2. User Interaction Flow
The interface is a classic chat application UI. A user types a question, and the message is sent to the `answerStudyQuestion` AI flow. The AI's response is then displayed in the chat window. The UI includes a loading state ("Thinking...") to provide feedback to the user while waiting for the AI to process the request.

### 2.9. Dynamic User Profiles
A user's profile is more than just a static page; it is their digital identity and academic resume within EduVerse.

#### 2.9.1. A Centralized Identity
The profile page aggregates a user's contributions, achievements, and affiliations. It includes a cover photo and a profile picture, providing a professional and personalized look.

#### 2.9.2. Role-Specific Views
The most powerful aspect of the profile is its dynamic nature. Using a tabbed interface, the page presents entirely different sets of information based on the viewer's role, as retrieved from local storage.
-   **Student Profile:** Features tabs for "Learning Path" (showing progress in courses), "Projects" (showcasing completed work), and "Certificates" (displaying earned credentials).
-   **Professional Profile:** Includes tabs for "Publications," "Courses Taught," and "Skills & Endorsements," highlighting their expertise and contributions.
-   **Admin Profile:** Displays "Courses Managed," "Channels Hosted," and "Institution Details," focusing on their administrative and community management responsibilities.

---

## 3. Design System and Style Guidelines

The user interface of EduVerse is crafted to be clean, modern, and conducive to learning. It adheres to a consistent design system built upon the shadcn/ui component library and Tailwind CSS.

### 3.1. Color Palette
The color scheme is intentional and designed to evoke feelings of trust, intelligence, and calm.
-   **Primary:** `HSL(210, 65%, 50%)` (#3391FF) - A vibrant blue representing trust and knowledge. Used for primary actions, links, and highlights.
-   **Background:** `HSL(210, 100%, 95%)` (Light Blue) - A desaturated version of the primary color, creating a calm and unobtrusive backdrop for content.
-   **Accent:** `HSL(30, 100%, 55%)` (#FFB833) - A contrasting yellow-orange used for calls to action, notifications, and AI-related features to draw user attention.
-   **Theme Variables:** These colors are implemented as HSL CSS variables in `src/app/globals.css`, allowing for easy theme customization and consistency across light and dark modes.

### 3.2. Typography
-   **Primary Font:** 'Inter' - A modern, highly legible grotesque sans-serif font used for all UI text, from headlines to body copy. Its neutral and objective feel is perfect for an educational platform.
-   **Font Loading:** The 'Inter' font is loaded from Google Fonts in the root layout (`src/app/layout.tsx`) to ensure it is available on all pages.

### 3.3. Iconography
-   **Library:** `lucide-react` is used for all icons. This library provides a comprehensive set of simple, clear, and consistent icons that aid in navigation and usability without adding visual clutter.

### 3.4. Layout and Responsiveness
EduVerse is designed with a mobile-first philosophy, ensuring a seamless experience on any device.
-   **Desktop Layout:** A three-column layout is common on wider screens, featuring a collapsible sidebar for primary navigation, a main content area, and a right-hand column for supplementary information (like the AI Content Assistant).
-   **Mobile Layout:** On smaller screens, the sidebar is hidden behind a hamburger menu, and a bottom navigation bar provides quick access to the most critical sections (Home, Channels, Meeting, Chat, Library, Profile). This ensures that core functionality is always just one tap away.
-   **Breakpoints:** Standard Tailwind CSS breakpoints are used to manage the transition between mobile, tablet, and desktop layouts.

---

## 4. Technical Architecture

### 4.1. Technology Stack

#### 4.1.1. Frontend Framework: Next.js & React
-   **Next.js App Router:** We use the App Router for its improved performance, nested layouts, and support for React Server Components.
-   **React Server Components (RSCs):** By default, components are rendered on the server, reducing the amount of JavaScript sent to the client and improving initial page load times. Client-side interactivity is opted into with the `"use client";` directive.
-   **TypeScript:** The entire codebase is written in TypeScript, ensuring type safety, better developer tooling, and more maintainable code.

#### 4.1.2. UI Components: shadcn/ui
-   **Not a Component Library:** shadcn/ui is a collection of reusable, unstyled components that can be copied directly into the project. This gives us full control over their code and styling.
-   **Location:** All UI components (Button, Card, Input, etc.) are located in the `src/components/ui` directory.
-   **Accessibility:** shadcn/ui components are built on top of Radix UI primitives, which are designed with accessibility (WAI-ARIA standards) as a top priority.

#### 4.1.3. Styling: Tailwind CSS
-   **Utility-First:** We use Tailwind CSS for all styling. This allows us to build complex, custom designs directly in our markup without writing custom CSS files.
-   **Theme Configuration:** The `tailwind.config.ts` file is configured to use the CSS variables defined in `globals.css`, ensuring that all utility classes (e.g., `bg-primary`, `text-accent`) are consistent with our design system.
-   **`tailwindcss-animate`:** This plugin is used to add simple enter/exit animations for components like accordions and dropdowns.

#### 4.1.4. Generative AI: Google AI & Genkit
-   **Genkit:** An open-source framework from Google for building production-ready AI-powered applications. It provides a structured way to define AI flows, prompts, and tools.
-   **Google AI Plugin:** The `@genkit-ai/googleai` plugin is used to connect Genkit to Google's powerful Gemini family of models.
-   **Centralized Configuration:** The core Genkit configuration, including the chosen AI model (`gemini-2.0-flash`), is centralized in `src/ai/genkit.ts`.

### 4.2. Project Structure
The project follows a standard Next.js App Router structure with some additional directories for organization:

```
/src
├── ai/
│   ├── flows/              # All Genkit AI flows (server-side logic)
│   │   ├── answer-study-questions.ts
│   │   ├── suggest-content.ts
│   │   └── ...
│   ├── dev.ts              # Entry point for Genkit development server
│   └── genkit.ts           # Central Genkit configuration
├── app/
│   ├── (auth)/             # Route group for auth pages (future)
│   ├── dashboard/          # Route group for main app pages
│   │   ├── chat/page.tsx
│   │   ├── layout.tsx
│   │   └── ...
│   ├── globals.css         # Global styles and theme variables
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing/Login page
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── *.tsx               # Custom, multi-part components (e.g., AuthForm)
├── hooks/
│   └── use-toast.ts        # Custom hooks
└── lib/
    ├── utils.ts            # Utility functions (e.g., cn)
    └── ...
```

### 4.3. State Management
-   **Local State (`useState`, `useReducer`):** For component-level state, we primarily use React's built-in hooks. This is sufficient for most of the application's needs.
-   **Simulated Global State (`localStorage`):** In the current experimental phase, the user's role is stored in `localStorage`. This is a temporary solution to simulate a logged-in state across different pages without a functional backend. In a production environment, this would be replaced by a proper session management solution (e.g., JWTs in cookies) and a global state management library like Zustand or React Context if needed.

### 4.4. AI Integration with Genkit

#### 4.4.1. Overview of Genkit Flows
Genkit "flows" are the backbone of our AI functionality. They are server-side functions that orchestrate calls to AI models, process data, and return structured output. Each flow is defined in its own file within `src/ai/flows` and includes:
-   **Zod Schemas:** Input and output schemas are defined using Zod to ensure type safety and provide structured data for the AI model.
-   **Prompt Definition:** A prompt is defined using `ai.definePrompt`, which takes the schemas and a Handlebars template string.
-   **Flow Definition:** The core logic is wrapped in `ai.defineFlow`, which ties the input, output, and prompt together.
-   **Server Action Wrapper:** An exported async function acts as a server action, making the flow callable from client components.

#### 4.4.2. Flow: `answer-study-questions.ts`
-   **Purpose:** To power the AI Chatbot.
-   **Input:** `AnswerStudyQuestionInputSchema` (a single `question` string).
-   **Output:** `AnswerStudyQuestionOutputSchema` (a single `answer` string).
-   **Prompt:** Instructs the AI to act as a study assistant and answer the user's question, providing citations where appropriate.

#### 4.4.3. Flow: `suggest-content.ts`
-   **Purpose:** To power the AI Content Assistant on the home feed.
-   **Input:** `SuggestContentInputSchema` (user `interests`, `accountType`, `trendingContent`).
-   **Output:** `SuggestContentOutputSchema` (an array of strings, `suggestedContent`).
-   **Prompt:** A detailed prompt that instructs the AI to act as a content strategist and generate 3-5 unique, engaging post ideas based on the user's profile. It specifically asks for the output to be a JSON array of strings.

#### 4.4.4. Flow: `transcribe-meeting.ts`
-   **Purpose:** To transcribe uploaded audio files for the Meeting Recap feature.
-   **Input:** `TranscribeMeetingInputSchema` (an `audioDataUri` string).
-   **Output:** `TranscribeMeetingOutputSchema` (a `transcription` string).
-   **Prompt:** Instructs the AI to perform real-time transcription. The `{{media url=audioDataUri}}` Handlebars helper is used to pass the audio data directly to the multimodal Gemini model.

#### 4.4.5. Flow: `summarize-meeting.ts`
-   **Purpose:** To summarize the transcript generated by the transcription flow.
-   **Input:** `SummarizeMeetingInputSchema` (a `transcript` string).
-   **Output:** `SummarizeMeetingOutputSchema` (a `summary` string).
-   **Prompt:** A straightforward prompt that asks the AI to read the provided transcript and produce a concise summary of key points and decisions.

---

## 5. Component Library Documentation
This section provides an overview of the key custom components that form the structure and functionality of the EduVerse application.

### 5.1. Core Layout Components
These components define the main structure of the dashboard and are located in `src/components`.

#### 5.1.1. `DesktopSidebar`
-   **File:** `src/components/desktop-sidebar.tsx`
-   **Purpose:** Renders the main navigation sidebar for screen sizes `sm` and larger.
-   **Features:**
    -   Displays the EduVerse logo and name.
    -   Contains navigation links to all main pages (Home, Channels, Meeting, etc.).
    -   Includes a dedicated "AI Tools" section.
    -   A settings link is fixed at the bottom.
    -   Highlights the active page based on the current URL pathname.

#### 5.1.2. `DesktopHeader`
-   **File:** `src/components/desktop-header.tsx`
-   **Purpose:** The top header bar for desktop views.
-   **Features:**
    -   Contains a global search bar.
    -   Features a user profile dropdown menu with links to Profile, Settings, and Logout.

#### 5.1.3. `MobileHeader`
-   **File:** `src/components/mobile-header.tsx`
-   **Purpose:** The top header bar for mobile views (hidden on `sm` and larger screens).
-   **Features:**
    -   A `Sheet` (slide-out panel) is triggered by a hamburger menu icon, revealing the full navigation links.
    -   Includes the EduVerse logo.
    -   A user profile dropdown, identical to the desktop version, provides access to account options.

#### 5.1.4. `BottomNav`
-   **File:** `src/components/bottom-nav.tsx`
-   **Purpose:** A persistent bottom navigation bar for mobile devices, providing quick access to core features.
-   **Features:**
    -   Contains icon-based links to Home, Channels, Meeting, Chat, Library, and Profile.
    -   The active link is highlighted to provide clear visual feedback to the user.
    -   It is hidden on screen sizes `sm` and larger.

### 5.2. Feature Components

#### 5.2.1. `AuthForm`
-   **File:** `src/components/auth-form.tsx`
-   **Purpose:** A comprehensive component that handles both user login and sign-up.
-   **Features:**
    -   Uses a `Tabs` component to switch between "Login" and "Sign Up" forms.
    -   **Sign Up:** Includes fields for Full Name, Email, Password, and a required `Select` dropdown for choosing a user role (Student, Professional, Admin).
    -   **Login:** Includes fields for Email and Password.
    -   **State Management (Experimental):** On form submission, it saves the selected role to `localStorage` and uses the Next.js `useRouter` to programmatically navigate the user to the `/dashboard`.
    -   Includes loading indicators on buttons to provide feedback during submission.

#### 5.2.2. Dashboard Page Components
Each page inside `src/app/dashboard` is a self-contained component that builds a specific feature view.
-   **`page.tsx` (Home Feed):** Renders the main content feed, the "Create Post" card, and the "AI Content Assistant" card. Manages the state for posts and AI suggestions.
-   **`profile/page.tsx`:** This is the most complex page component. It retrieves the user role from `localStorage` and uses a `switch` statement (`renderProfile`) to conditionally render one of three different sub-components: `StudentProfile`, `ProfessionalProfile`, or `AdminProfile`. Each of these sub-components contains the unique, role-specific layout and information tabs.
-   **`channels/page.tsx`:** Displays the grid of available channels. It conditionally renders the "Create Channel" button by checking if the user role stored in `localStorage` is `'admin'`.
-   **`meeting-recap/page.tsx`:** Manages the state for file uploads, transcription, summarization, loading, and errors. Contains the logic to read the uploaded file as a data URI and call the two-step AI flow process.

---

## 6. Getting Started: Setup and Development

### 6.1. Prerequisites
-   [Node.js](https://nodejs.org/) (version 20.x or later)
-   [npm](https://www.npmjs.com/) (or your package manager of choice)

### 6.2. Installation
1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd eduverse
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### 6.3. Running the Development Server
This project requires two development servers to run concurrently: one for the Next.js frontend and one for the Genkit AI flows.

1.  **Start the Next.js development server:**
    ```bash
    npm run dev
    ```
    This will start the web application, typically on `http://localhost:9002`.

2.  **In a separate terminal, start the Genkit development server:**
    ```bash
    npm run genkit:dev
    ```
    This starts the Genkit process, which makes the AI flows available to the Next.js application. You can view the Genkit developer UI, typically at `http://localhost:4000`, to inspect and test your flows.

### 6.4. Environment Variables
For the AI features to work, you need to provide a Google AI API key.

1.  Create a `.env` file in the root of the project.
2.  Go to [Google AI Studio](https://aistudio.google.com/app/apikey) to generate an API key.
3.  Add the following line to your `.env` file, replacing `<YOUR_API_KEY>` with the key you generated:
    ```
    GEMINI_API_KEY=<YOUR_API_KEY>
    ```

---

## 7. Future Roadmap and Contribution

### 7.1. Short-Term Goals (Next 3 Months)
-   **Functional Backend & Database:** Replace the `localStorage` simulation with a fully functional backend using Firebase Authentication and Firestore for data persistence.
-   **Real-time Chat:** Implement a real-time chat feature using Firestore's real-time capabilities.
-   **Virtual Classroom V1:** Integrate a WebRTC-based video solution to enable live video meetings directly within the app.
-   **Profile Completion Wizard:** Implement the "Profile Setup Wizard" for new users to fill in their details upon first login.
-   **Notification System:** Develop a basic notification system for likes, comments, and new followers.

### 7.2. Long-Term Vision (Next 12 Months)
-   **Advanced AI Meeting Assistant:** Introduce real-time transcription and translation during live meetings.
-   **Course Creation & Management:** Allow Professionals and Admins to create and manage full courses on the platform, including modules, quizzes, and assignments.
-   **Gamification & Achievements:** Introduce badges, points, and certificates for completing courses, participating in discussions, and achieving learning milestones.
-   **Advanced Recommendation Engine:** Enhance the AI recommendation algorithm to suggest not just content, but also channels, courses, and mentors.
-   **Monetization Options:** Explore pathways for Professionals and Institutions to offer premium courses or content.
-   **Third-Party Integrations:** Allow integrations with tools like Google Calendar, GitHub (for student projects), and other educational platforms.

### 7.3. Contributing to EduVerse
This is an open-source project, and contributions are welcome. Please refer to `CONTRIBUTING.md` for guidelines on how to contribute, including coding standards, pull request processes, and issue tracking.

---

## 8. Conclusion
EduVerse is more than just an application; it's a bold reimagining of the digital learning landscape. By blending the best of social media, learning management systems, and cutting-edge AI, we are building a platform that is intuitive, powerful, and, above all, human-centric. It is designed to empower the next generation of learners, educators, and innovators by providing them with the tools and the community they need to thrive. We are at the beginning of an exciting journey, and we invite you to join us in shaping the future of education.
