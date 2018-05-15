let restaurant = {
    name: 'korean',
    guestCapacity: 75,
    guestCount: 0,
    checkSeatAvailable: function (partySize){
        let seatLeft = this.guestCapacity - this.guestCount
        return partySize <= seatLeft
        console.log(partySize)
    },
    seatParty: function (numofseat){
        this.guestCount = numofseat + this.guestCount;
    },
    removeSeat: function (numtoremove){
        this.guestCount = this.guestCount - numtoremove 
    }

}


// a methods is an object proprety whose value is a funtion
 
restaurant.seatParty(72)
 console.log(restaurant.checkSeatAvailable(5))

 restaurant.removeSeat(5)
 console.log(restaurant.checkSeatAvailable(5))

 console.log(restaurant)