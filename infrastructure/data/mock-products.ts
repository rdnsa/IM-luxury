import type { Product } from "@/domain/entities/product";

export const MOCK_PRODUCTS: readonly Product[] = [
  {
    id: "bag-aurum-tote",
    slug: "aurum-signature-tote",
    name: "Aurum Signature Tote",
    category: "bag",
    price: 12500000,
    description:
      "Structured calfskin tote with brushed gold hardware and suede-lined interior crafted for everyday statement luxury.",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
    sizes: ["Small", "Medium", "Large"],
    colors: ["Onyx Black", "Ivory Cream", "Royal Caramel"],
    colorImages: {
      "Onyx Black":
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80",
      "Ivory Cream":
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=80",
      "Royal Caramel":
        "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1200&q=80"
    },
    featured: true
  },
  {
    id: "bag-eclipse-satchel",
    slug: "eclipse-mini-satchel",
    name: "Eclipse Mini Satchel",
    category: "bag",
    price: 9800000,
    description:
      "Compact silhouette in smooth leather with tonal stitching and detachable chain strap for elegant evenings.",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=80",
    sizes: ["Mini", "Standard"],
    colors: ["Champagne Gold", "Midnight Noir"],
    colorImages: {
      "Champagne Gold":
        "https://images.unsplash.com/photo-1614179689702-355944cd0918?auto=format&fit=crop&w=1200&q=80",
      "Midnight Noir":
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80"
    },
    featured: true
  },
  {
    id: "bag-regalia-crossbody",
    slug: "regalia-crossbody",
    name: "Regalia Crossbody",
    category: "bag",
    price: 8900000,
    description:
      "Minimal crossbody with embossed finish and magnetic flap closure, designed with discreet branded accents.",
    image:
      "https://images.unsplash.com/photo-1575032617751-6ddec2089882?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "bag-velour-clutch",
    slug: "velour-evening-clutch",
    name: "Velour Evening Clutch",
    category: "bag",
    price: 7600000,
    description:
      "Elegant clutch with polished frame clasp, silky lining, and removable shoulder chain for formal refinement.",
    image:
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "shoe-monarch-loafer",
    slug: "monarch-leather-loafer",
    name: "Monarch Leather Loafer",
    category: "shoe",
    price: 8400000,
    description:
      "Hand-finished loafer with soft lambskin upper, subtle metal signature, and cushioned insole for long wear.",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80",
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["Espresso Brown", "Noir Black"],
    colorImages: {
      "Espresso Brown":
        "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=80",
      "Noir Black":
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=80"
    },
    featured: true
  },
  {
    id: "shoe-soleil-heel",
    slug: "soleil-sculpted-heel",
    name: "Soleil Sculpted Heel",
    category: "shoe",
    price: 9200000,
    description:
      "Pointed heel with sculpted arch and satin finish, balancing dramatic profile with timeless sophistication.",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80",
    sizes: ["36", "37", "38", "39", "40"],
    colors: ["Rose Gold", "Pearl White"],
    colorImages: {
      "Rose Gold":
        "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=1200&q=80",
      "Pearl White":
        "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=1200&q=80"
    },
    featured: true
  },
  {
    id: "shoe-couronne-sneaker",
    slug: "couronne-luxe-sneaker",
    name: "Couronne Luxe Sneaker",
    category: "shoe",
    price: 7100000,
    description:
      "Premium leather sneaker with paneled construction, gold eyelets, and lightweight sole for elevated casualwear.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "shoe-opera-slingback",
    slug: "opera-slingback",
    name: "Opera Slingback",
    category: "shoe",
    price: 8600000,
    description:
      "Slingback silhouette in polished leather with a sleek buckle strap, crafted for modern formal styling.",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1200&q=80"
  }
];
