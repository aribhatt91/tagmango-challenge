import user from '@/lib/data/user.json';
export const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user)
        }, 100)
    });
}