const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }) 
    };
  }

  try {
    const { eventTitle, price, quantity = 1, successUrl, cancelUrl } = JSON.parse(event.body);

    // Convert price to cents (Stripe uses smallest currency unit)
    const priceInCents = Math.round(parseFloat(price) * 100);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'aud',
            product_data: {
              name: eventTitle,
              description: 'Sound Healing Session with Luke Collins'
            },
            unit_amount: priceInCents
          },
          quantity: quantity
        }
      ],
      mode: 'payment',
      success_url: successUrl || 'https://lukecollins.com.au/thank-you',
      cancel_url: cancelUrl || 'https://lukecollins.com.au/events'
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ sessionId: session.id, url: session.url })
    };
  } catch (error) {
    console.error('Stripe error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message })
    };
  }
};
