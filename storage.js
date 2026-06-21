const STORAGE_KEY = "wifi_heatmap_survey";


function saveData(points) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(points)
    );

}



function loadData() {

    let data = localStorage.getItem(
        STORAGE_KEY
    );


    if (data) {

        return JSON.parse(data);

    }


    return [];

}



function deleteData() {

    localStorage.removeItem(
        STORAGE_KEY
    );

}
