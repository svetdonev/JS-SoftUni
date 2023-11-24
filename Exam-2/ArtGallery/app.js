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

        if (!isInTheArray) {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        let isExisting = this.guests.some(x => x.guestName === guestName);

        if (isExisting) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let points = 50;
        if (personality == 'Vip') {
            points = 500;
        }
        if (personality == 'Middle') {
            points = 250;
        }
        this.guests.push({ guestName, personality, points, purchaseArticle: 0 });

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let existingArticle = this.listOfArticles.find(x => x.articleName === articleName && x.articleModel === articleModel);

        if (!existingArticle) {
            throw new Error(`This article is not found.`);
        }

        if (existingArticle.quantity == 0) {
            return `The ${articleName} is not available.`;
        }

        let existingGuest = this.guests.find(x => x.guestName === guestName);
        if (!existingGuest) {
            return `This guest is not invited.`;
        }

        if (existingGuest.points - this.possibleArticles[articleModel] < 0) {
            return `You need to more points to purchase the article.`;
        } else {
            existingGuest.points -= this.possibleArticles[articleModel];
            existingGuest.purchaseArticle++;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
        }
    }

     showGalleryInfo(criteria) {
        let result = [];

        if(criteria == 'article') {
            result.push(`Article information:`);

            this.listOfArticles.forEach(x => {
                result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`);
            });
        } else if(criteria == 'guest') {
            result.push('Guests information:');

            this.guests.forEach(x => {
                result.push(`${x.guestName} - ${x.purchaseArticle}`);
            });
        }

        return result.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));