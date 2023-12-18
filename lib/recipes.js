import Data from '@/Data/Data.json'

export function getAllPostIds() {
    let pl = Data.recipelist;
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
        ...Data.recipelist.find(x => x.id === id),
    };
}