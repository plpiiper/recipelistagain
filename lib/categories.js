import Data from '@/Data/Data.json'

export function getAllPostIds() {
    let pl = Data.categories;
    return pl.map((p) => {
        return {
            params: {
                id: p.id,
            },
        };
    });
}

export function getPostData(id) {
    return {
        id,
        ...Data.categories.find(x => x.id === id),
    };
}