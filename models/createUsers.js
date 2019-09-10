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
  


module.exports= { signup, getUser };


