
import query  from './sessions';

const getMentors = async() =>{
    const getMentor = `SELECT * FROM users WHERE mentor= 'true'`;
    try{
        const { rows } = await query(getMentor);
        return rows;
    } catch(error){
        return error;
    }
}


module.exports= getMentors;