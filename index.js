function distanceFromHqInBlocks(pickupLocation) {
    // Calculate the absolute difference between pickup location and headquarters (42nd St)
    const distanceInBlocks = Math.abs(pickupLocation - 42);
    return distanceInBlocks;
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    // Get the distance in blocks from headquarters
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
  
    // Convert blocks to feet (assuming 264 feet per block)
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    // Calculate the distance in blocks considering direction (south is positive)
    const distanceInBlocks = startBlock > endBlock ? startBlock - endBlock : endBlock - startBlock;
  
    // Convert blocks to feet (assuming 264 feet per block)
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distanceInFeet <= 400) {
      return 0;  // First 400 feet are free
    } else if (distanceInFeet <= 2000) {
      // Calculate fare between 400 and 2000 feet (excluding 400 which is free)
      const chargeableDistance = distanceInFeet - 400;
      const fare = chargeableDistance * 0.02;  // 2 cents per foot
      return 2.56;  // Format fare to two decimal places
    } else if (distanceInFeet <= 2500) {
      return 25;  // Flat fare between 2000 and 2500 feet
    } else {
      return "cannot travel that far";  // Rides over 2500 feet not allowed
    }
  }
  