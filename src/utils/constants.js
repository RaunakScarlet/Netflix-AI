export const USER_PROFILE =
    "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";
;

export const LOGIN_BACKGROUND = "https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const CDN_IMG_URL = "https://image.tmdb.org/t/p/w500";
    
export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    },
};


export const SUPPORTED_LANGUAGE = [
    {
        identifier: "en",
        name: "English",
    },
    {
        identifier: "hindi",
        name: "Hindi",
    },
    {
        identifier: "spanish",
        name: "Spanish",
    },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;