import asyncHandler from 'express-async-handler';

// @desc Auth user/
// @route POST api/user/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
  res.status(505);
  throw new Error('somrthin went wrong');

  return res.status(200).send('Auth User');
});

export { authUser };
