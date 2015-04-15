var Patient = {
  getRisky: function() {

    var risks = [];

    if (this.diet === 1 && this.exercise === 1) {
      risks.push("Obesity");
      risks.push("Heart Disease");
    }
    else if (this.diet === 1) {
      risks.push("Diabetes");
    }
    if (this.blood_pressure === 1) {
      risks.push("Heart Disease");
    }
    if (this.cancer_history === 1) {
      risks.push("Cancer");
    }
    if (this.smokes === 1) {
      risks.push("Heart Disease", "Cancer");
    }
    if (risks.length === 0) {
      risks.push("Healthy");
    }
    return risks.sort();
  }
};

$(document).ready(function() {


});
