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
    id: "bag-monarch-shoulder",
    slug: "monarch-shoulder-bag",
    name: "Monarch Shoulder Bag",
    category: "bag",
    price: 8400000,
    description:
      "Soft lambskin shoulder bag with sculpted flap, subtle metal signature, and a compact profile for long wear.",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80",
    sizes: ["Compact", "Classic"],
    colors: ["Espresso Brown", "Noir Black"],
    colorImages: {
      "Espresso Brown":
        "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1200&q=80",
      "Noir Black":
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80"
    },
    featured: true
  },
  {
    id: "bag-soleil-top-handle",
    slug: "soleil-top-handle-bag",
    name: "Soleil Top Handle Bag",
    category: "bag",
    price: 9200000,
    description:
      "Structured top handle bag with satin-sheen finish, clean edges, and a luminous profile for formal styling.",
    image:
      "https://images.unsplash.com/photo-1614179689702-355944cd0918?auto=format&fit=crop&w=1200&q=80",
    sizes: ["Mini", "Standard"],
    colors: ["Rose Gold", "Pearl White"],
    colorImages: {
      "Rose Gold":
        "https://images.unsplash.com/photo-1614179689702-355944cd0918?auto=format&fit=crop&w=1200&q=80",
      "Pearl White":
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=80"
    },
    featured: true
  },
  {
    id: "bag-couronne-bucket",
    slug: "couronne-bucket-bag",
    name: "Couronne Bucket Bag",
    category: "bag",
    price: 7100000,
    description:
      "Premium leather bucket bag with paneled construction, gold drawstring accents, and a lightweight everyday shape.",
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "bag-opera-sling",
    slug: "opera-sling-bag",
    name: "Opera Sling Bag",
    category: "bag",
    price: 8600000,
    description:
      "Polished leather sling bag with a sleek buckle strap, crafted for modern formal styling and hands-free evenings.",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=80"
  }
];
