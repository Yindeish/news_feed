import { News } from "./news";


interface User {
    full_name: string,
    email: string,
    location: string,
    password: string
}

interface userState {
    user: User | null,
    read_news: News[],
    replies: [],
    liked_news: News[],
    disliked_news: News[],
    book_marks: News[]
}

export type { User, userState }