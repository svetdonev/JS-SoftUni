class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();

        let isInTheArray = false;

        if (!this.possibleArticles[articleModel]) {
            throw new Error('This article model is not included in this gallery!');
        }

        for (const el of this.listOfArticles) {
            if (el.articleName === articleName && el.articleModel === articleModel) {
                el.quantity += Number(quantity);
                isInTheArray = true;
            }
        }

        if(!isInTheArray) {
            this.listOfArticles.push({articleModel, articleName, quantity});
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));