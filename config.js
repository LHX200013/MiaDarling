var config = {
    style: 'mapbox://styles/lhx200013/clsiz51dk00gf01pfezb2doam',
    accessToken: 'pk.eyJ1IjoibGh4MjAwMDEzIiwiYSI6ImNsbGVydnExMDBna2EzcnFodHd0aHNnc20ifQ.HYYEqVszLRoxQxmP4g2-LA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Star Hotels in Singapore',
    subtitle: 'Singapore Midscale & Upscale Hotel Location Profile',
    byline: 'By LIU HAIXIAO',
    //footer: 'Source: HDB and URA. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            //title: 'HOTELS in Singapore',
            description: '<h1>HOTELS in Singapore</h1><p>The hotel market in Singapore is diverse and highly developed, reflecting the status as a significant global center for tourism and business.</p><br><p><h2>Wide Range of Options</h2></p><p>Singapore offers a broad selection of accommodations, from luxury five-star hotels to budget inns, catering to the needs and budgets of different visitors. Luxury hotels like Marina Bay Sands, The St. Regis, and The Fullerton Hotel provide top-notch room facilities and services, while budget hotel chains like Hotel 81 and Fragrance Hotel offer affordable lodging options.</p><h2>Unique Locations</h2><p>Many hotels in Singapore boast unique geographical locations, such as being situated along the Singapore River, Marina Bay, or in the heart of shopping districts downtown. These locations not only facilitate exploration of major attractions but also provide memorable urban views.</p><h2>World-Class Service</h2><p>Singapore hotels are known for their high standard of service. Many hotels offer multilingual staff, high-quality dining services, and personalized guest experiences to meet the demands of international visitors.</p><a href="https://www.booking.com/country/sg.en.html?aid=339462&label=msn-j4AF6l1wu46sgRUA9Wa1hQ-80676782278860:tikwd-16777781596:loc-164:neo:mte:lp164:dec:qssingapore%20hotel&utm_campaign=Singapore&utm_medium=cpc&utm_source=bing&utm_term=j4AF6l1wu46sgRUA9Wa1hQ&msclkid=418979c9af7d139ff5b21c0399f73d69"> <strong>Read more</strong></a>',
            location: {
                center: [103.81350, 1.34941],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hotel',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'tourist',
                    opacity: 0,
                    duration: 1000              
                },
                {
                    layer: 'commercial',
                    opacity: 0,
                    duration: 1000                
                },
                {
                    layer: 'park',
                    opacity: 0,
                    duration: 1000                
                },
                {
                    layer: 'marina',
                    opacity: 0,
                    duration: 1000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'hotel',
                    opacity: 1
                },
                {
                    layer: 'tourist',
                    opacity: 0                
                },
                {
                    layer: 'commercial',
                    opacity: 0                
                },
                {
                    layer: 'park',
                    opacity: 0                
                },
                {
                    layer: 'marina',
                    opacity: 0                
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            //title: 'Housing provision',
            image: './sg.png',
            description: '<h1>Hotel Concentration</h1><p>Most of the hotels in Singapore are located in Outram Park, China Town, Raffles Place, City Hall, Little India, etc. The reason for the concentration in the city centre area is closely related to economic, transport, tourism and business activities.</p>',
            location: {
                center: [103.85315, 1.29677],
                zoom: 13.72,
                pitch: 0,
                bearing: 0,
                speed: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hotel',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'tourist',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'commercial',
                    opacity: 0,
                    duration: 1000              
                },
                {
                    layer: 'park',
                    opacity: 0,
                    duration: 1000              
                },
                {
                    layer: 'marina',
                    opacity: 0,
                    duration: 1000              
                }
            ],
            onChapterExit: [
                {
                    layer: 'hotel',
                    opacity: 1
                },
                {
                    layer: 'tourist',
                    opacity: 0                
                },
                {
                    layer: 'commercial',
                    opacity: 0               
                },
                {
                    layer: 'park',
                    opacity: 0               
                },
                {
                    layer: 'marina',
                    opacity: 0               
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            //title: 'Punggol / Senkang',
            image: './marina.png',
            description: '<h1>Most Expensive Hotel in Singapore</h1><p>Marina Bay Sands is one of Singapores iconic landmarks, designed by the world-renowned architect Moshe Safdie and officially opened in 2010. This integrated resort is located in the heart of Singapore, known for its unique trio of towers and the SkyPark atop them, becoming an indispensable part of Singapores skyline.</p>',
            location: {
                center: [103.86138, 1.28420],
                zoom: 16.63,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hotel',
                    opacity: 0,
                    duration: 1000                              
                },
                {
                    layer: 'tourist',
                    opacity: 0,
                    duration: 1000                              
                },
                {
                    layer: 'commercial',
                    opacity: 0.6,
                    duration: 1000              
                },
                {
                    layer: 'park',
                    opacity: 0.6,
                    duration: 1000              
                },
                {
                    layer: 'marina',
                    opacity: 0.3,
                    duration: 1000              
                }
            ],
            onChapterExit: [
                {
                    layer: 'hotel',
                    opacity: 0
                },
                {
                    layer: 'tourist',
                    opacity: 1                
                },
                {
                    layer: 'commercial',
                    opacity: 0.6                
                },
                {
                    layer: 'park',
                    opacity: 0.6                
                },
                {
                    layer: 'marina',
                    opacity: 0.3                
                }
            ]
        },
        {
            id: 'forth-container',
            alignment: 'right',
            hidden: false,
            //title: 'Punggol / Senkang',
            description: '<h1>Reasons to be the Most Expensive Hotel</h1><p>The hotel is surrounded by numerous commercial facilities and green parks, as well as many world famous tourist attractions such as Merlion Park, Clarke Quay and Sentosa.</p><br><h2>Geographic Location</h2><p>Located in the Marina Bay area, close to the Singapore River and the city center, Marina Bay Sands prime location allows easy access to other major attractions such as Gardens by the Bay, the Singapore Flyer, and Orchard Road. This strategic positioning enhances the tourist experience by providing convenience and connectivity to explore Singapores key sights.</p><h2>Significant Events and Impacts</h2><p>Since its inauguration, Marina Bay Sands has become one of Singapores most iconic tourist destinations, significantly impacting the tourism industry and the international image of Singapore. Attracting visitors worldwide, it has also become the preferred venue for various international conferences and events, further cementing Singapores status as a crucial global hub for conferences and tourism.</p>',
            location: {
                center: [103.85216, 1.28058],
                zoom: 14.93,
                pitch: 55.5,
                bearing: -13.6,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hotel',
                    opacity: 0,
                    duration: 1000                              
                },
                {
                    layer: 'tourist',
                    opacity: 1,
                    duration: 1000                              
                },
                {
                    layer: 'commercial',
                    opacity: 0.8,
                    duration: 1000              
                },
                {
                    layer: 'park',
                    opacity: 0.8,
                    duration: 1000              
                },
                {
                    layer: 'marina',
                    opacity: 0.3,
                    duration: 1000              
                }
            ],
            onChapterExit: [
                {
                    layer: 'hotel',
                    opacity: 0
                },
                {
                    layer: 'tourist',
                    opacity: 1                
                },
                {
                    layer: 'commercial',
                    opacity: 1                
                },
                {
                    layer: 'park',
                    opacity: 1                
                },
                {
                    layer: 'marina',
                    opacity: 0.3                
                }
            ]
        }
    ]
};