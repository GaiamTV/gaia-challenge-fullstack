const express = require('express')
const app = express()
const port = 9001

app.get('/series-videos', async (req, res, next) => {
  /**
   * TODO: implement node call
   * - Parameterize seriesId to be sent from client application
   * - All series are nodes, but not all nodes are series.  So we can pass seriesId to /node
   * - https://brooklyn.gaia.com/node/[:seriesId]
   *   - Data from this endpoint will look like exampleNodeData below
   *   - Datapoints to use:
   *     - Series hero art -- node.hero_image.hero_1070x400
   *     - Series title -- node.title

   * TODO: implement series episodes call
   * - Parameterize seriesId to be sent from client application
   * - https://brooklyn.gaia.com/v2/videos/series/[:seriesId]
   *   - Data from this endpoint wil look like exampleSeriesEpisodesData

   *  return {
   *    seriesHeroArt: string,
   *    seriesTitle: string,
   *    episodeList: [..., { basicEpisode }, ...], // see README for basicEpisode definition
   *  }
   */

  return {
    mock: true,
  }
})

app.listen(port, () => console.log(`Congrats, the server is running.  Serving from port: ${port}`))

/**
 * Example node response from https://brooklyn.gaia.com/node/[:nodeId]
 */
const exampleNodeData = {
  "fields": {
    "body": [
      {
        "value": "Ayurveda, often known as the sister science to yoga, is a 5000 year old holistic medical system originating in India. Ayurveda means “the knowledge of life” and is known for being one of the world’s oldest and most comprehensive medical systems. Unlike anything seen before on Gaia, Thrive: Self-Healing with Ayurveda is a multi-part educational experience focused on finding balance amidst the pressure of modern life. Thrive celebrates the fact that people learn in many different ways and everyone has a unique pathway to self-healing. Thrive offers five ways to explore: a docuseries, cooking shows, self-care tutorials, yoga classes, and meditations. \r\n \r\nThrough this series, you will come into deeper connection with your unique body type, understand your imbalances, and learn techniques to restore greater harmony to your system. By learning to bring balance to the mind, body, emotions, and spirit, you will be able to more easily navigate challenging circumstances and fundamentally change the way you live in the world. ", "format": 1
      }],
    "teaser": [{ "value": "Explore Ayurveda through five pathways in this series that brings ancient wisdom to modern life.", "format": 1 }],
    "series_nid": [{ "nid": null }],
    "season": [{ "value": null }],
    "episode": [{ "value": null }],
    "instructor": [{ "value": null }],
    "director": [{ "value": null }],
    "producer": [{ "value": null }],
    "writer": [{ "value": null }],
    "cast": [{ "value": null }],
    "copyright": [{ "value": "September 2018" }],
    "studio": [{ "value": "Gaia" }],
    "production_status_text": [{ "value": null }],
    "video_lang": [{ "value": null }]
  },
  "drupal_cache": "hit",
  "nid": 179166,
  "type": "product_series",
  "title": "Thrive: Self-Healing with Ayurveda",
  "promote": 0,
  "status": 1,
  "comment_count": 1,
  "created": 1537200000,
  "is_new": false,
  "path": "series/thrive-self-healing-ayurveda",
  "seo": {
    "title": "Thrive: Self-Healing with Ayurveda",
    "description": "",
    "robots": {
      "noIndex": false,
      "noFollow": false
    }
  },
  "product_type": "episodic",
  "display_type": "yoga",
  "total_episodes": "22",
  "total_seasons": "1",
  "featured_type": "first",
  "admin_category": {
    "tid": 26631,
    "vid": 12,
    "name": "Yoga",
    "weight": 0
  },
  "season_nums": [
    1
  ],
  "site_segment": {
    "id": 120011,
    "name": "Transformation"
  },
  "coverart_image": {
    "hdtv_190x266": "https://img.gtvcdn.com/cdn/farfuture/Mntkp0JML7zK29omXU3qgCG6SuFj3SWG05OK-89HOfo/mtime%3A1536350924/sites/default/files/imagecache/hdtv_series_190x266/product_series_coverart_image/179166_thrive_cvr.jpg",
    "hdtv_250x350": "https://img.gtvcdn.com/cdn/farfuture/Mntkp0JML7zK29omXU3qgCG6SuFj3SWG05OK-89HOfo/mtime%3A1536350924/sites/default/files/imagecache/hdtv_series_250x350/product_series_coverart_image/179166_thrive_cvr.jpg",
    "hdtv_385x539": "https://img.gtvcdn.com/cdn/farfuture/Mntkp0JML7zK29omXU3qgCG6SuFj3SWG05OK-89HOfo/mtime%3A1536350924/sites/default/files/imagecache/hdtv_series_385x539/product_series_coverart_image/179166_thrive_cvr.jpg",
    "hdtv_500x700": "https://img.gtvcdn.com/cdn/farfuture/Mntkp0JML7zK29omXU3qgCG6SuFj3SWG05OK-89HOfo/mtime%3A1536350924/sites/default/files/imagecache/hdtv_series_500x700/product_series_coverart_image/179166_thrive_cvr.jpg",
    "roku_158x204": "https://img.gtvcdn.com/cdn/farfuture/Mntkp0JML7zK29omXU3qgCG6SuFj3SWG05OK-89HOfo/mtime%3A1536350924/sites/default/files/imagecache/roku_series_158x204/product_series_coverart_image/179166_thrive_cvr.jpg",
    "roku_214x306": "https://img.gtvcdn.com/cdn/farfuture/Mntkp0JML7zK29omXU3qgCG6SuFj3SWG05OK-89HOfo/mtime%3A1536350924/sites/default/files/imagecache/roku_series_214x306/product_series_coverart_image/179166_thrive_cvr.jpg"
  },
  "hero_image": {
    "hero_320x200": "https://img.gtvcdn.com/cdn/farfuture/OX9UX6klQUc8uVzs-NOcXf7ScFlQVJP5rDJaCFXZbdc/mtime%3A1536350928/sites/default/files/imagecache/hero_320x200/product_series_hero_image/179166_thrive_series_hero.jpg",
    "hero_570x200": "https://img.gtvcdn.com/cdn/farfuture/OX9UX6klQUc8uVzs-NOcXf7ScFlQVJP5rDJaCFXZbdc/mtime%3A1536350928/sites/default/files/imagecache/hero_570x200/product_series_hero_image/179166_thrive_series_hero.jpg",
    "hero_570x300": "https://img.gtvcdn.com/cdn/farfuture/E-gpvcj6OsVgybVd-AYKZCZ0noCIVaZqqYKAQ0lWCuY/mtime%3A1536350929/sites/default/files/imagecache/hero_570x300/product_series_hero_image/179166_thrive_series_hero.jpg",
    "hero_820x300": "https://img.gtvcdn.com/cdn/farfuture/E-gpvcj6OsVgybVd-AYKZCZ0noCIVaZqqYKAQ0lWCuY/mtime%3A1536350929/sites/default/files/imagecache/hero_820x300/product_series_hero_image/179166_thrive_series_hero.jpg",
    "hero_820x400": "https://img.gtvcdn.com/cdn/farfuture/E-gpvcj6OsVgybVd-AYKZCZ0noCIVaZqqYKAQ0lWCuY/mtime%3A1536350929/sites/default/files/imagecache/hero_820x400/product_series_hero_image/179166_thrive_series_hero.jpg",
    "hero_1070x400": "https://img.gtvcdn.com/cdn/farfuture/BGXCmwpiyX_2RG4Y9EdQE8aXtJi1bCgxxs87lCZ57P0/mtime%3A1536350930/sites/default/files/imagecache/hero_1070x400/product_series_hero_image/179166_thrive_series_hero.jpg",
    "hero_1920x400": "https://img.gtvcdn.com/cdn/farfuture/BGXCmwpiyX_2RG4Y9EdQE8aXtJi1bCgxxs87lCZ57P0/mtime%3A1536350930/sites/default/files/imagecache/hero_1920x400/product_series_hero_image/179166_thrive_series_hero.jpg",
    "xbox_356x180": "https://img.gtvcdn.com/cdn/farfuture/BGXCmwpiyX_2RG4Y9EdQE8aXtJi1bCgxxs87lCZ57P0/mtime%3A1536350930/sites/default/files/imagecache/xbox_video_356x180/product_series_hero_image/179166_thrive_series_hero.jpg",
    "xbox_977x494": "https://img.gtvcdn.com/cdn/farfuture/t_1-iVZJ4p-E4GwEjSOLbDlhyAdvRZXR3MCpyvc3h94/mtime%3A1536350931/sites/default/files/imagecache/xbox_video_977x494/product_series_hero_image/179166_thrive_series_hero.jpg"
  },
  "hero_image_notext": {
    "hero_320x200": "https://img.gtvcdn.com/cdn/farfuture/cFZ9UMfqDzzOr720KO8696YnrWjggRH-MBPAfcUHyj8/mtime%3A1536350931/sites/default/files/imagecache/hero_320x200/product_series_hero_image_notext/179166_thrive_hero-clean.jpg",
    "hero_570x200": "https://img.gtvcdn.com/cdn/farfuture/cFZ9UMfqDzzOr720KO8696YnrWjggRH-MBPAfcUHyj8/mtime%3A1536350931/sites/default/files/imagecache/hero_570x200/product_series_hero_image_notext/179166_thrive_hero-clean.jpg",
    "hero_570x300": "https://img.gtvcdn.com/cdn/farfuture/cFZ9UMfqDzzOr720KO8696YnrWjggRH-MBPAfcUHyj8/mtime%3A1536350931/sites/default/files/imagecache/hero_570x300/product_series_hero_image_notext/179166_thrive_hero-clean.jpg",
    "hero_820x300": "https://img.gtvcdn.com/cdn/farfuture/fgm3uWzx6jJ33n1prf5i274OsJpa0C4u-Z7iguppGJo/mtime%3A1536350932/sites/default/files/imagecache/hero_820x300/product_series_hero_image_notext/179166_thrive_hero-clean.jpg",
    "hero_820x400": "https://img.gtvcdn.com/cdn/farfuture/fgm3uWzx6jJ33n1prf5i274OsJpa0C4u-Z7iguppGJo/mtime%3A1536350932/sites/default/files/imagecache/hero_820x400/product_series_hero_image_notext/179166_thrive_hero-clean.jpg",
    "hero_1070x400": "https://img.gtvcdn.com/cdn/farfuture/fgm3uWzx6jJ33n1prf5i274OsJpa0C4u-Z7iguppGJo/mtime%3A1536350932/sites/default/files/imagecache/hero_1070x400/product_series_hero_image_notext/179166_thrive_hero-clean.jpg",
    "hero_1440x400": "https://img.gtvcdn.com/cdn/farfuture/MoTbcTntNjMWkD40ENWcvoNecuEhsMrvOp83uKv5QrI/mtime%3A1536350933/sites/default/files/imagecache/hero_1440x400/product_series_hero_image_notext/179166_thrive_hero-clean.jpg"
  },
  "hero_image_withtext": {
    "hero_320x200": "https://img.gtvcdn.com/cdn/farfuture/OX9UX6klQUc8uVzs-NOcXf7ScFlQVJP5rDJaCFXZbdc/mtime%3A1536350928/sites/default/files/imagecache/hero_320x200/product_series_hero_image/179166_thrive_series_hero.jpg",
    "hero_570x200": "https://img.gtvcdn.com/cdn/farfuture/OX9UX6klQUc8uVzs-NOcXf7ScFlQVJP5rDJaCFXZbdc/mtime%3A1536350928/sites/default/files/imagecache/hero_570x200/product_series_hero_image/179166_thrive_series_hero.jpg",
    "hero_570x300": "https://img.gtvcdn.com/cdn/farfuture/E-gpvcj6OsVgybVd-AYKZCZ0noCIVaZqqYKAQ0lWCuY/mtime%3A1536350929/sites/default/files/imagecache/hero_570x300/product_series_hero_image/179166_thrive_series_hero.jpg",
    "hero_820x300": "https://img.gtvcdn.com/cdn/farfuture/E-gpvcj6OsVgybVd-AYKZCZ0noCIVaZqqYKAQ0lWCuY/mtime%3A1536350929/sites/default/files/imagecache/hero_820x300/product_series_hero_image/179166_thrive_series_hero.jpg",
    "hero_820x400": "https://img.gtvcdn.com/cdn/farfuture/E-gpvcj6OsVgybVd-AYKZCZ0noCIVaZqqYKAQ0lWCuY/mtime%3A1536350929/sites/default/files/imagecache/hero_820x400/product_series_hero_image/179166_thrive_series_hero.jpg",
    "hero_1070x400": "https://img.gtvcdn.com/cdn/farfuture/BGXCmwpiyX_2RG4Y9EdQE8aXtJi1bCgxxs87lCZ57P0/mtime%3A1536350930/sites/default/files/imagecache/hero_1070x400/product_series_hero_image/179166_thrive_series_hero.jpg",
    "hero_1440x400": "https://img.gtvcdn.com/cdn/farfuture/Z9pot11CHD7i31S9OG39i-4CJuHXE5XfaggiMxcff5A/mtime%3A1536350933/sites/default/files/imagecache/hero_1440x400/product_series_hero_image/179166_thrive_series_hero.jpg"
  },
  "keyart_16x9_withtext": {
    "keyart_304x171": "https://img.gtvcdn.com/cdn/farfuture/TMRQAt-wcOeTvcx96ipTqtDK4FPrmreTRe8SvYRRq_w/mtime%3A1536350925/sites/default/files/imagecache/keyart_304x171/img_16x9_landsacpe_title/179166_thrive_16x9.jpg",
    "keyart_864x486": "https://img.gtvcdn.com/cdn/farfuture/TMRQAt-wcOeTvcx96ipTqtDK4FPrmreTRe8SvYRRq_w/mtime%3A1536350925/sites/default/files/imagecache/keyart_864x486/img_16x9_landsacpe_title/179166_thrive_16x9.jpg",
    "keyart_1180x664": "https://img.gtvcdn.com/cdn/farfuture/8WIl4cJS6gYP-QyzjfD4xUbio8xKHfBlRhhHJGEPW5U/mtime%3A1536350926/sites/default/files/imagecache/keyart_1180x664/img_16x9_landsacpe_title/179166_thrive_16x9.jpg"
  },
  "keyart_16x9_notext": {
    "keyart_304x171": "https://img.gtvcdn.com/cdn/farfuture/hm_-lGlLFXJNgLh6-6ZYOfokod3BGpL4TeC2ZW8Ml-U/mtime%3A1536350926/sites/default/files/imagecache/keyart_304x171/img_16x9_landsacpe/179166_thrive_16x9_clean.jpg",
    "keyart_570x321": "https://img.gtvcdn.com/cdn/farfuture/hm_-lGlLFXJNgLh6-6ZYOfokod3BGpL4TeC2ZW8Ml-U/mtime%3A1536350926/sites/default/files/imagecache/keyart_570x321/img_16x9_landsacpe/179166_thrive_16x9_clean.jpg",
    "keyart_820x461": "https://img.gtvcdn.com/cdn/farfuture/AAxO0taGh2U9qiVrxseiyUqs4JGx8l2_nHP9FaRORrg/mtime%3A1536350927/sites/default/files/imagecache/keyart_820x461/img_16x9_landsacpe/179166_thrive_16x9_clean.jpg",
    "keyart_864x486": "https://img.gtvcdn.com/cdn/farfuture/AAxO0taGh2U9qiVrxseiyUqs4JGx8l2_nHP9FaRORrg/mtime%3A1536350927/sites/default/files/imagecache/keyart_864x486/img_16x9_landsacpe/179166_thrive_16x9_clean.jpg",
    "keyart_1070x602": "https://img.gtvcdn.com/cdn/farfuture/AAxO0taGh2U9qiVrxseiyUqs4JGx8l2_nHP9FaRORrg/mtime%3A1536350927/sites/default/files/imagecache/keyart_1070x602/img_16x9_landsacpe/179166_thrive_16x9_clean.jpg",
    "keyart_1180x664": "https://img.gtvcdn.com/cdn/farfuture/hnvoYzBHfKg2_04GA5nxlFXyOftJEsdjKikwzy10fJ0/mtime%3A1536350928/sites/default/files/imagecache/keyart_1180x664/img_16x9_landsacpe/179166_thrive_16x9_clean.jpg"
  },
  "fivestar": {
    "average": {
      "vote_cache_id": "0",
      "content_type": "product_series",
      "content_id": "179166",
      "value": "0.9362186788154897",
      "value_type": "percent",
      "tag": "vote",
      "function": "average",
      "timestamp": "1539211619"
    },
    "count": {
      "vote_cache_id": "0",
      "content_type": "product_series",
      "content_id": "179166",
      "value": "439",
      "value_type": "percent",
      "tag": "vote",
      "function": "count",
      "timestamp": "1539211619"
    },
    "up_count": {
      "value": 411
    },
    "down_count": {
      "value": 28
    }
  },
  "mediaAvailability": {
    "lbDL": 1
  }
}

