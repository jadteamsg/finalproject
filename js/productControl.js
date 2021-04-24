const createHTMLList = (productName, productPrice, productDetails, productImage, productImage1, productImage2, moreDetails) =>
`
<div class="col-lg-4 col-md-4 col-sm-4">
  <div class="card h-100">
      <img src="${productImage}" class="card-img-top" alt="${productName}">
        <div class="card-body">
          <h5 class="card-title">${productName}</h5>
          <p class="card-text">
          ${productDetails}
          <h5>Price: ${productPrice}</h5></p>
        </div>

      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary buttonalign" data-toggle="modal" data-target="#classicModal">
        Read More
      </button>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="classicModal" tabindex="-1" aria-labelledby="classicModalLabel" aria-hidden="true">
  
  <div class="modal-dialog">

    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title" id="classicModalLabel">${productName}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">
          <div class="modalContainer">
            <div>
              <!--carousel-->
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="${productImage}" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="${productImage1}" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="${productImage2}" class="d-block w-100" alt="...">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
              <!--carousel-->
            </div>
            <div>
                <p>${moreDetails}</p>
                <h5><i>Price: ${productPrice}</i></h5>
            </div>
          </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-primary"><a class="enquire" href="mailto: jadteamsg@gmail.com">Enquire Now</a></button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`;

class ProductsController
{
    constructor()
    {
        this._items = [];
    }

    addItem(productName, productPrice, productDetails, productImage, productImage1, productImage2, moreDetails, productCategory)
    {
        const itemObj = {
        i_productName: productName,
        i_productPrice: productPrice,
        i_productDetails: productDetails,
        i_productImage: productImage,
        i_productImage1: productImage1,
        i_productImage2: productImage2,
        i_moreDetails: moreDetails,
        i_productCateogry: productCategory
        };

        this._items.push(itemObj);
    }

    displayItem()
    {
        var decoHTMLList = [], campHTMLList = [], addHTMLList = [], serviceHTMLList = [];

        var cat = '';

        for (var i=0; i<this._items.length; i++)
        {
            const item = this._items[i];
            const productHTML = createHTMLList(item.i_productName, item.i_productPrice, item.i_productDetails,item.i_productImage, item.i_productImage1, item.i_productImage2, item.i_moreDetails);

            //productHTMLList.push(productHTML);
            cat = item.i_productCateogry;

            if(cat == 'deco'){

              decoHTMLList.push(productHTML);
              

            } else if (cat == 'camp') {

              campHTMLList.push(productHTML);
              

            } else if (cat == 'addOn') {

              addHTMLList.push(productHTML);
              

            } else if (cat== 'services'){

              serviceHTMLList.push(productHTML);
            }
        }
        //const pHTML = productHTMLList.join('\n');
        const dHTML = decoHTMLList.join('\n');
        const cHTML = campHTMLList.join('\n');
        const aHTML = addHTMLList.join('\n');
        const sHTML = serviceHTMLList.join('\n');

        document.querySelector('#deco').innerHTML = dHTML;
        document.querySelector('#camp').innerHTML = cHTML;
        document.querySelector('#addOn').innerHTML = aHTML;
        document.querySelector('#services').innerHTML = sHTML;
    }
}