//define constructor function for movie object

//object type Movie contains 2 properties and 2 methods
  let Movie =function(moviename, rating) {  
  this.name = moviename;
  this.rating = rating;
  //declare methods (toString and Validate)
  this.toString = function ()
  {
    return  this.name + " " + this.rating + "\n";
  };

  this.validate = function() 
  {
    if (this.name === "" || this.rating === ""){
      return false;
    }
    else{
      return true;
    }
  };

}
