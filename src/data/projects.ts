import { Project } from '../store/slices/projectsSlice';


export const sampleProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and Stripe integration.",
    longDescription:
      "A comprehensive e-commerce platform that provides a seamless shopping experience. Features include real-time inventory management, secure user authentication, and a responsive design that works across all devices. The platform integrates with Stripe for secure payment processing and includes an admin dashboard for managing products, orders, and customers.",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    size: "large",
    type: "React",
    demoUrl: "#",
    price: 299,
    features: [
      "Real-time inventory management",
      "User authentication",
      "Responsive design",
      "Stripe integration",
    ],
    requirements: [
      "Node.js 16+",
      "Modern web browser",
      "Stripe account",
      "MongoDB database",
    ],
  },
  {
    id: "2",
    title: "AI Chat Application",
    description:
      "An AI-powered chat application that uses OpenAI's GPT model to provide intelligent responses.",
    longDescription:
      "A sophisticated chat application that leverages OpenAI's GPT model to deliver intelligent and context-aware responses. The application features real-time messaging capabilities, conversation history tracking, and a user-friendly interface. It's perfect for customer support, virtual assistants, or interactive learning environments.",
    technologies: ["React", "Node.js", "OpenAI API", "Socket.io"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    size: "medium",
    type: "React",
    demoUrl: "#",
    price: 199,
    features: [
      "AI-powered responses",
      "Real-time messaging",
      "Conversation history",
      "User authentication",
    ],
    requirements: [
      "OpenAI API key",
      "Node.js 14+",
      "WebSocket support",
      "Modern web browser",
    ],
  },
  {
    id: "3",
    title: "Task Management System",
    description:
      "A comprehensive task management system with features like task assignment, progress tracking, and deadline management.",
    longDescription:
      "A powerful task management system designed to streamline project workflows and enhance team collaboration. The system includes features for task assignment, progress tracking, deadline management, and team communication. It's perfect for teams of any size looking to improve their productivity and project organization.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Vuex"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    size: "medium",
    type: "JS",
    demoUrl: "#",
    price: 149,
    features: [
      "Task assignment",
      "Progress tracking",
      "Deadline management",
      "Team collaboration",
    ],
    requirements: [
      "Firebase account",
      "Modern web browser",
      "Node.js 14+",
      "Vue.js 3+",
    ],
  },
  {
    id: "4",
    title: "Portfolio Website",
    description:
      "A stunning portfolio website with smooth animations, dark mode support, and a modern design. Perfect for showcasing your work and skills.",
    longDescription:
      "A powerful task management system designed to streamline project workflows and enhance team collaboration. The system includes features for task assignment, progress tracking, deadline management, and team communication. It's perfect for teams of any size looking to improve their productivity and project organization.",

    technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop",
    size: "small",
    type: "React",
    demoUrl: "#",
    price: 99,
    features: [
      "Smooth animations",
      "Dark mode support",
      "Responsive design",
      "Contact form",
    ],
    requirements: [
      "Firebase account",
      "Modern web browser",
      "Node.js 14+",
      "Vue.js 3+",
    ],
  },
  {
    id: "5",
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard that displays current weather conditions, forecasts, and interactive maps. Includes location-based weather updates.",
    longDescription:
      "A powerful task management system designed to streamline project workflows and enhance team collaboration. The system includes features for task assignment, progress tracking, deadline management, and team communication. It's perfect for teams of any size looking to improve their productivity and project organization.",

    technologies: ["React", "OpenWeather API", "Chart.js", "CSS"],
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop",
    size: "small",
    type: "React",
    demoUrl: "#",
    price: 79,
    features: [
      "Real-time weather data",
      "Interactive maps",
      "Weather forecasts",
      "Location tracking",
    ],
    requirements: [
      "Firebase account",
      "Modern web browser",
      "Node.js 14+",
      "Vue.js 3+",
    ],
  },
  {
    id: "6",
    title: "Social Media Dashboard",
    description:
      "A comprehensive social media dashboard for managing multiple platforms. Includes analytics, scheduling, and engagement tracking.",
    longDescription:
      "A powerful task management system designed to streamline project workflows and enhance team collaboration. The system includes features for task assignment, progress tracking, deadline management, and team communication. It's perfect for teams of any size looking to improve their productivity and project organization.",

    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop",
    size: "large",
    type: "React",
    demoUrl: "#",
    price: 249,
    features: [
      "Multi-platform management",
      "Analytics dashboard",
      "Post scheduling",
      "Engagement tracking",
    ],
    requirements: [
      "Firebase account",
      "Modern web browser",
      "Node.js 14+",
      "Vue.js 3+",
    ],
  },
  {
    id: "7",
    title: "Recipe App",
    description:
      "A modern recipe application with search functionality, meal planning, and nutritional information. Includes user-submitted recipes and favorites.",
    longDescription:
      "A powerful task management system designed to streamline project workflows and enhance team collaboration. The system includes features for task assignment, progress tracking, deadline management, and team communication. It's perfect for teams of any size looking to improve their productivity and project organization.",

    technologies: ["Vue.js", "Firebase", "Tailwind CSS", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&auto=format&fit=crop",
    size: "medium",
    type: "JS",
    demoUrl: "#",
    price: 129,
    features: [
      "Recipe search",
      "Meal planning",
      "Nutritional info",
      "User favorites",
    ],
    requirements: [
      "Firebase account",
      "Modern web browser",
      "Node.js 14+",
      "Vue.js 3+",
    ],
  },
  {
    id: "8",
    title: "Fitness Tracker",
    description:
      "A comprehensive fitness tracking application with workout plans, progress tracking, and nutrition logging. Includes social features and achievements.",
    longDescription:
      "A powerful task management system designed to streamline project workflows and enhance team collaboration. The system includes features for task assignment, progress tracking, deadline management, and team communication. It's perfect for teams of any size looking to improve their productivity and project organization.",

    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
    size: "large",
    type: "React",
    demoUrl: "#",
    price: 199,
    features: [
      "Workout tracking",
      "Progress monitoring",
      "Nutrition logging",
      "Social features",
    ],
    requirements: [
      "Firebase account",
      "Modern web browser",
      "Node.js 14+",
      "Vue.js 3+",
    ],
  },
];

// navbar
  export const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/create-app", label: "Create " },
  ];

