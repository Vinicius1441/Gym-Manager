module.exports = {
  age: function (timestamp) {
    const today = new Date(); // data de hoje com o new Date()
    const birthDate = new Date(timestamp); // data do aniversário da pessoa quando passa o timestamp como parâmetro

    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month == 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  },
};