/**
 * /**
 * Example response from https://brooklyn.gaia.com/v2/videos/series/[:seriesId]
 * - Will be an array of [episode] objects (example below)
 */
const exampleSeriesEpisodesData = { // episode data
  "seriesId": 179166,
  "seriesPath": "series/thrive-self-healing-ayurveda",
  "seriesTitle": "Thrive: Self-Healing with Ayurveda",
  "seriesVoteDownCount": 0,
  "seriesVoteUpCount": 0,
  "coverartImage": "sites/default/files/product_video_coverart_image/179676_t-sha_ancient-medicine-modern-application_cvr_0.jpg",
  "created": "2018-09-17",
  "episode": 1,
  "fitnessLevel": [],
  "fitnessStyle": [],
  "heroImage": null,
  "heroImageNotext": "sites/default/files/product_video_hero_image_notext/179676_t-sha_ancient-medicine-modern-application_hero-clean_0.jpg",
  "host": null,
  "meditationStyle": null,
  "path": "video/ancient-medicine-modern-application",
  "previewImage": null,
  "published": true,
  "season": 1,
  "title": "Ancient Medicine, Modern Application",
  "type": {
    "content": "video",
    "display": "normal",
    "product": "episode"
  },
  "voteDownCount": 32,
  "voteUpCount": 1241,
  "yogaLevel": [],
  "yogaStyle": [],
  "episodeCount": 22,
  "seasonCount": 1,
  "preview": {
    "duration": 66,
    "mediaId": 179926,
    "georestrictions": {
      "availability": "worldwide",
      "countries": []
    },
    "offerings": {
      "availability": "free",
      "subscriptions": []
    },
    "id": 179926,
    "isFree": false
  },
  "feature": {
    "duration": 1209,
    "mediaId": 179981,
    "georestrictions": {
      "availability": "worldwide",
      "countries": []
    },
    "offerings": {
      "availability": "onlyWith",
      "subscriptions": [
        253
      ]
    },
    "id": 179981,
    "isFree": false
  },
  "id": 179676,
  "isNew": false,
  "featuredType": null,
  "keyart16x9WithText": {
    "small": "https://img.gtvcdn.com/sites/default/files/imagecache/keyart_304x171/img_16x9_landsacpe_title/179676_t-sha_ancient-medicine-modern-application_16x9_0.jpg"
  },
  "teaser": "Learn how ayurvedic wisdom can help you enter into a deeper relationship with yourself and the natural world around you.\n",
  "body": "Ayurvedic medicine is based upon the principle of interconnection -- between self, nature, and universal consciousness. Learn how Ayurveda, the science of life, can empower you to align with the elements of nature, your own true essence, and the tapestry of consciousness that unites us all. \nWhile ayurveda is over 5000 years old, its principles still have importance in modern science and society. Where western medicine largely overlooks preventive methods and the roots of chronic disease, these concepts are at the forefront of ayurvedic medicine. In this episode, we also explore how ayurveda can be understood in terms of the five elements and the human experience in terms of the five koshas, or layers of self. Through studying ayurveda, we can come into a much deeper relationship with ourselves and the natural world around us.\n",
  "keyart16x9NoText": {
    "small": "https://img.gtvcdn.com/cdn/farfuture/70Nl4iZzVn7qBxSuOU38S_WaU7VBNSJ0ExT0OPmAHX8/mtime%3A1537306116/sites/default/files/imagecache/keyart_304x171/img_16x9_landsacpe/179676_t-sha_ancient-medicine-modern-application_16x9_clean_0.jpg",
    "medium": "https://img.gtvcdn.com/cdn/farfuture/70Nl4iZzVn7qBxSuOU38S_WaU7VBNSJ0ExT0OPmAHX8/mtime%3A1537306116/sites/default/files/imagecache/keyart_570x321/img_16x9_landsacpe/179676_t-sha_ancient-medicine-modern-application_16x9_clean_0.jpg",
    "large": "https://img.gtvcdn.com/cdn/farfuture/y5-YsZR4DgymAfrSb7evdHLPP7y_Z4yEdMfGRUpDFCA/mtime%3A1537306117/sites/default/files/imagecache/keyart_820x461/img_16x9_landsacpe/179676_t-sha_ancient-medicine-modern-application_16x9_clean_0.jpg"
  }
}
