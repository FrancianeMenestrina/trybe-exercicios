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
  const addNewKey = (object, key, value) => {
    object[key] = value;
  };
  addNewKey(lesson2, "turno", "noite");
  console.log(lesson2);
