'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
const Seattle = {
    min: 23,
    max: 65,
    Avg: 6.3,
    numberOfCustumer: [],
    AverageCookisPerHour: [],
    getcustumernumber: function () {
        for (let i = 0; i <= hours.length - 1; i++) {
            this.numberOfCustumer[i] = randomValue(this.min, this.max)
        };
        console.log('number of custumer array',Seattle.numberOfCustumer)
    },
    getAverageCookisPerHour: function () {
        for (let n = 0; n <= this.numberOfCustumer.length - 1; n++) {
            this.AverageCookisPerHour.push(Math.floor(this.numberOfCustumer[n] * this.Avg))
        }
        console.log('Average Cookis Per Hour',this.AverageCookisPerHour)
    },
    display:function(){
        let container = document.getElementById('display');
        let unorderlist = document.createElement('ul');
        container.appendChild(unorderlist);
        let li = null;
        for(let i = 0 ; i < hours.length ; i++){
            li = document.createElement('li');
            unorderlist.appendChild(li);
            li.textContent = this.numberOfCustumer[i];
        }},


}

Seattle.getcustumernumber();
Seattle.getAverageCookisPerHour();
Seattle.display();


function randomValue(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}



