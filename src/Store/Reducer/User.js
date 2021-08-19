const initialState={
    user:null
};

export const reducer=(state=initialState, action)=>{
    switch(action.type){
        case "ADD_USER":
          return{
              user:action.user,
          };
          default:
              return state;
    };
};


export default reducer;