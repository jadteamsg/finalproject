//to create an instance of ProductsController Class
const productsControl = new featuredProductsController();

function loadData()
{
    var newLine = '\n';
    //add items to the ProductsController Class - items currently are hardcoded into the class
    productsControl.addItem('CLASSIC DECORATION PACKAGE', 'Standard backdrop with stand and pair of balloon columns', 
    'Themes Available: \nClassic Pirate, Night Action City, Little Pony, Safari Animals\n\nPackage includes:\n- Standard Cloth Backdrop with Stand\n- Pair of Balloon Columns\n- 50 Air-Filled Balloons\n- Delivery, Setup and Tear Down', 300, 'images/classic_pirate.jpg', true);

    productsControl.addItem('VIRTUAL BALLOON SCULPTING', 'Balloon sculpting workshop conducted by professional instructor', 
    'Learn to twist and form the balloon into a specific design in the comfort of your own home!\n\n- Workshop duration - 60 mins\n- Suitable for both adults and children\n - Perfect for team bonding, birthday parties, coporate and CC/RC events\n\n*Free delivery of materials to each of the particpant\'s home*', 20, 'images/balloon_sculpting.jpg', true);
    
    productsControl.addItem('BIRTHDAY CAMPCATION PACKAGE', 'Indoor tentage with mattress for you and your friends!', 
    'Have an unforgettable birthday campcation experience with your best pals with our Twilight Package!\n\nPackage includes:\n\n- Indoor Tentage with Single Size Bed\n- Happy Birthday Decorative Lights\n- Warm Light Lamps\n- Delivery, Setup and Tear Down\n\n*Free 1x huggable Sheepy Plushy with every set booked*', 120, 'images/sleep_over1.jpg', true);

    //productsControl.addItem('ELEGANCE PACKAGE', 'Standard backdrop with stand and pair of balloon columns', 
    //'Themes Available:\nClassic Pirate, Night Action City, Little Pony, Safari Animals\n\nPackage includes:\n- Standard Cloth Backdrop with Stand\n- Pair of Balloon Columns\n- 50 Air-Filled Balloons\n- Delivery, Setup and Tear Down', '120', 'images/elegance_blue.jpg', true); 'S$120/set/night'
    
    productsControl.displayItem();
}

loadData();

//Example to push information into localStorage
/*var myName = 'Jean', myAge = 18;

window.localStorage.setItem('name', myName);
window.localStorage.setItem('age', myAge);

alert(`Local Storage: Hello ${window.localStorage.getItem('name')}, your age is ${window.localStorage.getItem('age')}`);

//Example to store occupation into the session storage
var myOccupation = 'Junior Full Stack Developer';

sessionStorage.setItem('occupation', myOccupation);

alert(`Session Storage: My occupation is ${sessionStorage.getItem('occupation')}`);*/

