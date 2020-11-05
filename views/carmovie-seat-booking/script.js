const container = document.querySelector('.container');
const freeSeat = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');  // for innertext
const total = document.getElementById('total');
const movieSelect = document.getElementById('movieSelect'); //select
populateUI();
let valueMovieOption = movieSelect.value;

saveDataStorage =(seatsIndex,moviePrice)=>{
    localStorage.setItem('selectedSeats',seatsIndex);
    localStorage.setItem('valueMovie',moviePrice);
    
}
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeatsIndex'));
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedSeats !==null  && selectedSeats.length>0 ){
        freeSeat.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index)>-1){
                seat.classList.add('selected')
            }
        })

    }
    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex =selectedMovieIndex;
    }

}

updateSelectedSeat =()=>{
    const selectedSeats = document.querySelectorAll('.row .seat.selected')

    const selectedSeatsIndex =[...selectedSeats].map((seat)=>[...freeSeat].indexOf(seat)); 
    localStorage.setItem('selectedSeatsIndex',JSON.stringify(selectedSeatsIndex))

    const selectedSeatsCount = +selectedSeats.length;
    count.innerText=selectedSeatsCount;
    total.innerText= selectedSeatsCount*valueMovieOption;


}

container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected') //classlist=> add remove toggle(!)

        this.updateSelectedSeat();
    }
})

movieSelect.addEventListener('change',(e)=>{
    valueMovieOption= e.target.value    
    this.updateSelectedSeat();
    console.log("cchange",e.target.value)
} )

//initial
updateSelectedSeat();