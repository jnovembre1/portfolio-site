// app/webhook/route.js
let webhookEvents = [];

// Handle GET requests to serve stored webhook events (for demo)
export async function GET() {
  return new Response(JSON.stringify(webhookEvents), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

// Handle POST requests to receive webhook events from GitHub
export async function POST(request) {
  try {
    const payload = await request.json();
    const record = {
      payload,
      receivedAt: new Date().toISOString(),
    };
    webhookEvents.push(record);
    if (webhookEvents.length > 20) {
      webhookEvents = webhookEvents.slice(-20);
    }
    return new Response(JSON.stringify({ message: "Webhook received", record }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
