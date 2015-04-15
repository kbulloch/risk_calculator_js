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

    it("will return a risk of 'Heart Disease', 'Obesity' for a patient with bad diet and exercise", function() {
      var newPatient = Object.create(Patient);
      newPatient.diet = 1;
      newPatient.exercise = 1;
      newPatient.smokes = 0;
      newPatient.blood_pressure = 0;
      newPatient.cancer_history = 0;
      expect(newPatient.getRisky()).to.eql(['Heart Disease', 'Obesity']);
    });

    it("will return a risk of 'Heart Disease' for a patient with high blood pressure", function() {
      var newPatient = Object.create(Patient);
      newPatient.diet = 0;
      newPatient.exercise = 0;
      newPatient.smokes = 0;
      newPatient.blood_pressure = 1;
      newPatient.cancer_history = 0;
      expect(newPatient.getRisky()).to.eql(['Heart Disease']);
    });

    it("will return a risk of 'Cancer'", function() {
      var newPatient = Object.create(Patient);
      newPatient.diet = 0;
      newPatient.exercise = 0;
      newPatient.smokes = 0;
      newPatient.blood_pressure = 0;
      newPatient.cancer_history = 1;
      expect(newPatient.getRisky()).to.eql(['Cancer']);
    });

    it("will return a risk of 'Cancer', 'Heart Disease'", function() {
      var newPatient = Object.create(Patient);
      newPatient.diet = 0;
      newPatient.exercise = 1;
      newPatient.smokes = 1;
      newPatient.blood_pressure = 0;
      newPatient.cancer_history = 0;
      expect(newPatient.getRisky()).to.eql(['Cancer', 'Heart Disease']);
    });

    it("will return a risk of 'Diabetes'", function() {
      var newPatient = Object.create(Patient);
      newPatient.diet = 1;
      newPatient.exercise = 0;
      newPatient.smokes = 0;
      newPatient.blood_pressure = 0;
      newPatient.cancer_history = 0;
      expect(newPatient.getRisky()).to.eql(['Diabetes']);
    });

    it("will return a risk of 'Cancer', 'Heart Disease', 'Obesity'", function() {
      var newPatient = Object.create(Patient);
      newPatient.diet = 1;
      newPatient.exercise = 1;
      newPatient.smokes = 0;
      newPatient.blood_pressure = 0;
      newPatient.cancer_history = 1;
      expect(newPatient.getRisky()).to.eql(['Cancer', 'Heart Disease', 'Obesity']);
    });
  });

});
