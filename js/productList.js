const productsControl = new ProductsController();

//(productName, productPrice, productUnit, productDetails, productImage, moreDetails, productCategory)

function loadData()
{
    productsControl.addItem("Classic Venue Deco", 300, "/package", "Standard backdrop with stand and a pair of balloon columns", "images/classic_pirate.jpg",
    "Package includes: <ul><li>Standard Cloth Backdrop with Stand</li><li>Pair of Balloon Columns</li><li>50 Air-Filled Balloons</li><li>Delivery, Setup and Tear Down</li></ul>","deco");

    productsControl.addItem("Grand Venue Deco", 500, "/package", "Backdrop with fairy lights and artistic balloon arch", "images/grand_deco.jpg",
    "Package includes:<ul><li>Cloth Backdrop with Fairy Lights</li><li>Artistic Balloon Arch</li><li>Customised Name (Up to 1 meter)</li><li>Delivery, Setup and Tear Down</li></ul>","deco");

    productsControl.addItem("Elegance Venue Deco", 800, "/package","Customised round backdrop with artistic balloon arch", "images/elegance_pink.jpg", 
    "Package includes: <ul><li>Fully customised round backdrop</li><li>Artistic Balloon Arch</li><li>3 Elegant cake display tables</li><li>Delivery, Setup and Tear Down</li></ul>","deco");

    productsControl.addItem("BFF Campcation", 60, "/set/night","Tentage with kid's size mattress", "images/BFF1.jpg", 
    "Have a cozy campcation with your BFFs in the comfort and safety of your own home<br><br>Package includes: <ul><li>Tentage with Kid's Size Mattress</li><li>Indoor Setup Only</li><li>Delivery, Setup and Tear Down</li></ul>","camp");

    productsControl.addItem("Twilight Campcation", 120, "/set/night", "Tentage with single size bed", "images/sleep_over.jpg", 
    "Dazzle your friends with the most unforgettable surreal campcation experience<br><br>Package includes: <ul><li>Tentage with Single Size Bed</li><li>With Happy Birthday Decorative Lights</li><li>Huggable Sheepy Plushies</li><li>Delivery, Setup and Tear Down</li></ul>","camp");

    productsControl.addItem("Neverending Campcation", 250, "/set/night", "Double decker bed with slide", "images/neverend_safari.jpg", 
    "Complete your campcation experience with our bunk bed set, where the fun never ends<br><br>Package includes: <ul><li>Bunk Bed With Slide</li><li>Includes Decorative Lights</li><li>Huggable Animal Plushies</li><li>Delivery, Setup and Tear Down</li></ul>","camp");

    productsControl.addItem("Balloon Sculptures", 80, "/set", "Choose from set of 2, 3 or 4", "images/balloon_octopus.jpg",
    "Fully customisable balloon sculptures of different sizes<br><br>Choose between 3 sizes: <ul><li>1 x Large: Est. L50 x B50 x H80 cm</li><li> 2 x Medium: Est. L30 x B30 x H50 cm </li><li>4 x Small: Est. L20 x B20 x H30 cm</li></ul>","addOn");

    productsControl.addItem("Goodie Bags", 20, "/set", "Customisable part flavours", "images/goodie_bag.jpg",
    "Price includes: <ul><li>Fully customisable party flavours</li><li>Includes door-to-door deliveries to remote guests</li><li>Optional: name items</li></ul>","addOn");

    productsControl.addItem("Inflatable Ballpit Rental", 120, "/set", "Size: L251 x B168 x H36 cm", "images/ballpit.jpg",
    "Inflatable ball pit with sanitised colourful soft plastic balls<br><br>Price includes: <ul><li>One inflatable ball pit</li><li>Size: L251 x B168 x H36 cm</li><li>Small plastic slide</li><li>2 hours rental block</li></ul>","addOn");

    productsControl.addItem("Photography Services", 120, "/hour", "All softcopy photos returned", "images/photo_svc.jpg",
    "Professional photography service to capture your precious moments<br><br>Price includes: <ul><li>80 Polaroid photos</li><li>All softcopy photos will be returned</li><li>Min. 2 hours</li></ul>","services");

    productsControl.addItem("Balloon Sculpting Services", 120, "/hour", "Up to 120 balloon scupltures", "images/balloon_sculpting.jpg",
    "Thrill the kids with personal balloon scupltures that they can bring home<br><br>Price includes:<ul><li>Upto 120 simple balloon scupltures</li><li>Min. 1 hour</li></ul>","services");

    productsControl.addItem("Magic Performances", 150, "/show", "Live performance with streaming", "images/magic.jpg",
    "Jazz up your party with our magic performance with smiles guaranteed<br><br>Price includes: <ul><li>Live performance with remote streaming available</li><li>Duration: 0.5 - 1 hour</li></ul>","services");

    productsControl.displayItem();
}

loadData();




