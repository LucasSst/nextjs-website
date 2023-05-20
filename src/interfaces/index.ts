export interface IContext  {
    animeContext: { 
        id: string;
        title: string;
        subtitle: string;
        duration: string;
        img: string;}[]; 
    animeList: { "id": string; }[];
    animeBanner: { 
        "id": string; 
        "url": string; }[]; 
}

export interface ResponseError {
    message: string
}