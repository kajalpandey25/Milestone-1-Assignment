function billSplitter(dishCost, numPeople) {
    let totalCost = 0;
    for (let cost of dishCost) {
      totalCost += cost;
    }
    const costPerPerson = totalCost / numPeople;
    return {
      totalBill: totalCost,
      billPerPerson: costPerPerson,
    };
  }
  const dishCost = [10, 15, 20, 5];
  const numPeople = 75;
  const bill = billSplitter(dishCost, numPeople);
  console.log(bill);
  