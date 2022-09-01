export interface TopImageInterface{
    number: number;
    src: string;
    alt?: string;
}

export interface TopFiveInterface{
    title: string;
    image: TopImageInterface[];
}