export interface IApianimeContext  {
        id: string;
        title: string;
        subtitle: string;
        duration: string;
        eps:string;
        img: string; 
        url:string;

        
} 

export interface IApiAnimeCarousel { 
        "id": string;
        "img": string; 
        "url": string; }[]; 


// export interface IApianimeContext  {
//     animeContext: { 
//         id: string;
//         title: string;
//         subtitle: string;
//         duration: string;
//         img: string;}[]; 
//     animeList: { "id": string; }[];
//     animeCarousel: { 
//         "id": string; 
//         "url": string; }[]; 
// }

export interface ResponseError {
    message: string
}

export default interface IChildren {
        children: JSX.Element[] | JSX.Element;
}