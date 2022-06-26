function student(_name, _course, _age) {
  let name = _name,
    course = _course,
    age = _age;

  function getname() {
    return _name;
  }

  function setname(newName) {
    _name = newName;
    return newName;
  }

  function setcourse(newcourse) {
    _course = newcourse;
    return newcourse;
  }

  function getcourse() {
    return _course;
  }

  function setage(newage) {
    _age = newage;
    return newage;
  }

  function getage(newage) {
    return _age;
  }

  return {
    getname,
    setname,
    getcourse,
    setcourse,
    getage,
    setage,
  };
}

let Student = new student("Muhammad", "Second", 22);

let Student1 = new student("Muhammad", "Thirds", 22);

Student1.setcourse("Five");
Student1.setage(21);
console.log(Student1.getage());