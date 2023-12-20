import Data from '@/Data/Data.json'

export function getAllPostIds() {
    let cats = [];
    for (var i=0; i<Data.recipelist.length; i++){
        if (!cats.includes(Data.recipelist[i].cat)){cats.push(Data.recipelist[i].cat)}
    }
    cats = cats.sort();
    cats = cats.map(x => {
        return {
            key: x.toLowerCase().replaceAll(" ","-"),
            text: x,
            href: "/category/"+x.toLowerCase().replaceAll(" ","-")
        }
    })
    let cr = {
        key: "categories",
        title: "Categories",
        items: cats
    }
    return cats.map((c) => {
        return {
            params: {
                id: c.key,
                obj: c
            },
        };
    });
}

export function getPostData(id,obj) {
    return {
        id,
        ...obj,
    };
}