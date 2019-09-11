
import query  from './sessions';

export const getMentors = async() =>{
    const getMentor = `SELECT * FROM users WHERE mentor= 'true'`;
    try{
        const { rows } = await query(getMentor);
        return rows;
    }catch(error){
        return error;
    }
}
export const getOneMentor = async(id)=>{
	const oneMentor = `SELECT * FROM users WHERE id = $1 AND mentor= 'true'`;
	const ids = [id];
	try{
		const { rows } = await query(oneMentor, ids);
		return rows[0];
	}catch(error){
		return error;
	}
}

