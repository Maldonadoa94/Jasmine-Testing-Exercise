
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 42000,
    years: 6,
    rate: 8
  };
  expect(calculateMonthlyPayment(values)).toEqual('736.40');
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 12345,
    years: 6,
    rate: 1
  };
  expect(calculateMonthlyPayment(values)).toEqual('176.72');
});

it("it should be able to calculate extremely high values", function() {
  const values = {
    amount: 999999,
    years: 1,
    rate: 87
  };
  expect(calculateMonthlyPayment(values)).toEqual('127584.57');
});
/// etc
