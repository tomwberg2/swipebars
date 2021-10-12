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
    id: 100,
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
    
    // Optionals
    price: '$$',
    info1: 'Beer Bar',
    info2: 'BBQ',
  },
  
];

export default data;
