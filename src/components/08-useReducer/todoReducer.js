export const todoReducer = ( state = [], action )=>{

    switch(action.type){
        
        case 'add':
            return [...state, action.payload ];
        
        case 'delete':
            return state.filter( todo => todo.id !== action.payload );

        case 'toggle':
            return state.map( todo =>
                ( todo.id === action.payload )
                    ?{ ...todo, done: !todo.done}
                    :todo
            );
        
        
        case 'toggle-old':
            return state.map( todo =>{

                if( todo.id === action.payload){
                    console.log("se encontro")
                    return {
                        ...todo,
                        done: !todo.done 
                    };
                }else{
                    console.log("No se encontro")
                    return todo;
                }

            })
    

        default:
            return state;

    }

}