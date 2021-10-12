import { DataT } from "../../types";
import IMAGE_01 from "../images/01.jpg";
import IMAGE_02 from "../images/02.jpg";
import IMAGE_03 from "../images/03.jpg";
import IMAGE_04 from "../images/04.jpg";
import IMAGE_05 from "../images/05.jpg";
import IMAGE_06 from "../images/06.jpg";
import IMAGE_07 from "../images/07.jpg";
import IMAGE_08 from "../images/08.jpg";
import IMAGE_09 from "../images/09.jpg";
import IMAGE_10 from "../images/10.jpg";

const data: DataT[] = [
  {
    id: '1Dq5inAHn4elueza5Ob2WQ',
    name: "Low and Slow Smokehouse",
    
    // reviews
    rating: '4.5',
    review_count: '28',

    // links
    url: 'https://www.yelp.com/biz/low-and-slow-smokehouse-stockholm?adjust_creative=TOa8a0g6nrrOYYfuEq-hAA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TOa8a0g6nrrOYYfuEq-hAA',
    image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/DRHmrUKV6VcfL_QG_ELRiQ/o.jpg',

    // contacts/location
    phone: '+46 8 15 00 85',
    address: 'Luntmakargatan 98',
    distance: "Distance to restaurant: 1699m",
    isOpen: true,
    latitude: 59.34413,
    longitude: 18.05715, 
    
    // Optionals
    price: '$$',
    info1: 'Beer Bar',
    info2: 'BBQ',
  },
  {
    id: '1z4GoFCju_U-t2Htm9CKqQ',
    name: 'Pharmarium',
    
    // reviews
    rating: '4.0',
    review_count: '101',

    // links
    url: 'https://www.yelp.com/biz/pharmarium-stockholm?adjust_creative=TOa8a0g6nrrOYYfuEq-hAA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TOa8a0g6nrrOYYfuEq-hAA',
    image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/Bx3QYClk_yKcw6G8zHGWVQ/o.jpg',

    // contacts/location
    phone: '+46 8 20 08 10',
    address: 'Stortorget 7',
    distance: "Distance to restaurant: 675m",
    isOpen: true,
    latitude: 59.3248995919235,
    longitude: 18.071048296988, 
    
    // Optionals
    price: '$$',
    info1: 'Cocktail Bars',
    info2: 'Modern European',
  },
  {
    id: 'f7Syjwdthv_hD-TydWPBNw',
    name: 'Dovas',
    
    // reviews
    rating: '3.0',
    review_count: '11',

    // links
    url: 'https://www.yelp.com/biz/dovas-stockholm-2?adjust_creative=TOa8a0g6nrrOYYfuEq-hAA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=TOa8a0g6nrrOYYfuEq-hAA',
    image_url: 'https://s3-media3.fl.yelpcdn.com/bphoto/BmGV6mEleEUzT6AI7_nBxg/o.jpg',

    // contacts/location
    phone: '+46 8 650 80 49',
    address: 'Sankt Eriksgatan 53 A',
    distance: "Distance to restaurant: 1823m",
    isOpen: true,
    latitude: 59.33561,
    longitude: 18.03321, 
    
    // Optionals
    price: '$',
    info1: 'Pubs',
  },
  
];

export default data;
