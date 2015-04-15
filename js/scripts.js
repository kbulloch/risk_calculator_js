var Patient = {
  getRisky: function() {

    if(this.diet === 1) {
      return ["Obesity"];
    }
    if (this.blood_pressure === 1) {
      return ["Heart Disease"];
    }
    if (this.cancer_history === 1) {
      return ["Cancer"];
    }
    return ["Healthy"];
  }
};

$(document).ready(function() {


});
