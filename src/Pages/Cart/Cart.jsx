import React from 'react';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ArrowLeft, ShieldCheck, CreditCard, Truck } from 'lucide-react';
import { useCart } from '../../Contexts/CartProvider/CartProvider';
import Swal from 'sweetalert2'; // 1. Import SweetAlert2
import { Link } from 'react-router';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price.discounted * item.quantity), 0);
  const shippingCost = subtotal > 200 ? 0 : 15.00;
  const tax = subtotal * 0.05;
  const total = subtotal + shippingCost + tax;

  // --- 2. SWEETALERT REMOVE HANDLER ---
  const handleRemoveItem = (id, size, color) => {
    Swal.fire({
      title: 'Remove Item?',
      text: "Are you sure you want to remove this from your cart?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33', // Red for delete
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the removal
        removeFromCart(id, size, color);
        
        // Show success toast
        Swal.fire({
          title: 'Removed!',
          text: 'Item has been removed.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  };

  // Empty State
  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-[80vh] flex-col items-center justify-center bg-white px-4 text-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-50 shadow-inner">
           <ShoppingBag size={48} className="text-gray-300" />
        </div>
        <h2 className="text-3xl font-black text-gray-900">Your Cart is Empty</h2>
        <p className="mt-2 max-w-md text-gray-500">
          Looks like you haven't added any items yet. Explore our collections to find your perfect fit.
        </p>
        <Link to="/collections" className="mt-8 flex items-center gap-2 rounded-full bg-gray-900 px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-amber-600 hover:shadow-lg">
           <ArrowLeft size={16} />
           Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 font-sans text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <h1 className="mb-8 text-3xl font-black sm:text-4xl">Shopping Cart</h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          
          {/* --- LEFT COLUMN: CART ITEMS --- */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
              <ul className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <li key={`${item.product_id}-${item.size}-${item.color}`} className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
                    
                    {/* Clickable Image */}
                    <Link 
                      to={`/products/${item.product_id}`}
                      className="relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl bg-gray-100 sm:w-32 border border-gray-100 group"
                    >
                      <img 
                        src={item.image || item.product_images[0]} 
                        alt={item.product_name} 
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex flex-1 flex-col justify-between sm:flex-row sm:items-center">
                      <div className="space-y-1 pr-4">
                         {/* Clickable Title */}
                         <Link to={`/products/${item.product_id}`} className="group flex items-center gap-2 w-fit">
                            <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-amber-600 group-hover:underline">
                                {item.product_name}
                            </h3>
                         </Link>

                         <p className="text-sm text-gray-500">
                           Color: <span className="font-medium text-gray-900">{item.color}</span> • Size: <span className="font-medium text-gray-900">{item.size}</span>
                         </p>
                         <p className="font-mono text-sm font-bold text-amber-600">
                            ${item.price.discounted.toFixed(2)}
                         </p>
                      </div>

                      {/* Controls (Qty & Remove) */}
                      <div className="mt-4 flex items-center justify-between gap-6 sm:mt-0">
                         
                         {/* Quantity Stepper */}
                         <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50">
                            <button 
                              onClick={() => updateQuantity(item.product_id, item.size, item.color, -1)}
                              disabled={item.quantity <= 1}
                              className="p-2.5 text-gray-500 hover:text-amber-600 disabled:opacity-30 transition-colors"
                            >
                               <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm font-bold bg-white h-full flex items-center justify-center border-x border-gray-200 py-2.5">
                                {item.quantity}
                            </span>
                            <button 
                               onClick={() => updateQuantity(item.product_id, item.size, item.color, 1)}
                               className="p-2.5 text-gray-500 hover:text-amber-600 disabled:opacity-30 transition-colors"
                            >
                               <Plus size={14} />
                            </button>
                         </div>

                         {/* Total Price & Remove */}
                         <div className="text-right">
                            <p className="text-lg font-bold text-gray-900">
                               ${(item.price.discounted * item.quantity).toFixed(2)}
                            </p>
                            
                            {/* --- 3. UPDATED REMOVE BUTTON --- */}
                            <button 
                               onClick={() => handleRemoveItem(item.product_id, item.size, item.color)}
                               className="mt-1 flex items-center gap-1 text-xs font-bold text-red-500 hover:text-red-700 transition-colors"
                            >
                               <Trash2 size={12} /> Remove
                            </button>
                         </div>
                      </div>
                    </div>

                  </li>
                ))}
              </ul>
            </div>
            
            {/* Free Shipping Progress */}
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
               <div className={`flex h-10 w-10 items-center justify-center rounded-full ${shippingCost === 0 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                  <Truck size={20} />
               </div>
               <div className="flex-1">
                  {shippingCost === 0 ? (
                      <p className="text-sm font-bold text-green-600">You've unlocked Free Shipping!</p>
                  ) : (
                      <p className="text-sm text-gray-600">Add <strong>${(200 - subtotal).toFixed(2)}</strong> more for Free Shipping</p>
                  )}
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                      <div 
                        className="h-full bg-amber-500 transition-all duration-500" 
                        style={{ width: `${Math.min((subtotal / 200) * 100, 100)}%` }}
                      ></div>
                  </div>
               </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: SUMMARY --- */}
          <div className="mt-8 lg:col-span-4 lg:mt-0">
            <div className="sticky top-24 overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
               <h2 className="text-xl font-black text-gray-900 mb-6">Order Summary</h2>

               <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                     <span className="text-gray-500">Subtotal</span>
                     <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                     <span className="text-gray-500">Shipping Estimate</span>
                     <span className="font-bold text-gray-900">
                        {shippingCost === 0 ? <span className="text-green-600">Free</span> : `$${shippingCost.toFixed(2)}`}
                     </span>
                  </div>
                  <div className="flex items-center justify-between text-sm border-b border-gray-100 pb-4">
                     <span className="text-gray-500">Tax (5%)</span>
                     <span className="font-bold text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                     <span className="text-lg font-black text-gray-900">Total</span>
                     <div className="text-right">
                        <span className="block text-2xl font-black text-amber-600">${total.toFixed(2)}</span>
                        <span className="text-[10px] text-gray-400">USD</span>
                     </div>
                  </div>
               </div>

               <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-4 text-base font-bold text-white shadow-xl shadow-gray-900/20 transition-all hover:bg-black hover:scale-[1.02] active:scale-95">
                  Checkout Now
                  <ArrowRight size={20} />
               </button>

               <div className="mt-6 flex flex-col gap-3 rounded-xl bg-gray-50 p-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                     <ShieldCheck size={14} className="text-green-600"/>
                     <span>Secure encrypted checkout</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                     <CreditCard size={14} className="text-blue-600" />
                     <span>We accept all major credit cards</span>
                  </div>
               </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;