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
        label?: string;
        aspectRatio?: number;
    }
}

export interface Reactions {
    totalCount: number;
    topAggregate?: {
        type: 'love' | 'hifi' | 'angry' | 'like' | 'dislike';
        count: number;
    }[];
}

export interface Author {
    authorId: string;
    authorName: string;
    avatar?: string;
}

export interface Post {
    postId: string;
    createdAt: string;
    isPinned?: boolean;
    author: Author;
    content: {
        type: "text" | "list" | "media";
        text?: string;
        media?: Media;
        list?: string[]
    }[];
    reactions?: Reactions;
    comments?: number;
}

export interface Feed {
    participants: number;
    topParticipants?: {
        userId: string;
        avatar?: string
    }[]
    posts: Post[];
}