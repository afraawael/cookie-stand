'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'];
const Seattle = {
    location : 'Seattle',
    min: 23,
    max: 65,
    Avg: 6.3,
    total : 0,
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
            let val= Math.floor(this.numberOfCustumer[n] * this.Avg)
            this.AverageCookisPerHour.push(val)
            this.total = this.total + val
        // console.log (this.total);
        }
        
        console.log('Average Cookies Per Hour',this.AverageCookisPerHour)

    },
    display:function(){
        let container = document.getElementById('Locations');
        let h2 = document.createElement ('h2');
        container.appendChild(h2);
        h2.textContent = this.location 
        let unorderlist = document.createElement('ul');
        container.appendChild(unorderlist);
        let li = 0;
        for(let i = 0 ; i < hours.length ; i++){
            li = document.createElement('li');
            unorderlist.appendChild(li);
            li.textContent = `${hours[i]}:${this.AverageCookisPerHour[i]}`;
            
            }
          let liTotal = document.createElement ('li');
            unorderlist.appendChild(liTotal);
            liTotal.textContent = `total :${this.total}`
        }
}

Seattle.getcustumernumber();
Seattle.getAverageCookisPerHour();
Seattle.display();


function randomValue(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const Tokyo = {
    location : 'Tokyo',
    min: 3,
    max: 24,
    Avg: 1.2,
    total : 0,
    numberOfCustumer: [],
    AverageCookisPerHour: [],
    getcustumernumber: function () {
        for (let i = 0; i <= hours.length - 1; i++) {
            this.numberOfCustumer[i] = randomValue(this.min, this.max)
        };
        console.log('number of custumer array',Tokyo.numberOfCustumer)
    },
    getAverageCookisPerHour: function () {
        for (let n = 0; n <= this.numberOfCustumer.length - 1; n++) {
            let val= Math.floor(this.numberOfCustumer[n] * this.Avg)
            this.AverageCookisPerHour.push(val)
            this.total = this.total + val
        
        }
        
        console.log('Average Cookies Per Hour',this.AverageCookisPerHour)

    },
    display:function(){
        let container = document.getElementById('Locations');
        let h2 = document.createElement ('h2');
        container.appendChild(h2);
        h2.textContent = this.location 
        let unorderlist = document.createElement('ul');
        container.appendChild(unorderlist);
        let li = 0;
        for(let i = 0 ; i < hours.length ; i++){
            li = document.createElement('li');
            unorderlist.appendChild(li);
            li.textContent = `${hours[i]}:${this.AverageCookisPerHour[i]}`;
            
            }
          let liTotal = document.createElement ('li');
            unorderlist.appendChild(liTotal);
            liTotal.textContent = `total :${this.total}`
        }
}

Tokyo.getcustumernumber();
Tokyo.getAverageCookisPerHour();
Tokyo.display();



const Dubai = {
    location : 'Dubai',
    min: 11,
    max: 38,
    Avg: 3.7,
    total : 0,
    numberOfCustumer: [],
    AverageCookisPerHour: [],
    getcustumernumber: function () {
        for (let i = 0; i <= hours.length - 1; i++) {
            this.numberOfCustumer[i] = randomValue(this.min, this.max)
        };
        console.log('number of custumer array',Dubai.numberOfCustumer)
    },
    getAverageCookisPerHour: function () {
        for (let n = 0; n <= this.numberOfCustumer.length - 1; n++) {
            let val= Math.floor(this.numberOfCustumer[n] * this.Avg)
            this.AverageCookisPerHour.push(val)
            this.total = this.total + val
        // console.log (this.total);
        }
        
        console.log('Average Cookies Per Hour',this.AverageCookisPerHour)

    },
    display:function(){
        let container = document.getElementById('Locations');
        let h2 = document.createElement ('h2');
        container.appendChild(h2);
        h2.textContent = this.location 
        let unorderlist = document.createElement('ul');
        container.appendChild(unorderlist);
        let li = 0;
        for(let i = 0 ; i < hours.length ; i++){
            li = document.createElement('li');
            unorderlist.appendChild(li);
            li.textContent = `${hours[i]}:${this.AverageCookisPerHour[i]}`;
            
            }
          let liTotal = document.createElement ('li');
            unorderlist.appendChild(liTotal);
            liTotal.textContent = `total :${this.total}`
        }
}

Dubai.getcustumernumber();
Dubai.getAverageCookisPerHour();
Dubai.display();



const Paris = {
    location : 'Paris',
    min: 20,
    max: 38,
    Avg: 2.3,
    total : 0,
    numberOfCustumer: [],
    AverageCookisPerHour: [],
    getcustumernumber: function () {
        for (let i = 0; i <= hours.length - 1; i++) {
            this.numberOfCustumer[i] = randomValue(this.min, this.max)
        };
        console.log('number of custumer array',Paris.numberOfCustumer)
    },
    getAverageCookisPerHour: function () {
        for (let n = 0; n <= this.numberOfCustumer.length - 1; n++) {
            let val= Math.floor(this.numberOfCustumer[n] * this.Avg)
            this.AverageCookisPerHour.push(val)
            this.total = this.total + val
        // console.log (this.total);
        }
        
        console.log('Average Cookies Per Hour',this.AverageCookisPerHour)

    },
    display:function(){
        let container = document.getElementById('Locations');
        let h2 = document.createElement ('h2');
        container.appendChild(h2);
        h2.textContent = this.location 
        let unorderlist = document.createElement('ul');
        container.appendChild(unorderlist);
        let li = 0;
        for(let i = 0 ; i < hours.length ; i++){
            li = document.createElement('li');
            unorderlist.appendChild(li);
            li.textContent = `${hours[i]}:${this.AverageCookisPerHour[i]}`;
            
            }
          let liTotal = document.createElement ('li');
            unorderlist.appendChild(liTotal);
            liTotal.textContent = `total :${this.total}`
        }
}

Paris.getcustumernumber();
Paris.getAverageCookisPerHour();
Paris.display();




const Lima = {
    location : 'Lima',
    min: 2,
    max: 16,
    Avg: 4.6,
    total : 0,
    numberOfCustumer: [],
    AverageCookisPerHour: [],
    getcustumernumber: function () {
        for (let i = 0; i <= hours.length - 1; i++) {
            this.numberOfCustumer[i] = randomValue(this.min, this.max)
        };
        console.log('number of custumer array',Lima.numberOfCustumer)
    },
    getAverageCookisPerHour: function () {
        for (let n = 0; n <= this.numberOfCustumer.length - 1; n++) {
            let val= Math.floor(this.numberOfCustumer[n] * this.Avg)
            this.AverageCookisPerHour.push(val)
            this.total = this.total + val
        // console.log (this.total);
        }
        
        console.log('Average Cookies Per Hour',this.AverageCookisPerHour)

    },
    display:function(){
        let container = document.getElementById('Locations');
        let h2 = document.createElement ('h2');
        container.appendChild(h2);
        h2.textContent = this.location 
        let unorderlist = document.createElement('ul');
        container.appendChild(unorderlist);
        let li = 0;
        for(let i = 0 ; i < hours.length ; i++){
            li = document.createElement('li');
            unorderlist.appendChild(li);
            li.textContent = `${hours[i]}:${this.AverageCookisPerHour[i]}`;
            
            }
          let liTotal = document.createElement ('li');
            unorderlist.appendChild(liTotal);
            liTotal.textContent = `total :${this.total}`
        }
}

Lima.getcustumernumber();
Lima.getAverageCookisPerHour();
Lima.display();