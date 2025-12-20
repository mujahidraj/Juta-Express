import React, { useState, useEffect } from 'react';
import { useCart } from '../../Contexts/CartProvider/CartProvider';
import { MapPin, CreditCard, Truck, CheckCircle, ArrowLeft, Lock, Smartphone, Map, TicketPercent, Calendar } from 'lucide-react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  // --- STATE ---
  const [paymentMethod, setPaymentMethod] = useState('cod'); 
  const [mobileProvider, setMobileProvider] = useState(''); 
  const [useMapLink, setUseMapLink] = useState(false); 
  const [voucherCode, setVoucherCode] = useState('');
  const [discount, setDiscount] = useState(0);
  
  // 1. New State to prevent redirecting to /cart when we clear it
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    mapLink: '',
    city: '',
    phone: ''
  });

  // --- CALCULATIONS ---
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price.discounted * item.quantity), 0);
  const shippingCost = subtotal > 500 ? 0 : 30.00; 
  const tax = subtotal * 0.05;
  const total = subtotal + shippingCost + tax - discount;

  // --- DELIVERY DATES ---
  const today = new Date();
  const dateOptions = { month: 'short', day: 'numeric' };
  const deliveryStart = new Date(today); deliveryStart.setDate(today.getDate() + 3);
  const deliveryEnd = new Date(today); deliveryEnd.setDate(today.getDate() + 5);
  const deliveryDateString = `${deliveryStart.toLocaleDateString('en-US', dateOptions)} - ${deliveryEnd.toLocaleDateString('en-US', dateOptions)}`;

  // 2. Updated Redirect Logic: Only redirect if NOT processing an order
  useEffect(() => {
    if (cartItems.length === 0 && !isProcessingOrder) {
        navigate('/cart');
    }
  }, [cartItems, navigate, isProcessingOrder]);

  // --- HANDLERS ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleApplyVoucher = (e) => {
    e.preventDefault();
    if (voucherCode.toUpperCase() === 'JUTA10') {
        const disc = subtotal * 0.10; 
        setDiscount(disc);
        Swal.fire({
            icon: 'success',
            title: 'Voucher Applied!',
            text: `You saved $${disc.toFixed(2)}`,
            confirmButtonColor: '#d97706',
            timer: 1500,
            toast: true,
            position: 'top-end',
            showConfirmButton: false
        });
    } else {
        setDiscount(0);
        Swal.fire({
            icon: 'error',
            title: 'Invalid Voucher',
            text: 'Try using code: JUTA10',
            confirmButtonColor: '#d97706',
            toast: true,
            position: 'top-end'
        });
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.phone) {
        Swal.fire({ icon: 'warning', title: 'Phone Required', text: 'We need your phone number for delivery contact.', confirmButtonColor: '#d97706' });
        return;
    }
    
    if (!useMapLink && !formData.address) {
        Swal.fire({ icon: 'warning', title: 'Address Required', text: 'Please enter your street address.', confirmButtonColor: '#d97706' });
        return;
    }
    if (useMapLink && !formData.mapLink) {
        Swal.fire({ icon: 'warning', title: 'Map Link Required', text: 'Please paste your Google Maps Location link.', confirmButtonColor: '#d97706' });
        return;
    }

    if (paymentMethod === 'mobile' && !mobileProvider) {
        Swal.fire({ icon: 'warning', title: 'Select Provider', text: 'Please select bKash, Nagad, Rocket or mCash.', confirmButtonColor: '#d97706' });
        return;
    }

    // Success Simulation & Redirection
    Swal.fire({
        title: 'Processing Order...',
        html: 'Please wait while we confirm your details.',
        timer: 2000,
        didOpen: () => Swal.showLoading()
    }).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Order Placed!',
            text: `Redirecting to payment gateway...`,
            confirmButtonColor: '#d97706',
        }).then(() => {
            // 3. Mark as processing so the useEffect doesn't kick us back to /cart
            setIsProcessingOrder(true);
            
            // 4. Clear Cart immediately
            if(clearCart) clearCart();
            
            // 5. Navigate to Payment
            navigate('/payment');
        });
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center mb-8">
            <Link to="/cart" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-amber-600 transition-colors">
                <ArrowLeft size={18} /> Back to Cart
            </Link>
            <h1 className="ml-auto text-2xl font-black text-gray-900">Secure Checkout</h1>
        </div>

        <form onSubmit={handlePlaceOrder} className="lg:grid lg:grid-cols-12 lg:gap-12">
          
          {/* --- LEFT COLUMN: DETAILS --- */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Contact & Shipping */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm ring-1 ring-black/5">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                        <MapPin size={20} />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Delivery Information</h2>
                </div>

                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input type="text" name="firstName" required onChange={handleChange} className="block w-full rounded-xl border-gray-300 bg-gray-50 border p-3 text-sm focus:border-amber-500 focus:ring-amber-500 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input type="text" name="lastName" required onChange={handleChange} className="block w-full rounded-xl border-gray-300 bg-gray-50 border p-3 text-sm focus:border-amber-500 focus:ring-amber-500 outline-none" />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                        <input type="tel" name="phone" required placeholder="017xxxxxxxx" onChange={handleChange} className="block w-full rounded-xl border-gray-300 bg-gray-50 border p-3 text-sm focus:border-amber-500 focus:ring-amber-500 outline-none" />
                    </div>

                    {/* --- 4. GOOGLE MAP TOGGLE --- */}
                    <div className="sm:col-span-2">
                        <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            <button 
                                type="button" 
                                onClick={() => setUseMapLink(!useMapLink)}
                                className="text-xs font-bold text-amber-600 flex items-center gap-1 hover:underline"
                            >
                                <Map size={12} />
                                {useMapLink ? "Enter Address Manually" : "Use Google Map Link instead"}
                            </button>
                        </div>

                        {useMapLink ? (
                            <div className="relative animate-fade-in">
                                <Map className="absolute left-3 top-3 text-gray-400" size={18} />
                                <input 
                                    type="url" 
                                    name="mapLink" 
                                    placeholder="Paste Google Maps Location Link here..." 
                                    onChange={handleChange} 
                                    className="block w-full rounded-xl border-amber-300 bg-amber-50 border pl-10 pr-3 py-3 text-sm focus:border-amber-500 focus:ring-amber-500 outline-none" 
                                />
                                <p className="text-[10px] text-gray-500 mt-1 ml-1">Use this if you don't know the exact street address.</p>
                            </div>
                        ) : (
                            <textarea 
                                name="address" 
                                rows="2" 
                                placeholder="House #, Road #, Area" 
                                onChange={handleChange} 
                                className="block w-full rounded-xl border-gray-300 bg-gray-50 border p-3 text-sm focus:border-amber-500 focus:ring-amber-500 outline-none" 
                            />
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input type="text" name="city" required onChange={handleChange} className="block w-full rounded-xl border-gray-300 bg-gray-50 border p-3 text-sm focus:border-amber-500 focus:ring-amber-500 outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                        <input type="email" name="email" onChange={handleChange} className="block w-full rounded-xl border-gray-300 bg-gray-50 border p-3 text-sm focus:border-amber-500 focus:ring-amber-500 outline-none" />
                    </div>
                </div>
            </div>

            {/* --- 1. PAYMENT SYSTEM --- */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm ring-1 ring-black/5">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <CreditCard size={20} />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
                </div>

                <div className="space-y-4">
                    
                    {/* COD Option */}
                    <div 
                        onClick={() => setPaymentMethod('cod')}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-amber-500 bg-amber-50/50' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                        <div className="flex items-center gap-3">
                            <Truck className="text-gray-600" />
                            <span className="font-bold text-gray-900">Cash on Delivery</span>
                        </div>
                        <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${paymentMethod === 'cod' ? 'border-amber-500' : 'border-gray-300'}`}>
                            {paymentMethod === 'cod' && <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />}
                        </div>
                    </div>

                    {/* Mobile Banking Option */}
                    <div 
                        onClick={() => setPaymentMethod('mobile')}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'mobile' ? 'border-amber-500 bg-amber-50/50' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <Smartphone className="text-gray-600" />
                                <span className="font-bold text-gray-900">Mobile Banking</span>
                            </div>
                            <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${paymentMethod === 'mobile' ? 'border-amber-500' : 'border-gray-300'}`}>
                                {paymentMethod === 'mobile' && <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />}
                            </div>
                        </div>

                        {/* Provider Selection (Visible if Mobile Banking selected) */}
                        {paymentMethod === 'mobile' && (
                            <div className="grid grid-cols-4 gap-2 mt-4 animate-fade-in">
                                {['bkash', 'nagad', 'rocket', 'mcash'].map((provider) => (
                                    <button
                                        type="button"
                                        key={provider}
                                        onClick={(e) => { e.stopPropagation(); setMobileProvider(provider); }}
                                        className={`py-2 px-1 rounded-lg border text-xs font-bold uppercase transition-all
                                            ${mobileProvider === provider 
                                                ? 'bg-gray-900 text-white border-gray-900' 
                                                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'}`}
                                    >
                                        {provider}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Credit Card Option */}
                    <div 
                        onClick={() => setPaymentMethod('card')}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-amber-500 bg-amber-50/50' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                        <div className="flex items-center gap-3">
                            <CreditCard className="text-gray-600" />
                            <span className="font-bold text-gray-900">Credit / Debit Card</span>
                        </div>
                        <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${paymentMethod === 'card' ? 'border-amber-500' : 'border-gray-300'}`}>
                            {paymentMethod === 'card' && <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />}
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: SUMMARY --- */}
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm ring-1 ring-black/5 sticky top-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                {/* Items List */}
                <div className="space-y-4 max-h-60 overflow-y-auto pr-2 mb-6 scrollbar-thin">
                    {cartItems.map((item) => (
                        <div key={`${item.product_id}-${item.size}`} className="flex gap-4 items-center">
                            <div className="h-14 w-14 rounded-lg bg-gray-100 overflow-hidden shrink-0 border border-gray-200">
                                <img src={item.image || item.product_images[0]} alt={item.product_name} className="h-full w-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xs font-bold text-gray-900 line-clamp-1">{item.product_name}</h3>
                                <p className="text-[10px] text-gray-500">Qty: {item.quantity} | {item.size}</p>
                            </div>
                            <p className="text-sm font-bold text-gray-900">
                                ${(item.price.discounted * item.quantity).toFixed(2)}
                            </p>
                        </div>
                    ))}
                </div>

                {/* --- 3. VOUCHER INPUT --- */}
                <div className="mb-6">
                    <label className="text-xs font-bold text-gray-500 mb-2 block">Discount Code</label>
                    <div className="flex gap-2">
                        <div className="relative flex-1">
                            <TicketPercent className="absolute left-3 top-3 text-gray-400" size={16} />
                            <input 
                                type="text" 
                                placeholder="JUTA10" 
                                value={voucherCode}
                                onChange={(e) => setVoucherCode(e.target.value)}
                                className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-amber-500 focus:ring-amber-500 outline-none uppercase"
                            />
                        </div>
                        <button 
                            type="button"
                            onClick={handleApplyVoucher}
                            className="bg-gray-900 text-white text-xs font-bold px-4 rounded-xl hover:bg-black transition-colors"
                        >
                            Apply
                        </button>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-3">
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Shipping</span>
                        <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Tax (5%)</span>
                        <span>${tax.toFixed(2)}</span>
                    </div>
                    
                    {/* Discount Row */}
                    {discount > 0 && (
                        <div className="flex justify-between text-sm text-green-600 font-bold">
                            <span>Discount</span>
                            <span>-${discount.toFixed(2)}</span>
                        </div>
                    )}

                    <div className="flex justify-between text-lg font-black text-gray-900 border-t border-gray-100 pt-4">
                        <span>Total</span>
                        <span className="text-amber-600">${total.toFixed(2)}</span>
                    </div>
                </div>

                {/* --- 2. GUARANTEED DELIVERY --- */}
                <div className="mt-6 bg-blue-50 p-4 rounded-xl flex items-center gap-3 text-blue-800 border border-blue-100">
                    <Calendar size={20} className="shrink-0" />
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider opacity-70">Guaranteed Delivery</p>
                        <p className="text-sm font-bold">{deliveryDateString}</p>
                    </div>
                </div>

                <button 
                    type="submit" 
                    className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-amber-500 py-4 text-base font-bold text-white shadow-xl shadow-amber-500/20 transition-all hover:bg-amber-600 hover:scale-[1.02] active:scale-95"
                >
                    <CheckCircle size={20} />
                    Place Order
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                    <Lock size={12} />
                    <span>Transactions are 100% Secured and Encrypted</span>
                </div>

            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Checkout;