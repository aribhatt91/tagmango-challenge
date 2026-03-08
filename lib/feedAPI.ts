import submission from './data/submission.json'
import feed from './data/feed.json'
export const getUserSubmission = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(submission)
        }, 500)
    });
}

export const getUserFeed = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(feed)
        }, 1000)
    });
}