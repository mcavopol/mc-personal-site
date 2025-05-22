# Logo Carousel Component

A responsive, animated logo carousel component for Next.js applications.

## Features

- Displays panorama images of logos organized by category
- Automatically rotates through different categories
- Expandable/collapsible view with smooth animations
- Responsive design that adapts to different screen sizes
- Automatic scrolling with pause/play controls
- Smart detection of scrollable content
- Center-justification for images narrower than the display
- Left-justification for images wider than the display

## Usage

\`\`\`jsx
import MultiRowPanoramaWall from "@/components/multi-row-panorama-wall"

// Define your panorama rows
const panoramaRows = [
  {
    src: "/path/to/your/image.png",
    alt: "Description of logos in this image",
    category: "Category Name",
  },
  // Add more rows as needed
]

// Use the component
export default function YourPage() {
  return (
    <div>
      <MultiRowPanoramaWall 
        panoramaRows={panoramaRows} 
        showCategories={true} 
        title="Trusted by industry leaders" 
      />
    </div>
  )
}
\`\`\`

## Props

### MultiRowPanoramaWall

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `panoramaRows` | `PanoramaRow[]` | Required | Array of panorama row objects |
| `title` | `string` | "Trusted by industry leaders" | Title displayed above the carousel |
| `showCategories` | `boolean` | `false` | Whether to show category labels |
| `className` | `string` | `undefined` | Additional CSS classes |

### PanoramaRow

| Property | Type | Description |
|----------|------|-------------|
| `src` | `string` | URL of the panorama image |
| `alt` | `string` | Alt text for the image |
| `category` | `string` | Optional category name |

## Dependencies

This component requires:

- Next.js 13+ with App Router
- Tailwind CSS
- shadcn/ui Button component
- lucide-react icons
- clsx and tailwind-merge for className utilities

## License

MIT
