const Wrapper = document.getElementById('featurePrim')


const mockData = [
    article_1 = {
        meta_data: {date_published: 'Jan 1 2023',
                    read_time: 3},
        author: { name: "Musterman" , 
                profile_pic: ''},
        thumbnail: './frontent/assets/content/article-1/ArticleThumbnail.jpg',
        category: "business",
        tags: ['business', 'science', 'technology'],
        headline: 'Lorem Ipsum dolor emit sit',
        preview_text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
        blog_body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        
        `}
]
article_1 = {
    meta_data: {date_published: 'Jan 1 2023',
                read_time: 3},
    author: { name: "Musterman" , 
            profile_pic: ''},
    thumbnail: './frontent/assets/content/article-1/ArticleThumbnail.jpg',
    category: "business",
    tags: ['business', 'science', 'technology'],
    headline: 'Lorem Ipsum dolor emit sit',
    preview_text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    blog_body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
    
    `}

function createFeatureCard(obj){
    let current, headline, description, date, category, meta, author

    current = document.createElement('div')
}

// Takes an object and returns a HTML Feature Card of that object
function featureCardPrimary() {

    // take stuff from object and assig to variables
    // this.headline = headline
    // this.author = author['name']
    // this.read_time = meta_data['read_time']
    // this.date = meta_data['date_published']

    // create HTML boilerplate
    let current ,currentwrapper
    // currentwrapper, thumbnail, mainsection

    currentwrapper = document.createElement('a');
    currentwrapper.innerText = 'Hello'
    // currentwrapper.setAttribute('class','featureCard--Primary')

    // thumbnail = document.createElement('div')
    // thumbnail.setAttribute('class','thumbnail')

    // mainsection = document.createElement('div')

    // currentwrapper.append(thumbnail);
    // currentwrapper.append(mainsection);

    current.append(currentwrapper)

    return current
}
let card_1 = featureCardPrimary(article_1)

Wrapper.append(card_1)