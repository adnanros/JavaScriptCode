function* counter() {
    let count = 0;
    while (true) {
      console.log('count', count)  
      const increment = yield count; // Pause Here until the next time that next() is called
      console.log('increment', increment);
      count += increment !== undefined ? increment : 1;
    }
  }
  
  const counterGen = counter();
  
  console.log(counterGen.next().value); // 0
  console.log(counterGen.next(2).value); // 2
  console.log(counterGen.next(3).value); // 5
  console.log(counterGen.next().value); // 6
  