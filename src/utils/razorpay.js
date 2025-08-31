export function ensureRazorpayLoaded() {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) return resolve(window.Razorpay);
    const existing = document.querySelector(
      'script[src*="checkout.razorpay.com"]',
    );
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://checkout.razorpay.com/v1/checkout.js";
      s.onload = () => resolve(window.Razorpay);
      s.onerror = () => reject(new Error("Failed to load Razorpay"));
      document.body.appendChild(s);
    } else {
      existing.addEventListener("load", () => resolve(window.Razorpay));
      existing.addEventListener("error", () =>
        reject(new Error("Failed to load Razorpay")),
      );
    }
  });
}

/**
 * Opens Razorpay Checkout. For dev (frontend-only), you can pass amount without order_id.
 * For prod: ALWAYS pass a server-created order_id and verify signature on your backend.
 */
export async function openRazorpayCheckout({
  amountInPaise,
  customer,
  notes,
  orderId, // optional now; required in prod
  onSuccess,
  onClose,
}) {
  await ensureRazorpayLoaded();

  const key = import.meta.env.VITE_RAZORPAY_KEY_ID;

  if (!key) throw new Error("VITE_RAZORPAY_KEY_ID is missing");

  const options = {
    key, // your Key ID
    amount: amountInPaise, // in paise
    currency: "INR",
    name: "Parkplus",
    description: "Space booking",
    image: "/favicon.svg",
    order_id: orderId, // frontend-dev: omit; prod: REQUIRED
    prefill: {
      name: customer?.name || "",
      email: customer?.email || "",
      contact: customer?.phone || "",
    },
    notes: notes || {},
    // theme: { color: "#EF4444" }, // Tailwind red-500
    handler: function (response) {
      // response: { razorpay_payment_id, razorpay_order_id, razorpay_signature }
      onSuccess?.(response);
    },
    modal: {
      ondismiss: function () {
        onClose?.();
      },
      escape: true,
      confirm_close: true,
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
  return rzp;
}
