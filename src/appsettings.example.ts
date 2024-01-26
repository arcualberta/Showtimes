import type { Guid } from "guid-typescript";

export const googleLocalClientId = "589183038778-u256nlels7v2443j3h1unvtp367f80s4.apps.googleusercontent.com";
export const googleProductionClientId = "589183038778-i21iod3d3obrmot5vk3ap59akglg5a9u.apps.googleusercontent.com";

//export const localQueryApi = "https://localhost:5020/api/solr-search"
export const localQueryApi = "https://showtimes.artsrn.ualberta.ca/solr"
export const localQueryApiDup = "https://showtimes.artsrn.ualberta.ca/solr"
export const productionQueryApi = "/db/api/solr-search"
export const productionQueryApiDup = "/db2/api/solr-search"

export const localAuthApi = "https://auth.artsrn.ualberta.ca"
export const productionAuthApi = "https://auth.artsrn.ualberta.ca"

export const adminUsers = ['ranaweer@ualberta.ca', 'iwickram@ualberta.ca', 'debver@ualberta.ca']

export const appId = "22edb968-b74c-4826-bef0-6fda9d6c349d" as unknown as Guid //on prod auth.api
export const showtimesTenantId = "8deac4c1-6f12-43d8-9998-f59c814f0db6" as unknown as Guid //on prod auth.api

//fields that're specific to "showtimes" that need to be excluded from the solr-item-editor -- these are solr field name
export const applicationSpecificExcludedFields=['entry_type_s','data_src_s','showtime_key_t','movie_id_i','parent_id_i',
                                            'theater_id_i','origin_parent_id_i'];
export enum eUiMode{
    Default = 0,
    Raw,
    Curated
}

export enum eFieldType{
    Text = 1,
    Date,
    Integer,
    Decimal,
    Email,
    Checkbox,
    DropDown,
    Radio
}

export interface SearchFieldDefinition{
    name: string,
    label: string,
    type: eFieldType,
    options: string[],
    entryType: number | number[]
}

export enum eShowtimeEntryType {
    Movie = 1,
    Theater,
    Showtime
}

export interface SolrEntryType {
    name: string,
    label: string,
    entryType: number
}

export const entryTypeFieldName = "entry_type_s"; 
export const entryTypeFieldOptions = [{name:"movie", label:"Movies", entryType: eShowtimeEntryType.Movie}, {name:"theater", label:"Theaters", entryType: eShowtimeEntryType.Theater}, {name:"showtime", label:"Showtimes", entryType: eShowtimeEntryType.Showtime}] as SolrEntryType[];
export const dataSourceOptions = [{label:"ALL", constraint:""}, {label:"New", constraint:"-data_src_s:*"}, {label:"Old", constraint:"data_src_s:kinomatics"}];

