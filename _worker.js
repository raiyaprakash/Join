export default {
  async fetch(request) {
    const countryMap = {
      IN: "https://join.autopush.in/",
    };

    const country = request.cf.country;

    if (country != null && country in countryMap) {
      const url = countryMap[country];
      // Remove this logging statement from your final output.
      console.log(
        `Based on ${country}-based request, your user would go to ${url}.`,
      );
      return fetch(url, request);
    } else {
        return Response.redirect('https://whatsapp.com/channel/0029VaETuj089inlI5auYh0m', 302);
    }
  },
};
