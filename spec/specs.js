describe('Patient',function() {

  describe("getRisky()", function() {
    it("will return a risk of 'Healthy' for a normal healthy person", function() {
      var newPatient = Object.create(Patient);
      newPatient.diet = 0;
      newPatient.exercise = 0;
      newPatient.smokes = 0;
      newPatient.blood_pressure = 0;
      newPatient.cancer_history = 0;
      expect(newPatient.getRisky()).to.eql(['Healthy']);
    });

    it("will return a risk of 'Obesity' for a normal healthy person", function() {
      var newPatient = Object.create(Patient);
      newPatient.diet = 1;
      newPatient.exercise = 0;
      newPatient.smokes = 0;
      newPatient.blood_pressure = 0;
      newPatient.cancer_history = 0;
      expect(newPatient.getRisky()).to.eql(['Obesity']);
    });

    it("will return a risk of 'Heart Disease' for a normal healthy person", function() {
      var newPatient = Object.create(Patient);
      newPatient.diet = 0;
      newPatient.exercise = 0;
      newPatient.smokes = 0;
      newPatient.blood_pressure = 1;
      newPatient.cancer_history = 0;
      expect(newPatient.getRisky()).to.eql(['Heart Disease']);
    });

    it("will return a risk of 'Cancer' for a normal healthy person", function() {
      var newPatient = Object.create(Patient);
      newPatient.diet = 0;
      newPatient.exercise = 0;
      newPatient.smokes = 0;
      newPatient.blood_pressure = 0;
      newPatient.cancer_history = 1;
      expect(newPatient.getRisky()).to.eql(['Cancer']);
    });
  });

});
