var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",
    
    //State defaults
    state_description: "State Description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      name: "Hawaii"
    },
    AK: {
      name: "Alaska",
      color: "Green",
      hover_color: "white",
      description: "Favorable NIL climate - Alaska has no state income tax, meaning athletes keep 100% of their NIL earnings at the state level with no legislation needed."
    },
    FL: {
      name: "Florida",
      color: "Green",
      hover_color: "white",
      description: "Favorable NIL climate - Florida has no state income tax. SB 646 (passed 2021) also gives athletes broad NIL rights with minimal restrictions, making Florida one of the most recruit-friendly states in the country."
    },
    NH: {
      name: "New Hampshire",
      color: "Green",
      hover_color: "white",
      description: "Favorable NIL climate - New Hampshire fully eliminated its tax on interest and dividend income effective 2025, leaving the state with no personal income tax. Athletes owe nothing in state taxes on NIL earnings."
    },
    VT: {
      name: "Vermont"
    },
    ME: {
      name: "Maine"
    },
    RI: {
      name: "Rhode Island"
    },
    NY: {
      name: "New York",
      color: "Red",
      hover_color: "white",
      description: "Unfavorable NIL climate - New York imposes a top state income tax rate of 10.9%, one of the highest in the nation, with no NIL-specific tax relief passed or introduced. Athletes at schools like Syracuse and Buffalo face a heavy tax burden on NIL earnings."
    },
    PA: {
      name: "Pennsylvania"
    },
    NJ: {
      name: "New Jersey",
      color: "Green",
      hover_color: "white",
      description: "Favorable NIL legislation introduced - SB 4542 (introduced 2024): Would exempt NIL income from New Jersey state income tax. Bill has not yet been signed into law."
    },
    DE: {
      name: "Delaware"
    },
    MD: {
      name: "Maryland"
    },
    VA: {
      name: "Virginia"
    },
    WV: {
      name: "West Virginia",
      color: "Green",
      hover_color: "white",
      description: "Favorable NIL legislation introduced - A bill was introduced in West Virginia's legislature that would prevent the NCAA from launching investigations into NIL activities at WVU and other in-state schools, shielding athletes from eligibility consequences tied to NIL deals."
    },
    OH: {
      name: "Ohio"
    },
    IN: {
      name: "Indiana"
    },
    IL: {
      name: "Illinois",
      color: "Green",
      hover_color: "white",
      description: "Favorable NIL legislation introduced - HB 3871 (introduced 2025): Would allow a $100,000 state income tax deduction on NIL earnings for college athletes. Bill has not yet been signed into law."
    },
    CT: {
      name: "Connecticut"
    },
    WI: {
      name: "Wisconsin"
    },
    NC: {
      name: "North Carolina",
      color: "Green",
      hover_color: "white",
      description: "Favorable NIL legislation introduced - SB 563 (introduced 2024): Would exempt NIL income from North Carolina state income taxes. Bill has not yet been signed into law."
    },
    DC: {
      name: "District of Columbia"
    },
    MA: {
      name: "Massachusetts"
    },
    TN: {
      name: "Tennessee",
      color: "Green",
      hover_color: "white",
      description: "Favorable NIL climate - Tennessee has no state income tax, giving athletes at schools like Tennessee, Vanderbilt, and Memphis a built-in financial advantage over recruits considering schools in high-tax states."
    },
    AR: {
      name: "Arkansas",
      color: "Green",
      hover_color: "white",
      description: "Favorable NIL law - HB 1917 (passed April 2025): Exempts NIL income from the state income tax, retroactive to January 1, 2025. Arkansas is the first state in the country to enact a targeted NIL tax exemption."
    },
    MO: {
      name: "Missouri",
      color: "Green",
      hover_color: "white",
      description: "Favorable NIL law - Missouri passed legislation prohibiting the NCAA from launching investigations into NIL activities at Missouri schools. A separate law also allows high school recruits to begin earning NIL income as soon as they sign with an in-state college."
    },
    GA: {
      name: "Georgia",
      color: "Green",
      hover_color: "white",
      description: "Favorable NIL legislation introduced - SB 71 (introduced February 2025): Would exclude NIL compensation from athletes' state taxable income. Georgia was the first state to file such a tax exemption bill in 2025. Bill has not yet been signed into law."
    },
    SC: {
      name: "South Carolina",
      color: "Green",
      hover_color: "white",
      description: "Favorable NIL legislation introduced - HB 4395 (introduced 2025): Would allow a state income tax deduction for NIL earnings by college athletes. Bill has not yet been signed into law."
    },
    KY: {
      name: "Kentucky"
    },
    AL: {
      name: "Alabama",
      color: "Red",
      hover_color: "white",
      description: "Unfavorable NIL outcome - HB 240 (introduced 2025): Would have exempted NIL income from Alabama's state income tax (rates 2%-5%) for tax years 2025-2027. The bill failed to pass, leaving Alabama athletes at a tax disadvantage compared to SEC rivals in Texas, Florida, and Tennessee."
    },
    LA: {
      name: "Louisiana",
      color: "Red",
      hover_color: "white",
      description: "Unfavorable NIL outcome - HB 166 (introduced 2025): Would have allowed athletes to deduct all NIL earnings from their adjusted gross income. The bill failed to pass, leaving Louisiana athletes subject to the state's 3% income tax and at a competitive disadvantage against no-income-tax SEC schools."
    },
    MS: {
      name: "Mississippi",
      color: "Red",
      hover_color: "white",
      description: "Unfavorable NIL outcome - HB 4014 (introduced 2026): Would have exempted all NIL earnings from Mississippi's 4% state income tax. The bill passed the House 76-32 but died in the Senate Finance Committee, leaving Ole Miss and Mississippi State athletes at a tax disadvantage."
    },
    IA: {
      name: "Iowa"
    },
    MN: {
      name: "Minnesota",
      color: "Red",
      hover_color: "white",
      description: "Unfavorable NIL climate - Minnesota imposes a top state income tax rate of 9.85%, one of the highest in the country, with no NIL-specific tax relief legislation introduced. Athletes at the University of Minnesota face a steep tax burden on NIL earnings with no legislative relief in sight."
    },
    OK: {
      name: "Oklahoma"
    },
    TX: {
      name: "Texas",
      color: "Green",
      hover_color: "white",
      description: "Favorable NIL climate - Texas has no state income tax. Lawmakers have also passed legislation prohibiting the NCAA from launching investigations into NIL activities at Texas schools, providing both financial and regulatory advantages for athletes."
    },
    NM: {
      name: "New Mexico"
    },
    KS: {
      name: "Kansas"
    },
    NE: {
      name: "Nebraska"
    },
    SD: {
      name: "South Dakota",
      color: "Green",
      hover_color: "white",
      description: "Favorable NIL climate - South Dakota has no state income tax. Athletes at USD and SDSU keep 100% of their NIL earnings at the state level, giving the state a natural recruiting advantage."
    },
    ND: {
      name: "North Dakota"
    },
    WY: {
      name: "Wyoming",
      color: "Green",
      hover_color: "white",
      description: "Favorable NIL climate - Wyoming has no state income tax. Athletes at the University of Wyoming owe zero state taxes on NIL earnings, putting them on equal financial footing with athletes at powerhouse programs in other no-tax states."
    },
    MT: {
      name: "Montana"
    },
    CO: {
      name: "Colorado"
    },
    UT: {
      name: "Utah"
    },
    AZ: {
      name: "Arizona"
    },
    NV: {
      name: "Nevada",
      color: "Green",
      hover_color: "white",
      description: "Favorable NIL climate - Nevada has no state income tax. Athletes at UNLV and Nevada keep 100% of their NIL earnings at the state level, a significant financial advantage in the NIL era."
    },
    OR: {
      name: "Oregon",
      color: "Red",
      hover_color: "white",
      description: "Unfavorable NIL climate - Oregon imposes a top state income tax rate of 9.9% with no NIL-specific tax relief. A 2025 bill was introduced to prevent the NCAA from requiring athletes to disclose NIL earnings, but offered no financial tax advantage to recruits considering Oregon schools."
    },
    WA: {
      name: "Washington",
      color: "Green",
      hover_color: "white",
      description: "Favorable NIL climate - Washington has no state income tax on wages or NIL earnings. Athletes at the University of Washington and Washington State benefit from the state's lack of a personal income tax, a natural recruiting edge."
    },
    CA: {
      name: "California",
      color: "Red",
      hover_color: "white",
      description: "Unfavorable NIL climate - California's SB 206 (the Fair Pay to Play Act, passed 2019) pioneered NIL rights nationally, but the state's 13.3% top income tax rate — the highest in the nation — is a major financial deterrent. A UCLA athlete with a $2M NIL deal owes over $237,000 in state taxes alone, more than athletes with higher NIL valuations in no-tax states."
    },
    MI: {
      name: "Michigan"
    },
    ID: {
      name: "Idaho"
    },
    GU: {
      name: "Guam",
      hide: "yes"
    },
    VI: {
      name: "Virgin Islands",
      hide: "yes"
    },
    PR: {
      name: "Puerto Rico",
      hide: "yes"
    },
    MP: {
      name: "Northern Mariana Islands",
      hide: "yes"
    },
    AS: {
      name: "American Samoa",
      hide: "yes"
    }
  },
  locations: {
    "0": {
      name: "New York City",
      lat: 40.7143528,
      lng: -74.0059731
    },
    "1": {
      name: "Anchorage",
      lat: 61.2180556,
      lng: -149.9002778
    }
  },
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};
