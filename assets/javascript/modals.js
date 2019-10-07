$(document).on("click", ".card-body", function () {
    $(".modal-body").empty();
    $(".modal-title").empty();

    // GRAB VALUE OF CARD
    var modalParkSelected = $(this).attr("data-value");
    var modalInfo = parkInfo.data.filter(item => item.parkCode === modalParkSelected)[0];

    // Latitude and Longitude to city
    if (modalInfo.latLong !== "") {
        var latLong = modalInfo.latLong
        console.log("LAT LONG: " + latLong);
        latitude = modalInfo.latLong.split(",")[0].split(":")[1].trim();
        longitude = modalInfo.latLong.split(",")[1].split(":")[1].trim();
        console.log("LAT AND LONG: " + latLong);
        geolocation(latitude, longitude)
        console.log(modalInfo);
    }

    // Place info into modal
    var modalTitle = $(".modal-title")
    modalTitle.append(modalInfo.name + " " + modalInfo.designation);
    var modalBody = $(".modal-body");
    modalBody.append(modalInfo.description);
    var modalP = $("<p>");
    modalP.append("<a href='" + modalInfo.url + "' target=_blank>" + modalInfo.url + "</a>");
    modalBody.append(modalP);
})
