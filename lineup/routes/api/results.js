const axios = require('axios');
const { response } = require('express');
const router = require('express').Router();

router.get('/:query/:page?', async (req, res) => {
  var searchResult;
  const page = req.params.page ? req.params.page : 1;
  try {

    const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.event_API_key}&keyword=`

   const response = await axios.get(url + req.params.query + '&locale=en-us&countryCode=US&segmentName=music&page=' + page);
   searchResult = response.data._embedded.events;

  let filteredEvents = searchResult.filter(events => {
    return ('name' in events)
  });

  let festivals = filteredEvents.map((event) => {

    return {
      name: event.name,
      id: event.id,
      summary: event.description,
      logo: event.images[event.images.length - 1].url,
      status: event.dates.status.code,
      span: event.dates.spanMultipleDays,
      date: event.dates.start.localDate,
      start: event.dates.start.localTime,
      venues: event._embedded.venues[0].name,
      address: event._embedded.venues[0].address.line1,
      city: event._embedded.venues[0].city.name,
      state: event._embedded.venues[0].state.stateCode
    }
  });

  let resultsPages = [];
  for (let index = 1; index <= response.data.page.totalPages; index++) {
    resultsPages.push({index:index,href:"/results/"+req.params.query+"/"+index});
  }

  // console.log(festivals)


  res.render("results", {
    festivals,
    resultsPages
  })
  } catch (err) {
    console.log(err);
    res.status(400).json({"message": "No concerts found under that query."});
  }
});



module.exports = router;