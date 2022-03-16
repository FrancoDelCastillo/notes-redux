const STATE_MODAL = 'STATE_MODAL'

export const openModalAction = (boolean) =>{
    return {
        type:STATE_MODAL,
        payload: boolean
    }
}