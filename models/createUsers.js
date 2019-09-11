import query  from './sessions';

export const signup = async (data) => {
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
}


export const getUser = async(email) =>{
    const getUser = `SELECT * FROM users WHERE email = $1`;
    const emails = [email];
    try{
        const { rows } = await query(getUser, emails);
        return rows[0];
    } catch(error){
        return error;
    }
}
export const selectUser = async(id) =>{
  const selectUser = `SELECT * FROM users WHERE id = $1 AND mentor= 'false'`;
  const ids = [id];

  try{
    const {rows} = await query(selectUser, ids);
    return rows[0];
  }catch(error){
    return error;
  }
}


export const upgradeMentor = async(id)=>{
      const upgradeMentor = `UPDATE users SET mentor= 'true' WHERE id = $1 AND mentor='false'`;
      const upgradedUser = ` SELECT * FROM users WHERE id = $1`;
      const ids = [id];

      try{
        const upgradeUserQuery = await query(upgradeMentor, ids);
        const { rows } =await query(upgradedUser, ids);
        return rows[0];
      }catch(error){
        return error;
      }
}

export const selectMentor = async(id) =>{
  const selectMentor = `SELECT * FROM users WHERE id = $1 AND mentor= 'true'`;
  const ids = [id];

  try{
    const {rows} = await query(selectMentor, ids);
    return rows[0];
  }catch(error){
    return error;
  }
}
  
export const sessions = async (data) => {
  console.log(data);
  const createQuery = `INSERT INTO
      sessions(mentorId, menteeId, questions, menteeEmail, status)
        VALUES($1, $2, $3, $4, $5)
        returning *`;
      const values = [
        data.mentorId,
        data.menteeId,
        data.questions,
        data.menteeEmail,
        data.status
      ];
  try {
    const { rows } = await query(createQuery, values);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

export const selectAllUser = async(mentor) =>{
  const selectAllUser = `SELECT * FROM users WHERE mentor= 'false'`;
  const mentors = [mentor];

  try{
    const {rows} = await query(selectAllUser, mentors);
    return rows[0];
  }catch(error){
    return error;
  }
}


