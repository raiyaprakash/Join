export default {
  async fetch(request) {
    const countryMap = {
      IN: "https://join.autopush.in/",
    };

    const country = request.cf.country;

    // Check country and map it to the URL directly, or redirect if not found
    if (country && countryMap[country]) {
      return Response.redirect(countryMap[country], 302);
    } else {
      return Response.redirect('https://whatsapp.com/channel/0029VaETuj089inlI5auYh0m', 302);
    }
  },
};
