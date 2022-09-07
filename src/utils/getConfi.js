let getConfi = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
})

export default getConfi