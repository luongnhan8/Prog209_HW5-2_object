//define constructor function for movie object

//object type Movie contains 2 properties and 2 methods
let Movie =function(moviename, rating) {  
  this.name = moviename;
  this.rating = rating;
  //declare methods (toString and Validate)


//  this.toString = function ()
//  {
//    return  this.name + " " + this.rating + "\n";
//  };
//
//  this.validate = function() 
//  {
//    if (this.name === "" || this.rating === ""){
//      return false;
//    }
//    else{
//      return true;
//    }
//  };
}


Movie.prototype.validate = function() {
    if (this.name === "" || this.rating === ""){
      return false;
    }
    else{
      return true;
    }
  };
///I am not sure about the function where should I used it?
/// I used it on the main.js 41 line (Jaegyeom)
Movie.prototype.toString = function() {
  return this.name.toString() + ", Rating: " + this.rating.toString() + "\n";
    };
