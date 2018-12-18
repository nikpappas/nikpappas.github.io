function whenScrolling(header, bookingForm) {
    var top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);

    if(top > 5) {
        header.className = header.className.replace("header ","header-scrolled ");
    } else {
        header.className = header.className.replace("-scrolled", "");
    }

    if(top > 200) {
        bookingForm.className = bookingForm.className.replace("booking-form ", "booking-form-scrolled ");
    } else {
        bookingForm.className = bookingForm.className.replace("-scrolled", "");
    }

}

function whenResize(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//  if(w < 1000) whenMobile();
//  else whenDesktop();

    console.log("W:"+w+"\n"+"H:"+h);
    console.log("height:"+window.screen.availHeight);
    console.log("width:"+window.screen.availWidth);
}

function populateBookingForm(){
    var dateFrom = document.getElementById("date-from");
    var dateTo = document.getElementById("date-to");
    var today = new Date();
    dateFrom.min = today.toISOString().split("T")[0];
    dateFrom.valueAsDate = today;
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    dateTo.min = tomorrow.toISOString().split("T")[0];
    dateTo.valueAsDate = tomorrow;
}   
function onDateFromChange(event) {
    var fromDate = event.target.valueAsDate;

    console.log(fromDate);
    var dateTo = document.getElementById("date-to");
    var nextDay = (new Date()).setDate(fromDate.getDate() +1);
    dateTo.min = nextDay;
}
function onBookingFormSubmit(event){
    var from = document.getElementById("date-from").valueAsDate.toISOString().split("T")[0];
    var to = document.getElementById("date-to").valueAsDate.toISOString().split("T")[0];
    console.log(from);
    event.target.action = `https://www.hostelworld.com/hosteldetails.php/So-Young-Hostel/Heraklion/286668?dateFrom=${from}&dateTo=${to}&number_of_guests=2`
}
function setUp(){
    var header = document.getElementById("header");
    var bookingForm = document.getElementById("booking-form");

    window.addEventListener("scroll", () => {
        whenScrolling(header, bookingForm);
    });
    window.addEventListener("resize", whenResize);
    whenResize();
    whenScrolling(header, bookingForm);
    populateBookingForm();
}

setUp();
