require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: [],
    merge_date: new Date().toString('M/d/yyyy')
  };

  for (let i = 0; i < args.length; i++) {
    combinedObject.users = combinedObject.users.concat(args[i]);
  }

  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
