import { render, screen } from "@testing-library/react";
import App from "./App";

const defaultLanguageVariables = {
  sell_now: {
    language_key: "sell_now",
    lang_content: "Sell Now",
    language_code: "en",
    page_id: "common",
  },
  brand: {
    language_key: "brand",
    lang_content: "Brand",
    language_code: "en",
    page_id: "common",
  },
  cars: {
    language_key: "cars",
    lang_content: "Cars",
    language_code: "en",
    page_id: "common",
  },
  model_year: {
    language_key: "model_year",
    lang_content: "Model Year",
    language_code: "en",
    page_id: "common",
  },
  registration_year: {
    language_key: "registration_year",
    lang_content: "Registration year",
    language_code: "en",
    page_id: "common",
  },
  location: {
    language_key: "location",
    lang_content: "Location",
    language_code: "en",
    page_id: "common",
  },
  category: {
    language_key: "category",
    lang_content: "Category",
    language_code: "en",
    page_id: "common",
  },
  results_found: {
    language_key: "results_found",
    lang_content: "Total Results Found",
    language_code: "en",
    page_id: "common",
  },
  circle_sell_now: {
    language_key: "circle_sell_now",
    lang_content: "Sell Now",
    language_code: "en",
    page_id: "common",
  },
  footer_warranties: {
    language_key: "footer_warranties",
    lang_content: "Warranties & Bhalogari®",
    language_code: "en",
    page_id: "common",
  },
  footer_research_articles: {
    language_key: "footer_research_articles",
    lang_content: "Research Articles",
    language_code: "en",
    page_id: "common",
  },
  footer_faq: {
    language_key: "footer_faq",
    lang_content: "FAQ and Support",
    language_code: "en",
    page_id: "common",
  },
  footer_compare_car: {
    language_key: "footer_compare_car",
    lang_content: "Compare Car",
    language_code: "en",
    page_id: "common",
  },
  footer_more: {
    language_key: "footer_more",
    lang_content: "MORE",
    language_code: "en",
    page_id: "common",
  },
  footer_refund_policy: {
    language_key: "footer_refund_policy",
    lang_content: "Refund Policy\n",
    language_code: "en",
    page_id: "common",
  },
  footer_privay_policy: {
    language_key: "footer_privay_policy",
    lang_content: "Privacy Policy",
    language_code: "en",
    page_id: "common",
  },
  footer_terms_conditions: {
    language_key: "footer_terms_conditions",
    lang_content: "Terms and Conditions",
    language_code: "en",
    page_id: "common",
  },
  footer_contact_us: {
    language_key: "footer_contact_us",
    lang_content: "Contact Us",
    language_code: "en",
    page_id: "common",
  },
  footer_about_us: {
    language_key: "footer_about_us",
    lang_content: "About Us",
    language_code: "en",
    page_id: "common",
  },
  footer_about_bhalogari: {
    language_key: "footer_about_bhalogari",
    lang_content: "ABOUT BHALOGARI",
    language_code: "en",
    page_id: "common",
  },
  footer_car_servicing: {
    language_key: "footer_car_servicing",
    lang_content: "Car Servicing at your doorstep",
    language_code: "en",
    page_id: "common",
  },
  footer_verify_auction_sheet: {
    language_key: "footer_verify_auction_sheet",
    lang_content: "Verify Auction Sheet",
    language_code: "en",
    page_id: "common",
  },
  footer_buy_bike: {
    language_key: "footer_buy_bike",
    lang_content: "Buy Bike",
    language_code: "en",
    page_id: "common",
  },
  footer_sell_car: {
    language_key: "footer_sell_car",
    lang_content: "Sell Car",
    language_code: "en",
    page_id: "common",
  },
  footer_buy_car: {
    language_key: "footer_buy_car",
    lang_content: "Buy Car",
    language_code: "en",
    page_id: "common",
  },
  footer_services: {
    language_key: "footer_services",
    lang_content: "Services",
    language_code: "en",
    page_id: "common",
  },
  footer_desc: {
    language_key: "footer_desc",
    lang_content:
      "Bhalogari.com is the leading search car venture in Bangladesh, that helps users buy cars that are right for them.",
    language_code: "en",
    page_id: "common",
  },
  feedback: {
    language_key: "feedback",
    lang_content: "Feedback",
    language_code: "en",
    page_id: "home",
  },
  featured: {
    language_key: "featured",
    lang_content: "Featured",
    language_code: "en",
    page_id: "common",
  },
  engine_capacity: {
    language_key: "engine_capacity",
    lang_content: "Engine Capacity",
    language_code: "en",
    page_id: "home",
  },
  seating_capacity: {
    language_key: "seating_capacity",
    lang_content: "Seating Capacity",
    language_code: "en",
    page_id: "home",
  },
  mileage: {
    language_key: "mileage",
    lang_content: "Mileage",
    language_code: "en",
    page_id: "home",
  },
  price: {
    language_key: "price",
    lang_content: "Price",
    language_code: "en",
    page_id: "common",
  },
  specification: {
    language_key: "specification",
    lang_content: "Specifications",
    language_code: "en",
    page_id: "home",
  },
  search_by: {
    language_key: "search_by",
    lang_content: "Search by",
    language_code: "en",
    page_id: "common",
  },
  body_type: {
    language_key: "body_type",
    lang_content: "Body Type",
    language_code: "en",
    page_id: "common",
  },
  choose_by: {
    language_key: "choose_by",
    lang_content: "Choose by",
    language_code: "en",
    page_id: "common",
  },
  maker: {
    language_key: "maker",
    lang_content: "Maker",
    language_code: "en",
    page_id: "common",
  },
  sell_car: {
    language_key: "sell_car",
    lang_content: "Sell Car",
    language_code: "en",
    page_id: "common",
  },
  how_to_buy: {
    language_key: "how_to_buy",
    lang_content: "How to buy your car with Bhalogari?",
    language_code: "en",
    page_id: "common",
  },
  latest_offers_updates: {
    language_key: "latest_offers_updates",
    lang_content: "Latest Offers & Updates",
    language_code: "en",
    page_id: "common",
  },
  real_user_review: {
    language_key: "real_user_review",
    lang_content: "Real User Reviews",
    language_code: "en",
    page_id: "home",
  },
  expert_previews: {
    language_key: "expert_previews",
    lang_content: "Expert Previews",
    language_code: "en",
    page_id: "home",
  },
  video_section_title: {
    language_key: "video_section_title",
    lang_content:
      "Watch videos from the number one car review channel in Bangladesh",
    language_code: "en",
    page_id: "home",
  },
  our_customer: {
    language_key: "our_customer",
    lang_content: "Our Customer",
    language_code: "en",
    page_id: "home",
  },
  total_results_found: {
    language_key: "total_results_found",
    lang_content: "Total Results Found:",
    language_code: "en",
    page_id: "home",
  },
  view_all: {
    language_key: "view_all",
    lang_content: "View All",
    language_code: "en",
    page_id: "common",
  },
  featured_used_cars: {
    language_key: "featured_used_cars",
    lang_content: "Featured Used Cars",
    language_code: "en",
    page_id: "home",
  },
  featured_reconditioned_cars: {
    language_key: "featured_reconditioned_cars",
    lang_content: "Featured Reconditioned Cars",
    language_code: "en",
    page_id: "home",
  },
  featured_new_cars: {
    language_key: "featured_new_cars",
    lang_content: "Featured New Cars",
    language_code: "en",
    page_id: "home",
  },
  search: {
    language_key: "search",
    lang_content: "Search",
    language_code: "en",
    page_id: "home",
  },
  cc_3000_above: {
    language_key: "cc_3000_above",
    lang_content: "3,000 cc or above",
    language_code: "en",
    page_id: "home",
  },
  cc_2500_2999: {
    language_key: "cc_2500_2999",
    lang_content: "2,500 to 2,999 cc",
    language_code: "en",
    page_id: "home",
  },
  cc_2000_2499: {
    language_key: "cc_2000_2499",
    lang_content: "2,000 to 2,499 cc",
    language_code: "en",
    page_id: "home",
  },
  cc_1500_1999: {
    language_key: "cc_1500_1999",
    lang_content: "1,500 to 1,999 cc",
    language_code: "en",
    page_id: "home",
  },
  cc_1000_1499: {
    language_key: "cc_1000_1499",
    lang_content: "1,000 to 1,499 cc",
    language_code: "en",
    page_id: "home",
  },
  cc_800_less: {
    language_key: "cc_800_less",
    lang_content: "800 cc or less",
    language_code: "en",
    page_id: "home",
  },
  "search_by_engine_capacity ": {
    language_key: "search_by_engine_capacity ",
    lang_content: "Search by Engine Capacity",
    language_code: "en",
    page_id: "home",
  },
  or_above: {
    language_key: "or_above",
    lang_content: "or above",
    language_code: "en",
    page_id: "home",
  },
  seats: {
    language_key: "seats",
    lang_content: "Seats",
    language_code: "en",
    page_id: "home",
  },
  "search_by_seating_capacity ": {
    language_key: "search_by_seating_capacity ",
    lang_content: "Search by Seating Capacity",
    language_code: "en",
    page_id: "home",
  },
  km_150k_above: {
    language_key: "km_150k_above",
    lang_content: "Over 1,50,000 km",
    language_code: "en",
    page_id: "home",
  },
  km_100k_150k: {
    language_key: "km_100k_150k",
    lang_content: "1,00,000 to 1,50,000 km",
    language_code: "en",
    page_id: "home",
  },
  km_50k_100k: {
    language_key: "km_50k_100k",
    lang_content: "50,000 to 1,00,000 km",
    language_code: "en",
    page_id: "home",
  },
  km_30k_50k: {
    language_key: "km_30k_50k",
    lang_content: "30,000 to 50,000 km",
    language_code: "en",
    page_id: "home",
  },
  km_10k_30k: {
    language_key: "km_10k_30k",
    lang_content: "10,000 to 30,000 km",
    language_code: "en",
    page_id: "home",
  },
  km_10k_below: {
    language_key: "km_10k_below",
    lang_content: "10,000 km or below",
    language_code: "en",
    page_id: "home",
  },
  km: {
    language_key: "km",
    lang_content: "km",
    language_code: "en",
    page_id: "home",
  },
  search_by_mileage: {
    language_key: "search_by_mileage",
    lang_content: "Search by Mileage",
    language_code: "en",
    page_id: "home",
  },
  lacs_50_above: {
    language_key: "lacs_50_above",
    lang_content: "50 Lacs or above ",
    language_code: "en",
    page_id: "home",
  },
  lacs_40_50: {
    language_key: "lacs_40_50",
    lang_content: "40 - 50 Lacs",
    language_code: "en",
    page_id: "home",
  },
  lacs_30_40: {
    language_key: "lacs_30_40",
    lang_content: "30 - 40 Lacs",
    language_code: "en",
    page_id: "home",
  },
  lacs_20_30: {
    language_key: "lacs_20_30",
    lang_content: "20 - 30 Lacs",
    language_code: "en",
    page_id: "home",
  },
  lacs_10_20: {
    language_key: "lacs_10_20",
    lang_content: "10 - 20 Lacs",
    language_code: "en",
    page_id: "home",
  },
  lacs_1_10: {
    language_key: "lacs_1_10",
    lang_content: "1 - 10 Lacs",
    language_code: "en",
    page_id: "home",
  },
  lacs: {
    language_key: "lacs",
    lang_content: "Lacs",
    language_code: "en",
    page_id: "home",
  },
  "search_by_price ": {
    language_key: "search_by_price ",
    lang_content: "Search by Price",
    language_code: "en",
    page_id: "home",
  },
  choose_by_body_type: {
    language_key: "choose_by_body_type",
    lang_content: "Choose by Body Type",
    language_code: "en",
    page_id: "home",
  },
  choose_by_maker: {
    language_key: "choose_by_maker",
    lang_content: "Choose by Maker",
    language_code: "en",
    page_id: "home",
  },
  why_trust_bhalogari: {
    language_key: "why_trust_bhalogari",
    lang_content: "Why Trust Bhalogari?",
    language_code: "en",
    page_id: "home",
  },
  view_more: {
    language_key: "view_more",
    lang_content: "View More",
    language_code: "en",
    page_id: "common",
  },
  popular_brands: {
    language_key: "popular_brands",
    lang_content: "Popular Brands",
    language_code: "en",
    page_id: "common",
  },
  find_car: {
    language_key: "find_car",
    lang_content: "Find cars",
    language_code: "en",
    page_id: "common",
  },
  model: {
    language_key: "model",
    lang_content: "Model",
    language_code: "en",
    page_id: "common",
  },
  select: {
    language_key: "select",
    lang_content: "Select",
    language_code: "en",
    page_id: "common",
  },
  new: {
    language_key: "new",
    lang_content: "New",
    language_code: "en",
    page_id: "common",
  },
  reconditioned: {
    language_key: "reconditioned",
    lang_content: "Reconditioned",
    language_code: "en",
    page_id: "common",
  },
  used: {
    language_key: "used",
    lang_content: "used",
    language_code: "en",
    page_id: "common",
  },
  news_and_reviews: {
    language_key: "news_and_reviews",
    lang_content: "News and Reviews",
    language_code: "en",
    page_id: "common",
  },
  car_servicing: {
    language_key: "car_servicing",
    lang_content: "Car Servicing",
    language_code: "en",
    page_id: "common",
  },
  bikes: {
    language_key: "bikes",
    lang_content: "Bikes",
    language_code: "en",
    page_id: "common",
  },
  car_compare: {
    language_key: "car_compare",
    lang_content: "Car Compare",
    language_code: "en",
    page_id: "common",
  },
  new_car: {
    language_key: "new_car",
    lang_content: "New Car",
    language_code: "en",
    page_id: "common",
  },
  used_car: {
    language_key: "used_car",
    lang_content: "Used Car ",
    language_code: "en",
    page_id: "common",
  },
  buy_now: {
    language_key: "buy_now",
    lang_content: "Buy Now",
    language_code: "en",
    page_id: "common",
  },
  top_search_placeholder: {
    language_key: "top_search_placeholder",
    lang_content: "Search by Make, Model, or Keyword",
    language_code: "en",
    page_id: "common",
  },
  reconditioned_car: {
    language_key: "reconditioned_car",
    lang_content: "Reconditioned Car",
    language_code: "en",
    page_id: "common",
  },
  buy_now_list: {
    language_key: "buy_now_list",
    lang_content: "Buy Now",
    language_code: "en",
    page_id: "common",
  },
};

beforeEach(() => {
  var storageMock = (function () {
    var store = {};
    return {
      getItem: function (key) {
        return store[key];
      },
      setItem: function (key, value) {
        store[key] = value.toString();
      },
      clear: function () {
        store = {};
      },
      removeItem: function (key) {
        delete store[key];
      },
    };
  })();
  Object.defineProperty(window, "localStorage", { value: storageMock });
  Object.defineProperty(window, "sessionStorage", { value: storageMock });

  window.sessionStorage.setItem(
    "langVariables",
    JSON.stringify(defaultLanguageVariables)
  );
});

/*
Seeing [BUY NOW] should confirm that the page loads completely.
@author Chayapol Moemeng
@date 06-03-2022
*/
test("renders BUY NOW button", () => {
  // window.scrollTo is not implemented in test,
  // therefore mock to suppress the error message.
  window.scrollTo = jest.fn();

  // window.sessionStorage = {
  //   getItem: jest.fn(),
  //   setItem: jest.fn(),
  //   clear: jest.fn(),
  // };

  render(<App />);
  const linkElement = screen.getByText(/buy now/i);
  expect(linkElement).toBeInTheDocument();
});
