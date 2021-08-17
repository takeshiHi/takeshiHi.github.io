
function escapeHtml(str) {
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#39;');
    return str;
}

function NowDate(){
    var date = new Date();
    
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var week = date.getDay();
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    temp = "年"+month+"月"+day+"日"+hour + "時"+ min +"分"+sec+"秒　";
    document.getElementById("now_time").innerHTML = escapeHtml("" + year + temp); 
    document.getElementById("now_str").innerHTML = escapeHtml("現在に至る");
}


NowDate()


