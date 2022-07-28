(function(){
    var hotel=(
        name:'Park',
        roomMate":240,
        discount:15,
        offerPrice:function(){
            var offerRate=this.roomMate*((100-this.discount)/100);
            return offerRate
    }
};
    var hotelName,roomMate,specialRate;
    hotelName=document.getElementById('hotelName');
    roomMate=document.getElementById('roomMate');
    specialRate=document.getElementById('specialRate');
    hotelName.textContent=hotel.name;
    roomMate.textContent='$'+hotel.roomMate.toFixed(2);
    specialRate.textContent='$'+ hotel.offerPrice();
    var expiryMsg;
    var today;
    var elEnds;
    function offerExpires(today){
        var weekFromToday,day,date,month,year,dayNames,monthNames;
        weekFromToday=new Date(today.getTime()+7*24*60*60*1000);
        dayNames=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        monthNames=['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
        day=dayNames[weekFromToday.getDay()];
        date=weekFromToday.getDate();
        month=monthNames[weekFromToday.getMonth()];
        year=weekFromToday.getFullYear();
        expiryMsg='Offer expires next';
        expiryMsg+=day+'<br/>('+ date+''+month+''+year+')';
        return expiryMsg;
    }
        today=new Date();
        elEnds=document.getElementById('offerEnds');
        elEnds.innerHTML=offerExpires(today);
}());