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
            return `${guestName} has already been invited.`;
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
}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
console.log(artGallery.inviteGuest('John', 'Middle'));