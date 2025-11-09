export default async function quoteRoutes(fastify,options) {
    const quotes = [
        "The harder you work, the luckier you get.",
        "Push yourself, because no one else is going to do it for you.",
        "Dream it. Wish it. Do it.",
        "Dont watch the clock; do what it does. Keep going."
    ];

    fastify.get("/random", async() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        return {quote: randomQuote};
    });
}