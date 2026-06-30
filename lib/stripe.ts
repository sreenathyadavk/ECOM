import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || "sk_test_dummy_key_for_build_purposes_123";

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-03-31.basil" as any,
});

export default stripe;
