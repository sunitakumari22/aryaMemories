
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "wedding-memories",
    name: "Wedding Memories Book",
    description: "Cherish your special day forever with our handcrafted wedding memories book. Each page is designed to highlight your most precious moments.",
    price: 79.99,
    images: [
      "images/wedding.jpg",
      
    ],
    category: "Wedding",
    tags: ["wedding", "anniversary", "keepsake"],
    featured: true,
    customizationOptions: [
      {
        id: "cover-color",
        name: "Cover Color",
        options: ["Ivory", "Blush Pink", "Navy Blue", "Sage Green"],
        required: true
      },
      {
        id: "embossing",
        name: "Cover Embossing",
        options: ["Names & Date", "Mr & Mrs", "Custom Text"],
        required: true
      },
      {
        id: "page-count",
        name: "Page Count",
        options: ["30 pages", "50 pages", "80 pages"],
        required: true
      }
    ],
    stockLevel: 25
  },
  {
    id: "baby-first-year",
    name: "Baby's First Year",
    description: "Document every precious milestone of your baby's first year with our beautifully designed memory book. Perfect for preserving those fleeting moments.",
    price: 64.99,
    images: [
    "images/baby.jpg",
    ],
    category: "Baby",
    tags: ["baby", "milestone", "first year"],
    featured: true,
    customizationOptions: [
      {
        id: "cover-design",
        name: "Cover Design",
        options: ["Classic Stars", "Woodland Animals", "Floral Dreams", "Adventure Awaits"],
        required: true
      },
      {
        id: "name-embossing",
        name: "Name Embossing",
        options: ["Yes", "No"],
        required: true
      },
      {
        id: "milestone-cards",
        name: "Include Milestone Cards",
        options: ["Yes", "No"],
        required: false
      }
    ],
    stockLevel: 18
  },
  {
    id: "family-cookbook",
    name: "Family Recipe Collection",
    description: "Pass down your family's culinary heritage with our heirloom-quality recipe book. Designed to last generations and preserve your most treasured recipes.",
    price: 49.99,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    category: "Family",
    tags: ["recipes", "cookbook", "family", "heritage"],
    featured: false,
    customizationOptions: [
      {
        id: "cover-style",
        name: "Cover Style",
        options: ["Rustic Kitchen", "Modern Minimalist", "Vintage Charm"],
        required: true
      },
      {
        id: "section-dividers",
        name: "Section Dividers",
        options: ["Appetizers/Mains/Desserts", "By Family Member", "Seasons", "Countries"],
        required: true
      },
      {
        id: "recipe-cards",
        name: "Include Blank Recipe Cards",
        options: ["0", "10", "20", "30"],
        required: false
      }
    ],
    stockLevel: 32
  },
  {
    id: "travel-journal",
    name: "Adventure Travel Journal",
    description: "Capture your wanderlust experiences in our premium travel journal. With space for photos, mementos, and reflections, it's the perfect companion for any journey.",
    price: 39.99,
    images: [
      "images/3.jpg",
    ],
    category: "Travel",
    tags: ["travel", "adventure", "journal", "memories"],
    featured: true,
    customizationOptions: [
      {
        id: "cover-material",
        name: "Cover Material",
        options: ["Vegan Leather", "Canvas", "Recycled Paper"],
        required: true
      },
      {
        id: "paper-type",
        name: "Paper Type",
        options: ["Lined", "Blank", "Mixed"],
        required: true
      },
      {
        id: "world-map",
        name: "Include World Map",
        options: ["Yes", "No"],
        required: false
      }
    ],
    stockLevel: 45
  },
  {
    id: "graduation-memories",
    name: "Graduation Keepsake",
    description: "Commemorate academic achievements with our specially designed graduation memory book. Perfect for storing diplomas, tassels, and photos.",
    price: 54.99,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    category: "Milestone",
    tags: ["graduation", "achievement", "school"],
    featured: false,
    customizationOptions: [
      {
        id: "school-colors",
        name: "School Colors",
        options: ["Custom", "Traditional Blue & Gold", "Black & Silver"],
        required: true
      },
      {
        id: "graduation-year",
        name: "Graduation Year",
        options: ["2023", "2024", "2025", "Custom"],
        required: true
      },
      {
        id: "quote",
        name: "Include Inspirational Quote",
        options: ["Yes", "No"],
        required: false
      }
    ],
    stockLevel: 20
  },
  {
    id: "pet-memories",
    name: "Beloved Pet Memory Book",
    description: "Honor your furry family member with a dedicated pet memory book. Designed with special sections for paw prints, photos, and cherished moments.",
    price: 44.99,
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg"
    ],
    category: "Pet",
    tags: ["pet", "dog", "cat", "memorial"],
    featured: false,
    customizationOptions: [
      {
        id: "pet-type",
        name: "Pet Type",
        options: ["Dog", "Cat", "Other"],
        required: true
      },
      {
        id: "cover-photo",
        name: "Personalized Cover Photo",
        options: ["Yes", "No"],
        required: true
      },
      {
        id: "paw-print-kit",
        name: "Include Paw Print Kit",
        options: ["Yes", "No"],
        required: false
      }
    ],
    stockLevel: 15
  }
];
