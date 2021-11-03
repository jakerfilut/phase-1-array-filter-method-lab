// Code your solution here
// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];

function findMatching(drivers, name){
    const result = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return result;
}

function fuzzyMatch(drivers, letters){
    const result = drivers.filter(driver => driver.startsWith(letters));
    return result;
}

function matchName(drivers, string){
    const results = drivers.filter(driver => driver.name === string);
    return results;
}