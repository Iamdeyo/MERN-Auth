// @desc Auth user/
// @route POST api/user/auth
// @access public
const authUser = (req, res) => {
  return res.status(200).send('Auth User');
};

export { authUser };
