function myMap() {
var mapProp= {
    center:new google.maps.LatLng(46.659745, 11.164898),
    zoom:19,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}