let _confirmation = null

export const setConfirmation = conf => {
  _confirmation = conf
}

export const getConfirmation = () => _confirmation

export default {
  setConfirmation,
  getConfirmation,
}
