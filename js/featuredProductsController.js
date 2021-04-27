var productNum;

const createHTMLList = (index, name, description, details, price, imageURL) =>
`
<div class="col-lg-4 col-md-6 col-sm-1">
    <div class="card featured-cards">
        <img src= ${imageURL} class="card-img-top" alt=${name}>
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
        <a id = '${index}' href="#" class="btn btn-primary" data-toggle = 'modal' data-target = '#productModal'>Read More</a>
        </div>
    </div>
</div>
`;

function displayProductDetails(item) {

    document.querySelector('#modalName').innerText = item.iName;
    document.querySelector('#modalImage').src = item.iURL;
    document.querySelector('#modalDetails').innerText = item.iDetails;
    document.querySelector('#modalPrice').innerText = item.iPrice;
}

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

            if(item.iFeature && productHTMLList.length<3) {

                featureList.push(item);

                const productHTML = createHTMLList(productNum, item.iName, item.iDescription, item.iDetails, item.iPrice, item.iURL);

                productHTMLList.push(productHTML);

                //console.log(productHTMLList);

            } else if(item.iFeature) {

                featureList.shift();
                productHTMLList.shift();
                const productHTML = createHTMLList(productNum, item.iName, item.iDescription, item.iDetails, item.iPrice, item.iURL);
                productHTMLList.push(productHTML);
                console.log(productHTMLList);
            }

                /*if(featureList.length<3) {

                   

                } else {
                    
                    productHTMLList.splice(0, 1);
                    
                    productHTMLList.push(productHTML);

                    var productName = featureList.splice(0,1);

                    for (var i = 0; i<this._productList.length; i++) {

                        const item = this._productList[i];
            
                        if (item.iName == productName) {
            
                            item.iFeature = false;
        
                        }
                    }
                }*/
        }  
        //Join all the elements/items in my productHTMLList into 1 string and separate by a break
        const pHTML = productHTMLList.join('\n'); //<br/>??

        document.querySelector('#featuredRow').innerHTML = pHTML;

        for(var i = 0; i<featureList.length; i++) {
            
            const item = featureList[i];

            document.getElementById(i).addEventListener('click', function() {displayProductDetails(item);});
        }
    }    //end of displayProducts
}   //end of ProductsController class
