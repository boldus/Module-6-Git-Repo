var key = '85f1587f1829a4865677d371e942e0fc'
var date = moment().format('dddd, MMMM DO YYYY');
var dateTime= moment().format('YYYY-MM-DD HH:MM:SS');
var city = [];
var cityHist= [];

$('.search').on("click", function (event) {
    event.preventDefault();
    city = $(this).parent('btnPar').siblings('.textVal').val().trim();
    if (city===""){
        return;
    };
    cityHist.push(city);

    localStorage.setItem('city', JSON.stringify(cityHist));
    fiveForecastEL.empty();
    getHistory();
    getHistory();
    getWeatherToday();
});

var contHistEl = $('.cityHist');
function getHistory(){
    contHisteEL.empty();

    for(let i =0; i< cityHist.length; i++) {

        var rowEl = $('row');
        var btnEl = $('<button>').text(`${cityHist[i]}`)

        rowEl.addClass('row histBtnRow');
        btnEl.addClass('btn btn-outline-secondary histBtn');
        btnEl.attr('type','button');

        contHistEl.prepend(rowEl);
        removeEventListener.append(btnEl);
    } if(!city) {
        return;
    }
    $('histBtn').on("click", function (event) {
        event.preventDefault();
        city=$(this).text();
        fiveForecastEl.empty()
        getWeatherToday();
        });
};
    var cardTodayBody= $('cardBodyToday')
    function getWeatherToday(){
        var getUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`;
    
        $(cardTodayBody).empty();

        $ajax({
            url:getUrlCurrent,
            method: 'GET',
        }).then(function (response) {
            $('.cardTodayCityName').text(response.name);
            $('.cardTodayDate').text(date);

            $('icons').attr('src')
        }))
        })
    }

