export interface User {
    id: string;
    name: string;
    avatar?: string;
    points?: number;
    challengesUnlocked?: number;
}

export interface Media {
    mediaId: string;
    mediaType: 'video' | 'image',
    mediaUri: string, // Links to video/image
    thumbnail?: string,
    metadata?: {
        aspectRatio?: number;
    }
}

export interface Reaction {
    type: 'love' | 'hifi' | 'angry' | 'like' | 'dislike'
    userId: string
}

export interface Author {
    authorId: string;
    authorName: string;
    avatar?: string;
}

export interface Post {
    postId: string;
    createdAt: string;
    author: Author;
    content: {
        text: string;
        media: Media | null
    };
    reactions?: Reaction[];
    comments: number;
}