// social icons
    export const socialLinks = [
      {
        href: "https://www.facebook.com/ahmed.fouad.519045",
        icon: "Facebook",
        label: "Facebook",
      },
      {
        href: "https://github.com/ahmmed-fouad",
        icon: "Github",
        label: "GitHub",
      },
      {
        href: "https://www.linkedin.com/in/ahmed-fouad-el-aziz-a50547181/",
        icon: "Linkedin",
        label: "LinkedIn",
      },
      {
        href: "https://x.com/2Ahmed_Fouad2",
        icon: "Twitter",
        label: "X",
      },
      {
        href: "https://www.instagram.com/a.fouad.zizo1/",
        icon: "Instagram",
        label: "Instagram",
      },
      // { href: 'https://wa.me/201011820991', icon: <Whatsapp, label: 'WhatsApp' },
      { href: "tel:01011820991",
         icon: "Phone",
          label: "Phone" },
      {
        href: "mailto:afouad.zizo@gmail.com",
        icon: "Mail",
        label: "Email",
      },
    ];

    export const features = [
      {
        title: "Web Development",
        description:
          "Creating modern, responsive web applications using the latest technologies",
        icon: "🌐",
      },
      {
        title: "UI/UX Design",
        description:
          "Designing beautiful and intuitive user interfaces with great user experience",
        icon: "🎨",
      },
      {
        title: "Mobile Development",
        description:
          "Building cross-platform mobile applications using React Native",
        icon: "📱",
      },
    ];

    export const skills = [
      {
        category: "Frontend",
        items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"],
      },
      {
        category: "Mobile",
        items: ["React Native", "Expo", "iOS", "Android"],
      },
      {
        category: "Tools & Others",
        items: ["Git", "Docker", "AWS", "CI/CD", "Jest"],
      },
    ];
