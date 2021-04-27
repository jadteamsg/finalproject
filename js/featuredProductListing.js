//to create an instance of ProductsController Class
const productsControl = new featuredProductsController();

function loadData()
{
    var newLine = '\n';
    //add items to the ProductsController Class - items currently are hardcoded into the class
    productsControl.addItem('CLASSIC DECORATION PACKAGE', 'Standard backdrop with stand and pair of balloon columns', 
    'Themes Available:<br/>Classic Pirate, Night Action City, Little Pony, Safari Animals<br/><br/>Package includes:<br/>- Standard Cloth Backdrop with Stand<br/>- Pair of Balloon Columns<br/>- 50 Air-Filled Balloons<br/>- Delivery, Setup and Tear Down', 'S$300', 'images/classic_pirate.jpg', true);

    productsControl.addItem('VIRTUAL BALLOON SCULPTING', 'Balloon sculpting workshop conducted by professional instructor', 
    'Learn to twist and form the balloon into a specific design in the comfort of your own home!<br/><br/> - Workshop duration - 60 mins<br/> - Suitable for both adults and children<br/> - Perfect for team bonding, birthday parties, coporate and CC/RC events<br/><br/>*Free delivery of materials to each of the particpant\'s home*<br/>', '<br/>S$20/pax (min 10 pax)<br/>S$18/pax (min 20 pax)', 'images/balloon_sculpting.jpg', true);
    
    productsControl.addItem('B\'DAY CAMPCATION PACKAGE', 'Indoor tentage with mattress for you and your friends!', 
    'Have an unforgettable birthday campcation experience with your best pals with our Twilight Package!<br/><br/>Package includes:<br/><br/>- Indoor Tentage with Single Size Bed<br/>- Happy Birthday Decorative Lights<br/>- Warm Light Lamps<br/>- Delivery, Setup and Tear Down<br/<br/><br/>*Free 1x huggable Sheepy Plushy with every set booked*<br/>', 'S$120/set/night', 'images/sleep_over1.jpg', true);

    //productsControl.addItem('ELEGANCE PACKAGE', 'Standard backdrop with stand and pair of balloon columns', 
    //'Themes Available:<br/>Classic Pirate, Night Action City, Little Pony, Safari Animals<br/><br/>Package includes:<br/>- Standard Cloth Backdrop with Stand<br/>- Pair of Balloon Columns<br/>- 50 Air-Filled Balloons<br/>- Delivery, Setup and Tear Down', 'S$300', 'images/elegance_blue.jpg', true);
    
    productsControl.displayItem();
}

loadData();





