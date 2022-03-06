const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   function addNewKey(object, key, value) {

//   }

  const addNewKey = (objeto, key, value) => { 
      objeto[key] = value;}
  addNewKey(lesson2, "turno", "noite");
  console.log(lesson2);



  const showKey = (objeto) => { 
      Object.keys(objeto);
      return  Object.keys(objeto);
  }
  console.log(showKey(lesson2));


  const showLength = (objeto) => { 
      Object.keys(objeto).length;
    return Object.keys(objeto).length;
  }
  console.log(showLength(lesson2));


  const showValues = (objeto) => { 
      Object.values(objeto);
      return Object.values(objeto);
  }
   console.log(showValues(lesson2));

  
   const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
   console.log(allLessons);

