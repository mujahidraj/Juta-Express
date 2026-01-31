export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'product_id', title: 'Product ID', type: 'string' },
    { name: 'product_name', title: 'Product Name', type: 'string' },
    { name: 'brand_name', title: 'Brand Name', type: 'string' },
    { name: 'category', title: 'Category', type: 'array', of: [{type: 'string'}] },
    
    // IMAGE LOGIC: We keep both so you can migrate easily
    { 
      name: 'product_images', 
      title: 'Product Images (Upload)', 
      type: 'array', 
      of: [{type: 'image', options: {hotspot: true}}] 
    },
    {
      name: 'external_image_urls',
      title: 'Image URLs (From JSON)',
      type: 'array',
      of: [{type: 'string'}]
    },

    { name: 'product_video', title: 'Video URL', type: 'url' },
    
    // Nested Objects
    {
      name: 'price',
      title: 'Price',
      type: 'object',
      fields: [
        { name: 'regular', type: 'number' },
        { name: 'discounted', type: 'number' },
        { name: 'currency', type: 'string', initialValue: 'USD' }
      ]
    },
    {
      name: 'material',
      title: 'Material',
      type: 'object',
      fields: [
        { name: 'upper', type: 'string' },
        { name: 'sole', type: 'string' },
        { name: 'lining', type: 'string' }
      ]
    },

    // Arrays & Strings
    { name: 'available_sizes', title: 'Available Sizes', type: 'array', of: [{type: 'string'}] },
    { name: 'available_colors', title: 'Available Colors', type: 'array', of: [{type: 'string'}] },
    { name: 'stock_status', title: 'Stock Status', type: 'string' },
    { name: 'sku', title: 'SKU', type: 'string' },
    { name: 'shoe_type', title: 'Shoe Type', type: 'string' },
    { name: 'weight', title: 'Weight', type: 'string' },
    { name: 'heel_type', title: 'Heel Type', type: 'string' },
    { name: 'closure_type', title: 'Closure Type', type: 'string' },
    { name: 'country_of_origin', title: 'Country of Origin', type: 'string' },
    { name: 'care_instructions', title: 'Care Instructions', type: 'string' },
    { name: 'size_system', title: 'Size System', type: 'string' },
    { name: 'fit_type', title: 'Fit Type', type: 'string' },
    { name: 'model_fit_suggestion', title: 'Model Fit Suggestion', type: 'string' },
    { name: 'bundle_offers', title: 'Bundle Offers', type: 'array', of: [{type: 'string'}] },

    // Reviews (Complex Array)
    {
      name: 'customer_reviews',
      title: 'Customer Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'user', type: 'string' },
            { name: 'text', type: 'text' },
            { name: 'date', type: 'date' },
            { name: 'rating', type: 'number' }
          ]
        }
      ]
    },

    // Numbers & Booleans
    { name: 'customer_ratings', title: 'Customer Ratings (Avg)', type: 'number' },
    { name: 'quantity_available', title: 'Quantity Available', type: 'number' },
    { name: 'verified_purchase', title: 'Verified Purchase', type: 'boolean' },
    { name: 'estimated_delivery_time', title: 'Delivery Time', type: 'string' },
    { name: 'shipping_cost', title: 'Shipping Cost', type: 'string' },
    { name: 'cod_available', title: 'COD Available', type: 'boolean' },
    { name: 'warranty', title: 'Warranty', type: 'string' },
    
    // Flags
    { name: 'is_best_seller', title: 'Best Seller', type: 'boolean' },
    { name: 'is_new_arrival', title: 'New Arrival', type: 'boolean' },
    { name: 'is_trending', title: 'Trending', type: 'boolean' },
    { name: 'is_featured', title: 'Featured', type: 'boolean' }
  ]
}