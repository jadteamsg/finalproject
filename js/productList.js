const productsControl = new ProductsController();

//(productName, productPrice, productDetails, productImage, moreDetails, productCategory)

function loadData()
{
    productsControl.addItem("Classic Package","$300", "Standard backdrop with stand and a pair of balloon columns", "images/classic_pirate.jpg", "images/classic_city.jpg","images/classic_safari.jpg",
    "<h5>Themes: Pirate, Night Action City, Safari</h5><ul><li>Standard Cloth Backdrop with Stand</li><li>Pair of Balloon Columns</li><li>50 Air-Filled Balloons</li><li>Delivery, Setup and Tear Down</li></ul>","deco");

    productsControl.addItem("Grand Package","$500", "Grand backdrop with fairy lights and artistic balloon arch", "images/grand_deco.jpg", "images/grand_mermaid.jpg","images/grand_sweet.jpg",
    "<h5>Themes: Safari, Mermaid, BabyPink</h5><ul><li>Cloth Backdrop with Fairy Lights</li><li>Artistic Balloon Arch</li><li>Customised Name (Up to 1 meter)</li><li>Delivery, Setup and Tear Down</li></ul>","deco");

    productsControl.addItem("Elegance Package","$800", "Fully customised backdrop with artistic balloon arch and cake display tables", "images/elegance_pink.jpg", "images/elegance_blue.jpg","images/elegance_nature.jpg",
    "<h5>Themes: Blue, Pink, Nature etc.</h5><ul><li>Fully customised round backdrop</li><li>Artistic Balloon Arch</li><li>3 Elegant cake display tables</li><li>Delivery, Setup and Tear Down</li></ul>","deco");

    productsControl.addItem("BFF Package","$60/set/night", "Have a cozy campcation with your BFFs in the comfort and safety of your own home", "images/BFF1.jpg", "images/BFF2.jpg","",
    "<h5>Themes: Simple, Colorful</h5><ul><li>Tentage with Kid's Size Mattress</li><li>Indoor Setup Only</li><li>Delivery, Setup and Tear Down</li></ul>","camp");

    productsControl.addItem("Twilight Package","$120/set/night", "Dazzle your friends with the most unforgettable surreal campcation experience", "images/sleep_over.jpg", "images/sleep_over2.jpg","images/sleep_over3.jpg",
    "<h5>Themes: </h5><ul><li>Tentage with Single Size Bed</li><li>With Happy Birthday Decorative Lights</li><li>Warm Light Lamps</li><li>Huggable Sheepy Plushies</li><li>Delivery, Setup and Tear Down</li></ul>","camp");

    productsControl.addItem("Neverending Package","$250/set/night", "Complete your campcation experience with our bunk bed set, where the fun never ends...", "images/neverend_safari.jpg", "images/neverend_wild.jpg","images/neverend_blue.jpg",
    "<h5>Themes: Safari, Wild, Bluedream</h5><ul><li>Bunk Bed With Slide</li><li>With 2 Kids' Size Mattresses</li><li>Includes Decorative Lights</li><li>Huggable Animal Plushies</li><li>Delivery, Setup and Tear Down</li></ul>","camp");

    productsControl.addItem("Balloon Sculptures","$100/set", "Fully customisable balloon sculptures of different sizes", "images/balloon_octopus.jpg","images/balloon_nemo.jpg", "images/balloon_sculptures.jpg", "<h5>Fully customisable designs</h5><ul><li>Choose between 3 sizes</li><li>1 x Large: 150cm height</li><li>3 2 x Medium: 100cm height</li><li>4 x Small: 50cm height</li></ul>","addOn");

    productsControl.addItem("Goodie Bags","$20/bag", "Fully customisable party flavours including door-to-door deliveries", "images/goodie_bag.jpg", "images/goodie_candy.jpg","images/goodie_popcorn.jpg",
    "<h5>Fully customisable</h5><ul><li>Includes door-to-door deliveries to remote guests</li><li>Optional: name items</li></ul>","addOn");

    productsControl.addItem("Ballpit Rental","$60/hour", "Inflatable ball pit with sanitised colourful soft plastic balls", "images/ballpit.jpg", "images/ballpit_slide.jpg","images/ballpitwslide.jpg",
    "<h5>Inflatable ball pit</h5><ul><li>L251 x B168 x H36 cm</li><li>With Mini Slide</li><li>Min. 2 Hours</li></ul>","addOn");

    productsControl.addItem("Photography Services","$120/hour", "Professional photography service to capture your precious moments", "images/photo_svc.jpg", "images/photography.jpg","images/photo_happy.jpg","<h5>Professional photography</h5><ul><li>80 Polaroid photos</li><li>All softcopy photos will be returned</li><li>Min. 2 hours</li></ul>","services");

    productsControl.addItem("Balloon Scuplting Services","$120/hour", "Thrill the kids with personal balloon scupltures that they can bring home", "images/balloon_sculpting.jpg", "images/elegance_pink.jpg","images/elegance_nature.jpg",
    "<h5>Professional balloon sculpting services</h5><ul><li>Min. 1 hour</li></ul>","services");

    productsControl.addItem("Magic Performances","$150/show", "Jazz up your party with our magic performance with smiles guaranteed", "images/magic.jpg", "images/magic_perf.jpg","images/magic_virtual.jpg","<h5>Live performance with remote streaming available</h5><ul><li>Our magicians have years of experience performing magic for kid's parties</li><li>Duration: 0.5 - 1 hour</li></ul>","services");

productsControl.displayItem();
}

loadData();




