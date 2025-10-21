// Placeholder images for development
// TODO: Replace with actual images in /public/images/

export const PLACEHOLDER_IMAGES = {
  hero: "https://source.unsplash.com/1920x1080/?furniture,truck,delivery",

  features: {
    verified: "https://source.unsplash.com/400x400/?security,verification",
    payment: "https://source.unsplash.com/400x400/?payment,credit-card",
    tracking: "https://source.unsplash.com/400x400/?gps,map,location",
    chat: "https://source.unsplash.com/400x400/?chat,messaging",
    insurance: "https://source.unsplash.com/400x400/?insurance,protection",
    rating: "https://source.unsplash.com/400x400/?stars,rating,review",
  },

  testimonials: [
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
  ],

  blogs: (index: number) => `https://source.unsplash.com/800x600/?furniture,interior,design&sig=${index}`,

  qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://play.google.com/store",
}
