export interface PixabayImage {
  id: number;
  webformatURL: string;   // превью
  largeImageURL: string; // велике зображення
  tags: string;
  likes: number;
  views: number;
  comments: number;
  downloads: number;
};

export interface PixabayResponse {
  total: number;
  totalHits: number;
  hits: PixabayImage[];
};
