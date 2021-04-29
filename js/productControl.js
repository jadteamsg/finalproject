const createHTMLList = (index, productName, productPrice, productUnit, productDetails, productImage) =>
`
<div class="col-lg-4 col-md-6 col-sm-12">
  <div id='${index}' class="card mb-4" data-toggle="modal" data-target="#productModal">
      <img src="${productImage}" class="card-img-top" alt="${productName}" >
        <div class="card-body">
          <h5 class="card-title">${productName}</h5>
          <p class="card-text">${productDetails}</p>
          <p class="price">Price: S$${productPrice}${productUnit}</p>
        </div>

      <!-- Button trigger modal
      <button id='${index}' type="button" class="btn btn-primary buttonalign" data-toggle="modal" data-target="#productModal">
        Read More
      </button> -->
  </div>
</div>
`;

function displayProductDetails(item)
{
  console.log(item);
  document.querySelector('#modalName').innerText = item.i_productName;
  document.querySelector('#modalPrice').innerText = item.i_productPrice;
  document.querySelector('#modalUnit').innerText = item.i_productUnit;
  document.querySelector('#modalImg').src = item.i_productImage;
  document.querySelector('#modalMoreDetails').innerHTML = item.i_moreDetails;

}


class ProductsController
{
    constructor()
    {
        this._items = [];
    }

    addItem(productName, productPrice, productUnit, productDetails, productImage, moreDetails, productCategory)
    {
        const itemObj = {
        i_productName: productName,
        i_productPrice: productPrice,
        i_productUnit: productUnit,
        i_productDetails: productDetails,
        i_productImage: productImage,
        i_moreDetails: moreDetails,
        i_productCategory: productCategory
        };

        this._items.push(itemObj);
    }

    displayItem()
    {
        //var productHTMLList = [];
        var decoHTMLList = [], campHTMLList = [], addHTMLList = [], serviceHTMLList = [];
        
        var cat = '';

        for (var i=0; i<this._items.length; i++)
        {
            const item = this._items[i];

            const productHTML = createHTMLList(i, item.i_productName, item.i_productPrice, item.i_productUnit, item.i_productDetails,item.i_productImage, item.i_moreDetails);

            //productHTMLList.push(productHTML);
            cat = item.i_productCategory;

            if(cat == 'deco'){
            decoHTMLList.push(productHTML);
            }
            else if (cat == 'camp') {
              campHTMLList.push(productHTML);
            }
            else if (cat == 'addOn'){
              addHTMLList.push(productHTML);
            }
            else if (cat == 'services'){
              serviceHTMLList.push(productHTML);
            }       
          }
        

        //const pHTML = productHTMLList.join('\n');
        const dHTML = decoHTMLList.join('\n');
        const cHTML = campHTMLList.join('\n');
        const aHTML = addHTMLList.join('\n');
        const sHTML = serviceHTMLList.join('\n');

        //document.querySelector('#row').innerHTML = pHTML;
        document.querySelector('#deco').innerHTML = dHTML;
        document.querySelector('#camp').innerHTML = cHTML;
        document.querySelector('#addOn').innerHTML = aHTML;
        document.querySelector('#services').innerHTML = sHTML;



        //addEventListener - click
        for (var i=0; i<this._items.length; i++)
        {
          const item = this._items[i];
          document.getElementById(i).addEventListener("click", function(){displayProductDetails(item);});
        }
    }
}

