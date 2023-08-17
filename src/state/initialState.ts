import { StateType } from "../types/state";

export const initialState : StateType = {
    movies : [
        "Harry Potter and the Order of the Phoenix",
        "John Wick",
        "The Wizard of OZ",
        "Titanic"
    ],
    actors: [],
    categories: [
        "fantasy","adventure","Scifi","Anime",
        "fantasy","adventure","Scifi","Anime",
        "fantasy","adventure","Scifi","Anime",
        "fantasy","adventure","Scifi","Anime",
        "fantasy","adventure","Scifi","Anime",
        "fantasy","adventure","Scifi","Anime",
        "fantasy","adventure","Scifi","Anime",
        "fantasy","adventure","Scifi","Anime",
        "fantasy","adventure","Scifi","Anime",
        "fantasy","adventure","Scifi","Anime",
        "fantasy","adventure","Scifi","Anime",
        "fantasy","adventure","Scifi","Anime",
        "fantasy","adventure","Scifi","Anime"
    ],
    selectedMovieId: null,
    selectedActors: null,
    selectedCategories: null,
    movieName: null,
    movieStudioId: null,
    movieSeriesId:null,
    movieSeriesNumber: null,

};