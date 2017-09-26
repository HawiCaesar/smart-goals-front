export default function convert_ISO_to_date(iso_date){

    let date = new Date(iso_date);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate();

    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }

    return (dt+'-' + month + '-'+year);
}


