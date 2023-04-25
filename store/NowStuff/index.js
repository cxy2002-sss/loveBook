const state={
	nowStuff:[]
}
const mutations={
	GETNOWSTUFF(state,nowStuff){
		state.nowStuff=nowStuff
	}
}
const actions={
	getNowStuff({commit},id){
		const db=uniCloud.database()
		db.collection("Stuff").where("user_id==$cloudEnv_uid").get().then((res)=>{
			res.result.data[0].item.forEach((item)=>{
				if(item.id==id){
					commit("GETNOWSTUFF",item)
				}
			})
		})
	}
}
const getters={}
export default{
	state,
	mutations,
	actions,
	getters
}