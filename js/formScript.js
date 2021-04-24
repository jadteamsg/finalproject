var formList = [];

function submitForm()
{
    //pass the input variables
    var productName = document.querySelector("#product_name").value;
    var productPrice =document.querySelector("#product_price").value;
    var productCategory = document.querySelector("#product_category").value;
    var productQuantity = document.querySelector("#product_quantity").value;
    var productDescription = document.querySelector("#product_description").value;
    var productDetails = document.querySelector("#product_details").value;
    var productImage =document.querySelector("#product_image").value;

    //Checkbox
    var checkboxArray = [];
    checkboxArray.push(document.querySelector("#feature_product").checked); //to chheck value is true (checked) or false(unchecked)

   var found = false;
   checkboxArray.forEach(item => {
    if(item){
        found = true;
    }
   });

   addToList(productName,productPrice,productCategory,productQuantity,productDescription,productDetails,productImage,checkboxArray);
}

function addToList(productName,productPrice,productCategory,productQuantity,productDescription,productDetails,productImage,checkboxArray)
{
    //Store the values into the  formlist array 

    const item = {
        i_productName: productName,
        i_productPrice: productPrice,
        i_productCategory: productCategory,
        i_productQuantity: productQuantity,
        i_productDescription: productDescription,
        i_productDetails: productDetails,
        i_ProductImage: productImage,
        featureProduct: checkboxArray[0]
    }
    formList.push(item);
    listForm();
}

function listForm()
{
    console.log("Total Package:" + formList.length)
    console.log(formList);
}