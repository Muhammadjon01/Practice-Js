function student(_name, _course, _year){
    let name=_name,
    course=_course,
    year=_year
 
    function getname(){
     return _name
 }
 
    function setname(newName){
     _name=newName;
     return newName;
    }

    function setcourse(newcourse){
        _course=newcourse
        return newcourse
    }

   function getcourse(){
    return _course
    }
 
    return{
     getname,
     setname,
     getcourse,
     setcourse
    }
    
 }
 
 let Student=new student("Muhammad", "Second",22)
 
 let Student1=new student("Muhammad", "Thirds",22)
 Student1.setcourse("Five")
 console.log(Student1.getcourse())