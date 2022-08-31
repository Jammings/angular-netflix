export interface ImageInterface{
    src: string;
    alt?: string;
}

export interface FilmsInterface{
    title: string;
    image: ImageInterface[];
}

export interface TopFiveInterface{
    title: string;
    image: ImageInterface[];
}