var productNum;

const createHTMLList = (name, description, details, price, imageURL) =>
`
<div class="card featured-cards" style="width: 18rem;">
    <img src= ${imageURL} class="card-img-top" alt=${name}>
    <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${description}</p>
    <button type="button" class="btn btn-primary buttonalign" data-toggle="modal" data-target="#modal${productNum}">Read More</button>
    </div>
</div>

<div class="modal fade" id="modal${productNum}" tabindex="-1" aria-labelledby="label${productNum}" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title" id="label${productNum}">${name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">
                <div class="modalContainer">
                    <div>
                    <img class="modalImage" src= ${imageURL}>
                    </div>

                    <div class = 'modalText'>
                    <p>${details}</p>
                    <h5><i>Price: ${price}</i></h5>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-primary" href="mailto: jadteamsg@gmail.com">Enquire Now</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
`;

class featuredProductsController {
    constructor() {
        this._productList = [];   //create an array to store the details of product items
    }

    //method to add the item into the array
    addItem(name, description, details, price, imageURL, featureProduct) {
        const product = {
            iName: name,
            iDescription: description,
            iDetails: details,
            iPrice: price,
            iURL: imageURL,
            iFeature: featureProduct
        };
        this._productList.push(product);
    }

    displayItem() {
        
        var productHTMLList = [];
        var featureList = [];

        for (productNum = 0; productNum<this._productList.length; productNum++) {

            const item = this._productList[productNum];    //assign the individual item to the variable

            if(item.iFeature) {

                featureList.push(item.iName);
                
                const productHTML = createHTMLList(item.iName, item.iDescription, item.iDetails, item.iPrice, item.iURL);

                if(productHTMLList.length<3) {

                    productHTMLList.push(productHTML);

                } else {
                    
                    productHTMLList.splice(0, 1);
                    
                    productHTMLList.push(productHTML);

                    var productName = featureList.splice(0,1);

                    for (var i = 0; i<this._productList.length; i++) {

                        const item = this._productList[i];
            
                        if (item.iName == productName) {
            
                            item.iFeature = false;
            
                            console.log(item);
                        }
                    }
                }
            }
        }  
        //Join all the elements/items in my productHTMLList into 1 string and separate by a break
        const pHTML = productHTMLList.join('\n'); //<br/>??

        document.querySelector('#featuredRow').innerHTML = pHTML;

    }    //end of displayProducts

}   //end of ProductsController class
