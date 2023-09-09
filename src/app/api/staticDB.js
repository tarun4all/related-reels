export const userFeed = [
  {
    id: "xyz123",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    account: "be_like_bunny",
    desc: "",
    tags: ["rabbit", "humanity", "big_heart"],
  },
  {
    id: "xyz124",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    account: "motivations_123",
    desc: "",
    tags: ["elephant", "dream"],
  },
  {
    id: "xyz125",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    account: "The_Verge",
    desc: "HBO GO now works with Chromecast",
    tags: ["tech", "google", "chromecast", "HBO"],
  },
];

// previously decided for hash key with hastags but less context is there since tiktok is banned in India
export const relatedReels = [
  {
    id: "xyz126",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    account: "The_Verge",
    desc: "Introducing Chromecast. The easiest way to enjoy online video",
    tags: ["tech", "google", "chromecast", "HBO"],
  },
  {
    id: "xyz127",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    account: "The_Verge",
    desc: "TV—for when you want to make Buster's big meltdowns",
    tags: ["tech", "google", "chromecast", "HBO"],
  },
  {
    id: "xyz128",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    account: "Blender_Foundation",
    desc: "Sintel is an independently produced short film With initial funding provided by 1000s of donations via the internet",
    tags: ["tech"],
  },
];

export const RelatedProduct = {
  rabbit: [
    {
      imgUrl: "https://m.media-amazon.com/images/I/817he6ZCezL._AC_UY1100_.jpg",
      title: "Cute Bunny Tshirt",
      price: 20,
    },
    {
      imgUrl:
        "https://i.etsystatic.com/9923777/r/il/29e32f/3070447223/il_fullxfull.3070447223_8gze.jpg",
      title: "Real Men Tshirt",
      price: 23,
    },
  ],
  dream: [
    {
      imgUrl:
        "https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/27e8c196-ecdf-4ebf-a4de-ada7e15708cd/6.png",
      title: "Dream Big Tshirt",
      price: 20,
    },
    {
      imgUrl:
        "https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw172b245e/PLP/promobanner/Find_Your_Perfect_Match2.jpg",
      title: "Mountain Bike",
      price: 230,
    },
  ],
  google: [
    {
      imgUrl:
        "https://5.imimg.com/data5/SELLER/Default/2020/12/ON/IU/IY/117802970/google-chromecast.jpg",
      title: "Google Chromecast",
      price: 160,
    },
    {
      imgUrl:
        "https://images-cdn.ubuy.co.in/634ee91f3934f861cd482603-fire-tv-stick-with-alexa-voice-remote.jpg",
      title: "Amazon Firestick",
      price: 130,
    },
  ],
};
