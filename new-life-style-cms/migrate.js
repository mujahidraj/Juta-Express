/* eslint-disable no-undef */
/* eslint-env node */
import { createClient } from '@sanity/client'

// 1. Setup Client
const client = createClient({
  projectId: 'zo7l76jd', // Your Project ID
  dataset: 'production',
  apiVersion: '2023-01-01',
  token:'skYlNkGCDyEoVjIVnZYVtMskIDUGTH9pRRvlg1VZ7zYOe2prjgxbJXBbp0lEviDNfza7Q3YuCH8IAM4rPIab5RbNk69YCio5b54mSM5HjmK32xL5vd8ktzohKqovE4fG9h5TUUSuIROw0IHTypfFZiGdWC88XQ84TJ7B4h39YOqOX8Yxn4Xf', // <--- PASTE YOUR TOKEN HERE AGAIN
  useCdn: false,
})

// 2. Your Full Data (Paste your JSON array here)
const products = [ 
  {
    "product_id": "CLO-016",
    "product_name": "Ralph Lauren Mesh Knit Polo Shirt",
    "brand_name": "Polo Ralph Lauren",
    "category": ["Men", "Apparel", "Tops"],
    "product_images": [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1628911774602-74a0cfee9b0d?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-polo-1",
    "price": {
      "regular": 110,
      "discounted": 89.5,
      "currency": "USD"
    },
    "available_sizes": ["S", "M", "L", "XL", "XXL"],
    "available_colors": ["White", "Navy", "Royal Blue"],
    "stock_status": "In Stock",
    "sku": "PRL-MP-016",
    "shoe_type": "N/A",
    "material": {
      "upper": "100% Cotton",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "220g",
    "heel_type": "N/A",
    "closure_type": "Two-button Placket",
    "country_of_origin": "Vietnam",
    "care_instructions": "Machine washable",
    "size_system": "US Standard",
    "fit_type": "Classic Fit",
    "model_fit_suggestion": "True to size",
    "bundle_offers": ["Buy 3 for $250"],
    "customer_ratings": 4.7,
    "customer_reviews": [
      { "user": "Arthur G.", "text": "The quality of the cotton is unmatched.", "date": "2024-02-10", "rating": 5 },
      { "user": "Steven H.", "text": "Classic look that never fails.", "date": "2024-03-01", "rating": 5 },
      { "user": "Liam P.", "text": "Shrinks slightly after first wash.", "date": "2024-03-15", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "N/A",
    "quantity_available": 140,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "BAG-017",
    "product_name": "TUMI Alpha 3 Compact Lap Top Brief",
    "brand_name": "TUMI",
    "category": ["Unisex", "Bags", "Business"],
    "product_images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-tumi-1",
    "price": {
      "regular": 595,
      "discounted": 595,
      "currency": "USD"
    },
    "available_sizes": ["One Size"],
    "available_colors": ["Black Anthracite"],
    "stock_status": "In Stock",
    "sku": "TUM-A3-LB-017",
    "shoe_type": "N/A",
    "material": {
      "upper": "FXT Ballistic Nylon",
      "sole": "N/A",
      "lining": "Polyester"
    },
    "weight": "1.4kg",
    "heel_type": "N/A",
    "closure_type": "Zipper",
    "country_of_origin": "Thailand",
    "care_instructions": "Wipe with TUMI cleaner",
    "size_system": "Standard",
    "fit_type": "Shoulder/Hand Carry",
    "model_fit_suggestion": "N/A",
    "bundle_offers": ["Free monogramming"],
    "customer_ratings": 4.9,
    "customer_reviews": [
      { "user": "Gregory V.", "text": "The durability of the ballistic nylon is incredible.", "date": "2024-01-20", "rating": 5 },
      { "user": "Nathan D.", "text": "Perfect organization for my cables and laptop.", "date": "2024-02-14", "rating": 5 },
      { "user": "Sarah J.", "text": "Heavier than expected but looks professional.", "date": "2024-03-05", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "2-3 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "5 Year TUMI Warranty",
    "quantity_available": 35,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": true
  },
  {
    "product_id": "CLO-018",
    "product_name": "Arc'teryx Atom LT Hoody",
    "brand_name": "Arc'teryx",
    "category": ["Men", "Apparel", "Outerwear"],
    "product_images": [
      "https://images.unsplash.com/photo-1629130832313-162074092b77?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-arc-1",
    "price": {
      "regular": 260,
      "discounted": 260,
      "currency": "USD"
    },
    "available_sizes": ["S", "M", "L", "XL"],
    "available_colors": ["Black", "Kingfisher", "Relic"],
    "stock_status": "In Stock",
    "sku": "ARC-ALH-018",
    "shoe_type": "N/A",
    "material": {
      "upper": "Tyono 20 Denier Shell",
      "sole": "N/A",
      "lining": "Coreloft Compact Insulation"
    },
    "weight": "375g",
    "heel_type": "N/A",
    "closure_type": "Full Front Zip",
    "country_of_origin": "Vietnam",
    "care_instructions": "Machine wash cold",
    "size_system": "US Standard",
    "fit_type": "Trim Fit",
    "model_fit_suggestion": "Runs small, consider sizing up for layering",
    "bundle_offers": ["None"],
    "customer_ratings": 4.9,
    "customer_reviews": [
      { "user": "Jason K.", "text": "The most versatile jacket I own.", "date": "2024-01-10", "rating": 5 },
      { "user": "Mike L.", "text": "Warm but breathes extremely well.", "date": "2024-02-05", "rating": 5 },
      { "user": "Tyler R.", "text": "Pricey, but the tech is worth it.", "date": "2024-03-12", "rating": 5 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "Practical Product Lifespan",
    "quantity_available": 60,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "WLT-019",
    "product_name": "Ridge Carbon Fiber Wallet",
    "brand_name": "The Ridge",
    "category": ["Unisex", "Accessories", "Wallets"],
    "product_images": [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-ridge-1",
    "price": {
      "regular": 125,
      "discounted": 105,
      "currency": "USD"
    },
    "available_sizes": ["Slim RFID"],
    "available_colors": ["3K Weave", "Forged Carbon"],
    "stock_status": "In Stock",
    "sku": "RID-CFW-019",
    "shoe_type": "N/A",
    "material": {
      "upper": "Carbon Fiber",
      "sole": "N/A",
      "lining": "Elastic/Aluminum"
    },
    "weight": "57g",
    "heel_type": "N/A",
    "closure_type": "Elastic Expandable",
    "country_of_origin": "USA",
    "care_instructions": "Wipe with damp cloth",
    "size_system": "Standard",
    "fit_type": "Front Pocket",
    "model_fit_suggestion": "N/A",
    "bundle_offers": ["Free screwdriver for adjustments"],
    "customer_ratings": 4.6,
    "customer_reviews": [
      { "user": "Ethan B.", "text": "Finally got rid of my back pain from my old wallet.", "date": "2024-01-25", "rating": 5 },
      { "user": "Derek S.", "text": "Takes a week to get used to the card fan motion.", "date": "2024-02-18", "rating": 4 },
      { "user": "Will J.", "text": "Incredible build quality.", "date": "2024-03-09", "rating": 5 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "Lifetime Warranty",
    "quantity_available": 200,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "CLO-020",
    "product_name": "Lululemon Align High-Rise Pant",
    "brand_name": "Lululemon",
    "category": ["Women", "Sports", "Apparel"],
    "product_images": [
      "https://images.unsplash.com/photo-1506629082925-61019623da3d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548330032-90176378e937?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-lulu-1",
    "price": {
      "regular": 98,
      "discounted": 98,
      "currency": "USD"
    },
    "available_sizes": ["0", "2", "4", "6", "8", "10", "12"],
    "available_colors": ["Black", "Dark Olive", "Red Merlot"],
    "stock_status": "In Stock",
    "sku": "LUL-ALP-020",
    "shoe_type": "N/A",
    "material": {
      "upper": "Nulu Fabric (Nylon/Elastane)",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "250g",
    "heel_type": "N/A",
    "closure_type": "Elastic Waist",
    "country_of_origin": "Cambodia",
    "care_instructions": "Wash with like fabrics",
    "size_system": "US Standard",
    "fit_type": "Tight",
    "model_fit_suggestion": "True to size",
    "bundle_offers": ["None"],
    "customer_ratings": 4.8,
    "customer_reviews": [
      { "user": "Amanda C.", "text": "Feels like butter. The best leggings ever.", "date": "2024-01-15", "rating": 5 },
      { "user": "Priya K.", "text": "No pilling so far, worth the price.", "date": "2024-02-22", "rating": 5 },
      { "user": "Lara T.", "text": "A bit thin for cold weather, but perfect for yoga.", "date": "2024-03-08", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "Quality Promise",
    "quantity_available": 180,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "ACC-021",
    "product_name": "Seiko Men's 5 Sports Automatic Watch",
    "brand_name": "Seiko",
    "category": ["Men", "Accessories", "Watches"],
    "product_images": [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a1b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-seiko-1",
    "price": {
      "regular": 325,
      "discounted": 275,
      "currency": "USD"
    },
    "available_sizes": ["42.5mm Case"],
    "available_colors": ["Black/Silver", "Pepsi Bezel", "Orange"],
    "stock_status": "In Stock",
    "sku": "SEI-5SP-021",
    "shoe_type": "N/A",
    "material": {
      "upper": "Stainless Steel",
      "sole": "N/A",
      "lining": "Hardlex Crystal"
    },
    "weight": "170g",
    "heel_type": "N/A",
    "closure_type": "Deployment Buckle",
    "country_of_origin": "Japan",
    "care_instructions": "Rinse with fresh water after salt exposure",
    "size_system": "Standard",
    "fit_type": "Standard",
    "model_fit_suggestion": "Links can be removed for sizing",
    "bundle_offers": ["Free cleaning kit"],
    "customer_ratings": 4.7,
    "customer_reviews": [
      { "user": "Roberto F.", "text": "Great entry level automatic watch.", "date": "2024-01-30", "rating": 5 },
      { "user": "Satoshi N.", "text": "Reliable movement and beautiful lume.", "date": "2024-02-12", "rating": 5 },
      { "user": "Bill O.", "text": "Bezel alignment is slightly off on mine.", "date": "2024-03-03", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "3 Year Limited Warranty",
    "quantity_available": 45,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "CLO-022",
    "product_name": "Champion Men's Reverse Weave Sweatshirt",
    "brand_name": "Champion",
    "category": ["Men", "Apparel", "Essentials"],
    "product_images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588612143468-b39174092497?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-champ-1",
    "price": {
      "regular": 65,
      "discounted": 45,
      "currency": "USD"
    },
    "available_sizes": ["S", "M", "L", "XL", "XXL"],
    "available_colors": ["Oxford Grey", "Black", "Navy"],
    "stock_status": "In Stock",
    "sku": "CHA-RW-022",
    "shoe_type": "N/A",
    "material": {
      "upper": "12oz Heavyweight Fleece",
      "sole": "N/A",
      "lining": "Fleece"
    },
    "weight": "800g",
    "heel_type": "N/A",
    "closure_type": "Pullover",
    "country_of_origin": "Honduras",
    "care_instructions": "Wash cold, hang dry recommended",
    "size_system": "US Standard",
    "fit_type": "Athletic Fit",
    "model_fit_suggestion": "Runs slightly large for a baggy look",
    "bundle_offers": ["None"],
    "customer_ratings": 4.5,
    "customer_reviews": [
      { "user": "Sean C.", "text": "Heavy and built like a tank.", "date": "2024-02-05", "rating": 5 },
      { "user": "Marcus J.", "text": "Classic fit, looks great with anything.", "date": "2024-02-28", "rating": 5 },
      { "user": "Kevin B.", "text": "The neck hole is a bit tight.", "date": "2024-03-10", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "N/A",
    "quantity_available": 300,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "CLO-023",
    "product_name": "Carhartt WIP Madison Cord Shirt",
    "brand_name": "Carhartt WIP",
    "category": ["Men", "Apparel", "Shirts"],
    "product_images": [
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620794341491-76be6eeb6946?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-car-1",
    "price": {
      "regular": 115,
      "discounted": 95,
      "currency": "USD"
    },
    "available_sizes": ["S", "M", "L", "XL"],
    "available_colors": ["Leather/Cinnamon", "Wall", "Black"],
    "stock_status": "In Stock",
    "sku": "WIP-MCS-023",
    "shoe_type": "N/A",
    "material": {
      "upper": "100% Cotton Corduroy",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "400g",
    "heel_type": "N/A",
    "closure_type": "Buttons",
    "country_of_origin": "Tunisia",
    "care_instructions": "Machine wash cold",
    "size_system": "US Standard",
    "fit_type": "Relaxed Fit",
    "model_fit_suggestion": "True to size",
    "bundle_offers": ["None"],
    "customer_ratings": 4.8,
    "customer_reviews": [
      { "user": "Leo S.", "text": "The corduroy is thick and high quality.", "date": "2024-01-18", "rating": 5 },
      { "user": "Toby W.", "text": "Great color options for fall.", "date": "2024-02-20", "rating": 5 },
      { "user": "Alex G.", "text": "Sleeves are a bit long.", "date": "2024-03-02", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "5-7 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "N/A",
    "quantity_available": 75,
    "is_best_seller": false,
    "is_new_arrival": true,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "ACC-024",
    "product_name": "Oakley Holbrook Sunglasses",
    "brand_name": "Oakley",
    "category": ["Unisex", "Accessories", "Eyewear"],
    "product_images": [
      "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511499767390-903390e6fbc1?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-oak-1",
    "price": {
      "regular": 182,
      "discounted": 155,
      "currency": "USD"
    },
    "available_sizes": ["Standard"],
    "available_colors": ["Matte Black/Prizm Grey", "Woodgrain"],
    "stock_status": "In Stock",
    "sku": "OAK-HB-024",
    "shoe_type": "N/A",
    "material": {
      "upper": "O Matter Frame",
      "sole": "N/A",
      "lining": "Plutonite Lenses"
    },
    "weight": "28g",
    "heel_type": "N/A",
    "closure_type": "N/A",
    "country_of_origin": "USA",
    "care_instructions": "Clean with microfibre bag",
    "size_system": "Standard",
    "fit_type": "Medium to Large faces",
    "model_fit_suggestion": "N/A",
    "bundle_offers": ["None"],
    "customer_ratings": 4.7,
    "customer_reviews": [
      { "user": "Chris P.", "text": "The Prizm lenses really make colors pop.", "date": "2024-02-12", "rating": 5 },
      { "user": "Dave T.", "text": "Lightweight and durable for hiking.", "date": "2024-03-01", "rating": 5 },
      { "user": "Matt S.", "text": "They feel a bit plasticky compared to metal frames.", "date": "2024-03-11", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "2 Year Limited Warranty",
    "quantity_available": 110,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "BAG-025",
    "product_name": "Longchamp Le Pliage Large Tote",
    "brand_name": "Longchamp",
    "category": ["Women", "Accessories", "Bags"],
    "product_images": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-long-1",
    "price": {
      "regular": 155,
      "discounted": 140,
      "currency": "USD"
    },
    "available_sizes": ["Large"],
    "available_colors": ["Navy", "Black", "Paper"],
    "stock_status": "In Stock",
    "sku": "LON-LP-025",
    "shoe_type": "N/A",
    "material": {
      "upper": "Polyamide Canvas",
      "sole": "N/A",
      "lining": "Leather Trim"
    },
    "weight": "300g",
    "heel_type": "N/A",
    "closure_type": "Zipper and Snap",
    "country_of_origin": "France",
    "care_instructions": "Wipe with soft cloth",
    "size_system": "Standard",
    "fit_type": "Shoulder Tote",
    "model_fit_suggestion": "N/A",
    "bundle_offers": ["None"],
    "customer_ratings": 4.9,
    "customer_reviews": [
      { "user": "Claire B.", "text": "Folds up small, perfect for travel!", "date": "2024-01-22", "rating": 5 },
      { "user": "Yvonne D.", "text": "Classic French elegance. Fits everything.", "date": "2024-02-18", "rating": 5 },
      { "user": "Isabel L.", "text": "The corners wear out after a year of daily use.", "date": "2024-03-05", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "4-6 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "Limited Global Warranty",
    "quantity_available": 90,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "CLO-026",
    "product_name": "Fred Perry Twin Tipped Polo",
    "brand_name": "Fred Perry",
    "category": ["Men", "Apparel", "Tops"],
    "product_images": [
      "https://images.unsplash.com/photo-1628911774602-74a0cfee9b0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-fred-1",
    "price": {
      "regular": 105,
      "discounted": 105,
      "currency": "USD"
    },
    "available_sizes": ["38", "40", "42", "44"],
    "available_colors": ["Black/Champagne", "Navy/Ice"],
    "stock_status": "In Stock",
    "sku": "FRE-TTP-026",
    "shoe_type": "N/A",
    "material": {
      "upper": "100% Cotton Pique",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "230g",
    "heel_type": "N/A",
    "closure_type": "Two-button",
    "country_of_origin": "UK",
    "care_instructions": "Wash cold, flat dry",
    "size_system": "UK Chest",
    "fit_type": "Slim Fit",
    "model_fit_suggestion": "Size up for a more relaxed fit",
    "bundle_offers": ["None"],
    "customer_ratings": 4.6,
    "customer_reviews": [
      { "user": "Liam W.", "text": "The Laurel Wreath is iconic. Great fit.", "date": "2024-01-14", "rating": 5 },
      { "user": "Noel G.", "text": "Solid quality, stays sharp after many washes.", "date": "2024-02-11", "rating": 5 },
      { "user": "Ross E.", "text": "Very slim fitting, be careful with sizing.", "date": "2024-03-09", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "5-7 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "N/A",
    "quantity_available": 55,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "BLT-027",
    "product_name": "Hermès 32mm Reversible Belt Kit",
    "brand_name": "Hermès",
    "category": ["Unisex", "Accessories", "Belts"],
    "product_images": [
      "https://images.unsplash.com/photo-1624222247344-550fb8055571?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-hermes-1",
    "price": {
      "regular": 850,
      "discounted": 850,
      "currency": "USD"
    },
    "available_sizes": ["80", "85", "90", "95", "100"],
    "available_colors": ["Black/Gold", "Etoupe/Blue"],
    "stock_status": "Limited Stock",
    "sku": "HER-RB-027",
    "shoe_type": "N/A",
    "material": {
      "upper": "Epsom Leather",
      "sole": "N/A",
      "lining": "Swift Leather"
    },
    "weight": "150g",
    "heel_type": "N/A",
    "closure_type": "H Buckle",
    "country_of_origin": "France",
    "care_instructions": "Specialist leather cleaning only",
    "size_system": "Centimeters",
    "fit_type": "Standard",
    "model_fit_suggestion": "Measure at the waist where belt sits",
    "bundle_offers": ["None"],
    "customer_ratings": 4.9,
    "customer_reviews": [
      { "user": "Julian V.", "text": "The ultimate luxury belt. Reversible is a plus.", "date": "2024-01-05", "rating": 5 },
      { "user": "Marie S.", "text": "Incredible craftsmanship, will last forever.", "date": "2024-02-15", "rating": 5 },
      { "user": "Paul R.", "text": "Very expensive but you pay for the name and quality.", "date": "2024-03-08", "rating": 5 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "2-3 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "Lifetime Craftsmanship Warranty",
    "quantity_available": 10,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "CLO-028",
    "product_name": "Dickies 874 Work Pant",
    "brand_name": "Dickies",
    "category": ["Men", "Apparel", "Bottoms"],
    "product_images": [
      "https://images.unsplash.com/photo-1594932224828-b4b059b6f6f9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-dickies-1",
    "price": {
      "regular": 35,
      "discounted": 29,
      "currency": "USD"
    },
    "available_sizes": ["30x30", "32x30", "34x32", "36x32"],
    "available_colors": ["Black", "Dark Navy", "Khaki"],
    "stock_status": "In Stock",
    "sku": "DIC-874-028",
    "shoe_type": "N/A",
    "material": {
      "upper": "65% Polyester, 35% Cotton",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "500g",
    "heel_type": "N/A",
    "closure_type": "Hook and Eye",
    "country_of_origin": "Mexico",
    "care_instructions": "Machine wash warm, tumble dry",
    "size_system": "US Waist/Inseam",
    "fit_type": "Original Fit",
    "model_fit_suggestion": "Order one size up in the waist",
    "bundle_offers": ["Buy 2 for $50"],
    "customer_ratings": 4.4,
    "customer_reviews": [
      { "user": "Tony H.", "text": "Stiff at first but becomes great over time.", "date": "2024-02-10", "rating": 5 },
      { "user": "Skate B.", "text": "Best skating pants, impossible to rip.", "date": "2024-02-22", "rating": 5 },
      { "user": "Jim L.", "text": "Waist runs very small, had to exchange.", "date": "2024-03-05", "rating": 3 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "$5.00",
    "cod_available": true,
    "warranty": "N/A",
    "quantity_available": 1000,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "BAG-029",
    "product_name": "Aer Day Pack 2",
    "brand_name": "Aer",
    "category": ["Unisex", "Bags", "Tech"],
    "product_images": [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-aer-1",
    "price": {
      "regular": 140,
      "discounted": 140,
      "currency": "USD"
    },
    "available_sizes": ["14.8 Liters"],
    "available_colors": ["Black", "Grey"],
    "stock_status": "In Stock",
    "sku": "AER-DP2-029",
    "shoe_type": "N/A",
    "material": {
      "upper": "1680D Cordura Ballistic Nylon",
      "sole": "N/A",
      "lining": "Water-resistant coating"
    },
    "weight": "1.2kg",
    "heel_type": "N/A",
    "closure_type": "YKK Zippers",
    "country_of_origin": "China",
    "care_instructions": "Hand wash with damp cloth",
    "size_system": "Standard",
    "fit_type": "Slim Backpack",
    "model_fit_suggestion": "N/A",
    "bundle_offers": ["Add a Slim Pouch for $30"],
    "customer_ratings": 4.8,
    "customer_reviews": [
      { "user": "Daniel T.", "text": "Stands up on its own! Perfect for office work.", "date": "2024-01-28", "rating": 5 },
      { "user": "Sarah K.", "text": "Minimalist and very sleek.", "date": "2024-02-14", "rating": 5 },
      { "user": "Kevin G.", "text": "A bit stiff on the shoulders.", "date": "2024-03-01", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "Lifetime Warranty",
    "quantity_available": 120,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "CLO-030",
    "product_name": "Stone Island Crinkle Reps NY Jacket",
    "brand_name": "Stone Island",
    "category": ["Men", "Apparel", "Outerwear"],
    "product_images": [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-stone-1",
    "price": {
      "regular": 850,
      "discounted": 720,
      "currency": "USD"
    },
    "available_sizes": ["S", "M", "L", "XL", "XXL"],
    "available_colors": ["Sage Green", "Black", "Navy"],
    "stock_status": "In Stock",
    "sku": "SI-CRNY-030",
    "shoe_type": "N/A",
    "material": {
      "upper": "100% Polyamide",
      "sole": "N/A",
      "lining": "Resin Coating"
    },
    "weight": "450g",
    "heel_type": "N/A",
    "closure_type": "Two-way Zip",
    "country_of_origin": "Italy",
    "care_instructions": "Wash at 30 degrees, remove patch before washing",
    "size_system": "US Standard",
    "fit_type": "Regular Fit",
    "model_fit_suggestion": "True to size",
    "bundle_offers": ["None"],
    "customer_ratings": 4.9,
    "customer_reviews": [
      { "user": "Vincenzo M.", "text": "The dye finish is incredible in person.", "date": "2024-02-01", "rating": 5 },
      { "user": "Oliver W.", "text": "Excellent wind resistance for spring.", "date": "2024-02-15", "rating": 5 },
      { "user": "Thomas B.", "text": "The badge is the best part of course.", "date": "2024-03-04", "rating": 5 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "5-7 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "N/A",
    "quantity_available": 25,
    "is_best_seller": false,
    "is_new_arrival": true,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "WLT-031",
    "product_name": "Secrid Slimwallet Premium Leather",
    "brand_name": "Secrid",
    "category": ["Unisex", "Accessories", "Wallets"],
    "product_images": [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559252475-19efdf32637e?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-secrid-1",
    "price": {
      "regular": 95,
      "discounted": 95,
      "currency": "USD"
    },
    "available_sizes": ["Slim"],
    "available_colors": ["Dutch Martin Whiskey", "Black"],
    "stock_status": "In Stock",
    "sku": "SEC-SW-031",
    "shoe_type": "N/A",
    "material": {
      "upper": "Full Grain Leather",
      "sole": "N/A",
      "lining": "Aluminum Cardprotector"
    },
    "weight": "72g",
    "heel_type": "N/A",
    "closure_type": "Lever mechanism",
    "country_of_origin": "Netherlands",
    "care_instructions": "Wipe with damp cloth",
    "size_system": "Standard",
    "fit_type": "N/A",
    "model_fit_suggestion": "Holds 6 cards in protector",
    "bundle_offers": ["None"],
    "customer_ratings": 4.8,
    "customer_reviews": [
      { "user": "Hans V.", "text": "The card ejection mechanism is so satisfying.", "date": "2024-01-10", "rating": 5 },
      { "user": "Lars P.", "text": "Keeps my cards from bending and breaking.", "date": "2024-02-04", "rating": 5 },
      { "user": "Mia S.", "text": "Not great for holding many coins.", "date": "2024-03-01", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "4-6 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "3 Year Warranty",
    "quantity_available": 150,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "ACC-032",
    "product_name": "New Era 59FIFTY Fitted Hat",
    "brand_name": "New Era",
    "category": ["Unisex", "Accessories", "Hats"],
    "product_images": [
      "https://images.unsplash.com/photo-1588850567047-1845a9ee02f9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-newera-1",
    "price": {
      "regular": 42,
      "discounted": 35,
      "currency": "USD"
    },
    "available_sizes": ["7", "7 1/8", "7 1/4", "7 3/8", "7 1/2", "7 5/8"],
    "available_colors": ["NY Yankees Navy", "LA Dodgers Blue"],
    "stock_status": "In Stock",
    "sku": "NE-5950-032",
    "shoe_type": "N/A",
    "material": {
      "upper": "100% Polyester",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "100g",
    "heel_type": "N/A",
    "closure_type": "Fitted",
    "country_of_origin": "China",
    "care_instructions": "Hand wash only",
    "size_system": "US Hat Size",
    "fit_type": "Fitted",
    "model_fit_suggestion": "Measure circumference of head for exact fit",
    "bundle_offers": ["None"],
    "customer_ratings": 4.7,
    "customer_reviews": [
      { "user": "Aaron J.", "text": "The original and best fitted cap.", "date": "2024-02-15", "rating": 5 },
      { "user": "Derek C.", "text": "Stitching is perfect every time.", "date": "2024-03-02", "rating": 5 },
      { "user": "Sam B.", "text": "Sizing can vary slightly between colors.", "date": "2024-03-14", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "$6.00",
    "cod_available": true,
    "warranty": "N/A",
    "quantity_available": 500,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "CLO-033",
    "product_name": "Stüssy Stock Logo Hoodie",
    "brand_name": "Stüssy",
    "category": ["Unisex", "Apparel", "Streetwear"],
    "product_images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-stussy-1",
    "price": {
      "regular": 125,
      "discounted": 125,
      "currency": "USD"
    },
    "available_sizes": ["S", "M", "L", "XL"],
    "available_colors": ["Grey Ash", "Black", "Pink"],
    "stock_status": "Out of Stock",
    "sku": "STU-SLH-033",
    "shoe_type": "N/A",
    "material": {
      "upper": "100% Cotton Garment Dyed",
      "sole": "N/A",
      "lining": "Fleece"
    },
    "weight": "700g",
    "heel_type": "N/A",
    "closure_type": "Pullover",
    "country_of_origin": "USA",
    "care_instructions": "Wash cold inside out",
    "size_system": "US Standard",
    "fit_type": "Relaxed Over-sized",
    "model_fit_suggestion": "Runs large, size down for a standard fit",
    "bundle_offers": ["None"],
    "customer_ratings": 4.9,
    "customer_reviews": [
      { "user": "Kyle X.", "text": "Classic streetwear essential. Worth the hype.", "date": "2024-01-20", "rating": 5 },
      { "user": "Jenna M.", "text": "So cozy, the garment dye looks great.", "date": "2024-02-11", "rating": 5 },
      { "user": "Brian L.", "text": "Hard to catch in stock!", "date": "2024-03-05", "rating": 5 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "5-7 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "N/A",
    "quantity_available": 0,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "BAG-034",
    "product_name": "Filson Medium Rugged Twill Duffle",
    "brand_name": "Filson",
    "category": ["Unisex", "Bags", "Travel"],
    "product_images": [
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-filson-1",
    "price": {
      "regular": 595,
      "discounted": 595,
      "currency": "USD"
    },
    "available_sizes": ["43 Liters"],
    "available_colors": ["Tan", "Otter Green"],
    "stock_status": "In Stock",
    "sku": "FIL-RTD-034",
    "shoe_type": "N/A",
    "material": {
      "upper": "Rugged Twill / Bridle Leather",
      "sole": "N/A",
      "lining": "Unlined"
    },
    "weight": "1.8kg",
    "heel_type": "N/A",
    "closure_type": "Brass Zipper / Storm Flap",
    "country_of_origin": "USA",
    "care_instructions": "Wipe or brush clean",
    "size_system": "Standard",
    "fit_type": "Duffle",
    "model_fit_suggestion": "N/A",
    "bundle_offers": ["None"],
    "customer_ratings": 5.0,
    "customer_reviews": [
      { "user": "Henry T.", "text": "Will literally last 50 years. Heavy duty.", "date": "2024-01-15", "rating": 5 },
      { "user": "Blake S.", "text": "The leather is incredible quality.", "date": "2024-02-25", "rating": 5 },
      { "user": "Ross G.", "text": "Best investment for travel I've made.", "date": "2024-03-10", "rating": 5 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "5-7 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "Lifetime Guarantee",
    "quantity_available": 20,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": true
  },
  {
    "product_id": "CLO-035",
    "product_name": "L.L.Bean Men's Bean Boots 8\"",
    "brand_name": "L.L.Bean",
    "category": ["Men", "Footwear", "Outdoors"],
    "product_images": [
      "https://images.unsplash.com/photo-1520639889313-7272175b1c39?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605733513597-a8f8d410fe3c?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-bean-1",
    "price": {
      "regular": 159,
      "discounted": 159,
      "currency": "USD"
    },
    "available_sizes": ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    "available_colors": ["Tan/Brown"],
    "stock_status": "In Stock",
    "sku": "LLB-BB-035",
    "shoe_type": "Duck Boots",
    "material": {
      "upper": "Full Grain Leather",
      "sole": "Rubber Chain-Tread",
      "lining": "Unlined"
    },
    "weight": "1.2kg",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "USA",
    "care_instructions": "Wipe with damp cloth, use leather conditioner",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "Runs very large, order 1 full size down or 1.5 with light socks",
    "bundle_offers": ["None"],
    "customer_ratings": 4.8,
    "customer_reviews": [
      { "user": "Maine R.", "text": "The classic rain boot. Waterproof and stylish.", "date": "2024-01-12", "rating": 5 },
      { "user": "Tom V.", "text": "Listen to the sizing advice! I went down a size and they fit perfectly.", "date": "2024-02-18", "rating": 5 },
      { "user": "Jeff D.", "text": "A bit heavy for long walks but great for slush.", "date": "2024-03-02", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "4-6 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "1 Year Guarantee",
    "quantity_available": 300,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "CLO-001",
    "product_name": "Levi's Men's 511 Slim Fit Jeans",
    "brand_name": "Levi's",
    "category": ["Men", "Apparel", "Denim"],
    "product_images": [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=R6S6v7R0WzE",
    "price": {
      "regular": 89.50,
      "discounted": 59.99,
      "currency": "USD"
    },
    "available_sizes": ["28x30", "30x32", "32x32", "34x34", "36x32"],
    "available_colors": ["Dark Hollow", "Black", "Native Cali"],
    "stock_status": "In Stock",
    "sku": "LEV-511-SLM-01",
    "shoe_type": "N/A",
    "material": {
      "upper": "99% Cotton, 1% Elastane",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "600g",
    "heel_type": "N/A",
    "closure_type": "Zipper Fly",
    "country_of_origin": "Mexico",
    "care_instructions": "Wash and dry inside out with like colors",
    "size_system": "US Waist/Inseam",
    "fit_type": "Slim",
    "model_fit_suggestion": "True to size",
    "bundle_offers": ["Buy 2 get 15% off"],
    "customer_ratings": 4.6,
    "customer_reviews": [
      { "user": "David T.", "text": "Perfect fit, just the right amount of stretch.", "date": "2023-08-12", "rating": 5 },
      { "user": "Sarah L.", "text": "Bought for my husband, he loves the quality of the denim.", "date": "2023-09-05", "rating": 5 },
      { "user": "James K.", "text": "A bit tighter in the thighs than expected.", "date": "2023-11-20", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "90 Days Material Warranty",
    "quantity_available": 200,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "BAG-002",
    "product_name": "Fjällräven Kånken Classic Backpack",
    "brand_name": "Fjällräven",
    "category": ["Unisex", "Accessories", "Bags"],
    "product_images": [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=7Xf7fG_7T7w",
    "price": {
      "regular": 90,
      "discounted": 80,
      "currency": "USD"
    },
    "available_sizes": ["16 Liters"],
    "available_colors": ["Graphite", "Forest Green", "Ox Red"],
    "stock_status": "In Stock",
    "sku": "FJR-KNK-CLS-02",
    "shoe_type": "N/A",
    "material": {
      "upper": "Vinylon F",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "300g",
    "heel_type": "N/A",
    "closure_type": "Two-way Zipper",
    "country_of_origin": "Vietnam",
    "care_instructions": "Soft brush and lukewarm water",
    "size_system": "Standard",
    "fit_type": "Ergonomic",
    "model_fit_suggestion": "N/A",
    "bundle_offers": ["Add a rain cover for $10"],
    "customer_ratings": 4.9,
    "customer_reviews": [
      { "user": "Emma W.", "text": "Iconic design and surprisingly durable.", "date": "2023-10-01", "rating": 5 },
      { "user": "Liam O.", "text": "Great for work and commuting.", "date": "2023-11-15", "rating": 5 },
      { "user": "Chloe B.", "text": "Straps are a bit thin if you carry heavy books.", "date": "2023-12-22", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "2-4 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "Lifetime Limited Warranty",
    "quantity_available": 85,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "WLT-003",
    "product_name": "Bellroy Hide & Seek Premium Leather Wallet",
    "brand_name": "Bellroy",
    "category": ["Men", "Accessories", "Wallets"],
    "product_images": [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559252475-19efdf32637e?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=p1p7Q7L5zSc",
    "price": {
      "regular": 99,
      "discounted": 89,
      "currency": "USD"
    },
    "available_sizes": ["Slim Bifold"],
    "available_colors": ["Black", "Java", "Caramel"],
    "stock_status": "In Stock",
    "sku": "BEL-HS-LDR-03",
    "shoe_type": "N/A",
    "material": {
      "upper": "Environmentally Certified Leather",
      "sole": "N/A",
      "lining": "Polyester"
    },
    "weight": "60g",
    "heel_type": "N/A",
    "closure_type": "Bifold",
    "country_of_origin": "India",
    "care_instructions": "Wipe with leather cleaner",
    "size_system": "Standard",
    "fit_type": "Slim Profile",
    "model_fit_suggestion": "N/A",
    "bundle_offers": ["Free gift wrapping"],
    "customer_ratings": 4.7,
    "customer_reviews": [
      { "user": "Michael R.", "text": "The hidden pocket is a genius idea for spare cash.", "date": "2023-09-18", "rating": 5 },
      { "user": "Aiden M.", "text": "Beautiful leather that ages very well.", "date": "2023-11-30", "rating": 5 },
      { "user": "Tom H.", "text": "Doesn't hold as many cards as my old bulky wallet.", "date": "2024-01-02", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "3 Year Warranty",
    "quantity_available": 120,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "CLO-004",
    "product_name": "Patagonia Men's Better Sweater Jacket",
    "brand_name": "Patagonia",
    "category": ["Men", "Outdoors", "Apparel"],
    "product_images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544923246-77307dd654ca?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=9LhI7iTfD6g",
    "price": {
      "regular": 149,
      "discounted": 149,
      "currency": "USD"
    },
    "available_sizes": ["S", "M", "L", "XL", "XXL"],
    "available_colors": ["Stonewash", "Black", "New Navy"],
    "stock_status": "In Stock",
    "sku": "PAT-BSJ-04",
    "shoe_type": "N/A",
    "material": {
      "upper": "100% Recycled Polyester Fleece",
      "sole": "N/A",
      "lining": "Soft Fleece"
    },
    "weight": "638g",
    "heel_type": "N/A",
    "closure_type": "Full-Zip",
    "country_of_origin": "Sri Lanka",
    "care_instructions": "Machine wash warm, tumble dry low",
    "size_system": "US Standard",
    "fit_type": "Regular",
    "model_fit_suggestion": "Runs slightly large, consider sizing down if between sizes",
    "bundle_offers": ["Free Patagonia sticker pack"],
    "customer_ratings": 4.8,
    "customer_reviews": [
      { "user": "Justin V.", "text": "Warm enough for fall days and looks professional too.", "date": "2023-10-20", "rating": 5 },
      { "user": "Elena G.", "text": "Bought for my son, he wears it everywhere.", "date": "2023-11-12", "rating": 5 },
      { "user": "Robert F.", "text": "Love the eco-friendly materials.", "date": "2023-12-05", "rating": 5 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "Ironclad Guarantee",
    "quantity_available": 300,
    "is_best_seller": true,
    "is_new_arrival": true,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "BLT-005",
    "product_name": "Carhartt Men's Journeyman Belt",
    "brand_name": "Carhartt",
    "category": ["Men", "Accessories", "Belts"],
    "product_images": [
      "https://images.unsplash.com/photo-1624222247344-550fb8055571?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-link-5",
    "price": {
      "regular": 34.99,
      "discounted": 29.99,
      "currency": "USD"
    },
    "available_sizes": ["32", "34", "36", "38", "40", "42"],
    "available_colors": ["Black", "Brown"],
    "stock_status": "In Stock",
    "sku": "CAR-JMN-05",
    "shoe_type": "N/A",
    "material": {
      "upper": "Full Grain Leather",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "200g",
    "heel_type": "N/A",
    "closure_type": "Buckle",
    "country_of_origin": "China",
    "care_instructions": "Hand wash only",
    "size_system": "US Inches",
    "fit_type": "Standard",
    "model_fit_suggestion": "Buy one size larger than your waist size",
    "bundle_offers": ["None"],
    "customer_ratings": 4.5,
    "customer_reviews": [
      { "user": "Gary M.", "text": "Thick leather, very durable for work.", "date": "2023-09-25", "rating": 5 },
      { "user": "Steven B.", "text": "Solid belt, but it's very stiff at first.", "date": "2023-11-08", "rating": 4 },
      { "user": "Kevin P.", "text": "Buckle feels heavy and high quality.", "date": "2023-12-14", "rating": 5 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "Limited Lifetime Warranty",
    "quantity_available": 500,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "CLO-006",
    "product_name": "Ray-Ban Classic Aviator Sunglasses",
    "brand_name": "Ray-Ban",
    "category": ["Unisex", "Accessories", "Eyewear"],
    "product_images": [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511499767390-903390e6fbc1?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=7i-N27E01qA",
    "price": {
      "regular": 163,
      "discounted": 145,
      "currency": "USD"
    },
    "available_sizes": ["Small (55mm)", "Standard (58mm)", "Large (62mm)"],
    "available_colors": ["Gold/Green G-15", "Black/Grey", "Silver/Mirror"],
    "stock_status": "In Stock",
    "sku": "RAY-AV-3025",
    "shoe_type": "N/A",
    "material": {
      "upper": "Metal Frame",
      "sole": "N/A",
      "lining": "Glass Lenses"
    },
    "weight": "31g",
    "heel_type": "N/A",
    "closure_type": "N/A",
    "country_of_origin": "Italy",
    "care_instructions": "Use microfibre cloth and lens cleaner",
    "size_system": "Millimeters",
    "fit_type": "Aviator Fit",
    "model_fit_suggestion": "Standard fits most faces",
    "bundle_offers": ["Free protective case included"],
    "customer_ratings": 4.9,
    "customer_reviews": [
      { "user": "Tom C.", "text": "Classic look that never goes out of style.", "date": "2023-07-20", "rating": 5 },
      { "user": "Linda P.", "text": "Lenses are crystal clear and great for driving.", "date": "2023-10-05", "rating": 5 },
      { "user": "Rick J.", "text": "Fragile frames, need to be careful.", "date": "2024-01-11", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "2-4 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "2 Year Warranty",
    "quantity_available": 150,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "CLO-007",
    "product_name": "Adidas Originals 3-Stripes Hoodie",
    "brand_name": "Adidas",
    "category": ["Unisex", "Sports", "Apparel"],
    "product_images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-link-7",
    "price": {
      "regular": 70,
      "discounted": 55,
      "currency": "USD"
    },
    "available_sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "available_colors": ["Black", "Night Sky", "Adicolor Red"],
    "stock_status": "In Stock",
    "sku": "ADI-3SH-007",
    "shoe_type": "N/A",
    "material": {
      "upper": "70% Cotton, 30% Recycled Polyester",
      "sole": "N/A",
      "lining": "French Terry"
    },
    "weight": "450g",
    "heel_type": "N/A",
    "closure_type": "Pullover",
    "country_of_origin": "Pakistan",
    "care_instructions": "Machine wash cold inside out",
    "size_system": "US Standard",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": ["Buy hoodie and pants for 20% off"],
    "customer_ratings": 4.7,
    "customer_reviews": [
      { "user": "Jake D.", "text": "Very soft material and great for gym.", "date": "2023-11-20", "rating": 5 },
      { "user": "Megan L.", "text": "The classic stripes look amazing.", "date": "2023-12-05", "rating": 5 },
      { "user": "Chris H.", "text": "A bit short in the sleeves for tall people.", "date": "2024-01-08", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "$5.00",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 250,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "BAG-008",
    "product_name": "Herschel Supply Co. Little America Backpack",
    "brand_name": "Herschel",
    "category": ["Unisex", "Bags", "Travel"],
    "product_images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=Fm7K4n0uTQU",
    "price": {
      "regular": 120,
      "discounted": 102.50,
      "currency": "USD"
    },
    "available_sizes": ["25 Liters"],
    "available_colors": ["Black", "Grey", "Navy"],
    "stock_status": "In Stock",
    "sku": "HER-LA-008",
    "shoe_type": "N/A",
    "material": {
      "upper": "600D Polyester",
      "sole": "N/A",
      "lining": "Signature Striped Fabric"
    },
    "weight": "900g",
    "heel_type": "N/A",
    "closure_type": "Drawstring and Magnetic Straps",
    "country_of_origin": "China",
    "care_instructions": "Hand wash with mild soap",
    "size_system": "Standard",
    "fit_type": "Adjustable Straps",
    "model_fit_suggestion": "N/A",
    "bundle_offers": ["None"],
    "customer_ratings": 4.6,
    "customer_reviews": [
      { "user": "Ryan S.", "text": "The laptop sleeve is super padded and secure.", "date": "2023-08-28", "rating": 5 },
      { "user": "Anna F.", "text": "A bit heavy even when empty, but looks great.", "date": "2023-11-14", "rating": 4 },
      { "user": "Kyle T.", "text": "Perfect for weekend trips.", "date": "2023-12-30", "rating": 5 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "4-6 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "Limited Lifetime Warranty",
    "quantity_available": 90,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "CLO-009",
    "product_name": "Uniqlo Men's Supima Cotton T-Shirt",
    "brand_name": "Uniqlo",
    "category": ["Men", "Apparel", "Essentials"],
    "product_images": [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-link-9",
    "price": {
      "regular": 19.90,
      "discounted": 14.90,
      "currency": "USD"
    },
    "available_sizes": ["XS", "S", "M", "L", "XL", "XXL"],
    "available_colors": ["White", "Black", "Navy", "Olive"],
    "stock_status": "In Stock",
    "sku": "UNI-SUP-TS-09",
    "shoe_type": "N/A",
    "material": {
      "upper": "100% Supima Cotton",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "150g",
    "heel_type": "N/A",
    "closure_type": "N/A",
    "country_of_origin": "Vietnam",
    "care_instructions": "Machine wash cold, tumble dry low",
    "size_system": "US Standard",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": ["Buy 3 for $39.90"],
    "customer_ratings": 4.8,
    "customer_reviews": [
      { "user": "Paul B.", "text": "Nicest t-shirts for the price. Very soft.", "date": "2023-09-10", "rating": 5 },
      { "user": "Victor K.", "text": "Doesn't shrink much after washing.", "date": "2023-11-25", "rating": 5 },
      { "user": "Sam R.", "text": "Great basic for layering.", "date": "2024-01-02", "rating": 5 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "$7.00",
    "cod_available": false,
    "warranty": "N/A",
    "quantity_available": 1000,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "ACC-010",
    "product_name": "Apple Watch Series 9",
    "brand_name": "Apple",
    "category": ["Unisex", "Electronics", "Accessories"],
    "product_images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1434493907317-a46b5bc78344?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=LL7mI3n0-bI",
    "price": {
      "regular": 399,
      "discounted": 379,
      "currency": "USD"
    },
    "available_sizes": ["41mm", "45mm"],
    "available_colors": ["Midnight", "Starlight", "Product Red"],
    "stock_status": "In Stock",
    "sku": "APL-W9-010",
    "shoe_type": "N/A",
    "material": {
      "upper": "Aluminum/Stainless Steel",
      "sole": "N/A",
      "lining": "Fluoroelastomer Band"
    },
    "weight": "38g",
    "heel_type": "N/A",
    "closure_type": "Pin-and-tuck buckle",
    "country_of_origin": "China",
    "care_instructions": "Wipe with damp cloth",
    "size_system": "Millimeters",
    "fit_type": "Adjustable",
    "model_fit_suggestion": "Measure wrist for band size",
    "bundle_offers": ["3 months free Fitness+"],
    "customer_ratings": 4.9,
    "customer_reviews": [
      { "user": "Kevin G.", "text": "Siri is much faster on this model.", "date": "2023-12-15", "rating": 5 },
      { "user": "Monica S.", "text": "The double tap gesture is super useful.", "date": "2024-01-03", "rating": 5 },
      { "user": "Josh W.", "text": "Battery still needs daily charging though.", "date": "2024-01-07", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "2 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "1 Year Limited Apple Warranty",
    "quantity_available": 300,
    "is_best_seller": true,
    "is_new_arrival": true,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "CLO-011",
    "product_name": "Calvin Klein Men's Cotton Stretch Boxers (3-Pack)",
    "brand_name": "Calvin Klein",
    "category": ["Men", "Apparel", "Underwear"],
    "product_images": [
      "https://images.unsplash.com/photo-1590520603713-393f9f957597?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590520603713-393f9f957597?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-link-11",
    "price": {
      "regular": 45,
      "discounted": 38,
      "currency": "USD"
    },
    "available_sizes": ["S", "M", "L", "XL"],
    "available_colors": ["Multicolor Black/Grey", "White"],
    "stock_status": "In Stock",
    "sku": "CK-CSB-011",
    "shoe_type": "N/A",
    "material": {
      "upper": "95% Cotton, 5% Elastane",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "200g",
    "heel_type": "N/A",
    "closure_type": "Elastic Waistband",
    "country_of_origin": "India",
    "care_instructions": "Machine wash cold, tumble dry low",
    "size_system": "US Standard",
    "fit_type": "Body-defining fit",
    "model_fit_suggestion": "True to size",
    "bundle_offers": ["None"],
    "customer_ratings": 4.7,
    "customer_reviews": [
      { "user": "Leo M.", "text": "The classic CK comfort. Best boxers.", "date": "2023-10-10", "rating": 5 },
      { "user": "Omar Q.", "text": "Waistband doesn't roll down like cheaper brands.", "date": "2023-11-22", "rating": 5 },
      { "user": "Ben J.", "text": "Pricey but worth the investment.", "date": "2024-01-04", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "N/A",
    "quantity_available": 400,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "BAG-012",
    "product_name": "Coach Polished Pebble Leather Tote",
    "brand_name": "Coach",
    "category": ["Women", "Accessories", "Bags"],
    "product_images": [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-link-12",
    "price": {
      "regular": 350,
      "discounted": 295,
      "currency": "USD"
    },
    "available_sizes": ["One Size"],
    "available_colors": ["Black", "Chalk", "Saddle"],
    "stock_status": "In Stock",
    "sku": "COA-PPLT-012",
    "shoe_type": "N/A",
    "material": {
      "upper": "Polished Pebble Leather",
      "sole": "N/A",
      "lining": "Fabric"
    },
    "weight": "800g",
    "heel_type": "N/A",
    "closure_type": "Zip-top Closure",
    "country_of_origin": "Philippines",
    "care_instructions": "Use Coach leather cleaner and moisturizer",
    "size_system": "Standard",
    "fit_type": "Shoulder Bag",
    "model_fit_suggestion": "N/A",
    "bundle_offers": ["Free leather cleaning kit"],
    "customer_ratings": 4.8,
    "customer_reviews": [
      { "user": "Sophia L.", "text": "The leather is so soft and the bag is huge!", "date": "2023-09-12", "rating": 5 },
      { "user": "Isabella V.", "text": "Elegant enough for work and casual enough for weekends.", "date": "2023-11-05", "rating": 5 },
      { "user": "Rachel Z.", "text": "Straps could be a little longer.", "date": "2024-01-06", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "1 Year Limited Warranty",
    "quantity_available": 40,
    "is_best_seller": false,
    "is_new_arrival": true,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "CLO-013",
    "product_name": "Nike Sportswear Tech Fleece Joggers",
    "brand_name": "Nike",
    "category": ["Men", "Sports", "Apparel"],
    "product_images": [
      "https://images.unsplash.com/photo-1552664110-ad304297f581?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580906853203-f493cea9ff28?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-link-13",
    "price": {
      "regular": 110,
      "discounted": 95,
      "currency": "USD"
    },
    "available_sizes": ["S", "M", "L", "XL", "XXL"],
    "available_colors": ["Grey Heather", "Black", "Dark Marina Blue"],
    "stock_status": "In Stock",
    "sku": "NK-TFJ-013",
    "shoe_type": "N/A",
    "material": {
      "upper": "66% Cotton, 34% Polyester",
      "sole": "N/A",
      "lining": "Tech Fleece"
    },
    "weight": "400g",
    "heel_type": "N/A",
    "closure_type": "Elastic Drawstring",
    "country_of_origin": "Cambodia",
    "care_instructions": "Machine wash cold",
    "size_system": "US Standard",
    "fit_type": "Slim Tapered",
    "model_fit_suggestion": "Runs small, order one size up for a looser fit",
    "bundle_offers": ["None"],
    "customer_ratings": 4.6,
    "customer_reviews": [
      { "user": "Derrick W.", "text": "Best joggers on the market, very warm.", "date": "2023-11-18", "rating": 5 },
      { "user": "Julian S.", "text": "Zipper pocket is perfect for phones.", "date": "2023-12-02", "rating": 5 },
      { "user": "Mark B.", "text": "Too expensive for sweatpants, but quality is there.", "date": "2024-01-05", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 120,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "ACC-014",
    "product_name": "Timberland Men's Classic Leather Belt",
    "brand_name": "Timberland",
    "category": ["Men", "Accessories", "Belts"],
    "product_images": [
      "https://images.unsplash.com/photo-1614165939092-4467c9f8078c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1624222247344-550fb8055571?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-link-14",
    "price": {
      "regular": 25,
      "discounted": 22.50,
      "currency": "USD"
    },
    "available_sizes": ["32", "34", "36", "38", "40"],
    "available_colors": ["Wheat", "Brown", "Black"],
    "stock_status": "In Stock",
    "sku": "TIM-CLB-014",
    "shoe_type": "N/A",
    "material": {
      "upper": "100% Genuine Leather",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "180g",
    "heel_type": "N/A",
    "closure_type": "Single Prong Buckle",
    "country_of_origin": "India",
    "care_instructions": "Spot clean",
    "size_system": "US Inches",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": ["None"],
    "customer_ratings": 4.5,
    "customer_reviews": [
      { "user": "George P.", "text": "Solid belt that matches my Timbs perfectly.", "date": "2023-08-15", "rating": 5 },
      { "user": "Felix L.", "text": "Good quality leather for the price.", "date": "2023-10-20", "rating": 5 },
      { "user": "Brian K.", "text": "The buckle finish scratches easily.", "date": "2023-12-10", "rating": 3 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "$4.99",
    "cod_available": true,
    "warranty": "N/A",
    "quantity_available": 300,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "CLO-015",
    "product_name": "The North Face Women's Denali Jacket",
    "brand_name": "The North Face",
    "category": ["Women", "Outdoors", "Apparel"],
    "product_images": [
      "https://images.unsplash.com/photo-1634547466547-06368d44747c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=800&q=80"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-link-15",
    "price": {
      "regular": 180,
      "discounted": 180,
      "currency": "USD"
    },
    "available_sizes": ["XS", "S", "M", "L", "XL"],
    "available_colors": ["TNF Black", "Gardenia White", "Lavender Fog"],
    "stock_status": "In Stock",
    "sku": "TNF-WDN-015",
    "shoe_type": "N/A",
    "material": {
      "upper": "100% Recycled Polyester Fleece",
      "sole": "N/A",
      "lining": "Water-repellent overlay"
    },
    "weight": "500g",
    "heel_type": "N/A",
    "closure_type": "Full Zip",
    "country_of_origin": "El Salvador",
    "care_instructions": "Machine wash warm, tumble dry low",
    "size_system": "US Standard",
    "fit_type": "Relaxed",
    "model_fit_suggestion": "Roomy fit, great for layering",
    "bundle_offers": ["None"],
    "customer_ratings": 4.9,
    "customer_reviews": [
      { "user": "Emily R.", "text": "Extremely warm and the vintage look is cool.", "date": "2023-11-20", "rating": 5 },
      { "user": "Sarah M.", "text": "Love the reinforcement on the chest and shoulders.", "date": "2023-12-15", "rating": 5 },
      { "user": "Jessica D.", "text": "The sleeves are a bit long for me.", "date": "2024-01-02", "rating": 4 }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "Lifetime Warranty",
    "quantity_available": 110,
    "is_best_seller": true,
    "is_new_arrival": true,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "BOOT-DM-1460",
    "product_name": "Dr. Martens 1460 Smooth Leather Boots",
    "brand_name": "Dr. Martens",
    "category": [
      "Unisex",
      "Shoes",
      "Boots"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1541778480-fc17528afc11?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=Wy_f0GqWkX0",
    "price": {
      "regular": 170,
      "discounted": 170,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "Black",
      "Cherry Red"
    ],
    "stock_status": "In Stock",
    "sku": "DM-1460-BLK",
    "shoe_type": "Boot",
    "material": {
      "upper": "Smooth Leather",
      "sole": "PVC AirWair",
      "lining": "Leather/Textile"
    },
    "weight": "850g",
    "heel_type": "Block",
    "closure_type": "Lace-up",
    "country_of_origin": "Thailand",
    "care_instructions": "Clean with damp cloth, apply Wonder Balsam",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "Requires break-in period",
    "bundle_offers": [
      "Free yellow laces included"
    ],
    "customer_ratings": 4.6,
    "customer_reviews": [
      {
        "user": "Alice Cooper",
        "text": "Painful for the first week, but now they are the most comfortable shoes I own.",
        "date": "2023-09-10",
        "rating": 5
      },
      {
        "user": "Bob Marley",
        "text": "Classic style. Indestructible sole.",
        "date": "2023-11-05",
        "rating": 5
      },
      {
        "user": "Charlie P.",
        "text": "They run a bit large, I suggest sizing down.",
        "date": "2024-01-12",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year Warranty",
    "quantity_available": 100,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "UND-CK-3PK",
    "product_name": "Calvin Klein Cotton Stretch Boxer Briefs 3-Pack",
    "brand_name": "Calvin Klein",
    "category": [
      "Men",
      "Clothing",
      "Underwear"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1583425423320-2386622cd2e4?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-video-ck",
    "price": {
      "regular": 45,
      "discounted": 39.50,
      "currency": "USD"
    },
    "available_sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available_colors": [
      "Black/White/Grey",
      "All Black"
    ],
    "stock_status": "In Stock",
    "sku": "CK-BOX-3PK",
    "shoe_type": "N/A",
    "material": {
      "upper": "95% Cotton, 5% Elastane",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "200g",
    "heel_type": "N/A",
    "closure_type": "Elastic Waist",
    "country_of_origin": "India",
    "care_instructions": "Machine wash cold",
    "size_system": "US",
    "fit_type": "Tight",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.5,
    "customer_reviews": [
      {
        "user": "David B.",
        "text": "Waistband doesn't roll over. Very good.",
        "date": "2023-08-20",
        "rating": 5
      },
      {
        "user": "Sam K.",
        "text": "Cotton feels premium but legs ride up a little.",
        "date": "2023-10-15",
        "rating": 4
      },
      {
        "user": "John D.",
        "text": "Best basics you can buy.",
        "date": "2024-01-02",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "2-4 Business Days",
    "shipping_cost": "5.00",
    "cod_available": true,
    "warranty": "N/A",
    "quantity_available": 300,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "BAG-FJ-KANK",
    "product_name": "Fjallraven Kanken Classic Backpack",
    "brand_name": "Fjallraven",
    "category": [
      "Unisex",
      "Bags",
      "Backpacks"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1590422749847-759b6d644782?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=tT47VjVfM1Y",
    "price": {
      "regular": 90,
      "discounted": 80,
      "currency": "USD"
    },
    "available_sizes": [
      "16L"
    ],
    "available_colors": [
      "Ochre",
      "Frost Green",
      "Black"
    ],
    "stock_status": "In Stock",
    "sku": "FJL-KAN-OCH",
    "shoe_type": "N/A",
    "material": {
      "upper": "Vinylon F",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "300g",
    "heel_type": "N/A",
    "closure_type": "Zip",
    "country_of_origin": "Vietnam",
    "care_instructions": "Soft brush and lukewarm water",
    "size_system": "N/A",
    "fit_type": "Boxy",
    "model_fit_suggestion": "Small but spacious",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "Emma W.",
        "text": "Love the color! Fits my MacBook Air perfectly.",
        "date": "2023-12-01",
        "rating": 5
      },
      {
        "user": "Liam N.",
        "text": "Straps are thin, not great for heavy books.",
        "date": "2024-01-10",
        "rating": 4
      },
      {
        "user": "Olivia S.",
        "text": "Water resistant fabric actually works.",
        "date": "2024-02-15",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "Limited Lifetime Warranty",
    "quantity_available": 150,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "POLO-RL-SLIM",
    "product_name": "Ralph Lauren Custom Slim Fit Polo",
    "brand_name": "Ralph Lauren",
    "category": [
      "Men",
      "Clothing",
      "Tops"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1626427389140-59cb27404a11?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1598522338167-75949d06b53b?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-polo-rl",
    "price": {
      "regular": 110,
      "discounted": 110,
      "currency": "USD"
    },
    "available_sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available_colors": [
      "White",
      "Navy",
      "Red"
    ],
    "stock_status": "In Stock",
    "sku": "RL-POL-NAV",
    "shoe_type": "N/A",
    "material": {
      "upper": "Cotton Mesh",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "250g",
    "heel_type": "N/A",
    "closure_type": "Button",
    "country_of_origin": "China",
    "care_instructions": "Machine wash warm",
    "size_system": "US",
    "fit_type": "Slim",
    "model_fit_suggestion": "Size up for looser fit",
    "bundle_offers": [],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "George H.",
        "text": "Iconic. The fabric breathes really well in summer.",
        "date": "2023-07-20",
        "rating": 5
      },
      {
        "user": "Frank T.",
        "text": "Sleeves are a bit tight on the biceps.",
        "date": "2023-09-11",
        "rating": 4
      },
      {
        "user": "Bill K.",
        "text": "Color holds up after many washes.",
        "date": "2024-01-05",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "N/A",
    "quantity_available": 200,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": true
  },
  {
    "product_id": "BELT-FOS-JOE",
    "product_name": "Fossil Joe Belt",
    "brand_name": "Fossil",
    "category": [
      "Men",
      "Accessories",
      "Belts"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1553545985-1e0d8781d5db?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1616782299710-18e404b96788?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-belt-vid",
    "price": {
      "regular": 40,
      "discounted": 34,
      "currency": "USD"
    },
    "available_sizes": [
      "32",
      "34",
      "36",
      "38"
    ],
    "available_colors": [
      "Brown",
      "Black"
    ],
    "stock_status": "Low Stock",
    "sku": "FOS-JOE-BRN",
    "shoe_type": "N/A",
    "material": {
      "upper": "Genuine Leather",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "150g",
    "heel_type": "N/A",
    "closure_type": "Buckle",
    "country_of_origin": "India",
    "care_instructions": "Wipe clean",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "Order 2 inches larger than waist size",
    "bundle_offers": [],
    "customer_ratings": 4.4,
    "customer_reviews": [
      {
        "user": "Mark Y.",
        "text": "Solid everyday belt. Leather is thick.",
        "date": "2023-11-20",
        "rating": 5
      },
      {
        "user": "Luke P.",
        "text": "Buckle feels a bit cheap but looks good.",
        "date": "2023-12-15",
        "rating": 4
      },
      {
        "user": "Tony S.",
        "text": "Great vintage look.",
        "date": "2024-02-01",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "4.99",
    "cod_available": true,
    "warranty": "1 Year Warranty",
    "quantity_available": 20,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "WALT-RDG-ALU",
    "product_name": "The Ridge Wallet - Aluminum",
    "brand_name": "The Ridge",
    "category": [
      "Men",
      "Accessories",
      "Wallets"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1620706689714-c8c34c452c93?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1634710186985-5b486b02660b?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-ridge-vid",
    "price": {
      "regular": 95,
      "discounted": 85,
      "currency": "USD"
    },
    "available_sizes": [
      "One Size"
    ],
    "available_colors": [
      "Gunmetal",
      "Matte Black",
      "Navy"
    ],
    "stock_status": "In Stock",
    "sku": "RDG-ALU-BLK",
    "shoe_type": "N/A",
    "material": {
      "upper": "6061-T6 Aluminum",
      "sole": "N/A",
      "lining": "Elastic"
    },
    "weight": "56g",
    "heel_type": "N/A",
    "closure_type": "Elastic Strap",
    "country_of_origin": "China",
    "care_instructions": "Wipe with damp cloth",
    "size_system": "N/A",
    "fit_type": "Minimalist",
    "model_fit_suggestion": "Holds 1-12 cards",
    "bundle_offers": [
      "Includes cash strap and money clip"
    ],
    "customer_ratings": 4.6,
    "customer_reviews": [
      {
        "user": "TechGuy99",
        "text": "Changed my pocket game forever. So slim.",
        "date": "2023-09-30",
        "rating": 5
      },
      {
        "user": "OldSchool",
        "text": "Hard to get specific cards out quickly.",
        "date": "2023-11-12",
        "rating": 3
      },
      {
        "user": "Minimalist M.",
        "text": "Durable and blocks RFID. Love it.",
        "date": "2024-01-08",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "2-4 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "Lifetime Warranty",
    "quantity_available": 300,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-VANS-OS",
    "product_name": "Vans Old Skool",
    "brand_name": "Vans",
    "category": [
      "Unisex",
      "Shoes",
      "Sneakers"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1565158623547-020589a1c6a7?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-vans-vid",
    "price": {
      "regular": 70,
      "discounted": 65,
      "currency": "USD"
    },
    "available_sizes": [
      "US 6",
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11",
      "US 12"
    ],
    "available_colors": [
      "Black/White",
      "Navy",
      "Checkerboard"
    ],
    "stock_status": "In Stock",
    "sku": "VNS-OLD-BLK",
    "shoe_type": "Sneaker",
    "material": {
      "upper": "Suede/Canvas",
      "sole": "Waffle Rubber",
      "lining": "Textile"
    },
    "weight": "420g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Spot clean",
    "size_system": "US",
    "fit_type": "Standard",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "Skater Boi",
        "text": "Classic skate shoe. Board feel is amazing.",
        "date": "2023-08-15",
        "rating": 5
      },
      {
        "user": "Jenny L.",
        "text": "Super cute with dresses or jeans.",
        "date": "2023-10-02",
        "rating": 5
      },
      {
        "user": "Mike R.",
        "text": "Suede fades a bit fast if you wear them daily.",
        "date": "2023-12-20",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "5.99",
    "cod_available": true,
    "warranty": "N/A",
    "quantity_available": 500,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": true
  },
  {
    "product_id": "JKT-CG-EXP",
    "product_name": "Canada Goose Expedition Parka",
    "brand_name": "Canada Goose",
    "category": [
      "Men",
      "Clothing",
      "Outerwear"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1542841791-1925b02a2bbb?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-cg-vid",
    "price": {
      "regular": 1495,
      "discounted": 1495,
      "currency": "USD"
    },
    "available_sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available_colors": [
      "Black",
      "Red",
      "White"
    ],
    "stock_status": "In Stock",
    "sku": "CG-EXP-RED",
    "shoe_type": "N/A",
    "material": {
      "upper": "Arctic Tech",
      "sole": "N/A",
      "lining": "625 Fill Power Down"
    },
    "weight": "1500g",
    "heel_type": "N/A",
    "closure_type": "Zip and Velcro",
    "country_of_origin": "Canada",
    "care_instructions": "Dry clean only",
    "size_system": "US",
    "fit_type": "Oversized",
    "model_fit_suggestion": "Runs very large, size down",
    "bundle_offers": [],
    "customer_ratings": 4.9,
    "customer_reviews": [
      {
        "user": "Arctic Explorer",
        "text": "Kept me warm at -30C. Worth every penny.",
        "date": "2023-01-15",
        "rating": 5
      },
      {
        "user": "City Dweller",
        "text": "Too warm for regular city winter, honestly.",
        "date": "2023-11-20",
        "rating": 4
      },
      {
        "user": "Richie R.",
        "text": "The quality is undeniable.",
        "date": "2024-01-05",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "5-7 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "Lifetime Warranty",
    "quantity_available": 30,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "BAG-LC-PLI",
    "product_name": "Longchamp Le Pliage Original Tote L",
    "brand_name": "Longchamp",
    "category": [
      "Women",
      "Bags",
      "Totes"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1598532163257-99a37f0e136e?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-lc-vid",
    "price": {
      "regular": 145,
      "discounted": 145,
      "currency": "USD"
    },
    "available_sizes": [
      "Large"
    ],
    "available_colors": [
      "Black",
      "Navy",
      "Red"
    ],
    "stock_status": "In Stock",
    "sku": "LC-PLI-NAV",
    "shoe_type": "N/A",
    "material": {
      "upper": "Polyamide Canvas",
      "sole": "N/A",
      "lining": "Unlined"
    },
    "weight": "300g",
    "heel_type": "N/A",
    "closure_type": "Zip and Snap",
    "country_of_origin": "France",
    "care_instructions": "Wipe with damp cloth",
    "size_system": "N/A",
    "fit_type": "Spacious",
    "model_fit_suggestion": "Folds up small for travel",
    "bundle_offers": [],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "Traveler Jane",
        "text": "The best travel bag. Indestructible.",
        "date": "2023-09-12",
        "rating": 5
      },
      {
        "user": "Office Girl",
        "text": "Corners wear out after a few years, but I still buy it.",
        "date": "2023-11-08",
        "rating": 4
      },
      {
        "user": "Sophie M.",
        "text": "Fits everything perfectly.",
        "date": "2024-02-01",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "Manufacturer Defect Only",
    "quantity_available": 120,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": true
  },
  {
    "product_id": "JEAN-501",
    "product_name": "Levi's 501 Original Fit Jeans",
    "brand_name": "Levi's",
    "category": [
      "Men",
      "Clothing",
      "Denim"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=b2vUcsjNDks",
    "price": {
      "regular": 79.5,
      "discounted": 69.99,
      "currency": "USD"
    },
    "available_sizes": [
      "29W 30L",
      "30W 30L",
      "31W 32L",
      "32W 32L",
      "34W 32L"
    ],
    "available_colors": [
      "Indigo",
      "Black",
      "Light Wash"
    ],
    "stock_status": "In Stock",
    "sku": "LEV-501-IND",
    "shoe_type": "N/A",
    "material": {
      "upper": "Cotton Denim",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "600g",
    "heel_type": "N/A",
    "closure_type": "Button Fly",
    "country_of_origin": "Mexico",
    "care_instructions": "Wash cold, tumble dry medium",
    "size_system": "US",
    "fit_type": "Straight",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [
      "Buy 2 pairs for $120"
    ],
    "customer_ratings": 4.6,
    "customer_reviews": [
      {
        "user": "Michael T.",
        "text": "The classic fit is unbeatable. They break in perfectly after a few washes.",
        "date": "2023-09-12",
        "rating": 5
      },
      {
        "user": "David B.",
        "text": "Button fly takes some getting used to, but the denim quality is top notch.",
        "date": "2023-11-05",
        "rating": 4
      },
      {
        "user": "Chris A.",
        "text": "A bit stiff at first, but that's what you expect from real denim.",
        "date": "2024-01-20",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "Limited Warranty",
    "quantity_available": 300,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": true
  },
  {
    "product_id": "BAG-HLA-30",
    "product_name": "Herschel Little America Backpack",
    "brand_name": "Herschel Supply Co.",
    "category": [
      "Unisex",
      "Bags",
      "Travel"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1581605405669-fcdf8116543f?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=pBJWl5k6xfA",
    "price": {
      "regular": 120,
      "discounted": 100,
      "currency": "USD"
    },
    "available_sizes": [
      "One Size"
    ],
    "available_colors": [
      "Black",
      "Navy",
      "Grey"
    ],
    "stock_status": "In Stock",
    "sku": "HER-LA-30L",
    "shoe_type": "N/A",
    "material": {
      "upper": "Polyester",
      "sole": "N/A",
      "lining": "Signature Striped Fabric"
    },
    "weight": "900g",
    "heel_type": "N/A",
    "closure_type": "Magnetic Strap",
    "country_of_origin": "Vietnam",
    "care_instructions": "Spot clean only",
    "size_system": "N/A",
    "fit_type": "Regular",
    "model_fit_suggestion": "Fits 15-inch laptop",
    "bundle_offers": [
      "Free pencil case with purchase"
    ],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "Sarah L.",
        "text": "Perfect for college. The laptop sleeve is super plush and protective.",
        "date": "2023-08-15",
        "rating": 5
      },
      {
        "user": "James K.",
        "text": "Great style, but the magnetic snaps can be a bit finicky to align quickly.",
        "date": "2023-10-22",
        "rating": 4
      },
      {
        "user": "Emily R.",
        "text": "Very comfortable straps even when fully loaded.",
        "date": "2023-12-01",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "2-4 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "Limited Lifetime Warranty",
    "quantity_available": 120,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "BELT-GUC-GG",
    "product_name": "Gucci Double G Leather Belt",
    "brand_name": "Gucci",
    "category": [
      "Women",
      "Accessories",
      "Belts"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1624222247342-19e497f6d084?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=raGwbjxwEB4",
    "price": {
      "regular": 490,
      "discounted": 490,
      "currency": "USD"
    },
    "available_sizes": [
      "75cm",
      "80cm",
      "85cm",
      "90cm"
    ],
    "available_colors": [
      "Black",
      "Dusty Pink",
      "White"
    ],
    "stock_status": "In Stock",
    "sku": "GUC-GG-BLK",
    "shoe_type": "N/A",
    "material": {
      "upper": "Leather",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "300g",
    "heel_type": "N/A",
    "closure_type": "Buckle",
    "country_of_origin": "Italy",
    "care_instructions": "Professional leather clean",
    "size_system": "EU",
    "fit_type": "Regular",
    "model_fit_suggestion": "Order one size up for hip wear",
    "bundle_offers": [],
    "customer_ratings": 4.9,
    "customer_reviews": [
      {
        "user": "Jessica M.",
        "text": "Absolutely stunning. Elevates any outfit immediately.",
        "date": "2023-11-10",
        "rating": 5
      },
      {
        "user": "Ashley W.",
        "text": "The leather is high quality, but it scratches if you aren't careful.",
        "date": "2023-12-05",
        "rating": 4
      },
      {
        "user": "Sophia L.",
        "text": "Worth the investment. A timeless classic.",
        "date": "2024-01-12",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "5-7 Business Days",
    "shipping_cost": "25.00",
    "cod_available": false,
    "warranty": "2 Year Manufacturer Warranty",
    "quantity_available": 50,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "WALT-BEL-SLM",
    "product_name": "Bellroy Slim Sleeve Wallet",
    "brand_name": "Bellroy",
    "category": [
      "Men",
      "Accessories",
      "Wallets"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1627123424574-181ce5171af3?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1627123424683-b7964402636a?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=wzgCRtVjt8w",
    "price": {
      "regular": 79,
      "discounted": 69,
      "currency": "USD"
    },
    "available_sizes": [
      "One Size"
    ],
    "available_colors": [
      "Tan",
      "Black",
      "Cocoa"
    ],
    "stock_status": "In Stock",
    "sku": "BEL-SS-TAN",
    "shoe_type": "N/A",
    "material": {
      "upper": "Eco-tanned Leather",
      "sole": "N/A",
      "lining": "Polyester"
    },
    "weight": "50g",
    "heel_type": "N/A",
    "closure_type": "Bi-fold",
    "country_of_origin": "India",
    "care_instructions": "Wipe with damp cloth",
    "size_system": "N/A",
    "fit_type": "Slim",
    "model_fit_suggestion": "Holds 4-8 cards comfortably",
    "bundle_offers": [
      "10% off with key holder"
    ],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "Tom H.",
        "text": "Finally, a wallet that doesn't bulge in my pocket. The pull-tab is genius.",
        "date": "2023-09-20",
        "rating": 5
      },
      {
        "user": "Ryan G.",
        "text": "Leather feels premium. It holds less cash than I'd like, but great for cards.",
        "date": "2023-10-30",
        "rating": 4
      },
      {
        "user": "Kevin P.",
        "text": "Minimalist perfection. Aging beautifully after 6 months.",
        "date": "2024-01-02",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "5.00",
    "cod_available": true,
    "warranty": "3 Year Warranty",
    "quantity_available": 200,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "JKT-TNF-1996",
    "product_name": "The North Face 1996 Retro Nuptse Jacket",
    "brand_name": "The North Face",
    "category": [
      "Unisex",
      "Clothing",
      "Outerwear"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1517942481491-a589e4141680?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=WUWgeP2bUhE",
    "price": {
      "regular": 330,
      "discounted": 330,
      "currency": "USD"
    },
    "available_sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available_colors": [
      "Black",
      "Yellow",
      "Blue"
    ],
    "stock_status": "In Stock",
    "sku": "TNF-NUP-BLK",
    "shoe_type": "N/A",
    "material": {
      "upper": "Nylon Ripstop",
      "sole": "N/A",
      "lining": "Goose Down"
    },
    "weight": "720g",
    "heel_type": "N/A",
    "closure_type": "Zip",
    "country_of_origin": "Bangladesh",
    "care_instructions": "Machine wash warm, tumble dry low",
    "size_system": "US",
    "fit_type": "Boxy",
    "model_fit_suggestion": "Runs slightly large",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "Alex F.",
        "text": "Incredibly warm and packs down into its own pocket. Essential for winter.",
        "date": "2023-12-15",
        "rating": 5
      },
      {
        "user": "Brian K.",
        "text": "Classic look. It is a bit puffy for driving, but great for walking.",
        "date": "2024-01-08",
        "rating": 4
      },
      {
        "user": "Matt S.",
        "text": "The quality is unmatched. I've had mine for years.",
        "date": "2024-02-01",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "Lifetime Warranty",
    "quantity_available": 80,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SUN-RB-AV",
    "product_name": "Ray-Ban Aviator Classic",
    "brand_name": "Ray-Ban",
    "category": [
      "Unisex",
      "Accessories",
      "Sunglasses"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=MFq5MilKUDY",
    "price": {
      "regular": 163,
      "discounted": 145,
      "currency": "USD"
    },
    "available_sizes": [
      "Standard",
      "Large"
    ],
    "available_colors": [
      "Gold/Green",
      "Silver/Grey",
      "Black"
    ],
    "stock_status": "In Stock",
    "sku": "RB-3025-001",
    "shoe_type": "N/A",
    "material": {
      "upper": "Metal Frame",
      "sole": "N/A",
      "lining": "Glass Lens"
    },
    "weight": "30g",
    "heel_type": "N/A",
    "closure_type": "N/A",
    "country_of_origin": "Italy",
    "care_instructions": "Clean with microfiber cloth",
    "size_system": "N/A",
    "fit_type": "Regular",
    "model_fit_suggestion": "Standard fits most faces",
    "bundle_offers": [
      "Free care kit included"
    ],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "Daniel C.",
        "text": "Can't beat the original. They look good with everything.",
        "date": "2023-07-20",
        "rating": 5
      },
      {
        "user": "Mike R.",
        "text": "Glass lenses are heavy but very clear. Don't drop them!",
        "date": "2023-08-14",
        "rating": 4
      },
      {
        "user": "Steve J.",
        "text": "Timeless style. The gold frame is very durable.",
        "date": "2023-09-01",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "2-4 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "2 Year Warranty",
    "quantity_available": 100,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": true
  },
  {
    "product_id": "SHOE-UB-022",
    "product_name": "Adidas Ultraboost Light",
    "brand_name": "Adidas",
    "category": [
      "Men",
      "Sports",
      "Running"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aef4?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=shaGc6eGv80",
    "price": {
      "regular": 190,
      "discounted": 160,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "Cloud White",
      "Core Black",
      "Solar Red"
    ],
    "stock_status": "In Stock",
    "sku": "ADI-UB-LGT",
    "shoe_type": "Running",
    "material": {
      "upper": "Primeknit+ Textile",
      "sole": "Continental Rubber",
      "lining": "Textile"
    },
    "weight": "290g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "China",
    "care_instructions": "Hand wash, air dry",
    "size_system": "US",
    "fit_type": "Sock-like",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "Ben H.",
        "text": "Most comfortable shoes I own. The new light boost is noticeably lighter.",
        "date": "2023-10-05",
        "rating": 5
      },
      {
        "user": "Lucas P.",
        "text": "Great for running and walking, though the white gets dirty fast.",
        "date": "2023-11-12",
        "rating": 4
      },
      {
        "user": "Gary N.",
        "text": "Excellent energy return on long runs.",
        "date": "2024-01-10",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year Manufacturer Warranty",
    "quantity_available": 75,
    "is_best_seller": true,
    "is_new_arrival": true,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "BAG-MK-JET",
    "product_name": "Michael Kors Jet Set Tote",
    "brand_name": "Michael Kors",
    "category": [
      "Women",
      "Bags",
      "Totes"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=xA5-15C-UHk",
    "price": {
      "regular": 298,
      "discounted": 149,
      "currency": "USD"
    },
    "available_sizes": [
      "Large"
    ],
    "available_colors": [
      "Brown",
      "Vanilla",
      "Black"
    ],
    "stock_status": "In Stock",
    "sku": "MK-JET-BRN",
    "shoe_type": "N/A",
    "material": {
      "upper": "Saffiano Leather",
      "sole": "N/A",
      "lining": "Polyester"
    },
    "weight": "800g",
    "heel_type": "N/A",
    "closure_type": "Zip",
    "country_of_origin": "Cambodia",
    "care_instructions": "Wipe clean",
    "size_system": "N/A",
    "fit_type": "Spacious",
    "model_fit_suggestion": "Fits 13-inch laptop",
    "bundle_offers": [
      "50% off wallet with bag purchase"
    ],
    "customer_ratings": 4.6,
    "customer_reviews": [
      {
        "user": "Amanda S.",
        "text": "My go-to work bag. Durable and fits everything I need.",
        "date": "2023-09-02",
        "rating": 5
      },
      {
        "user": "Rachel D.",
        "text": "Beautiful bag but the straps are a little thin for heavy loads.",
        "date": "2023-10-18",
        "rating": 4
      },
      {
        "user": "Chloe M.",
        "text": "Love the zipper closure, keeps everything secure on the subway.",
        "date": "2023-11-25",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "1 Year Limited Warranty",
    "quantity_available": 200,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": true
  },
  {
    "product_id": "PANT-LULU-ALN",
    "product_name": "Lululemon Align High-Rise Pant 25\"",
    "brand_name": "Lululemon",
    "category": [
      "Women",
      "Clothing",
      "Activewear"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1506619216599-9d939743f0cb?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1552160793-cbafc83095c1?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=TWs0IMValMI",
    "price": {
      "regular": 98,
      "discounted": 98,
      "currency": "USD"
    },
    "available_sizes": [
      "2",
      "4",
      "6",
      "8",
      "10"
    ],
    "available_colors": [
      "Black",
      "True Navy",
      "Dark Olive"
    ],
    "stock_status": "In Stock",
    "sku": "LULU-ALN-BLK",
    "shoe_type": "N/A",
    "material": {
      "upper": "Nulu Fabric",
      "sole": "N/A",
      "lining": "N/A"
    },
    "weight": "200g",
    "heel_type": "N/A",
    "closure_type": "Pull-on",
    "country_of_origin": "Sri Lanka",
    "care_instructions": "Machine wash cold, tumble dry low",
    "size_system": "US",
    "fit_type": "Tight",
    "model_fit_suggestion": "True to size, buttery soft feel",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "Jenny W.",
        "text": "Literally feels like wearing nothing. So soft.",
        "date": "2023-08-30",
        "rating": 5
      },
      {
        "user": "Laura B.",
        "text": "Great for yoga but they pill if your thighs rub together.",
        "date": "2023-10-12",
        "rating": 4
      },
      {
        "user": "Sarah H.",
        "text": "Best leggings on the market. Worth every penny.",
        "date": "2024-01-05",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "Quality Promise",
    "quantity_available": 150,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-CON-70",
    "product_name": "Converse Chuck 70 Vintage Canvas",
    "brand_name": "Converse",
    "category": [
      "Unisex",
      "Shoes",
      "Sneakers"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1494496195158-c31b43097f93?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=cjCPiCJzQXs",
    "price": {
      "regular": 90,
      "discounted": 85,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10"
    ],
    "available_colors": [
      "Black",
      "Parchment",
      "Red"
    ],
    "stock_status": "In Stock",
    "sku": "CON-C70-PAR",
    "shoe_type": "Sneaker",
    "material": {
      "upper": "12oz Canvas",
      "sole": "Rubber",
      "lining": "Canvas"
    },
    "weight": "400g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Spot clean only",
    "size_system": "US",
    "fit_type": "Narrow",
    "model_fit_suggestion": "Runs large, order half size down",
    "bundle_offers": [],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "Evan M.",
        "text": "Way more comfortable than the regular All Stars. The insole is great.",
        "date": "2023-09-05",
        "rating": 5
      },
      {
        "user": "Kate P.",
        "text": "Love the vintage look and the glossy midsole.",
        "date": "2023-11-20",
        "rating": 5
      },
      {
        "user": "Jack D.",
        "text": "They run big, definitely size down.",
        "date": "2023-12-15",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "5.99",
    "cod_available": true,
    "warranty": "N/A",
    "quantity_available": 200,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": true
  },
  {
    "product_id": "CLTH-PAT-FLEE",
    "product_name": "Patagonia Better Sweater Fleece Jacket",
    "brand_name": "Patagonia",
    "category": [
      "Men",
      "Clothing",
      "Outerwear"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1504194569245-2f41b2b62947?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=gROvKfoVys8",
    "price": {
      "regular": 149,
      "discounted": 149,
      "currency": "USD"
    },
    "available_sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "available_colors": [
      "Stonewash",
      "Black",
      "Navy"
    ],
    "stock_status": "In Stock",
    "sku": "PAT-BS-STO",
    "shoe_type": "N/A",
    "material": {
      "upper": "Recycled Polyester Fleece",
      "sole": "N/A",
      "lining": "Polyester Jersey"
    },
    "weight": "638g",
    "heel_type": "N/A",
    "closure_type": "Zip",
    "country_of_origin": "Thailand",
    "care_instructions": "Machine wash warm, tumble dry low",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.9,
    "customer_reviews": [
      {
        "user": "Rob S.",
        "text": "The perfect mid-layer. Warm but breathable.",
        "date": "2023-10-10",
        "rating": 5
      },
      {
        "user": "Tim W.",
        "text": "Looks professional enough for the office but performs on the trail.",
        "date": "2023-12-05",
        "rating": 5
      },
      {
        "user": "Greg L.",
        "text": "Sleeves are a bit long, but otherwise a great fit.",
        "date": "2024-01-15",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "Ironclad Guarantee",
    "quantity_available": 60,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "BAG-COA-TAB",
    "product_name": "Coach Tabby Shoulder Bag 26",
    "brand_name": "Coach",
    "category": [
      "Women",
      "Bags",
      "Handbags"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1590739225287-bd2f20e6a0b9?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=OoqQZx0VF-g",
    "price": {
      "regular": 395,
      "discounted": 395,
      "currency": "USD"
    },
    "available_sizes": [
      "26cm"
    ],
    "available_colors": [
      "Black",
      "Chalk",
      "Red"
    ],
    "stock_status": "In Stock",
    "sku": "COA-TAB-26",
    "shoe_type": "N/A",
    "material": {
      "upper": "Polished Pebble Leather",
      "sole": "N/A",
      "lining": "Fabric"
    },
    "weight": "700g",
    "heel_type": "N/A",
    "closure_type": "Snap",
    "country_of_origin": "Vietnam",
    "care_instructions": "Use Coach leather cleaner",
    "size_system": "N/A",
    "fit_type": "Structured",
    "model_fit_suggestion": "Comes with two straps for versatility",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "Monica G.",
        "text": "The 'It' bag of the year. Looks so expensive.",
        "date": "2023-09-18",
        "rating": 5
      },
      {
        "user": "Lisa K.",
        "text": "Perfect size for essentials. The C buckle scratches easily though.",
        "date": "2023-11-02",
        "rating": 4
      },
      {
        "user": "Rachel F.",
        "text": "Love that I can wear it crossbody or as a shoulder bag.",
        "date": "2023-12-20",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "1 Year Warranty",
    "quantity_available": 40,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "CLTH-NKE-HD",
    "product_name": "Nike Sportswear Club Fleece Hoodie",
    "brand_name": "Nike",
    "category": [
      "Men",
      "Clothing",
      "Activewear"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1556906781-9a412961d28c?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=WUWgeP2bUhE",
    "price": {
      "regular": 60,
      "discounted": 45,
      "currency": "USD"
    },
    "available_sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available_colors": [
      "Grey Heather",
      "Black",
      "Navy"
    ],
    "stock_status": "In Stock",
    "sku": "NKE-CLB-GRY",
    "shoe_type": "N/A",
    "material": {
      "upper": "Cotton/Polyester Blend",
      "sole": "N/A",
      "lining": "Brushed Fleece"
    },
    "weight": "400g",
    "heel_type": "N/A",
    "closure_type": "Pullover",
    "country_of_origin": "Cambodia",
    "care_instructions": "Machine wash cold",
    "size_system": "US",
    "fit_type": "Standard",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [
      "2 for $80"
    ],
    "customer_ratings": 4.5,
    "customer_reviews": [
      {
        "user": "Jason D.",
        "text": "A classic staple. Soft and fits well.",
        "date": "2023-10-01",
        "rating": 5
      },
      {
        "user": "Mark S.",
        "text": "Shrinks a little bit after drying, maybe size up.",
        "date": "2023-11-15",
        "rating": 4
      },
      {
        "user": "Paul B.",
        "text": "Good value for the price. Very comfortable.",
        "date": "2024-01-10",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "5.99",
    "cod_available": true,
    "warranty": "N/A",
    "quantity_available": 500,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "WALT-TOM-LEA",
    "product_name": "Tommy Hilfiger Leather Ranger Wallet",
    "brand_name": "Tommy Hilfiger",
    "category": [
      "Men",
      "Accessories",
      "Wallets"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1620706689626-d34e405a8f4c?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=y8nHEGtxIIA",
    "price": {
      "regular": 45,
      "discounted": 29.99,
      "currency": "USD"
    },
    "available_sizes": [
      "One Size"
    ],
    "available_colors": [
      "Black",
      "Brown",
      "Tan"
    ],
    "stock_status": "In Stock",
    "sku": "TOM-RAN-BLK",
    "shoe_type": "N/A",
    "material": {
      "upper": "100% Cowhide Leather",
      "sole": "N/A",
      "lining": "Leather"
    },
    "weight": "80g",
    "heel_type": "N/A",
    "closure_type": "Bi-fold",
    "country_of_origin": "India",
    "care_instructions": "Wipe clean",
    "size_system": "N/A",
    "fit_type": "Standard",
    "model_fit_suggestion": "Fits all currencies",
    "bundle_offers": [],
    "customer_ratings": 4.4,
    "customer_reviews": [
      {
        "user": "Harry O.",
        "text": "Great quality leather for the price. Passcase is useful.",
        "date": "2023-08-05",
        "rating": 5
      },
      {
        "user": "Will T.",
        "text": "A bit thick when fully loaded, but durable.",
        "date": "2023-09-22",
        "rating": 4
      },
      {
        "user": "Sam R.",
        "text": "Classic gift for dad. He loves it.",
        "date": "2023-12-18",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "4.99",
    "cod_available": true,
    "warranty": "1 Year Warranty",
    "quantity_available": 250,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "CLTH-ZRA-BLZ",
    "product_name": "Zara Oversized Blazer",
    "brand_name": "Zara",
    "category": [
      "Women",
      "Clothing",
      "Jackets"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1548624149-f80e03504360?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=iSdBU5AlQio",
    "price": {
      "regular": 89.90,
      "discounted": 69.90,
      "currency": "USD"
    },
    "available_sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "available_colors": [
      "Black",
      "Camel",
      "Grey"
    ],
    "stock_status": "In Stock",
    "sku": "ZAR-OV-BLZ",
    "shoe_type": "N/A",
    "material": {
      "upper": "Polyester/Viscose",
      "sole": "N/A",
      "lining": "Acetate"
    },
    "weight": "500g",
    "heel_type": "N/A",
    "closure_type": "Button",
    "country_of_origin": "Spain",
    "care_instructions": "Dry clean only",
    "size_system": "EU",
    "fit_type": "Oversized",
    "model_fit_suggestion": "Intentionally large, stick to your size",
    "bundle_offers": [],
    "customer_ratings": 4.3,
    "customer_reviews": [
      {
        "user": "Olivia P.",
        "text": "Chic and affordable. Looks great with jeans.",
        "date": "2023-10-14",
        "rating": 5
      },
      {
        "user": "Emma S.",
        "text": "Fabric feels a bit synthetic, but the cut is perfect.",
        "date": "2023-11-28",
        "rating": 4
      },
      {
        "user": "Sophia K.",
        "text": "Shoulder pads are a bit much for me, but very trendy.",
        "date": "2024-01-20",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "5.95",
    "cod_available": false,
    "warranty": "N/A",
    "quantity_available": 90,
    "is_best_seller": true,
    "is_new_arrival": true,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-001",
    "product_name": "Nike Air Zoom Pegasus 39",
    "brand_name": "Nike",
    "category": [
      "Men",
      "Sports",
      "Running"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "https://www.youtube.com/watch?v=dummy-video-link",
    "price": {
      "regular": 130,
      "discounted": 110.5,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "Red",
      "Black",
      "White"
    ],
    "stock_status": "In Stock",
    "sku": "NK-AZP39-001",
    "shoe_type": "Running",
    "material": {
      "upper": "Engineered Mesh",
      "sole": "Rubber",
      "lining": "Textile"
    },
    "weight": "260g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Machine wash cold, air dry",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [
      "Buy 2 get 10% off"
    ],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "John D.",
        "text": "Best running shoes I've ever owned. Very bouncy.",
        "date": "2023-10-15",
        "rating": 5
      },
      {
        "user": "Mark S.",
        "text": "Great cushion for long distance runs.",
        "date": "2023-11-02",
        "rating": 5
      },
      {
        "user": "Priya P.",
        "text": "Good shoe, but the laces are a bit short.",
        "date": "2023-12-10",
        "rating": 4
      },
      {
        "user": "Carlos R.",
        "text": "Fits perfectly and looks stylish in red.",
        "date": "2024-01-05",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year Manufacturer Warranty",
    "quantity_available": 150,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-002",
    "product_name": "Adidas Ultraboost Light",
    "brand_name": "Adidas",
    "category": [
      "Women",
      "Sports",
      "Running"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1555274175-75f4056dfd05?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": "",
    "price": {
      "regular": 190,
      "discounted": 180,
      "currency": "USD"
    },
    "available_sizes": [
      "US 5",
      "US 6",
      "US 7",
      "US 8"
    ],
    "available_colors": [
      "Cloud White",
      "Core Black"
    ],
    "stock_status": "Low Stock",
    "sku": "AD-UB-002",
    "shoe_type": "Running",
    "material": {
      "upper": "Primeknit+ Textile",
      "sole": "Continental Rubber",
      "lining": "Synthetic"
    },
    "weight": "240g",
    "heel_type": "Cushioned",
    "closure_type": "Lace-up",
    "country_of_origin": "China",
    "care_instructions": "Wipe clean only",
    "size_system": "US",
    "fit_type": "Slim",
    "model_fit_suggestion": "Size up 0.5",
    "bundle_offers": [],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "Sarah L.",
        "text": "Incredibly light, but runs a bit tight.",
        "date": "2023-11-01",
        "rating": 4
      },
      {
        "user": "Jessica M.",
        "text": "Like walking on clouds! The boost technology is real.",
        "date": "2023-12-15",
        "rating": 5
      },
      {
        "user": "Anne K.",
        "text": "Expensive, but my knees thank me.",
        "date": "2024-01-20",
        "rating": 5
      },
      {
        "user": "Maria G.",
        "text": "Hard to keep the white ones clean.",
        "date": "2024-02-01",
        "rating": 4
      },
      {
        "user": "Liz B.",
        "text": "Perfect for gym and casual wear.",
        "date": "2024-02-14",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "2-4 Business Days",
    "shipping_cost": "Paid",
    "cod_available": false,
    "warranty": "6 Months",
    "quantity_available": 12,
    "is_best_seller": false,
    "is_new_arrival": true,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-003",
    "product_name": "Timberland Premium 6-Inch Boot",
    "brand_name": "Timberland",
    "category": [
      "Men",
      "Boot",
      "Leather",
      "Casual"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 198,
      "discounted": 198,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11",
      "US 12"
    ],
    "available_colors": [
      "Wheat",
      "Black"
    ],
    "stock_status": "In Stock",
    "sku": "TB-10061-003",
    "shoe_type": "Boot",
    "material": {
      "upper": "Nubuck Leather",
      "sole": "Rubber Lug",
      "lining": "PrimaLoft Insulation"
    },
    "weight": "800g",
    "heel_type": "Block Heel",
    "closure_type": "Lace-up",
    "country_of_origin": "Dominican Republic",
    "care_instructions": "Use leather cleaner",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "Size down 1 full size",
    "bundle_offers": [
      "Free cleaning kit"
    ],
    "customer_ratings": 4.9,
    "customer_reviews": [
      {
        "user": "Mike R.",
        "text": "Classic boots. They last forever.",
        "date": "2023-09-20",
        "rating": 5
      },
      {
        "user": "Tom H.",
        "text": "A bit heavy at first, but super durable.",
        "date": "2023-10-05",
        "rating": 4
      },
      {
        "user": "Chris Evans",
        "text": "Waterproof feature works great in snow.",
        "date": "2023-12-25",
        "rating": 5
      },
      {
        "user": "Leo D.",
        "text": "Iconic style. Needed to size down though.",
        "date": "2024-01-10",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "5-7 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 500,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-004",
    "product_name": "Vans Old Skool",
    "brand_name": "Vans",
    "category": [
      "Men",
      "Women",
      "Casual",
      "Sneaker"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 70,
      "discounted": 65,
      "currency": "USD"
    },
    "available_sizes": [
      "US 4",
      "US 5",
      "US 6",
      "US 7",
      "US 8",
      "US 9",
      "US 10"
    ],
    "available_colors": [
      "Black/White",
      "Checkerboard",
      "Navy"
    ],
    "stock_status": "In Stock",
    "sku": "VN-OS-004",
    "shoe_type": "Sneaker",
    "material": {
      "upper": "Canvas/Suede",
      "sole": "Waffle Rubber",
      "lining": "Canvas"
    },
    "weight": "400g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Hand wash only",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [
      "Buy 2 pairs for $120"
    ],
    "customer_ratings": 4.6,
    "customer_reviews": [
      {
        "user": "Alex T.",
        "text": "Great everyday shoe, goes with everything.",
        "date": "2023-12-01",
        "rating": 5
      },
      {
        "user": "SkaterBoy",
        "text": "Good board feel but the suede wears out fast if you skate hard.",
        "date": "2024-01-15",
        "rating": 4
      },
      {
        "user": "Jenny L.",
        "text": "Comfortable and classic.",
        "date": "2024-02-20",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 300,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "SHOE-005",
    "product_name": "Jimmy Choo Romy 85",
    "brand_name": "Jimmy Choo",
    "category": [
      "Women",
      "High Heels",
      "Formal",
      "Leather"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 750,
      "discounted": 750,
      "currency": "USD"
    },
    "available_sizes": [
      "EU 36",
      "EU 37",
      "EU 38",
      "EU 39"
    ],
    "available_colors": [
      "Black",
      "Nude",
      "Glitter"
    ],
    "stock_status": "Low Stock",
    "sku": "JC-R85-005",
    "shoe_type": "Pump",
    "material": {
      "upper": "Patent Leather",
      "sole": "Leather",
      "lining": "Leather"
    },
    "weight": "200g",
    "heel_type": "Stiletto",
    "closure_type": "Slip-on",
    "country_of_origin": "Italy",
    "care_instructions": "Professional cleaning only",
    "size_system": "EU",
    "fit_type": "Narrow",
    "model_fit_suggestion": "Size up for wide feet",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "Emily P.",
        "text": "Stunning shoes, perfect for weddings.",
        "date": "2023-08-14",
        "rating": 5
      },
      {
        "user": "Victoria B.",
        "text": "Surprisingly comfortable for the height.",
        "date": "2023-11-22",
        "rating": 5
      },
      {
        "user": "Chloe S.",
        "text": "Quality is unmatched.",
        "date": "2024-01-01",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "1-2 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "2 Years",
    "quantity_available": 15,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": true
  },
  {
    "product_id": "SHOE-006",
    "product_name": "Converse Chuck Taylor All Star",
    "brand_name": "Converse",
    "category": [
      "Men",
      "Women",
      "Casual",
      "High Neck",
      "Sneaker"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1494496195158-c31bda3800cb?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 65,
      "discounted": 60,
      "currency": "USD"
    },
    "available_sizes": [
      "US 4",
      "US 5",
      "US 6",
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "White",
      "Black",
      "Red"
    ],
    "stock_status": "In Stock",
    "sku": "CV-CTAS-006",
    "shoe_type": "Sneaker",
    "material": {
      "upper": "Canvas",
      "sole": "Rubber",
      "lining": "Canvas"
    },
    "weight": "350g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "India",
    "care_instructions": "Machine wash cold",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "Runs large, size down 0.5",
    "bundle_offers": [
      "Student Discount"
    ],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "Danny Z.",
        "text": "The only shoes I wear. Timeless.",
        "date": "2023-06-15",
        "rating": 5
      },
      {
        "user": "Karen F.",
        "text": "A bit narrow for my feet.",
        "date": "2023-07-20",
        "rating": 4
      },
      {
        "user": "Steve M.",
        "text": "Love the high top look with jeans.",
        "date": "2023-09-10",
        "rating": 5
      },
      {
        "user": "Rachel G.",
        "text": "Great price for a classic shoe.",
        "date": "2023-11-05",
        "rating": 5
      }
    ],
    "verified_purchase": false,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 1000,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "SHOE-007",
    "product_name": "Clarks Desert Boot",
    "brand_name": "Clarks",
    "category": [
      "Men",
      "Boot",
      "Formal",
      "Leather"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1614252369475-531f39165f78?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 150,
      "discounted": 120,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10"
    ],
    "available_colors": [
      "Beeswax",
      "Sand Suede"
    ],
    "stock_status": "In Stock",
    "sku": "CL-DB-007",
    "shoe_type": "Chukka Boot",
    "material": {
      "upper": "Suede/Leather",
      "sole": "Crepe",
      "lining": "Leather"
    },
    "weight": "450g",
    "heel_type": "Low Block",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Use suede brush",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.5,
    "customer_reviews": [
      {
        "user": "David K.",
        "text": "Very comfortable once broken in.",
        "date": "2023-11-20",
        "rating": 4
      },
      {
        "user": "Arthur P.",
        "text": "The crepe sole gets dirty fast but looks cool.",
        "date": "2023-12-05",
        "rating": 4
      },
      {
        "user": "Simon L.",
        "text": "Perfect for smart casual office wear.",
        "date": "2024-01-15",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "4-6 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "6 Months",
    "quantity_available": 60,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-008",
    "product_name": "Crocs Classic Clog",
    "brand_name": "Crocs",
    "category": [
      "Men",
      "Women",
      "Kids",
      "Sandal",
      "Casual"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 50,
      "discounted": 45,
      "currency": "USD"
    },
    "available_sizes": [
      "US 4",
      "US 5",
      "US 6",
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11",
      "US 12"
    ],
    "available_colors": [
      "Black",
      "White",
      "Pink",
      "Green",
      "Blue"
    ],
    "stock_status": "In Stock",
    "sku": "CR-CC-008",
    "shoe_type": "Clog",
    "material": {
      "upper": "Croslite",
      "sole": "Croslite",
      "lining": "Unlined"
    },
    "weight": "150g",
    "heel_type": "Flat",
    "closure_type": "Slip-on (Strap)",
    "country_of_origin": "China",
    "care_instructions": "Wash with soap and water",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "Size down if half size",
    "bundle_offers": [
      "Buy 3 Jibbitz for $10"
    ],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "MomOf3",
        "text": "Kids love them, indestructible.",
        "date": "2023-07-05",
        "rating": 5
      },
      {
        "user": "ChefBoy",
        "text": "Great for standing in the kitchen all day.",
        "date": "2023-08-12",
        "rating": 5
      },
      {
        "user": "TrendyTeen",
        "text": "Love customizing them with charms.",
        "date": "2023-09-01",
        "rating": 5
      },
      {
        "user": "DadBod",
        "text": "Ugly but comfy.",
        "date": "2023-10-30",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "2-3 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "90 Days",
    "quantity_available": 800,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-009",
    "product_name": "Salomon Speedcross 5",
    "brand_name": "Salomon",
    "category": [
      "Men",
      "Sports",
      "Hiking",
      "Running"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 140,
      "discounted": 140,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "Black/Black",
      "Grape/Red"
    ],
    "stock_status": "Low Stock",
    "sku": "SL-SC5-009",
    "shoe_type": "Trail Running",
    "material": {
      "upper": "Anti-debris Mesh",
      "sole": "Contagrip TA",
      "lining": "Textile"
    },
    "weight": "320g",
    "heel_type": "Flat",
    "closure_type": "Quicklace",
    "country_of_origin": "Vietnam",
    "care_instructions": "Rinse with water",
    "size_system": "US",
    "fit_type": "Slim",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.9,
    "customer_reviews": [
      {
        "user": "HikerJoe",
        "text": "Grip is insane on mud.",
        "date": "2023-05-20",
        "rating": 5
      },
      {
        "user": "TrailRunner99",
        "text": "Quicklace system is a game changer.",
        "date": "2023-06-15",
        "rating": 5
      },
      {
        "user": "MountainMan",
        "text": "Fits narrow, but breaks in nicely.",
        "date": "2023-08-02",
        "rating": 4
      }
    ],
    "verified_purchase": false,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "2 Years",
    "quantity_available": 25,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-010",
    "product_name": "Dr. Martens 1460",
    "brand_name": "Dr. Martens",
    "category": [
      "Men",
      "Women",
      "Boot",
      "Leather",
      "Casual",
      "High Neck"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 170,
      "discounted": 150,
      "currency": "USD"
    },
    "available_sizes": [
      "US 5",
      "US 6",
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "Black Smooth",
      "Cherry Red"
    ],
    "stock_status": "In Stock",
    "sku": "DM-1460-010",
    "shoe_type": "Combat Boot",
    "material": {
      "upper": "Leather",
      "sole": "AirWair Rubber",
      "lining": "Leather/Textile"
    },
    "weight": "700g",
    "heel_type": "Block Heel",
    "closure_type": "Lace-up",
    "country_of_origin": "Thailand",
    "care_instructions": "Apply Wonder Balsam",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "Runs large, size down",
    "bundle_offers": [],
    "customer_ratings": 4.6,
    "customer_reviews": [
      {
        "user": "PunkRocker",
        "text": "Painful to break in, but worth it.",
        "date": "2023-05-12",
        "rating": 5
      },
      {
        "user": "GrungeGirl",
        "text": "My go-to boots for concerts.",
        "date": "2023-09-22",
        "rating": 5
      },
      {
        "user": "Bob T.",
        "text": "Quality is good but heavy.",
        "date": "2023-11-30",
        "rating": 4
      },
      {
        "user": "Alice W.",
        "text": "Love the yellow stitching details.",
        "date": "2024-01-05",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "4-6 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 120,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "SHOE-011",
    "product_name": "Birkenstock Arizona",
    "brand_name": "Birkenstock",
    "category": [
      "Men",
      "Women",
      "Sandal",
      "Casual"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1630595539567-5c20253457a4?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 110,
      "discounted": 110,
      "currency": "USD"
    },
    "available_sizes": [
      "EU 39",
      "EU 40",
      "EU 41",
      "EU 42"
    ],
    "available_colors": [
      "Mocha",
      "Black",
      "Stone"
    ],
    "stock_status": "In Stock",
    "sku": "BK-AZ-011",
    "shoe_type": "Sandal",
    "material": {
      "upper": "Birko-Flor/Suede",
      "sole": "EVA",
      "lining": "Cork"
    },
    "weight": "250g",
    "heel_type": "Flat",
    "closure_type": "Buckle",
    "country_of_origin": "Germany",
    "care_instructions": "Avoid extreme heat",
    "size_system": "EU",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "HippyChic",
        "text": "Molds to your feet perfectly after a week.",
        "date": "2023-06-01",
        "rating": 5
      },
      {
        "user": "ComfortKing",
        "text": "Great arch support.",
        "date": "2023-07-15",
        "rating": 5
      },
      {
        "user": "BeachBum",
        "text": "Don't get the cork wet!",
        "date": "2023-08-20",
        "rating": 4
      }
    ],
    "verified_purchase": false,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": false,
    "warranty": "1 Year",
    "quantity_available": 200,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "SHOE-012",
    "product_name": "Asics Gel-Kayano 29",
    "brand_name": "Asics",
    "category": [
      "Men",
      "Sports",
      "Running"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 160,
      "discounted": 130,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "Blue/Orange",
      "Black/Silver"
    ],
    "stock_status": "Out of Stock",
    "sku": "AS-GK29-012",
    "shoe_type": "Running",
    "material": {
      "upper": "Mesh",
      "sole": "Rubber",
      "lining": "Textile"
    },
    "weight": "300g",
    "heel_type": "Cushioned",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Machine wash cold",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "MarathonMan",
        "text": "Stability is unmatched for overpronators.",
        "date": "2023-04-12",
        "rating": 5
      },
      {
        "user": "Jogger101",
        "text": "A bit heavy but solid.",
        "date": "2023-05-30",
        "rating": 4
      },
      {
        "user": "GymRat",
        "text": "Good for treadmill too.",
        "date": "2023-09-14",
        "rating": 5
      }
    ],
    "verified_purchase": false,
    "estimated_delivery_time": "5-7 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 0,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-013",
    "product_name": "Hunter Original Tall Rain Boot",
    "brand_name": "Hunter",
    "category": [
      "Women",
      "Rain Boot",
      "High Neck",
      "Boot"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1604168612704-edf7120be425?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 160,
      "discounted": 145,
      "currency": "USD"
    },
    "available_sizes": [
      "US 5",
      "US 6",
      "US 7",
      "US 8",
      "US 9"
    ],
    "available_colors": [
      "Hunter Green",
      "Black",
      "Red"
    ],
    "stock_status": "In Stock",
    "sku": "HN-OT-013",
    "shoe_type": "Wellington",
    "material": {
      "upper": "Vulcanized Rubber",
      "sole": "Rubber",
      "lining": "Polyester"
    },
    "weight": "900g",
    "heel_type": "Low Block",
    "closure_type": "Slip-on",
    "country_of_origin": "UK",
    "care_instructions": "Use Hunter Buffer",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.4,
    "customer_reviews": [
      {
        "user": "RainyDay",
        "text": "Keeps feet dry but calf area is tight.",
        "date": "2023-04-10",
        "rating": 4
      },
      {
        "user": "PuddleJumper",
        "text": "Stylish enough to wear in the city.",
        "date": "2023-10-11",
        "rating": 5
      },
      {
        "user": "GardenerSue",
        "text": "Heavy, but durable.",
        "date": "2023-11-25",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "2 Years",
    "quantity_available": 60,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "SHOE-014",
    "product_name": "New Balance 574 Core",
    "brand_name": "New Balance",
    "category": [
      "Men",
      "Casual",
      "Sneaker",
      "Sports"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1623998021450-85c29c644e0d?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 85,
      "discounted": 85,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11",
      "US 12"
    ],
    "available_colors": [
      "Grey",
      "Navy",
      "Black"
    ],
    "stock_status": "In Stock",
    "sku": "NB-574-014",
    "shoe_type": "Sneaker",
    "material": {
      "upper": "Suede/Mesh",
      "sole": "Rubber",
      "lining": "Textile"
    },
    "weight": "310g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "Indonesia",
    "care_instructions": "Spot clean only",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "DadShoeFan",
        "text": "The ultimate dad shoe. Love it.",
        "date": "2023-01-15",
        "rating": 5
      },
      {
        "user": "ComfortSeeker",
        "text": "Good width for wide feet.",
        "date": "2023-03-22",
        "rating": 5
      },
      {
        "user": "RetroStyle",
        "text": "Classic grey matches everything.",
        "date": "2023-06-18",
        "rating": 5
      }
    ],
    "verified_purchase": false,
    "estimated_delivery_time": "2-4 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 350,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-015",
    "product_name": "Gucci Ace Sneaker",
    "brand_name": "Gucci",
    "category": [
      "Men",
      "Women",
      "Casual",
      "Leather",
      "Sneaker"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1617906642672-4638a224a9d7?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 790,
      "discounted": 790,
      "currency": "USD"
    },
    "available_sizes": [
      "EU 38",
      "EU 39",
      "EU 40",
      "EU 41",
      "EU 42"
    ],
    "available_colors": [
      "White/Green/Red"
    ],
    "stock_status": "Low Stock",
    "sku": "GC-ACE-015",
    "shoe_type": "Luxury Sneaker",
    "material": {
      "upper": "Leather",
      "sole": "Rubber",
      "lining": "Leather"
    },
    "weight": "400g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "Italy",
    "care_instructions": "Professional clean",
    "size_system": "EU",
    "fit_type": "Regular",
    "model_fit_suggestion": "Size down 1 size",
    "bundle_offers": [],
    "customer_ratings": 4.9,
    "customer_reviews": [
      {
        "user": "LuxuryLover",
        "text": "Beautiful craftsmanship.",
        "date": "2023-09-09",
        "rating": 5
      },
      {
        "user": "RichieR",
        "text": "Leather is buttery soft.",
        "date": "2023-12-25",
        "rating": 5
      },
      {
        "user": "HypeBeast",
        "text": "A subtle flex.",
        "date": "2024-02-01",
        "rating": 5
      }
    ],
    "verified_purchase": false,
    "estimated_delivery_time": "1-3 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "2 Years",
    "quantity_available": 8,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": true
  },
  {
    "product_id": "SHOE-016",
    "product_name": "Skechers Go Walk Joy",
    "brand_name": "Skechers",
    "category": [
      "Women",
      "Walking",
      "Casual",
      "Slip-on"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 60,
      "discounted": 45,
      "currency": "USD"
    },
    "available_sizes": [
      "US 6",
      "US 7",
      "US 8",
      "US 9"
    ],
    "available_colors": [
      "Black",
      "Taupe"
    ],
    "stock_status": "In Stock",
    "sku": "SK-GWJ-016",
    "shoe_type": "Walking Shoe",
    "material": {
      "upper": "Mesh",
      "sole": "Synthetic",
      "lining": "Fabric"
    },
    "weight": "180g",
    "heel_type": "Flat",
    "closure_type": "Slip-on",
    "country_of_origin": "China",
    "care_instructions": "Machine washable",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.6,
    "customer_reviews": [
      {
        "user": "NurseMary",
        "text": "Best for 12 hour shifts.",
        "date": "2023-10-02",
        "rating": 5
      },
      {
        "user": "WalkerLady",
        "text": "Easy to slip on and off.",
        "date": "2023-11-15",
        "rating": 5
      },
      {
        "user": "SeniorCit",
        "text": "Very stable and lightweight.",
        "date": "2024-01-10",
        "rating": 4
      },
      {
        "user": "Traveler",
        "text": "Great for airport security.",
        "date": "2024-02-05",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "3 Months",
    "quantity_available": 200,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-017",
    "product_name": "Caterpillar Second Shift Steel Toe",
    "brand_name": "Caterpillar",
    "category": [
      "Men",
      "Safety Shoe",
      "Boot",
      "Leather",
      "High Neck"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1579626343362-5204277732bd?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 115,
      "discounted": 105,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11",
      "US 12",
      "US 13"
    ],
    "available_colors": [
      "Honey",
      "Dark Brown"
    ],
    "stock_status": "In Stock",
    "sku": "CAT-SS-017",
    "shoe_type": "Work Boot",
    "material": {
      "upper": "Full Grain Leather",
      "sole": "Rubber",
      "lining": "Nylon Mesh"
    },
    "weight": "1100g",
    "heel_type": "Block Heel",
    "closure_type": "Lace-up",
    "country_of_origin": "Bangladesh",
    "care_instructions": "Oil leather regularly",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "ConstructionCarl",
        "text": "Saved my toes from a dropping brick.",
        "date": "2023-05-01",
        "rating": 5
      },
      {
        "user": "ForemanFred",
        "text": "Solid build, heavy though.",
        "date": "2023-08-20",
        "rating": 4
      },
      {
        "user": "DIYDave",
        "text": "Great value for safety boots.",
        "date": "2023-12-12",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "5-7 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "6 Months",
    "quantity_available": 100,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-018",
    "product_name": "Christian Louboutin So Kate",
    "brand_name": "Christian Louboutin",
    "category": [
      "Women",
      "High Heels",
      "Formal",
      "Leather"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1588117260148-447885091843?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 795,
      "discounted": 795,
      "currency": "USD"
    },
    "available_sizes": [
      "EU 37",
      "EU 38",
      "EU 39"
    ],
    "available_colors": [
      "Black",
      "Red",
      "Nude"
    ],
    "stock_status": "In Stock",
    "sku": "CL-SK-018",
    "shoe_type": "Stiletto",
    "material": {
      "upper": "Patent Leather",
      "sole": "Leather (Red)",
      "lining": "Leather"
    },
    "weight": "190g",
    "heel_type": "High Heel (120mm)",
    "closure_type": "Slip-on",
    "country_of_origin": "Italy",
    "care_instructions": "Protect red sole",
    "size_system": "EU",
    "fit_type": "Narrow",
    "model_fit_suggestion": "Size up 0.5 to 1 size",
    "bundle_offers": [],
    "customer_ratings": 4.3,
    "customer_reviews": [
      {
        "user": "Fashionista",
        "text": "Iconic look, but very uncomfortable for long wear.",
        "date": "2023-02-14",
        "rating": 4
      },
      {
        "user": "GlamGirl",
        "text": "The red sole is everything.",
        "date": "2023-06-25",
        "rating": 5
      },
      {
        "user": "BossLady",
        "text": "Power shoes for the boardroom.",
        "date": "2023-11-18",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "2-3 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "1 Year",
    "quantity_available": 10,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-019",
    "product_name": "Under Armour Curry Flow 9",
    "brand_name": "Under Armour",
    "category": [
      "Men",
      "Sports",
      "Sneaker"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1579338559194-a162d841790d?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 160,
      "discounted": 140,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11",
      "US 12"
    ],
    "available_colors": [
      "Blue/Yellow",
      "Black/White"
    ],
    "stock_status": "In Stock",
    "sku": "UA-CF9-019",
    "shoe_type": "Basketball",
    "material": {
      "upper": "UA Warp",
      "sole": "UA Flow",
      "lining": "Textile"
    },
    "weight": "340g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "China",
    "care_instructions": "Air dry",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "Baller23",
        "text": "Traction is unbelievable on court.",
        "date": "2023-07-30",
        "rating": 5
      },
      {
        "user": "HoopsFan",
        "text": "Very light, feels fast.",
        "date": "2023-09-12",
        "rating": 5
      },
      {
        "user": "CoachK",
        "text": "Durability is okay, mainly for indoor use.",
        "date": "2024-01-20",
        "rating": 4
      }
    ],
    "verified_purchase": false,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 75,
    "is_best_seller": false,
    "is_new_arrival": true,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "SHOE-020",
    "product_name": "Reebok Club C 85",
    "brand_name": "Reebok",
    "category": [
      "Women",
      "Casual",
      "Sneaker",
      "Leather"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 75,
      "discounted": 65,
      "currency": "USD"
    },
    "available_sizes": [
      "US 6",
      "US 7",
      "US 8",
      "US 9"
    ],
    "available_colors": [
      "White",
      "Vintage Cream"
    ],
    "stock_status": "In Stock",
    "sku": "RB-CC85-020",
    "shoe_type": "Sneaker",
    "material": {
      "upper": "Soft Leather",
      "sole": "Rubber",
      "lining": "Terry Cloth"
    },
    "weight": "330g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Wipe clean",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "VintageVibes",
        "text": "The perfect retro sneaker.",
        "date": "2023-05-05",
        "rating": 5
      },
      {
        "user": "CasualWear",
        "text": "Super comfy straight out of the box.",
        "date": "2023-08-18",
        "rating": 5
      },
      {
        "user": "SneakerGal",
        "text": "Leather creases a bit easily.",
        "date": "2023-11-20",
        "rating": 4
      }
    ],
    "verified_purchase": false,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 200,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-021",
    "product_name": "Keen Newport H2",
    "brand_name": "Keen",
    "category": [
      "Men",
      "Sandal",
      "Sports",
      "Hiking"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 110,
      "discounted": 95,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "Navy",
      "Black",
      "Brown"
    ],
    "stock_status": "In Stock",
    "sku": "KN-NH2-021",
    "shoe_type": "Water Sandal",
    "material": {
      "upper": "Polyester Webbing",
      "sole": "Rubber",
      "lining": "Hydrophobic Mesh"
    },
    "weight": "400g",
    "heel_type": "Flat",
    "closure_type": "Bungee Lace",
    "country_of_origin": "China",
    "care_instructions": "Machine wash cold",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "Size up 0.5",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "RiverRat",
        "text": "Essential for kayaking trips.",
        "date": "2023-06-10",
        "rating": 5
      },
      {
        "user": "CamperDan",
        "text": "Toe protection is the best feature.",
        "date": "2023-07-22",
        "rating": 5
      },
      {
        "user": "OutdoorGuy",
        "text": "Dries reasonably fast.",
        "date": "2023-09-05",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "4-6 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 90,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-022",
    "product_name": "Steve Madden Carrson",
    "brand_name": "Steve Madden",
    "category": [
      "Women",
      "High Heels",
      "Sandal",
      "Formal"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 99,
      "discounted": 69,
      "currency": "USD"
    },
    "available_sizes": [
      "US 6",
      "US 7",
      "US 8",
      "US 9"
    ],
    "available_colors": [
      "Black Suede",
      "Tan"
    ],
    "stock_status": "In Stock",
    "sku": "SM-CAR-022",
    "shoe_type": "Block Heel Sandal",
    "material": {
      "upper": "Suede",
      "sole": "Man-made",
      "lining": "Synthetic"
    },
    "weight": "250g",
    "heel_type": "Block Heel (4 inch)",
    "closure_type": "Buckle",
    "country_of_origin": "China",
    "care_instructions": "Avoid water",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.5,
    "customer_reviews": [
      {
        "user": "PartyGirl",
        "text": "Block heel makes them easy to walk in.",
        "date": "2023-05-15",
        "rating": 5
      },
      {
        "user": "Bridesmaid22",
        "text": "Wore them all night dancing.",
        "date": "2023-06-30",
        "rating": 4
      },
      {
        "user": "ShoeLover",
        "text": "Strap across toes is a little tight.",
        "date": "2023-08-10",
        "rating": 4
      }
    ],
    "verified_purchase": false,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 140,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "SHOE-023",
    "product_name": "Nike Air Force 1 '07",
    "brand_name": "Nike",
    "category": [
      "Men",
      "Women",
      "Casual",
      "Sneaker",
      "Leather"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1614031679232-2a76f235555f?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 110,
      "discounted": 110,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11",
      "US 12",
      "US 13"
    ],
    "available_colors": [
      "White",
      "Black"
    ],
    "stock_status": "Low Stock",
    "sku": "NK-AF1-023",
    "shoe_type": "Sneaker",
    "material": {
      "upper": "Leather",
      "sole": "Rubber",
      "lining": "Textile"
    },
    "weight": "450g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Wipe clean",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "Size down 0.5",
    "bundle_offers": [],
    "customer_ratings": 4.9,
    "customer_reviews": [
      {
        "user": "SneakerHead",
        "text": "The classic. Can't go wrong.",
        "date": "2023-11-10",
        "rating": 5
      },
      {
        "user": "WhiteTee",
        "text": "Crisp white look is unbeatable.",
        "date": "2023-12-05",
        "rating": 5
      },
      {
        "user": "DailyWear",
        "text": "Chunky but comfy.",
        "date": "2024-01-12",
        "rating": 5
      },
      {
        "user": "Jason K.",
        "text": "Creases quickly on the toe box.",
        "date": "2024-02-08",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 40,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-024",
    "product_name": "UGG Classic Short II",
    "brand_name": "UGG",
    "category": [
      "Women",
      "Boot",
      "Winter",
      "Casual"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1618585675438-e4b2d398679b?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1546367332-90e66c747975?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 170,
      "discounted": 150,
      "currency": "USD"
    },
    "available_sizes": [
      "US 5",
      "US 6",
      "US 7",
      "US 8",
      "US 9"
    ],
    "available_colors": [
      "Chestnut",
      "Black",
      "Grey"
    ],
    "stock_status": "In Stock",
    "sku": "UG-CS2-024",
    "shoe_type": "Winter Boot",
    "material": {
      "upper": "Twinface Sheepskin",
      "sole": "Treadlite by UGG",
      "lining": "Sheepskin"
    },
    "weight": "350g",
    "heel_type": "Flat",
    "closure_type": "Pull-on",
    "country_of_origin": "China",
    "care_instructions": "Dry clean only",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [
      "Free care kit"
    ],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "CozyFeet",
        "text": "So warm for winter.",
        "date": "2023-11-01",
        "rating": 5
      },
      {
        "user": "WinterLover",
        "text": "Stain easily, buy the spray.",
        "date": "2023-12-10",
        "rating": 4
      },
      {
        "user": "BasicB",
        "text": "Classic comfort.",
        "date": "2024-01-05",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "4-6 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 300,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "SHOE-025",
    "product_name": "Balenciaga Triple S",
    "brand_name": "Balenciaga",
    "category": [
      "Men",
      "Casual",
      "Sneaker"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1597401309836-3914979d300e?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1533681018184-68bd1d883b97?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 1100,
      "discounted": 1100,
      "currency": "USD"
    },
    "available_sizes": [
      "EU 40",
      "EU 41",
      "EU 42",
      "EU 43"
    ],
    "available_colors": [
      "Grey/White",
      "Black"
    ],
    "stock_status": "Low Stock",
    "sku": "BL-TS-025",
    "shoe_type": "Chunky Sneaker",
    "material": {
      "upper": "Mesh/Nubuck",
      "sole": "Rubber",
      "lining": "Textile"
    },
    "weight": "850g",
    "heel_type": "Platform",
    "closure_type": "Lace-up",
    "country_of_origin": "China",
    "care_instructions": "Wipe with soft cloth",
    "size_system": "EU",
    "fit_type": "Wide",
    "model_fit_suggestion": "Size down 1 size",
    "bundle_offers": [],
    "customer_ratings": 4.5,
    "customer_reviews": [
      {
        "user": "HighFashion",
        "text": "Huge and heavy, but a statement piece.",
        "date": "2023-09-15",
        "rating": 5
      },
      {
        "user": "TrendSetter",
        "text": "Love the distressed look.",
        "date": "2023-10-20",
        "rating": 5
      },
      {
        "user": "MoneyBags",
        "text": "Overpriced but quality is good.",
        "date": "2023-11-05",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "1-2 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "2 Years",
    "quantity_available": 5,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-026",
    "product_name": "Brooks Ghost 15",
    "brand_name": "Brooks",
    "category": [
      "Women",
      "Sports",
      "Running"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 140,
      "discounted": 140,
      "currency": "USD"
    },
    "available_sizes": [
      "US 6",
      "US 7",
      "US 8",
      "US 9"
    ],
    "available_colors": [
      "Black/Pink",
      "Grey/Blue"
    ],
    "stock_status": "In Stock",
    "sku": "BR-G15-026",
    "shoe_type": "Running",
    "material": {
      "upper": "Engineered Air Mesh",
      "sole": "Rubber",
      "lining": "Fabric"
    },
    "weight": "250g",
    "heel_type": "Cushioned",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Machine wash cold",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "RunnerGirl88",
        "text": "My 5th pair of Ghosts. Consistent.",
        "date": "2023-08-10",
        "rating": 5
      },
      {
        "user": "NewbieRunner",
        "text": "Great support for a beginner.",
        "date": "2023-09-01",
        "rating": 5
      },
      {
        "user": "DistanceRunner",
        "text": "Toe box could be slightly wider.",
        "date": "2023-10-15",
        "rating": 4
      }
    ],
    "verified_purchase": false,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "90 Days",
    "quantity_available": 100,
    "is_best_seller": true,
    "is_new_arrival": true,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-027",
    "product_name": "Havaianas Top Sandal",
    "brand_name": "Havaianas",
    "category": [
      "Men",
      "Women",
      "Sandal",
      "Casual"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1545231027-637d2f6210f8?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 18,
      "discounted": 15,
      "currency": "USD"
    },
    "available_sizes": [
      "BR 37/38",
      "BR 39/40",
      "BR 41/42"
    ],
    "available_colors": [
      "Black",
      "Blue",
      "White"
    ],
    "stock_status": "In Stock",
    "sku": "HV-TOP-027",
    "shoe_type": "Flip Flop",
    "material": {
      "upper": "Rubber",
      "sole": "Rubber",
      "lining": "Unlined"
    },
    "weight": "100g",
    "heel_type": "Flat",
    "closure_type": "Slip-on",
    "country_of_origin": "Brazil",
    "care_instructions": "Wash with water",
    "size_system": "BR",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [
      "Buy 3 for $40"
    ],
    "customer_ratings": 4.5,
    "customer_reviews": [
      {
        "user": "BeachLover",
        "text": "A summer staple.",
        "date": "2023-06-01",
        "rating": 5
      },
      {
        "user": "Poolside",
        "text": "Strap broke after a year, but cheap enough to replace.",
        "date": "2023-07-20",
        "rating": 4
      },
      {
        "user": "SunSeeker",
        "text": "Comfier than cheap knockoffs.",
        "date": "2023-08-15",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 1000,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-028",
    "product_name": "Allen Edmonds Park Avenue",
    "brand_name": "Allen Edmonds",
    "category": [
      "Men",
      "Formal",
      "Leather"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 395,
      "discounted": 395,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11",
      "US 12"
    ],
    "available_colors": [
      "Black",
      "Walnut"
    ],
    "stock_status": "In Stock",
    "sku": "AE-PA-028",
    "shoe_type": "Oxford",
    "material": {
      "upper": "Calfskin Leather",
      "sole": "Leather",
      "lining": "Leather"
    },
    "weight": "450g",
    "heel_type": "Block Heel",
    "closure_type": "Lace-up",
    "country_of_origin": "USA",
    "care_instructions": "Polish regularly",
    "size_system": "US",
    "fit_type": "Narrow",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.9,
    "customer_reviews": [
      {
        "user": "BusinessPro",
        "text": "The definitive interview shoe.",
        "date": "2023-05-10",
        "rating": 5
      },
      {
        "user": "GroomToBe",
        "text": "Looked amazing for my wedding.",
        "date": "2023-09-02",
        "rating": 5
      },
      {
        "user": "LawyerLife",
        "text": "Takes a while to break in but lasts decades.",
        "date": "2023-11-15",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "5-7 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "Lifetime Recrafting Avail",
    "quantity_available": 50,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": true
  },
  {
    "product_id": "SHOE-029",
    "product_name": "Puma Suede Classic",
    "brand_name": "Puma",
    "category": [
      "Men",
      "Women",
      "Casual",
      "Sneaker"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1570464197285-994981467403?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 70,
      "discounted": 55,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10"
    ],
    "available_colors": [
      "Red/White",
      "Black/White"
    ],
    "stock_status": "In Stock",
    "sku": "PM-SC-029",
    "shoe_type": "Sneaker",
    "material": {
      "upper": "Suede",
      "sole": "Rubber",
      "lining": "Synthetic"
    },
    "weight": "380g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "Indonesia",
    "care_instructions": "Suede cleaner",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.6,
    "customer_reviews": [
      {
        "user": "OldSchool",
        "text": "Bboy classic. Love the fat laces.",
        "date": "2023-04-20",
        "rating": 5
      },
      {
        "user": "CasualFri",
        "text": "Suede fades a bit if you wash them.",
        "date": "2023-07-15",
        "rating": 4
      },
      {
        "user": "SneakerHead2",
        "text": "Very comfortable padding.",
        "date": "2023-10-01",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 180,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-030",
    "product_name": "Teva Original Universal",
    "brand_name": "Teva",
    "category": [
      "Women",
      "Men",
      "Sandal",
      "Casual"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 55,
      "discounted": 55,
      "currency": "USD"
    },
    "available_sizes": [
      "US 6",
      "US 7",
      "US 8",
      "US 9"
    ],
    "available_colors": [
      "Geometric",
      "Black"
    ],
    "stock_status": "In Stock",
    "sku": "TV-OU-030",
    "shoe_type": "Sandal",
    "material": {
      "upper": "Polyester Webbing",
      "sole": "Rubber",
      "lining": "Unlined"
    },
    "weight": "200g",
    "heel_type": "Flat",
    "closure_type": "Velcro",
    "country_of_origin": "China",
    "care_instructions": "Machine wash cold",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "FestivalGoer",
        "text": "Wore these all weekend at Coachella.",
        "date": "2023-04-25",
        "rating": 5
      },
      {
        "user": "HikerGal",
        "text": "Good for light trails and water.",
        "date": "2023-06-12",
        "rating": 5
      },
      {
        "user": "ComfortFirst",
        "text": "Velcro straps make fitting easy.",
        "date": "2023-08-30",
        "rating": 4
      }
    ],
    "verified_purchase": false,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 250,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-031",
    "product_name": "Cole Haan Zerogrand Wingtip",
    "brand_name": "Cole Haan",
    "category": [
      "Men",
      "Formal",
      "Casual",
      "Leather"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1620891549027-9426c9536f66?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1534653299134-96a171b61581?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 180,
      "discounted": 120,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "British Tan",
      "Black"
    ],
    "stock_status": "In Stock",
    "sku": "CH-ZG-031",
    "shoe_type": "Oxford Sneaker",
    "material": {
      "upper": "Leather/Knit",
      "sole": "Rubber",
      "lining": "Textile"
    },
    "weight": "280g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Wipe clean",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.6,
    "customer_reviews": [
      {
        "user": "TechWorker",
        "text": "Looks like a dress shoe, feels like a sneaker.",
        "date": "2023-03-15",
        "rating": 5
      },
      {
        "user": "Commuter",
        "text": "Great for walking to the station.",
        "date": "2023-05-20",
        "rating": 5
      },
      {
        "user": "StyleGuy",
        "text": "Sole wears out a bit fast.",
        "date": "2023-09-10",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 110,
    "is_best_seller": false,
    "is_new_arrival": true,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-032",
    "product_name": "Nike Jordan 1 Mid",
    "brand_name": "Nike",
    "category": [
      "Men",
      "Casual",
      "Sneaker",
      "Sports",
      "High Neck"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1615125997645-8f6424df6c5b?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 125,
      "discounted": 125,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11",
      "US 12"
    ],
    "available_colors": [
      "Chicago",
      "Bred",
      "Royal"
    ],
    "stock_status": "Out of Stock",
    "sku": "NK-J1M-032",
    "shoe_type": "Sneaker",
    "material": {
      "upper": "Leather",
      "sole": "Rubber",
      "lining": "Textile"
    },
    "weight": "420g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "China",
    "care_instructions": "Wipe clean",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "Jumpman23",
        "text": "The colorway is fire.",
        "date": "2023-01-20",
        "rating": 5
      },
      {
        "user": "Collector",
        "text": "Mid isn't as good as High, but still nice.",
        "date": "2023-03-15",
        "rating": 4
      },
      {
        "user": "HypeBeast99",
        "text": "Leather quality is decent for the price.",
        "date": "2023-06-10",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "5-7 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 0,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-033",
    "product_name": "Fila Disruptor II",
    "brand_name": "Fila",
    "category": [
      "Women",
      "Casual",
      "Sneaker"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1550399564-968560341793?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 65,
      "discounted": 50,
      "currency": "USD"
    },
    "available_sizes": [
      "US 5",
      "US 6",
      "US 7",
      "US 8"
    ],
    "available_colors": [
      "White",
      "Pink"
    ],
    "stock_status": "In Stock",
    "sku": "FL-D2-033",
    "shoe_type": "Chunky Sneaker",
    "material": {
      "upper": "Synthetic Leather",
      "sole": "Rubber",
      "lining": "Textile"
    },
    "weight": "400g",
    "heel_type": "Platform",
    "closure_type": "Lace-up",
    "country_of_origin": "China",
    "care_instructions": "Wipe clean",
    "size_system": "US",
    "fit_type": "Slim",
    "model_fit_suggestion": "Size up 0.5",
    "bundle_offers": [],
    "customer_ratings": 4.2,
    "customer_reviews": [
      {
        "user": "RetroGirl",
        "text": "The 90s vibes are perfect.",
        "date": "2023-04-10",
        "rating": 5
      },
      {
        "user": "TinyFeet",
        "text": "Run very small, definitely size up.",
        "date": "2023-05-22",
        "rating": 3
      },
      {
        "user": "WhiteShoes",
        "text": "Hard to keep clean but cute.",
        "date": "2023-08-01",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "3 Months",
    "quantity_available": 80,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-034",
    "product_name": "Adidas Stan Smith",
    "brand_name": "Adidas",
    "category": [
      "Men",
      "Women",
      "Casual",
      "Sneaker",
      "Leather"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1536964549204-cce9eab227bd?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 100,
      "discounted": 85,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "White/Green",
      "White/Navy"
    ],
    "stock_status": "In Stock",
    "sku": "AD-SS-034",
    "shoe_type": "Tennis Sneaker",
    "material": {
      "upper": "Synthetic (Recycled)",
      "sole": "Rubber",
      "lining": "Synthetic"
    },
    "weight": "350g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "India",
    "care_instructions": "Machine wash cold",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "CleanCut",
        "text": "Minimalist design is perfect.",
        "date": "2023-02-28",
        "rating": 5
      },
      {
        "user": "EcoFriendly",
        "text": "Glad they are using recycled materials now.",
        "date": "2023-06-15",
        "rating": 5
      },
      {
        "user": "OldTimer",
        "text": "Not real leather anymore, but still good.",
        "date": "2023-09-10",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "6 Months",
    "quantity_available": 150,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-035",
    "product_name": "Red Wing Iron Ranger",
    "brand_name": "Red Wing",
    "category": [
      "Men",
      "Boot",
      "Leather",
      "Casual",
      "High Neck"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1612019924231-18e470876d7f?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1627856426738-94dfd230303e?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 350,
      "discounted": 350,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "Amber Harness",
      "Black Harness"
    ],
    "stock_status": "Low Stock",
    "sku": "RW-IR-035",
    "shoe_type": "Heritage Boot",
    "material": {
      "upper": "Full Grain Leather",
      "sole": "Vibram 430 Mini-lug",
      "lining": "Leather"
    },
    "weight": "850g",
    "heel_type": "Block Heel",
    "closure_type": "Lace-up",
    "country_of_origin": "USA",
    "care_instructions": "Oil leather annually",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "Size down 0.5 to 1 size",
    "bundle_offers": [
      "Free socks"
    ],
    "customer_ratings": 4.9,
    "customer_reviews": [
      {
        "user": "BootGuy",
        "text": "The break-in period is brutal, but now they fit like a glove.",
        "date": "2023-01-10",
        "rating": 5
      },
      {
        "user": "HeritageFan",
        "text": "Made in USA quality is evident.",
        "date": "2023-04-22",
        "rating": 5
      },
      {
        "user": "WorkWear",
        "text": "Expensive but an investment for life.",
        "date": "2023-11-05",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "5-7 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "Recraftable",
    "quantity_available": 20,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": true
  },
  {
    "product_id": "SHOE-036",
    "product_name": "Hoka Clifton 9",
    "brand_name": "Hoka",
    "category": [
      "Men",
      "Running",
      "Sports"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1590558133529-67d1d2932230?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1581698227367-175204487b99?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 145,
      "discounted": 145,
      "currency": "USD"
    },
    "available_sizes": [
      "US 9",
      "US 10",
      "US 11",
      "US 12"
    ],
    "available_colors": [
      "Orange",
      "Blue"
    ],
    "stock_status": "In Stock",
    "sku": "HK-C9-036",
    "shoe_type": "Running",
    "material": {
      "upper": "Knit",
      "sole": "EVA Foam",
      "lining": "Textile"
    },
    "weight": "250g",
    "heel_type": "Max Cushion",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Air dry only",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "UltraRunner",
        "text": "Max cushion is amazing for recovery runs.",
        "date": "2023-05-15",
        "rating": 5
      },
      {
        "user": "BadKnees",
        "text": "Helps my joint pain significantly.",
        "date": "2023-07-20",
        "rating": 5
      },
      {
        "user": "Speedster",
        "text": "A bit bulky looking but light.",
        "date": "2023-09-10",
        "rating": 4
      }
    ],
    "verified_purchase": false,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 100,
    "is_best_seller": true,
    "is_new_arrival": true,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "SHOE-037",
    "product_name": "Yeezy Boost 350 V2",
    "brand_name": "Adidas",
    "category": [
      "Men",
      "Casual",
      "Sneaker"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1598460613867-a06803738914?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1582298538104-fe2e74c2ed54?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 230,
      "discounted": 230,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "Zebra",
      "Onyx"
    ],
    "stock_status": "Out of Stock",
    "sku": "AD-YZ-037",
    "shoe_type": "Sneaker",
    "material": {
      "upper": "Primeknit",
      "sole": "Boost",
      "lining": "Synthetic"
    },
    "weight": "300g",
    "heel_type": "Cushioned",
    "closure_type": "Lace-up",
    "country_of_origin": "China",
    "care_instructions": "Hand wash",
    "size_system": "US",
    "fit_type": "Slim",
    "model_fit_suggestion": "Size up 0.5",
    "bundle_offers": [],
    "customer_ratings": 4.6,
    "customer_reviews": [
      {
        "user": "HypeBeast",
        "text": "Comfort level is 10/10.",
        "date": "2023-02-10",
        "rating": 5
      },
      {
        "user": "ResellerKing",
        "text": "Hard to get, but iconic.",
        "date": "2023-04-05",
        "rating": 5
      },
      {
        "user": "WideFoot",
        "text": "Definitely size up, they run tight.",
        "date": "2023-08-12",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "5-10 Business Days",
    "shipping_cost": "Paid",
    "cod_available": false,
    "warranty": "None",
    "quantity_available": 0,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-038",
    "product_name": "Toms Alpargata",
    "brand_name": "Toms",
    "category": [
      "Women",
      "Casual",
      "Slip-on"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1506824967341-d1f86801878d?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1520023668370-1372b6b28329?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 50,
      "discounted": 40,
      "currency": "USD"
    },
    "available_sizes": [
      "US 5",
      "US 6",
      "US 7",
      "US 8"
    ],
    "available_colors": [
      "Red Canvas",
      "Black Canvas"
    ],
    "stock_status": "In Stock",
    "sku": "TM-AL-038",
    "shoe_type": "Slip-on",
    "material": {
      "upper": "Canvas",
      "sole": "Rubber/Fiber",
      "lining": "Cotton"
    },
    "weight": "150g",
    "heel_type": "Flat",
    "closure_type": "Slip-on",
    "country_of_origin": "China",
    "care_instructions": "Machine wash cold",
    "size_system": "US",
    "fit_type": "Slim",
    "model_fit_suggestion": "True to size, stretches",
    "bundle_offers": [],
    "customer_ratings": 4.5,
    "customer_reviews": [
      {
        "user": "CharitySupporter",
        "text": "Love the one-for-one mission.",
        "date": "2023-05-20",
        "rating": 5
      },
      {
        "user": "SummerStyle",
        "text": "Breathable and light.",
        "date": "2023-07-15",
        "rating": 5
      },
      {
        "user": "DailyWalker",
        "text": "Soles wear out pretty fast.",
        "date": "2023-09-10",
        "rating": 3
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 160,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-039",
    "product_name": "Onitsuka Tiger Mexico 66",
    "brand_name": "Onitsuka Tiger",
    "category": [
      "Men",
      "Women",
      "Casual",
      "Sneaker"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1592965451991-c9779df3dfd0?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1565538420870-da58794db555?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 100,
      "discounted": 90,
      "currency": "USD"
    },
    "available_sizes": [
      "US 6",
      "US 7",
      "US 8",
      "US 9",
      "US 10"
    ],
    "available_colors": [
      "Yellow/Black",
      "White/Blue"
    ],
    "stock_status": "In Stock",
    "sku": "OT-M66-039",
    "shoe_type": "Sneaker",
    "material": {
      "upper": "Leather",
      "sole": "Rubber",
      "lining": "Textile"
    },
    "weight": "280g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "Indonesia",
    "care_instructions": "Wipe clean",
    "size_system": "US",
    "fit_type": "Slim",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "KillBillFan",
        "text": "Had to get the yellow ones!",
        "date": "2023-01-25",
        "rating": 5
      },
      {
        "user": "RetroRunner",
        "text": "Very thin sole, you can feel the ground.",
        "date": "2023-04-10",
        "rating": 4
      },
      {
        "user": "StyleIcon",
        "text": "Timeless silhouette.",
        "date": "2023-08-05",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 90,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "SHOE-040",
    "product_name": "Merrell Moab 3",
    "brand_name": "Merrell",
    "category": [
      "Men",
      "Hiking",
      "Sports",
      "Boot"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1533031022906-8d197626707a?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1596704017389-13ccdf97368d?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 120,
      "discounted": 110,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11",
      "US 12"
    ],
    "available_colors": [
      "Walnut",
      "Granite"
    ],
    "stock_status": "In Stock",
    "sku": "MR-M3-040",
    "shoe_type": "Hiking Shoe",
    "material": {
      "upper": "Pig Suede/Mesh",
      "sole": "Vibram TC5+",
      "lining": "Mesh"
    },
    "weight": "400g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Brush dirt off",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "HikerDad",
        "text": "Comfortable right out of the box.",
        "date": "2023-05-30",
        "rating": 5
      },
      {
        "user": "TrailWalker",
        "text": "Vibram sole has great grip.",
        "date": "2023-07-15",
        "rating": 5
      },
      {
        "user": "OutdoorLife",
        "text": "A bit warm for summer hiking.",
        "date": "2023-09-02",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 100,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-041",
    "product_name": "Saucony Jazz Original",
    "brand_name": "Saucony",
    "category": [
      "Men",
      "Women",
      "Casual",
      "Sneaker"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1620023640245-c4193582496a?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 80,
      "discounted": 60,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10"
    ],
    "available_colors": [
      "Navy/Silver",
      "Grey"
    ],
    "stock_status": "In Stock",
    "sku": "SC-JO-041",
    "shoe_type": "Sneaker",
    "material": {
      "upper": "Nylon/Suede",
      "sole": "Rubber",
      "lining": "Textile"
    },
    "weight": "300g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Spot clean",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.5,
    "customer_reviews": [
      {
        "user": "RetroFan",
        "text": "Great value for a comfy sneaker.",
        "date": "2023-06-10",
        "rating": 5
      },
      {
        "user": "CasualWalker",
        "text": "Includes two sets of laces!",
        "date": "2023-08-20",
        "rating": 5
      },
      {
        "user": "ShoeReviewer",
        "text": "Good cushioning but runs a bit short.",
        "date": "2023-11-05",
        "rating": 4
      }
    ],
    "verified_purchase": false,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 85,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-042",
    "product_name": "Stuart Weitzman 5050",
    "brand_name": "Stuart Weitzman",
    "category": [
      "Women",
      "Boot",
      "High Neck",
      "Leather",
      "Formal"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1620038936081-427909c27771?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1620038936166-733c7a070c79?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 750,
      "discounted": 700,
      "currency": "USD"
    },
    "available_sizes": [
      "US 6",
      "US 7",
      "US 8",
      "US 9"
    ],
    "available_colors": [
      "Black Nappa"
    ],
    "stock_status": "Low Stock",
    "sku": "SW-5050-042",
    "shoe_type": "Over-the-knee Boot",
    "material": {
      "upper": "Leather/Microstretch",
      "sole": "Rubber",
      "lining": "Leather"
    },
    "weight": "450g",
    "heel_type": "Flat",
    "closure_type": "Pull-on",
    "country_of_origin": "Spain",
    "care_instructions": "Professional leather clean",
    "size_system": "US",
    "fit_type": "Slim",
    "model_fit_suggestion": "Size down 0.5",
    "bundle_offers": [],
    "customer_ratings": 4.9,
    "customer_reviews": [
      {
        "user": "BootLover",
        "text": "Fits my calves perfectly thanks to the stretch back.",
        "date": "2023-10-01",
        "rating": 5
      },
      {
        "user": "LuxeLife",
        "text": "Worth every penny.",
        "date": "2023-11-15",
        "rating": 5
      },
      {
        "user": "WinterChic",
        "text": "Warm and stylish.",
        "date": "2024-01-20",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "2-4 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "1 Year",
    "quantity_available": 12,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-043",
    "product_name": "Nike Dunk Low",
    "brand_name": "Nike",
    "category": [
      "Men",
      "Casual",
      "Sneaker"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1610427320078-2d8805cd7383?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 110,
      "discounted": 110,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "Panda",
      "Grey"
    ],
    "stock_status": "Out of Stock",
    "sku": "NK-DL-043",
    "shoe_type": "Sneaker",
    "material": {
      "upper": "Leather",
      "sole": "Rubber",
      "lining": "Textile"
    },
    "weight": "400g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Wipe clean",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "DunkHead",
        "text": "Finally got a pair on retail!",
        "date": "2023-03-25",
        "rating": 5
      },
      {
        "user": "StreetWear",
        "text": "Quality is okay, but the style is unmatched.",
        "date": "2023-06-10",
        "rating": 4
      },
      {
        "user": "PandaLover",
        "text": "Goes with literally everything.",
        "date": "2023-09-05",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "5-7 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 0,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-044",
    "product_name": "Birkenstock Boston",
    "brand_name": "Birkenstock",
    "category": [
      "Men",
      "Women",
      "Casual",
      "Slip-on",
      "Sandal"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1630595539567-5c20253457a4?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1548658166-136d9f6a7cf1?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 150,
      "discounted": 150,
      "currency": "USD"
    },
    "available_sizes": [
      "EU 38",
      "EU 39",
      "EU 40",
      "EU 41",
      "EU 42"
    ],
    "available_colors": [
      "Taupe",
      "Mink"
    ],
    "stock_status": "Low Stock",
    "sku": "BK-BS-044",
    "shoe_type": "Clog",
    "material": {
      "upper": "Suede",
      "sole": "EVA",
      "lining": "Suede"
    },
    "weight": "300g",
    "heel_type": "Flat",
    "closure_type": "Slip-on (Buckle)",
    "country_of_origin": "Germany",
    "care_instructions": "Use suede brush",
    "size_system": "EU",
    "fit_type": "Wide",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "CozyVibes",
        "text": "Wear them with socks everywhere.",
        "date": "2023-10-15",
        "rating": 5
      },
      {
        "user": "FallFashion",
        "text": "The taupe color is perfect.",
        "date": "2023-11-20",
        "rating": 5
      },
      {
        "user": "SuedeLover",
        "text": "Hard to keep clean in rain.",
        "date": "2023-12-05",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": false,
    "warranty": "1 Year",
    "quantity_available": 15,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-045",
    "product_name": "Mizuno Wave Rider 26",
    "brand_name": "Mizuno",
    "category": [
      "Men",
      "Sports",
      "Running"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 140,
      "discounted": 125,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "Blue/White",
      "Neon Green"
    ],
    "stock_status": "In Stock",
    "sku": "MZ-WR26-045",
    "shoe_type": "Running",
    "material": {
      "upper": "Jacquard Mesh",
      "sole": "X10 Rubber",
      "lining": "Textile"
    },
    "weight": "290g",
    "heel_type": "Cushioned",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Air dry",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.6,
    "customer_reviews": [
      {
        "user": "MizunoFan",
        "text": "Reliable daily trainer.",
        "date": "2023-05-10",
        "rating": 5
      },
      {
        "user": "MarathonTraining",
        "text": "Firm ride but responsive.",
        "date": "2023-07-22",
        "rating": 4
      },
      {
        "user": "RunnerGuy",
        "text": "Heel drop is quite high.",
        "date": "2023-09-15",
        "rating": 4
      }
    ],
    "verified_purchase": false,
    "estimated_delivery_time": "4-6 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "6 Months",
    "quantity_available": 80,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-046",
    "product_name": "L.L.Bean Bean Boot",
    "brand_name": "L.L.Bean",
    "category": [
      "Men",
      "Women",
      "Boot",
      "Rain Boot",
      "High Neck"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 149,
      "discounted": 149,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "Tan/Navy"
    ],
    "stock_status": "In Stock",
    "sku": "LB-BB-046",
    "shoe_type": "Duck Boot",
    "material": {
      "upper": "Leather",
      "sole": "Rubber Chain-tread",
      "lining": "Thinsulate"
    },
    "weight": "900g",
    "heel_type": "Low Block",
    "closure_type": "Lace-up",
    "country_of_origin": "USA",
    "care_instructions": "Hose off",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "Runs large, size down",
    "bundle_offers": [],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "NewEnglander",
        "text": "Essential for mud season.",
        "date": "2023-03-20",
        "rating": 5
      },
      {
        "user": "CollegeKid",
        "text": "Keeps feet dry on campus.",
        "date": "2023-10-15",
        "rating": 5
      },
      {
        "user": "CityDweller",
        "text": "A bit heavy for walking long distances.",
        "date": "2023-12-05",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "5-7 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 200,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-047",
    "product_name": "Vans Slip-On",
    "brand_name": "Vans",
    "category": [
      "Men",
      "Women",
      "Casual",
      "Slip-on",
      "Sneaker"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1627632626155-7589f89311b5?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1565153928136-193498877b06?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 60,
      "discounted": 60,
      "currency": "USD"
    },
    "available_sizes": [
      "US 5",
      "US 6",
      "US 7",
      "US 8",
      "US 9",
      "US 10"
    ],
    "available_colors": [
      "Checkerboard",
      "Black"
    ],
    "stock_status": "In Stock",
    "sku": "VN-SO-047",
    "shoe_type": "Slip-on",
    "material": {
      "upper": "Canvas",
      "sole": "Waffle Rubber",
      "lining": "Canvas"
    },
    "weight": "350g",
    "heel_type": "Flat",
    "closure_type": "Slip-on",
    "country_of_origin": "Vietnam",
    "care_instructions": "Machine wash cold",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "SkaterGirl",
        "text": "Easiest shoe to put on.",
        "date": "2023-05-12",
        "rating": 5
      },
      {
        "user": "CheckerFan",
        "text": "Iconic pattern.",
        "date": "2023-07-30",
        "rating": 5
      },
      {
        "user": "MomLife",
        "text": "Perfect for running errands.",
        "date": "2023-09-18",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 500,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "SHOE-050",
    "product_name": "Nike Air Max 90",
    "brand_name": "Nike",
    "category": [
      "Men",
      "Women",
      "Casual",
      "Sneaker",
      "Retro"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1620138546344-7b2c38516edf?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1622359599548-2b234479367c?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 130,
      "discounted": 120,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11",
      "US 12"
    ],
    "available_colors": [
      "Infrared",
      "Black/White",
      "Triple White"
    ],
    "stock_status": "In Stock",
    "sku": "NK-AM90-050",
    "shoe_type": "Lifestyle Sneaker",
    "material": {
      "upper": "Mesh/Leather",
      "sole": "Rubber with Air Unit",
      "lining": "Textile"
    },
    "weight": "380g",
    "heel_type": "Cushioned",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Wipe clean",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "MaxAirFan",
        "text": "The classic never dies.",
        "date": "2023-11-12",
        "rating": 5
      },
      {
        "user": "RetroRunner",
        "text": "A bit stiff at first.",
        "date": "2023-12-01",
        "rating": 4
      },
      {
        "user": "SneakerAddict",
        "text": "Perfect colorway.",
        "date": "2024-01-15",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 120,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "SHOE-051",
    "product_name": "Adidas Samba OG",
    "brand_name": "Adidas",
    "category": [
      "Men",
      "Women",
      "Casual",
      "Sneaker",
      "Vintage"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1597248881519-db089d3744a5?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 100,
      "discounted": 100,
      "currency": "USD"
    },
    "available_sizes": [
      "US 5",
      "US 6",
      "US 7",
      "US 8",
      "US 9",
      "US 10"
    ],
    "available_colors": [
      "White/Black",
      "Black/White"
    ],
    "stock_status": "Low Stock",
    "sku": "AD-SM-051",
    "shoe_type": "Terrace Sneaker",
    "material": {
      "upper": "Full Grain Leather",
      "sole": "Gum Rubber",
      "lining": "Synthetic Leather"
    },
    "weight": "340g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "Indonesia",
    "care_instructions": "Wipe clean",
    "size_system": "US",
    "fit_type": "Narrow",
    "model_fit_suggestion": "Size up 0.5 if wide feet",
    "bundle_offers": [],
    "customer_ratings": 4.9,
    "customer_reviews": [
      {
        "user": "TrendWatcher",
        "text": "The 'it' shoe of the year.",
        "date": "2023-10-20",
        "rating": 5
      },
      {
        "user": "SoccerMom",
        "text": "Classic indoor soccer look.",
        "date": "2023-11-05",
        "rating": 5
      },
      {
        "user": "FlatFoot",
        "text": "Very little arch support.",
        "date": "2024-02-02",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 15,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-052",
    "product_name": "New Balance 990v5",
    "brand_name": "New Balance",
    "category": [
      "Men",
      "Running",
      "Casual",
      "Dad Shoe"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1593548366595-c449f722b3d1?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 185,
      "discounted": 175,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11",
      "US 12"
    ],
    "available_colors": [
      "Grey",
      "Navy",
      "Black"
    ],
    "stock_status": "In Stock",
    "sku": "NB-990V5-052",
    "shoe_type": "Lifestyle Runner",
    "material": {
      "upper": "Pigskin Suede/Mesh",
      "sole": "Rubber",
      "lining": "Textile"
    },
    "weight": "385g",
    "heel_type": "Cushioned",
    "closure_type": "Lace-up",
    "country_of_origin": "USA",
    "care_instructions": "Spot clean with mild detergent",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [
      "Free premium socks"
    ],
    "customer_ratings": 4.9,
    "customer_reviews": [
      {
        "user": "ComfortKing",
        "text": "Most comfortable shoe I've owned.",
        "date": "2023-08-15",
        "rating": 5
      },
      {
        "user": "DadStyle",
        "text": "Perfect for grilling.",
        "date": "2023-09-10",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "2-4 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 60,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-053",
    "product_name": "Asics Gel-Lyte III OG",
    "brand_name": "Asics",
    "category": [
      "Men",
      "Casual",
      "Sneaker",
      "Retro"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1632737666275-c08bd23c6d26?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 120,
      "discounted": 90,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "White/Yellow",
      "Black/Grey"
    ],
    "stock_status": "In Stock",
    "sku": "AS-GL3-053",
    "shoe_type": "Retro Runner",
    "material": {
      "upper": "Suede/Mesh",
      "sole": "Rubber",
      "lining": "Textile"
    },
    "weight": "320g",
    "heel_type": "GEL Cushioning",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Machine wash cold",
    "size_system": "US",
    "fit_type": "Snug",
    "model_fit_suggestion": "Split tongue design needs sizing up",
    "bundle_offers": [],
    "customer_ratings": 4.6,
    "customer_reviews": [
      {
        "user": "SplitTongueFan",
        "text": "Love the unique tongue design.",
        "date": "2023-05-20",
        "rating": 5
      },
      {
        "user": "RetroHead",
        "text": "Materials are top notch.",
        "date": "2023-07-12",
        "rating": 5
      }
    ],
    "verified_purchase": false,
    "estimated_delivery_time": "4-6 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 45,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-054",
    "product_name": "Puma Cali Dream",
    "brand_name": "Puma",
    "category": [
      "Women",
      "Casual",
      "Sneaker",
      "Platform"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1579338908476-3a3a1d71a706?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 90,
      "discounted": 75,
      "currency": "USD"
    },
    "available_sizes": [
      "US 5",
      "US 6",
      "US 7",
      "US 8",
      "US 9"
    ],
    "available_colors": [
      "White/Pink",
      "White/Black"
    ],
    "stock_status": "In Stock",
    "sku": "PM-CD-054",
    "shoe_type": "Platform Sneaker",
    "material": {
      "upper": "Leather",
      "sole": "Rubber",
      "lining": "Textile"
    },
    "weight": "420g",
    "heel_type": "Platform",
    "closure_type": "Lace-up",
    "country_of_origin": "Indonesia",
    "care_instructions": "Wipe clean",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.5,
    "customer_reviews": [
      {
        "user": "PlatformLover",
        "text": "Gives me the height I need.",
        "date": "2023-09-01",
        "rating": 5
      },
      {
        "user": "CaliGirl",
        "text": "A bit heavy but cute.",
        "date": "2023-10-15",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 100,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-055",
    "product_name": "Reebok Classic Leather",
    "brand_name": "Reebok",
    "category": [
      "Men",
      "Women",
      "Casual",
      "Sneaker"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 85,
      "discounted": 85,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11",
      "US 12"
    ],
    "available_colors": [
      "White",
      "Black",
      "Gum Sole"
    ],
    "stock_status": "In Stock",
    "sku": "RB-CL-055",
    "shoe_type": "Sneaker",
    "material": {
      "upper": "Soft Garment Leather",
      "sole": "Rubber",
      "lining": "Textile"
    },
    "weight": "350g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Wipe clean",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [
      "Buy 2 get 15% off"
    ],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "CleanClassic",
        "text": "Never goes out of style.",
        "date": "2023-06-30",
        "rating": 5
      },
      {
        "user": "DailyDriver",
        "text": "Good for walking all day.",
        "date": "2023-08-20",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 250,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-056",
    "product_name": "Timberland Earthkeepers",
    "brand_name": "Timberland",
    "category": [
      "Men",
      "Boot",
      "Outdoor",
      "Casual"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 170,
      "discounted": 150,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11",
      "US 12"
    ],
    "available_colors": [
      "Red Brown",
      "Dark Brown"
    ],
    "stock_status": "In Stock",
    "sku": "TB-EK-056",
    "shoe_type": "Ankle Boot",
    "material": {
      "upper": "Full Grain Leather",
      "sole": "Recycled Rubber",
      "lining": "Recycled PET"
    },
    "weight": "600g",
    "heel_type": "Block Heel",
    "closure_type": "Lace-up",
    "country_of_origin": "Bangladesh",
    "care_instructions": "Leather wax",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "Runs large, size down 0.5",
    "bundle_offers": [],
    "customer_ratings": 4.5,
    "customer_reviews": [
      {
        "user": "EcoFriendlyGuy",
        "text": "Love the recycled materials concept.",
        "date": "2023-11-10",
        "rating": 5
      },
      {
        "user": "RuggedStyle",
        "text": "Scuffs easily but adds character.",
        "date": "2024-01-05",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "4-6 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 80,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-057",
    "product_name": "Dr. Martens Jadon Platform",
    "brand_name": "Dr. Martens",
    "category": [
      "Women",
      "Boot",
      "Platform",
      "Casual"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 210,
      "discounted": 210,
      "currency": "USD"
    },
    "available_sizes": [
      "US 5",
      "US 6",
      "US 7",
      "US 8",
      "US 9"
    ],
    "available_colors": [
      "Black Polished",
      "White"
    ],
    "stock_status": "Out of Stock",
    "sku": "DM-JD-057",
    "shoe_type": "Platform Boot",
    "material": {
      "upper": "Polished Smooth Leather",
      "sole": "PVC",
      "lining": "Leather/Textile"
    },
    "weight": "950g",
    "heel_type": "Platform (1.5 inch)",
    "closure_type": "Zip/Lace-up",
    "country_of_origin": "Thailand",
    "care_instructions": "Wonder Balsam",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "PlatformQueen",
        "text": "Makes me feel powerful.",
        "date": "2023-12-15",
        "rating": 5
      },
      {
        "user": "HeavyStepper",
        "text": "Very heavy, takes getting used to.",
        "date": "2024-01-20",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "5-7 Business Days",
    "shipping_cost": "Free",
    "cod_available": false,
    "warranty": "1 Year",
    "quantity_available": 0,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-058",
    "product_name": "Crocs Echo Clog",
    "brand_name": "Crocs",
    "category": [
      "Men",
      "Women",
      "Sandal",
      "Streetwear"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 70,
      "discounted": 70,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11",
      "US 12"
    ],
    "available_colors": [
      "Stucco",
      "Black",
      "Desert Grass"
    ],
    "stock_status": "In Stock",
    "sku": "CR-EC-058",
    "shoe_type": "Clog",
    "material": {
      "upper": "Croslite",
      "sole": "Croslite/LiteRide",
      "lining": "Unlined"
    },
    "weight": "200g",
    "heel_type": "Flat",
    "closure_type": "Turbo Strap",
    "country_of_origin": "China",
    "care_instructions": "Wash with soap",
    "size_system": "US",
    "fit_type": "Roomy",
    "model_fit_suggestion": "Size down",
    "bundle_offers": [],
    "customer_ratings": 4.6,
    "customer_reviews": [
      {
        "user": "FuturisticFan",
        "text": "Looks like Yeezy slides but durable.",
        "date": "2023-08-10",
        "rating": 5
      },
      {
        "user": "ComfortSeeker",
        "text": "LiteRide footbed is soft.",
        "date": "2023-09-22",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "90 Days",
    "quantity_available": 150,
    "is_best_seller": false,
    "is_new_arrival": true,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "SHOE-059",
    "product_name": "Salomon XT-6",
    "brand_name": "Salomon",
    "category": [
      "Men",
      "Women",
      "Sports",
      "Hiking",
      "Fashion"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 200,
      "discounted": 190,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "White/Lunar Rock",
      "Black/Phantom"
    ],
    "stock_status": "Low Stock",
    "sku": "SL-XT6-059",
    "shoe_type": "Trail Runner",
    "material": {
      "upper": "Mesh/TPU",
      "sole": "Contagrip Rubber",
      "lining": "Textile"
    },
    "weight": "365g",
    "heel_type": "Cushioned",
    "closure_type": "Quicklace",
    "country_of_origin": "Vietnam",
    "care_instructions": "Rinse water",
    "size_system": "US",
    "fit_type": "Slim",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "GorpCore",
        "text": "Ultimate fashion hiking shoe.",
        "date": "2023-11-12",
        "rating": 5
      },
      {
        "user": "CityHiker",
        "text": "Great stability.",
        "date": "2024-01-08",
        "rating": 5
      }
    ],
    "verified_purchase": false,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "2 Years",
    "quantity_available": 10,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-060",
    "product_name": "Birkenstock Gizeh",
    "brand_name": "Birkenstock",
    "category": [
      "Women",
      "Sandal",
      "Casual"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1574420379927-4af626027a4d?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 100,
      "discounted": 100,
      "currency": "USD"
    },
    "available_sizes": [
      "EU 36",
      "EU 37",
      "EU 38",
      "EU 39",
      "EU 40"
    ],
    "available_colors": [
      "Onyx",
      "Silver",
      "Tobacco"
    ],
    "stock_status": "In Stock",
    "sku": "BK-GZ-060",
    "shoe_type": "Thong Sandal",
    "material": {
      "upper": "Birko-Flor",
      "sole": "EVA",
      "lining": "Suede"
    },
    "weight": "220g",
    "heel_type": "Flat",
    "closure_type": "Buckle",
    "country_of_origin": "Germany",
    "care_instructions": "Avoid heat",
    "size_system": "EU",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "SummerReady",
        "text": "The toe post takes a day to get used to.",
        "date": "2023-06-15",
        "rating": 4
      },
      {
        "user": "SandalLover",
        "text": "More stylish than the Arizona.",
        "date": "2023-07-20",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": false,
    "warranty": "1 Year",
    "quantity_available": 85,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-061",
    "product_name": "UGG Tasman Slipper",
    "brand_name": "UGG",
    "category": [
      "Men",
      "Women",
      "Casual",
      "Slipper"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1579626343362-5204277732bd?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1546367332-90e66c747975?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 110,
      "discounted": 110,
      "currency": "USD"
    },
    "available_sizes": [
      "US 6",
      "US 7",
      "US 8",
      "US 9",
      "US 10"
    ],
    "available_colors": [
      "Chestnut",
      "Black",
      "Olive"
    ],
    "stock_status": "In Stock",
    "sku": "UG-TS-061",
    "shoe_type": "Slipper",
    "material": {
      "upper": "Suede",
      "sole": "Treadlite",
      "lining": "Sheepskin"
    },
    "weight": "300g",
    "heel_type": "Flat",
    "closure_type": "Slip-on",
    "country_of_origin": "Vietnam",
    "care_instructions": "Dry clean only",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "Size up if half size",
    "bundle_offers": [],
    "customer_ratings": 4.9,
    "customer_reviews": [
      {
        "user": "HomeBody",
        "text": "I wear these to the store and at home.",
        "date": "2023-12-01",
        "rating": 5
      },
      {
        "user": "TrendHunter",
        "text": "Sold out everywhere, glad I found them.",
        "date": "2024-01-10",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "4-6 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 40,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-062",
    "product_name": "Hoka Bondi 8",
    "brand_name": "Hoka",
    "category": [
      "Women",
      "Running",
      "Sports"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1581698227367-175204487b99?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 165,
      "discounted": 165,
      "currency": "USD"
    },
    "available_sizes": [
      "US 6",
      "US 7",
      "US 8",
      "US 9"
    ],
    "available_colors": [
      "Sharkskin",
      "White",
      "Peach"
    ],
    "stock_status": "In Stock",
    "sku": "HK-BD8-062",
    "shoe_type": "Running",
    "material": {
      "upper": "Mesh",
      "sole": "EVA Foam",
      "lining": "Recycled Mesh"
    },
    "weight": "280g",
    "heel_type": "Max Cushion",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Air dry",
    "size_system": "US",
    "fit_type": "Wide",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "NurseJane",
        "text": "Life saver for 12hr shifts.",
        "date": "2023-08-15",
        "rating": 5
      },
      {
        "user": "CloudWalker",
        "text": "Most cushion I've ever felt.",
        "date": "2023-10-05",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 90,
    "is_best_seller": true,
    "is_new_arrival": true,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-063",
    "product_name": "On Cloud 5",
    "brand_name": "On",
    "category": [
      "Men",
      "Running",
      "Casual",
      "Sports"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 140,
      "discounted": 140,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11",
      "US 12"
    ],
    "available_colors": [
      "Midnight/White",
      "All Black"
    ],
    "stock_status": "In Stock",
    "sku": "ON-C5-063",
    "shoe_type": "Running",
    "material": {
      "upper": "Antimicrobial Mesh",
      "sole": "CloudTec",
      "lining": "Textile"
    },
    "weight": "250g",
    "heel_type": "Cushioned",
    "closure_type": "Speed Lacing",
    "country_of_origin": "Vietnam",
    "care_instructions": "Machine wash cold",
    "size_system": "US",
    "fit_type": "Slim",
    "model_fit_suggestion": "Size up 0.5",
    "bundle_offers": [],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "TechBro",
        "text": "Great for travel and office.",
        "date": "2023-09-10",
        "rating": 5
      },
      {
        "user": "DailyRun",
        "text": "Good for short runs, better for walking.",
        "date": "2023-11-22",
        "rating": 4
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "2-4 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "1 Year",
    "quantity_available": 130,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "SHOE-064",
    "product_name": "Nike Blazer Mid '77",
    "brand_name": "Nike",
    "category": [
      "Men",
      "Women",
      "Casual",
      "High Neck",
      "Sneaker"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1610427320078-2d8805cd7383?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 105,
      "discounted": 95,
      "currency": "USD"
    },
    "available_sizes": [
      "US 7",
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "White/Black",
      "White/Habanero Red"
    ],
    "stock_status": "In Stock",
    "sku": "NK-BM77-064",
    "shoe_type": "High Top Sneaker",
    "material": {
      "upper": "Leather/Synthetic",
      "sole": "Rubber",
      "lining": "Exposed Foam"
    },
    "weight": "410g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "India",
    "care_instructions": "Wipe clean",
    "size_system": "US",
    "fit_type": "Narrow",
    "model_fit_suggestion": "Hard to put on, true to size once on",
    "bundle_offers": [],
    "customer_ratings": 4.6,
    "customer_reviews": [
      {
        "user": "RetroFan",
        "text": "Classic vintage look.",
        "date": "2023-07-05",
        "rating": 5
      },
      {
        "user": "WideFootProblem",
        "text": "Very narrow, hard to get foot in.",
        "date": "2023-08-15",
        "rating": 3
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 110,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "SHOE-065",
    "product_name": "Adidas Gazelle",
    "brand_name": "Adidas",
    "category": [
      "Women",
      "Men",
      "Casual",
      "Sneaker"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 100,
      "discounted": 100,
      "currency": "USD"
    },
    "available_sizes": [
      "US 5",
      "US 6",
      "US 7",
      "US 8",
      "US 9"
    ],
    "available_colors": [
      "Maroon",
      "Black",
      "Pink"
    ],
    "stock_status": "Low Stock",
    "sku": "AD-GZ-065",
    "shoe_type": "Sneaker",
    "material": {
      "upper": "Suede",
      "sole": "Rubber",
      "lining": "Synthetic"
    },
    "weight": "330g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Suede brush",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "Size down 0.5",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "HarryStylesFan",
        "text": "Bought because of Harry Styles.",
        "date": "2023-10-01",
        "rating": 5
      },
      {
        "user": "ComfyShoe",
        "text": "Great arch support for a flat shoe.",
        "date": "2023-11-20",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 20,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": false
  },
  {
    "product_id": "SHOE-066",
    "product_name": "Vans Sk8-Hi",
    "brand_name": "Vans",
    "category": [
      "Men",
      "Women",
      "Casual",
      "High Neck",
      "Sneaker"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1542834759-48259d6796da?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 80,
      "discounted": 75,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "Black/White",
      "Navy"
    ],
    "stock_status": "In Stock",
    "sku": "VN-SK8-066",
    "shoe_type": "Skate Shoe",
    "material": {
      "upper": "Suede/Canvas",
      "sole": "Waffle Rubber",
      "lining": "Padded Collar"
    },
    "weight": "450g",
    "heel_type": "Flat",
    "closure_type": "Lace-up",
    "country_of_origin": "China",
    "care_instructions": "Hand wash",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.7,
    "customer_reviews": [
      {
        "user": "SkateOrDie",
        "text": "Ankle protection is key.",
        "date": "2023-05-30",
        "rating": 5
      },
      {
        "user": "CoolMom",
        "text": "My son loves them.",
        "date": "2023-08-12",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Paid",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 200,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-067",
    "product_name": "Converse Run Star Hike",
    "brand_name": "Converse",
    "category": [
      "Women",
      "Casual",
      "Platform",
      "Sneaker"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1494496195158-c31bda3800cb?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 110,
      "discounted": 110,
      "currency": "USD"
    },
    "available_sizes": [
      "US 5",
      "US 6",
      "US 7",
      "US 8",
      "US 9"
    ],
    "available_colors": [
      "Black",
      "White"
    ],
    "stock_status": "In Stock",
    "sku": "CV-RSH-067",
    "shoe_type": "Platform Sneaker",
    "material": {
      "upper": "Canvas",
      "sole": "Rubber Lug",
      "lining": "Textile"
    },
    "weight": "500g",
    "heel_type": "Platform",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Machine wash cold",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "Runs large, size down",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "EdgyStyle",
        "text": "Adds height and edge to any outfit.",
        "date": "2023-09-20",
        "rating": 5
      },
      {
        "user": "Walker",
        "text": "Actually very comfortable despite the chunky sole.",
        "date": "2023-11-01",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 75,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": true,
    "is_featured": true
  },
  {
    "product_id": "SHOE-068",
    "product_name": "Saucony Endorphin Speed 3",
    "brand_name": "Saucony",
    "category": [
      "Men",
      "Running",
      "Sports"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 170,
      "discounted": 160,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11"
    ],
    "available_colors": [
      "Vizigold",
      "White/Black"
    ],
    "stock_status": "Low Stock",
    "sku": "SC-ES3-068",
    "shoe_type": "Performance Running",
    "material": {
      "upper": "Mesh",
      "sole": "PWRRUN PB",
      "lining": "Textile"
    },
    "weight": "230g",
    "heel_type": "Cushioned",
    "closure_type": "Lace-up",
    "country_of_origin": "China",
    "care_instructions": "Air dry",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.9,
    "customer_reviews": [
      {
        "user": "FastRunner",
        "text": "The nylon plate gives great pop.",
        "date": "2023-08-05",
        "rating": 5
      },
      {
        "user": "TempoRun",
        "text": "Best shoe for tempo days.",
        "date": "2023-10-12",
        "rating": 5
      }
    ],
    "verified_purchase": true,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "None",
    "quantity_available": 20,
    "is_best_seller": false,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  },
  {
    "product_id": "SHOE-069",
    "product_name": "Brooks Adrenaline GTS 22",
    "brand_name": "Brooks",
    "category": [
      "Men",
      "Running",
      "Sports"
    ],
    "product_images": [
      "https://images.unsplash.com/photo-1590558133529-67d1d2932230?auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=500&q=60"
    ],
    "product_video": null,
    "price": {
      "regular": 140,
      "discounted": 120,
      "currency": "USD"
    },
    "available_sizes": [
      "US 8",
      "US 9",
      "US 10",
      "US 11",
      "US 12"
    ],
    "available_colors": [
      "Black/Grey",
      "Blue/Navy"
    ],
    "stock_status": "In Stock",
    "sku": "BR-AGTS-069",
    "shoe_type": "Support Running",
    "material": {
      "upper": "Mesh",
      "sole": "Rubber",
      "lining": "Textile"
    },
    "weight": "290g",
    "heel_type": "Cushioned",
    "closure_type": "Lace-up",
    "country_of_origin": "Vietnam",
    "care_instructions": "Machine wash cold",
    "size_system": "US",
    "fit_type": "Regular",
    "model_fit_suggestion": "True to size",
    "bundle_offers": [],
    "customer_ratings": 4.8,
    "customer_reviews": [
      {
        "user": "FlatFooter",
        "text": "GuideRails support system is perfect.",
        "date": "2023-04-10",
        "rating": 5
      },
      {
        "user": "DailyJog",
        "text": "Solid daily workhorse.",
        "date": "2023-06-22",
        "rating": 5
      }
    ],
    "verified_purchase": false,
    "estimated_delivery_time": "3-5 Business Days",
    "shipping_cost": "Free",
    "cod_available": true,
    "warranty": "90 Days",
    "quantity_available": 110,
    "is_best_seller": true,
    "is_new_arrival": false,
    "is_trending": false,
    "is_featured": false
  }

]

// 3. Upload Function
const importData = async () => {
  for (const product of products) {
    console.log(`Uploading ${product.product_name}...`)
    
    const doc = {
      _type: 'product',
      // We map every single field explicitly
      product_id: product.product_id,
      product_name: product.product_name,
      brand_name: product.brand_name,
      category: product.category,
      
      // IMPORTANT: Mapping string URLs to the 'external' field
      external_image_urls: product.product_images, 
      
      product_video: product.product_video,
      price: product.price,
      available_sizes: product.available_sizes,
      available_colors: product.available_colors,
      stock_status: product.stock_status,
      sku: product.sku,
      shoe_type: product.shoe_type,
      material: product.material,
      weight: product.weight,
      heel_type: product.heel_type,
      closure_type: product.closure_type,
      country_of_origin: product.country_of_origin,
      care_instructions: product.care_instructions,
      size_system: product.size_system,
      fit_type: product.fit_type,
      model_fit_suggestion: product.model_fit_suggestion,
      bundle_offers: product.bundle_offers,
      customer_ratings: product.customer_ratings,
      customer_reviews: product.customer_reviews,
      verified_purchase: product.verified_purchase,
      estimated_delivery_time: product.estimated_delivery_time,
      shipping_cost: product.shipping_cost,
      cod_available: product.cod_available,
      warranty: product.warranty,
      quantity_available: product.quantity_available,
      is_best_seller: product.is_best_seller,
      is_new_arrival: product.is_new_arrival,
      is_trending: product.is_trending,
      is_featured: product.is_featured
    }

    await client.create(doc)
    console.log(`Done: ${product.product_name}`)
  }
}

importData()