export const solrFields:SearchFieldDefinition[] = [
    { name: "entry_type_s", label: "Entry Type", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime]},
    { name: "instance_count_i", label: "Instance Count", type: eFieldType.Integer, options: [], entryType: [eShowtimeEntryType.Theater] },    
    { name: "entry_src_s", label: "Source", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime]},
    { name: "movie_id_i", label: "Movie ID", type: eFieldType.Integer, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "parent_id_i", label: "Parent ID", type: eFieldType.Integer, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "title_t", label: "Title", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "pictures_ts", label: "Pictures", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
//    { name: "hipictures_ts", label: "Hi-pictures", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "rating_t", label: "Rating", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "advisory_t", label: "Advisory", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "genres_ts", label: "Genres", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "casts_ts", label: "Cast", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "directors_ts", label: "Directors", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "release_date_dt", label: "Release Date", type: eFieldType.Date, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "release_notes_t", label: "Release Notes", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
//    { name: "release_dvd_t", label: "Release DVD", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "running_time_i", label: "Running Time", type: eFieldType.Integer, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "official_site_s", label: "Official Site", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "distributors_ts", label: "Distributes", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "producers_ts", label: "Producers", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "writers_ts", label: "Writers", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "synopsis_t", label: "Synopsis", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
//    { name: "lang_s", label: "Language", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "intl_country_s", label: "International country", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "intl_name_t", label: "International name", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "intl_cert_t", label: "International cert", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "intl_advisory_t", label: "International advisory", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "intl_release_dt", label: "International release date", type: eFieldType.Date, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "intl_poster_t", label: "International poster", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },


    { name: "showtime_key_t", label: "Showtime composite ID", type: eFieldType.Text, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "movie_name_t", label: "Movie name", type: eFieldType.Text, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "show_date_dt", label: "Show date", type: eFieldType.Date, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "showtimes_ts", label: "Show time (HH:mm)", type: eFieldType.Text, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "showtime_minutes_is", label: "Show time (minutes from 12:00 AM)", type: eFieldType.Integer, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "show_attributes_ts", label: "Show attrbibutes", type: eFieldType.Text, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "show_passes_t", label: "Show passes", type: eFieldType.Radio, options:["Y", "N"], entryType: eShowtimeEntryType.Showtime },
    { name: "show_festival_t", label: "Show festival", type: eFieldType.Text, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "show_with_t", label: "Show with", type: eFieldType.Text, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "show_sound_t", label: "Show sound", type: eFieldType.Text, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "show_comments_ts", label: "Show comments", type: eFieldType.Text, options: [], entryType: eShowtimeEntryType.Showtime },

    
    { name: "theater_id_i", label: "Theater ID", type: eFieldType.Integer, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_name_t", label: "Theater name", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_address_t", label: "Theater address", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_city_t", label: "Theater city", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_state_t", label: "Theater state", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_zip_t", label: "Theater zip", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_phone_t", label: "Theater phone", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_attributes_t", label: "Theater attributes", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_ticketing_t", label: "Theater ticketing", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
//    { name: "theater_closed_reason_t", label: "Theater closed reason", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_area_t", label: "Theater area", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_location_t", label: "Theater location", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_market_t", label: "Theater market", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_screens_i", label: "Theater Screens", type: eFieldType.Integer, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_seating_t", label: "Theater seating", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_adult_t", label: "Theater adult", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_child_t", label: "Theater child", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_senior_t", label: "Theater senior", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_country_s", label: "Theater country", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
//    { name: "theater_url_t", label: "Theater URL", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
//    { name: "theater_chain_id_t", label: "Theater chain ID", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_adult_bargain_t", label: "Theater adult bargain", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
//    { name: "theater_senior_bargain_t", label: "Theater senior bargain", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_child_bargain_t", label: "Theater child bargain", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
//    { name: "theater_special_bargain_t", label: "Theater special bargain", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_adult_super_t", label: "Theater adult super", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
//    { name: "theater_senior_super_t", label: "Theater senior super", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
//    { name: "theater_chuld_super_t", label: "Theater child super", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_price_comment_t", label: "Theater price comment", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_extra_t", label: "Theater extra", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_desc_t", label: "Theater description", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
//    { name: "theater_type_t", label: "Theater type", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_lon_d", label: "Theater longitude", type: eFieldType.Decimal, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_lat_d", label: "Theater latitude", type: eFieldType.Decimal, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
];

/*

//Filed list before remove less-useful emails as of email from Deb on 2023-04-19

export const solrFields:SearchFieldDefinition[] = [
    { name: "entry_type_s", label: "Entry Type", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime]},
    { name: "instance_count_i", label: "Instance Count", type: eFieldType.Integer, options: [], entryType: [eShowtimeEntryType.Theater] },    
    { name: "entry_src_s", label: "Source", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime]},
    { name: "movie_id_i", label: "Movie ID", type: eFieldType.Integer, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "parent_id_i", label: "Parent ID", type: eFieldType.Integer, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "title_t", label: "Title", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "pictures_ts", label: "Pictures", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "hipictures_ts", label: "Hi-pictures", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "rating_t", label: "Rating", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "advisory_t", label: "Advisory", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "genres_ts", label: "Genres", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "casts_ts", label: "Cast", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "directors_ts", label: "Directors", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "release_date_dt", label: "Release Date", type: eFieldType.Date, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "release_notes_t", label: "Release Notes", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "release_dvd_t", label: "Release DVD", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "running_time_i", label: "Running Time", type: eFieldType.Integer, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "official_site_s", label: "Official Site", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "distributors_ts", label: "Distributes", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "producers_ts", label: "Producers", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "writers_ts", label: "Writers", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "synopsis_t", label: "Synopsis", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "lang_s", label: "Language", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "intl_country_s", label: "International country", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "intl_name_t", label: "International name", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "intl_cert_t", label: "International cert", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "intl_advisory_t", label: "International advisory", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "intl_release_dt", label: "International release date", type: eFieldType.Date, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },
    { name: "intl_poster_t", label: "International poster", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Movie, eShowtimeEntryType.Showtime] },


    { name: "showtime_key_t", label: "Showtime composite ID", type: eFieldType.Text, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "movie_name_t", label: "Movie name", type: eFieldType.Text, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "show_date_dt", label: "Show date", type: eFieldType.Date, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "showtimes_ts", label: "Show time (HH:mm)", type: eFieldType.Text, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "showtime_minutes_is", label: "Show time (minutes from 12:00 AM)", type: eFieldType.Integer, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "show_attributes_ts", label: "Show attrbibutes", type: eFieldType.Text, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "show_passes_t", label: "Show passes", type: eFieldType.Radio, options:["Y", "N"], entryType: eShowtimeEntryType.Showtime },
    { name: "show_festival_t", label: "Show festival", type: eFieldType.Text, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "show_with_t", label: "Show with", type: eFieldType.Text, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "show_sound_t", label: "Show sound", type: eFieldType.Text, options: [], entryType: eShowtimeEntryType.Showtime },
    { name: "show_comments_ts", label: "Show comments", type: eFieldType.Text, options: [], entryType: eShowtimeEntryType.Showtime },

    
    { name: "theater_id_i", label: "Theater ID", type: eFieldType.Integer, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_name_t", label: "Theater name", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_address_t", label: "Theater address", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_city_t", label: "Theater city", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_state_t", label: "Theater state", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_zip_t", label: "Theater zip", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_phone_t", label: "Theater phone", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_attributes_t", label: "Theater attributes", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_ticketing_t", label: "Theater ticketing", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_closed_reason_t", label: "Theater closed reason", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_area_t", label: "Theater area", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_location_t", label: "Theater location", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_market_t", label: "Theater market", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_screens_i", label: "Theater Screens", type: eFieldType.Integer, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_seating_t", label: "Theater seating", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_adult_t", label: "Theater adult", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_child_t", label: "Theater child", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_senior_t", label: "Theater senior", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_country_s", label: "Theater country", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_url_t", label: "Theater URL", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_chain_id_t", label: "Theater chain ID", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_adult_bargain_t", label: "Theater adult bargain", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_senior_bargain_t", label: "Theater senior bargain", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_child_bargain_t", label: "Theater child bargain", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_special_bargain_t", label: "Theater special bargain", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_adult_super_t", label: "Theater adult super", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_senior_super_t", label: "Theater senior super", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_chuld_super_t", label: "Theater child super", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_price_comment_t", label: "Theater price comment", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_extra_t", label: "Theater extra", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_desc_t", label: "Theater description", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_type_t", label: "Theater type", type: eFieldType.Text, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_lon_d", label: "Theater longitude", type: eFieldType.Decimal, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
    { name: "theater_lat_d", label: "Theater latitude", type: eFieldType.Decimal, options: [], entryType: [eShowtimeEntryType.Theater, eShowtimeEntryType.Showtime] },
];

*/


