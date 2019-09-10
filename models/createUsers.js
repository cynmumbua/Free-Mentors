import query  from './sessions';

const signup = async (data) => {
  const createQuery = `INSERT INTO
      users(firstName,lastName,email,password,address,bio,occupation,expertise,mentor)
	      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
	      returning *`;
	    const values = [
	      data.firstName,
	      data.lastName,
	      data.email,
	      data.password,
	      data.address,
	      data.occupation,
	      data.bio,
	      data.expertise,
	      data.mentor
	    ];
  try {
    const { rows } = await query(createQuery, values);
    return rows[0];
  } catch (error) {
    throw error;
  }
};


const getUser = async(email) =>{
    const getUser = `SELECT * FROM users WHERE email = $1`;
    const emails = [email];
    try{
        const { rows } = await query(getUser, emails);
        return rows[0];
    } catch(error){
        return error;
    }
}
// const getMentors = async(mentor) =>{
//     const getMentors = `SELECT id FROM users WHERE mentor = 'true'`;
//     const mentors = [mentor];
//     try{
//         const { rows } = await query(getMentors, mentors);
//         return rows[0];
//     } catch(error){
//         return error;
//     }
// }

const userData =(data)=>{
	const userData = `SELECT * FROM users`
}
const getMentors = async(mentor) => {
    const getMentors = `SELECT * FROM users WHERE mentor = 'true'`;
    try {
      const { rows, rowCount } = await db.query(getMentors);
      return { rows, rowCount };
    } catch(error) {
      return error;
    }
  }
  
// const getOneMentor =async (request, response) {
//     const text = 'SELECT * FROM reflections WHERE id = $1';
//     try {
//       const { rows } = await db.query(text, [req.params.id]);
//       if (!rows[0]) {
//         return res.status(404).send({'message': 'reflection not found'});
//       }
//       return res.status(200).send(rows[0]);
//     } catch(error) {
//       return res.status(400).send(error)
//     }
//   },

module.exports= { signup, getUser, userData, getMentors };


